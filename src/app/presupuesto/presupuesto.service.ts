import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

import { Servicio } from '../datos/catalogo';
import { Prefill, seleccionDeServicio, tipoDeCategoria } from './tipos-mueble';

export interface PeticionPresupuesto {
  prefill: Prefill;
  /** Página desde la que se abrió el formulario. */
  origen: string;
}

const CLAVE_UTM = 'armamuebles-utm';
const PARAMETROS_UTM = ['utm_source', 'utm_medium', 'utm_campaign'] as const;

/** Abre el formulario de presupuesto desde cualquier página o componente. */
@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  private readonly doc = inject(DOCUMENT);

  readonly abierto = signal(false);
  /** Última petición; cada apertura crea un objeto nuevo y el formulario reacciona a él. */
  readonly peticion = signal<PeticionPresupuesto | null>(null);

  /** Compatibilidad: abre con un servicio del catálogo o una categoría ya elegidos. */
  abrir(servicio?: Servicio, categoria?: string): void {
    if (servicio) {
      this.abrirCon({ tipos: [seleccionDeServicio(servicio)] });
      return;
    }
    const tipo = tipoDeCategoria(categoria);
    this.abrirCon(tipo ? { tipos: [{ tipo }] } : {});
  }

  abrirCon(prefill: Prefill = {}): void {
    this.peticion.set({ prefill, origen: this.doc.location?.pathname ?? '' });
    this.abierto.set(true);
  }

  cerrar(): void {
    this.abierto.set(false);
  }

  /** Guarda los UTM de la URL de entrada para enviarlos con la solicitud. Solo en el navegador. */
  capturarUtm(): void {
    try {
      const url = new URL(this.doc.location.href);
      const utm: Record<string, string> = {};
      for (const clave of PARAMETROS_UTM) {
        const valor = url.searchParams.get(clave);
        if (valor) utm[clave] = valor.slice(0, 120);
      }
      if (Object.keys(utm).length) {
        this.doc.defaultView?.sessionStorage.setItem(CLAVE_UTM, JSON.stringify(utm));
      }
    } catch {
      // Sin almacenamiento: la solicitud se envía sin UTM.
    }
  }

  utm(): Record<string, string> {
    try {
      return JSON.parse(this.doc.defaultView?.sessionStorage.getItem(CLAVE_UTM) ?? '{}');
    } catch {
      return {};
    }
  }
}
