import { ZonaContenido } from './tipos';

export const CHAMARTIN: ZonaContenido = {
  slug: 'chamartin',
  nombre: 'Chamartín',
  tipo: 'distrito',
  frase: 'El Viso, Prosperidad, Hispanoamérica, Castilla y más.',
  ventajas: ['Una sola persona de contacto', 'Nos llevamos los cartones', 'Trato cercano'],
  intro:
    'Montamos muebles en Chamartín, el distrito del norte de Madrid que va del Bernabéu a Plaza de Castilla. Tiene unos 145 000 vecinos en seis barrios, y en pocas calles se pasa de las colonias de casas bajas de El Viso a las torres de oficinas de la Castellana.',
  barrios: ['El Viso', 'Prosperidad', 'Ciudad Jardín', 'Hispanoamérica', 'Nueva España', 'Castilla'],
  viviendas: [
    'Antes de ser distrito, Chamartín de la Rosa fue un pueblo cercano a Madrid, con buena parte de sus tierras en manos de los duques de Pastrana. Se incorporó a la capital el 5 de junio de 1948 y desde entonces la ciudad lo fue llenando de manzanas residenciales a ambos lados de la Castellana.',
    'Hoy el distrito mezcla pisos amplios de varias décadas en Hispanoamérica o Prosperidad, viviendas unifamiliares en El Viso y Ciudad Jardín, y una gran presencia de oficinas en torno a la Castellana y Plaza de Castilla, donde están las Torres Kio. Por eso aquí montamos tanto un vestidor en casa como un despacho completo.',
  ],
  accesos:
    'Pocos distritos tienen tanto transporte: siete líneas de metro, de la 1 a la 10, con paradas como Plaza de Castilla, Santiago Bernabéu, Cuzco, Colombia o Prosperidad, y las estaciones de Cercanías de Nuevos Ministerios y Chamartín, esta última con 21 vías y trenes de largo recorrido.',
  aparcamiento:
    'En los ejes con más tráfico, como la Castellana o Príncipe de Vergara, conviene que nos digas si el portal tiene vado o zona de carga cerca. Los días de partido en el Bernabéu el entorno del estadio se satura: evita esa franja para el montaje.',
  dificultades: [
    {
      titulo: 'Casas de colonia con varias plantas',
      texto:
        'En El Viso y Ciudad Jardín abundan las viviendas de dos o tres alturas con escaleras interiores. Cada mueble lo montamos ya en la habitación donde va a quedarse.',
    },
    {
      titulo: 'Oficinas con normas de edificio',
      texto:
        'Los edificios de oficinas suelen pedir aviso previo, horario de carga y a veces montacargas reservado. Pásanos esas normas y lo organizamos para no cortar tu jornada.',
    },
  ],
  proceso:
    'Nos dices qué hay que montar y si es casa u oficina. En una oficina pedimos las normas del edificio; en una casa de colonia, qué va en cada planta. Te atiende una sola persona de contacto, y al terminar nos llevamos los cartones y el embalaje.',
  consejos: [
    'Evita los días de partido en el Bernabéu',
    'Pide al edificio el horario de carga',
    'Indica qué va en cada planta',
    'Ten a mano las instrucciones del fabricante',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en El Viso y en Ciudad Jardín?',
      respuesta: 'Sí. En esas casas de varias alturas montamos cada mueble arriba o abajo, según dónde vaya.',
    },
    {
      pregunta: 'Tengo una oficina cerca de Plaza de Castilla, ¿montáis puestos de trabajo?',
      respuesta: 'Sí: mesas, sillas por piezas, cajoneras y estanterías. Dinos cuántos puestos son y el horario del edificio.',
    },
    {
      pregunta: 'Vivo junto al Bernabéu, ¿qué día me conviene?',
      respuesta: 'Cualquiera sin partido ni evento. Si el calendario cambia, movemos la cita contigo.',
    },
    {
      pregunta: '¿Montáis también en Prosperidad y Nueva España?',
      respuesta: 'Sí, en los seis barrios del distrito, incluidos Hispanoamérica y Castilla.',
    },
    {
      pregunta: '¿Os lleváis el embalaje de un despacho entero?',
      respuesta: 'Sí. Recogemos cartones y plásticos al terminar para que la oficina quede lista para trabajar.',
    },
  ],
  cerca: ['tetuan', 'salamanca', 'ciudad-lineal', 'hortaleza'],
  servicios: ['montaje-muebles-oficina-madrid', 'montaje-vestidores-madrid'],
  imagen: './images/escritorio.webp',
  imagenAlt: 'Escritorio montado en un despacho',
  fuentes: [{ texto: 'Chamartín, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Chamart%C3%ADn' }],
};
