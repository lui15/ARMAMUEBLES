import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  WritableSignal,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { CountDirective, REDUCIR_MOVIMIENTO, RevealDirective } from '../compartido/animaciones';
import { CtaFinal, FaqLista, ProcesoPasos } from '../compartido/bloques';
import { CatalogoServicios } from '../compartido/catalogo-servicios';
import {
  ELECTRODOMESTICOS,
  ID_SOLO_ELECTRO,
  MARCAS,
  SERVICIOS,
  ZONAS,
  servicioPorId,
} from '../datos/catalogo';
import { PAGINAS, buscarPagina, crearJsonLd, urlDePagina } from '../landing/landing-data';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { KitchenScene } from './kitchen-scene';

/** Palabras que se deslizan en el texto bajo el titular. */
const PIEZAS = [
  'mesita de noche',
  'estantería',
  'armario',
  'cama',
  'cómoda',
  'escritorio',
  'mueble de TV',
  'mesa de comedor',
];

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    CountDirective,
    KitchenScene,
    CatalogoServicios,
    ProcesoPasos,
    FaqLista,
    CtaFinal,
  ],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  private readonly destroyRef = inject(DestroyRef);
  readonly presupuesto = inject(PresupuestoService);

  readonly pagina = buscarPagina('');
  readonly marcas = MARCAS;
  readonly cifras = {
    servicios: SERVICIOS.length,
    tiendas: MARCAS.length,
    municipios: ZONAS.filter((z) => z !== 'Madrid capital' && z !== 'Otra zona de Madrid').length,
    desde: Math.min(...SERVICIOS.map((s) => s.precioDesde)),
  };
  readonly marca = signal(0);
  readonly marcaPrev = signal(-1);
  readonly piezas = PIEZAS;
  readonly pieza = signal(0);
  readonly piezaPrev = signal(-1);
  readonly electrodomesticos = ELECTRODOMESTICOS;
  readonly soloElectro = servicioPorId(ID_SOLO_ELECTRO);

  /** Doble lista para que la cinta de tiendas se repita sin saltos. */
  readonly cinta = [...MARCAS, ...MARCAS];

  readonly estancias = [
    { path: 'montaje-cocinas-madrid', titulo: 'Cocinas', desde: '120 €', foto: './images/cocina-isla.webp', alt: 'Cocina con isla central', clase: 'grande' },
    { path: 'montaje-armarios-madrid', titulo: 'Armarios y vestidores', desde: '65 €', foto: './images/armario-correderas.webp', alt: 'Armario de puertas correderas', clase: '' },
    { path: 'montaje-dormitorios-madrid', titulo: 'Dormitorios', desde: '25 €', foto: './images/cama.webp', alt: 'Cama con estructura en un dormitorio', clase: '' },
    { path: 'montaje-salones-madrid', titulo: 'Salones', desde: '45 €', foto: './images/mueble-tv.webp', alt: 'Mueble de televisión en un salón', clase: '' },
    { path: 'montaje-mesas-escritorios-madrid', titulo: 'Mesas y escritorios', desde: '35 €', foto: './images/escritorio.webp', alt: 'Escritorio de trabajo', clase: '' },
    { path: 'montaje-muebles-bano-madrid', titulo: 'Baños', desde: '45 €', foto: './images/muebles-bano.webp', alt: 'Mueble de baño con cajones', clase: '' },
  ];

  readonly paginasZona = PAGINAS.filter((p) => p.tipo === 'zona');
  readonly paginasMarca = PAGINAS.filter((p) => p.tipo === 'marca');

  constructor() {
    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: urlDePagina(this.pagina),
      imagen: this.pagina.imagen,
      jsonLd: crearJsonLd(this.pagina),
    });

    afterNextRender(() => this.iniciarRotadores());
  }

  private iniciarRotadores(): void {
    if (REDUCIR_MOVIMIENTO) return;

    const girar = (
      actual: WritableSignal<number>,
      previa: WritableSignal<number>,
      total: number,
      ms: number,
    ) => {
      const id = setInterval(() => {
        previa.set(actual());
        actual.set((actual() + 1) % total);
      }, ms);
      this.destroyRef.onDestroy(() => clearInterval(id));
    };

    girar(this.marca, this.marcaPrev, MARCAS.length, 2400);
    girar(this.pieza, this.piezaPrev, PIEZAS.length, 2900);
  }
}
