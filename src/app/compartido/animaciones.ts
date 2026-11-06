import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

export const REDUCIR_MOVIMIENTO =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

let observadorCompartido: IntersectionObserver | null = null;

function observador(): IntersectionObserver {
  if (!observadorCompartido) {
    observadorCompartido = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('in');
            observadorCompartido?.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
  }
  return observadorCompartido;
}

/** Hace aparecer el elemento al entrar en pantalla. Uso: appReveal="left" [appRevealDelay]="120" */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'reveal',
    '[attr.data-r]': 'appReveal() || "up"',
    '[style.--rd]': 'appRevealDelay() + "ms"',
  },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly appReveal = input<'up' | 'left' | 'right' | 'zoom' | ''>('');
  readonly appRevealDelay = input(0);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    const nodo = this.el.nativeElement;
    if (REDUCIR_MOVIMIENTO || typeof IntersectionObserver === 'undefined') {
      nodo.classList.add('in');
      return;
    }
    observador().observe(nodo);
  }

  ngOnDestroy(): void {
    observadorCompartido?.unobserve(this.el.nativeElement);
  }
}

/** Cuenta desde 0 hasta el número indicado cuando el elemento se ve. */
@Directive({ selector: '[appCount]', standalone: true })
export class CountDirective implements AfterViewInit {
  readonly appCount = input.required<number>();
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    const meta = this.appCount();
    const nodo = this.el.nativeElement;

    if (REDUCIR_MOVIMIENTO || typeof IntersectionObserver === 'undefined') {
      nodo.textContent = String(meta);
      return;
    }

    nodo.textContent = '0';
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        io.disconnect();
        const inicio = performance.now();
        const duracion = 1600;
        const paso = (ahora: number) => {
          const p = Math.min((ahora - inicio) / duracion, 1);
          nodo.textContent = String(Math.round(meta * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
      },
      { threshold: 0.6 },
    );
    io.observe(nodo);
  }
}
