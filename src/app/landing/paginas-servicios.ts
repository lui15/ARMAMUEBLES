import { eur, eurMinimo } from '../datos/catalogo';
import { meta, PaginaSeo } from './pagina-seo';

export const PAGINAS_SERVICIOS: PaginaSeo[] = [
  /* ---------------------------- COCINAS ---------------------------- */
  {
    path: 'montaje-cocinas-madrid',
    guia: 'cuanto-cuesta-montar-cocina-ikea',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de cocinas en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
      'Tu cocina montada en Madrid con los electrodomésticos.',
    ),
    etiqueta: 'Montaje de cocinas',
    h1: { antes: 'Montaje de', resaltado: 'cocinas en Madrid', despues: 'a domicilio' },
    kicker: 'Montaje de cocinas',
    h2: 'Tu cocina montada, nivelada y con los electrodomésticos colocados',
    intro:
      'Si has comprado una cocina en IKEA, Leroy Merlin u otra tienda, la montamos en tu domicilio: muebles bajos y altos, puertas, cajones, tiradores y nivelación final. La colocación de tus electrodomésticos va incluida.',
    parrafos: [
      'Una cocina es el montaje que más se nota en el día a día: módulos alineados, puertas a la misma altura y cajones que deslizan bien. Por eso terminamos cada cocina con la nivelación de los módulos y el ajuste de puertas y cajones.',
      'El precio de partida depende del tamaño: pequeña, mediana, grande o con isla. En todos los casos la colocación de los electrodomésticos ya está incluida, sin que tengas que contratar nada aparte.',
    ],
    puntos: [
      `Cocina pequeña desde ${eur(1)}`,
      `Cocina mediana desde ${eur(2)}`,
      `Cocina grande desde ${eur(3)}`,
      `Cocina con isla desde ${eur(4)}`,
    ],
    bloques: [
      {
        titulo: 'Qué incluye el montaje',
        texto:
          'Módulos bajos y muebles altos, columnas y cajoneras, puertas, cajones y tiradores, y nivelación y ajuste final. En la cocina con isla también montamos y fijamos la isla.',
      },
      {
        titulo: 'Electrodomésticos incluidos',
        texto:
          'Colocamos horno, placa de cocina, campana, microondas, lavavajillas y frigorífico en su hueco, ajustados y bien integrados en el mobiliario.',
      },
      {
        titulo: '¿Ya tienes la cocina montada?',
        texto:
          `Si solo necesitas colocar tus electrodomésticos integrables o de libre instalación, ofrecemos ese servicio por separado desde ${eur(19)}.`,
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una cocina en Madrid?',
        respuesta:
          `Una cocina pequeña empieza en ${eur(1)}, una mediana en ${eur(2)}, una grande en ${eur(3)} y una con isla en ${eur(4)}, con la colocación de electrodomésticos incluida. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Están incluidos los electrodomésticos?',
        respuesta:
          'En todas las cocinas la colocación de los electrodomésticos va incluida en el montaje. Los electrodomésticos los compras tú.',
      },
      {
        pregunta: '¿Montáis cocinas de IKEA y Leroy Merlin?',
        respuesta:
          'Sí. Montamos cocinas de IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot.',
      },
      {
        pregunta: '¿Qué necesito para pedir presupuesto?',
        respuesta:
          'Dinos el tamaño aproximado de la cocina (pequeña, mediana, grande o con isla), cuántos módulos tiene si lo sabes y tu zona. Puedes describirlo en el formulario.',
      },
    ],
    servicio: {
      nombre: 'Montaje de cocinas',
      descripcion:
        'Montaje de cocinas a domicilio en Madrid con colocación de electrodomésticos incluida.',
    },
    imagen: './images/cocina-isla.webp',
    imagenAlt: 'Cocina con isla central montada y nivelada',
    ids: [1, 2, 3, 4],
    categoria: 'Cocinas',
    relacionadas: [
      'colocacion-electrodomesticos-madrid',
      'montaje-armarios-madrid',
      'montaje-muebles-bano-madrid',
      'precios',
      'cuanto-cuesta-montar-cocina-ikea',
    ],
  },

  /* ---------------------------- ARMARIOS ---------------------------- */
  {
    path: 'montaje-armarios-madrid',
    guia: 'cuanto-cuesta-montar-armario-pax',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de armarios en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Trato cercano'],
      'Armarios abatibles, correderos y vestidores, nivelados y bien fijados.',
    ),
    etiqueta: 'Montaje de armarios',
    h1: { antes: 'Montaje de', resaltado: 'armarios en Madrid', despues: 'a domicilio' },
    kicker: 'Montaje de armarios',
    h2: 'Armarios y vestidores montados, con las puertas bien ajustadas',
    intro:
      'Montamos armarios de puertas abatibles y correderas, vestidores y sistemas modulares en tu casa: estructura, baldas, barras, puertas y ajuste final.',
    parrafos: [
      'En un armario, lo que marca la diferencia es el final: puertas que cierran alineadas y guías que deslizan sin tirones. Por eso dedicamos el último paso a regular bisagras y sistemas de guías.',
      'Da igual que tu armario sea de una puerta o un vestidor completo. Indícanos las medidas y el tipo de puertas en la solicitud y revisamos tu caso.',
    ],
    puntos: [
      `Puertas abatibles desde ${eur(5)}`,
      `Puertas correderas desde ${eur(6)}`,
      `Vestidores desde ${eur(7)}`,
      'Montaje a domicilio en Madrid',
    ],
    bloques: [
      {
        titulo: 'Armarios de puertas abatibles',
        texto:
          'Estructura y laterales, baldas interiores, barras para colgar, puertas y bisagras bien ajustadas.',
      },
      {
        titulo: 'Armarios de puertas correderas',
        texto:
          'Sistema de guías alineado, puertas correderas y regulación fina para que deslicen bien.',
      },
      {
        titulo: 'Vestidores y armarios modulares',
        texto:
          'Estructuras abiertas y sistemas de vestidor con baldas, barras y cajoneras, nivelados y listos para organizar.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un armario en Madrid?',
        respuesta:
          `Un armario de puertas abatibles empieza en ${eur(5)}, uno de puertas correderas en ${eur(6)} y un vestidor en ${eur(7)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Montáis armarios IKEA PAX?',
        respuesta:
          'Sí, montamos armarios PAX de IKEA con puertas abatibles o correderas. Tenemos una página dedicada a los armarios PAX con más detalle.',
      },
      {
        pregunta: '¿Qué incluye el montaje de un armario?',
        respuesta:
          'La estructura y los laterales, las baldas interiores, las barras para colgar, las puertas con sus bisagras o guías y los ajustes finales.',
      },
      {
        pregunta: '¿Puedo pedir varios muebles a la vez?',
        respuesta:
          'Sí, montamos varios muebles en una misma visita (armario, cómoda, mesitas...). Indícalo en los detalles de la solicitud.',
      },
    ],
    servicio: {
      nombre: 'Montaje de armarios',
      descripcion:
        'Montaje de armarios de puertas abatibles y correderas y vestidores a domicilio en Madrid.',
    },
    imagen: './images/armario-correderas.webp',
    imagenAlt: 'Armario de puertas correderas montado en un dormitorio',
    ids: [5, 6, 7],
    categoria: 'Armarios',
    relacionadas: [
      'montaje-armarios-pax',
      'montaje-dormitorios-madrid',
      'montaje-estanterias-madrid',
      'precios',
      'cuanto-cuesta-montar-armario-pax',
    ],
  },

  /* ---------------------------- PAX ---------------------------- */
  {
    path: 'montaje-armarios-pax',
    guia: 'cuanto-cuesta-montar-armario-pax',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de armarios PAX de IKEA en Madrid',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
      'Tu PAX de IKEA montado en Madrid y bien fijado a la pared.',
    ),
    etiqueta: 'Montaje de armarios PAX',
    h1: { antes: 'Montaje de', resaltado: 'armarios PAX de IKEA', despues: 'en Madrid' },
    kicker: 'Armarios PAX',
    h2: 'Tu armario PAX montado, con interiores y puertas en su sitio',
    intro:
      'PAX es el sistema modular de armarios de IKEA. Lo montamos en tu domicilio: estructura, baldas, barras, interiores, puertas abatibles o correderas y ajuste final. ArmaMuebles es independiente y no está afiliada a IKEA.',
    parrafos: [
      'Al ser modular, cada PAX es distinto: varias estructuras, combinaciones de interiores y dos tipos de puerta. Cuanto más nos cuentes en la solicitud sobre tu composición, más ajustada será la propuesta.',
      'Si ya has diseñado el armario, indícanos cuántas estructuras tiene, qué puertas lleva y qué interiores has elegido. Con esos datos revisamos tu caso y te contestamos por teléfono o WhatsApp.',
    ],
    puntos: [
      `Armarios abatibles desde ${eur(5)}`,
      `Armarios con puertas correderas desde ${eur(6)}`,
      `Vestidores desde ${eur(7)}`,
      'Ajuste final de puertas',
    ],
    bloques: [
      {
        titulo: 'PAX con puertas abatibles',
        texto:
          'Montamos estructura y laterales, baldas, barras y puertas con las bisagras bien ajustadas.',
      },
      {
        titulo: 'PAX con puertas correderas',
        texto:
          'Colocamos el sistema de guías y las puertas correderas, y las regulamos para que deslicen bien.',
      },
      {
        titulo: 'Interiores y organización',
        texto:
          'Baldas, barras para colgar y cajoneras: dejamos el interior montado para que solo tengas que colocar tu ropa.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un armario PAX?',
        respuesta:
          `Depende de las dimensiones, las puertas y los interiores. Como referencia, nuestros armarios de puertas abatibles empiezan en ${eur(5)} y los de puertas correderas en ${eur(6)}. Te confirmamos el precio tras revisar las características.`,
      },
      {
        pregunta: '¿Montáis PAX con puertas correderas?',
        respuesta:
          'Sí. Instalamos las guías, colocamos las puertas y las regulamos para que deslicen correctamente.',
      },
      {
        pregunta: '¿Qué datos de mi PAX necesitáis?',
        respuesta:
          'Cuántas estructuras tiene, qué tipo de puertas lleva y qué interiores has elegido. Puedes indicarlo en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Estáis afiliados a IKEA?',
        respuesta:
          'No. ArmaMuebles es un servicio de montaje independiente; IKEA y PAX son marcas de su propietario.',
      },
    ],
    servicio: {
      nombre: 'Montaje de armarios PAX',
      descripcion:
        'Montaje a domicilio en Madrid de armarios PAX con puertas abatibles o correderas.',
    },
    imagen: './images/armario-abatibles.webp',
    imagenAlt: 'Armario modular de puertas abatibles montado',
    ids: [5, 6, 7],
    categoria: 'Armarios',
    relacionadas: [
      'montaje-armarios-madrid',
      'montaje-dormitorios-madrid',
      'montaje-estanterias-madrid',
      'precios',
      'cuanto-cuesta-montar-armario-pax',
    ],
  },

  /* ---------------------------- DORMITORIOS ---------------------------- */
  {
    path: 'montaje-dormitorios-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de dormitorios en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Nos llevamos los cartones', 'Trato cercano'],
      'Camas, mesitas, cómodas y armarios de dormitorio montados en Madrid.',
    ),
    etiqueta: 'Montaje de dormitorios',
    h1: { antes: 'Montaje de', resaltado: 'dormitorios en Madrid', despues: 'a domicilio' },
    kicker: 'Dormitorio',
    h2: 'Camas, cómodas y mesitas listas para estrenar',
    intro:
      'Montamos los muebles de tu dormitorio en casa: camas individuales y dobles, estructuras con almacenaje, cómodas, cajoneras y mesitas de noche.',
    parrafos: [
      'Un dormitorio suele reunir varios muebles a la vez. Si vas a renovarlo entero, cuéntanoslo en la solicitud: montamos varios muebles en una misma visita y organizamos el trabajo contigo.',
      'En cada mueble cuidamos lo que se usa a diario: una estructura firme en la cama y cajones con las guías bien colocadas y los frentes ajustados.',
    ],
    puntos: [
      `Mesitas de noche desde ${eur(8)}`,
      `Cómodas y cajoneras desde ${eur(10)}`,
      `Camas y estructuras desde ${eur(9)}`,
      'Varios muebles en una visita',
    ],
    bloques: [
      {
        titulo: 'Camas y estructuras',
        texto:
          'Camas individuales, dobles y estructuras con almacenaje: montaje de estructura y somier, instalación de patas y ajuste de piezas.',
      },
      {
        titulo: 'Cómodas y cajoneras',
        texto:
          'Montaje de estructura y cajones, colocación de guías y ajuste de frentes para que los cajones deslicen bien.',
      },
      {
        titulo: 'Mesitas de noche',
        texto:
          `Mesitas con cajones o puertas: estructura, cajones, tiradores y ajustes finales, desde ${eur(8)}.`,
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una cama?',
        respuesta:
          `El montaje de una cama o estructura empieza en ${eur(9)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Montáis camas con almacenaje?',
        respuesta:
          'Sí. Montamos camas individuales y dobles y estructuras con almacenaje. Indica el modelo en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Podéis montar todo el dormitorio en una visita?',
        respuesta:
          'Sí. Montamos varios muebles en una misma visita: cama, cómoda, mesitas y armario, por ejemplo.',
      },
      {
        pregunta: '¿También montáis el armario del dormitorio?',
        respuesta:
          `Sí, armarios de puertas abatibles desde ${eur(5)}, de puertas correderas desde ${eur(6)} y vestidores desde ${eur(7)}.`,
      },
    ],
    servicio: {
      nombre: 'Montaje de dormitorios',
      descripcion:
        'Montaje a domicilio en Madrid de camas, cómodas, cajoneras y mesitas de noche.',
    },
    imagen: './images/cama.webp',
    imagenAlt: 'Cama con estructura montada en un dormitorio',
    ids: [8, 9, 10],
    categoria: 'Dormitorio',
    relacionadas: [
      'montaje-armarios-madrid',
      'montaje-salones-madrid',
      'montaje-mesas-escritorios-madrid',
      'precios',
    ],
  },

  /* ---------------------------- SALONES ---------------------------- */
  {
    path: 'montaje-salones-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de muebles de salón en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
      'Muebles de TV y composiciones de salón montados en tu casa.',
    ),
    etiqueta: 'Montaje de muebles de salón',
    h1: { antes: 'Montaje de', resaltado: 'muebles de salón', despues: 'en Madrid' },
    kicker: 'Salón',
    h2: 'Tu salón completo: del mueble de TV a la composición con vitrinas',
    intro:
      'Montamos muebles de televisión, bajos y modulares, y composiciones de salón con módulos, vitrinas y estanterías, firmes y bien nivelados.',
    parrafos: [
      'En una composición de salón los módulos tienen que quedar alineados entre sí para que el conjunto se vea como una sola pieza. Por eso la nivelación y el ajuste de puertas forman parte de cada montaje.',
      'Si el salón comparte espacio con el comedor o la zona de trabajo, también montamos mesas de comedor y escritorios en la misma visita.',
    ],
    puntos: [
      `Muebles de televisión desde ${eur(11)}`,
      `Composición completa desde ${eur(12)}`,
      'Módulos, vitrinas y baldas',
      'Nivelación incluida',
    ],
    bloques: [
      {
        titulo: 'Muebles de televisión',
        texto:
          'Bajos y modulares: montaje de estructura, puertas y cajones, baldas, ajustes y nivelación.',
      },
      {
        titulo: 'Composiciones de salón',
        texto:
          'Montaje de módulos y vitrinas, baldas y estantes, ajuste de puertas y nivelación de todo el conjunto.',
      },
      {
        titulo: 'Junto con otras estancias',
        texto:
          'Si también necesitas una mesa de comedor, un escritorio o una estantería, indícalo y organizamos todo el trabajo en una misma visita.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un mueble de salón?',
        respuesta:
          `Un mueble de televisión empieza en ${eur(11)} y una composición de salón completa en ${eur(12)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Montáis composiciones con vitrinas?',
        respuesta: 'Sí. Montamos módulos, vitrinas, baldas y estantes, con el ajuste de puertas y la nivelación.',
      },
      {
        pregunta: '¿Qué datos necesito para el presupuesto?',
        respuesta:
          'Qué mueble es, cuántos módulos tiene y tu zona. Puedes añadir el modelo o la tienda en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Montáis también la mesa de comedor?',
        respuesta: `Sí, las mesas de comedor, extensibles y auxiliares parten de ${eur(16)}.`,
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles de salón',
      descripcion:
        'Montaje a domicilio en Madrid de muebles de televisión y composiciones de salón con módulos y vitrinas.',
    },
    imagen: './images/mueble-tv.webp',
    imagenAlt: 'Mueble de televisión montado y nivelado en un salón',
    ids: [11, 12],
    categoria: 'Salón',
    relacionadas: [
      'montaje-mesas-escritorios-madrid',
      'montaje-estanterias-madrid',
      'montaje-dormitorios-madrid',
      'precios',
    ],
  },

  /* ---------------------------- MESAS ---------------------------- */
  {
    path: 'montaje-mesas-escritorios-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de mesas y escritorios en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Trato cercano'],
      'Mesas de comedor y escritorios montados, nivelados y bien ajustados.',
    ),
    etiqueta: 'Montaje de mesas y escritorios',
    h1: { antes: 'Montaje de', resaltado: 'mesas y escritorios', despues: 'en Madrid' },
    kicker: 'Mesas y escritorios',
    h2: 'Mesas estables desde el primer día y escritorios listos para trabajar',
    intro:
      'Montamos mesas de comedor, extensibles y auxiliares, y escritorios de trabajo y estudio, con cajones si los incluyen.',
    parrafos: [
      'Una mesa tiene que quedar firme: por eso terminamos el montaje de las mesas de comedor con una revisión de estabilidad y, en las extensibles, con la colocación de sus mecanismos.',
      'Si estás preparando un espacio de trabajo en casa, también podemos montar la estantería o el mueble auxiliar que lo acompaña en la misma visita.',
    ],
    puntos: [
      `Mesas de comedor desde ${eur(13)}`,
      `Escritorios desde ${eur(14)}`,
      'Extensibles y auxiliares',
      'Revisión de estabilidad',
    ],
    bloques: [
      {
        titulo: 'Mesas de comedor',
        texto:
          'Montaje de patas, ensamblaje de la estructura, colocación de extensibles y revisión de estabilidad.',
      },
      {
        titulo: 'Escritorios',
        texto:
          'Montaje del tablero, estructura y patas, cajones si el escritorio los incluye y ajustes finales.',
      },
      {
        titulo: 'Varios muebles a la vez',
        texto:
          `Si tienes varias mesas o más muebles por montar, nuestro servicio de varios muebles parte de ${eur(20)}.`,
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una mesa de comedor?',
        respuesta:
          `El montaje de una mesa de comedor empieza en ${eur(13)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Montáis mesas extensibles?',
        respuesta: 'Sí, y la colocación de los extensibles forma parte del montaje.',
      },
      {
        pregunta: '¿Cuánto cuesta montar un escritorio?',
        respuesta: `El montaje de un escritorio empieza en ${eur(14)}, con sus cajones si los incluye.`,
      },
      {
        pregunta: '¿Podéis montar varios escritorios o mesas?',
        respuesta:
          'Sí. En el formulario puedes indicar la cantidad o elegir el servicio de montaje de varios muebles.',
      },
    ],
    servicio: {
      nombre: 'Montaje de mesas y escritorios',
      descripcion:
        'Montaje a domicilio en Madrid de mesas de comedor, extensibles y auxiliares, y de escritorios.',
    },
    imagen: './images/comedor.webp',
    imagenAlt: 'Mesa de comedor montada',
    ids: [13, 14, 20],
    categoria: 'Mesas y auxiliares',
    relacionadas: [
      'montaje-salones-madrid',
      'montaje-estanterias-madrid',
      'montaje-dormitorios-madrid',
      'precios',
    ],
  },

  /* ---------------------------- ESTANTERÍAS ---------------------------- */
  {
    path: 'montaje-estanterias-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de estanterías en Madrid | ArmaMuebles',
    description: meta(
      ['Llevamos herramientas', 'Nos llevamos los cartones', 'Trato cercano'],
      'Estanterías, zapateros y auxiliares, fijados si hace falta.',
    ),
    etiqueta: 'Montaje de estanterías y almacenaje',
    h1: { antes: 'Montaje de', resaltado: 'estanterías y almacenaje', despues: 'en Madrid' },
    kicker: 'Almacenamiento',
    h2: 'Estanterías, zapateros y auxiliares bien nivelados',
    intro:
      'Montamos estanterías, librerías y muebles modulares, zapateros, recibidores y aparadores. Las estanterías se fijan a la pared si hace falta.',
    parrafos: [
      'En una estantería alta o una librería, la estabilidad importa tanto como el acabado. Por eso nivelamos cada pieza y, si el mueble lo requiere, la fijamos a la pared.',
      'Los muebles de almacenamiento se suelen comprar de varios en varios: si es tu caso, indícalo en la solicitud y los montamos en la misma visita.',
    ],
    puntos: [
      `Estanterías desde ${eur(15)}`,
      `Zapateros desde ${eur(17)}`,
      `Muebles auxiliares desde ${eur(16)}`,
      'Fijación a pared si procede',
    ],
    bloques: [
      {
        titulo: 'Estanterías y librerías',
        texto:
          'Montaje de estructura, colocación de baldas, nivelación y fijación a pared si procede.',
      },
      {
        titulo: 'Zapateros y recibidores',
        texto:
          'Montaje de estructura, puertas abatibles, baldas interiores y ajuste de los cierres.',
      },
      {
        titulo: 'Auxiliares y aparadores',
        texto:
          'Montaje de estructura, puertas y cajones, baldas interiores y ajustes finales.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una estantería?',
        respuesta:
          `El montaje de una estantería empieza en ${eur(15)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Fijáis las estanterías a la pared?',
        respuesta: 'Sí, si hace falta. La fijación a pared se contempla cuando procede.',
      },
      {
        pregunta: '¿Montáis zapateros y muebles de recibidor?',
        respuesta: `Sí. Zapateros y muebles para recibidores parten de ${eur(17)}.`,
      },
      {
        pregunta: '¿Puedo pedir varias estanterías?',
        respuesta: 'Sí. En el formulario puedes indicar la cantidad que necesitas.',
      },
    ],
    servicio: {
      nombre: 'Montaje de estanterías y almacenaje',
      descripcion:
        'Montaje a domicilio en Madrid de estanterías, librerías, zapateros y muebles auxiliares.',
    },
    imagen: './images/zapatero.webp',
    imagenAlt: 'Mueble zapatero montado',
    ids: [15, 16, 17],
    categoria: 'Almacenamiento',
    relacionadas: [
      'montaje-salones-madrid',
      'montaje-muebles-bano-madrid',
      'montaje-mesas-escritorios-madrid',
      'precios',
    ],
  },

  /* ---------------------------- BAÑO ---------------------------- */
  {
    path: 'montaje-muebles-bano-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de muebles de baño en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Te atendemos solo nosotros'],
      'Muebles de baño montados, nivelados y bien fijados.',
    ),
    etiqueta: 'Montaje de muebles de baño',
    h1: { antes: 'Montaje de', resaltado: 'muebles de baño', despues: 'en Madrid' },
    kicker: 'Baño',
    h2: 'Muebles de baño y cajoneras con los ajustes bien hechos',
    intro:
      'Montamos muebles de baño, cajoneras y auxiliares en tu domicilio: montaje del mueble y sus cajones, colocación de puertas y ajustes finales.',
    parrafos: [
      'En un baño el espacio suele ser reducido y cada centímetro cuenta. Revisamos que cajones y puertas abran y cierren bien y hacemos los ajustes finales.',
      'Si compraste el mueble en una tienda de bricolaje como Leroy Merlin, Obramat, Bricomart o Brico Depot, indícanos el modelo en los detalles de la solicitud.',
    ],
    puntos: [
      `Muebles de baño desde ${eur(18)}`,
      'Cajoneras y auxiliares',
      'Puertas y cajones ajustados',
      'Servicio a domicilio',
    ],
    bloques: [
      {
        titulo: 'Qué incluye el montaje',
        texto: 'Montaje del mueble y de los cajones, colocación de las puertas y ajustes finales.',
      },
      {
        titulo: 'Qué nos ayuda a valorarlo',
        texto:
          'El modelo y las medidas del mueble y, si lo tienes, el nombre de la tienda donde lo compraste.',
      },
      {
        titulo: 'Otros muebles de la casa',
        texto:
          'Si además tienes estanterías, zapateros o armarios por montar, indícalo y lo organizamos en una misma visita.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un mueble de baño?',
        respuesta:
          `El montaje de un mueble de baño empieza en ${eur(18)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
      },
      {
        pregunta: '¿Qué incluye el montaje?',
        respuesta:
          'Montaje del mueble y de los cajones, colocación de las puertas y ajustes finales.',
      },
      {
        pregunta: '¿Montáis muebles de baño de Leroy Merlin?',
        respuesta:
          'Sí, y también de Obramat, Bricomart, Brico Depot, Conforama e IKEA. ArmaMuebles es un servicio independiente, sin afiliación a estas marcas.',
      },
      {
        pregunta: '¿Podéis montar varios muebles en la misma visita?',
        respuesta: 'Sí. Indícalo en los detalles de la solicitud.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles de baño',
      descripcion: 'Montaje a domicilio en Madrid de muebles de baño, cajoneras y auxiliares.',
    },
    imagen: './images/muebles-bano.webp',
    imagenAlt: 'Mueble de baño montado con sus cajones',
    ids: [18],
    categoria: 'Almacenamiento',
    relacionadas: [
      'montaje-estanterias-madrid',
      'montaje-cocinas-madrid',
      'montaje-armarios-madrid',
      'precios',
    ],
  },

  /* ---------------------------- ELECTRODOMÉSTICOS ---------------------------- */
  {
    path: 'colocacion-electrodomesticos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Colocación de electrodomésticos en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Te atendemos solo nosotros', 'Trato cercano'],
      'Colocamos horno, placa, campana, lavavajillas y más en tu cocina.',
    ),
    etiqueta: 'Colocación de electrodomésticos',
    h1: { antes: 'Colocación de', resaltado: 'electrodomésticos', despues: 'en Madrid' },
    kicker: 'Solo electrodomésticos',
    h2: 'Si ya tienes la cocina montada, colocamos tus electrodomésticos',
    intro:
      'Colocamos tus electrodomésticos integrables o de libre instalación: en su hueco, ajustados y bien integrados en el mobiliario.',
    parrafos: [
      'Este servicio es para quien ya tiene la cocina montada. Si todavía tienes que montarla, no lo necesitas por separado: en todas nuestras cocinas la colocación de los electrodomésticos ya va incluida.',
      'En el formulario puedes indicar cuántos electrodomésticos son. Añade en los detalles cuáles son y si son integrables o de libre instalación, y revisamos tu caso.',
    ],
    puntos: [
      `Desde ${eur(19)}`,
      'Integrables o de libre instalación',
      'Incluido si montamos tu cocina',
      'Revisión de encaje',
    ],
    bloques: [
      {
        titulo: 'Qué incluye',
        texto:
          'Colocación en su hueco, ajuste de posición, integración estética en el mobiliario y revisión de encaje.',
      },
      {
        titulo: 'Qué electrodomésticos',
        texto: 'Horno, placa de cocina, campana, microondas, lavavajillas y frigorífico, entre otros, según la instalación.',
      },
      {
        titulo: 'Con la cocina, incluido',
        texto:
          `Si también necesitas montar la cocina, la colocación de electrodomésticos va incluida en el montaje, desde ${eur(1)}.`,
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta colocar un electrodoméstico?',
        respuesta:
          `La colocación de electrodomésticos parte de ${eur(19)}. El precio definitivo se confirma tras revisar las características.`,
      },
      {
        pregunta: '¿Colocáis electrodomésticos integrables?',
        respuesta: 'Sí, tanto integrables como de libre instalación.',
      },
      {
        pregunta: '¿Tengo que pagar aparte si me montáis la cocina?',
        respuesta:
          'No. En todas nuestras cocinas la colocación de los electrodomésticos va incluida en el montaje.',
      },
      {
        pregunta: '¿Qué tengo que indicar en la solicitud?',
        respuesta:
          'Cuántos electrodomésticos son, cuáles y si son integrables o de libre instalación, además de tu zona.',
      },
    ],
    servicio: {
      nombre: 'Colocación de electrodomésticos',
      descripcion:
        'Colocación a domicilio en Madrid de electrodomésticos integrables o de libre instalación.',
    },
    imagen: './images/electrodomesticos.webp',
    imagenAlt: 'Electrodomésticos integrados en los muebles de una cocina',
    ids: [19],
    categoria: 'Cocinas',
    relacionadas: [
      'montaje-cocinas-madrid',
      'montaje-muebles-bano-madrid',
      'montaje-salones-madrid',
      'precios',
    ],
  },
];
