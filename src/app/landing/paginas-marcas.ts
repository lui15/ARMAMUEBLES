import { eur, eurMinimo } from '../datos/catalogo';
import { meta, PaginaSeo, PRECIOS_TEXTO } from './pagina-seo';

export const PAGINAS_MARCAS: PaginaSeo[] = [
  /* ---------------------------- IKEA ---------------------------- */
  {
    path: 'montaje-muebles-ikea-madrid',
    guia: 'cuanto-cuesta-montar-cocina-ikea',
    tipo: 'marca',
    padre: 'montaje-muebles-por-tienda',
    title: 'Montaje de muebles IKEA en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
      'Montadores de muebles IKEA en Madrid: PAX, cocinas y camas.',
    ),
    etiqueta: 'Montaje de muebles IKEA',
    h1: { antes: 'Montadores de', resaltado: 'muebles IKEA', despues: 'en Madrid' },
    kicker: 'Muebles IKEA',
    h2: 'Tú compras en IKEA, nosotros lo montamos en tu casa',
    intro:
      'Montamos armarios, cocinas, camas, cómodas, escritorios, estanterías y mucho más. Vamos a tu domicilio, montamos, ajustamos y revisamos cada mueble. ArmaMuebles es un servicio independiente y no está afiliado a IKEA.',
    parrafos: [
      'Si acabas de hacer la compra, o tienes las cajas esperando en casa, solo tienes que decirnos qué muebles son y en qué zona estás. Con los nombres de los productos nos resulta más fácil revisar tu caso.',
      'Montamos desde una mesita de noche hasta una cocina completa. Para los armarios modulares PAX tenemos una página propia con más detalle.',
    ],
    puntos: [
      `Montajes desde ${eurMinimo()}`,
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
          `Montamos cocinas completas (módulos bajos y altos, columnas, cajoneras y puertas) y colocamos tus electrodomésticos. Desde ${eur(1)}.`,
      },
      {
        titulo: 'Sin complicaciones',
        texto: 'Coordinamos contigo el día y la hora. El mueble queda montado, nivelado y revisado.',
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta que me monten un mueble de IKEA?', respuesta: PRECIOS_TEXTO },
      {
        pregunta: '¿Puedo contrataros si ya he comprado en IKEA?',
        respuesta:
          'Sí. Compras los muebles donde prefieras y nos pides presupuesto para el montaje. En el formulario nos indicas qué muebles son y en qué zona estás.',
      },
      {
        pregunta: '¿Montáis cocinas de IKEA?',
        respuesta:
          `Sí, montamos cocinas completas de IKEA y colocamos los electrodomésticos. Una cocina pequeña empieza en ${eur(1)}.`,
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
    imagen: './images/mesita-noche.webp',
    imagenAlt: 'Mesita de noche montada',
    ids: [8, 5, 9, 1],
    relacionadas: ['montaje-armarios-pax', 'montaje-cocinas-madrid', 'montaje-muebles-por-tienda'],
  },

  /* ---------------------------- LEROY MERLIN ---------------------------- */
  {
    path: 'montaje-muebles-leroy-merlin',
    tipo: 'marca',
    padre: 'montaje-muebles-por-tienda',
    title: 'Montaje de muebles Leroy Merlin en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Te atendemos solo nosotros', 'Llevamos herramientas'],
      'Montamos tus muebles de Leroy Merlin en tu casa de Madrid.',
    ),
    etiqueta: 'Montaje de muebles Leroy Merlin',
    h1: { antes: 'Montaje de', resaltado: 'muebles de Leroy Merlin', despues: 'en Madrid' },
    kicker: 'Muebles Leroy Merlin',
    h2: 'Compras en Leroy Merlin, nosotros montamos en tu casa',
    intro:
      'Si has comprado muebles o una cocina en Leroy Merlin, nos encargamos del montaje en tu domicilio. ArmaMuebles es un servicio independiente y no está afiliado a Leroy Merlin.',
    parrafos: [
      'Muchos muebles de cocina, baño y almacenaje se compran en tiendas de bricolaje como esta. Los montamos a domicilio con los mismos ajustes finales que cualquier otro mueble.',
      'En la solicitud, indica qué has comprado y, si los tienes, el modelo y las medidas. Revisamos los detalles y te contestamos por teléfono o WhatsApp.',
    ],
    puntos: [
      'Cocinas con electrodomésticos colocados',
      'Armarios y vestidores',
      'Muebles de baño y almacenamiento',
      `Montajes desde ${eurMinimo()}`,
    ],
    bloques: [
      {
        titulo: 'Cocinas de Leroy Merlin',
        texto:
          `Montamos módulos bajos y altos, columnas, cajoneras y puertas, y colocamos tus electrodomésticos. Desde ${eur(1)}.`,
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
          `Una cocina empieza en ${eur(1)} con la colocación de electrodomésticos incluida, un armario de puertas abatibles en ${eur(5)} y un mueble de baño en ${eur(18)}. El precio definitivo se confirma tras revisar las características y dimensiones.`,
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
    imagen: './images/cocina-mediana.webp',
    imagenAlt: 'Cocina de tamaño medio montada, con muebles altos y bajos',
    ids: [1, 5, 18, 15],
    relacionadas: ['montaje-cocinas-madrid', 'montaje-muebles-bano-madrid', 'montaje-muebles-por-tienda'],
  },
];
