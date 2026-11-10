/* Datos reales del negocio: catálogo, precios y zonas. Fuente única para toda la web. */

export interface ServicioBase {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  incluye: string[];
  precioDesde: number;
  foto: string;
  etiqueta?: string;
  electro?: boolean; // las cocinas incluyen la colocación de electrodomésticos
}

export interface Servicio extends ServicioBase {
  imagen: string;
  miniatura: string;
  resumen: string[];
}

export const ID_SOLO_ELECTRO = 19;


const PRECIO = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export const formatearPrecio = (precio: number): string => PRECIO.format(precio);

/** Número de WhatsApp en formato internacional sin el signo +. */
export const WHATSAPP = '34624671374';
export const TELEFONO = '+34624671374';
export const TELEFONO_VISIBLE = '624 67 13 74';

/** Tiendas cuyos muebles montamos. ArmaMuebles no está afiliada a ninguna. */
export const MARCAS = ['IKEA', 'Leroy Merlin', 'Obramat', 'Conforama', 'Bricomart', 'Brico Depot'];

export interface LogoMarca {
  nombre: string;
  /** Sin logotipo disponible, la marca se muestra como texto. */
  logo: string | null;
  ancho: number;
  alto: number;
  /** Altura relativa, para que logotipos muy anchos y muy altos se vean equilibrados. */
  escala: number;
}

export const LOGOS_MARCAS: LogoMarca[] = [
  { nombre: 'IKEA', logo: '/images/marcas/ikea.svg', ancho: 100, alto: 40, escala: 1 },
  { nombre: 'Leroy Merlin', logo: '/images/marcas/leroy-merlin.svg', ancho: 176, alto: 106, escala: 1.1 },
  { nombre: 'Obramat', logo: '/images/marcas/obramat.svg', ancho: 500, alto: 71, escala: 0.5 },
  { nombre: 'Conforama', logo: '/images/marcas/conforama.svg', ancho: 551, alto: 91, escala: 0.55 },
  { nombre: 'Bricomart', logo: null, ancho: 0, alto: 0, escala: 1 },
  { nombre: 'Brico Depot', logo: '/images/marcas/brico-depot.svg', ancho: 375, alto: 228, escala: 1.1 },
];

export const CATEGORIAS = [
  'Todos',
  'Cocinas',
  'Armarios',
  'Salón',
  'Dormitorio',
  'Almacenamiento',
  'Mesas y auxiliares',
];

export const ELECTRODOMESTICOS = [
  'Horno',
  'Placa de cocina',
  'Campana',
  'Microondas',
  'Lavavajillas',
  'Frigorífico',
];

export const ZONAS = [
  'Madrid capital',
  'Alcorcón',
  'Móstoles',
  'Leganés',
  'Getafe',
  'Fuenlabrada',
  'Pozuelo de Alarcón',
  'Majadahonda',
  'Las Rozas',
  'Alcobendas',
  'San Sebastián de los Reyes',
  'Torrejón de Ardoz',
  'Alcalá de Henares',
  'Coslada',
  'Rivas-Vaciamadrid',
  'Arganda del Rey',
  'Parla',
  'Pinto',
  'Valdemoro',
  'Otra zona de Madrid',
];

const ELECTRO = 'Colocación de electrodomésticos incluida';

