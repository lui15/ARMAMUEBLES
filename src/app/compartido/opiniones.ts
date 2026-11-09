import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { REDUCIR_MOVIMIENTO } from './animaciones';

import {
  FILTROS_OPINIONES,
  FiltroOpinion,
  NOTA_OPINIONES,
  OPINIONES,
  Opinion,
  PERFIL_GOOGLE,
  nombreVisible,
  opinionesDe,
  resumenOpiniones,
} from '../datos/opiniones';

/** Estrellas en SVG con texto para lectores de pantalla. */
@Component({
  selector: 'app-estrellas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="estrellas" role="img" [attr.aria-label]="valor() + ' de 5 estrellas'">
      @for (i of cinco; track i) {
        <svg viewBox="0 0 20 20" aria-hidden="true" [class.vacia]="i > valor()">
          <path d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8l-4.3-4 5.8-.7z" />
        </svg>
      }
    </span>
  `,
  styles: `
    .estrellas {
      display: inline-flex;
      gap: 2px;
    }
    svg {
      width: var(--estrella, 18px);
      height: var(--estrella, 18px);
      fill: #e9a825;
    }
    svg.vacia {
      fill: var(--line);
    }
  `,
})
export class Estrellas {
  readonly valor = input.required<number>();
  readonly cinco = [1, 2, 3, 4, 5];
}

/**
 * Opiniones de clientes. Tres formatos:
 * - "pagina": las de una página (o dos generales si no tiene propias).
 * - "carrusel": todas, pasando solas en movimiento continuo, como un anuncio (portada).
 * - "todas": todas con filtro (/opiniones).
 */
@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [Estrellas, RouterLink, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './opiniones.html',
  styleUrl: './opiniones.css',
})
export class Opiniones {
  readonly path = input('');
  readonly formato = input<'pagina' | 'carrusel' | 'todas'>('pagina');

  readonly nombre = nombreVisible;
  readonly nota = NOTA_OPINIONES;
  readonly resumen = resumenOpiniones();
  readonly google = PERFIL_GOOGLE;
  readonly filtros = FILTROS_OPINIONES;
  readonly filtro = signal<FiltroOpinion | null>(null);

  /* ---------- Carrusel en movimiento continuo, como un anuncio ---------- */

  /** Velocidad del desplazamiento, en píxeles por segundo. */
  private static readonly VELOCIDAD = 40;

  private readonly ventana = viewChild<ElementRef<HTMLElement>>('ventana');
  /**
   * En el HTML prerenderizado (y con "reducir movimiento") el carrusel se desliza a mano.
   * En el navegador se duplica la lista y pasa sola, sin fin.
   */
  readonly enMovimiento = signal(false);
  /** Solo se mueve mientras se ve: fuera de pantalla no gasta batería. */
  readonly visible = signal(false);
  /** Duración de una vuelta, calculada para que la velocidad sea la misma en cualquier pantalla. */
  readonly duracion = signal(60);
  /** Distancia de una vuelta: lo que ocupan las opiniones originales, en píxeles. */
  readonly vuelta = signal(0);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const ventana = this.ventana()?.nativeElement;
      if (this.formato() !== 'carrusel' || !ventana || REDUCIR_MOVIMIENTO) return;

      this.enMovimiento.set(true);

      if (typeof IntersectionObserver !== 'undefined') {
        const io = new IntersectionObserver(([e]) => this.visible.set(e.isIntersecting));
        io.observe(ventana);
        destroyRef.onDestroy(() => io.disconnect());
      } else {
        this.visible.set(true);
      }

      // Una vuelta es lo que ocupan las opiniones originales: al llegar ahí, la copia está
      // exactamente donde empezó la original y el salto no se nota. Se recalcula si cambia el ancho.
      const medir = () => {
        const originales = [...ventana.querySelectorAll<HTMLElement>('.op-cinta > li')].slice(
          0,
          this.lista().length,
        );
        const distancia = originales.reduce(
          (total, li) => total + li.getBoundingClientRect().width + parseFloat(getComputedStyle(li).marginRight),
          0,
        );
        if (distancia > 0) {
          this.vuelta.set(Math.round(distancia));
          this.duracion.set(Math.max(20, distancia / Opiniones.VELOCIDAD));
        }
      };
      setTimeout(medir, 0);
      const ventanaGlobal = ventana.ownerDocument.defaultView;
      ventanaGlobal?.addEventListener('resize', medir, { passive: true });
      destroyRef.onDestroy(() => ventanaGlobal?.removeEventListener('resize', medir));
    });
  }

  readonly lista = computed<Opinion[]>(() => {
    switch (this.formato()) {
      case 'todas': {
        const f = this.filtro();
        return f ? OPINIONES.filter((o) => o.filtro === f) : OPINIONES;
      }
      case 'carrusel': {
        // Primero las de la portada, luego el resto.
        const propias = OPINIONES.filter((o) => o.paginas.includes(this.path()));
        return [...propias, ...OPINIONES.filter((o) => !propias.includes(o))];
      }
      default:
        return opinionesDe(this.path());
    }
  });

  cuantas(f: FiltroOpinion): number {
    return OPINIONES.filter((o) => o.filtro === f).length;
  }
}
