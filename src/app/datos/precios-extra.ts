/* Precios complementarios del negocio (Madrid, 2026). Solo para lo que el catálogo no recoge. */

/** Servicio mínimo: incluye el desplazamiento dentro de Madrid capital. */
export const SERVICIO_MINIMO = 40;

export const NOTA_PRECIOS =
  'Precios orientativos con IVA incluido. Te damos un precio cerrado antes de ir.';

export interface PrecioExtra {
  concepto: string;
  detalle?: string;
  precio: string;
}

export const PRECIO_HORA = '30–40 €/h';
export const PRECIO_COLGAR_TV = 40;
export const PRECIO_BALDAS = 30;
export const DESMONTAJE = '50–60 %';

/** Tabla complementaria que se muestra en /precios. */
export const PRECIOS_EXTRA: PrecioExtra[] = [
  {
    concepto: 'Servicio mínimo',
    detalle: 'Incluye el desplazamiento en Madrid capital',
    precio: `${SERVICIO_MINIMO} €`,
  },
  {
    concepto: 'Desplazamiento a municipios del área metropolitana',
    detalle: 'Según la distancia',
    precio: '0–15 €',
  },
  { concepto: 'Trabajos a medida o por horas', precio: PRECIO_HORA },
  { concepto: 'Colgar la TV en la pared', detalle: 'Con el soporte que nos des', precio: `desde ${PRECIO_COLGAR_TV} €` },
  { concepto: 'Colgar baldas, cuadros o espejos', detalle: 'Hasta 5 piezas', precio: `desde ${PRECIO_BALDAS} €` },
  { concepto: 'Desmontar un mueble', precio: `${DESMONTAJE} del precio de montaje` },
  { concepto: 'Fijar el mueble a la pared (antivuelco)', precio: 'Incluido en el montaje' },
];

/** Armario PAX con puertas correderas (no está en el catálogo como servicio propio). */
export const PRECIO_PAX_CORREDERAS = 150;

/* ---------- Página de precios ---------- */

/** Grupos de la tabla de /precios. Los precios salen siempre del catálogo. */
export const GRUPOS_PRECIOS: { nombre: string; icono: number; ids: number[] }[] = [
  { nombre: 'Cocinas', icono: 2, ids: [1, 2, 3, 4] },
  { nombre: 'Armarios', icono: 5, ids: [5, 6, 7] },
  { nombre: 'Dormitorio', icono: 9, ids: [8, 9, 10] },
  { nombre: 'Salón', icono: 11, ids: [11, 12] },
  { nombre: 'Comedor y escritorio', icono: 13, ids: [13, 14] },
  { nombre: 'Estanterías y almacenaje', icono: 15, ids: [15, 16, 17] },
  { nombre: 'Baño', icono: 18, ids: [18] },
  { nombre: 'Electrodomésticos', icono: 19, ids: [19] },
  { nombre: 'Varios muebles', icono: 20, ids: [20] },
];

/** Lo que hace subir o bajar el precio. */
export const FACTORES_PRECIO: { titulo: string; texto: string }[] = [
  { titulo: 'Tamaño', texto: 'Un mueble grande lleva más piezas y más tiempo que uno pequeño.' },
  {
    titulo: 'Puertas y cajones',
    texto: 'Cada puerta y cada cajón se monta y se ajusta: cuantos más haya, más trabajo.',
  },
  { titulo: 'Hasta el techo', texto: 'Los armarios hasta el techo necesitan más ajuste y más manos.' },
  {
    titulo: 'Fijarlo a la pared',
    texto: 'La fijación antivuelco va incluida, pero depende del tipo de pared.',
  },
  {
    titulo: 'Planta sin ascensor',
    texto: 'Subir piezas pesadas por la escalera lleva más tiempo y esfuerzo.',
  },
  {
    titulo: 'Desmontar antes',
    texto: 'Si hay que desmontar un mueble viejo, se suma un 50–60 % de su precio de montaje.',
  },
];
