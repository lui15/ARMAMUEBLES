import { Directive, computed, inject, input } from '@angular/core';

import { TELEFONO, WHATSAPP } from '../datos/catalogo';
import { AnaliticaService } from './analitica.service';

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
  /** Mensaje opcional que aparece ya escrito en WhatsApp. */
  readonly mensaje = input('');

  private readonly analitica = inject(AnaliticaService);

  readonly url = computed(() => enlaceWhatsApp(this.mensaje()));

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
