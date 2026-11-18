import { ZonaContenido } from './tipos';

export const TORREJON_DE_ARDOZ: ZonaContenido = {
  slug: 'torrejon-de-ardoz',
  nombre: 'Torrejón de Ardoz',
  tipo: 'municipio',
  frase: 'Parque Cataluña, Soto del Henares, Fresnos y el centro.',
  ventajas: ['Presupuesto ajustado', 'Te atendemos solo nosotros', 'Llevamos herramientas'],
  intro:
    'Montamos muebles en Torrejón de Ardoz, una ciudad de más de 140 000 habitantes que no ha dejado de crecer desde los años 80. Tiene IKEA y Leroy Merlin en el propio municipio, así que muchos vecinos compran cerca y nos llaman para montarlo.',
  barrios: [
    'Casco Antiguo y Las Fronteras',
    'Parque Cataluña y Soto del Henares',
    'Las Veredillas, El Juncal y La Zarzuela',
    'Los Fresnos, San José y El Castillo',
    'Torrenieve, El Rosario y Jardines de la Solana',
  ],
  viviendas: [
    'Torrejón pasó de unos 80 000 habitantes en 1986 a más de 140 000 hoy, y ese crecimiento se ve en su mapa. El barrio de El Castillo, con origen en el siglo XVI, es el más antiguo; alrededor del centro aparecieron urbanizaciones como Parque Granada o Florencia, y en los 70 los bloques en altura proyectados por Rafael Leoz.',
    'El sureste, con Parque Cataluña y Soto del Henares, es el distrito más poblado, y Soto del Henares es el último gran desarrollo de la ciudad. Allí hay muchos pisos relativamente nuevos donde se montan cocinas, armarios PAX y dormitorios completos.',
  ],
  accesos:
    'La A-2 atraviesa el municipio, con la R-2, la M-45 y la M-50 cerca, y carreteras como la M-206, la M-300 hacia Alcalá o la M-108 hacia Ajalvir. El Cercanías C-2, C-7 y C-8 para en Torrejón de Ardoz y en Soto del Henares. Junto a la M-108 está el Parque Corredor, con IKEA, y en la avenida de la Constitución, On Plaza con Leroy Merlin.',
  aparcamiento:
    'En Soto del Henares y Parque Cataluña las calles son anchas y suele haber sitio. En el Casco Antiguo y en El Castillo el espacio es más justo. Si vas a recoger tú los muebles en la tienda, dinos cuándo llegan a casa y lo cuadramos.',
  dificultades: [
    {
      titulo: 'Compras grandes en la tienda de al lado',
      texto:
        'Con IKEA y Leroy Merlin tan cerca, es habitual juntar muchos bultos el mismo día. Comprueba con el albarán que han llegado todas las cajas antes de que vayamos.',
    },
    {
      titulo: 'Bloques altos del centro',
      texto:
        'En los edificios en altura del centro, saber la planta y el tamaño del ascensor nos ayuda a planificar cómo subir laterales de armario y encimeras.',
    },
  ],
  proceso:
    'Nos dices qué has comprado y dónde vives. Si los muebles llegan a domicilio, buscamos el día después de la entrega; si los recoges tú, cuando ya estén en casa. Te damos un presupuesto ajustado y montamos con nuestras herramientas.',
  consejos: [
    'Revisa el albarán al recibir las cajas',
    'Cuadra el montaje con la entrega',
    'Indica la planta y el ascensor',
    'Guarda el plano si es una cocina',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles comprados en el IKEA de Torrejón?',
      respuesta: 'Sí. Montamos los muebles que compras en IKEA, Leroy Merlin o cualquier otra tienda. No estamos afiliados a ninguna.',
    },
    {
      pregunta: '¿Vais a Soto del Henares?',
      respuesta: 'Sí. Montamos en Soto del Henares y en el resto de barrios de Torrejón de Ardoz.',
    },
    {
      pregunta: '¿Podéis montar el mismo día que me entregan los muebles?',
      respuesta: 'Dinos el día de la entrega al pedir presupuesto y buscamos la fecha que mejor encaje.',
    },
    {
      pregunta: '¿Montáis en El Castillo, el barrio más antiguo?',
      respuesta: 'Sí. En las calles más antiguas te preguntamos antes por el acceso y la escalera para ir preparados.',
    },
    {
      pregunta: 'Vivo en uno de los bloques altos de los 70, ¿cambia algo?',
      respuesta: 'Dinos la planta y si el ascensor admite tableros largos. Si no caben, subimos el armario en piezas más cortas.',
    },
  ],
  cerca: ['san-fernando-de-henares', 'alcala-de-henares', 'coslada'],
  servicios: ['montaje-muebles-ikea-madrid', 'montaje-armarios-pax'],
  imagen: './images/armario-correderas.webp',
  imagenAlt: 'Armario de puertas correderas montado',
  fuentes: [{ texto: 'Torrejón de Ardoz, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Torrej%C3%B3n_de_Ardoz' }],
};
