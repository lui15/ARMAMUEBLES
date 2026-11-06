import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Pictograma de cada servicio del catálogo, por su id. */
const ICONOS: Record<number, string> = {
  1: 'M3 14h18M4 14v7h16v-7M12 14v7M6 4h12v6H6zM12 4v6',
  2: 'M2 14h20M3 14v7h18v-7M9 14v7M15 14v7M3 3h6v7H3zM15 3h6v7h-6zM11 3v4l-1.5 3h5L13 7V3',
  3: 'M2 3h5v18H2zM7 14h15M8 14v7h14v-7M15 14v7M9 3h13v7H9zM15.5 3v7',
  4: 'M3 3h18v6H3zM9 3v6M15 3v6M3 15h18M5 15v6h14v-6M12 15v6',
  5: 'M5 3h14v17H5zM12 3v17M10 11v2M14 11v2M7 20v1.5M17 20v1.5',
  6: 'M4 3h16v18H4zM4 6h16M12 6v15M9.5 13.5h-3M7.5 12l-1 1.5 1 1.5M14.5 13.5h3M16.5 12l1 1.5-1 1.5',
  7: 'M12 6a2 2 0 1 1 2 2c-1 0-2 .7-2 1.7v.3l8 5a1.5 1.5 0 0 1-1 2.8H5a1.5 1.5 0 0 1-1-2.8l8-5',
  8: 'M6 5h12v13H6zM6 11.5h12M11 8h2M11 14.5h2M7.5 18v2M16.5 18v2',
  9: 'M3 6v14M3 16h18v4M21 16v-3a3 3 0 0 0-3-3H10v6M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  10: 'M4 5h16v14H4zM4 9.7h16M4 14.3h16M11 7.3h2M11 12h2M11 16.6h2M6 19v2M18 19v2',
  11: 'M5 3h14v9H5zM12 12v2M3 14h18v6H3zM9 17h6',
  12: 'M3 3h18v18H3zM3 15h18M8 5.5h8v6H8zM8 15v6M16 15v6',
  13: 'M3 9h18v2H3zM5 11l-1 9M19 11l1 9',
  14: 'M3 9h18v2H3zM5 11v9M14 11v9h6v-9M14 15h6M7 9V5h4',
  15: 'M5 3v18M19 3v18M5 7h14M5 12h14M5 17h14M8 7V4.5M11 12V9.5M14 17v-2.5',
  16: 'M4 7h16v10H4zM12 7v10M10 11v2M14 11v2M6 17v3M18 17v3',
  17: 'M5 3h14v18H5zM5 9h14M5 15h14M8 7h4l3 1M8 13h4l3 1M8 19h4l3 1',
  18: 'M8 2h8v4H8zM3 10h18M5 10v9h14v-9M12 10v9M10 14v1M14 14v1M12 7v3',
  19: 'M4 3h16v18H4zM4 8h16M7 11h10v7H7zM7.5 5.5h.01M11 5.5h.01M15 5.5h2',
  20: 'M3 13h8v8H3zM13 13h8v8h-8zM8 3h8v8H8z',
};

/** Icono que representa a cada categoría del catálogo. */
export const ICONO_CATEGORIA: Record<string, number> = {
  Cocinas: 2,
  Armarios: 5,
  Salón: 11,
  Dormitorio: 9,
  Almacenamiento: 15,
  'Mesas y auxiliares': 13,
};

@Component({
  selector: 'app-icono-mueble',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path [attr.d]="trazo()" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-grid;
      flex: none;
      place-items: center;
      width: var(--icono, 40px);
      height: var(--icono, 40px);
      border-radius: 50%;
      background: var(--lime);
      color: var(--green-d);
    }
    svg {
      width: 56%;
      height: 56%;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
})
export class IconoMueble {
  readonly id = input.required<number>();
  readonly trazo = computed(() => ICONOS[this.id()] ?? ICONOS[20]);
}
