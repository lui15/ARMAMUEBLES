import { crearJsonLd as crearJsonLdBase, precioDesde, urlDePagina } from './esquema';
import { PAGINAS_GUIAS } from './paginas-guias';
import { PAGINAS_ZONAS_CONTENIDO } from '../contenido/zonas';
import { PAGINAS_HUB } from './paginas-hub';
import {
  PAGINAS_GUIAS_NUEVAS,
  PAGINAS_MARCAS_NUEVAS,
  PAGINAS_SERVICIOS_NUEVOS,
} from './paginas-nuevas';
import { PAGINAS_MARCAS } from './paginas-marcas';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PaginaSeo } from './pagina-seo';
import type { Prefill } from '../presupuesto/tipos-mueble';

export type { PaginaSeo } from './pagina-seo';
export { precioDesde, urlDePagina };

/** Formulario ya rellenado según la página: mueble, tienda o zona. */
const PREFILL: Record<string, Prefill> = {
  'montaje-cocinas-madrid': { tipos: [{ tipo: 'cocina' }] },
  'montaje-armarios-madrid': { tipos: [{ tipo: 'armario' }] },
  'montaje-armarios-pax': { tipos: [{ tipo: 'armario' }], tienda: 'IKEA' },
  'montaje-dormitorios-madrid': { tipos: [{ tipo: 'dormitorio' }] },
  'montaje-salones-madrid': { tipos: [{ tipo: 'salon' }] },
  'montaje-mesas-escritorios-madrid': { tipos: [{ tipo: 'mesa' }] },
  'montaje-estanterias-madrid': { tipos: [{ tipo: 'estanteria' }] },
  'montaje-muebles-bano-madrid': { tipos: [{ tipo: 'bano' }] },
  'colocacion-electrodomesticos-madrid': { tipos: [{ tipo: 'electro' }] },
  'montaje-muebles-ikea-madrid': { tienda: 'IKEA' },
  'montaje-muebles-leroy-merlin': { tienda: 'Leroy Merlin' },
  'cuanto-cuesta-montar-armario-pax': { tipos: [{ tipo: 'armario' }], tienda: 'IKEA' },
  'cuanto-cuesta-montar-cocina-ikea': { tipos: [{ tipo: 'cocina' }], tienda: 'IKEA' },
  'montaje-vestidores-madrid': { tipos: [{ tipo: 'armario', subtipo: 'vestidor' }] },
  'montaje-camas-canapes-madrid': { tipos: [{ tipo: 'dormitorio' }] },
  'montaje-muebles-oficina-madrid': { tipos: [{ tipo: 'mesa' }] },
  'desmontaje-muebles-madrid': { tipos: [{ tipo: 'otro' }] },
  'colgar-tv-baldas-espejos-madrid': { tipos: [{ tipo: 'otro' }] },
  'montaje-muebles-a-medida-madrid': { tipos: [{ tipo: 'otro' }] },
  'montaje-muebles-conforama-madrid': { tienda: 'Conforama' },
  'cuanto-tarda-montar-una-cocina-ikea': { tipos: [{ tipo: 'cocina' }], tienda: 'IKEA' },
  'montar-un-pax-tu-mismo-o-con-montador': { tipos: [{ tipo: 'armario' }], tienda: 'IKEA' },
  'precio-montaje-cocina-metro-lineal': { tipos: [{ tipo: 'cocina' }] },
  'montaje-cama-abatible-madrid': { tipos: [{ tipo: 'dormitorio' }] },
  'montaje-mobiliario-tiendas-madrid': { tipos: [{ tipo: 'otro' }] },
};

export const prefillDe = (p: PaginaSeo): Prefill =>
  PREFILL[p.path] ?? (p.tipo === 'zona' && p.zona ? { zona: p.zona } : {});

/** Qué quiere el cliente en cada página de servicio, para el mensaje ya escrito de WhatsApp. */
const TRABAJO_WHATSAPP: Record<string, string> = {
  'montaje-cocinas-madrid': 'montar una cocina',
  'montaje-armarios-madrid': 'montar un armario',
  'montaje-armarios-pax': 'montar un armario PAX de IKEA',
  'montaje-dormitorios-madrid': 'montar un dormitorio',
  'montaje-salones-madrid': 'montar muebles de salón',
  'montaje-mesas-escritorios-madrid': 'montar una mesa o escritorio',
  'montaje-estanterias-madrid': 'montar estanterías',
  'montaje-muebles-bano-madrid': 'montar un mueble de baño',
  'colocacion-electrodomesticos-madrid': 'colocar electrodomésticos',
  'montaje-vestidores-madrid': 'montar un vestidor',
  'montaje-camas-canapes-madrid': 'montar una cama o canapé',
  'montaje-muebles-oficina-madrid': 'montar muebles de oficina',
  'desmontaje-muebles-madrid': 'desmontar muebles',
  'colgar-tv-baldas-espejos-madrid': 'colgar una TV, baldas o espejos',
  'montaje-muebles-a-medida-madrid': 'montar muebles a medida',
  'montaje-cama-abatible-madrid': 'montar una cama abatible',
  'montaje-mobiliario-tiendas-madrid': 'montar mobiliario para una tienda o local',
};

/** Mensaje de WhatsApp que nombra el servicio, o null si la página no es de un servicio concreto. */
export const mensajeWhatsappDe = (p: PaginaSeo): string | null => {
  const trabajo = TRABAJO_WHATSAPP[p.path];
  return trabajo ? `Hola, quiero presupuesto para ${trabajo}. Zona: ___ . (Si puedo, os mando una foto)` : null;
};

/** Fuente única de todas las URL. Añadir una página es añadir un objeto en su archivo. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_SERVICIOS_NUEVOS,
  ...PAGINAS_MARCAS,
  ...PAGINAS_MARCAS_NUEVAS,
  ...PAGINAS_ZONAS_CONTENIDO,
  ...PAGINAS_GUIAS,
  ...PAGINAS_GUIAS_NUEVAS,
];

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

/** Cadena de páginas desde el inicio hasta la actual, para las migas de pan. */
export function migasDe(p: PaginaSeo): PaginaSeo[] {
  if (p.path === '') return [p];
  const padre = p.padre ? buscarPagina(p.padre) : null;
  return padre && padre.path !== '' ? [PAGINAS[0], padre, p] : [PAGINAS[0], p];
}

/** JSON-LD de la página, con sus migas de pan. */
export const crearJsonLd = (p: PaginaSeo): object => crearJsonLdBase(p, migasDe(p));