const SERVICIOS_BASE: ServicioBase[] = [
  {
    id: 1,
    nombre: 'Cocina pequeña',
    categoria: 'Cocinas',
    descripcion:
      'Montaje completo de cocinas compactas, con módulos bajos y altos, puertas y cajones. Los electrodomésticos van incluidos.',
    incluye: [
      ELECTRO,
      'Módulos bajos y muebles altos',
      'Puertas, cajones y tiradores',
      'Nivelación y ajuste final',
    ],
    precioDesde: 120,
    foto: './images/cocina-pequena.webp',
    etiqueta: 'Ideal para pisos',
    electro: true,
  },
  {
    id: 2,
    nombre: 'Cocina mediana',
    categoria: 'Cocinas',
    descripcion:
      'Cocinas con varios módulos, cajoneras y columnas, montadas y niveladas. Incluye la colocación de tus electrodomésticos.',
    incluye: [
      ELECTRO,
      'Muebles altos, bajos y cajoneras',
      'Columnas y módulos auxiliares',
      'Ajuste de puertas y cajones',
      'Nivelación y fijación',
    ],
    precioDesde: 220,
    foto: './images/cocina-mediana.webp',
    etiqueta: 'La más pedida',
    electro: true,
  },
  {
    id: 3,
    nombre: 'Cocina grande',
    categoria: 'Cocinas',
    descripcion:
      'Composiciones amplias con muchos módulos, columnas y extraíbles. Incluye la colocación de todos tus electrodomésticos.',
    incluye: [
      ELECTRO,
      'Muebles altos y bajos',
      'Columnas, cajoneras y extraíbles',
      'Ajuste de puertas y cajones',
      'Nivelación de todos los módulos',
    ],
    precioDesde: 350,
    foto: './images/cocina-grande.webp',
    etiqueta: 'Cocina completa',
    electro: true,
  },
  {
    id: 4,
    nombre: 'Cocina con isla',
    categoria: 'Cocinas',
    descripcion:
      'Cocina completa con isla central, montada, nivelada y fijada. Electrodomésticos incluidos.',
    incluye: [
      ELECTRO,
      'Muebles bajos y altos',
      'Montaje y fijación de la isla',
      'Cajoneras y puertas',
      'Nivelación final',
    ],
    precioDesde: 450,
    foto: './images/cocina-isla.webp',
    etiqueta: 'Con isla',
    electro: true,
  },
  {
    id: 5,
    nombre: 'Armario de puertas abatibles',
    categoria: 'Armarios',
    descripcion: 'Armarios de una o varias puertas, con baldas, barras y bisagras bien ajustadas.',
    incluye: [
      'Estructura y laterales',
      'Baldas interiores',
      'Barras para colgar',
      'Puertas y bisagras',
      'Ajustes finales',
    ],
    precioDesde: 65,
    foto: './images/armario-abatibles.webp',
  },
  {
    id: 6,
    nombre: 'Armario de puertas correderas',
    categoria: 'Armarios',
    descripcion: 'Armarios con sistema de puertas deslizantes, guías alineadas y regulación fina.',
    incluye: [
      'Estructura completa',
      'Baldas y divisiones',
      'Sistema de guías',
      'Puertas correderas',
      'Regulación de puertas',
    ],
    precioDesde: 90,
    foto: './images/armario-correderas.webp',
  },
  {
    id: 7,
    nombre: 'Vestidor',
    categoria: 'Armarios',
    descripcion: 'Estructuras abiertas y sistemas de vestidor modulares, listos para organizar.',
    incluye: [
      'Estructura modular',
      'Baldas',
      'Barras de colgar',
      'Cajoneras',
      'Ajustes y nivelación',
    ],
    precioDesde: 120,
    foto: './images/vestidor.webp',
  },
  {
    id: 8,
    nombre: 'Mesita de noche',
    categoria: 'Dormitorio',
    descripcion: 'Mesitas de noche con cajones o puertas, montadas con precisión.',
    incluye: [
      'Montaje de estructura',
      'Montaje de cajones',
      'Colocación de tiradores',
      'Ajustes finales',
    ],
    precioDesde: 25,
    foto: './images/mesita-noche.webp',
  },
  {
    id: 9,
    nombre: 'Cama y estructura',
    categoria: 'Dormitorio',
    descripcion: 'Camas individuales, dobles y estructuras con almacenaje.',
    incluye: [
      'Montaje de estructura',
      'Montaje de somier',
      'Instalación de patas',
      'Ajuste de piezas',
    ],
    precioDesde: 45,
    foto: './images/cama.webp',
  },
  {
    id: 10,
    nombre: 'Cómoda y cajonera',
    categoria: 'Dormitorio',
    descripcion: 'Cómodas, cajoneras y muebles de almacenamiento con cajones que deslizan bien.',
    incluye: [
      'Montaje de estructura',
      'Montaje de cajones',
      'Colocación de guías',
      'Ajuste de frentes',
    ],
    precioDesde: 40,
    foto: './images/comoda.webp',
  },
  {
    id: 11,
    nombre: 'Mueble de televisión',
    categoria: 'Salón',
    descripcion: 'Muebles de televisión, bajos y modulares, firmes y bien nivelados.',
    incluye: ['Montaje de estructura', 'Puertas y cajones', 'Baldas', 'Ajustes y nivelación'],
    precioDesde: 45,
    foto: './images/mueble-tv.webp',
  },
  {
    id: 12,
    nombre: 'Mueble de salón completo',
    categoria: 'Salón',
    descripcion: 'Composición de salón con módulos, vitrinas y estanterías.',
    incluye: [
      'Montaje de módulos',
      'Montaje de vitrinas',
      'Baldas y estantes',
      'Ajuste de puertas',
      'Nivelación',
    ],
    precioDesde: 100,
    foto: './images/mueble-completo.webp',
    etiqueta: 'Composición completa',
  },
  {
    id: 13,
    nombre: 'Mesa de comedor',
    categoria: 'Mesas y auxiliares',
    descripcion: 'Mesas de comedor, extensibles y auxiliares, estables desde el primer día.',
    incluye: [
      'Montaje de patas',
      'Ensamblaje de estructura',
      'Colocación de extensibles',
      'Revisión de estabilidad',
    ],
    precioDesde: 35,
    foto: './images/comedor.webp',
  },
  {
    id: 14,
    nombre: 'Escritorio',
    categoria: 'Mesas y auxiliares',
    descripcion: 'Escritorios de trabajo y estudio, con cajones si los incluye.',
    incluye: ['Montaje de tablero', 'Estructura y patas', 'Cajones si incluye', 'Ajustes finales'],
    precioDesde: 35,
    foto: './images/auxiliar.webp',
  },
  {
    id: 15,
    nombre: 'Estantería',
    categoria: 'Almacenamiento',
    descripcion: 'Estanterías, librerías y muebles modulares, fijados a pared si hace falta.',
    incluye: [
      'Montaje de estructura',
      'Colocación de baldas',
      'Nivelación',
      'Fijación a pared si procede',
    ],
    precioDesde: 35,
    foto: './images/estanteria.webp',
  },
  {
    id: 16,
    nombre: 'Mueble auxiliar',
    categoria: 'Almacenamiento',
    descripcion: 'Muebles auxiliares, recibidores y aparadores.',
    incluye: ['Montaje de estructura', 'Puertas y cajones', 'Baldas interiores', 'Ajustes finales'],
    precioDesde: 35,
    foto: './images/auxiliar.webp',
  },
  {
    id: 17,
    nombre: 'Mueble zapatero',
    categoria: 'Almacenamiento',
    descripcion: 'Zapateros y muebles para recibidores.',
    incluye: [
      'Montaje de estructura',
      'Puertas abatibles',
      'Baldas interiores',
      'Ajuste de cierres',
    ],
    precioDesde: 35,
    foto: './images/zapatero.webp',
  },
  {
    id: 18,
    nombre: 'Mueble de baño',
    categoria: 'Almacenamiento',
    descripcion: 'Muebles de baño, cajoneras y auxiliares.',
    incluye: [
      'Montaje de mueble',
      'Montaje de cajones',
      'Colocación de puertas',
      'Ajustes finales',
    ],
    precioDesde: 45,
    foto: './images/muebles-bano.webp',
  },
  {
    id: ID_SOLO_ELECTRO,
    nombre: 'Solo electrodomésticos',
    categoria: 'Cocinas',
    descripcion:
      'Si ya tienes la cocina montada, colocamos tus electrodomésticos integrables o de libre instalación.',
    incluye: [
      'Colocación en su hueco',
      'Ajuste de posición',
      'Integración estética en el mobiliario',
      'Revisión de encaje',
    ],
    precioDesde: 35,
    foto: './images/electrodomesticos.webp',
    etiqueta: 'Si ya tienes cocina',
  },
  {
    id: 20,
    nombre: 'Montaje de varios muebles',
    categoria: 'Mesas y auxiliares',
    descripcion: 'Varios muebles montados en una misma visita, con el trabajo bien organizado.',
    incluye: [
      'Revisión de piezas',
      'Montaje de muebles',
      'Ajustes finales',
      'Organización del trabajo',
    ],
    precioDesde: 40,
    foto: './images/varios-muebles.webp',
  },
];

