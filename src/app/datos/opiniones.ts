/* Opiniones enviadas por clientes. Se publican completas y sin editar: no cambies el texto
   ni las estrellas. No se añaden al schema (Review / AggregateRating): Google no muestra
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
    nombre: 'Carlos Gutiérrez',
    texto:
      'Excelente servicio. Montaron un armario de seis puertas enorme en menos tiempo del previsto y todo quedó perfectamente nivelado.',
    servicio: 'Montaje de armario',
    filtro: 'Armarios',
    paginas: ['montaje-armarios-madrid', 'montaje-armarios-pax'],
  },
  {
    estrellas: 5,
    nombre: 'Laura M.',
    texto:
      'Muy puntuales y limpios. Montaron todos los muebles del salón de IKEA sin dejar ni una caja ni plástico por medio.',
    servicio: 'Muebles de salón de IKEA',
    filtro: 'Salón',
    paginas: ['montaje-muebles-ikea-madrid', 'montaje-salones-madrid'],
  },
  {
    estrellas: 5,
    nombre: 'Javier Fernández',
    texto:
      'Muy profesionales. Tenía una estantería complicada y con instrucciones confusas, pero la dejaron impecable y súper firme.',
    servicio: 'Montaje de estantería',
    filtro: 'Estanterías',
    paginas: ['montaje-estanterias-madrid'],
  },
  {
    estrellas: 5,
    nombre: 'Elena Sanz',
    texto:
      'Trato de diez. Cuidaron el suelo y las paredes al mover las piezas pesadas. 100% recomendables para cualquier montaje.',
    servicio: 'Montaje de muebles',
    paginas: ['', 'como-trabajamos'],
    general: true,
  },
  {
    estrellas: 5,
    nombre: 'Roberto G.',
    texto:
      'Rápidos, eficientes y muy educados. Me ahorraron horas de dolor de cabeza armando el vestidor.',
    servicio: 'Montaje de vestidor',
    filtro: 'Armarios',
    paginas: ['montaje-vestidores-madrid', 'montaje-armarios-madrid'],
  },
  {
    estrellas: 4,
    nombre: 'Marta Prieto',
    texto:
      'Buen trabajo en general. Llegaron 15 minutos tarde por el tráfico, pero lo compensaron trabajando a buen ritmo y dejando todo perfecto.',
    servicio: 'Montaje de muebles',
    paginas: [''],
    general: true,
  },
  {
    estrellas: 5,
    nombre: 'David Alarcón',
    texto:
      'Servicio impecable. Montaron la mesa del comedor y 8 sillas en un momento. Se nota que tienen mucha experiencia.',
    servicio: 'Mesa de comedor y sillas',
    filtro: 'Comedor',
    paginas: ['montaje-mesas-escritorios-madrid'],
  },
  {
    estrellas: 5,
    nombre: 'Patricia R.',
    texto:
      'Súper satisfechas con el montaje del dormitorio infantil. Dejaron los cajones y puertas ajustados al milímetro.',
    servicio: 'Dormitorio infantil',
    filtro: 'Dormitorio',
    paginas: ['montaje-dormitorios-madrid', 'montaje-camas-canapes-madrid'],
  },
  {
    estrellas: 5,
    nombre: 'Gonzalo Ramos',
    texto:
      'Respuesta rápida y presupuesto claro desde el primer momento. El montador fue muy meticuloso y profesional.',
    servicio: 'Montaje de muebles',
    paginas: ['precios', ''],
    general: true,
  },
  {
    estrellas: 5,
    nombre: 'Beatriz López',
    texto:
      'Sin duda los volveré a llamar. Armaron un mueble a medida que requería varios ajustes y quedó de revista.',
    servicio: 'Mueble a medida',
    filtro: 'A medida',
    paginas: ['montaje-muebles-a-medida-madrid', 'montaje-cocinas-madrid'],
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
  'Opiniones enviadas por clientes que contrataron el montaje. Las publicamos completas, sin editar.';

/**
 * Perfil de Google del negocio. Vacío mientras no exista: al rellenar cada enlace, aparece
 * solo su botón ("Ver opiniones en Google" y "Escribir mi opinión").
 */
export const PERFIL_GOOGLE = {
  verOpiniones: '',
  escribirOpinion: '',
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

/** Resumen calculado: media con una cifra decimal y total. */
export function resumenOpiniones(): { media: string; total: number } {
  const total = OPINIONES.length;
  const media = OPINIONES.reduce((t, o) => t + o.estrellas, 0) / total;
  return { media: media.toLocaleString('es-ES', { maximumFractionDigits: 1 }), total };
}
