import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { WhatsappLink } from './enlaces-contacto';
import type { Prefill } from '../presupuesto/tipos-mueble';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';

/* Bloques reutilizables (pasos, preguntas y llamada final). Sus estilos están en src/styles.css. */

@Component({
  selector: 'app-proceso-pasos',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section-alt" id="como-trabajamos">
      <div class="container">
        <div class="section-heading" appReveal>
          <div>
            <span class="kicker">Así de fácil</span>
            <h2>Cómo funciona, <em>en 3 pasos</em></h2>
          </div>
          <p>Pedir presupuesto es sin compromiso: no te obliga a contratar.</p>
        </div>

        <ol class="proceso-lista">
          @for (paso of pasos; track paso.titulo; let i = $index) {
            <li class="proceso-paso" appReveal [appRevealDelay]="i * 100">
              <span class="proceso-num" aria-hidden="true">{{ i + 1 }}</span>
              <h3>{{ paso.titulo }}</h3>
              <p>{{ paso.texto }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class ProcesoPasos {
  readonly pasos = [
    {
      titulo: 'Nos cuentas o nos mandas una foto',
      texto: 'Elige tus muebles en el formulario o mándanos una foto del mueble o del albarán por WhatsApp.',
    },
    {
      titulo: 'Te damos un precio cerrado',
      texto: 'Antes de ir, para que sepas exactamente lo que vas a pagar.',
    },
    {
      titulo: 'Montamos y nos llevamos los cartones',
      texto: 'Llevamos las herramientas, lo dejamos nivelado y anclado a la pared cuando el mueble lo requiere, y al terminar nos llevamos cartones y plásticos.',
    },
  ];
}

@Component({
  selector: 'app-faq-lista',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="preguntas">
      <div class="container faq-grid">
        <div>
          <span class="kicker">Preguntas frecuentes</span>
          <h2>{{ titulo() }}</h2>
          <p>Si tu duda no aparece, cuéntanosla al pedir presupuesto.</p>
        </div>
        <div>
          @for (faq of faqs(); track faq.pregunta) {
            <details class="faq-item">
              <summary>{{ faq.pregunta }}</summary>
              <p>{{ faq.respuesta }}</p>
            </details>
          }
        </div>
      </div>
    </section>
  `,
})
export class FaqLista {
  readonly titulo = input.required<string>();
  readonly faqs = input.required<readonly { pregunta: string; respuesta: string }[]>();
}

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [RevealDirective, WhatsappLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-tight" id="presupuesto">
      <div class="container">
        <div class="cta-final" appReveal="zoom">
          <span class="kicker">Empecemos con tu proyecto</span>
          <h2>¿Tienes muebles <em>por montar?</em></h2>
          <p>
            Dinos qué quieres montar y dónde. En menos de un minuto nos envías tu solicitud, sin
            compromiso.
          </p>
          <div class="cta-acciones">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              (click)="presupuesto.abrirCon(prefill())"
            >
              Empezar mi presupuesto
              <span class="arrow">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </span>
            </button>
            <a class="btn btn-outline-light btn-lg" appWhatsapp="llamada-final">
              Escribir por WhatsApp
            </a>
          </div>
          <small>Presupuesto orientativo y atención personalizada.</small>
        </div>
      </div>
    </section>
  `,
})
export class CtaFinal {
  readonly prefill = input<Prefill>({});
  readonly presupuesto = inject(PresupuestoService);
}
