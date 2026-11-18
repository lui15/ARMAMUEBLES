import { ZonaContenido } from './tipos';

export const RETIRO: ZonaContenido = {
  slug: 'retiro',
  nombre: 'Retiro',
  tipo: 'distrito',
  frase: 'Pacífico, Ibiza, Niño Jesús, Estrella y Jerónimos.',
  ventajas: ['Te atendemos solo nosotros', 'Nos llevamos los cartones', 'Trato cercano'],
  intro:
    'Montamos muebles en el distrito de Retiro, el que rodea el parque más conocido de Madrid. Viven en él unos 118 000 vecinos repartidos en seis barrios, casi todos residenciales, desde Jerónimos, junto al Prado, hasta Estrella, al otro lado del parque.',
  barrios: ['Pacífico', 'Adelfas', 'Estrella', 'Ibiza', 'Niño Jesús', 'Jerónimos'],
  viviendas: [
    'Salvo el propio parque, el distrito es sobre todo vivienda. El barrio de Ibiza se construyó a la vez que el de Salamanca y comparte con él el trazado de calles; Pacífico, en cambio, creció con otro plan. Estrella está en la antigua ladera del arroyo Abroñigal y sus calles siguen la pendiente.',
    'Por eso no es lo mismo montar en Jerónimos, entre el Ritz, la Real Academia Española y la Bolsa, que en los bloques de Estrella o Adelfas. En los pisos de época predominan los techos altos y las reformas interiores; en los edificios más recientes, cocinas y armarios completos.',
  ],
  accesos:
    'El distrito queda entre el paseo del Prado, la calle de Alcalá, O\'Donnell y la M-30. Lo atraviesan cuatro líneas de metro: la 1 (Atocha, Menéndez Pelayo, Pacífico), la 2 (Retiro), la 6 (O\'Donnell, Sainz de Baranda, Conde de Casal) y la 9 (Ibiza, Estrella). Atocha, en el límite, concentra casi todas las líneas de Cercanías.',
  aparcamiento:
    'Alrededor del parque y en Jerónimos hay calles con mucho tráfico y poco hueco para descargar. En Estrella y Adelfas suele ser más fácil. Si conoces una zona de carga cerca de casa, nos ayuda a calcular mejor la hora de llegada.',
  dificultades: [
    {
      titulo: 'Calles en pendiente',
      texto:
        'En Estrella algunas calles tienen bastante cuesta. Si tu portal está en una, dínoslo: buscamos el sitio más llano para parar y sacar las cajas con seguridad.',
    },
    {
      titulo: 'Edificios de época',
      texto:
        'En fincas antiguas, los ascensores pequeños o las escaleras estrechas obligan a subir el mueble por piezas. Lo montamos después en la habitación donde va.',
    },
  ],
  proceso:
    'Nos cuentas qué muebles son, en qué barrio y cómo es el edificio. Te atendemos solo nosotros, sin subcontratas: la persona que te contesta es la que va a montar. Terminamos recogiendo cartones y embalajes.',
  consejos: [
    'Indica si tu calle tiene cuesta',
    'Mide el ascensor si es antiguo',
    'Deja despejada la habitación',
    'Ten a mano el albarán de entrega',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en Niño Jesús y en Ibiza?',
      respuesta: 'Sí, y también en Pacífico, Adelfas, Estrella y Jerónimos.',
    },
    {
      pregunta: 'Vivo en una finca antigua cerca del parque, ¿cabe un armario grande?',
      respuesta: 'Casi siempre, porque se sube en piezas. Mándanos fotos del ascensor y la escalera si tienes dudas.',
    },
    {
      pregunta: 'Mi calle en Estrella tiene mucha cuesta, ¿es un problema?',
      respuesta: 'No. Paramos en el punto más cómodo y subimos las cajas a mano.',
    },
    {
      pregunta: '¿Mandáis a otra empresa a montar?',
      respuesta: 'No. Te atendemos solo nosotros, sin subcontratas.',
    },
    {
      pregunta: '¿Montáis cocinas en pisos reformados de Pacífico?',
      respuesta: 'Sí, cocinas de IKEA, Leroy Merlin u otras tiendas, con los electrodomésticos colocados en su hueco.',
    },
  ],
  cerca: ['salamanca', 'arganzuela', 'moratalaz', 'puente-de-vallecas'],
  servicios: ['montaje-cocinas-madrid', 'montaje-armarios-madrid'],
  imagen: './images/comedor.webp',
  imagenAlt: 'Comedor con mesa y sillas montadas',
  fuentes: [{ texto: 'Retiro (Madrid), en Wikipedia', url: 'https://es.wikipedia.org/wiki/Retiro_(Madrid)' }],
};
