import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';

import { REDUCIR_MOVIMIENTO } from '../compartido/animaciones';
import { formatearPrecio, SERVICIOS } from '../datos/catalogo';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

/** Fases del montaje de la cocina animada. */
const ETAPAS = [
  { nombre: 'Medidas', texto: 'Tomamos medidas en tu casa' },
  { nombre: 'Bajos', texto: 'Montando los muebles bajos' },
  { nombre: 'Encimera', texto: 'Colocando encimera y frigorífico' },
  { nombre: 'Altos', texto: 'Fijando los muebles altos' },
  { nombre: 'Campana', texto: 'Instalando campana y placa' },
  { nombre: 'Puertas', texto: 'Ajustando puertas y tiradores' },
  { nombre: 'Electro', texto: 'Colocando los electrodomésticos' },
  { nombre: '¡Lista!', texto: '¡Cocina lista para usar!' },
] as const;

/** Posición del taladro en cada fase: [x, y, giro horizontal, rotación]. */
const POSES: readonly (readonly [number, number, 1 | -1, number])[] = [
  [800, 250, 1, 10],
  [244, 352, 1, -4],
  [420, 276, 1, 4],
  [290, 120, 1, -4],
  [474, 108, 1, 4],
  [246, 352, -1, 3],
  [486, 345, 1, -4],
  [800, 250, 1, 10],
];

const MS_ETAPA = 2600;
const MS_FINAL = 5200;

@Component({
  selector: 'app-kitchen-scene',
  standalone: true,
  templateUrl: './kitchen-scene.html',
  styleUrl: './kitchen-scene.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenScene {
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  readonly presupuesto = inject(PresupuestoService);

  readonly etapas = ETAPAS;
  readonly etapa = signal(0);
  readonly reproduciendo = signal(true);
  readonly msEtapa = computed(() => (this.etapa() === ETAPAS.length - 1 ? MS_FINAL : MS_ETAPA));
  readonly progreso = computed(() => (this.etapa() + 1) / ETAPAS.length);
  readonly lista = computed(() => this.etapa() === ETAPAS.length - 1);

  readonly precioCocina = formatearPrecio(
    Math.min(...SERVICIOS.filter((s) => s.electro).map((s) => s.precioDesde)),
  );

  readonly taladro = computed(() => {
    const e = this.etapa();
    const [x, y, giro, rotacion] = POSES[e];
    return {
      t: `translate(${x}px, ${y}px) rotate(${rotacion}deg) scale(${giro}, 1)`,
      o: e === 0 || e === ETAPAS.length - 1 ? 0 : 1,
    };
  });

  /** La cámara se acerca poco a poco y se abre al terminar para enseñar la cocina entera. */
  readonly camara = computed(() => {
    const e = this.etapa();
    return `scale(${this.lista() ? 1.015 : 1 + e * 0.009})`;
  });

  private temporizador?: ReturnType<typeof setTimeout>;
  private enPantalla = true;

  constructor() {
    afterNextRender(() => {
      if (REDUCIR_MOVIMIENTO) {
        this.etapa.set(ETAPAS.length - 1);
        this.reproduciendo.set(false);
        return;
      }
      this.vigilarVisibilidad();
      this.seguirPuntero();
      this.programar();
    });

    this.destroyRef.onDestroy(() => clearTimeout(this.temporizador));
  }

  /** No consume recursos mientras la escena está fuera de pantalla. */
  private vigilarVisibilidad(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => (this.enPantalla = e.isIntersecting), {
      threshold: 0.1,
    });
    io.observe(this.host);
    this.destroyRef.onDestroy(() => io.disconnect());
  }

  /** Profundidad: las capas de la escena y la tarjeta siguen ligeramente al cursor. */
  private seguirPuntero(): void {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let pendiente = 0;
    const mover = (e: PointerEvent) => {
      if (pendiente) return;
      pendiente = requestAnimationFrame(() => {
        pendiente = 0;
        const caja = this.host.getBoundingClientRect();
        const x = (e.clientX - caja.left) / caja.width - 0.5;
        const y = (e.clientY - caja.top) / caja.height - 0.5;
        this.host.style.setProperty('--px', x.toFixed(3));
        this.host.style.setProperty('--py', y.toFixed(3));
      });
    };
    const salir = () => {
      this.host.style.setProperty('--px', '0');
      this.host.style.setProperty('--py', '0');
    };

    this.host.addEventListener('pointermove', mover, { passive: true });
    this.host.addEventListener('pointerleave', salir, { passive: true });
    this.destroyRef.onDestroy(() => {
      this.host.removeEventListener('pointermove', mover);
      this.host.removeEventListener('pointerleave', salir);
      cancelAnimationFrame(pendiente);
    });
  }

  private programar(): void {
    clearTimeout(this.temporizador);
    if (!this.esNavegador || REDUCIR_MOVIMIENTO || !this.reproduciendo()) return;

    this.temporizador = setTimeout(() => {
      if (this.enPantalla && !document.hidden) {
        this.etapa.update((e) => (e + 1) % ETAPAS.length);
      }
      this.programar();
    }, this.msEtapa());
  }

  irAEtapa(indice: number): void {
    this.etapa.set(indice);
    this.programar();
  }

  alternarReproduccion(): void {
    this.reproduciendo.update((v) => !v);
    this.programar();
  }
}
