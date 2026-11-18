import { ZonaContenido } from './tipos';

export const ALCALA_DE_HENARES: ZonaContenido = {
  slug: 'alcala-de-henares',
  nombre: 'Alcalá de Henares',
  tipo: 'municipio',
  frase: 'Del centro histórico peatonal a Espartales y La Garena.',
  ventajas: ['Presupuesto ajustado', 'Nos llevamos los cartones', 'Trato cercano'],
  intro:
    'Montamos muebles en Alcalá de Henares, la tercera ciudad más poblada de la Comunidad de Madrid, con más de 200 000 vecinos. Entre su centro histórico, Patrimonio de la Humanidad, y los barrios nuevos del Ensanche, cada montaje se organiza de una manera.',
  barrios: [
    'Centro (casco histórico, Los Mártires y Santiago)',
    'Reyes Católicos, Nueva Alcalá, Villa de Alcalá y La Rinconada',
    'El Chorrillo, La Garena e IVIASA',
    'Ensanche y Espartales',
    'El Val y Ciudad del Aire',
  ],
  viviendas: [
    'El casco histórico, conjunto histórico-artístico desde 1968 y Patrimonio de la Humanidad desde 1998, concentra edificios antiguos, muchos rehabilitados como pisos. Alrededor se extienden barrios residenciales como Reyes Católicos o El Chorrillo, y al norte la ciudad sigue creciendo con el Ensanche y Espartales.',
    'La ciudad se organiza en cinco distritos y cada uno tiene su carácter: Reyes Católicos agrupa barrios como Nueva Alcalá o La Rinconada; La Garena tiene su propia estación de Cercanías; El Val incluye la Colonia Ciudad del Aire. Es habitual que pidamos más detalles del edificio cuando el piso está en el centro.',
  ],
  accesos:
    'Alcalá se comunica con Madrid por la A-2 y la R-2, y con los pueblos de alrededor por la M-100, la M-119, la M-121, la M-203 o la M-300 hacia Loeches y Arganda. El Cercanías tiene tres estaciones, Alcalá de Henares, Alcalá de Henares Universidad y La Garena, con las líneas C-2, C-7 y C-8.',
  aparcamiento:
    'Desde 2018 el centro histórico se ha ido peatonalizando, así que en muchas calles la furgoneta no puede llegar a la puerta y hay que descargar en el punto más cercano. En el Ensanche y Espartales es mucho más sencillo. Si vives en el centro, dinos el acceso más próximo.',
  dificultades: [
    {
      titulo: 'Centro peatonal',
      texto:
        'En las calles peatonales del casco hay que llevar las cajas a pie desde el punto de descarga. Con muebles grandes conviene saberlo antes para prever el tiempo y no llevarse sorpresas.',
    },
    {
      titulo: 'Edificios antiguos rehabilitados',
      texto:
        'En los pisos del centro, las escaleras y los techos pueden condicionar el montaje de armarios altos. Si dudas, mándanos una foto de la habitación y la altura del techo.',
    },
  ],
  proceso:
    'Nos cuentas los muebles y la dirección. Si es en el centro histórico, acordamos dónde descargar; si es en el Ensanche, solo necesitamos la planta. Te damos un presupuesto ajustado, montamos y nos llevamos los cartones al terminar.',
  consejos: [
    'Dinos el punto de descarga más cercano',
    'Mide la altura del techo para armarios altos',
    'Mándanos una foto de la escalera',
    'Agrupa todos los muebles en una visita',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en el centro histórico de Alcalá?',
      respuesta: 'Sí. Al ser en gran parte peatonal, acordamos contigo el punto de descarga más cercano.',
    },
    {
      pregunta: '¿Vais al Ensanche y a Espartales?',
      respuesta: 'Sí. Montamos en los cinco distritos de Alcalá de Henares.',
    },
    {
      pregunta: '¿Montáis en La Garena y en El Val?',
      respuesta: 'Sí. La Garena tiene estación de Cercanías propia y El Val incluye la Colonia Ciudad del Aire; vamos a los dos.',
    },
    {
      pregunta: 'Mi piso es antiguo y con techos bajos, ¿qué armario monto?',
      respuesta: 'Mide la altura del techo antes de comprar: un armario alto se monta tumbado y necesita algo más de altura para levantarlo.',
    },
    {
      pregunta: 'Es un piso de alquiler, ¿podéis fijar muebles a la pared?',
      respuesta: 'Sí, pero consulta antes con el propietario si se puede taladrar. Si no, te decimos qué muebles aguantan sin anclaje.',
    },
  ],
  cerca: ['torrejon-de-ardoz', 'san-fernando-de-henares'],
  servicios: ['montaje-armarios-madrid', 'como-preparar-la-casa-para-el-montador'],
  imagen: './images/estanteria.webp',
  imagenAlt: 'Estantería grande montada en un salón',
  fuentes: [{ texto: 'Alcalá de Henares, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Alcal%C3%A1_de_Henares' }],
};
