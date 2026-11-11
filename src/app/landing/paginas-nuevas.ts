import { eur } from '../datos/catalogo';
import {
  DESMONTAJE,
  PRECIO_BALDAS,
  PRECIO_COLGAR_TV,
  PRECIO_HORA,
  PRECIO_PAX_CORREDERAS,
  SERVICIO_MINIMO,
} from '../datos/precios-extra';
import { PaginaSeo, TIENDAS_TEXTO, meta } from './pagina-seo';

/*
 * Servicios y guías nuevas. Solo se afirma lo que el negocio permite (herramientas, cartones,
 * fijación incluida, presupuesto ajustado y sin compromiso, una sola persona de contacto).
 * Los precios salen de catalogo.ts (eur) o de precios-extra.ts.
 */

/* ===================================================================
   SERVICIOS
=================================================================== */

export const PAGINAS_SERVICIOS_NUEVOS: PaginaSeo[] = [
  /* ---------------------------- VESTIDORES ---------------------------- */
  {
    path: 'montaje-vestidores-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    guia: 'cuanto-cuesta-montar-armario-pax',
    title: 'Montaje de vestidores en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Una sola persona de contacto'],
      'Vestidores abiertos y modulares montados y nivelados.',
    ),
    etiqueta: 'Montaje de vestidores',
    h1: { antes: 'Montaje de', resaltado: 'vestidores', despues: 'en Madrid' },
    kicker: 'Vestidores',
    h2: 'Tu vestidor montado, nivelado y listo para organizar',
    intro: `Montamos vestidores abiertos y sistemas modulares en tu casa, desde ${eur(7)}. Estructura, baldas, barras y cajoneras, todo nivelado y fijado a la pared.`,
    parrafos: [
      'Un vestidor tiene muchas piezas que dependen unas de otras: si un módulo queda torcido, las baldas no encajan y las cajoneras rozan. Por eso empezamos por nivelar la estructura y la fijamos a la pared antes de montar el interior.',
      'Montamos vestidores de IKEA, Leroy Merlin y otras tiendas, también sistemas abiertos sin puertas y vestidores que ocupan una habitación entera. Si es un rincón en L o en U, cuéntanoslo en el formulario: así preparamos mejor el trabajo.',
      'Llevamos las herramientas y, al terminar, nos llevamos los cartones y los plásticos. Te queda el vestidor listo para colgar la ropa el mismo día.',
    ],
    puntos: [
      `Vestidores desde ${eur(7)}`,
      'Estructura nivelada y fijada',
      'Baldas, barras y cajoneras',
      'Nos llevamos los cartones',
    ],
    bloques: [
      {
        titulo: 'Qué montamos',
        texto: 'La estructura modular, las baldas, las barras para colgar, las cajoneras y los accesorios interiores como zapateros o pantaloneros.',
      },
      {
        titulo: 'Bien fijado a la pared',
        texto: 'Un vestidor alto y lleno de ropa pesa mucho. Lo dejamos bien anclado a la pared, y la fijación antivuelco va incluida en el montaje.',
      },
      {
        titulo: 'Qué nos ayuda a darte un presupuesto ajustado',
        texto: 'El número de módulos, si llega hasta el techo, la tienda y una foto del albarán o del plano. Con eso te orientamos antes de ir.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un vestidor en Madrid?',
        respuesta: `Desde ${eur(7)}. El presupuesto depende del número de módulos, los accesorios interiores y la altura.`,
      },
      {
        pregunta: '¿Montáis vestidores PAX de IKEA?',
        respuesta: 'Sí. Montamos vestidores PAX y de otras tiendas, abiertos o con puertas.',
      },
      {
        pregunta: '¿Lo fijáis a la pared?',
        respuesta: 'Sí. La fijación antivuelco va incluida en el montaje y lo dejamos bien anclado.',
      },
      {
        pregunta: '¿Os lleváis los cartones?',
        respuesta: 'Sí. Al terminar nos llevamos los cartones y los plásticos.',
      },
    ],
    servicio: {
      nombre: 'Montaje de vestidores',
      descripcion: 'Montaje de vestidores abiertos y modulares a domicilio en Madrid.',
    },
    imagen: './images/vestidor.webp',
    imagenAlt: 'Vestidor abierto con baldas, barras y cajones iluminados',
    ids: [7, 5, 6],
    categoria: 'Armarios',
    relacionadas: ['montaje-armarios-madrid', 'montaje-armarios-pax', 'montaje-dormitorios-madrid', 'precios'],
  },

  /* ---------------------------- CAMAS Y CANAPÉS ---------------------------- */
  {
    path: 'montaje-camas-canapes-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de camas y canapés en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
      'Camas, literas, canapés abatibles y cabeceros montados.',
    ),
    etiqueta: 'Montaje de camas y canapés',
    h1: { antes: 'Montaje de', resaltado: 'camas y canapés', despues: 'en Madrid' },
    kicker: 'Camas y canapés',
    h2: 'Camas firmes, sin ruidos y bien niveladas',
    intro: `Montamos camas, estructuras, literas y canapés en tu casa, desde ${eur(9)}. También mesitas y cómodas para dejarte el dormitorio completo.`,
    parrafos: [
      'Una cama mal apretada cruje, se mueve y acaba aflojándose. La montamos siguiendo las instrucciones del fabricante, ajustamos cada unión y comprobamos que quede estable y nivelada antes de irnos.',
      'Los canapés abatibles llevan pistones y herrajes que hay que colocar en el orden correcto para que la tapa suba y baje sin esfuerzo. Si es un canapé con arcón o una cama con cajones, revisamos también que abran bien.',
      'Para camas infantiles y literas, dejamos las barandillas y las escaleras bien sujetas. Si el fabricante indica fijarla a la pared, la anclamos: la fijación va incluida en el montaje.',
    ],
    puntos: [
      `Camas desde ${eur(9)}`,
      'Canapés abatibles y con arcón',
      'Literas y camas infantiles',
      'Llevamos las herramientas',
    ],
    bloques: [
      {
        titulo: 'Qué montamos',
        texto: 'Estructuras de cama, canapés abatibles, camas con cajones, literas, camas nido y cabeceros. También el resto del dormitorio: mesitas, cómodas y armarios.',
      },
      {
        titulo: 'Antes de que lleguemos',
        texto: 'Si es posible, deja la habitación despejada y el colchón fuera de la zona de trabajo. Si hay que desmontar la cama antigua, indícalo en el formulario.',
      },
      {
        titulo: 'El dormitorio completo',
        texto: `Puedes pedirlo todo de una vez: la cama, dos mesitas desde ${eur(8)} cada una y una cómoda desde ${eur(10)}. Elige todos los muebles en el formulario.`,
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar una cama?',
        respuesta: `Desde ${eur(9)}. El presupuesto depende del tipo de cama y de si lleva canapé, cajones o cabecero.`,
      },
      {
        pregunta: '¿Montáis canapés abatibles?',
        respuesta: 'Sí. Montamos el canapé con sus pistones y herrajes, y comprobamos que la tapa abra y cierre bien.',
      },
      {
        pregunta: '¿Podéis desmontar la cama que ya tengo?',
        respuesta: `Sí. El desmontaje cuesta entre el ${DESMONTAJE} del precio de montaje de ese mueble. Indícalo en el formulario.`,
      },
      {
        pregunta: '¿Os lleváis los cartones?',
        respuesta: 'Sí. Al terminar nos llevamos los cartones y los plásticos.',
      },
    ],
    servicio: {
      nombre: 'Montaje de camas y canapés',
      descripcion: 'Montaje de camas, canapés, literas y estructuras a domicilio en Madrid.',
    },
    imagen: './images/cama.webp',
    imagenAlt: 'Cama montada en un dormitorio luminoso',
    ids: [9, 8, 10],
    categoria: 'Dormitorio',
    relacionadas: ['montaje-dormitorios-madrid', 'montaje-armarios-madrid', 'montaje-vestidores-madrid', 'precios'],
  },

  /* ---------------------------- OFICINA ---------------------------- */
  {
    path: 'montaje-muebles-oficina-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de muebles de oficina en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Te atendemos solo nosotros', 'Llevamos herramientas'],
      'Escritorios, estanterías y archivadores montados.',
    ),
    etiqueta: 'Montaje de muebles de oficina',
    h1: { antes: 'Montaje de', resaltado: 'muebles de oficina', despues: 'en Madrid' },
    kicker: 'Oficina y teletrabajo',
    h2: 'Tu puesto de trabajo montado y listo para usar',
    intro: `Montamos escritorios, estanterías, cajoneras y muebles auxiliares para tu oficina o tu rincón de teletrabajo, desde ${eur(14)} el escritorio.`,
    parrafos: [
      'Un escritorio que cojea o una estantería que se balancea molestan cada día. Montamos cada mueble nivelado y bien ajustado, y fijamos a la pared las estanterías y archivadores altos.',
      'Si estás montando un despacho o una pequeña oficina, puedes pedirlo todo en una misma solicitud: elige los muebles en el formulario e indica cuántos son. Te atiende una sola persona de contacto de principio a fin.',
      'Montamos muebles de IKEA, Leroy Merlin y otras tiendas. Si tu escritorio es elevable o tiene un mecanismo especial, cuéntanoslo en "Algo más" para preparar el trabajo.',
    ],
    puntos: [
      `Escritorios desde ${eur(14)}`,
      `Estanterías desde ${eur(15)}`,
      'Cajoneras y archivadores',
      'Una sola persona de contacto',
    ],
    bloques: [
      {
        titulo: 'Qué montamos',
        texto: 'Escritorios, mesas de reuniones, estanterías, cajoneras, archivadores, librerías y muebles auxiliares para casa u oficina.',
      },
      {
        titulo: 'Bien fijado',
        texto: 'Las estanterías y los archivadores altos se fijan a la pared para que no vuelquen. La fijación antivuelco va incluida en el montaje.',
      },
      {
        titulo: 'Sin cajas por medio',
        texto: 'Llevamos las herramientas y, al terminar, nos llevamos los cartones y los plásticos. Puedes ponerte a trabajar en cuanto acabamos.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un escritorio?',
        respuesta: `Desde ${eur(14)}. Una estantería, desde ${eur(15)}, y un mueble auxiliar, desde ${eur(16)}.`,
      },
      {
        pregunta: '¿Montáis varios muebles de oficina a la vez?',
        respuesta: 'Sí. Elige todos los muebles en el formulario e indica la cantidad de cada uno.',
      },
      {
        pregunta: '¿Fijáis las estanterías a la pared?',
        respuesta: 'Sí. La fijación antivuelco va incluida en el montaje.',
      },
      {
        pregunta: '¿Pedir presupuesto me obliga a contratar?',
        respuesta: 'No. Pedir presupuesto es sin compromiso.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles de oficina',
      descripcion: 'Montaje de escritorios, estanterías y muebles de oficina a domicilio en Madrid.',
    },
    imagen: './images/escritorio.webp',
    imagenAlt: 'Escritorio de esquina con silla y baldas iluminadas',
    ids: [14, 15, 16],
    categoria: 'Mesas y auxiliares',
    relacionadas: ['montaje-mesas-escritorios-madrid', 'montaje-estanterias-madrid', 'colgar-tv-baldas-espejos-madrid', 'precios'],
  },

  /* ---------------------------- DESMONTAJE ---------------------------- */
  {
    path: 'desmontaje-muebles-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Desmontaje de muebles en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Una sola persona de contacto'],
      'Desmontamos tus muebles antes de una mudanza.',
    ),
    etiqueta: 'Desmontaje de muebles',
    h1: { antes: 'Desmontaje de', resaltado: 'muebles', despues: 'en Madrid' },
    kicker: 'Desmontaje',
    h2: 'Desmontar antes de montar, o para llevártelos',
    intro: `Desmontamos armarios, camas, cocinas y otros muebles en tu casa. El desmontaje cuesta entre el ${DESMONTAJE} del precio de montaje de cada mueble.`,
    parrafos: [
      'Hay dos casos habituales: quieres cambiar un mueble viejo por uno nuevo, o te mudas y necesitas los muebles desmontados para transportarlos. En los dos, desmontamos pieza a pieza para que se puedan volver a montar.',
      'Si te mudas, guardamos la tornillería de cada mueble por separado para que no se pierda nada. Para el transporte puedes contar con Mudanzas360, nuestra marca hermana de mudanzas: el enlace está más abajo.',
      'Si después hay que montar los muebles nuevos o los mismos en la casa nueva, pídelo todo en la misma solicitud. Te atiende una sola persona de contacto hasta que el último mueble está montado.',
    ],
    puntos: [
      `${DESMONTAJE} del precio de montaje`,
      'Tornillería guardada por mueble',
      'Desmontar y volver a montar',
      'Mudanza con Mudanzas360',
    ],
    bloques: [
      {
        titulo: 'Qué desmontamos',
        texto: 'Armarios, camas, literas, estanterías, muebles de salón, escritorios y cocinas. Si es un mueble a medida o muy antiguo, cuéntanoslo y lo valoramos.',
      },
      {
        titulo: 'Cómo se calcula el precio',
        texto: `El desmontaje cuesta entre el ${DESMONTAJE} de lo que cuesta montar ese mueble. Por ejemplo, un armario de puertas abatibles se monta desde ${eur(5)}.`,
      },
      {
        titulo: 'Si te mudas',
        texto: 'Desmontamos antes de que llegue el camión y, si quieres, volvemos a montar en la casa nueva. Para el transporte, Mudanzas360 se encarga de la mudanza.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta desmontar un mueble?',
        respuesta: `Entre el ${DESMONTAJE} del precio de montaje de ese mueble.`,
      },
      {
        pregunta: '¿Podéis desmontar y volver a montar en otra casa?',
        respuesta: 'Sí. Pídelo todo en la misma solicitud e indica las dos direcciones en "Algo más".',
      },
      {
        pregunta: '¿Hacéis también la mudanza?',
        respuesta: 'La mudanza la hace Mudanzas360, nuestra marca hermana. Nosotros desmontamos y montamos los muebles.',
      },
      {
        pregunta: '¿Os lleváis el mueble viejo?',
        respuesta: 'Al terminar nos llevamos los cartones y los plásticos. Si necesitas que retiremos el mueble viejo, pregúntanos al pedir presupuesto.',
      },
    ],
    servicio: {
      nombre: 'Desmontaje de muebles',
      descripcion: 'Desmontaje de muebles a domicilio en Madrid, antes de una mudanza o de montar muebles nuevos.',
    },
    imagen: './images/varios-muebles.webp',
    imagenAlt: 'Salón con varios muebles montados',
    preciosExtra: [
      { concepto: 'Desmontar un mueble', precio: `${DESMONTAJE} del precio de montaje` },
      { concepto: 'Servicio mínimo', detalle: 'Incluye el desplazamiento en Madrid capital', precio: `${SERVICIO_MINIMO} €` },
    ],
    relacionadas: ['montaje-armarios-madrid', 'montaje-camas-canapes-madrid', 'montaje-cocinas-madrid', 'precios'],
  },

  /* ---------------------------- COLGAR TV, BALDAS Y ESPEJOS ---------------------------- */
  {
    path: 'colgar-tv-baldas-espejos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Colgar TV, baldas y espejos en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Trato cercano'],
      'Colgamos tu TV, baldas, cuadros y espejos bien anclados a la pared.',
    ),
    etiqueta: 'Colgar TV, baldas y espejos',
    h1: { antes: 'Colgar', resaltado: 'TV, baldas y espejos', despues: 'en Madrid' },
    kicker: 'Colgar en la pared',
    h2: 'Bien anclado, recto y a la altura que quieres',
    intro: `Colgamos tu televisión con el soporte que nos des, desde ${PRECIO_COLGAR_TV} €, y baldas, cuadros o espejos desde ${PRECIO_BALDAS} € (hasta 5 piezas).`,
    parrafos: [
      'Lo importante al colgar algo pesado es el anclaje: no es lo mismo una pared de ladrillo que una de pladur. Elegimos el taco y el tornillo según la pared y el peso, y dejamos cada pieza recta y nivelada.',
      'Para la televisión usamos el soporte que tú compres, del tamaño adecuado para tu tele. Si no sabes cuál elegir, pregúntanos al pedir presupuesto y te orientamos.',
      'Antes de taladrar, acordamos contigo la altura y la posición. Si hay cables, enchufes o tuberías cerca, avísanos: así evitamos sorpresas en la pared.',
    ],
    puntos: [
      `TV desde ${PRECIO_COLGAR_TV} €`,
      `Baldas o espejos desde ${PRECIO_BALDAS} €`,
      'Taco adecuado a cada pared',
      'Llevamos las herramientas',
    ],
    bloques: [
      {
        titulo: 'Qué colgamos',
        texto: 'Televisiones con su soporte, baldas, estantes flotantes, cuadros, espejos, percheros y barras de cortina.',
      },
      {
        titulo: 'Según tu pared',
        texto: 'En ladrillo u hormigón usamos tacos para obra; en pladur, tacos específicos para placa o, si se puede, fijación al montante. Así aguanta el peso.',
      },
      {
        titulo: 'Junto con el montaje',
        texto: 'Si además vamos a montar un mueble de TV o un salón, pídelo todo en la misma solicitud y lo hacemos en la misma visita.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta colgar una televisión?',
        respuesta: `Desde ${PRECIO_COLGAR_TV} €, con el soporte que nos des.`,
      },
      {
        pregunta: '¿Y colgar baldas, cuadros o espejos?',
        respuesta: `Desde ${PRECIO_BALDAS} €, hasta 5 piezas.`,
      },
      {
        pregunta: '¿Podéis colgar en pladur?',
        respuesta: 'Sí. Usamos tacos específicos para pladur y, si el peso lo pide, buscamos el montante.',
      },
      {
        pregunta: '¿Traéis el soporte de la tele?',
        respuesta: 'No: el soporte lo compras tú. Si dudas de cuál elegir, te orientamos al pedir presupuesto.',
      },
    ],
    servicio: {
      nombre: 'Colgar TV, baldas y espejos',
      descripcion: 'Colgar televisiones, baldas, cuadros y espejos en la pared a domicilio en Madrid.',
    },
    imagen: './images/mueble-tv.webp',
    imagenAlt: 'Salón con televisión y mueble de TV',
    preciosExtra: [
      { concepto: 'Colgar la TV en la pared', detalle: 'Con el soporte que nos des', precio: `desde ${PRECIO_COLGAR_TV} €` },
      { concepto: 'Colgar baldas, cuadros o espejos', detalle: 'Hasta 5 piezas', precio: `desde ${PRECIO_BALDAS} €` },
    ],
    ids: [11],
    relacionadas: ['montaje-salones-madrid', 'montaje-estanterias-madrid', 'montaje-muebles-oficina-madrid', 'precios'],
  },

  /* ---------------------------- A MEDIDA ---------------------------- */
  {
    path: 'montaje-muebles-a-medida-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Montaje de muebles a medida en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Una sola persona de contacto', 'Trato cercano'],
      'Montaje de muebles a medida y trabajos con ajustes.',
    ),
    etiqueta: 'Montaje de muebles a medida',
    h1: { antes: 'Montaje de', resaltado: 'muebles a medida', despues: 'en Madrid' },
    kicker: 'A medida',
    h2: 'Cuando el mueble no viene en una caja estándar',
    intro: `Montamos muebles a medida y trabajos que necesitan ajustes, cortes o adaptaciones. Los trabajos a medida o por horas cuestan ${PRECIO_HORA}.`,
    parrafos: [
      'Un mueble a medida no se monta solo con las instrucciones: hay que adaptar piezas a paredes que no están rectas, a techos inclinados o a huecos irregulares. Cada trabajo es distinto, por eso lo valoramos contigo.',
      'Cuéntanos qué hay que montar y mándanos fotos del hueco y del mueble. Te orientamos sobre el montaje y te damos un presupuesto ajustado. Si el trabajo lo necesita, vamos a verlo sin compromiso.',
      'Te atiende una sola persona de contacto desde la primera foto hasta el último ajuste, para que no tengas que explicar lo mismo dos veces.',
    ],
    puntos: [
      `${PRECIO_HORA}`,
      'Visita sin compromiso si hace falta',
      'Ajustes a paredes y huecos',
      'Una sola persona de contacto',
    ],
    bloques: [
      {
        titulo: 'Qué trabajos hacemos',
        texto: 'Muebles a medida que te entregan por piezas, adaptaciones de muebles de serie a huecos concretos y montajes que requieren varios ajustes.',
      },
      {
        titulo: 'Cómo se presupuesta',
        texto: `Por horas, a ${PRECIO_HORA}, o con un presupuesto ajustado para todo el trabajo cuando se puede valorar de antemano.`,
      },
      {
        titulo: 'Qué nos ayuda',
        texto: 'Fotos del hueco y del mueble, las medidas aproximadas y, si las tienes, las instrucciones o el plano del fabricante.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta montar un mueble a medida?',
        respuesta: `Los trabajos a medida o por horas cuestan ${PRECIO_HORA}. Si el trabajo se puede valorar de antemano, te damos un presupuesto ajustado.`,
      },
      {
        pregunta: '¿Venís a verlo antes?',
        respuesta: 'Si el trabajo lo necesita, vamos a verlo sin compromiso.',
      },
      {
        pregunta: '¿Hacéis el mueble?',
        respuesta: 'No. Montamos y ajustamos el mueble que ya tienes o que te van a entregar.',
      },
      {
        pregunta: '¿Os lleváis los cartones?',
        respuesta: 'Sí. Al terminar nos llevamos los cartones y los plásticos.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles a medida',
      descripcion: 'Montaje y ajuste de muebles a medida a domicilio en Madrid.',
    },
    imagen: './images/mueble-completo.webp',
    imagenAlt: 'Comedor con mueble aparador y mesa montados',
    preciosExtra: [
      { concepto: 'Trabajos a medida o por horas', precio: PRECIO_HORA },
      { concepto: 'Servicio mínimo', detalle: 'Incluye el desplazamiento en Madrid capital', precio: `${SERVICIO_MINIMO} €` },
    ],
    relacionadas: ['montaje-cocinas-madrid', 'montaje-armarios-madrid', 'montaje-vestidores-madrid', 'precios'],
  },
];

