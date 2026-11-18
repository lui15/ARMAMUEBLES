import { ZonaContenido } from './tipos';

export const CARABANCHEL: ZonaContenido = {
  slug: 'carabanchel',
  nombre: 'Carabanchel',
  tipo: 'distrito',
  frase: 'Vista Alegre, Opañel, Comillas, Abrantes y Buenavista.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
  intro:
    'Montamos muebles en Carabanchel, el distrito más poblado del sur de Madrid, con más de 260 000 vecinos. Ocupa los antiguos pueblos de Carabanchel Alto y Carabanchel Bajo y se extiende entre la M-30 y la M-40, del Manzanares hasta el límite con Leganés.',
  barrios: ['Comillas', 'Opañel', 'San Isidro', 'Vista Alegre', 'Puerta Bonita', 'Buenavista', 'Abrantes'],
  viviendas: [
    'Carabanchel aparece por escrito ya en 1181, y durante siglos fueron dos municipios, Alto y Bajo, que se anexionaron a Madrid en 1948 para formar un único distrito. Buena parte de sus terrenos fue de Eugenia de Montijo, que los cedió para colegios religiosos; con el tiempo se urbanizaron.',
    'Hoy mezcla colonias históricas, como la Colonia de la Prensa o la Colonia Velázquez, con bloques de pisos de muchas épocas y los edificios nuevos del barrio de Buenavista, en el sur. Montar en una casa de colonia, en un piso de los 70 o en una vivienda recién entregada requiere preparaciones distintas.',
  ],
  accesos:
    'La A-42 termina en Plaza Elíptica, donde paran las líneas 6 y 11, y la línea 5 tiene en Carabanchel su estación más antigua, de 1961. En 2006 se abrieron San Francisco, Carabanchel Alto y La Peseta. Por carretera, la M-30 al norte y la M-40 al sur, con la M-421 y la M-425 hacia Leganés.',
  aparcamiento:
    'En las calles antiguas de Carabanchel Bajo, Opañel o Vista Alegre el aparcamiento es justo. En los barrios nuevos del sur hay más espacio y muchos edificios tienen garaje. Los días de evento en el Palacio de Vistalegre, mejor evitar esa zona.',
  dificultades: [
    {
      titulo: 'Colonias de casas bajas',
      texto:
        'En las colonias históricas, las casas de una o dos plantas tienen puertas y escaleras de otra época. Mándanos fotos si el mueble es grande y lo planificamos antes.',
    },
    {
      titulo: 'Eventos en Vistalegre',
      texto:
        'Cuando hay un concierto o un acto en el Palacio de Vistalegre, el barrio se llena. Fijamos el montaje en otra franja.',
    },
  ],
  proceso:
    'Nos dices los muebles y si vives en colonia, en bloque o en un edificio nuevo. Llevamos nuestras herramientas, montamos y fijamos a la pared lo que lo necesita. Te damos un presupuesto ajustado y, al terminar, nos llevamos los cartones.',
  consejos: [
    'Mándanos fotos de la puerta de la casa',
    'Evita los días de evento en Vistalegre',
    'Dinos si el edificio tiene garaje',
    'Fija a la pared los muebles altos',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en La Peseta y en Buenavista?',
      respuesta: 'Sí. La Peseta está dentro del barrio de Buenavista, en el sur del distrito, y tiene parada de metro propia.',
    },
    {
      pregunta: 'Vivo en la Colonia de la Prensa, ¿cabe un armario grande?',
      respuesta: 'Si se sube por piezas, casi siempre. Mándanos fotos de la puerta y la escalera.',
    },
    {
      pregunta: '¿Fijáis las estanterías altas a la pared?',
      respuesta: 'Sí. El anclaje antivuelco va incluido en el montaje cuando el mueble lo trae.',
    },
    {
      pregunta: '¿Vais a Comillas, Opañel y San Isidro?',
      respuesta: 'Sí. Montamos en los siete barrios de Carabanchel, también en Puerta Bonita y Abrantes.',
    },
    {
      pregunta: 'Hay un concierto en Vistalegre el día que quería, ¿lo cambiamos?',
      respuesta: 'Mejor sí. Te proponemos otra fecha u hora para no perder tiempo con el tráfico.',
    },
  ],
  cerca: ['latina', 'usera', 'arganzuela'],
  servicios: ['montaje-estanterias-madrid', 'fijar-muebles-a-la-pared-antivuelco'],
  imagen: './images/estanteria.webp',
  imagenAlt: 'Estantería montada y fijada a la pared',
  fuentes: [{ texto: 'Carabanchel, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Carabanchel' }],
};
