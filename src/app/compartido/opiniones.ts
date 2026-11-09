import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

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
