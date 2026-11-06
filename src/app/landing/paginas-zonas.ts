import { PRECIOS_TEXTO, PaginaSeo, TIENDAS_TEXTO } from './pagina-seo';

export const PAGINAS_ZONAS: PaginaSeo[] = [
  /* ---------------------------- BARAJAS ---------------------------- */
  {
    path: 'montador-muebles-barajas',
    tipo: 'zona',
    padre: 'zonas',
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
    parrafos: [
      'Atendemos viviendas de todo el distrito, en el extremo noreste de Madrid capital. Acordamos contigo el día y la hora para que el montaje se adapte a tu agenda.',
      'En el formulario de presupuesto, selecciona «Madrid capital» como zona e indica tu barrio en los detalles de la solicitud.',
    ],
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
      { pregunta: '¿Cuánto cuesta un montador de muebles en Barajas?', respuesta: PRECIOS_TEXTO },
      {
        pregunta: '¿Vais a todos los barrios de Barajas?',
        respuesta:
          'Damos servicio en el distrito de Barajas: Alameda de Osuna, Casco Histórico de Barajas, Timón, Corralejos y la zona del Aeropuerto. En el formulario selecciona «Madrid capital» como zona.',
      },
      { pregunta: '¿Montáis muebles de IKEA y Leroy Merlin en Barajas?', respuesta: TIENDAS_TEXTO },
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
    imagen: './images/cocina-pequena.webp',
    imagenAlt: 'Cocina compacta montada',
    ids: [8, 5, 9, 1],
    relacionadas: ['montador-muebles-san-blas', 'zonas', 'montaje-cocinas-madrid'],
  },

  /* ---------------------------- SAN BLAS ---------------------------- */
  {
    path: 'montador-muebles-san-blas',
    tipo: 'zona',
    padre: 'zonas',
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
    parrafos: [
      'Trabajamos en los ocho barrios del distrito, al este de Madrid capital. Si estás amueblando un piso entero, cuéntanoslo: montamos varios muebles en una misma visita.',
      'Para pedir presupuesto, selecciona «Madrid capital» en el paso de zona del formulario y, si quieres, añade tu barrio en los detalles.',
    ],
    puntos: [
      'Cocinas desde 120 €',
      'Armarios desde 65 €',
      'Varios muebles en una visita',
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
    imagen: './images/vestidor.webp',
    imagenAlt: 'Vestidor modular montado',
    ids: [1, 5, 6, 20],
    relacionadas: ['montador-muebles-barajas', 'zonas', 'montaje-armarios-madrid'],
  },
];
