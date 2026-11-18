import { ZonaContenido } from './tipos';

export const VILLA_DE_VALLECAS: ZonaContenido = {
  slug: 'villa-de-vallecas',
  nombre: 'Villa de Vallecas',
  tipo: 'distrito',
  frase: 'El casco de Vallecas, Santa Eugenia y el Ensanche.',
  ventajas: ['Una sola persona de contacto', 'Presupuesto ajustado', 'Llevamos herramientas'],
  intro:
    'Montamos muebles en Villa de Vallecas, el distrito del sureste de Madrid con unos 117 000 vecinos. Tiene solo tres barrios, pero muy distintos: el casco antiguo del que fue un pueblo, Santa Eugenia y el Ensanche de Vallecas, uno de los grandes crecimientos recientes de la ciudad.',
  barrios: ['Casco histórico de Vallecas', 'Santa Eugenia', 'Ensanche de Vallecas'],
  viviendas: [
    'Vallecas fue municipio propio hasta que un decreto de 10 de noviembre de 1950 lo anexionó a Madrid. Durante años formó parte del distrito de Mediodía, hasta que este se dividió a finales de los 80 y nació Villa de Vallecas. Su casco conserva la iglesia de San Pedro ad Víncula y un trazado de antiguo pueblo.',
    'Al sur del casco, entre la M-45 y la M-50, se levantó el Ensanche de Vallecas, reconocido como barrio en 2017. Allí casi todo son pisos recientes, muchos con garaje, y lo normal es montar la casa entera al recibir las llaves: cocina, armarios, dormitorios y salón.',
  ],
  accesos:
    'La línea 1 de metro tiene seis estaciones en el distrito: Sierra de Guadalupe, Villa de Vallecas, Congosto, La Gavia, Las Suertes y Valdecarros. Hay Cercanías en Vallecas y en Santa Eugenia. La A-3 lo separa de Vicálvaro, la M-40 de Puente de Vallecas y la M-50 marca su límite sur.',
  aparcamiento:
    'En el Ensanche las calles son anchas y suele haber sitio para descargar, y muchos edificios tienen garaje desde el que subir directamente. En el casco histórico las calles son más estrechas; dinos por cuál se llega mejor a tu casa.',
  dificultades: [
    {
      titulo: 'Montar una casa entera de golpe',
      texto:
        'Al estrenar piso en el Ensanche se juntan muchos muebles a la vez. Lo organizamos por habitaciones para que puedas ir usando la casa mientras montamos.',
    },
    {
      titulo: 'Subir desde el garaje',
      texto:
        'Si el ascensor baja al garaje, es la forma más cómoda de subir las cajas. Dinos si podemos entrar con la furgoneta y en qué plaza dejarla.',
    },
  ],
  proceso:
    'Nos pasas la lista de muebles y te decimos cuánto tiempo lleva. Una sola persona de contacto coordina todo, desde el primer mensaje hasta el último mueble. Llevamos nuestras herramientas y te damos un presupuesto ajustado antes de ir.',
  consejos: [
    'Haz una lista de muebles por habitación',
    'Pregunta si podemos entrar al garaje',
    'Recibe la entrega antes del montaje',
    'Deja un espacio libre para trabajar',
  ],
  faqs: [
    {
      pregunta: 'Me entregan el piso en el Ensanche de Vallecas, ¿lo montáis todo?',
      respuesta: 'Sí. Cocina, armarios, camas, salón y muebles de baño. Elige todo en el formulario y lo planificamos por habitaciones.',
    },
    {
      pregunta: '¿Montáis en Santa Eugenia?',
      respuesta: 'Sí. Tiene estación de Cercanías propia y montamos allí como en el resto del distrito.',
    },
    {
      pregunta: '¿Podemos subir las cajas desde el garaje?',
      respuesta: 'Si la comunidad lo permite, sí. Dinos la plaza y cómo se abre la puerta.',
    },
    {
      pregunta: 'Vivo en el casco antiguo, ¿hay algún problema?',
      respuesta: 'Ninguno. Solo dinos por qué calle es mejor llegar con la furgoneta.',
    },
    {
      pregunta: '¿Llegáis a Valdecarros?',
      respuesta: 'Sí. Valdecarros es la parte que se está urbanizando junto a la M-50; dinos el número de portal y llegamos.',
    },
  ],
  cerca: ['puente-de-vallecas', 'vicalvaro', 'rivas-vaciamadrid'],
  servicios: ['montaje-cocinas-madrid', 'montaje-muebles-ikea-madrid'],
  imagen: './images/cocina-grande.webp',
  imagenAlt: 'Cocina grande montada',
  fuentes: [{ texto: 'Villa de Vallecas, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Villa_de_Vallecas' }],
};
