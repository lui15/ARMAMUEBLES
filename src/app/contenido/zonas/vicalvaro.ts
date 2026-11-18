import { ZonaContenido } from './tipos';

export const VICALVARO: ZonaContenido = {
  slug: 'vicalvaro',
  nombre: 'Vicálvaro',
  tipo: 'distrito',
  frase: 'Del casco antiguo a Valdebernardo, Valderrivas y El Cañaveral.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Trato cercano'],
  intro:
    'Montamos muebles en Vicálvaro, un distrito que fue pueblo independiente hasta 1951 y que hoy suma barrios nuevos en pleno crecimiento. Muchos de nuestros montajes aquí son de casas recién estrenadas.',
  barrios: ['Casco histórico de Vicálvaro (con Ambroz)', 'Valdebernardo', 'Valderrivas', 'El Cañaveral'],
  viviendas: [
    'El casco histórico conserva el trazado del antiguo municipio, con calles más cortas y edificios de distintas alturas. Alrededor, Valdebernardo se construyó sobre todo en los años 90 y Valderrivas a partir de 1998, sobre los terrenos de una antigua cementera.',
    'El Cañaveral empezó sus obras en 2006 y sigue completándose, con miles de viviendas previstas, la mitad públicas. Y al sur esperan Los Berrocales, Los Ahijones y Los Cerros, todavía en urbanización. Son pisos nuevos donde se montan cocinas completas, armarios y dormitorios desde cero.',
  ],
  accesos:
    'Vicálvaro se conecta con la M-40, la A-3, la M-45 y la R-3, y por la M-203 con Mejorada del Campo y Alcalá de Henares. La línea 9 de metro para en Valdebernardo, Vicálvaro, San Cipriano y Puerta de Arganda, y la estación de Cercanías de Vicálvaro tiene las líneas C-2, C-7 y C-8.',
  aparcamiento:
    'En los barrios nuevos suele haber calles anchas y sitio para parar, aunque en El Cañaveral todavía hay obras alrededor de algunas manzanas. En el casco histórico las calles son más estrechas: si conoces un buen punto de descarga, nos ahorra vueltas.',
  dificultades: [
    {
      titulo: 'Barrios en obras',
      texto:
        'En El Cañaveral algunas calles cambian con el avance de las obras y no siempre aparecen bien en el navegador. Mándanos la ubicación exacta del portal o una referencia cercana.',
    },
    {
      titulo: 'Montajes grandes de golpe',
      texto:
        'Al estrenar casa se juntan cocina, armarios, camas y salón. Elige todos los muebles en el formulario: así lo organizamos en una o varias visitas con una sola persona de contacto.',
    },
  ],
  proceso:
    'Nos dices qué hay que montar y la dirección, y si es una casa nueva, si ya tienes las llaves y los muebles en casa. Te damos un presupuesto ajustado, acordamos el día y montamos por estancias, empezando por lo que más prisa te corre.',
  consejos: [
    'Envía la ubicación exacta del portal',
    'Empieza por la cocina y los dormitorios',
    'Comprueba que han llegado todas las cajas',
    'Pide todo en la misma solicitud',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en El Cañaveral?',
      respuesta: 'Sí. Montamos en El Cañaveral y en el resto de barrios de Vicálvaro. Si tu calle es nueva, mándanos la ubicación por WhatsApp.',
    },
    {
      pregunta: 'Acabo de recibir el piso, ¿montáis todo?',
      respuesta: 'Sí: cocina, armarios, camas, salón y lo que necesites. Elige todos los muebles en el formulario.',
    },
    {
      pregunta: '¿Montáis también en Valdebernardo y Valderrivas?',
      respuesta: 'Sí, en los cuatro barrios del distrito: casco histórico, Valdebernardo, Valderrivas y El Cañaveral.',
    },
    {
      pregunta: '¿Podéis venir en varios días?',
      respuesta: 'Si el montaje es grande, lo organizamos contigo. Te atiende la misma persona de contacto todo el tiempo.',
    },
    {
      pregunta: '¿Vais a Los Berrocales o Los Ahijones?',
      respuesta: 'Sí, en cuanto haya viviendas entregadas. Indícanos la calle y el portal al pedir presupuesto.',
    },
  ],
  cerca: ['moratalaz', 'san-blas', 'coslada', 'rivas-vaciamadrid'],
  servicios: ['montaje-dormitorios-madrid', 'montaje-armarios-madrid'],
  imagen: './images/varios-muebles.webp',
  imagenAlt: 'Salón y comedor con varios muebles montados',
  fuentes: [{ texto: 'Vicálvaro, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Vic%C3%A1lvaro' }],
};
