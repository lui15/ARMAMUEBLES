import { ID_SOLO_ELECTRO, Servicio, servicioPorId } from '../datos/catalogo';
import { SERVICIO_MINIMO } from '../datos/precios-extra';

export type TipoId =
  | 'armario'
  | 'cocina'
  | 'dormitorio'
  | 'salon'
  | 'mesa'
  | 'estanteria'
  | 'bano'
  | 'electro'
  | 'otro';

export interface Subtipo {
  id: string;
  nombre: string;
  /** Servicio del catálogo del que sale su precio. */
  servicioId: number;
}

export interface TipoMueble {
  id: TipoId;
  nombre: string;
  /** Pictograma de IconoMueble. */
  icono: number;
  /** Servicios del catálogo que cubre: su precio "desde" es el más bajo de ellos. */
  ids: number[];
  subtipos?: Subtipo[];
}

/** Tarjetas del paso 1. Todos los precios salen de catalogo.ts. */
export const TIPOS: TipoMueble[] = [
  {
    id: 'armario',
    nombre: 'Armario',
    icono: 5,
    ids: [5, 6, 7],
    subtipos: [
      { id: 'abatibles', nombre: 'Puertas abatibles', servicioId: 5 },
      { id: 'correderas', nombre: 'Correderas', servicioId: 6 },
      { id: 'vestidor', nombre: 'Vestidor', servicioId: 7 },
    ],
  },
  {
    id: 'cocina',
    nombre: 'Cocina',
    icono: 2,
    ids: [1, 2, 3, 4],
    subtipos: [
      { id: 'pequena', nombre: 'Pequeña (hasta 6 módulos)', servicioId: 1 },
      { id: 'mediana', nombre: 'Mediana', servicioId: 2 },
      { id: 'grande', nombre: 'Grande', servicioId: 3 },
      { id: 'isla', nombre: 'Con isla', servicioId: 4 },
    ],
  },
  { id: 'dormitorio', nombre: 'Cama o dormitorio', icono: 9, ids: [8, 9, 10] },
  { id: 'salon', nombre: 'Salón o mueble de TV', icono: 11, ids: [11, 12] },
  { id: 'mesa', nombre: 'Mesa, sillas o escritorio', icono: 13, ids: [13, 14] },
  { id: 'estanteria', nombre: 'Estantería', icono: 15, ids: [15, 16, 17] },
  { id: 'bano', nombre: 'Mueble de baño', icono: 18, ids: [18] },
  { id: 'electro', nombre: 'Electrodomésticos', icono: ID_SOLO_ELECTRO, ids: [ID_SOLO_ELECTRO] },
  { id: 'otro', nombre: 'Otro', icono: 20, ids: [] },
];

export const tipoPorId = (id: TipoId): TipoMueble => TIPOS.find((t) => t.id === id)!;

const precioServicio = (id: number): number => servicioPorId(id)?.precioDesde ?? 0;

/** Precio "desde" de un tipo, o del subtipo elegido. Null si no hay precio (Otro). */
export function precioDesdeTipo(tipo: TipoMueble, subtipo?: string | null): number | null {
  const sub = tipo.subtipos?.find((s) => s.id === subtipo);
  if (sub) return precioServicio(sub.servicioId);
  return tipo.ids.length ? Math.min(...tipo.ids.map(precioServicio)) : null;
}

export interface ElementoSeleccion {
  tipo: TipoId;
  cantidad: number;
  subtipo: string | null;
}

export interface Estimacion {
  total: number;
  /** El total de los muebles no llega al servicio mínimo y se muestra el mínimo. */
  minimoAplicado: boolean;
  lineas: { nombre: string; cantidad: number; importe: number | null }[];
}

export function estimar(seleccion: ElementoSeleccion[]): Estimacion {
  const lineas = seleccion.map((e) => {
    const tipo = tipoPorId(e.tipo);
    const unidad = precioDesdeTipo(tipo, e.subtipo);
    const sub = tipo.subtipos?.find((s) => s.id === e.subtipo);
    return {
      nombre: sub ? `${tipo.nombre} · ${sub.nombre}` : tipo.nombre,
      cantidad: e.cantidad,
      importe: unidad === null ? null : unidad * e.cantidad,
    };
  });
  const suma = lineas.reduce((t, l) => t + (l.importe ?? 0), 0);
  return {
    total: Math.max(suma, SERVICIO_MINIMO),
    minimoAplicado: suma < SERVICIO_MINIMO,
    lineas,
  };
}

/** Qué tarjeta corresponde a un servicio del catálogo (para abrir el formulario ya elegido). */
export function seleccionDeServicio(servicio: Servicio): { tipo: TipoId; subtipo?: string } {
  for (const tipo of TIPOS) {
    const sub = tipo.subtipos?.find((s) => s.servicioId === servicio.id);
    if (sub) return { tipo: tipo.id, subtipo: sub.id };
    if (tipo.ids.includes(servicio.id)) return { tipo: tipo.id };
  }
  return { tipo: 'otro' };
}

const POR_CATEGORIA: Record<string, TipoId> = {
  Cocinas: 'cocina',
  Armarios: 'armario',
  Salón: 'salon',
  Dormitorio: 'dormitorio',
  Almacenamiento: 'estanteria',
  'Mesas y auxiliares': 'mesa',
};

export const tipoDeCategoria = (categoria?: string): TipoId | null =>
  (categoria && POR_CATEGORIA[categoria]) || null;

/** Datos con los que puede abrirse el formulario ya rellenado. */
export interface Prefill {
  tipos?: { tipo: TipoId; subtipo?: string }[];
  tienda?: string;
  zona?: string;
}
