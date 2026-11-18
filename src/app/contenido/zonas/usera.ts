import { ZonaContenido } from './tipos';

export const USERA: ZonaContenido = {
  slug: 'usera',
  nombre: 'Usera',
  tipo: 'distrito',
  frase: 'Orcasitas, Almendrales, Moscardó, Zofío y Pradolongo.',
  ventajas: ['Presupuesto ajustado', 'Te atendemos solo nosotros', 'Trato cercano'],
  intro:
    'Montamos muebles en Usera, el distrito del sur de Madrid entre el Manzanares, la carretera de Toledo y la M-40. Tiene unos 143 000 vecinos en siete barrios y calles comerciales muy concurridas, como Marcelo Usera.',
  barrios: ['Orcasitas', 'Orcasur', 'San Fermín', 'Almendrales', 'Moscardó', 'Zofío', 'Pradolongo'],
  viviendas: [
    'El nombre viene del coronel Marcelo Usera, que parceló y vendió estos terrenos entre 1925 y 1930. La mayor parte del distrito perteneció a Villaverde, integrado en Madrid en 1954, y Usera como distrito nació en la reorganización municipal de 1987. Desde los años 60 llegaron muchas familias de otras partes de España.',
    'Por eso abundan los bloques de pisos de los 60 y 70, junto al Poblado Dirigido de Almendrales y barrios como Orcasitas. Son viviendas en las que es habitual renovar el dormitorio o la cocina sin hacer obra, y donde un armario bien medido aprovecha mucho el espacio.',
  ],
  accesos:
    'La línea 3 de metro para en Almendrales, Hospital Doce de Octubre y San Fermín-Orcasur, y la 6 en Usera y Plaza Elíptica, donde también termina la 11. El Cercanías C-5 tiene estaciones en Doce de Octubre y Orcasitas. Por carretera, la A-42 y la M-40 marcan el borde del distrito.',
  aparcamiento:
    'En las calles comerciales, como Marcelo Usera o Dolores Barranco, el tráfico y la carga y descarga de tiendas complican aparcar a media mañana. En los barrios del sur, como Orcasitas o San Fermín, suele haber más sitio.',
  dificultades: [
    {
      titulo: 'Bloques de los 60 y 70',
      texto:
        'Muchos edificios de esa época tienen ascensores pequeños o no tienen. Subimos los muebles desmontados, por piezas, y los montamos ya en su sitio.',
    },
    {
      titulo: 'Calles con mucho comercio',
      texto:
        'En el centro de Usera, la mejor hora para descargar es temprano o después del mediodía. La ajustamos contigo al dar la cita.',
    },
  ],
  proceso:
    'Nos dices los muebles, el barrio y si hay ascensor. Te atendemos solo nosotros: quien te responde es quien monta. Te damos un presupuesto ajustado y elegimos una hora con menos tráfico para llegar.',
  consejos: [
    'Pide una hora temprana si vives en el centro',
    'Indica si el ascensor es pequeño',
    'Mide el armario antes de comprarlo',
    'Despeja el pasillo de entrada',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en Orcasitas y Orcasur?',
      respuesta: 'Sí. Orcasitas tiene estación de Cercanías y Orcasur metro de la línea 3; montamos en los dos.',
    },
    {
      pregunta: 'Vivo cerca de Marcelo Usera, ¿a qué hora es mejor el montaje?',
      respuesta: 'A primera hora o después de comer, cuando hay menos carga y descarga de comercios.',
    },
    {
      pregunta: '¿Podéis cambiar los muebles del dormitorio sin hacer obra?',
      respuesta: 'Sí: desmontamos los viejos si hace falta y montamos los nuevos. El desmontaje tiene su propio precio.',
    },
    {
      pregunta: '¿Montáis en Moscardó, Zofío y Pradolongo?',
      respuesta: 'Sí, y también en San Fermín y Almendrales.',
    },
    {
      pregunta: '¿Trabajáis con subcontratas?',
      respuesta: 'No. La persona que te atiende es la misma que monta tus muebles.',
    },
  ],
  cerca: ['arganzuela', 'carabanchel', 'puente-de-vallecas'],
  servicios: ['montaje-dormitorios-madrid', 'desmontaje-muebles-madrid'],
  imagen: './images/comoda.webp',
  imagenAlt: 'Cómoda montada en un dormitorio',
  fuentes: [{ texto: 'Usera, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Usera' }],
};