/* ===================================================================
   TIENDAS
=================================================================== */

export const PAGINAS_MARCAS_NUEVAS: PaginaSeo[] = [
  {
    path: 'montaje-muebles-conforama-madrid',
    tipo: 'marca',
    padre: 'montaje-muebles-por-tienda',
    title: 'Montaje de muebles Conforama en Madrid | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Llevamos herramientas', 'Nos llevamos los cartones'],
      'Tus muebles de Conforama montados en casa.',
    ),
    etiqueta: 'Montaje de muebles Conforama',
    h1: { antes: 'Montaje de muebles', resaltado: 'Conforama', despues: 'en Madrid' },
    kicker: 'Muebles Conforama',
    h2: 'Tú compras en Conforama, nosotros lo montamos en tu casa',
    intro: `Montamos armarios, camas, cómodas, mesas y estanterías de Conforama en tu domicilio. Armarios desde ${eur(5)} y camas desde ${eur(9)}.`,
    parrafos: [
      'Si ya tienes las cajas en casa o te las van a entregar, solo tienes que decirnos qué muebles son y cuántos. Con una foto del albarán te damos un presupuesto ajustado más rápido.',
      'Montamos cada mueble con sus herramientas, ajustamos puertas y cajones, y fijamos a la pared los muebles altos. Al terminar nos llevamos los cartones y los plásticos.',
      'Conforama es una marca de su propietario y ArmaMuebles no está afiliada a ella: montamos los muebles que has comprado allí, igual que los de otras tiendas.',
    ],
    puntos: [
      `Armarios desde ${eur(5)}`,
      `Camas desde ${eur(9)}`,
      'Mesas, cómodas y estanterías',
      'Nos llevamos los cartones',
    ],
    bloques: [
      {
        titulo: 'Qué muebles montamos',
        texto: 'Armarios, camas y canapés, cómodas, mesitas, muebles de salón, mesas, sillas y estanterías.',
      },
      {
        titulo: 'Con el albarán, más rápido',
        texto: 'Mándanos una foto del albarán o de las cajas: así sabemos qué piezas son y te orientamos mejor.',
      },
      {
        titulo: 'Otras tiendas',
        texto: TIENDAS_TEXTO,
      },
    ],
    faqs: [
      {
        pregunta: '¿Montáis muebles comprados en Conforama?',
        respuesta: 'Sí. Montamos en tu casa los muebles que has comprado en Conforama.',
      },
      {
        pregunta: '¿Cuánto cuesta montar un armario de Conforama?',
        respuesta: `Desde ${eur(5)} uno de puertas abatibles y desde ${eur(6)} uno de puertas correderas.`,
      },
      {
        pregunta: '¿Sois de Conforama?',
        respuesta: 'No. ArmaMuebles no está afiliada a Conforama: montamos muebles comprados en esta y otras tiendas.',
      },
      {
        pregunta: '¿Pedir presupuesto me obliga a contratar?',
        respuesta: 'No. Pedir presupuesto es sin compromiso.',
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles de Conforama',
      descripcion: 'Montaje a domicilio en Madrid de muebles comprados en Conforama.',
    },
    imagen: './images/comoda.webp',
    imagenAlt: 'Cómoda de cajones montada en un salón',
    ids: [5, 9, 10, 13],
    relacionadas: ['montaje-muebles-ikea-madrid', 'montaje-muebles-leroy-merlin', 'montaje-camas-canapes-madrid', 'precios'],
  },
];

