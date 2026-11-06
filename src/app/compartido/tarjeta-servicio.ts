import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Servicio, formatearPrecio } from '../datos/catalogo';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="tarjeta">
      <div class="tarjeta-foto">
        <img
          [src]="servicio().foto"
          [alt]="'Montaje: ' + servicio().nombre"
          width="640"
          height="480"
          loading="lazy"
          decoding="async"
        />
        @if (servicio().etiqueta) {
          <span class="tarjeta-sello">{{ servicio().etiqueta }}</span>
        }
      </div>
      <div class="tarjeta-cuerpo">
        <span class="tarjeta-cat">{{ servicio().categoria }}</span>
        <h3>{{ servicio().nombre }}</h3>
        <p>{{ servicio().descripcion }}</p>
        <ul>
          @for (detalle of servicio().resumen; track detalle) {
            <li>{{ detalle }}</li>
          }
        </ul>
        <div class="tarjeta-pie">
          <span class="tarjeta-precio">
            <small>Desde</small>
            {{ precio(servicio().precioDesde) }}
          </span>
          <button
            type="button"
            class="btn btn-ink btn-sm"
            [attr.aria-label]="'Pedir presupuesto: ' + servicio().nombre"
            (click)="presupuesto.abrir(servicio())"
          >
            Pedir
          </button>
        </div>
      </div>
    </article>
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
    }
    .tarjeta {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      background: var(--surface);
      transition:
        box-shadow 0.5s var(--ease),
        transform 0.5s var(--ease);
    }
    .tarjeta-foto {
      position: relative;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: var(--bg-2);
    }
    .tarjeta-foto img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.1s var(--ease);
    }
    .tarjeta-sello {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 5px 12px;
      border-radius: 999px;
      background: rgba(255, 254, 250, 0.94);
      color: var(--ink);
      font-size: 0.74rem;
      font-weight: 700;
    }
    .tarjeta-cuerpo {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 20px 20px 18px;
    }
    .tarjeta-cat {
      color: var(--green-d);
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    h3 {
      margin-top: 6px;
    }
    p {
      margin-top: 8px;
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.55;
    }
    ul {
      margin-top: 12px;
      color: var(--ink-3);
      font-size: 0.84rem;
    }
    li {
      position: relative;
      padding: 3px 0 3px 18px;
      line-height: 1.4;
    }
    li::before {
      content: '';
      position: absolute;
      top: 0.68em;
      left: 2px;
      width: 8px;
      height: 1px;
      background: var(--green-d);
    }
    .tarjeta-pie {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 12px;
      margin-top: auto;
      padding-top: 18px;
    }
    .tarjeta-precio {
      color: var(--ink);
      font-family: var(--display);
      font-size: 1.9rem;
      line-height: 1;
    }
    .tarjeta-precio small {
      display: block;
      margin-bottom: 4px;
      color: var(--muted);
      font-family: var(--ui);
      font-size: 0.72rem;
      font-weight: 600;
    }
    @media (hover: hover) {
      .tarjeta:hover {
        box-shadow: var(--sh);
        transform: translateY(-5px);
      }
      .tarjeta:hover img {
        transform: scale(1.05);
      }
    }
  `,
})
export class TarjetaServicio {
  readonly servicio = input.required<Servicio>();
  readonly presupuesto = inject(PresupuestoService);
  readonly precio = formatearPrecio;
}
