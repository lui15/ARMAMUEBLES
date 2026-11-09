import { NOTA_OPINIONES, resumenOpiniones } from '../datos/opiniones';
import { SERVICIO_MINIMO } from '../datos/precios-extra';
import { eur, eurMinimo } from '../datos/catalogo';
import { COMO_PEDIR_TEXTO, PRECIOS_TEXTO, PaginaSeo, TIENDAS_TEXTO, ZONAS_TEXTO } from './pagina-seo';

const RESUMEN = resumenOpiniones();

export const PAGINAS_HUB: PaginaSeo[] = [
  /* ---------------------------- INICIO ---------------------------- */
  {
    path: '',
    tipo: 'inicio',
    title: 'Montaje de Muebles y Cocinas en Madrid | ArmaMuebles',
    description:
      `Montaje de muebles y cocinas a domicilio en Madrid: cocinas con electrodomésticos, armarios y dormitorios. Desde ${eurMinimo()}. Presupuesto sin compromiso.`,
    etiqueta: 'Inicio',
    h1: { antes: 'Montamos tu', resaltado: 'cocina completa', despues: '' },
    kicker: 'Montaje de muebles y cocinas',
    h2: 'Tú compras los muebles. Nosotros los dejamos listos para usar',
    intro:
      'ArmaMuebles es un servicio de montaje de muebles a domicilio en Madrid. Tú compras los muebles en IKEA, Leroy Merlin, Obramat, Conforama, Bricomart o Brico Depot; nosotros los dejamos montados, nivelados y listos para usar.',
    parrafos: [
      'Trabajamos desde una mesita de noche hasta una cocina completa con isla. En todas las cocinas la colocación de los electrodomésticos va incluida en el montaje, y si ya tienes la cocina montada también podemos colocar solo los electrodomésticos.',
      'Pedir presupuesto no te compromete a nada: nos cuentas qué quieres montar y dónde, revisamos los detalles y te damos una propuesta personalizada por teléfono o WhatsApp.',
    ],
    puntos: [
      `Montajes desde ${eurMinimo()}`,
      'Cocinas con colocación de electrodomésticos',
      'Armarios, dormitorios, salones y mesas',
      'Presupuesto orientativo sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Cocinas con electrodomésticos incluidos',
        texto:
          `Montamos cocinas pequeñas, medianas, grandes y con isla desde ${eur(1)}. La colocación de horno, placa, campana, microondas, lavavajillas y frigorífico va incluida en el montaje.`,
      },
      {
        titulo: 'Armarios y dormitorios',
        texto:
          `Armarios de puertas abatibles desde ${eur(5)} y de puertas correderas desde ${eur(6)}, vestidores, camas, cómodas y mesitas de noche, con puertas y guías bien ajustadas.`,
      },
      {
        titulo: 'Salón, mesas y almacenamiento',
        texto:
          'Muebles de televisión, composiciones de salón, mesas de comedor, escritorios, estanterías, zapateros y muebles de baño. También montamos varios muebles en una misma visita.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta montar un mueble en Madrid?', respuesta: PRECIOS_TEXTO },
      {
        pregunta: '¿Montáis muebles de cualquier tienda?',
        respuesta: TIENDAS_TEXTO + ' ArmaMuebles no está afiliada a ninguna de ellas.',
      },
      { pregunta: '¿En qué zonas trabajáis?', respuesta: ZONAS_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
    ],
    servicio: {
      nombre: 'Montaje de muebles a domicilio',
      descripcion:
        'Montaje de muebles, armarios y cocinas a domicilio en Madrid, con colocación de electrodomésticos en las cocinas.',
    },
    imagen: './images/cocina-grande.webp',
    imagenAlt: 'Cocina moderna con muebles montados y electrodomésticos integrados',
    relacionadas: ['servicios', 'precios', 'zonas'],
  },

  /* ---------------------------- SERVICIOS ---------------------------- */
  {
    path: 'servicios',
    tipo: 'hub',
    padre: '',
    title: 'Servicios de Montaje de Muebles en Madrid | ArmaMuebles',
    description:
      'Todos nuestros servicios de montaje de muebles en Madrid: cocinas, armarios, dormitorios, salones, baños y mesas. Consulta precios y pide presupuesto.',
    etiqueta: 'Todos los servicios',
    h1: { antes: 'Servicios de', resaltado: 'montaje de muebles', despues: 'en Madrid' },
    kicker: 'Qué podemos montar',
    h2: 'Desde una mesita de noche hasta una cocina completa',
    intro:
      'Reunimos aquí todo lo que montamos a domicilio en Madrid, con su precio de partida. Filtra por estancia, busca tu mueble y pide presupuesto directamente desde cada ficha.',
    parrafos: [
      'El catálogo se organiza por estancias: cocinas, armarios, salón, dormitorio, almacenamiento y mesas. Cada ficha explica qué incluye el montaje y desde qué precio parte, para que sepas a qué atenerte antes de escribirnos.',
      'Si tienes varios muebles, no hace falta pedir un presupuesto por cada uno: montamos varios muebles en una misma visita y organizamos el trabajo contigo.',
    ],
    puntos: [
      '20 servicios con precio de partida',
      `Cocinas desde ${eur(1)}`,
      `Armarios desde ${eur(5)}`,
      `Muebles sueltos desde ${eurMinimo()}`,
    ],
    bloques: [
      {
        titulo: 'Por estancia',
        texto:
          'Cada estancia tiene su página, con lo que incluye el montaje, sus precios de partida y las dudas más habituales.',
      },
      {
        titulo: 'Por tienda',
        texto:
          'Montamos muebles comprados en IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot.',
      },
      {
        titulo: 'Por zona',
        texto:
          'Trabajamos en Madrid capital y en municipios de la Comunidad de Madrid. En la página de zonas tienes el listado completo.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué tipo de muebles montáis?',
        respuesta:
          'Cocinas, armarios y vestidores, camas, cómodas, mesitas de noche, muebles de televisión y de salón, mesas de comedor, escritorios, estanterías, zapateros, muebles auxiliares y muebles de baño.',
      },
      {
        pregunta: '¿Los precios del catálogo son definitivos?',
        respuesta:
          'Son precios de partida orientativos. El precio definitivo se confirma tras revisar las características y dimensiones de cada mueble.',
      },
      {
        pregunta: '¿Podéis montar varios muebles en la misma visita?',
        respuesta:
          `Sí. Tenemos un servicio específico de montaje de varios muebles, desde ${eur(20)}. Indica cuáles son en los detalles de la solicitud.`,
      },
      {
        pregunta: '¿Y si mi mueble no aparece en el catálogo?',
        respuesta:
          'Cuéntanoslo en la descripción de la solicitud y lo revisamos para darte una respuesta.',
      },
    ],
    servicio: {
      nombre: 'Servicios de montaje de muebles',
      descripcion:
        'Catálogo de servicios de montaje de muebles y cocinas a domicilio en Madrid, con precios de partida.',
    },
    imagen: './images/varios-muebles.webp',
    imagenAlt: 'Varios muebles montados',
    ids: [1, 5, 8, 9, 11, 13, 15, 18, 19, 20],
    modulo: 'catalogo',
    relacionadas: ['precios', 'montaje-cocinas-madrid', 'montaje-armarios-madrid'],
  },

  /* ---------------------------- PRECIOS ---------------------------- */
  {
    path: 'precios',
    tipo: 'hub',
    padre: '',
    title: `Precios de montaje de muebles en Madrid desde ${eurMinimo()}`,
    description: `¿Cuánto cuesta montar muebles en Madrid? Mesita desde ${eur(8)}, armario desde ${eur(5)} y cocina desde ${eur(1)}. Busca tu mueble y recibe un precio cerrado.`,
    etiqueta: 'Precios',
    h1: { antes: '¿Cuánto cuesta', resaltado: 'montar muebles', despues: 'en Madrid?' },
    kicker: 'Precios con IVA incluido',
    h2: 'Cómo calculamos tu precio',
    intro: `Desde ${eur(8)} una mesita de noche y desde ${eur(5)} un armario. Una cocina, desde ${eur(1)}. Te damos un precio cerrado antes de ir.`,
    parrafos: [
      'Cada mueble tiene un precio «desde» que verás abajo. Para darte el precio cerrado nos basta con lo que nos cuentas en el formulario o con una foto del mueble o del albarán.',
      `El servicio mínimo es de ${SERVICIO_MINIMO} € e incluye el desplazamiento en Madrid capital. Si vives en un municipio del área metropolitana, el desplazamiento cuesta entre 0 y 15 € según la distancia.`,
    ],
    puntos: [
      `Mesita de noche desde ${eur(8)}`,
      `Armario desde ${eur(5)}`,
      `Cocina desde ${eur(1)}`,
      'Precio cerrado antes de ir',
    ],
    bloques: [
      {
        titulo: 'Las cocinas incluyen los electrodomésticos',
        texto: 'En todos los tamaños de cocina, el precio ya incluye la colocación de tus electrodomésticos.',
      },
      {
        titulo: 'Qué significa «desde»',
        texto: 'Es el precio de partida. El precio cerrado depende del tamaño, las puertas y cajones, la altura y el acceso, y te lo damos antes de ir.',
      },
      {
        titulo: 'Varios muebles a la vez',
        texto: `Si tienes varios muebles por montar, elígelos todos en el formulario. El montaje de varios muebles en una misma visita parte de ${eur(20)}.`,
      },
    ],
    faqs: [
      {
        pregunta: '¿Lleváis las herramientas?',
        respuesta: 'Sí. Llevamos las herramientas: tú no tienes que preparar nada.',
      },
      {
        pregunta: '¿Os lleváis los cartones?',
        respuesta: 'Sí. Al terminar nos llevamos los cartones y los plásticos.',
      },
      {
        pregunta: '¿El precio que me dais es cerrado?',
        respuesta: 'Sí. Te damos un precio cerrado antes de ir, a partir de lo que nos cuentas o de una foto del mueble o del albarán.',
      },
      {
        pregunta: '¿Qué pasa si falta una pieza?',
        respuesta: 'Cuéntanoslo al pedir presupuesto o mándanos una foto del albarán. Lo vemos contigo antes de ir y te decimos cómo afecta al montaje y al precio.',
      },
      { pregunta: '¿Montáis muebles que no sean de IKEA?', respuesta: TIENDAS_TEXTO },
      {
        pregunta: '¿Cuánto cuesta el desplazamiento?',
        respuesta: `En Madrid capital va incluido en el servicio mínimo de ${SERVICIO_MINIMO} €. En los municipios del área metropolitana cuesta entre 0 y 15 € según la distancia.`,
      },
      {
        pregunta: '¿Fijáis los muebles a la pared?',
        respuesta: 'Sí. Cuando el mueble lo requiere, lo dejamos bien anclado a la pared. La fijación antivuelco va incluida en el montaje.',
      },
      {
        pregunta: '¿Pedir presupuesto me obliga a contratar?',
        respuesta: 'No. Pedir presupuesto es sin compromiso y no te obliga a contratar.',
      },
    ],
    servicio: {
      nombre: 'Tarifas de montaje de muebles',
      descripcion: 'Precios de partida, con IVA incluido, para el montaje de muebles y cocinas en Madrid.',
    },
    imagen: './images/cocina-pequena.webp',
    imagenAlt: 'Cocina pequeña montada, con los electrodomésticos colocados',
    ids: [1, 2, 3, 4, 19, 5, 6, 7, 11, 12, 8, 9, 10, 15, 16, 17, 18, 13, 14, 20],
    modulo: 'precios',
    relacionadas: [
      'cuanto-cuesta-montar-cocina-ikea',
      'cuanto-cuesta-montar-armario-pax',
      'montaje-cocinas-madrid',
      'montaje-armarios-madrid',
    ],
  },

  /* ---------------------------- OPINIONES ---------------------------- */
  {
    path: 'opiniones',
    tipo: 'hub',
    padre: '',
    title: 'Opiniones de clientes de ArmaMuebles · Montaje en Madrid',
    description: `${RESUMEN.media} de 5 en ${RESUMEN.total} opiniones de clientes que contrataron el montaje de muebles en Madrid: armarios, salones, dormitorios y más. Publicadas sin editar.`,
    etiqueta: 'Opiniones',
    h1: { antes: 'Opiniones de', resaltado: 'nuestros clientes', despues: 'en Madrid' },
    kicker: 'Opiniones',
    h2: 'Cómo publicamos las opiniones',
    intro: `${RESUMEN.media} de 5 con ${RESUMEN.total} opiniones de clientes. Las publicamos completas, sin editar.`,
    parrafos: [
      'Cada opinión la envió un cliente que contrató el montaje con nosotros. La publicamos tal cual nos la dio: con su texto completo, sus estrellas y su nombre con la inicial del apellido.',
      'Puedes filtrarlas por tipo de mueble para leer las de lo que necesitas montar.',
    ],
    puntos: [
      `${RESUMEN.media} de 5`,
      `${RESUMEN.total} opiniones de clientes`,
      'Publicadas sin editar',
      'Precio cerrado antes de ir',
    ],
    bloques: [
      { titulo: 'Sin editar', texto: NOTA_OPINIONES },
      {
        titulo: 'Tu opinión también cuenta',
        texto: 'Si ya montaste con nosotros, cuéntanos qué tal fue por WhatsApp.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Las opiniones son reales?',
        respuesta: NOTA_OPINIONES,
      },
      {
        pregunta: '¿Puedo dejar mi opinión?',
        respuesta: 'Sí. Si contrataste el montaje con nosotros, cuéntanos qué tal fue por WhatsApp.',
      },
      {
        pregunta: '¿Por qué hay una opinión de 4 estrellas?',
        respuesta: 'Porque publicamos todas las opiniones que nos envían los clientes, completas y sin editar.',
      },
      {
        pregunta: '¿Cuánto cuesta el montaje?',
        respuesta: `Desde ${eurMinimo()} una mesita de noche, desde ${eur(5)} un armario y desde ${eur(1)} una cocina. Tienes todos los precios en la página de precios.`,
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles a domicilio',
      descripcion: 'Montaje de muebles y cocinas a domicilio en Madrid.',
    },
    imagen: './images/varios-muebles.webp',
    imagenAlt: 'Salón con varios muebles montados',
    modulo: 'opiniones',
    relacionadas: ['precios', 'servicios', 'como-trabajamos'],
  },

  /* ---------------------------- ZONAS ---------------------------- */
  {
    path: 'zonas',
    tipo: 'hub',
    padre: '',
    title: 'Zonas de Montaje de Muebles en Madrid | ArmaMuebles',
    description:
      'Zonas donde montamos muebles a domicilio: Madrid capital y municipios como Alcorcón, Móstoles, Getafe o Las Rozas. Consulta la tuya y pide presupuesto.',
    etiqueta: 'Zonas de servicio',
    h1: { antes: 'Zonas donde', resaltado: 'montamos tus muebles', despues: 'en Madrid' },
    kicker: 'Dónde trabajamos',
    h2: 'Madrid capital y municipios de la Comunidad de Madrid',
    intro:
      'Vamos a tu domicilio en Madrid capital y en los municipios que ves en esta página. Si el tuyo no aparece, elige «Otra zona de Madrid» en el formulario y lo revisamos.',
    parrafos: [
      'En el formulario de presupuesto puedes seleccionar una o varias zonas, algo útil si los muebles van a una vivienda distinta de la tuya. El día y la hora del montaje se coordinan contigo.',
      'Dentro de Madrid capital tenemos páginas específicas para los distritos de Barajas y San Blas-Canillejas, con sus barrios y los servicios que más nos piden allí.',
    ],
    puntos: [
      'Madrid capital',
      '18 municipios de la Comunidad de Madrid',
      'Servicio a domicilio',
      'Coordinamos día y hora contigo',
    ],
    bloques: [
      {
        titulo: 'Zona sur',
        texto: 'Alcorcón, Móstoles, Leganés, Getafe, Fuenlabrada, Parla, Pinto y Valdemoro.',
      },
      {
        titulo: 'Zona norte y oeste',
        texto: 'Alcobendas, San Sebastián de los Reyes, Pozuelo de Alarcón, Majadahonda y Las Rozas.',
      },
      {
        titulo: 'Zona este',
        texto: 'Torrejón de Ardoz, Alcalá de Henares, Coslada, Rivas-Vaciamadrid y Arganda del Rey.',
      },
    ],
    faqs: [
      { pregunta: '¿En qué zonas trabajáis?', respuesta: ZONAS_TEXTO },
      {
        pregunta: '¿Qué hago si mi municipio no aparece?',
        respuesta:
          'Selecciona «Otra zona de Madrid» en el paso de zona del formulario e indícanos dónde es. Revisamos tu solicitud y te contestamos.',
      },
      {
        pregunta: '¿Puedo pedir un montaje en una dirección que no sea la mía?',
        respuesta:
          'Sí. Selecciona en el formulario la zona donde están los muebles y deja tus datos de contacto para coordinar el montaje.',
      },
      {
        pregunta: '¿Cómo se acuerda el día del montaje?',
        respuesta: 'Coordinamos contigo el día y la hora del montaje.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles a domicilio en la Comunidad de Madrid',
      descripcion:
        'Servicio de montaje de muebles a domicilio en Madrid capital y municipios de la Comunidad de Madrid.',
    },
    imagen: './images/mueble-completo.webp',
    imagenAlt: 'Composición de salón con módulos y estanterías',
    modulo: 'zonas',
    relacionadas: ['montador-muebles-barajas', 'montador-muebles-san-blas', 'servicios'],
  },

  /* ---------------------------- CÓMO TRABAJAMOS ---------------------------- */
  {
    path: 'como-trabajamos',
    tipo: 'hub',
    padre: '',
    title: 'Cómo Trabajamos: Montaje de Muebles Madrid | ArmaMuebles',
    description:
      'Cómo funciona nuestro servicio de montaje de muebles en Madrid: pides presupuesto, lo revisamos, vamos a tu casa y dejamos todo montado y nivelado.',
    etiqueta: 'Cómo trabajamos',
    h1: { antes: 'Así funciona', resaltado: 'tu montaje', despues: 'con ArmaMuebles' },
    kicker: 'Cómo trabajamos',
    h2: 'Un proceso claro, de la solicitud al último ajuste',
    intro:
      'Tú compras los muebles donde prefieras y nos cuentas qué necesitas. Nosotros revisamos los detalles, coordinamos contigo el día y dejamos todo montado, nivelado y listo para usar.',
    parrafos: [
      'Todo empieza con una solicitud de menos de un minuto: eliges el mueble, la cantidad y la zona, y añades los detalles que creas útiles. Con esos datos revisamos tu caso y te damos una propuesta personalizada por teléfono o WhatsApp.',
      'Si la propuesta te encaja, coordinamos contigo el día y la hora. Vamos a tu domicilio, montamos cada mueble, hacemos los ajustes finales y revisamos el resultado.',
    ],
    puntos: [
      'Solicitud en menos de un minuto',
      'Propuesta por teléfono o WhatsApp',
      'Día y hora coordinados contigo',
      'Resultado revisado',
    ],
    bloques: [
      {
        titulo: 'Qué nos ayuda a darte un buen presupuesto',
        texto:
          'El tipo de mueble, la cantidad, la zona y cualquier detalle útil: dimensiones, número de módulos de la cocina o la tienda donde lo has comprado.',
      },
      {
        titulo: 'Qué hacemos en cada montaje',
        texto:
          'Montamos la estructura y todas las piezas, ajustamos puertas, cajones y guías, nivelamos cuando el mueble lo requiere y revisamos el resultado.',
      },
      {
        titulo: 'Si el envío del formulario falla',
        texto:
          'Te ofrecemos enviar la misma solicitud por WhatsApp, ya escrita, para que no tengas que repetir nada.',
      },
    ],
    faqs: [
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
      {
        pregunta: '¿Tengo que comprar yo los muebles?',
        respuesta:
          'Sí. Tú compras los muebles donde prefieras y nosotros nos encargamos del montaje en tu domicilio.',
      },
      {
        pregunta: '¿Cómo se acuerda la fecha?',
        respuesta: 'Coordinamos contigo el día y la hora del montaje.',
      },
      {
        pregunta: '¿Enviar la solicitud me compromete a contratar?',
        respuesta: 'No. La solicitud de presupuesto es sin compromiso.',
      },
    ],
    servicio: {
      nombre: 'Proceso de montaje de muebles a domicilio',
      descripcion:
        'Cómo funciona el servicio de montaje de muebles a domicilio de ArmaMuebles en Madrid, de la solicitud al resultado.',
    },
    imagen: './images/escritorio.webp',
    imagenAlt: 'Escritorio montado y listo para usar',
    relacionadas: ['precios', 'preguntas-frecuentes', 'servicios'],
  },

  /* ---------------------------- PREGUNTAS ---------------------------- */
  {
    path: 'preguntas-frecuentes',
    tipo: 'hub',
    padre: '',
    title: 'Preguntas Frecuentes sobre Montaje de Muebles | ArmaMuebles',
    description:
      'Resolvemos tus dudas sobre el montaje de muebles en Madrid: precios, qué incluye, tiendas, zonas y cómo pedir presupuesto. Consulta las respuestas.',
    etiqueta: 'Preguntas frecuentes',
    h1: { antes: 'Preguntas', resaltado: 'frecuentes', despues: 'sobre el montaje de muebles' },
    kicker: 'Resolvemos tus dudas',
    h2: 'Lo que más nos preguntan antes de pedir presupuesto',
    intro:
      'Reunimos las dudas más habituales sobre precios, servicios, tiendas y zonas. Si la tuya no aparece, escríbela en la descripción de tu solicitud o contáctanos por WhatsApp.',
    parrafos: [
      'Puedes consultar los precios de partida de cada mueble en nuestra tabla de precios y ver el detalle de cada estancia en su página de servicio.',
    ],
    puntos: ['Precios', 'Qué incluye', 'Tiendas', 'Zonas y presupuesto'],
    bloques: [
      {
        titulo: 'Sobre precios',
        texto:
          'Publicamos un precio de partida para cada servicio. El precio definitivo se confirma tras revisar las características y dimensiones.',
      },
      {
        titulo: 'Sobre el servicio',
        texto:
          'Vamos a tu domicilio, montamos, ajustamos y revisamos. En las cocinas, la colocación de electrodomésticos va incluida.',
      },
      {
        titulo: 'Sobre el presupuesto',
        texto:
          'Es sin compromiso y se pide en un formulario de cuatro pasos. Te contestamos por teléfono o WhatsApp.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta montar un mueble en Madrid?', respuesta: PRECIOS_TEXTO },
      {
        pregunta: '¿Cuánto cuesta montar una cocina?',
        respuesta:
          `Una cocina pequeña empieza en ${eur(1)}, una mediana en ${eur(2)}, una grande en ${eur(3)} y una con isla en ${eur(4)}, con la colocación de electrodomésticos incluida.`,
      },
      {
        pregunta: '¿Cuánto cuesta montar un armario?',
        respuesta:
          `Un armario de puertas abatibles empieza en ${eur(5)}, uno de puertas correderas en ${eur(6)} y un vestidor en ${eur(7)}.`,
      },
      {
        pregunta: '¿La colocación de electrodomésticos está incluida?',
        respuesta:
          `En todas las cocinas, sí. Si ya tienes la cocina montada, también colocamos solo los electrodomésticos, desde ${eur(19)}.`,
      },
      { pregunta: '¿De qué tiendas montáis muebles?', respuesta: TIENDAS_TEXTO },
      {
        pregunta: '¿Estáis afiliados a alguna tienda?',
        respuesta:
          'No. ArmaMuebles es un servicio independiente, sin afiliación a IKEA, Leroy Merlin, Obramat, Conforama, Bricomart ni Brico Depot.',
      },
      { pregunta: '¿En qué zonas trabajáis?', respuesta: ZONAS_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: COMO_PEDIR_TEXTO },
      {
        pregunta: '¿Puedo pedir el montaje de varios muebles a la vez?',
        respuesta:
          'Sí. Montamos varios muebles en una misma visita, con el trabajo bien organizado. Indica cuáles son en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Puedo contactar por WhatsApp?',
        respuesta:
          'Sí. Puedes escribirnos directamente por WhatsApp y, si falla el envío del formulario, enviar la misma solicitud por ese canal.',
      },
    ],
    servicio: {
      nombre: 'Información sobre el montaje de muebles',
      descripcion: 'Respuestas a las dudas habituales sobre el montaje de muebles a domicilio en Madrid.',
    },
    imagen: './images/estanteria.webp',
    imagenAlt: 'Estantería montada y nivelada',
    relacionadas: ['precios', 'zonas', 'como-trabajamos'],
  },

  /* ---------------------------- POR TIENDA ---------------------------- */
  {
    path: 'montaje-muebles-por-tienda',
    tipo: 'hub',
    padre: '',
    title: 'Montaje de Muebles por Tienda en Madrid | ArmaMuebles',
    description:
      'Montamos muebles comprados en IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot en Madrid. Servicio independiente. Pide tu presupuesto.',
    etiqueta: 'Montaje por tienda',
    h1: { antes: 'Montaje de', resaltado: 'muebles de tu tienda', despues: 'favorita en Madrid' },
    kicker: 'Compra donde prefieras',
    h2: 'Da igual dónde los hayas comprado: nosotros los montamos',
    intro:
      'Montamos muebles de IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot en tu domicilio. ArmaMuebles es un servicio independiente y no está afiliado a ninguna de estas marcas.',
    parrafos: [
      'Compras los muebles en la tienda que prefieras y nos pides presupuesto para el montaje. En la solicitud puedes indicarnos dónde los has comprado y qué muebles son.',
      'Si has comprado en una tienda que no aparece aquí, cuéntanoslo igualmente en la solicitud y lo revisamos.',
    ],
    puntos: ['IKEA y Leroy Merlin', 'Obramat y Bricomart', 'Conforama y Brico Depot', 'Servicio independiente'],
    bloques: [
      {
        titulo: 'Muebles y cocinas',
        texto:
          'Montamos tanto muebles sueltos como cocinas completas, con la colocación de tus electrodomésticos incluida.',
      },
      {
        titulo: 'Tiendas de bricolaje',
        texto:
          'Si has comprado muebles de baño, armarios o almacenaje en Obramat, Bricomart o Brico Depot, los montamos igual que cualquier otro mueble.',
      },
      {
        titulo: 'Un servicio independiente',
        texto:
          'No trabajamos en nombre de ninguna tienda. La compra la haces tú y nosotros nos encargamos del montaje.',
      },
    ],
    faqs: [
      { pregunta: '¿De qué tiendas montáis muebles?', respuesta: TIENDAS_TEXTO },
      {
        pregunta: '¿Estáis afiliados a estas tiendas?',
        respuesta:
          'No. ArmaMuebles es un servicio independiente; todas estas marcas pertenecen a sus respectivos propietarios.',
      },
      {
        pregunta: '¿Puedo contrataros si ya tengo los muebles en casa?',
        respuesta:
          'Sí. Nos pides presupuesto indicando qué muebles son y en qué zona estás, y coordinamos contigo el día del montaje.',
      },
      {
        pregunta: '¿Montáis muebles de otras tiendas?',
        respuesta: 'Cuéntanos dónde los has comprado en la solicitud y lo revisamos.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles de tiendas',
      descripcion:
        'Montaje a domicilio en Madrid de muebles de IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot.',
    },
    imagen: './images/auxiliar.webp',
    imagenAlt: 'Mueble auxiliar montado',
    modulo: 'tiendas',
    relacionadas: ['montaje-muebles-ikea-madrid', 'montaje-muebles-leroy-merlin', 'servicios'],
  },
];
