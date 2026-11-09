import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { REDUCIR_MOVIMIENTO } from './compartido/animaciones';
import { AvisoCookies } from './compartido/aviso-cookies';
import { TelefonoLink, WhatsappLink } from './compartido/enlaces-contacto';
import { ConsentimientoService } from './compartido/consentimiento.service';
import { TELEFONO, WHATSAPP } from './datos/catalogo';
import { ScrollEstado } from './layout/scroll-estado.service';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';
import { PresupuestoService } from './presupuesto/presupuesto.service';
import { PresupuestoWizard } from './presupuesto/presupuesto-wizard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SiteHeader,
    SiteFooter,
    PresupuestoWizard,
    AvisoCookies,
    TelefonoLink,
    WhatsappLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly scroll = inject(ScrollEstado);
  readonly presupuesto = inject(PresupuestoService);
  readonly telefono = TELEFONO;
  readonly whatsapp = WHATSAPP;
  private readonly doc = inject(DOCUMENT);

  constructor() {
    const consentimiento = inject(ConsentimientoService);
    const presupuesto = inject(PresupuestoService);
    afterNextRender(() => {
      consentimiento.iniciar();
      presupuesto.capturarUtm();
    });
  }

  /**
   * Con base href="/", un enlace "#seccion" llevaría a la home desde cualquier otra URL.
   * Se intercepta para desplazarse dentro de la página actual.
   */
  @HostListener('click', ['$event'])
  alPulsarEnlace(evento: MouseEvent): void {
    if (evento.defaultPrevented || evento.button !== 0) return;
    if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;

    const enlace = (evento.target as Element | null)?.closest('a[href^="#"]');
    const destino = this.doc.getElementById(enlace?.getAttribute('href')?.slice(1) ?? '');
    if (!destino) return;

    evento.preventDefault();
    destino.scrollIntoView({ behavior: REDUCIR_MOVIMIENTO ? 'auto' : 'smooth', block: 'start' });

    // Mantiene el comportamiento de "Saltar al contenido": el foco va al destino.
    if (!destino.hasAttribute('tabindex')) destino.setAttribute('tabindex', '-1');
    destino.focus({ preventScroll: true });
  }
}
