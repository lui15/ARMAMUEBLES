import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import type { SupabaseClient } from '@supabase/supabase-js';

import {
  CATEGORIAS,
  ID_SOLO_ELECTRO,
  SERVICIOS,
  Servicio,
  WHATSAPP,
  ZONAS,
  formatearPrecio,
} from '../datos/catalogo';
import { PeticionPresupuesto, PresupuestoService } from './presupuesto.service';

/* =====================================================
   CONFIGURACIÓN · CENTRAL DE SOLICITUDES (Supabase)
   Solo clave pública (publishable). Nunca la service_role.
   La seguridad la aplican las políticas RLS de public.requests.
===================================================== */

const SUPABASE_URL = 'https://obdetimymgchgqnlxbew.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vGYxgkMKDNJr1G0aq7vBMQ_lLUQfJqn';

/** Identificador de esta web en la columna `source` de la Central. */
const FUENTE_CENTRAL = 'armamuebles';

/** Tiempo máximo de espera al guardar la solicitud. */
const TIEMPO_MAX_ENVIO_MS = 15000;

let clienteSupabase: SupabaseClient | null = null;

/** El cliente se carga solo al enviar una solicitud: no pesa en la carga inicial de la web. */
async function obtenerSupabase(): Promise<SupabaseClient> {
  if (!clienteSupabase) {
    const { createClient } = await import('@supabase/supabase-js');
    // Web pública sin inicio de sesión: no hace falta guardar ni renovar sesiones.
    clienteSupabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    });
  }
  return clienteSupabase;
}

interface SolicitudCentral {
  source: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  description: string | null;
  details: Record<string, unknown>;
}

