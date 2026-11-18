import { ZonaContenido } from './tipos';

export const TETUAN: ZonaContenido = {
  slug: 'tetuan',
  nombre: 'Tetuán',
  tipo: 'distrito',
  frase: 'Bravo Murillo, Cuatro Caminos, Ventilla y Valdeacederas.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Trato cercano'],
  intro:
    'Montamos muebles en Tetuán, uno de los distritos más densos de Madrid: unos 160 000 vecinos en poco más de cinco kilómetros cuadrados. Entre la Castellana y Bravo Murillo conviven calles de casas bajas, bloques de pisos de varias épocas y las torres de AZCA.',
  barrios: ['Bellas Vistas', 'Cuatro Caminos', 'Castillejos', 'Almenara', 'Valdeacederas', 'Berruguete'],
  viviendas: [
    'Tetuán nació de un campamento: el ejército que volvió de la guerra de África en 1860 acampó en la dehesa de Amaniel, y aquel asentamiento acabó siendo permanente. Fue barrio obrero durante décadas, creció con la llegada del metro a Cuatro Caminos y Tetuán entre 1919 y 1929, y pasó a Madrid en 1948.',
    'Esa historia se nota en la mezcla de edificios. Bellas Vistas, Berruguete y Valdeacederas conservan tramos con viviendas bajas y calles estrechas; Cuatro Caminos y Castillejos tienen edificios más nuevos, y en Almenara la antigua Colonia de la Ventilla se transformó con la avenida de Asturias.',
  ],
  accesos:
    'La calle de Bravo Murillo recorre el distrito de punta a punta, con la línea 1 de metro debajo: Cuatro Caminos, Alvarado, Estrecho, Tetuán, Valdeacederas y Plaza de Castilla. Por el oeste llega la 7 a Francos Rodríguez, y la 9 tiene parada en Ventilla. Al este, la Castellana separa Tetuán de Chamartín.',
  aparcamiento:
    'Con tanta densidad, aparcar cerca del portal es lo más difícil del montaje en Tetuán, sobre todo en las calles estrechas que salen de Bravo Murillo. Si sabes de una zona de carga o un vado cercano, dínoslo y ganamos tiempo.',
  dificultades: [
    {
      titulo: 'Calles estrechas y casas bajas',
      texto:
        'En los tramos antiguos de Bellas Vistas o Berruguete, la furgoneta a veces no puede parar en la puerta. Llevamos las piezas a mano los últimos metros, sin coste añadido por ello.',
    },
    {
      titulo: 'Pisos compactos',
      texto:
        'En viviendas pequeñas conviene medir bien antes de comprar un armario o un sofá cama. Mándanos el plano o las medidas y te decimos si cabe y cómo montarlo.',
    },
  ],
  proceso:
    'Nos cuentas los muebles, la calle y la planta. Con eso vemos dónde parar y cuánto tiempo lleva. Llegamos con nuestras herramientas, montamos en la habitación donde va cada mueble y lo dejamos todo recogido.',
  consejos: [
    'Busca una zona de carga cerca del portal',
    'Mide el hueco antes de comprar',
    'Deja libre el pasillo de entrada',
    'Indica si el ascensor es pequeño',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en la Ventilla y en Almenara?',
      respuesta: 'Sí. La Ventilla está en el barrio de Almenara y tiene parada de la línea 9; montamos allí como en el resto del distrito.',
    },
    {
      pregunta: 'Vivo en una casa baja de Bellas Vistas, ¿hay problema?',
      respuesta: 'Ninguno. Si la calle es estrecha, la furgoneta para donde pueda y subimos las piezas a mano.',
    },
    {
      pregunta: 'Mi ascensor es muy pequeño, ¿podéis subir un armario?',
      respuesta: 'Sí. Un armario se sube desmontado, en piezas, y se monta ya dentro de la habitación.',
    },
    {
      pregunta: '¿Montáis oficinas en AZCA?',
      respuesta: 'Sí, puestos de trabajo y almacenaje. Pásanos el horario del edificio y si hay que reservar montacargas.',
    },
    {
      pregunta: '¿Vais a Cuatro Caminos y Castillejos?',
      respuesta: 'Sí, a los seis barrios de Tetuán, de Cuatro Caminos a Valdeacederas.',
    },
  ],
  cerca: ['chamartin', 'salamanca'],
  servicios: ['montaje-armarios-madrid', 'montaje-salones-madrid'],
  imagen: './images/armario-correderas.webp',
  imagenAlt: 'Armario de puertas correderas montado',
  fuentes: [{ texto: 'Tetuán (Madrid), en Wikipedia', url: 'https://es.wikipedia.org/wiki/Tetu%C3%A1n_(Madrid)' }],
};
