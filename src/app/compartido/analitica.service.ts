import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { ConsentimientoService } from './consentimiento.service';

type ParametrosEvento = Record<string, string | number>;

/**
 * Único punto de envío de eventos a Google Analytics. Si no hay consentimiento, no hace nada,
 * y en el servidor (SSR) no existe gtag, así que tampoco.
 * Nunca debe recibir datos personales: ni nombre, ni teléfono, ni correo, ni direcciones.
 *
 * Las visitas (page_view) no se envían desde aquí: las registra la medición mejorada de GA4
 * con cada navegación del router. Enviarlas también a mano duplicaría cada visita.
 */
@Injectable({ providedIn: 'root' })
export class AnaliticaService {
  private readonly consentimiento = inject(ConsentimientoService);
  private readonly doc = inject(DOCUMENT);

  evento(nombre: string, parametros: ParametrosEvento = {}): void {
    if (!this.consentimiento.analiticaActiva()) {
      return;
    }

    const ventana = this.doc.defaultView as (Window & { gtag?: (...args: unknown[]) => void }) | null;
    ventana?.gtag?.('event', nombre, parametros);
  }
}