/** UUID para identificar cada envío; permite reintentar sin duplicar registros. */
function nuevoId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto;

  if (c?.randomUUID) {
    return c.randomUUID();
  }

  const bytes = new Uint8Array(16);

  if (c?.getRandomValues) {
    c.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/* =====================================================
   CONFIGURACIÓN · AVISO POR EMAIL (EmailJS) · OPCIONAL
   emailjs.com → Email Services, Email Templates, Account
   Mientras tenga los valores "TU_...", no se envía el aviso.
===================================================== */

const EMAILJS = {
  serviceId: 'TU_SERVICE_ID',
  templateId: 'TU_TEMPLATE_ID',
  publicKey: 'TU_PUBLIC_KEY',
} as const;

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const EMAIL_CONFIGURADO = !Object.values(EMAILJS).some((valor) => valor.startsWith('TU_'));

/* =====================================================
   FORMULARIO POR PASOS
===================================================== */

@Component({
  selector: 'app-presupuesto-wizard',
  standalone: true,
  templateUrl: './presupuesto-wizard.html',
  styleUrl: './presupuesto-wizard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresupuestoWizard {
  readonly presupuesto = inject(PresupuestoService);
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  readonly categorias = CATEGORIAS;
  readonly servicios = SERVICIOS;
  readonly zonas = ZONAS;
  readonly formatearPrecio = formatearPrecio;
  readonly pasos = [
    { num: 1, nombre: 'Mueble' },
    { num: 2, nombre: 'Detalles' },
    { num: 3, nombre: 'Zona' },
    { num: 4, nombre: 'Contacto' },
  ];

  /* ---------- Asistente de presupuesto ---------- */

  readonly enviado = signal(false);
  readonly enviando = signal(false);
  readonly errorEnvio = signal(false);
  readonly paso = signal(1);

  readonly categoriaForm = signal('Todos');
  readonly servicioSeleccionado = signal<Servicio | null>(null);
  readonly cantidad = signal(1);
  readonly descripcion = signal('');
  readonly zonaSeleccionada = signal<string[]>([]);
  readonly busquedaZona = signal('');
  readonly nombre = signal('');
  readonly telefono = signal('');
  readonly email = signal('');
  readonly honeypot = signal('');

  private ultimoFoco: HTMLElement | null = null;

  /**
   * Identificador del último envío. Si el guardado se corta por la red y el cliente
   * reintenta con los mismos datos, se reutiliza el mismo id y no se duplica el registro.
   */
  private ultimoEnvio: { id: string; firma: string } | null = null;

  readonly serviciosForm = computed(() => {
    const categoria = this.categoriaForm();
    return categoria === 'Todos'
      ? SERVICIOS
      : SERVICIOS.filter((s) => s.categoria === categoria);
  });

  readonly zonasFiltradas = computed(() => {
    const termino = this.busquedaZona().toLowerCase().trim();
    return termino ? ZONAS.filter((z) => z.toLowerCase().includes(termino)) : ZONAS;
  });

  readonly incluyeElectro = computed(() => !!this.servicioSeleccionado()?.electro);

  readonly unidad = computed<[string, string]>(() => {
    const s = this.servicioSeleccionado();
    if (s?.id === ID_SOLO_ELECTRO) return ['electrodoméstico', 'electrodomésticos'];
    if (s?.electro) return ['cocina', 'cocinas'];
    return ['mueble', 'muebles'];
  });

  readonly precioEstimadoMinimo = computed(() => {
    const s = this.servicioSeleccionado();
    return (s ? s.precioDesde : 0) * this.cantidad();
  });

  readonly telefonoValido = computed(() => {
    const texto = this.telefono().trim();
    const digitos = texto.replace(/\D/g, '');
    return /^[+\d\s().-]+$/.test(texto) && digitos.length >= 9 && digitos.length <= 15;
  });

  readonly emailValido = computed(() => {
    const correo = this.email().trim();
    return !correo || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo);
  });

  readonly nombreValido = computed(() => this.nombre().trim().length >= 2);

  readonly paso1Valido = computed(() => !!this.servicioSeleccionado());
  readonly paso2Valido = computed(() => this.cantidad() >= 1);
  readonly paso3Valido = computed(() => this.zonaSeleccionada().length > 0);
  readonly paso4Valido = computed(
    () => this.nombreValido() && this.telefonoValido() && this.emailValido(),
  );

  readonly todoValido = computed(
    () => this.paso1Valido() && this.paso2Valido() && this.paso3Valido() && this.paso4Valido(),
  );

  readonly pasoActualValido = computed(() => {
    switch (this.paso()) {
      case 1:
        return this.paso1Valido();
      case 2:
        return this.paso2Valido();
      case 3:
        return this.paso3Valido();
      default:
        return this.paso4Valido();
    }
  });

  readonly pista = computed(() => {
    switch (this.paso()) {
      case 1:
        return this.paso1Valido() ? '' : 'Elige un mueble para continuar.';
      case 3:
        return this.paso3Valido() ? '' : 'Selecciona al menos una zona.';
      case 4:
        if (!this.nombreValido()) return 'Escribe tu nombre.';
        if (!this.telefonoValido()) return 'Escribe un teléfono válido.';
        if (!this.emailValido()) return 'Revisa tu correo electrónico.';
        return '';
      default:
        return '';
    }
  });

  readonly progreso = computed(() => (this.enviado() ? 1 : this.paso() / this.pasos.length));

  cerrarFormulario(): void {
    const habiaTerminado = this.enviado();
    this.presupuesto.cerrar();
    if (habiaTerminado) this.reiniciarFormulario();
    setTimeout(() => this.ultimoFoco?.focus?.(), 0);
  }

  alPulsarFondo(evento: MouseEvent): void {
    if (evento.target === evento.currentTarget) this.cerrarFormulario();
  }

  reiniciarFormulario(): void {
    this.enviado.set(false);
    this.enviando.set(false);
    this.errorEnvio.set(false);
    this.paso.set(1);
    this.servicioSeleccionado.set(null);
    this.categoriaForm.set('Todos');
    this.cantidad.set(1);
    this.descripcion.set('');
    this.zonaSeleccionada.set([]);
    this.busquedaZona.set('');
    this.nombre.set('');
    this.telefono.set('');
    this.email.set('');
    this.honeypot.set('');
    this.ultimoEnvio = null;
  }

  nuevaSolicitud(): void {
    this.reiniciarFormulario();
    setTimeout(() => this.dialog()?.nativeElement.focus(), 0);
  }

  siguiente(): void {
    if (this.pasoActualValido() && this.paso() < this.pasos.length) {
      this.paso.update((p) => p + 1);
    }
  }

  atras(): void {
    if (this.paso() > 1) this.paso.update((p) => p - 1);
  }

  irAPaso(num: number): void {
    if (num < this.paso()) this.paso.set(num);
  }

  elegirServicio(servicio: Servicio): void {
    this.servicioSeleccionado.set(servicio);
  }

  cambiarCantidad(valor: number | string): void {
    const numero = Math.round(Number(valor));
    this.cantidad.set(Math.max(1, Math.min(30, Number.isFinite(numero) ? numero : 1)));
  }

  alternarZona(zona: string): void {
    this.zonaSeleccionada.update((zonas) =>
      zonas.includes(zona) ? zonas.filter((z) => z !== zona) : [...zonas, zona],
    );
  }

  @HostListener('document:keydown', ['$event'])
  alPulsarTecla(evento: KeyboardEvent): void {
    if (!this.presupuesto.abierto()) return;

    if (evento.key === 'Escape') {
      this.cerrarFormulario();
      return;
    }

    if (evento.key !== 'Tab') return;

    const contenedor = this.dialog()?.nativeElement;
    if (!contenedor) return;

    const enfocables = Array.from(
      contenedor.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input, textarea, a[href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null);

    if (enfocables.length === 0) return;

    const primero = enfocables[0];
    const ultimo = enfocables[enfocables.length - 1];
    const activo = this.doc.activeElement;

    if (evento.shiftKey && (activo === primero || activo === contenedor)) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && activo === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
  }

  /* ---------- Envío a la Central de Solicitudes (Supabase) ---------- */

  /** Construye el registro tal y como lo espera la tabla public.requests. */
  private crearSolicitud(servicio: Servicio): SolicitudCentral {
    return {
      source: FUENTE_CENTRAL,
      name: this.nombre().trim(),
      phone: this.telefono().trim(),
      email: this.email().trim() || null,
      service: servicio.nombre,
      // Los detalles escritos por el cliente se guardan aquí.
      description: this.descripcion().trim() || null,
      details: {
        tipo_mueble: servicio.nombre,
        categoria: servicio.categoria,
        cantidad: this.cantidad(),
        zonas: [...this.zonaSeleccionada()],
        precio_orientativo_desde: formatearPrecio(this.precioEstimadoMinimo()),
        incluye_electrodomesticos: !!servicio.electro,
      },
    };
  }

  /**
   * Guarda la solicitud en Supabase.
   * - No usa .select(): los visitantes pueden insertar pero no leer (RLS).
   * - Si un reintento llega con un id ya guardado (error 23505), la solicitud
   *   ya existe y se considera guardada, sin duplicarla.
   */
  private async guardarEnCentral(solicitud: SolicitudCentral): Promise<void> {
    const firma = JSON.stringify(solicitud);

    if (!this.ultimoEnvio || this.ultimoEnvio.firma !== firma) {
      this.ultimoEnvio = { id: nuevoId(), firma };
    }

    const registro = { id: this.ultimoEnvio.id, ...solicitud };

    const limite = new Promise<never>((_, rechazar) => {
      setTimeout(() => rechazar(new Error('TIMEOUT_ENVIO')), TIEMPO_MAX_ENVIO_MS);
    });

    const supabase = await obtenerSupabase();
    const { error } = await Promise.race([supabase.from('requests').insert(registro), limite]);

    if (error && error.code !== '23505') {
      throw error;
    }
  }

  /* ---------- Aviso por email (EmailJS) · opcional ---------- */

  private datosEmail(servicio: Servicio): Record<string, string> {
    return {
      nombre: this.nombre().trim(),
      telefono: this.telefono().trim(),
      correo: this.email().trim() || 'No indicado',
      mueble: servicio.nombre,
      categoria: servicio.categoria,
      cantidad: String(this.cantidad()),
      zonas: this.zonaSeleccionada().join(', '),
      precio: formatearPrecio(this.precioEstimadoMinimo()),
      electro: servicio.electro ? 'Sí, incluye colocación de electrodomésticos' : 'No aplica',
      detalles: this.descripcion().trim() || 'Sin detalles adicionales',
      fecha: new Date().toLocaleString('es-ES'),
    };
  }

  /** Aviso adicional: si falla, la solicitud ya está guardada y el cliente no lo nota. */
  private async avisarPorEmail(servicio: Servicio): Promise<void> {
    if (!EMAIL_CONFIGURADO) return;

    try {
      const respuesta = await fetch(EMAILJS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: this.datosEmail(servicio),
        }),
      });

      if (!respuesta.ok) throw new Error(await respuesta.text());
    } catch (error) {
      console.warn('La solicitud se guardó, pero no se pudo enviar el aviso por email', error);
    }
  }

  /* ---------- Envío del formulario ---------- */

  async enviarSolicitud(): Promise<void> {
    const servicio = this.servicioSeleccionado();

    // Evita envíos dobles mientras se está procesando.
    if (!this.todoValido() || !servicio || this.enviando()) return;

    // Campo trampa: si lo rellena un robot, se simula el éxito sin enviar nada.
    if (this.honeypot().trim()) {
      this.enviado.set(true);
      return;
    }

    this.errorEnvio.set(false);
    this.enviando.set(true);

    try {
      await this.guardarEnCentral(this.crearSolicitud(servicio));

      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      this.enviado.set(true);

      void this.avisarPorEmail(servicio);
    } catch (error) {
      console.error('No se pudo guardar la solicitud en la Central', error);
      this.errorEnvio.set(true);
    } finally {
      this.enviando.set(false);
    }
  }

  /** Alternativa: abre WhatsApp con la solicitud ya escrita (se ofrece si falla el envío). */
  enviarWhatsApp(): void {
    const servicio = this.servicioSeleccionado();
    if (!this.todoValido() || !servicio) return;

    const lineas = [
      '¡Hola! Quiero solicitar un presupuesto para un montaje de muebles.',
      '',
      `Nombre: ${this.nombre().trim()}`,
      `Teléfono: ${this.telefono().trim()}`,
      `Correo: ${this.email().trim() || 'No indicado'}`,
      `Mueble: ${servicio.nombre}`,
      `Cantidad: ${this.cantidad()}`,
      `Zonas: ${this.zonaSeleccionada().join(', ')}`,
      `Precio orientativo desde: ${formatearPrecio(this.precioEstimadoMinimo())}`,
    ];

    if (servicio.electro) lineas.push('Incluye colocación de electrodomésticos.');
    lineas.push(`Detalles: ${this.descripcion().trim() || 'Sin detalles adicionales'}`);

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  }

  constructor() {
    // Atiende cada petición de abrir el formulario, venga de donde venga.
    effect(() => {
      const peticion = this.presupuesto.peticion();
      if (peticion) untracked(() => this.aplicarPeticion(peticion));
    });

    // Bloquea el scroll de la página mientras el formulario está al frente (solo en el navegador).
    effect(() => {
      const abierto = this.presupuesto.abierto();
      if (this.esNavegador) this.doc.body.style.overflow = abierto ? 'hidden' : '';
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.esNavegador) this.doc.body.style.overflow = '';
    });
  }

  private aplicarPeticion({ servicio, categoria }: PeticionPresupuesto): void {
    this.ultimoFoco = this.doc.activeElement as HTMLElement | null;
    this.enviado.set(false);
    this.errorEnvio.set(false);

    if (servicio) {
      this.servicioSeleccionado.set(servicio);
      this.categoriaForm.set('Todos');
      this.paso.set(2);
    } else if (categoria) {
      this.categoriaForm.set(categoria);
      this.paso.set(1);
    }

    setTimeout(() => this.dialog()?.nativeElement.focus(), 60);
  }
}
