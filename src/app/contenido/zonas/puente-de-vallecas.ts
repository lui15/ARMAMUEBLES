import { ZonaContenido } from './tipos';

export const PUENTE_DE_VALLECAS: ZonaContenido = {
  slug: 'puente-de-vallecas',
  nombre: 'Puente de Vallecas',
  tipo: 'distrito',
  frase: 'Entrevías, Palomeras, Portazgo, Numancia y San Diego.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Te atendemos solo nosotros'],
  intro:
    'Montamos muebles en Puente de Vallecas, uno de los distritos más poblados de Madrid, con más de 240 000 vecinos. Entre la M-30 y la M-40, sus seis barrios reúnen desde el núcleo original de San Diego y Numancia hasta los poblados de Entrevías y Palomeras.',
  barrios: ['Entrevías', 'San Diego', 'Palomeras Bajas', 'Palomeras Sureste', 'Portazgo', 'Numancia'],
  viviendas: [
    'El distrito procede del antiguo municipio de Vallecas, anexionado a Madrid. San Diego y Numancia forman su núcleo original, mientras que Entrevías se proyectó con un equipo dirigido por el arquitecto Sáenz de Oiza dentro de los estudios de vivienda mínima, y el Poblado Mínimo de Palomeras Bajas se remodeló más tarde.',
    'El resultado son muchos pisos de superficie ajustada, bloques de varias épocas y una vida de barrio muy fuerte alrededor de la avenida de la Albufera. En viviendas así, aprovechar el espacio con un buen armario, una cama con canapé o un salón bien pensado marca la diferencia.',
  ],
  accesos:
    'La línea 1 de metro va bajo la avenida de la Albufera con siete paradas, de Puente de Vallecas a Sierra de Guadalupe, pasando por Portazgo, Buenos Aires y Miguel Hernández. El Cercanías C-2, C-7 y C-8 para en Asamblea de Madrid-Entrevías, El Pozo y Vallecas. Por carretera, la A-3, la M-30 y la M-40.',
  aparcamiento:
    'En la avenida de la Albufera y alrededores el tráfico es intenso y el aparcamiento escaso. Las calles de Palomeras o Entrevías suelen dejar más margen. Los días de partido en el Estadio de Vallecas, mejor evitar la zona de Portazgo.',
  dificultades: [
    {
      titulo: 'Pisos de superficie ajustada',
      texto:
        'En viviendas pequeñas, antes de comprar mide la habitación y el recorrido desde la puerta. Te decimos si el mueble cabe y si conviene montarlo en una posición concreta.',
    },
    {
      titulo: 'Partidos en el Estadio de Vallecas',
      texto:
        'Cerca del estadio, un partido cambia el tráfico de toda la tarde. Lo tenemos en cuenta al fijar la hora del montaje.',
    },
  ],
  proceso:
    'Nos dices los muebles, el barrio y la planta. Si el piso es pequeño, revisamos las medidas antes de ir. Llegamos con todas las herramientas, montamos cada pieza en su sitio y te dejamos la casa recogida.',
  consejos: [
    'Mide el recorrido desde la puerta',
    'Evita los días de partido en Portazgo',
    'Elige muebles con almacenaje',
    'Indica si no hay ascensor',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en Entrevías y en Palomeras?',
      respuesta: 'Sí, en Palomeras Bajas y Palomeras Sureste, en Entrevías y en el resto de barrios del distrito.',
    },
    {
      pregunta: 'Mi piso es pequeño, ¿me ayudáis a ganar espacio?',
      respuesta: 'Te orientamos: camas con canapé, armarios con altillo o estanterías hasta el techo. Mándanos medidas y lo vemos.',
    },
    {
      pregunta: 'Vivo cerca del Estadio de Vallecas, ¿qué día es mejor?',
      respuesta: 'Uno sin partido. Si ya tienes fecha, dínosla y comprobamos el calendario.',
    },
    {
      pregunta: '¿Montáis camas con canapé abatible?',
      respuesta: 'Sí, incluido el ajuste de los pistones para que suba y baje bien.',
    },
    {
      pregunta: 'No tengo ascensor y vivo en un cuarto, ¿subís los muebles?',
      respuesta: 'Sí, por la escalera y pieza a pieza. Márcalo en el formulario para calcular bien el tiempo.',
    },
  ],
  cerca: ['villa-de-vallecas', 'moratalaz', 'retiro', 'usera'],
  servicios: ['montaje-camas-canapes-madrid', 'montaje-armarios-madrid'],
  imagen: './images/cama.webp',
  imagenAlt: 'Dormitorio con cama montada',
  fuentes: [{ texto: 'Puente de Vallecas, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Puente_de_Vallecas' }],
};
