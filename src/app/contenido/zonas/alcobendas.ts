import { ZonaContenido } from './tipos';

export const ALCOBENDAS: ZonaContenido = {
  slug: 'alcobendas',
  nombre: 'Alcobendas',
  tipo: 'municipio',
  frase: 'Del centro y Valdelasfuentes a La Moraleja.',
  ventajas: ['Te atendemos solo nosotros', 'Una sola persona de contacto', 'Trato cercano'],
  intro:
    'Montamos muebles en Alcobendas, una ciudad de más de 120 000 habitantes al norte de Madrid. Conviven el centro de toda la vida, barrios de pisos más recientes y urbanizaciones de chalés como La Moraleja, y en cada caso preparamos el montaje de forma distinta.',
  barrios: ['Centro', 'Valdelasfuentes', 'La Moraleja', 'Soto de La Moraleja', 'Arroyo de la Vega', 'Distrito Urbanizaciones'],
  viviendas: [
    'Alcobendas era un pueblo pequeño hasta mediados del siglo XX: tenía menos de 4 000 habitantes en 1960 y superaba los 25 000 en 1970. Ese salto explica que el centro, alrededor de la iglesia de San Pedro, combine edificios antiguos con bloques de pisos de aquellos años.',
    'Hacia el norte y el este la ciudad sumó barrios como Valdelasfuentes y las urbanizaciones de La Moraleja y El Soto de La Moraleja, con viviendas unifamiliares. Arroyo de la Vega es sobre todo parque empresarial, por lo que también montamos muebles de oficina en la zona.',
  ],
  accesos:
    'La A-1 es la vía principal, junto con la M-40, la R-2 y la M-616 hacia Cantoblanco. La M-12 lleva al aeropuerto. La línea 10 de metro para en La Granja, La Moraleja, Marqués de la Valdavia y Manuel de Falla, y el Cercanías C-4 tiene estaciones en Valdelasfuentes y Alcobendas-San Sebastián de los Reyes.',
  aparcamiento:
    'En el centro, como en cualquier casco urbano con comercio, descargar en hora punta puede llevar más tiempo. En las urbanizaciones de chalés el acceso suele estar controlado: avísanos de si hay garita o código de entrada.',
  dificultades: [
    {
      titulo: 'Urbanizaciones con acceso controlado',
      texto:
        'En urbanizaciones como La Moraleja puede haber control de entrada. Si nos das el nombre para la garita o el código, llegamos sin esperas.',
    },
    {
      titulo: 'Oficinas en parques empresariales',
      texto:
        'En Arroyo de la Vega o La Moraleja montamos escritorios, estanterías y archivadores de oficina. Indica el horario en que se puede trabajar en el edificio.',
    },
  ],
  proceso:
    'Nos cuentas los muebles y la dirección, y si es una urbanización o una oficina, cómo se entra. Te damos un presupuesto ajustado y te atiende una sola persona de contacto desde la primera llamada hasta el último mueble.',
  consejos: [
    'Avisa en la garita de la urbanización',
    'Indica el horario del edificio de oficinas',
    'Dinos la planta de cada mueble',
    'Mándanos fotos si es un mueble grande',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en La Moraleja?',
      respuesta: 'Sí. Montamos en chalés y viviendas de La Moraleja y El Soto de La Moraleja. Indícanos cómo es el acceso.',
    },
    {
      pregunta: '¿Montáis muebles de oficina en Arroyo de la Vega?',
      respuesta: 'Sí: escritorios, estanterías, cajoneras y archivadores. Dinos el horario en que se puede trabajar.',
    },
    {
      pregunta: '¿Vais también al centro de Alcobendas y a Valdelasfuentes?',
      respuesta: 'Sí. En el centro, alrededor de la iglesia de San Pedro, te preguntamos antes por dónde descargar.',
    },
    {
      pregunta: 'Compré en una tienda de la A-1, ¿me lo montáis?',
      respuesta: 'Sí. Da igual dónde lo compraras: te lo entregan en casa y nosotros lo montamos.',
    },
    {
      pregunta: 'Tengo que montar un vestidor en un chalé, ¿lo hacéis?',
      respuesta: 'Sí, vestidores modulares por piezas. Mándanos el plano o las medidas para calcular cuánto tiempo lleva.',
    },
  ],
  cerca: ['hortaleza', 'barajas'],
  servicios: ['montaje-muebles-oficina-madrid', 'montaje-vestidores-madrid'],
  imagen: './images/escritorio.webp',
  imagenAlt: 'Escritorio de esquina montado',
  fuentes: [{ texto: 'Alcobendas, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Alcobendas' }],
};
