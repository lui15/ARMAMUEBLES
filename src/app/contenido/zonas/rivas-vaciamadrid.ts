import { ZonaContenido } from './tipos';

export const RIVAS_VACIAMADRID: ZonaContenido = {
  slug: 'rivas-vaciamadrid',
  nombre: 'Rivas-Vaciamadrid',
  tipo: 'municipio',
  frase: 'Covibar, Rivas Futura, La Partija y Rivas Urbanizaciones.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
  intro:
    'Montamos muebles en Rivas-Vaciamadrid, un municipio que ha pasado de unos 500 vecinos en 1980 a más de 100 000 hoy. Casi todo está construido en las últimas cuatro décadas, con muchas viviendas unifamiliares y pisos de cooperativa.',
  barrios: ['Covibar', 'Pablo Iglesias', 'Rivas Urbanizaciones', 'Rivas Futura', 'La Partija - Santa Mónica', 'Casco histórico (Rivas-Pueblo)'],
  viviendas: [
    'Rivas creció lejos de su casco antiguo: a partir de los años 80 surgió Rivas Urbanizaciones, a unos 4 km del pueblo, que acabó teniendo más vecinos que el núcleo original. Covibar y Pablo Iglesias fueron de los primeros barrios, levantados por cooperativas; en Pablo Iglesias abundan las viviendas tipo dúplex.',
    'Después, buena parte del crecimiento fue de vivienda unifamiliar, y más tarde llegaron barrios nuevos como Rivas Futura, junto al centro comercial H2O. En dúplex y casas de dos plantas, el montaje se reparte entre pisos, y es frecuente montar dormitorios completos en la planta de arriba.',
  ],
  accesos:
    'La A-3 es el acceso principal, con salidas para Rivas oeste, centro y casco histórico, y la M-50 marca parte del límite del municipio. La M-203 une Rivas oeste con Coslada, San Fernando y Vicálvaro. La línea 9 de metro tiene tres estaciones: Rivas-Urbanizaciones, Rivas Futura y Rivas-Vaciamadrid.',
  aparcamiento:
    'Al ser un municipio reciente y de calles amplias, en la mayoría de zonas se puede parar cerca de la puerta. En las urbanizaciones con garaje común o acceso cerrado, dinos cómo entrar para no perder tiempo en la puerta.',
  dificultades: [
    {
      titulo: 'Dúplex y casas de dos plantas',
      texto:
        'Por la escalera interior de un dúplex no siempre cabe un armario ya montado. Por eso montamos cada mueble directamente en la planta donde va.',
    },
    {
      titulo: 'Muebles de exterior y trasteros',
      texto:
        'En viviendas con jardín o terraza también se montan muebles de exterior, casetas y estanterías de trastero. Cuéntanos qué es y te orientamos.',
    },
  ],
  proceso:
    'Nos dices qué hay que montar y en qué barrio vives, y si la casa tiene varias plantas. Te damos un presupuesto ajustado y, el día del montaje, subimos las piezas por separado y montamos en cada habitación.',
  consejos: [
    'Indica en qué planta va cada mueble',
    'Avisa si hay acceso cerrado o garaje',
    'Deja las cajas en su habitación',
    'Revisa las cajas con el albarán',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en Covibar y Pablo Iglesias?',
      respuesta: 'Sí, y también en Rivas Urbanizaciones, La Partija - Santa Mónica y el casco histórico.',
    },
    {
      pregunta: 'Vivo en un dúplex, ¿subís el armario a la planta de arriba?',
      respuesta: 'Subimos las piezas por separado y montamos el armario arriba, donde va. Así no hay que subirlo ya montado por la escalera.',
    },
    {
      pregunta: '¿Montáis muebles de jardín?',
      respuesta: 'Si vienen por piezas para montar, sí. Cuéntanos en "Algo más" qué son y te damos un presupuesto ajustado.',
    },
    {
      pregunta: '¿Montáis en Rivas Futura?',
      respuesta: 'Sí. Tiene estación de la línea 9 y allí montamos sobre todo cocinas, armarios y dormitorios completos.',
    },
    {
      pregunta: '¿Y en el casco histórico, Rivas-Pueblo?',
      respuesta: 'Sí. Tiene salida propia en la A-3, así que llegamos sin cruzar todo el municipio.',
    },
  ],
  cerca: ['vicalvaro', 'coslada', 'moratalaz'],
  servicios: ['montaje-dormitorios-madrid', 'montaje-vestidores-madrid'],
  imagen: './images/vestidor.webp',
  imagenAlt: 'Vestidor iluminado con baldas y barras',
  fuentes: [{ texto: 'Rivas-Vaciamadrid, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Rivas-Vaciamadrid' }],
};
