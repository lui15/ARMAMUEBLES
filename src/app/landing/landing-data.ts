import { ZONAS, serviciosPorIds } from '../datos/catalogo';
import { NEGOCIO, SITE_URL } from '../seo.service';
import { PAGINAS_GUIAS } from './paginas-guias';
import { PAGINAS_HUB } from './paginas-hub';
import {
  PAGINAS_GUIAS_NUEVAS,
  PAGINAS_MARCAS_NUEVAS,
  PAGINAS_SERVICIOS_NUEVOS,
} from './paginas-nuevas';
import { PAGINAS_MARCAS } from './paginas-marcas';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_ZONAS } from './paginas-zonas';
import { PaginaSeo } from './pagina-seo';
import type { Prefill } from '../presupuesto/tipos-mueble';

export type { PaginaSeo } from './pagina-seo';

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
  'montador-muebles-barajas': { zona: 'Barajas' },
  'montador-muebles-san-blas': { zona: 'San Blas-Canillejas' },
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
};

export const prefillDe = (p: PaginaSeo): Prefill => PREFILL[p.path] ?? {};

/** Fuente única de todas las URL. Añadir una página es añadir un objeto en su archivo. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_SERVICIOS_NUEVOS,
  ...PAGINAS_MARCAS,
  ...PAGINAS_MARCAS_NUEVAS,
  ...PAGINAS_ZONAS,
  ...PAGINAS_GUIAS,
  ...PAGINAS_GUIAS_NUEVAS,
];

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

/** Ruta canónica de la página, con barra inicial. */
export function urlDePagina(p: PaginaSeo): string {
  return '/' + p.path;
}

/** Cadena de páginas desde el inicio hasta la actual, para las migas de pan. */
export function migasDe(p: PaginaSeo): PaginaSeo[] {
  if (p.path === '') return [p];
  const padre = p.padre ? buscarPagina(p.padre) : null;
  return padre && padre.path !== '' ? [PAGINAS[0], padre, p] : [PAGINAS[0], p];
}

/** Precio más bajo de los servicios de la página, o null si no tiene servicios asociados. */
export function precioDesde(p: PaginaSeo): number | null {
  const precios = serviciosPorIds(p.ids ?? []).map((s) => s.precioDesde);
  return precios.length ? Math.min(...precios) : null;
}

export function crearJsonLd(p: PaginaSeo): object {
  const url = SITE_URL + urlDePagina(p);
  const idNegocio = SITE_URL + '/#organization';
  const servicios = serviciosPorIds(p.ids ?? []);
  const desde = precioDesde(p);

  const nodos: object[] = [
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
      logo: SITE_URL + '/images/icono-180.png',
      priceRange: '€€',
      // Negocio que se desplaza al domicilio del cliente: no se publica dirección,
      // solo la zona de servicio (Madrid y los municipios de la web).
      areaServed: [
        { '@type': 'City', name: 'Madrid' },
        ...ZONAS.filter((z) => z !== 'Madrid capital' && z !== 'Otra zona de Madrid').map((name) => ({
          '@type': 'City',
          name,
        })),
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
      ...(desde !== null
        ? {
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: desde,
                priceCurrency: 'EUR',
                valueAddedTaxIncluded: true,
              },
            },
          }
        : {}),
    },
    {
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ];

  if (p.path !== '') {
    nodos.push({
      '@type': 'BreadcrumbList',
      itemListElement: migasDe(p).map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: m.path === '' ? 'Inicio' : m.etiqueta,
        item: SITE_URL + urlDePagina(m),
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': nodos };
}
