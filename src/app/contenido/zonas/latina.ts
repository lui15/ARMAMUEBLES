import { ZonaContenido } from './tipos';

export const LATINA: ZonaContenido = {
  slug: 'latina',
  nombre: 'Latina',
  tipo: 'distrito',
  frase: 'Aluche, Lucero, Las Águilas, Campamento y Cuatro Vientos.',
  ventajas: ['Trato cercano', 'Llevamos herramientas', 'Te atendemos solo nosotros'],
  intro:
    'Montamos muebles en Latina, el distrito del suroeste de Madrid que corre junto a la carretera de Extremadura. Con unos 240 000 vecinos en siete barrios, va desde la Puerta del Ángel, junto al Manzanares, hasta Cuatro Vientos y su aeródromo.',
  barrios: ['Los Cármenes', 'Puerta del Ángel', 'Lucero', 'Aluche', 'Campamento', 'Cuatro Vientos', 'Las Águilas'],
  viviendas: [
    'Su territorio perteneció a los Carabancheles hasta su anexión a Madrid en 1948. Latina se separó de Carabanchel como distrito en los años 70, y desde 1980 se construyó mucho alrededor de la carretera de Extremadura, hasta enlazar con los antiguos pueblos. Hoy es un distrito sobre todo residencial.',
    'Predominan los bloques de pisos de varias décadas en Aluche, Lucero o Las Águilas, con zonas más antiguas en Puerta del Ángel y Los Cármenes, y viviendas recientes ligadas al crecimiento del suroeste. En los pisos familiares de Aluche o Las Águilas es frecuente renovar el salón o las habitaciones de los niños.',
  ],
  accesos:
    'Tres líneas de metro atraviesan el distrito: la 5 (Aluche, Empalme, Campamento, Eugenia de Montijo), la 6 (Puerta del Ángel, Alto de Extremadura, Lucero, Laguna) y la 10 (Batán, Colonia Jardín, Cuatro Vientos). El Cercanías C-5 para en Laguna, Aluche, Las Águilas y Cuatro Vientos. La A-5 lo separa de la Casa de Campo.',
  aparcamiento:
    'En Puerta del Ángel y Los Cármenes las calles son más estrechas y aparcar cuesta. En Aluche y Las Águilas los bloques suelen tener más espacio alrededor, aunque los fines de semana se llenan. Dinos si hay zona de carga junto al portal.',
  dificultades: [
    {
      titulo: 'Habitaciones infantiles',
      texto:
        'Literas, camas nido y escritorios llevan herrajes que hay que ajustar con cuidado. Los montamos y te dejamos fijado a la pared lo que pueda volcar.',
    },
    {
      titulo: 'Salones con mueble de TV',
      texto:
        'Si quieres colgar la tele o un mueble suspendido, dinos de qué es la pared. Llevamos los tacos adecuados para ladrillo, hormigón o pladur.',
    },
  ],
  proceso:
    'Nos cuentas los muebles y el barrio. Si hay que colgar algo, preguntamos por la pared. Te atendemos solo nosotros, con nuestras herramientas, y dejamos el mueble nivelado y anclado donde haga falta.',
  consejos: [
    'Dinos de qué es la pared',
    'Ancla las literas y estanterías',
    'Ten el soporte de la tele a mano',
    'Despeja la habitación antes',
  ],
  faqs: [
    {
      pregunta: '¿Montáis literas y camas nido en Aluche?',
      respuesta: 'Sí, y las dejamos ancladas a la pared si el fabricante lo indica.',
    },
    {
      pregunta: '¿Colgáis la televisión en Las Águilas?',
      respuesta: 'Sí, con el soporte que tengas. Dinos el tamaño de la tele y de qué es la pared.',
    },
    {
      pregunta: '¿Llegáis a Cuatro Vientos y Campamento?',
      respuesta: 'Sí. Cuatro Vientos tiene parada de la línea 10 y Campamento de la 5; montamos en los dos.',
    },
    {
      pregunta: 'Vivo en Puerta del Ángel, en un edificio antiguo, ¿hay problema?',
      respuesta: 'No. Si el portal es estrecho, subimos las piezas por separado y montamos dentro de casa.',
    },
    {
      pregunta: '¿Montáis muebles de salón por módulos?',
      respuesta: 'Sí: muebles de TV, aparadores, vitrinas y estanterías, nivelados y alineados.',
    },
  ],
  cerca: ['carabanchel', 'arganzuela'],
  servicios: ['montaje-salones-madrid', 'colgar-tv-baldas-espejos-madrid'],
  imagen: './images/mueble-tv.webp',
  imagenAlt: 'Mueble de televisión montado en el salón',
  fuentes: [{ texto: 'Latina (Madrid), en Wikipedia', url: 'https://es.wikipedia.org/wiki/Latina_(Madrid)' }],
};
