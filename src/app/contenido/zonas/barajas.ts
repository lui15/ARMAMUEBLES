import { ZonaContenido } from './tipos';

export const BARAJAS: ZonaContenido = {
  slug: 'barajas',
  nombre: 'Barajas',
  tipo: 'distrito',
  frase: 'Alameda de Osuna, el casco de Barajas, Timón y Corralejos.',
  ventajas: ['Te atendemos solo nosotros', 'Presupuesto ajustado', 'Trato cercano'],
  intro:
    'Montamos muebles en Barajas, el distrito del aeropuerto, en el extremo noreste de Madrid. Con unos 50 000 vecinos repartidos en mucho terreno, combina un casco antiguo, la Alameda de Osuna y barrios más recientes que crecieron hacia el oeste.',
  barrios: ['Alameda de Osuna', 'Casco Histórico de Barajas', 'Timón', 'Corralejos', 'Aeropuerto'],
  viviendas: [
    'Barajas fue un municipio con ayuntamiento propio hasta que se integró en Madrid en 1950; a mediados del siglo XIX apenas tenía mil habitantes. Su casco histórico conserva ese origen de pueblo, mientras que el distrito creció primero al ritmo del aeropuerto y después hacia el oeste, con Timón y Corralejos.',
    'El PAU de Barajas unió el casco con Timón y Corralejos, y al norte de Timón se levantó el de Valdebebas. Así que en pocas calles se pasa de casas antiguas a pisos de construcción reciente, y el tipo de montaje cambia con ellos: reformas en el casco y casas completas en las promociones nuevas.',
  ],
  accesos:
    'Es uno de los distritos mejor conectados por carretera: M-40 y M-11 al oeste, la A-2 al sur, la M-13 de este a oeste y la M-14 hacia las terminales. En metro, la línea 8 para en Feria de Madrid, Aeropuerto T1-T2-T3, Barajas y Aeropuerto T4, y la línea 5 en El Capricho y Alameda de Osuna.',
  aparcamiento:
    'En el casco histórico las calles son las de un antiguo pueblo y el sitio para descargar puede ser limitado. En Timón, Corralejos y la Alameda de Osuna suele haber más espacio. Si conoces el mejor punto para parar junto a tu portal, nos ahorra tiempo.',
  dificultades: [
    {
      titulo: 'Casco antiguo y pisos nuevos',
      texto:
        'En el casco de Barajas es habitual montar en casas reformadas con escaleras estrechas; en las promociones nuevas, cocinas y armarios completos. Cuéntanos de qué tipo es la tuya.',
    },
    {
      titulo: 'Viajes y horarios',
      texto:
        'Muchos vecinos trabajan en el entorno del aeropuerto con turnos. Dinos qué franja te viene bien y buscamos el día que encaje con tu horario.',
    },
  ],
  proceso:
    'Nos dices los muebles y el barrio, y si es en el casco, cómo es la escalera. Te damos un presupuesto ajustado y acordamos un día que encaje con tus turnos. Montamos, nivelamos, fijamos lo que lo necesita y nos llevamos los cartones.',
  consejos: [
    'Dinos tu franja horaria',
    'Mándanos una foto de la escalera',
    'Indica el punto de descarga',
    'Revisa el albarán antes del día',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en la Alameda de Osuna?',
      respuesta: 'Sí. La Alameda de Osuna es uno de los barrios de Barajas y tiene metro de la línea 5.',
    },
    {
      pregunta: 'Trabajo a turnos en el aeropuerto, ¿os adaptáis?',
      respuesta: 'Dinos qué días y franjas te vienen bien al pedir presupuesto y buscamos la fecha juntos.',
    },
    {
      pregunta: '¿Montáis en Timón y Corralejos?',
      respuesta: 'Sí. Son los barrios que crecieron hacia el oeste del distrito, y montamos en todos sus portales.',
    },
    {
      pregunta: 'Mi casa está en el casco antiguo, ¿hay algún problema?',
      respuesta: 'Ninguno, pero mándanos una foto de la escalera y de la puerta: así sabemos si conviene montar el armario en la habitación.',
    },
    {
      pregunta: '¿Montáis también en Valdebebas?',
      respuesta: 'Sí. Valdebebas tiene su propia página en Hortaleza, el distrito al que pertenece, pero montamos igual.',
    },
  ],
  cerca: ['hortaleza', 'san-blas', 'coslada', 'alcobendas'],
  servicios: ['montaje-cocinas-madrid', 'montaje-dormitorios-madrid'],
  imagen: './images/cocina-pequena.webp',
  imagenAlt: 'Cocina compacta montada',
  fuentes: [{ texto: 'Barajas (Madrid), en Wikipedia', url: 'https://es.wikipedia.org/wiki/Barajas_(Madrid)' }],
};
