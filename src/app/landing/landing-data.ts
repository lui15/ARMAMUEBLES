import { serviciosPorIds } from '../datos/catalogo';
import { NEGOCIO, SITE_URL } from '../seo.service';
import { PAGINAS_HUB } from './paginas-hub';
import { PAGINAS_MARCAS } from './paginas-marcas';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_ZONAS } from './paginas-zonas';
import { PaginaSeo } from './pagina-seo';

export type { PaginaSeo } from './pagina-seo';

/** Fuente única de todas las URL. Añadir una página es añadir un objeto en su archivo. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_MARCAS,
  ...PAGINAS_ZONAS,
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
      logo: SITE_URL + '/images/logo.png',
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
      ...(desde !== null
        ? {
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'EUR',
              lowPrice: desde,
              offerCount: servicios.length,
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
