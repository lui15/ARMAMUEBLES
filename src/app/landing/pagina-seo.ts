import { NOTA_GOOGLE, eur, eurMinimo } from '../datos/catalogo';

export type TipoPagina = 'inicio' | 'hub' | 'servicio' | 'marca' | 'zona' | 'guia';
export type ModuloPagina = 'catalogo' | 'precios' | 'zonas' | 'tiendas' | 'opiniones';

export interface Faq {
  pregunta: string;
  respuesta: string;
}

export interface PaginaSeo {
  /** Ruta sin barra inicial. '' es la página de inicio. */
  path: string;
  tipo: TipoPagina;
  /** Página de la que cuelga en las migas de pan. */
  padre?: string;
  title: string;
  description: string;
  /** Texto del enlace interno hacia esta página. */
  etiqueta: string;
  h1: { antes: string; resaltado: string; despues: string };
  kicker: string;
  h2: string;
  intro: string;
  /** Párrafos de desarrollo bajo el H2. */
  parrafos: string[];
  puntos: string[];
  bloques: { titulo: string; texto: string }[];
  faqs: Faq[];
  servicio: { nombre: string; descripcion: string };
  zona?: string;
  /** Foto principal y su texto alternativo. */
  imagen: string;
  imagenAlt: string;
  /** Servicios del catálogo con precio que se muestran en la página. */
  ids?: number[];
  /** Precio que se destaca sobre la foto, si no debe ser el más bajo de la página. */
  destacado?: { texto: string; precio: number };
  /** Categoría que se preselecciona al abrir el formulario. */
  categoria?: string;
  /** Sección especial de las páginas índice. */
  modulo?: ModuloPagina;
  /** Precios complementarios (de precios-extra.ts) que se muestran en "Cuánto cuesta". */
  preciosExtra?: { concepto: string; precio: string; detalle?: string }[];
  /** Guía de precios de este servicio, por su path. */
  guia?: string;
  /** Páginas relacionadas, por su path. */
  relacionadas: string[];
}

export const ZONAS_TEXTO =
  'Madrid capital y municipios como Alcorcón, Móstoles, Leganés, Getafe, Fuenlabrada, Pozuelo de Alarcón, Majadahonda, Las Rozas, Alcobendas, San Sebastián de los Reyes, Torrejón de Ardoz, Alcalá de Henares, Coslada, Rivas-Vaciamadrid, Arganda del Rey, Parla, Pinto y Valdemoro. Si tu zona no aparece, elige «Otra zona de Madrid» en el formulario.';

export const PRECIOS_TEXTO =
  `Nuestros montajes empiezan en ${eurMinimo()}. Como referencia, un armario de puertas abatibles empieza en ${eur(5)} y una cocina en ${eur(1)} con la colocación de electrodomésticos incluida. El precio definitivo se confirma tras revisar las características y dimensiones.`;

export const TIENDAS_TEXTO =
  'Montamos muebles de IKEA, Leroy Merlin, Obramat, Conforama, Bricomart y Brico Depot. Si has comprado en otra tienda, cuéntanoslo en la solicitud y lo revisamos.';

export const COMO_PEDIR_TEXTO =
  'Con el formulario de cuatro pasos: eliges el mueble, indicas la cantidad y la zona, y dejas tus datos. Revisamos los detalles y te damos una propuesta personalizada por teléfono o WhatsApp.';

/** Ventajas que se pueden afirmar en las meta descriptions. */
export type VentajaMeta =
  | 'Presupuesto ajustado'
  | 'Llevamos herramientas'
  | 'Nos llevamos los cartones'
  | 'Te atendemos solo nosotros'
  | 'Una sola persona de contacto'
  | 'Trato cercano';

/**
 * Meta description con el formato común:
 * "⭐ {NOTA_GOOGLE} en Google · ✓ ventaja · ✓ ventaja · ✓ ventaja. Frase de la página."
 * Sin nota de Google, empieza directamente por las ventajas.
 */
export function meta(ventajas: [VentajaMeta, VentajaMeta, VentajaMeta], frase: string): string {
  const estrella = NOTA_GOOGLE ? `⭐ ${NOTA_GOOGLE} en Google · ` : '';
  return `${estrella}${ventajas.map((v) => `✓ ${v}`).join(' · ')}. ${frase}`;
}
