import { ZonaContenido } from './tipos';

export const SALAMANCA: ZonaContenido = {
  slug: 'salamanca',
  nombre: 'Salamanca',
  tipo: 'distrito',
  frase: 'Recoletos, Goya, Lista, Castellana y La Guindalera.',
  ventajas: ['Una sola persona de contacto', 'Nos llevamos los cartones', 'Trato cercano'],
  intro:
    'Montamos muebles en el distrito de Salamanca, el barrio del ensanche del siglo XIX que va de la Castellana a la M-30. Unos 145 000 vecinos viven en sus seis barrios, en una trama de calles rectas trazada a partir de 1860.',
  barrios: ['Recoletos', 'Goya', 'Fuente del Berro', 'La Guindalera', 'Lista', 'Castellana'],
  viviendas: [
    'El distrito lleva el nombre del marqués de Salamanca, que impulsó su construcción. La parte más antigua sigue el Plan Castro de 1860, el primer ensanche de Madrid, y en 1863 el marqués pidió licencia para levantar las primeras catorce manzanas entre Lagasca, Serrano, Alcalá y Goya. En 1871 un tranvía ya lo unía con el centro.',
    'De ahí vienen sus calles en cuadrícula y muchos edificios de techos altos y pisos amplios, a menudo reformados por dentro. Más al este, Fuente del Berro y La Guindalera tienen construcciones de otras épocas y un ambiente más de barrio. En los pisos grandes es habitual montar vestidores, armarios a medida y comedores completos.',
  ],
  accesos:
    'Las calles de Serrano, Velázquez, Príncipe de Vergara y Francisco Silvela lo cruzan de norte a sur; Goya, Ortega y Gasset y Diego de León, de oeste a este. Hay metro en casi cada esquina: líneas 2, 4, 5, 6, 7 y 9, con paradas como Goya, Velázquez, Núñez de Balboa, Lista o Manuel Becerra.',
  aparcamiento:
    'En las calles comerciales, como Serrano o Goya, descargar en hora punta lleva su tiempo. Muchos edificios tienen portero: avísale del día del montaje y pregúntale si hay que proteger el ascensor o usar la entrada de servicio.',
  dificultades: [
    {
      titulo: 'Techos altos y armarios a medida',
      texto:
        'Con techos altos apetece un armario hasta arriba. Dinos la altura exacta antes de comprar: hay modelos con altillo que aprovechan ese espacio sin tener que hacer obra.',
    },
    {
      titulo: 'Normas de la comunidad',
      texto:
        'Algunas fincas piden subir los muebles por la escalera de servicio o proteger el ascensor. Cuéntanoslo y venimos con mantas y protecciones.',
    },
  ],
  proceso:
    'Nos cuentas los muebles y la dirección, y si el edificio tiene portero o normas para mudanzas. Te atiende una sola persona de contacto, montamos con cuidado de suelos y paredes y, al acabar, nos llevamos los cartones.',
  consejos: [
    'Avisa al portero del día del montaje',
    'Mide la altura del techo',
    'Pregunta si hay entrada de servicio',
    'Protege el suelo si es de madera antigua',
  ],
  faqs: [
    {
      pregunta: '¿Montáis vestidores en pisos grandes de Salamanca?',
      respuesta: 'Sí, vestidores y armarios modulares de cualquier marca. Mándanos el plano o las medidas para organizarlo.',
    },
    {
      pregunta: 'Mi finca tiene portero, ¿hace falta avisar?',
      respuesta: 'Conviene. Dile el día y la hora, y pregúntale si hay que usar la escalera de servicio.',
    },
    {
      pregunta: 'Tengo techos de más de tres metros, ¿qué armario monto?',
      respuesta: 'Uno con altillo o módulos superiores. Dinos la altura y te ayudamos a ver qué combinación cabe.',
    },
    {
      pregunta: '¿Montáis en Fuente del Berro y La Guindalera?',
      respuesta: 'Sí. Montamos en los seis barrios del distrito, de Recoletos a La Guindalera.',
    },
    {
      pregunta: '¿Cuidáis el parqué durante el montaje?',
      respuesta: 'Sí. Montamos sobre mantas o cartón y movemos los muebles sin arrastrarlos.',
    },
  ],
  cerca: ['retiro', 'chamartin', 'ciudad-lineal', 'moratalaz'],
  servicios: ['montaje-vestidores-madrid', 'montaje-muebles-a-medida-madrid'],
  imagen: './images/vestidor.webp',
  imagenAlt: 'Vestidor modular montado',
  fuentes: [{ texto: 'Distrito de Salamanca, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Distrito_de_Salamanca' }],
};
