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
 * - "carrusel": todas, en un carrusel táctil con scroll-snap (portada).
 * - "todas": todas con filtro (/opiniones).
 */
@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [Estrellas, RouterLink],
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

  /* ---------- Carrusel automático ---------- */

  /** Cada cuánto pasa a la siguiente opinión. */
  private static readonly INTERVALO_MS = 5000;
  /** Tras tocar o deslizar con el dedo, cuánto espera antes de seguir solo. */
  private static readonly ESPERA_TRAS_TOQUE_MS = 8000;

  private readonly carrusel = viewChild<ElementRef<HTMLElement>>('carrusel');
  /** Pausado por el visitante con el botón. */
  readonly pausado = signal(REDUCIR_MOVIMIENTO);
  /** Hay movimiento automático: se oculta el botón si el sistema pide reducir movimiento. */
  readonly automatico = !REDUCIR_MOVIMIENTO;
  private interaccion = false;
  private visible = false;
  private reanudar?: ReturnType<typeof setTimeout>;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const lista = this.carrusel()?.nativeElement;
      if (this.formato() !== 'carrusel' || !lista || REDUCIR_MOVIMIENTO) return;

      // Solo avanza mientras se ve en pantalla.
      if (typeof IntersectionObserver !== 'undefined') {
        const io = new IntersectionObserver(([e]) => (this.visible = e.isIntersecting), { threshold: 0.4 });
        io.observe(lista);
        destroyRef.onDestroy(() => io.disconnect());
      } else {
        this.visible = true;
      }

      // Se detiene mientras el visitante lo usa: ratón encima, foco o dedo.
      const parar = () => {
        this.interaccion = true;
        clearTimeout(this.reanudar);
      };
      const seguir = (espera = 0) => {
        clearTimeout(this.reanudar);
        this.reanudar = setTimeout(() => (this.interaccion = false), espera);
      };
      const alSalirRaton = () => seguir();
      const alSoltar = () => seguir(Opiniones.ESPERA_TRAS_TOQUE_MS);
      const alSalirFoco = (e: FocusEvent) => {
        if (!lista.contains(e.relatedTarget as Node)) seguir();
      };
      lista.addEventListener('pointerenter', parar);
      lista.addEventListener('pointerleave', alSalirRaton);
      lista.addEventListener('touchstart', parar, { passive: true });
      lista.addEventListener('touchend', alSoltar, { passive: true });
      lista.addEventListener('focusin', parar);
      lista.addEventListener('focusout', alSalirFoco);

      const id = setInterval(() => {
        if (this.pausado() || this.interaccion || !this.visible || document.hidden) return;
        this.avanzar(lista);
      }, Opiniones.INTERVALO_MS);

      destroyRef.onDestroy(() => {
        clearInterval(id);
        clearTimeout(this.reanudar);
        lista.removeEventListener('pointerenter', parar);
        lista.removeEventListener('pointerleave', alSalirRaton);
        lista.removeEventListener('touchstart', parar);
        lista.removeEventListener('touchend', alSoltar);
        lista.removeEventListener('focusin', parar);
        lista.removeEventListener('focusout', alSalirFoco);
      });
    });
  }

  /** Pasa a la siguiente tarjeta; al llegar al final, vuelve a la primera. */
  private avanzar(lista: HTMLElement): void {
    const tarjeta = lista.querySelector('li');
    if (!tarjeta) return;
    const paso = tarjeta.getBoundingClientRect().width + parseFloat(getComputedStyle(lista).columnGap || '0');
    const alFinal = lista.scrollLeft + lista.clientWidth >= lista.scrollWidth - 4;
    lista.scrollTo({ left: alFinal ? 0 : lista.scrollLeft + paso, behavior: 'smooth' });
  }

  alternarPausa(): void {
    this.pausado.update((v) => !v);
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
