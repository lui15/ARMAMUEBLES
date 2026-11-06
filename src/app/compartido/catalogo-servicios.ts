import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { CATEGORIAS, SERVICIOS } from '../datos/catalogo';
import { RevealDirective } from './animaciones';
import { TarjetaServicio } from './tarjeta-servicio';

/** Catálogo completo con filtro por categoría, búsqueda y orden. */
@Component({
  selector: 'app-catalogo-servicios',
  standalone: true,
  imports: [RevealDirective, TarjetaServicio],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="filtros" appReveal>
      <div class="categorias" role="group" aria-label="Categorías">
        @for (c of categorias; track c) {
          <button
            type="button"
            [class.on]="categoria() === c"
            [attr.aria-pressed]="categoria() === c"
            (click)="seleccionar(c)"
          >
            {{ c }}
          </button>
        }
      </div>
      <div class="controles">
        <label class="campo">
          <span class="sr-only">Buscar mueble</span>
          <input
            type="search"
            placeholder="Buscar mueble…"
            [value]="busqueda()"
            (input)="buscar($any($event.target).value)"
          />
        </label>
        <label class="campo">
          <span class="sr-only">Ordenar</span>
          <select [value]="orden()" (change)="orden.set($any($event.target).value)">
            <option value="recomendados">Recomendados</option>
            <option value="precio-menor">Precio: de menor a mayor</option>
            <option value="precio-mayor">Precio: de mayor a menor</option>
          </select>
        </label>
      </div>
    </div>

    <ul class="rejilla">
      @for (s of visibles(); track s.id) {
        <li><app-tarjeta-servicio [servicio]="s" /></li>
      }
    </ul>

    @if (filtrados().length === 0) {
      <div class="vacio">
        <h3>No hemos encontrado ese mueble</h3>
        <p>Prueba con otra búsqueda o cuéntanoslo al pedir presupuesto y lo revisamos.</p>
        <button type="button" class="btn btn-ghost btn-sm" (click)="limpiar()">Ver todo</button>
      </div>
    }

    @if (filtrados().length > 8) {
      <div class="mas">
        <button type="button" class="btn btn-ghost" (click)="todos.set(!todos())">
          {{ todos() ? 'Ver menos' : 'Ver los ' + filtrados().length + ' servicios' }}
        </button>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .filtros {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px 28px;
      margin-bottom: 28px;
    }
    .categorias {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .categorias button {
      min-height: 42px;
      padding: 6px 18px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: transparent;
      color: var(--ink-3);
      font-size: 0.88rem;
      font-weight: 600;
      white-space: nowrap;
      transition:
        background 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
    .categorias button:hover {
      border-color: var(--ink-3);
    }
    .categorias button.on {
      border-color: var(--ink);
      background: var(--ink);
      color: #fff;
    }
    .controles {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .campo input,
    .campo select {
      width: 13.5rem;
      min-height: 42px;
      padding: 6px 16px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--surface);
      font-size: 0.88rem;
    }
    .rejilla {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 16.5rem), 1fr));
      gap: 16px;
    }
    .vacio {
      padding: 48px 24px;
      border: 1px dashed var(--line);
      border-radius: var(--r-md);
      text-align: center;
    }
    .vacio p {
      margin: 8px 0 18px;
      color: var(--muted);
    }
    .mas {
      display: flex;
      justify-content: center;
      margin-top: 32px;
    }
    @media (max-width: 720px) {
      /* En móvil las categorías se deslizan en una sola línea, sin ocupar media pantalla. */
      .categorias {
        flex-wrap: nowrap;
        width: calc(100% + 2 * var(--gutter));
        margin-inline: calc(-1 * var(--gutter));
        padding-inline: var(--gutter);
        overflow-x: auto;
        scrollbar-width: none;
        scroll-snap-type: x proximity;
      }
      .categorias::-webkit-scrollbar {
        display: none;
      }
      .categorias button {
        scroll-snap-align: start;
      }
      .controles,
      .campo {
        width: 100%;
      }
      .campo input,
      .campo select {
        width: 100%;
        min-height: 48px;
        font-size: 1rem;
      }
    }
    @media (max-width: 560px) {
      /* Tarjetas en carrusel horizontal: el catálogo no se hace eterno en móvil. */
      .rejilla {
        grid-auto-flow: column;
        grid-auto-columns: 82%;
        grid-template-columns: none;
        width: calc(100% + 2 * var(--gutter));
        margin-inline: calc(-1 * var(--gutter));
        padding-inline: var(--gutter);
        padding-bottom: 8px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-padding-inline: var(--gutter);
        scrollbar-width: none;
      }
      .rejilla::-webkit-scrollbar {
        display: none;
      }
      .rejilla li {
        scroll-snap-align: start;
      }
    }
  `,
})
export class CatalogoServicios {
  readonly categorias = CATEGORIAS;
  readonly categoria = signal('Todos');
  readonly busqueda = signal('');
  readonly orden = signal('recomendados');
  readonly todos = signal(false);

  readonly filtrados = computed(() => {
    let lista = [...SERVICIOS];
    const categoria = this.categoria();
    const termino = this.busqueda().toLowerCase().trim();

    if (categoria !== 'Todos') lista = lista.filter((s) => s.categoria === categoria);

    if (termino) {
      lista = lista.filter(
        (s) =>
          s.nombre.toLowerCase().includes(termino) ||
          s.descripcion.toLowerCase().includes(termino) ||
          s.categoria.toLowerCase().includes(termino),
      );
    }

    if (this.orden() === 'precio-menor') lista.sort((a, b) => a.precioDesde - b.precioDesde);
    if (this.orden() === 'precio-mayor') lista.sort((a, b) => b.precioDesde - a.precioDesde);

    return lista;
  });

  readonly visibles = computed(() =>
    this.todos() ? this.filtrados() : this.filtrados().slice(0, 8),
  );

  seleccionar(categoria: string): void {
    this.categoria.set(categoria);
    this.todos.set(false);
  }

  buscar(valor: string): void {
    this.busqueda.set(valor);
    this.todos.set(false);
  }

  limpiar(): void {
    this.busqueda.set('');
    this.categoria.set('Todos');
  }
}
