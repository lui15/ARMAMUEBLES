import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaFinal, FaqLista, ProcesoPasos } from '../compartido/bloques';
import { CatalogoServicios } from '../compartido/catalogo-servicios';
import { ModuloPrecios } from '../compartido/modulo-precios';
import { srcsetDe } from '../compartido/imagenes';
import { Opiniones } from '../compartido/opiniones';
import { WhatsappLink } from '../compartido/enlaces-contacto';
import { TarjetaServicio } from '../compartido/tarjeta-servicio';
import {
  MARCAS,
  WHATSAPP,
  ZONAS,
  formatearPrecio,
  serviciosPorIds,
} from '../datos/catalogo';
import { NOTA_PRECIOS } from '../datos/precios-extra';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import {
  buscarPagina,
  crearJsonLd,
  migasDe,
  prefillDe,
  precioDesde,
  urlDePagina,
} from './landing-data';

/**
 * Plantilla de todas las URL de contenido. Cada una se define con un objeto de datos.
 * Expone a la plantilla: prefill (formulario ya rellenado), guia, notaPrecios y srcset.
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    CatalogoServicios,
    TarjetaServicio,
    ProcesoPasos,
    FaqLista,
    CtaFinal,
    WhatsappLink,
    ModuloPrecios,
    Opiniones,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  readonly presupuesto = inject(PresupuestoService);

  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly prefill = prefillDe(this.pagina);
  readonly desde = this.pagina.destacado?.precio ?? precioDesde(this.pagina);
  readonly servicios = serviciosPorIds(this.pagina.ids ?? []);
  readonly guia = this.pagina.guia ? buscarPagina(this.pagina.guia) : null;
  readonly notaPrecios = NOTA_PRECIOS;
  readonly srcset = srcsetDe;
  readonly relacionadas = this.pagina.relacionadas.map((path) => buscarPagina(path));

  /** Las páginas de catálogo y precios ya muestran todo el listado: no repiten tarjetas. */
  readonly muestraTarjetas = !this.pagina.modulo && this.servicios.length > 0;

  readonly whatsapp = WHATSAPP;
  readonly precio = formatearPrecio;
  readonly marcas = MARCAS;
  readonly zonas = ZONAS.filter((z) => z !== 'Otra zona de Madrid');

  constructor() {
    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: urlDePagina(this.pagina),
      imagen: this.pagina.imagen,
      jsonLd: crearJsonLd(this.pagina),
    });
  }
}
