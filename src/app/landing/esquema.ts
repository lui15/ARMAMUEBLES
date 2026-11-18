import { serviciosPorIds } from '../datos/catalogo';
import { NEGOCIO, SITE_URL, conBarra } from '../seo.service';
import { ZONAS } from '../datos/catalogo';
import { PaginaSeo } from './pagina-seo';

/* Funciones de SEO de una página que no necesitan cargar el contenido de todas las demás. */

/** Ruta canónica de la página, con barra inicial. */
export function urlDePagina(p: PaginaSeo): string {
  return '/' + p.path;
}

/** Precio más bajo de los servicios de la página, o null si no tiene servicios asociados. */
export function precioDesde(p: PaginaSeo): number | null {
  const precios = serviciosPorIds(p.ids ?? []).map((s) => s.precioDesde);
  return precios.length ? Math.min(...precios) : null;
}

/** JSON-LD de la página. Las migas se pasan ya calculadas (la portada no las necesita). */
export function crearJsonLd(p: PaginaSeo, migas: PaginaSeo[] = [p]): object {
  const url = SITE_URL + conBarra(urlDePagina(p));
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
      sameAs: NEGOCIO.perfiles,
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
      itemListElement: migas.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: m.path === '' ? 'Inicio' : m.etiqueta,
        item: SITE_URL + conBarra(urlDePagina(m)),
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': nodos };
}
