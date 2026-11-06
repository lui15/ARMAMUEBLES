import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

/** Estado de scroll compartido por la cabecera y los botones flotantes. */
@Injectable({ providedIn: 'root' })
export class ScrollEstado {
  readonly compacta = signal(false);
  readonly avanzado = signal(false);
  readonly progreso = signal(0);

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

    let esperando = false;
    const medir = () => {
      esperando = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.progreso.set(max > 0 ? Math.min(y / max, 1) : 0);
      // Histéresis: evita que la cabecera parpadee al subir y bajar cerca del borde.
      this.compacta.set(this.compacta() ? y > 8 : y > 40);
      this.avanzado.set(y > 560);
    };

    window.addEventListener(
      'scroll',
      () => {
        if (esperando) return;
        esperando = true;
        requestAnimationFrame(medir);
      },
      { passive: true },
    );
    medir();
  }
}
