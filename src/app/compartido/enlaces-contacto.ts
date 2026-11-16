import { Directive, Injectable, computed, inject, input, signal } from '@angular/core';

import { TELEFONO, WHATSAPP } from '../datos/catalogo';
import { AnaliticaService } from './analitica.service';

/** Mensaje por defecto: el cliente solo tiene que rellenar los huecos. */
export const MENSAJE_WHATSAPP = 'Hola, quiero presupuesto para montar: ___ . Zona: ___ . (Si puedo, os mando una foto)';

/**
 * Mensaje ya escrito que usan todos los botones de WhatsApp de la página actual
 * (cabecera, pie, barra móvil...). Las páginas de servicio lo cambian para nombrar el servicio.
 */
@Injectable({ providedIn: 'root' })
export class MensajeWhatsapp {
  readonly texto = signal(MENSAJE_WHATSAPP);
}

/** Enlace de WhatsApp con el mensaje ya escrito, si se indica. */
export function enlaceWhatsApp(texto = ''): string {
  return `https://wa.me/${WHATSAPP}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
}

/**
 * Convierte un enlace en un acceso a WhatsApp: <a appWhatsapp="pie">.
 * El valor indica dónde está el botón y se envía a Analytics como "ubicacion".
 */
@Directive({
  selector: 'a[appWhatsapp]',
  standalone: true,
  host: {
    '[attr.href]': 'url()',
    target: '_blank',
    rel: 'noopener',
    '(click)': 'alPulsar()',
  },
})
export class WhatsappLink {
  readonly appWhatsapp = input.required<string>();
  /** Mensaje que aparece ya escrito en WhatsApp. Sin él, se usa el de la página actual. */
  readonly mensaje = input('');

  private readonly analitica = inject(AnaliticaService);
  private readonly mensajePagina = inject(MensajeWhatsapp).texto;

  readonly url = computed(() => enlaceWhatsApp(this.mensaje() || this.mensajePagina()));

  alPulsar(): void {
    this.analitica.evento('click_whatsapp', { ubicacion: this.appWhatsapp() });
  }
}

/** Convierte un enlace en una llamada: <a appTelefono="pie">. */
@Directive({
  selector: 'a[appTelefono]',
  standalone: true,
  host: {
    '[attr.href]': '"tel:" + telefono',
    '(click)': 'alPulsar()',
  },
})
export class TelefonoLink {
  readonly appTelefono = input.required<string>();

  readonly telefono = TELEFONO;

  private readonly analitica = inject(AnaliticaService);

  alPulsar(): void {
    this.analitica.evento('click_telefono', { ubicacion: this.appTelefono() });
  }
}
