import { NEGOCIO, SITE_URL } from '../seo.service';

export interface PaginaSeo {
  /** Ruta sin barra inicial. '' es la página de inicio. */
  path: string;
  title: string;
  description: string;
  /** Texto del enlace interno hacia esta página. */
  etiqueta: string;
  h1: { antes: string; resaltado: string; despues: string };
  kicker: string;
  h2: string;
  intro: string;
  puntos: string[];
  bloques: { titulo: string; texto: string }[];
  faqs: { pregunta: string; respuesta: string }[];
  servicio: { nombre: string; descripcion: string };
  zona?: string;
}

const ZONAS_TEXTO =
  'Madrid capital y municipios como Alcorcón, Móstoles, Leganés, Getafe, Fuenlabrada, Pozuelo de Alarcón, Majadahonda, Las Rozas, Alcobendas, San Sebastián de los Reyes, Torrejón de Ardoz, Alcalá de Henares, Coslada, Rivas-Vaciamadrid, Arganda del Rey, Parla, Pinto y Valdemoro. Si tu zona no aparece, elige «Otra zona de Madrid» en el formulario.';

const PRECIOS_TEXTO =
  'Nuestros montajes empiezan en 25 €. Como referencia, un armario de puertas abatibles empieza en 65 € y una cocina en 120 € con la colocación de electrodomésticos incluida. El precio definitivo se confirma tras revisar las características y dimensiones.';

const TIENDAS_TEXTO =
  'Montamos muebles de IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot. Si has comprado en otra tienda, cuéntanoslo en la solicitud y lo revisamos.';