export const SERVICIOS: Servicio[] = SERVICIOS_BASE.map((s) => ({
  ...s,
  imagen: s.foto,
  miniatura: s.foto,
  resumen: s.incluye.slice(0, 4),
}));

export const servicioPorId = (id: number): Servicio | undefined =>
  SERVICIOS.find((s) => s.id === id);

export const serviciosPorIds = (ids: readonly number[]): Servicio[] =>
  ids.map(servicioPorId).filter((s): s is Servicio => !!s);

/** Precio "desde" de un servicio, ya con formato (por ejemplo, "120 €"). Para usar en los textos. */
export const eur = (id: number): string => formatearPrecio(servicioPorId(id)?.precioDesde ?? 0);

/** Precio del montaje más económico del catálogo, con formato. */
export const eurMinimo = (): string =>
  formatearPrecio(Math.min(...SERVICIOS.map((s) => s.precioDesde)));

/** Precio "desde" con espacio normal, para title y description (sin &nbsp;). */
export const eurPlano = (id: number): string => eur(id).replace(/ /g, ' ');

/**
 * Nota media del negocio en su ficha de Google, tal como aparece en Google (por ejemplo "5,0").
 * Todas las meta descriptions la leen de aquí. Debe ser la nota real de la ficha: vacía (''),
 * las descripciones se publican sin la estrella.
 */
export const NOTA_GOOGLE = '5,0';
