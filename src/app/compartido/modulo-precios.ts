import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { Servicio, formatearPrecio, servicioPorId, serviciosPorIds } from '../datos/catalogo';
import {
  FACTORES_PRECIO,
  GRUPOS_PRECIOS,
  NOTA_PRECIOS,
  PRECIOS_EXTRA,
} from '../datos/precios-extra';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { IconoMueble } from './icono-mueble';

/** Quita tildes y mayúsculas para buscar "comoda" y encontrar "Cómoda". */
const normalizar = (texto: string): string =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

const precio = (id: number): number => servicioPorId(id)?.precioDesde ?? 0;

/** Ejemplos reales calculados con los precios del catálogo. */
function crearEjemplos(): { titulo: string; partes: string; total: number }[] {
  const ejemplos = [
    {
      titulo: 'Dormitorio IKEA',
      piezas: [
        { nombre: 'cama', id: 9, n: 1 },
        { nombre: 'mesitas', id: 8, n: 2 },
        { nombre: 'cómoda', id: 10, n: 1 },
      ],
    },
    {
      titulo: 'Salón',
      piezas: [
        { nombre: 'mueble de TV', id: 11, n: 1 },
        { nombre: 'estanterías', id: 15, n: 2 },
      ],
    },
    {
      titulo: 'Rincón de trabajo',
      piezas: [
        { nombre: 'escritorio', id: 14, n: 1 },
        { nombre: 'estantería', id: 15, n: 1 },
        { nombre: 'cómoda', id: 10, n: 1 },
      ],
    },
  ];
  return ejemplos.map((e) => ({
    titulo: e.titulo,
    partes:
      e.piezas.map((p) => (p.n > 1 ? `${p.n} ${p.nombre}` : p.nombre)).join(' + ') +
      ' = ' +
      e.piezas.map((p) => (p.n > 1 ? `${p.n}×${precio(p.id)}` : precio(p.id))).join(' + '),
    total: e.piezas.reduce((t, p) => t + precio(p.id) * p.n, 0),
  }));
}

/** Tabla de precios de /precios: buscador, grupos, extras, factores y ejemplos. */
@Component({
  selector: 'app-modulo-precios',
  standalone: true,
  imports: [IconoMueble],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modulo-precios.html',
  styleUrl: './modulo-precios.css',
})
export class ModuloPrecios {
  readonly presupuesto = inject(PresupuestoService);
  readonly precio = formatearPrecio;
  readonly extras = PRECIOS_EXTRA;
  readonly factores = FACTORES_PRECIO;
  readonly nota = NOTA_PRECIOS;
  readonly ejemplos = crearEjemplos();

  readonly busqueda = signal('');

  private readonly grupos = GRUPOS_PRECIOS.map((g) => ({
    ...g,
    servicios: serviciosPorIds(g.ids),
  }));

  readonly gruposVisibles = computed(() => {
    const termino = normalizar(this.busqueda().trim());
    if (!termino) return this.grupos;
    const coincide = (s: Servicio, grupo: string) =>
      normalizar([s.nombre, s.descripcion, grupo, ...s.incluye].join(' ')).includes(termino);
    return this.grupos
      .map((g) => ({ ...g, servicios: g.servicios.filter((s) => coincide(s, g.nombre)) }))
      .filter((g) => g.servicios.length);
  });

  readonly resultados = computed(() =>
    this.gruposVisibles().reduce((t, g) => t + g.servicios.length, 0),
  );
}