/* ===================================================================
   GUÍAS
=================================================================== */

export const PAGINAS_GUIAS_NUEVAS: PaginaSeo[] = [
  /* ---------------------------- CUÁNTO TARDA UNA COCINA ---------------------------- */
  {
    path: 'cuanto-tarda-montar-una-cocina-ikea',
    tipo: 'guia',
    padre: 'preguntas-frecuentes',
    guia: 'cuanto-cuesta-montar-cocina-ikea',
    title: 'Cuánto tarda montar una cocina IKEA | ArmaMuebles',
    description: meta(
      ['Presupuesto ajustado', 'Una sola persona de contacto', 'Llevamos herramientas'],
      'De qué depende el tiempo de montar tu cocina IKEA.',
    ),
    etiqueta: 'Cuánto tarda montar una cocina IKEA',
    h1: { antes: '¿Cuánto tarda montar una', resaltado: 'cocina IKEA?', despues: '' },
    kicker: 'Guía',
    h2: 'Lo que más cambia el tiempo de montaje',
    intro: 'Depende sobre todo del número de módulos, de si hay columnas o isla y de cómo esté la cocina el día del montaje. Al darte el presupuesto te decimos cuánto tiempo calculamos para la tuya.',
    parrafos: [
      'No hay dos cocinas iguales. Una cocina con pocos módulos bajos y altos se monta antes que una con columnas para horno y frigorífico, cajoneras, extraíbles e isla. Cada puerta y cada cajón también se ajusta uno a uno.',
      'El estado de la cocina cuenta tanto como su tamaño: si las paredes y el suelo no están rectos, hay que nivelar más; si las tomas de agua y luz no están donde marca el plano, el montaje se para hasta resolverlo.',
      'Lo que más acelera el trabajo es tenerlo todo preparado: las cajas en casa y completas, la cocina vacía y el plano de IKEA a mano. Con eso, y una foto del albarán, te damos un presupuesto ajustado y una previsión realista.',
    ],
    puntos: [
      'Número de módulos',
      'Columnas, cajoneras e isla',
      'Paredes y suelo',
      'Cocina vacía y cajas completas',
    ],
    bloques: [
      {
        titulo: 'Tamaño y tipo de módulos',
        texto: `Una cocina pequeña (hasta 6 módulos) es la más rápida; parte de ${eur(1)}. Las medianas, grandes y con isla llevan más módulos, columnas y ajustes.`,
      },
      {
        titulo: 'Qué lo retrasa',
        texto: 'Cajas que faltan, paredes muy torcidas, tomas de agua o luz mal situadas y una cocina sin vaciar. Revisarlo antes ahorra tiempo el día del montaje.',
      },
      {
        titulo: 'Qué no incluye el montaje',
        texto: 'La fontanería, la instalación eléctrica y la encimera de piedra. Si los necesitas, organízalos antes o después del montaje de los muebles.',
      },
      {
        titulo: 'Electrodomésticos',
        texto: 'La colocación de electrodomésticos va incluida en el montaje de la cocina, así que no hace falta otra visita para eso.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Me decís cuánto vais a tardar?',
        respuesta: 'Sí. Al darte el presupuesto te decimos cuánto tiempo calculamos para tu cocina.',
      },
      {
        pregunta: '¿Qué acelera el montaje?',
        respuesta: 'Tener las cajas completas en casa, la cocina vacía, el plano de IKEA a mano y las tomas de agua y luz donde marca el plano.',
      },
      {
        pregunta: '¿Colocáis los electrodomésticos en la misma visita?',
        respuesta: 'Sí. La colocación de electrodomésticos va incluida en el montaje de la cocina.',
      },
      {
        pregunta: '¿Cuánto cuesta montar una cocina IKEA?',
        respuesta: `Desde ${eur(1)} una cocina pequeña. Tienes todos los tamaños en la guía de precios de cocinas IKEA.`,
      },
    ],
    servicio: {
      nombre: 'Montaje de cocinas IKEA',
      descripcion: 'Montaje de cocinas de IKEA a domicilio en Madrid.',
    },
    imagen: './images/cocina-mediana.webp',
    imagenAlt: 'Cocina mediana montada con muebles altos y bajos',
    ids: [1, 2, 3, 4],
    relacionadas: ['montaje-cocinas-madrid', 'cuanto-cuesta-montar-cocina-ikea', 'como-preparar-la-casa-para-el-montador', 'precios'],
  },

  /* ---------------------------- PREPARAR LA CASA ---------------------------- */
  {
    path: 'como-preparar-la-casa-para-el-montador',
    tipo: 'guia',
    padre: 'preguntas-frecuentes',
    title: 'Cómo preparar la casa para el montador | ArmaMuebles',
    description: meta(
      ['Llevamos herramientas', 'Nos llevamos los cartones', 'Trato cercano'],
      'Lista sencilla para que el montaje de tus muebles vaya rápido.',
    ),
    etiqueta: 'Cómo preparar la casa para el montador',
    h1: { antes: 'Cómo preparar la casa', resaltado: 'para el montador', despues: '' },
    kicker: 'Guía',
    h2: 'Una lista sencilla para antes del montaje',
    intro: 'Unos pocos preparativos hacen que el montaje vaya más rápido y sin sorpresas. Las herramientas las llevamos nosotros y, al terminar, nos llevamos los cartones.',
    parrafos: [
      'Lo primero es comprobar que tienes todo: abre el albarán y revisa que estén todas las cajas. Si falta alguna, avísanos antes; así lo vemos contigo y no se queda el montaje a medias.',
      'Deja libre la zona donde va el mueble y un espacio alrededor para trabajar. En los armarios altos, que se montan tumbados y luego se levantan, hace falta algo más de sitio y de altura que la del propio armario.',
      'Si vives en un piso, piensa en el acceso: si hay ascensor, si se puede reservar, y dónde puede aparcar el montador. Indícalo en el formulario, en "Planta y ascensor".',
    ],
    puntos: [
      'Revisa el albarán y las cajas',
      'Despeja la zona de trabajo',
      'Piensa en el acceso y el aparcamiento',
      'Las herramientas las llevamos nosotros',
    ],
    bloques: [
      {
        titulo: 'Las cajas, en la habitación',
        texto: 'Si puedes, deja las cajas en la habitación donde va el mueble o lo más cerca posible. Así no hay que cargar piezas pesadas por la casa.',
      },
      {
        titulo: 'La pared',
        texto: 'Si el mueble va fijado a la pared, dinos de qué es (ladrillo, pladur u hormigón) y si hay cables o tuberías cerca. La fijación va incluida.',
      },
      {
        titulo: 'Cocinas',
        texto: 'Vacía la cocina, retira los muebles viejos si no vamos a desmontarlos nosotros y comprueba que las tomas de agua y luz están donde marca el plano.',
      },
      {
        titulo: 'Niños y mascotas',
        texto: 'Durante el montaje hay tornillos pequeños y herramientas por medio. Es mejor que niños y mascotas estén en otra habitación.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Tengo que tener herramientas?',
        respuesta: 'No. Las herramientas las llevamos nosotros.',
      },
      {
        pregunta: '¿Qué hago si falta una caja?',
        respuesta: 'Avísanos antes del montaje, al pedir presupuesto o por WhatsApp, y lo vemos contigo.',
      },
      {
        pregunta: '¿Tengo que tirar yo los cartones?',
        respuesta: 'No. Al terminar nos llevamos los cartones y los plásticos.',
      },
      {
        pregunta: '¿Y si hay que desmontar un mueble viejo?',
        respuesta: `Indícalo en el formulario. El desmontaje cuesta entre el ${DESMONTAJE} del precio de montaje de ese mueble.`,
      },
    ],
    servicio: {
      nombre: 'Montaje de muebles a domicilio',
      descripcion: 'Cómo preparar la casa para el montaje de muebles a domicilio en Madrid.',
    },
    imagen: './images/comedor.webp',
    imagenAlt: 'Comedor con mesa y sillas montadas',
    preciosExtra: [
      { concepto: 'Servicio mínimo', detalle: 'Incluye el desplazamiento en Madrid capital', precio: `${SERVICIO_MINIMO} €` },
      { concepto: 'Desmontar un mueble viejo', precio: `${DESMONTAJE} del precio de montaje` },
    ],
    ids: [20],
    relacionadas: ['como-trabajamos', 'fijar-muebles-a-la-pared-antivuelco', 'desmontaje-muebles-madrid', 'precios'],
  },

  /* ---------------------------- ANTIVUELCO ---------------------------- */
  {
    path: 'fijar-muebles-a-la-pared-antivuelco',
    tipo: 'guia',
    padre: 'preguntas-frecuentes',
    title: 'Fijar muebles a la pared: guía antivuelco | ArmaMuebles',
    description: meta(
      ['Llevamos herramientas', 'Presupuesto ajustado', 'Trato cercano'],
      'Por qué fijar armarios a la pared y qué taco usar en cada una.',
    ),
    etiqueta: 'Fijar muebles a la pared (antivuelco)',
    h1: { antes: 'Fijar muebles', resaltado: 'a la pared', despues: 'para que no vuelquen' },
    kicker: 'Guía de seguridad',
    h2: 'Qué muebles fijar y cómo hacerlo bien',
    intro: 'Los armarios, cómodas y estanterías altas pueden volcar si se abren varios cajones a la vez o si un niño trepa por ellos. Fijarlos a la pared lo evita, y en nuestros montajes va incluido.',
    parrafos: [
      'Muchos fabricantes incluyen en la caja un herraje antivuelco para fijar el mueble a la pared. No es un extra: forma parte del montaje y conviene usarlo siempre en muebles altos o con cajones.',
      'El herraje del fabricante no suele traer tacos ni tornillos para la pared, porque dependen de cómo sea tu pared. Ahí está la clave: un taco equivocado no aguanta el tirón del mueble.',
      'Cuando montamos un mueble que lo requiere, lo dejamos bien anclado a la pared. Si ya lo tienes montado y quieres fijarlo, cuéntanoslo en el formulario.',
    ],
    puntos: [
      'Armarios y cómodas, siempre',
      'Taco según la pared',
      'Incluido en el montaje',
      'Imprescindible con niños',
    ],
    bloques: [
      {
        titulo: 'Paredes de ladrillo u hormigón',
        texto: 'Taco para obra del diámetro adecuado y tornillo de la longitud correcta. Son las paredes que mejor aguantan el anclaje.',
      },
      {
        titulo: 'Paredes de pladur',
        texto: 'Tacos específicos para placa, como los basculantes o los metálicos de expansión, o mejor aún, fijar al montante si queda detrás del mueble.',
      },
      {
        titulo: 'Qué muebles fijar',
        texto: 'Armarios, cómodas, cajoneras, estanterías y librerías altas, zapateros altos y muebles de TV estrechos y altos.',
      },
      {
        titulo: 'Antes de taladrar',
        texto: 'Comprueba que no haya cables ni tuberías detrás. Los enchufes e interruptores cercanos suelen indicar por dónde va la instalación.',
      },
    ],
    faqs: [
      {
        pregunta: '¿La fijación antivuelco cuesta aparte?',
        respuesta: 'No. Fijar el mueble a la pared (antivuelco) va incluido en el montaje.',
      },
      {
        pregunta: '¿Se puede fijar un armario a una pared de pladur?',
        respuesta: 'Sí, con tacos específicos para pladur o fijándolo al montante.',
      },
      {
        pregunta: '¿Qué muebles hay que fijar?',
        respuesta: 'Los altos y los que tienen cajones: armarios, cómodas, estanterías, librerías y zapateros altos.',
      },
      {
        pregunta: '¿Podéis fijar un mueble que ya tengo montado?',
        respuesta: 'Sí. Indícalo en el formulario, en "Algo más", y te damos un presupuesto ajustado.',
      },
    ],
    servicio: {
      nombre: 'Fijación de muebles a la pared',
      descripcion: 'Fijación antivuelco de armarios, cómodas y estanterías a domicilio en Madrid.',
    },
    imagen: './images/estanteria.webp',
    imagenAlt: 'Estantería grande montada y fijada en un salón',
    preciosExtra: [{ concepto: 'Fijar el mueble a la pared (antivuelco)', precio: 'Incluido en el montaje' }],
    ids: [5, 10, 15],
    relacionadas: ['montaje-armarios-madrid', 'montaje-estanterias-madrid', 'como-preparar-la-casa-para-el-montador', 'precios'],
  },

  /* ---------------------------- PAX: TÚ MISMO O CON MONTADOR ---------------------------- */
  {
    path: 'montar-un-pax-tu-mismo-o-con-montador',
    tipo: 'guia',
    padre: 'preguntas-frecuentes',
    guia: 'cuanto-cuesta-montar-armario-pax',
    title: 'Montar un PAX tú mismo o con montador | ArmaMuebles',
    description: meta(
      ['Llevamos herramientas', 'Nos llevamos los cartones', 'Presupuesto ajustado'],
      'Qué hace falta para montar un PAX y cuándo compensa.',
    ),
    etiqueta: 'Montar un PAX tú mismo o con montador',
    h1: { antes: 'Montar un PAX', resaltado: 'tú mismo o con montador', despues: '' },
    kicker: 'Guía',
    h2: 'Lo que implica montarlo tú y lo que te ahorras con un montador',
    intro: `Un PAX se puede montar en casa con tiempo, ayuda y herramientas. Si prefieres no hacerlo, montamos tu PAX desde ${eur(5)} con puertas abatibles.`,
    parrafos: [
      'Montarlo tú mismo es posible, pero hay que tenerlo claro: los armazones del PAX son altos y pesados, se montan tumbados en el suelo y hacen falta dos personas para levantarlos sin dañar el techo ni el armazón.',
      'Las herramientas básicas son un destornillador, un taladro para fijarlo a la pared, un nivel y una llave para ajustar bisagras. Las puertas correderas necesitan además ajustar bien los rieles para que corran sin rozar.',
      'Con un montador te ahorras el tiempo, las herramientas y el riesgo de errores: lo dejamos nivelado, con las puertas ajustadas, fijado a la pared y sin cartones por medio.',
    ],
    puntos: [
      'Dos personas para levantarlo',
      'Taladro, nivel y destornillador',
      `Con montador, desde ${eur(5)}`,
      'Fijación a la pared incluida',
    ],
    bloques: [
      {
        titulo: 'Si lo montas tú',
        texto: 'Necesitas espacio para montarlo tumbado, algo más de altura que la del armario para levantarlo, ayuda de otra persona y herramientas para fijarlo a la pared.',
      },
      {
        titulo: 'Errores típicos',
        texto: 'No nivelar los armazones, que deja las puertas descuadradas; no fijarlo a la pared; confundir tornillos parecidos y no ajustar bien los rieles de las correderas.',
      },
      {
        titulo: 'Si lo montamos nosotros',
        texto: `Desde ${eur(5)} con puertas abatibles y desde ${PRECIO_PAX_CORREDERAS} € con correderas. Llevamos las herramientas y nos llevamos los cartones.`,
      },
      {
        titulo: 'Una opción intermedia',
        texto: 'Si ya has montado los armazones y te atascas con las puertas o los interiores, cuéntanoslo: valoramos solo lo que falta.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Se puede montar un PAX solo?',
        respuesta: 'Es mejor entre dos personas: los armazones se montan tumbados y hay que levantarlos con cuidado.',
      },
      {
        pregunta: '¿Cuánto cuesta que me monten un PAX?',
        respuesta: `Desde ${eur(5)} con puertas abatibles y desde ${PRECIO_PAX_CORREDERAS} € con correderas.`,
      },
      {
        pregunta: '¿Hay que fijar el PAX a la pared?',
        respuesta: 'Sí. El PAX trae un herraje antivuelco y conviene fijarlo siempre. En nuestros montajes va incluido.',
      },
      {
        pregunta: '¿Podéis terminar un PAX que he empezado?',
        respuesta: 'Sí. Cuéntanos qué falta en el formulario y te damos un presupuesto ajustado.',
      },
    ],
    servicio: {
      nombre: 'Montaje de armarios PAX',
      descripcion: 'Montaje de armarios PAX de IKEA a domicilio en Madrid.',
    },
    imagen: './images/armario-abatibles.webp',
    imagenAlt: 'Armario de puertas abatibles montado en un dormitorio',
    ids: [5, 6, 7],
    relacionadas: ['montaje-armarios-pax', 'cuanto-cuesta-montar-armario-pax', 'fijar-muebles-a-la-pared-antivuelco', 'precios'],
  },
];
