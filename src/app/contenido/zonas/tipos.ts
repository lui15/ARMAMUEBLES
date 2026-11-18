import { Faq, VentajaMeta } from '../../landing/pagina-seo';

/**
 * Contenido de una zona (distrito de Madrid o municipio cercano). Cada zona tiene su propio
 * archivo en esta carpeta y se convierte en una página /montador-muebles-{slug}.
 *
 * Reglas para escribir una zona nueva:
 * - Solo datos comprobables (barrios, épocas de construcción, accesos, transporte) y su fuente.
 * - Los consejos se deducen de esos datos; no se inventan calles, aparcamientos ni anécdotas.
 * - Nada de copiar frases de otras webs ni de reutilizar párrafos de otra zona.
 */
export interface ZonaContenido {
  slug: string;
  nombre: string;
  tipo: 'distrito' | 'municipio';
  /** Frase propia para la meta description (sin precios). */
  frase: string;
  ventajas: [VentajaMeta, VentajaMeta, VentajaMeta];
  /** Introducción: el servicio en esta zona. */
  intro: string;
  /** Barrios o zonas residenciales. */
  barrios: string[];
  /** Cómo es la zona: tipo de viviendas, edificios y épocas de construcción. */
  viviendas: string[];
  /** Calles principales, accesos por carretera y transporte. */
  accesos: string;
  /** Aparcamiento y descarga, con lo que se puede afirmar. */
  aparcamiento: string;
  /** Dificultades habituales para montar muebles aquí. */
  dificultades: { titulo: string; texto: string }[];
  /** Cómo organizamos el montaje en esta zona, paso a paso. */
  proceso: string;
  /** Consejos prácticos para los vecinos (frases cortas). */
  consejos: [string, string, string, string];
  faqs: Faq[];
  /** Zonas cercanas con página propia, por su slug. */
  cerca: string[];
  /** Servicios relacionados, por su path. */
  servicios: string[];
  imagen: string;
  imagenAlt: string;
  fuentes: { texto: string; url: string }[];
}
