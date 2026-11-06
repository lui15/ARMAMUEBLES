import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { WHATSAPP } from '../datos/catalogo';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';

/* Bloques reutilizables. Sus estilos están en src/styles.css. */

@Component({
  selector: 'app-proceso-pasos',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section-dark" id="como-trabajamos">
      <div class="container">
        <div class="section-heading" appReveal>
          <div>
            <span class="kicker">Así de fácil</span>
            <h2>Tu montaje en <em>cuatro pasos</em></h2>
          </div>
          <p>Nos cuentas qué necesitas y nosotros nos encargamos del resto.</p>
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
      titulo: 'Cuéntanos qué necesitas',
      texto: 'Elige el mueble, la cantidad y la zona en un formulario de cuatro pasos.',
    },
    {
      titulo: 'Recibe tu presupuesto',
      texto: 'Revisamos los detalles y te damos una propuesta personalizada por teléfono o WhatsApp.',
    },
    {
      titulo: 'Vamos a tu domicilio',
      texto: 'Coordinamos contigo el día y la hora del montaje.',
    },
    {
      titulo: 'Disfruta de tu mueble',
      texto: 'Revisamos el resultado y dejamos todo correctamente montado.',
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
  imports: [RevealDirective],
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
              (click)="presupuesto.abrir(undefined, categoria())"
            >
              Empezar mi presupuesto
              <span class="arrow">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </span>
            </button>
            <a
              class="btn btn-outline-light btn-lg"
              [href]="'https://wa.me/' + whatsapp"
              target="_blank"
              rel="noopener"
            >
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
  readonly categoria = input<string | undefined>();
  readonly presupuesto = inject(PresupuestoService);
  readonly whatsapp = WHATSAPP;
}
