import { ZonaContenido } from './tipos';

export const CIUDAD_LINEAL: ZonaContenido = {
  slug: 'ciudad-lineal',
  nombre: 'Ciudad Lineal',
  tipo: 'distrito',
  frase: 'De Arturo Soria a Pueblo Nuevo y La Elipa, piso a piso.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
  intro:
    'Montamos muebles en Ciudad Lineal, uno de los distritos más poblados de Madrid, con más de 220 000 vecinos. Desde los chalés que quedan de Arturo Soria hasta los pisos de Pueblo Nuevo o Quintana, adaptamos cada montaje al tipo de casa.',
  barrios: ['Ventas', 'Pueblo Nuevo', 'Quintana', 'Concepción', 'San Pascual', 'San Juan Bautista', 'Colina', 'Atalaya', 'Costillares'],
  viviendas: [
    'El distrito toma su nombre del proyecto que Arturo Soria empezó a construir en 1894: una ciudad alargada de casas con huerta y jardín a lo largo de un eje. Solo se hizo un tramo, y hoy apenas quedan algunos chalés originales entre los edificios de pisos que fueron ocupando la calle de Arturo Soria.',
    'La mayor parte de Ciudad Lineal son bloques de viviendas, con barrios muy densos como Pueblo Nuevo, el más poblado. Conviven edificios de distintas épocas, de modo que en una misma calle puedes encontrar un portal con ascensor amplio y otro en el que el armario tiene que subir por la escalera.',
  ],
  accesos:
    'Los ejes del distrito son la calle de Arturo Soria, la de Hermanos García Noblejas y la calle de Alcalá. Es de los distritos con más metro: líneas 1, 2, 4, 5 y 7, y el Metro Ligero en Pinar de Chamartín. No tiene estación de Cercanías.',
  aparcamiento:
    'Con tanta densidad de vecinos, encontrar sitio para descargar justo en el portal no siempre es fácil, sobre todo en Pueblo Nuevo y Ventas. Si tu edificio tiene garaje o un vado donde podamos parar unos minutos, dínoslo: ahorra tiempo y esfuerzo.',
  dificultades: [
    {
      titulo: 'Edificios de épocas distintas',
      texto:
        'En un mismo barrio hay portales con ascensor grande y otros sin él. Cuéntanos la planta y si hay ascensor, porque cambia cómo subimos piezas largas como laterales de armario o encimeras de mesa.',
    },
    {
      titulo: 'Chalés de Arturo Soria',
      texto:
        'En las viviendas unifamiliares que quedan, el reto suele ser el contrario: escaleras interiores estrechas entre plantas. Si el mueble va arriba, avísanos para valorar si conviene montarlo directamente en la habitación.',
    },
  ],
  proceso:
    'Primero nos dices los muebles y tu barrio. Si vives en un bloque muy concurrido, buscamos contigo la mejor hora para descargar. Después subimos las cajas, montamos en la habitación donde van los muebles y nos llevamos los cartones.',
  consejos: [
    'Dinos si tienes garaje o vado',
    'Indica la planta y el ascensor',
    'Reserva el ascensor si se puede',
    'Mándanos una foto del albarán',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en Pueblo Nuevo y Quintana?',
      respuesta: 'Sí. Montamos en los nueve barrios de Ciudad Lineal, incluidos Pueblo Nuevo, Quintana, Ventas y Concepción.',
    },
    {
      pregunta: '¿Y en La Elipa?',
      respuesta: 'Sí. La Elipa está en la zona sur del distrito y también montamos allí.',
    },
    {
      pregunta: 'Mi portal no tiene ascensor, ¿podéis subir un armario?',
      respuesta: 'Sí. Indícalo en el formulario para tenerlo en cuenta en el presupuesto; las piezas de un armario se suben por separado.',
    },
    {
      pregunta: '¿Montáis muebles en chalés de Arturo Soria?',
      respuesta: 'Sí. Cuéntanos en qué planta va cada mueble para organizar bien el montaje.',
    },
    {
      pregunta: '¿Montáis en Costillares y Atalaya?',
      respuesta: 'Sí. Son dos de los nueve barrios del distrito, en su parte norte, cerca de Arturo Soria.',
    },
  ],
  cerca: ['san-blas', 'hortaleza', 'moratalaz'],
  servicios: ['montaje-dormitorios-madrid', 'montaje-salones-madrid'],
  imagen: './images/mueble-tv.webp',
  imagenAlt: 'Salón con mueble de televisión montado',
  fuentes: [{ texto: 'Ciudad Lineal, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Ciudad_Lineal' }],
};
