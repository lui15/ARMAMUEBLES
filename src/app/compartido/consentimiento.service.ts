import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export const GA_ID = 'G-EXMK571DY8';

type Decision = 'aceptada' | 'rechazada';

/** Guarda la decisión del visitante; es técnico, así que no necesita consentimiento. */
const CLAVE = 'armamuebles-cookies';
/** Pasado este plazo se vuelve a preguntar (la AEPD recomienda un máximo de 24 meses). */
const VALIDEZ_MS = 730 * 24 * 60 * 60 * 1000;

/**
 * Google Analytics no se carga hasta que el visitante lo acepta: antes de eso no sale
 * ninguna petición a Google ni se crea ninguna cookie.
 */
@Injectable({ providedIn: 'root' })
export class ConsentimientoService {
  private readonly doc = inject(DOCUMENT);
  private origenFoco: HTMLElement | null = null;
  private analiticaCargada = false;

  readonly avisoVisible = signal(false);
  /** El visitante ha vuelto a abrir el aviso para cambiar su decisión. */
  readonly reabierto = signal(false);

  /** Se llama solo en el navegador, tras hidratar, para no alterar el HTML prerenderizado. */
  iniciar(): void {
    const decision = this.leerDecision();
    if (decision === 'aceptada') this.activarAnalitica();
    this.avisoVisible.set(decision === null);
  }

  aceptar(): void {
    this.guardarDecision('aceptada');
    this.activarAnalitica();
    this.cerrarAviso();
  }

  rechazar(): void {
    this.guardarDecision('rechazada');
    this.desactivarAnalitica();
    this.cerrarAviso();
  }

  reabrir(): void {
    const activo = this.doc.activeElement;
    this.origenFoco = activo instanceof HTMLElement ? activo : null;
    this.reabierto.set(true);
    this.avisoVisible.set(true);
  }

  private cerrarAviso(): void {
    this.avisoVisible.set(false);
    this.reabierto.set(false);
    this.origenFoco?.focus();
    this.origenFoco = null;
  }

  private activarAnalitica(): void {
    const ventana = this.doc.defaultView as (Window & Record<string, any>) | null;
    if (!ventana) return;

    ventana[`ga-disable-${GA_ID}`] = false;
    if (this.analiticaCargada) return;
    this.analiticaCargada = true;

    ventana['dataLayer'] = ventana['dataLayer'] || [];
    ventana['gtag'] = function () {
      // gtag.js exige recibir el objeto arguments, no un array.
      ventana['dataLayer'].push(arguments);
    };
    ventana['gtag']('js', new Date());
    ventana['gtag']('config', GA_ID);

    const script = this.doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    this.doc.head.appendChild(script);
  }

  private desactivarAnalitica(): void {
    const ventana = this.doc.defaultView as (Window & Record<string, any>) | null;
    if (ventana) ventana[`ga-disable-${GA_ID}`] = true;

    const host = this.doc.location.hostname;
    const dominios = ['', `;domain=${host}`, `;domain=.${host.replace(/^www\./, '')}`];
    const nombres = this.doc.cookie
      .split(';')
      .map((cookie) => cookie.split('=')[0].trim())
      .filter((nombre) => /^(_ga|_gid|_gat)/.test(nombre));

    for (const nombre of nombres) {
      for (const dominio of dominios) {
        this.doc.cookie = `${nombre}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT${dominio}`;
      }
    }
  }

  private leerDecision(): Decision | null {
    try {
      const guardado = JSON.parse(this.doc.defaultView?.localStorage.getItem(CLAVE) ?? 'null');
      const vigente = typeof guardado?.fecha === 'number' && Date.now() - guardado.fecha < VALIDEZ_MS;
      return vigente && (guardado.decision === 'aceptada' || guardado.decision === 'rechazada')
        ? guardado.decision
        : null;
    } catch {
      return null;
    }
  }

  private guardarDecision(decision: Decision): void {
    try {
      this.doc.defaultView?.localStorage.setItem(CLAVE, JSON.stringify({ decision, fecha: Date.now() }));
    } catch {
      // Con el almacenamiento bloqueado, la decisión vale solo hasta que se recargue la página.
    }
  }
}
