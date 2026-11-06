import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/** Dominio final, sin barra al final. Debe coincidir con public/robots.txt y public/sitemap.xml. */
export const SITE_URL = 'https://armamuebles.es';

export const NEGOCIO = {
  nombre: 'ArmaMuebles',
  telefono: '+34624671374',
} as const;

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  jsonLd?: object;
  noindex?: boolean;
  /** Ruta de la imagen para redes sociales. Por defecto, el logotipo. */
  imagen?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(config: SeoConfig): void {
    const url = SITE_URL + config.path;

    this.titleService.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({
      name: 'robots',
      content: config.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: NEGOCIO.nombre });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: 'es_ES' });
    const imagen = SITE_URL + (config.imagen ?? '/images/logo.png').replace(/^\./, '');
    this.meta.updateTag({ property: 'og:image', content: imagen });
    this.meta.updateTag({ name: 'twitter:image', content: imagen });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });

    if (config.noindex) {
      this.removeCanonical();
    } else {
      this.setCanonical(url);
    }

    this.setJsonLd(config.jsonLd);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private removeCanonical(): void {
    this.doc.querySelector('link[rel="canonical"]')?.remove();
  }

  private setJsonLd(data?: object): void {
    const id = 'seo-jsonld';
    this.doc.getElementById(id)?.remove();

    if (!data) {
      return;
    }

    const script = this.doc.createElement('script');
    script.setAttribute('id', id);
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
