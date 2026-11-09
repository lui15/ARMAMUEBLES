import { eur, servicioPorId } from '../datos/catalogo';
import { PRECIO_PAX_CORREDERAS, SERVICIO_MINIMO } from '../datos/precios-extra';
import { PaginaSeo } from './pagina-seo';

/** Guías de precio: responden a "cuánto cuesta" con las cifras de catalogo.ts. */
export const PAGINAS_GUIAS: PaginaSeo[] = [
  /* ---------------------------- ARMARIO PAX ---------------------------- */
  {
    path: 'cuanto-cuesta-montar-armario-pax',
    tipo: 'guia',
    padre: 'precios',
    title: `Cuánto cuesta montar un armario PAX en Madrid (${eur(5)})`,
    description: `Montar un armario PAX en Madrid cuesta desde ${eur(5)} con puertas abatibles y desde ${PRECIO_PAX_CORREDERAS} € con correderas. Qué revisar antes y qué errores evitar al montarlo.`,
    etiqueta: 'Cuánto cuesta montar un armario PAX',
    h1: { antes: '¿Cuánto cuesta montar un', resaltado: 'armario PAX', despues: 'en Madrid?' },
    kicker: 'Guía de precios',
    h2: 'Precio de montaje de un PAX, paso a paso',
    intro: `Desde ${eur(5)} con puertas abatibles y desde ${PRECIO_PAX_CORREDERAS} € con puertas correderas. Un vestidor PAX, desde ${eur(7)}. Te damos un precio cerrado antes de ir.`,
    parrafos: [
      'Un PAX es un sistema por módulos: cada armazón, cada puerta y cada cajón interior suma trabajo. Por eso el precio sube con el número de módulos y de puertas, con las puertas correderas y si llega hasta el techo.',
      'Cuéntanos en el formulario cuántos módulos tiene y qué puertas lleva, o mándanos una foto del albarán de IKEA. Con eso te damos el precio cerrado antes de ir.',
    ],
    puntos: [
      `Puertas abatibles desde ${eur(5)}`,
      `Puertas correderas desde ${PRECIO_PAX_CORREDERAS} €`,
      `Vestidor desde ${eur(7)}`,
      'Fijación a la pared incluida',
    ],
    bloques: [
      {
        titulo: 'Precio según módulos y puertas',
        texto: `Un PAX con puertas abatibles parte de ${eur(5)}; con correderas, de ${PRECIO_PAX_CORREDERAS} €, porque los rieles y las puertas necesitan más ajuste. Cada módulo, puerta o cajón interior más suma al precio, igual que montarlo hasta el techo.`,
      },
      {
        titulo: 'Cuánto se tarda',
        texto: 'Depende del número de módulos, de las puertas y de los accesorios interiores. Al darte el precio cerrado te decimos también cuánto tiempo calculamos para tu armario.',
      },
      {
        titulo: 'Qué conviene revisar antes',
        texto: 'Que han llegado todas las cajas del albarán; la altura del techo, porque el armazón se monta tumbado y luego se levanta; que haya sitio en la habitación para hacerlo, y de qué es la pared donde se va a fijar.',
      },
      {
        titulo: 'Errores típicos al montarlo',
        texto: 'No fijarlo a la pared; no nivelar los armazones, y entonces las puertas quedan descuadradas; montar las correderas sin ajustar bien los rieles, y confundir tornillos o bisagras parecidos entre sí.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un PAX con puertas correderas?',
        respuesta: `Desde ${PRECIO_PAX_CORREDERAS} €. El precio cerrado depende del número de módulos y de puertas, y de si llega hasta el techo.`,
      },
      {
        pregunta: '¿Lo fijáis a la pared?',
        respuesta: 'Sí. La fijación antivuelco va incluida en el montaje y dejamos el armario bien anclado a la pared.',
      },
      {
        pregunta: '¿Cuánto cuesta desmontar un PAX?',
        respuesta: 'El desmontaje cuesta entre el 50 y el 60 % del precio de montaje de ese armario.',
      },
      {
        pregunta: '¿Os lleváis los cartones?',
        respuesta: 'Sí. Al terminar nos llevamos los cartones y los plásticos.',
      },
    ],
    servicio: {
      nombre: 'Montaje de armarios PAX',
      descripcion: 'Montaje de armarios PAX de IKEA a domicilio en Madrid, con puertas abatibles o correderas.',
    },
    imagen: './images/armario-abatibles.webp',
    imagenAlt: 'Armario de puertas abatibles montado en un dormitorio',
    ids: [5, 6, 7],
    destacado: { texto: 'Armario PAX, desde', precio: servicioPorId(5)?.precioDesde ?? 0 },
    relacionadas: ['montaje-armarios-pax', 'montaje-armarios-madrid', 'precios', 'cuanto-cuesta-montar-cocina-ikea'],
  },

  /* ---------------------------- COCINA IKEA ---------------------------- */
  {
    path: 'cuanto-cuesta-montar-cocina-ikea',
    tipo: 'guia',
    padre: 'precios',
    title: `Cuánto cuesta montar una cocina IKEA en Madrid (${eur(1)})`,
    description:
      `Montar una cocina IKEA en Madrid cuesta desde ${eur(1)} si es pequeña y desde ${eur(4)} con isla, con los electrodomésticos colocados. Qué incluye y qué no.`,
    etiqueta: 'Cuánto cuesta montar una cocina IKEA',
    h1: { antes: '¿Cuánto cuesta montar una', resaltado: 'cocina IKEA', despues: 'en Madrid?' },
    kicker: 'Guía de precios',
    h2: 'Precio de montaje de una cocina, según su tamaño',
    intro: `Desde ${eur(1)} una cocina pequeña (hasta 6 módulos), ${eur(2)} una mediana, ${eur(3)} una grande y ${eur(4)} una con isla. La colocación de electrodomésticos va incluida.`,
    parrafos: [
      'El precio de montar una cocina depende sobre todo de su tamaño: cuántos módulos bajos y altos tiene, si lleva columnas, cajoneras y extraíbles, y si tiene isla.',
      'Para darte el precio cerrado nos basta con el plano de IKEA, el albarán o unas fotos. Con eso te decimos el precio antes de ir.',
    ],
    puntos: [
      `Cocina pequeña desde ${eur(1)}`,
      `Mediana desde ${eur(2)} y grande desde ${eur(3)}`,
      `Con isla desde ${eur(4)}`,
      'Electrodomésticos colocados',
    ],
    bloques: [
      {
        titulo: 'Qué incluye',
        texto: 'El montaje de los módulos bajos y altos, las columnas, las cajoneras y las puertas; los tiradores; la nivelación y el ajuste final, y la colocación de tus electrodomésticos.',
      },
      {
        titulo: 'Qué no incluye',
        texto: 'La fontanería, la instalación eléctrica y la encimera de piedra. Si los necesitas, cuéntanoslo y te decimos cómo organizarlo.',
      },
      {
        titulo: 'Cuánto se tarda',
        texto: 'Depende del número de módulos y de si hay isla o columnas. Al darte el precio cerrado te decimos también cuánto tiempo calculamos para tu cocina.',
      },
      {
        titulo: 'Qué conviene revisar antes',
        texto: 'Que han llegado todas las cajas del albarán, que la cocina está vacía y despejada, y que las tomas de agua y de luz están donde indica el plano.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una cocina IKEA pequeña?',
        respuesta: `Desde ${eur(1)}, con la colocación de electrodomésticos incluida. Es una cocina de hasta 6 módulos.`,
      },
      {
        pregunta: '¿Hacéis la fontanería y la electricidad?',
        respuesta: 'No. El montaje no incluye la fontanería, la instalación eléctrica ni la encimera de piedra.',
      },
      {
        pregunta: '¿Colocáis los electrodomésticos?',
        respuesta: `Sí. En todos los tamaños de cocina, la colocación de electrodomésticos va incluida. Si solo necesitas eso, cuesta desde ${eur(19)}.`,
      },
      {
        pregunta: '¿Cuál es el precio mínimo?',
        respuesta: `El servicio mínimo es de ${SERVICIO_MINIMO} € e incluye el desplazamiento en Madrid capital.`,
      },
    ],
    servicio: {
      nombre: 'Montaje de cocinas IKEA',
      descripcion: 'Montaje de cocinas de IKEA a domicilio en Madrid, con la colocación de electrodomésticos incluida.',
    },
    imagen: './images/cocina-pequena.webp',
    imagenAlt: 'Cocina pequeña montada, con los electrodomésticos colocados',
    ids: [1, 2, 3, 4],
    relacionadas: ['montaje-cocinas-madrid', 'montaje-muebles-ikea-madrid', 'precios', 'cuanto-cuesta-montar-armario-pax'],
  },
];
