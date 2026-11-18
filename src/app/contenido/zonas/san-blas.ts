import { ZonaContenido } from './tipos';

export const SAN_BLAS: ZonaContenido = {
  slug: 'san-blas',
  nombre: 'San Blas-Canillejas',
  tipo: 'distrito',
  frase: 'Simancas, Arcos, Las Rosas, Canillejas y el Metropolitano.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Te atendemos solo nosotros'],
  intro:
    'Montamos muebles en San Blas-Canillejas, un distrito de más de 160 000 vecinos en el este de Madrid. Aquí conviven los barrios de vivienda pública de finales de los 50 con zonas mucho más recientes como Las Rosas, y cada una pide una preparación distinta.',
  barrios: ['Simancas', 'Hellín', 'Amposta', 'Arcos', 'Rosas', 'Rejas', 'Canillejas', 'El Salvador'],
  viviendas: [
    'Gran parte del distrito nació con el Plan de Urgencia Social de 1957 y con el Gran San Blas, promovido en 1958 por la Obra Sindical del Hogar. Eran viviendas públicas de tamaño reducido, de unos 45 metros, y muchas se han reformado por dentro con los años. En pisos así, cada centímetro cuenta al elegir un armario.',
    'Canillejas, en cambio, fue un municipio propio hasta 1949, y Las Rosas creció sobre la antigua avenida de Guadalajara a partir del plan urbanístico de 1985. El resultado es un distrito con edificios de varias épocas: no se monta igual en un piso pequeño de San Blas que en una vivienda nueva de Las Rosas.',
  ],
  accesos:
    'El distrito queda entre la A-2 y la avenida de América al norte, la M-21 al este, la R-3 y la M-40 al sur, y las calles de Hermanos García Noblejas y Alcalá al oeste. Lo cruzan tres líneas de metro: la 2 (Alsacia, Avenida de Guadalajara y Las Rosas), la 5 (de Ciudad Lineal a Canillejas) y la 7, que llega al Estadio Metropolitano.',
  aparcamiento:
    'Los días de partido en el Metropolitano, el tráfico y el aparcamiento cerca del estadio se complican. Si vives por esa zona, dinos si hay evento ese día y buscamos otra fecha u hora para descargar con calma.',
  dificultades: [
    {
      titulo: 'Pisos pequeños',
      texto:
        'En las viviendas de unos 45 metros, el mueble tiene que caber también mientras se monta. Mide la habitación y el pasillo y, si dudas, mándanos fotos: te orientamos antes de que compres.',
    },
    {
      titulo: 'Días de evento en el estadio',
      texto:
        'Cerca del Metropolitano, un partido o un concierto puede alargar mucho la descarga. Lo tenemos en cuenta al fijar el día del montaje.',
    },
  ],
  proceso:
    'Nos cuentas los muebles y el barrio. Si el piso es pequeño, te ayudamos a valorar medidas antes de montar; si vives junto al estadio, evitamos días de evento. Te damos un presupuesto ajustado y montamos con nuestras herramientas.',
  consejos: [
    'Mide la habitación y el pasillo',
    'Evita días de partido para el montaje',
    'Indica la planta y el ascensor',
    'Mándanos fotos si dudas de las medidas',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en Las Rosas y en Rejas?',
      respuesta: 'Sí. Montamos en los ocho barrios del distrito, de Simancas y Arcos a Las Rosas, Rejas, Canillejas y El Salvador.',
    },
    {
      pregunta: 'Mi piso es pequeño, ¿me ayudáis a elegir el armario?',
      respuesta: 'Te orientamos con las medidas antes de comprar. Mándanos fotos y medidas de la habitación por WhatsApp.',
    },
    {
      pregunta: 'Vivo cerca del Metropolitano, ¿hay algún problema?',
      respuesta: 'Solo los días de evento. Dinos si hay partido o concierto y buscamos otra fecha u hora para descargar.',
    },
    {
      pregunta: '¿Montáis cocinas en pisos reformados de San Blas?',
      respuesta: 'Sí. Si tras la reforma las paredes no quedan del todo rectas, ajustamos los muebles al montar. Dejamos los electrodomésticos en su hueco, sin tocar agua ni luz.',
    },
    {
      pregunta: '¿Y en Canillejas, que fue un pueblo aparte?',
      respuesta: 'Sí. Canillejas forma parte del distrito desde 1949 y montamos allí como en el resto de barrios.',
    },
  ],
  cerca: ['ciudad-lineal', 'barajas', 'hortaleza', 'coslada'],
  servicios: ['montaje-armarios-madrid', 'montaje-cocinas-madrid'],
  imagen: './images/armario-abatibles.webp',
  imagenAlt: 'Armario de puertas abatibles montado',
  fuentes: [{ texto: 'San Blas-Canillejas, en Wikipedia', url: 'https://es.wikipedia.org/wiki/San_Blas-Canillejas' }],
};
