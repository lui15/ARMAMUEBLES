/* Reseñas de clientes en nuestra ficha de Google, copiadas completas y sin editar: no cambies
   el texto ni las estrellas. Añade aquí solo reseñas reales de la ficha. No se añaden al schema (Review / AggregateRating): Google no muestra
   estrellas de opiniones que una empresa publica sobre sí misma. */

export type FiltroOpinion =
  | 'Armarios'
  | 'Salón'
  | 'Dormitorio'
  | 'Comedor'
  | 'Estanterías'
  | 'A medida';

export interface Opinion {
  estrellas: number;
  /** Nombre tal y como lo dio el cliente. En la web se muestra el nombre y la inicial. */
  nombre: string;
  texto: string;
  /** Qué se montó, para la tarjeta. */
  servicio: string;
  /** Categoría del filtro de /opiniones. Sin ella, aparece solo en "Todas". */
  filtro?: FiltroOpinion;
  /** Páginas donde se muestra, por su path ('' es la portada). */
  paginas: string[];
  /** Se muestra solo si se rellena. No inventar fechas. */
  fecha?: string;
  /** Opinión general, sin un servicio concreto: se usa en páginas sin opiniones propias. */
  general?: boolean;
}

export const OPINIONES: Opinion[] = [
  {
    estrellas: 5,
    nombre: 'Estefany Cairazco',
    texto:
      'Excelente servicio, quedé muy contenta con el resultado. Fueron muy profesionales, puntuales y cuidadosos con cada detalle. El montaje de los muebles quedó perfecto, todo bien armado y organizado. Se nota la experiencia y la dedicación en su trabajo. Sin duda, los recomiendo al 100 %. ¡Muchas gracias por el excelente servicio!',
    servicio: 'Montaje de muebles',
    paginas: ['', 'opiniones'],
    fecha: 'noviembre de 2026',
    general: true,
  },
];

export const FILTROS_OPINIONES: FiltroOpinion[] = [
  'Armarios',
  'Salón',
  'Dormitorio',
  'Comedor',
  'Estanterías',
  'A medida',
];

export const NOTA_OPINIONES =
  'Son reseñas que nuestros clientes han dejado en nuestra ficha de Google, copiadas completas y sin editar.';

/** Ficha de Google del negocio: cada enlace rellenado muestra su botón. */
const FICHA_GOOGLE = 'https://maps.google.com/?cid=5922403047880842944';
export const PERFIL_GOOGLE = {
  verOpiniones: FICHA_GOOGLE,
  escribirOpinion: FICHA_GOOGLE,
};

/** "Carlos Gutiérrez" → "Carlos G.". Si ya viene con inicial, se deja igual. */
export function nombreVisible(nombre: string): string {
  const [pila, ...resto] = nombre.trim().split(/\s+/);
  return resto.length ? `${pila} ${resto[0].charAt(0)}.` : pila;
}

/** Opiniones de una página; si no tiene propias, las dos primeras generales. */
export function opinionesDe(path: string, conRespaldo = true): Opinion[] {
  const propias = OPINIONES.filter((o) => o.paginas.includes(path));
  if (propias.length || !conRespaldo) return propias;
  return OPINIONES.filter((o) => o.general).slice(0, 2);
}

/** "1 opinión", "3 opiniones". */
export function textoOpiniones(total: number): string {
  return `${total} ${total === 1 ? 'opinión' : 'opiniones'}`;
}

/** Resumen calculado: media con una cifra decimal ("5,0"), total y el total en texto. */
export function resumenOpiniones(): { media: string; total: number; texto: string } {
  const total = OPINIONES.length;
  const media = total ? OPINIONES.reduce((t, o) => t + o.estrellas, 0) / total : 0;
  return {
    media: media.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    total,
    texto: textoOpiniones(total),
  };
}