export const PAGINAS: PaginaSeo[] = [
  /* ---------------------------- INICIO ---------------------------- */
  {
    path: '',
    title: 'Montaje de Muebles y Cocinas en Madrid | ArmaMuebles',
    description:
      'Montaje de muebles y cocinas a domicilio en Madrid: cocinas con electrodomésticos, armarios y dormitorios. Desde 25 €. Presupuesto sin compromiso.',
    etiqueta: 'Montaje de muebles en Madrid',
    h1: { antes: 'Montamos tu', resaltado: 'cocina completa', despues: '' },
    kicker: 'Montaje de muebles y cocinas',
    h2: 'Montamos tus muebles y tu cocina en Madrid, a domicilio',
    intro:
      'ArmaMuebles es un servicio de montaje de muebles a domicilio en Madrid. Tú compras los muebles en IKEA, Leroy Merlin, Obramat, Conforama, Bricomart o Brico Depot; nosotros los dejamos montados, nivelados y listos para usar.',
    puntos: [
      'Montajes desde 25 €',
      'Cocinas con colocación de electrodomésticos',
      'Armarios, dormitorios, salones y mesas',
      'Presupuesto orientativo sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Cocinas con electrodomésticos incluidos',
        texto:
          'Montamos cocinas pequeñas, medianas, grandes y con isla desde 120 €. La colocación de horno, placa, campana, microondas, lavavajillas y frigorífico va incluida en el montaje.',
      },
      {
        titulo: 'Armarios y dormitorios',
        texto:
          'Armarios de puertas abatibles desde 65 € y de puertas correderas desde 90 €, vestidores, camas, cómodas y mesitas de noche, con puertas y guías bien ajustadas.',
      },
      {
        titulo: 'Salón, mesas y almacenamiento',
        texto:
          'Muebles de televisión, composiciones de salón, mesas de comedor, escritorios, estanterías, zapateros y muebles de baño. También montamos varios muebles en una misma visita.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un mueble en Madrid?',
        respuesta: PRECIOS_TEXTO,
      },
      {
        pregunta: '¿Montáis muebles de cualquier tienda?',
        respuesta: TIENDAS_TEXTO + ' ArmaMuebles no está afiliada a ninguna de ellas.',
      },
      {
        pregunta: '¿En qué zonas trabajáis?',
        respuesta: ZONAS_TEXTO,
      },
      {
        pregunta: '¿Cómo pido presupuesto?',
        respuesta:
          'Con el formulario de cuatro pasos de esta página: eliges el mueble, la cantidad y la zona, y dejas tus datos. Te preparamos una propuesta personalizada y te contactamos por teléfono o WhatsApp.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles a domicilio',
      descripcion:
        'Montaje de muebles, armarios y cocinas a domicilio en Madrid, con colocación de electrodomésticos en las cocinas.',
    },
  },

  /* ---------------------------- COCINAS ---------------------------- */
  {
    path: 'montaje-cocinas-madrid',
    title: 'Montaje de Cocinas en Madrid a Domicilio | ArmaMuebles',
    description:
      'Montaje de cocinas en Madrid con electrodomésticos incluidos: pequeñas, medianas, grandes y con isla desde 120 €. Pide tu presupuesto sin compromiso.',
    etiqueta: 'Montaje de cocinas',
    h1: {
      antes: 'Montaje de',
      resaltado: 'cocinas en Madrid',
      despues: 'con electrodomésticos incluidos',
    },
    kicker: 'Montaje de cocinas',
    h2: 'Tu cocina montada, nivelada y con los electrodomésticos colocados',
    intro:
      'Si has comprado una cocina en IKEA, Leroy Merlin u otra tienda, la montamos en tu domicilio: muebles bajos y altos, puertas, cajones, tiradores y nivelación final. La colocación de tus electrodomésticos va incluida.',
    puntos: [
      'Cocina pequeña desde 120 €',
      'Cocina mediana desde 220 €',
      'Cocina grande desde 350 €',
      'Cocina con isla desde 450 €',
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
          'Si solo necesitas colocar tus electrodomésticos integrables o de libre instalación, ofrecemos ese servicio por separado desde 35 €.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una cocina en Madrid?',
        respuesta:
          'Una cocina pequeña empieza en 120 €, una mediana en 220 €, una grande en 350 € y una con isla en 450 €, con la colocación de electrodomésticos incluida. El precio definitivo se confirma tras revisar las características y dimensiones.',
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
  },

  /* ---------------------------- ARMARIOS ---------------------------- */
  {
    path: 'montaje-armarios-madrid',
    title: 'Montaje de Armarios en Madrid a Domicilio | ArmaMuebles',
    description:
      'Montaje de armarios en Madrid: puertas abatibles desde 65 €, correderas desde 90 € y vestidores. Servicio a domicilio. Presupuesto sin compromiso.',
    etiqueta: 'Montaje de armarios',
    h1: { antes: 'Montaje de', resaltado: 'armarios en Madrid', despues: 'a domicilio' },
    kicker: 'Montaje de armarios',
    h2: 'Armarios y vestidores montados, con las puertas bien ajustadas',
    intro:
      'Montamos armarios de puertas abatibles y correderas, vestidores y sistemas modulares en tu casa: estructura, baldas, barras, puertas y ajuste final.',
    puntos: [
      'Puertas abatibles desde 65 €',
      'Puertas correderas desde 90 €',
      'Vestidores desde 120 €',
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
          'Un armario de puertas abatibles empieza en 65 €, uno de puertas correderas en 90 € y un vestidor en 120 €. El precio definitivo se confirma tras revisar las características y dimensiones.',
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
  },

  /* ---------------------------- IKEA ---------------------------- */
  {
    path: 'montaje-muebles-ikea-madrid',
    title: 'Montadores de Muebles IKEA en Madrid | ArmaMuebles',
    description:
      'Montadores de muebles IKEA en Madrid: armarios, cocinas, camas, cómodas y estanterías montados en tu casa. Montajes desde 25 €. Pide presupuesto.',
    etiqueta: 'Montaje de muebles IKEA',
    h1: { antes: 'Montadores de', resaltado: 'muebles IKEA en Madrid', despues: 'a domicilio' },
    kicker: 'Muebles IKEA',
    h2: 'Tú compras en IKEA, nosotros lo montamos en tu casa',
    intro:
      'Montamos armarios, cocinas, camas, cómodas, escritorios, estanterías y mucho más. Vamos a tu domicilio, montamos, ajustamos y revisamos cada mueble. ArmaMuebles es un servicio independiente y no está afiliado a IKEA.',
    puntos: [
      'Montajes desde 25 €',
      'Cocinas IKEA con electrodomésticos colocados',
      'Armarios, camas, cómodas y estanterías',
      'A domicilio en Madrid',
    ],
    bloques: [
      {
        titulo: 'Qué muebles de IKEA montamos',
        texto:
          'Cocinas, armarios de puertas abatibles y correderas, vestidores, camas con estructura y almacenaje, cómodas, mesitas de noche, muebles de televisión, escritorios, estanterías, zapateros y muebles de baño.',
      },
      {
        titulo: 'Cocinas de IKEA',
        texto:
          'Montamos cocinas completas (módulos bajos y altos, columnas, cajoneras y puertas) y colocamos tus electrodomésticos. Desde 120 €.',
      },
      {
        titulo: 'Sin complicaciones',
        texto:
          'Coordinamos contigo el día y la hora. El mueble queda montado, nivelado y revisado.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta que me monten un mueble de IKEA?',
        respuesta: PRECIOS_TEXTO,
      },
      {
        pregunta: '¿Puedo contrataros si ya he comprado en IKEA?',
        respuesta:
          'Sí. Compras los muebles donde prefieras y nos pides presupuesto para el montaje. En el formulario nos indicas qué muebles son y en qué zona estás.',
      },
      {
        pregunta: '¿Montáis cocinas de IKEA?',
        respuesta:
          'Sí, montamos cocinas completas de IKEA y colocamos los electrodomésticos. Una cocina pequeña empieza en 120 €.',
      },
      {
        pregunta: '¿Estáis afiliados a IKEA?',
        respuesta:
          'No. ArmaMuebles es un servicio de montaje independiente; IKEA es una marca de su propietario.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles IKEA',
      descripcion: 'Montaje a domicilio en Madrid de muebles y cocinas comprados en IKEA.',
    },
  },

  /* ---------------------------- PAX ---------------------------- */
  {
    path: 'montaje-armarios-pax',
    title: 'Montar Armario PAX de IKEA en Madrid | ArmaMuebles',
    description:
      'Montaje de armarios IKEA PAX en Madrid: puertas abatibles o correderas, baldas, barras y ajuste final. Servicio a domicilio. Pide presupuesto.',
    etiqueta: 'Montaje de armarios PAX',
    h1: { antes: 'Montaje de', resaltado: 'armarios PAX de IKEA en Madrid', despues: '' },
    kicker: 'Armarios PAX',
    h2: 'Tu armario PAX montado y con las puertas bien ajustadas',
    intro:
      'PAX es el sistema modular de armarios de IKEA. Lo montamos en tu domicilio: estructura, baldas, barras, interiores, puertas abatibles o correderas y ajuste final. ArmaMuebles es independiente y no está afiliada a IKEA.',
    puntos: [
      'Armarios abatibles desde 65 €',
      'Armarios con puertas correderas desde 90 €',
      'Vestidores desde 120 €',
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
          'Depende de las dimensiones, las puertas y los interiores. Como referencia, nuestros armarios de puertas abatibles empiezan en 65 € y los de puertas correderas en 90 €. Te confirmamos el precio tras revisar las características.',
      },
      {
        pregunta: '¿Montáis PAX con puertas correderas?',
        respuesta:
          'Sí. Instalamos las guías, colocamos las puertas y las regulamos para que deslicen correctamente.',
      },
      {
        pregunta: '¿Montáis también otros armarios y vestidores?',
        respuesta:
          'Sí, montamos armarios abatibles y correderos y vestidores modulares. Si tu proyecto es especial, descríbelo en el formulario y lo revisamos.',
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
  },

  /* ---------------------------- LEROY MERLIN ---------------------------- */
  {
    path: 'montaje-muebles-leroy-merlin',
    title: 'Montar Muebles de Leroy Merlin en Madrid | ArmaMuebles',
    description:
      'Montaje de muebles y cocinas de Leroy Merlin en Madrid: armarios, cocinas con electrodomésticos, baño y más. Servicio a domicilio. Pide presupuesto.',
    etiqueta: 'Montaje de muebles Leroy Merlin',
    h1: {
      antes: 'Montaje de',
      resaltado: 'muebles de Leroy Merlin en Madrid',
      despues: 'a domicilio',
    },
    kicker: 'Muebles Leroy Merlin',
    h2: 'Compras en Leroy Merlin, nosotros montamos en tu casa',
    intro:
      'Si has comprado muebles o una cocina en Leroy Merlin, nos encargamos del montaje en tu domicilio. ArmaMuebles es un servicio independiente y no está afiliado a Leroy Merlin.',
    puntos: [
      'Cocinas con electrodomésticos colocados',
      'Armarios y vestidores',
      'Muebles de baño y almacenamiento',
      'Montajes desde 25 €',
    ],
    bloques: [
      {
        titulo: 'Cocinas de Leroy Merlin',
        texto:
          'Montamos módulos bajos y altos, columnas, cajoneras y puertas, y colocamos tus electrodomésticos. Desde 120 €.',
      },
      {
        titulo: 'Armarios, baño y almacenamiento',
        texto:
          'Armarios abatibles y correderos, vestidores, muebles de baño, zapateros y estanterías, nivelados y con los ajustes finales hechos.',
      },
      {
        titulo: 'También otras tiendas de bricolaje',
        texto:
          'Además de Leroy Merlin, montamos muebles comprados en Obramat, Bricomart, Brico Depot, Conforama e IKEA.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Montáis muebles comprados en Leroy Merlin?',
        respuesta:
          'Sí. Compras los muebles en la tienda y nos pides presupuesto para el montaje indicando qué muebles son y tu zona.',
      },
      {
        pregunta: '¿Cuánto cuesta montar un mueble de Leroy Merlin?',
        respuesta:
          'Una cocina empieza en 120 € con la colocación de electrodomésticos incluida, un armario de puertas abatibles en 65 € y un mueble de baño en 45 €. El precio definitivo se confirma tras revisar las características y dimensiones.',
      },
      {
        pregunta: '¿Colocáis los electrodomésticos de la cocina?',
        respuesta:
          'Sí. En todas las cocinas la colocación de horno, placa, campana, microondas, lavavajillas y frigorífico va incluida en el montaje.',
      },
      {
        pregunta: '¿Estáis afiliados a Leroy Merlin?',
        respuesta:
          'No. ArmaMuebles es un servicio de montaje independiente; Leroy Merlin es una marca de su propietario.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles Leroy Merlin',
      descripcion: 'Montaje a domicilio en Madrid de muebles y cocinas comprados en Leroy Merlin.',
    },
  },

  /* ---------------------------- BARAJAS ---------------------------- */
  {
    path: 'montador-muebles-barajas',
    title: 'Montador de Muebles en Barajas, Madrid | ArmaMuebles',
    description:
      'Montador de muebles en Barajas (Madrid): cocinas, armarios, camas y estanterías montados en tu casa. Montajes desde 25 €. Pide presupuesto sin compromiso.',
    etiqueta: 'Montador de muebles en Barajas',
    zona: 'Barajas',
    h1: { antes: 'Montador de', resaltado: 'muebles en Barajas', despues: '(Madrid)' },
    kicker: 'Montador en Barajas',
    h2: 'Montaje de muebles a domicilio en el distrito de Barajas',
    intro:
      'Montamos tus muebles en Barajas: Alameda de Osuna, Casco Histórico de Barajas, Timón, Corralejos y la zona del Aeropuerto. Tú compras, nosotros dejamos todo montado, nivelado y listo para usar.',
    puntos: [
      'Montajes desde 25 €',
      'Cocinas con electrodomésticos colocados',
      'Armarios, camas y estanterías',
      'Coordinamos día y hora contigo',
    ],
    bloques: [
      {
        titulo: 'Montaje en tu barrio',
        texto:
          'Atendemos viviendas en Alameda de Osuna, el Casco Histórico de Barajas, Timón y Corralejos. Vamos a tu casa y acordamos contigo el día y la hora.',
      },
      {
        titulo: 'Qué montamos en Barajas',
        texto:
          'Cocinas con electrodomésticos colocados, armarios de puertas abatibles y correderas, camas, cómodas, mesitas de noche, muebles de salón, escritorios y estanterías.',
      },
      {
        titulo: 'Zonas cercanas',
        texto:
          'Si vives cerca de Barajas, en municipios como Coslada o Alcobendas, también puedes pedir presupuesto.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un montador de muebles en Barajas?',
        respuesta: PRECIOS_TEXTO,
      },
      {
        pregunta: '¿Vais a todos los barrios de Barajas?',
        respuesta:
          'Damos servicio en el distrito de Barajas: Alameda de Osuna, Casco Histórico de Barajas, Timón, Corralejos y la zona del Aeropuerto. En el formulario selecciona «Madrid capital» como zona.',
      },
      {
        pregunta: '¿Montáis muebles de IKEA y Leroy Merlin en Barajas?',
        respuesta: TIENDAS_TEXTO,
      },
      {
        pregunta: '¿Cómo pido presupuesto?',
        respuesta:
          'Rellena el formulario de cuatro pasos: mueble, detalles, zona y contacto. Te contactamos por teléfono o WhatsApp con una propuesta personalizada.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles en Barajas',
      descripcion: 'Montaje de muebles y cocinas a domicilio en el distrito de Barajas, Madrid.',
    },
  },

  /* ---------------------------- SAN BLAS ---------------------------- */
  {
    path: 'montador-muebles-san-blas',
    title: 'Montador de Muebles en San Blas, Madrid | ArmaMuebles',
    description:
      'Montador de muebles en San Blas-Canillejas (Madrid): cocinas, armarios, dormitorios y salones a domicilio. Desde 25 €. Pide presupuesto sin compromiso.',
    etiqueta: 'Montador de muebles en San Blas',
    zona: 'San Blas-Canillejas',
    h1: { antes: 'Montador de', resaltado: 'muebles en San Blas', despues: '(Madrid)' },
    kicker: 'Montador en San Blas',
    h2: 'Montaje de muebles a domicilio en San Blas-Canillejas',
    intro:
      'Montamos tus muebles en San Blas-Canillejas: Simancas, Hellín, Amposta, Arcos, Rosas, Rejas, Canillejas y El Salvador. Cocinas, armarios, dormitorios y salones, montados y revisados en tu casa.',
    puntos: [
      'Montajes desde 25 €',
      'Cocinas con electrodomésticos colocados',
      'Armarios, dormitorios y salones',
      'Presupuesto orientativo sin compromiso',
    ],
    bloques: [
      {
        titulo: 'Cocinas y armarios en San Blas',
        texto:
          'Montamos cocinas completas desde 120 € con los electrodomésticos colocados, y armarios abatibles (desde 65 €) o correderos (desde 90 €).',
      },
      {
        titulo: 'Dormitorios, salón y despacho',
        texto:
          'Camas, cómodas, mesitas de noche, muebles de televisión, composiciones de salón, escritorios y estanterías, con los ajustes finales hechos.',
      },
      {
        titulo: 'Barrios y zonas cercanas',
        texto:
          'Trabajamos en los barrios de San Blas-Canillejas. Si vives en un municipio cercano como Coslada, también puedes solicitar presupuesto.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una cocina o un armario en San Blas?',
        respuesta:
          'Una cocina empieza en 120 € con la colocación de electrodomésticos incluida. Un armario de puertas abatibles empieza en 65 € y uno de puertas correderas en 90 €. El precio definitivo se confirma tras revisar las características y dimensiones.',
      },
      {
        pregunta: '¿En qué barrios de San Blas trabajáis?',
        respuesta:
          'En San Blas-Canillejas: Simancas, Hellín, Amposta, Arcos, Rosas, Rejas, Canillejas y El Salvador. En el formulario selecciona «Madrid capital» como zona.',
      },
      {
        pregunta: '¿Podéis montar varios muebles en la misma visita?',
        respuesta:
          'Sí. Si tienes varios muebles por montar, elige «Montaje de varios muebles» en el formulario (desde 40 €) e indica cuáles son en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Cómo pido presupuesto?',
        respuesta:
          'Con el formulario de cuatro pasos de esta página. Te contactamos por teléfono o WhatsApp con una propuesta personalizada.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles en San Blas',
      descripcion:
        'Montaje de muebles y cocinas a domicilio en el distrito de San Blas-Canillejas, Madrid.',
    },
  },
];

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

/** Ruta canónica de la página, con barra inicial. */
export function urlDePagina(p: PaginaSeo): string {
  return '/' + p.path;
}

export function crearJsonLd(p: PaginaSeo): object {
  const url = SITE_URL + urlDePagina(p);
  const idNegocio = SITE_URL + '/#organization';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': SITE_URL + '/#website',
        url: SITE_URL + '/',
        name: NEGOCIO.nombre,
        inLanguage: 'es-ES',
        publisher: { '@id': idNegocio },
      },
      {
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        '@id': idNegocio,
        name: NEGOCIO.nombre,
        url: SITE_URL + '/',
        telephone: NEGOCIO.telefono,
        image: SITE_URL + '/images/logo.png',
        priceRange: '€€',
        // TODO: añadir streetAddress y postalCode si el negocio publica una dirección física.
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madrid',
          addressRegion: 'Comunidad de Madrid',
          addressCountry: 'ES',
        },
        areaServed: [
          { '@type': 'City', name: 'Madrid' },
          { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
        ],
      },
      {
        '@type': 'Service',
        name: p.servicio.nombre,
        description: p.servicio.descripcion,
        serviceType: p.servicio.nombre,
        url,
        provider: { '@id': idNegocio },
        areaServed: { '@type': 'Place', name: p.zona ?? 'Madrid' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
        })),
      },
    ],
  };
}
