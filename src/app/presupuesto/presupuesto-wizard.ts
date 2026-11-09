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

import { AnaliticaService } from '../compartido/analitica.service';
import { WhatsappLink } from '../compartido/enlaces-contacto';
import { IconoMueble } from '../compartido/icono-mueble';
import { ZONAS, formatearPrecio } from '../datos/catalogo';
import { NOTA_PRECIOS, SERVICIO_MINIMO } from '../datos/precios-extra';
import { PeticionPresupuesto, PresupuestoService } from './presupuesto.service';
import {
  ElementoSeleccion,
  TIPOS,
  TipoId,
  TipoMueble,
  estimar,
  precioDesdeTipo,
  tipoPorId,
} from './tipos-mueble';

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

/** Progreso guardado en la pestaña: si se recarga la página, el formulario sigue donde estaba. */
const CLAVE_PROGRESO = 'armamuebles-presupuesto';

type Campo = 'zona' | 'fecha' | 'nombre' | 'telefono' | 'email' | 'privacidad';

const CAMPOS_PASO: Record<number, Campo[]> = {
  1: [],
  2: [],
  3: ['zona', 'fecha'],
  4: ['nombre', 'telefono', 'email', 'privacidad'],
};

const TIENDAS = ['IKEA', 'Leroy Merlin', 'Conforama', 'Otra'];
const ACCESOS = ['Bajo o casa', 'Con ascensor', 'Sin ascensor'];
const CUANDO = ['Lo antes posible', 'Esta semana', 'Tengo fecha'];
const EN_CASA = ['Sí', 'Llegan antes de esa fecha'];

/** Teléfono español de 9 cifras, o internacional con prefijo. Devuelve el número listo o null. */
export function normalizarTelefono(texto: string): string | null {
  const limpio = texto.trim();
  if (!limpio || !/^[+\d\s().-]*$/.test(limpio)) return null;
  let cifras = limpio.replace(/\D/g, '');
  const internacional = limpio.startsWith('+') || cifras.startsWith('00');
  if (cifras.startsWith('00')) cifras = cifras.slice(2);

  if (internacional && !cifras.startsWith('34')) {
    return cifras.length >= 8 && cifras.length <= 15 ? `+${cifras}` : null;
  }
  if (cifras.startsWith('34') && cifras.length === 11) cifras = cifras.slice(2);
  if (!/^[6789]\d{8}$/.test(cifras)) return null;
  return `+34 ${cifras.slice(0, 3)} ${cifras.slice(3, 5)} ${cifras.slice(5, 7)} ${cifras.slice(7)}`;
}

@Component({
  selector: 'app-presupuesto-wizard',
  standalone: true,
  imports: [IconoMueble, WhatsappLink],
  templateUrl: './presupuesto-wizard.html',
  styleUrl: './presupuesto-wizard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresupuestoWizard {
  readonly presupuesto = inject(PresupuestoService);
  private readonly analitica = inject(AnaliticaService);
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  readonly titulo = viewChild<ElementRef<HTMLElement>>('titulo');

  readonly tipos = TIPOS;
  readonly tiendas = TIENDAS;
  readonly accesos = ACCESOS;
  readonly opcionesCuando = CUANDO;
  readonly opcionesEnCasa = EN_CASA;
  readonly zonasSugeridas = [
    ...ZONAS.filter((z) => z !== 'Otra zona de Madrid'),
    'Barajas',
    'San Blas-Canillejas',
  ];
  readonly formatearPrecio = formatearPrecio;
  readonly notaPrecios = NOTA_PRECIOS;
  readonly servicioMinimo = SERVICIO_MINIMO;
  readonly precioDesdeTipo = precioDesdeTipo;
  readonly pasos = [
    '¿Qué hay que montar?',
    'Detalles rápidos',
    '¿Dónde y cuándo?',
    '¿A quién enviamos el precio?',
  ];
  private readonly nombresEvento = ['muebles', 'detalles', 'donde_cuando', 'contacto'];
  readonly hoy = new Date().toISOString().slice(0, 10);

  /* ---------- Estado ---------- */

  readonly paso = signal(1);
  readonly enviado = signal(false);
  readonly enviando = signal(false);
  readonly errorEnvio = signal(false);

  readonly seleccion = signal<ElementoSeleccion[]>([]);
  readonly alturaArmario = signal<string | null>(null);
  readonly tienda = signal<string | null>(null);
  readonly desmontar = signal<string | null>(null);
  readonly fijarPared = signal<string | null>(null);

  readonly zona = signal('');
  readonly acceso = signal<string | null>(null);
  readonly cuando = signal<string | null>(null);
  readonly fecha = signal('');
  readonly mueblesEnCasa = signal<string | null>(null);

  readonly nombre = signal('');
  readonly telefono = signal('');
  readonly email = signal('');
  readonly notas = signal('');
  readonly privacidad = signal(false);
  readonly honeypot = signal('');

  /** Campos que el visitante ya ha dejado: sus errores se muestran. */
  readonly tocados = signal<Campo[]>([]);
  /** Pasos en los que se ha pulsado continuar: se muestran todos sus errores. */
  readonly intentado = signal<number[]>([]);

  private origen = '';
  private ultimoFoco: HTMLElement | null = null;
  private ultimoEnvio: { id: string; firma: string } | null = null;

  /* ---------- Derivados ---------- */

  readonly estimacion = computed(() => estimar(this.seleccion()));
  readonly hayArmario = computed(() => this.seleccion().some((e) => e.tipo === 'armario'));
  readonly hayCocina = computed(() => this.seleccion().some((e) => e.tipo === 'cocina'));
  readonly incluyeElectro = computed(() =>
    this.seleccion().some((e) => e.tipo === 'cocina' || e.tipo === 'electro'),
  );
  readonly telefonoFinal = computed(() => normalizarTelefono(this.telefono()));
  readonly totalPiezas = computed(() => this.seleccion().reduce((t, e) => t + e.cantidad, 0));

  readonly errores = computed<Partial<Record<Campo, string>>>(() => {
    const e: Partial<Record<Campo, string>> = {};
    if (this.zona().trim().length < 2) e.zona = 'Escribe tu municipio o barrio.';
    if (this.cuando() === 'Tengo fecha') {
      if (!this.fecha()) e.fecha = 'Elige la fecha que te viene bien.';
      else if (this.fecha() < this.hoy) e.fecha = 'Esa fecha ya ha pasado.';
    }
    if (this.nombre().trim().length < 2) e.nombre = 'Escribe tu nombre.';
    if (!this.telefonoFinal()) e.telefono = 'Revisa el teléfono: 9 cifras, por ejemplo 612 345 678.';
    const correo = this.email().trim();
    if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo)) {
      e.email = 'Revisa el correo: parece que falta algo.';
    }
    if (!this.privacidad()) e.privacidad = 'Marca la casilla para que podamos enviarte el precio.';
    return e;
  });

  readonly erroresPaso = computed(() => CAMPOS_PASO[this.paso()].filter((c) => this.errores()[c]));

  readonly puedeSeguir = computed(() => this.paso() !== 1 || this.seleccion().length > 0);

  readonly mensajeWhatsapp = computed(() => this.resumen('whatsapp'));

  readonly mensajeFoto = computed(
    () =>
      `Hola, soy ${this.nombre().trim()}. Acabo de pedir presupuesto (${this.listaMuebles()}). ` +
      'Os envío una foto del mueble o del albarán.',
  );

  error(campo: Campo): string | null {
    const mensaje = this.errores()[campo];
    if (!mensaje) return null;
    const visible =
      this.tocados().includes(campo) ||
      this.intentado().some((p) => CAMPOS_PASO[p].includes(campo));
    return visible ? mensaje : null;
  }

  /* ---------- Paso 1: muebles ---------- */

  elemento(tipo: TipoId): ElementoSeleccion | undefined {
    return this.seleccion().find((e) => e.tipo === tipo);
  }

  alternarTipo(tipo: TipoMueble): void {
    this.seleccion.update((s) =>
      s.some((e) => e.tipo === tipo.id)
        ? s.filter((e) => e.tipo !== tipo.id)
        : [...s, { tipo: tipo.id, cantidad: 1, subtipo: null }],
    );
  }

  cambiarCantidad(tipo: TipoId, delta: number): void {
    this.seleccion.update((s) =>
      s
        .map((e) => (e.tipo === tipo ? { ...e, cantidad: Math.min(30, e.cantidad + delta) } : e))
        .filter((e) => e.cantidad > 0),
    );
  }

  /* ---------- Paso 2: detalles ---------- */

  subtipoDe(tipo: TipoId): string | null {
    return this.elemento(tipo)?.subtipo ?? null;
  }

  elegirSubtipo(tipo: TipoId, subtipo: string): void {
    this.seleccion.update((s) =>
      s.map((e) =>
        e.tipo === tipo ? { ...e, subtipo: e.subtipo === subtipo ? null : subtipo } : e,
      ),
    );
  }

  /** Botón de opción que se puede desmarcar pulsando otra vez. */
  alternar(senal: { (): string | null; set(v: string | null): void }, valor: string): void {
    senal.set(senal() === valor ? null : valor);
  }

  /* ---------- Navegación ---------- */

  siguiente(): void {
    if (!this.puedeSeguir() || this.enviando()) return;
    const conError = this.erroresPaso();
    if (conError.length) {
      this.intentado.update((p) => [...new Set([...p, this.paso()])]);
      this.analitica.evento('form_error', { campo: conError[0] });
      setTimeout(() => this.enfocarCampo(conError[0]), 0);
      return;
    }
    if (this.paso() < this.pasos.length) {
      this.paso.update((p) => p + 1);
      this.alCambiarPaso();
    } else {
      void this.enviarSolicitud();
    }
  }

  atras(): void {
    if (this.paso() > 1) {
      this.paso.update((p) => p - 1);
      this.alCambiarPaso(false);
    }
  }

  private alCambiarPaso(medir = true): void {
    if (medir) this.analitica.evento('form_step', { paso: this.nombresEvento[this.paso() - 1] });
    setTimeout(() => {
      this.dialog()?.nativeElement.querySelector('.wiz-cuerpo')?.scrollTo({ top: 0 });
      this.titulo()?.nativeElement.focus({ preventScroll: true });
    }, 0);
  }

  alSalirDe(campo: Campo): void {
    if (!this.tocados().includes(campo)) this.tocados.update((t) => [...t, campo]);
    if (this.errores()[campo]) this.analitica.evento('form_error', { campo });
  }

  private enfocarCampo(campo: Campo): void {
    this.dialog()?.nativeElement.querySelector<HTMLElement>(`[data-campo="${campo}"]`)?.focus();
  }

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
    this.paso.set(1);
    this.enviado.set(false);
    this.enviando.set(false);
    this.errorEnvio.set(false);
    this.seleccion.set([]);
    this.alturaArmario.set(null);
    this.tienda.set(null);
    this.desmontar.set(null);
    this.fijarPared.set(null);
    this.zona.set('');
    this.acceso.set(null);
    this.cuando.set(null);
    this.fecha.set('');
    this.mueblesEnCasa.set(null);
    this.nombre.set('');
    this.telefono.set('');
    this.email.set('');
    this.notas.set('');
    this.privacidad.set(false);
    this.honeypot.set('');
    this.tocados.set([]);
    this.intentado.set([]);
    this.origen = '';
    this.ultimoEnvio = null;
    this.borrarProgreso();
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

  /* ---------- Resumen legible ---------- */

  private textoElemento(e: ElementoSeleccion): string {
    const tipo = tipoPorId(e.tipo);
    const partes = [`${tipo.nombre} × ${e.cantidad}`];
    const sub = tipo.subtipos?.find((s) => s.id === e.subtipo);
    if (sub) partes.push(sub.nombre);
    if (e.tipo === 'armario' && this.alturaArmario()) partes.push(this.alturaArmario()!);
    return partes.join(' · ');
  }

  listaMuebles(): string {
    return this.seleccion()
      .map((e) => this.textoElemento(e))
      .join('; ');
  }

  private cuandoTexto(): string | null {
    const c = this.cuando();
    if (c === 'Tengo fecha' && this.fecha()) {
      return `${c} (${new Date(this.fecha() + 'T12:00:00').toLocaleDateString('es-ES')})`;
    }
    return c;
  }

  /** Resumen para la columna description, el correo y WhatsApp. Solo con lo que se ha rellenado. */
  private resumen(destino: 'central' | 'whatsapp'): string {
    const lineas: string[] = [];
    const add = (etiqueta: string, valor: string | null | undefined) => {
      if (valor && valor.trim()) lineas.push(`${etiqueta}: ${valor.trim()}`);
    };
    if (destino === 'whatsapp') {
      lineas.push('¡Hola! Quiero presupuesto para un montaje.', '');
      add('Nombre', this.nombre());
      add('Teléfono', this.telefonoFinal() ?? this.telefono());
    }
    add('Muebles', this.listaMuebles());
    add('Tienda', this.tienda());
    add('Desmontar algo antes', this.desmontar());
    add('Fijar a la pared', this.fijarPared());
    add('Zona', this.zona());
    add('Acceso', this.acceso());
    add('Cuándo', this.cuandoTexto());
    add('Muebles en casa', this.mueblesEnCasa());
    if (this.seleccion().length) {
      add('Precio estimado', `desde ${formatearPrecio(this.estimacion().total)}`);
    }
    add('Algo más', this.notas());
    return lineas.join('\n');
  }

  /* ---------- Envío a la Central de Solicitudes (Supabase) ---------- */

  /** Construye el registro tal y como lo espera la tabla public.requests. */
  private crearSolicitud(): SolicitudCentral {
    const utm = this.presupuesto.utm();
    const details: Record<string, unknown> = {
      muebles: this.seleccion().map((e) => this.textoElemento(e)),
      tienda: this.tienda(),
      desmontar: this.desmontar(),
      fijarPared: this.fijarPared(),
      zona: this.zona().trim(),
      acceso: this.acceso(),
      cuando: this.cuando(),
      fecha: this.cuando() === 'Tengo fecha' ? this.fecha() : null,
      mueblesEnCasa: this.mueblesEnCasa(),
      precioEstimado: `desde ${formatearPrecio(this.estimacion().total)}`,
      incluyeElectrodomesticos: this.incluyeElectro(),
      paginaOrigen: this.origen || null,
      // Separados (no un objeto) para que el panel los muestre como texto.
      utm_source: utm['utm_source'] ?? null,
      utm_medium: utm['utm_medium'] ?? null,
      utm_campaign: utm['utm_campaign'] ?? null,
      privacidadAceptada: this.privacidad(),
    };

    return {
      source: FUENTE_CENTRAL,
      name: this.nombre().trim(),
      phone: this.telefonoFinal() ?? this.telefono().trim(),
      email: this.email().trim() || null,
      service: this.seleccion()
        .map((e) => tipoPorId(e.tipo).nombre)
        .join(', '),
      description: this.resumen('central'),
      details,
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

  /** Mismos parámetros de plantilla que antes; "detalles" lleva ahora el resumen completo. */
  private datosEmail(): Record<string, string> {
    return {
      nombre: this.nombre().trim(),
      telefono: this.telefonoFinal() ?? this.telefono().trim(),
      correo: this.email().trim() || 'No indicado',
      mueble: this.listaMuebles(),
      categoria: this.seleccion()
        .map((e) => tipoPorId(e.tipo).nombre)
        .join(', '),
      cantidad: String(this.totalPiezas()),
      zonas: this.zona().trim(),
      precio: formatearPrecio(this.estimacion().total),
      electro: this.incluyeElectro() ? 'Sí, incluye colocación de electrodomésticos' : 'No aplica',
      detalles: this.resumen('central'),
      fecha: new Date().toLocaleString('es-ES'),
    };
  }

  /** Aviso adicional: si falla, la solicitud ya está guardada y el cliente no lo nota. */
  private async avisarPorEmail(): Promise<void> {
    if (!EMAIL_CONFIGURADO) return;

    try {
      const respuesta = await fetch(EMAILJS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: this.datosEmail(),
        }),
      });

      if (!respuesta.ok) throw new Error(await respuesta.text());
    } catch (error) {
      console.warn('La solicitud se guardó, pero no se pudo enviar el aviso por email', error);
    }
  }

  /* ---------- Envío del formulario ---------- */

  async enviarSolicitud(): Promise<void> {
    if (this.enviando() || !this.seleccion().length) return;
    if (Object.keys(this.errores()).length) return;

    // Campo trampa: si lo rellena un robot, se simula el éxito sin enviar nada.
    if (this.honeypot().trim()) {
      this.enviado.set(true);
      return;
    }

    this.errorEnvio.set(false);
    this.enviando.set(true);

    try {
      await this.guardarEnCentral(this.crearSolicitud());

      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      this.enviado.set(true);
      this.analitica.evento('generate_lead', {
        value: this.estimacion().total,
        currency: 'EUR',
      });
      this.borrarProgreso();
      setTimeout(() => this.titulo()?.nativeElement.focus({ preventScroll: true }), 0);

      void this.avisarPorEmail();
    } catch (error) {
      console.error('No se pudo guardar la solicitud en la Central', error);
      this.errorEnvio.set(true);
    } finally {
      this.enviando.set(false);
    }
  }

  /* ---------- Progreso en sessionStorage ---------- */

  private guardarProgreso(): void {
    if (!this.esNavegador || this.enviado()) return;
    try {
      this.doc.defaultView?.sessionStorage.setItem(
        CLAVE_PROGRESO,
        JSON.stringify({
          paso: this.paso(),
          seleccion: this.seleccion(),
          alturaArmario: this.alturaArmario(),
          tienda: this.tienda(),
          desmontar: this.desmontar(),
          fijarPared: this.fijarPared(),
          zona: this.zona(),
          acceso: this.acceso(),
          cuando: this.cuando(),
          fecha: this.fecha(),
          mueblesEnCasa: this.mueblesEnCasa(),
          nombre: this.nombre(),
          telefono: this.telefono(),
          email: this.email(),
          notas: this.notas(),
          origen: this.origen,
        }),
      );
    } catch {
      // Sin almacenamiento: el formulario funciona igual, pero no recuerda el progreso.
    }
  }

  private restaurarProgreso(): void {
    try {
      const d = JSON.parse(this.doc.defaultView?.sessionStorage.getItem(CLAVE_PROGRESO) ?? 'null');
      if (!d || typeof d !== 'object') return;
      const validos: ElementoSeleccion[] = Array.isArray(d.seleccion)
        ? d.seleccion
            .filter(
              (e: ElementoSeleccion) =>
                TIPOS.some((t) => t.id === e?.tipo) &&
                Number.isInteger(e.cantidad) &&
                e.cantidad > 0 &&
                e.cantidad <= 30,
            )
            .map((e: ElementoSeleccion) => ({
              tipo: e.tipo,
              cantidad: e.cantidad,
              subtipo: tipoPorId(e.tipo).subtipos?.some((s) => s.id === e.subtipo) ? e.subtipo : null,
            }))
        : [];
      const texto = (v: unknown) => (typeof v === 'string' ? v.slice(0, 1000) : '');
      const opcion = (v: unknown) => (typeof v === 'string' ? v.slice(0, 100) : null);
      this.seleccion.set(validos);
      this.alturaArmario.set(opcion(d.alturaArmario));
      this.tienda.set(opcion(d.tienda));
      this.desmontar.set(opcion(d.desmontar));
      this.fijarPared.set(opcion(d.fijarPared));
      this.zona.set(texto(d.zona));
      this.acceso.set(opcion(d.acceso));
      this.cuando.set(opcion(d.cuando));
      this.fecha.set(texto(d.fecha));
      this.mueblesEnCasa.set(opcion(d.mueblesEnCasa));
      this.nombre.set(texto(d.nombre));
      this.telefono.set(texto(d.telefono));
      this.email.set(texto(d.email));
      this.notas.set(texto(d.notas));
      this.origen = texto(d.origen);
      const paso = Number(d.paso);
      this.paso.set(validos.length && paso >= 1 && paso <= 4 ? paso : 1);
    } catch {
      // Dato dañado o sin almacenamiento: se empieza de cero.
    }
  }

  private borrarProgreso(): void {
    try {
      this.doc.defaultView?.sessionStorage.removeItem(CLAVE_PROGRESO);
    } catch {
      // Nada que borrar.
    }
  }

  constructor() {
    if (this.esNavegador) this.restaurarProgreso();

    // Atiende cada petición de abrir el formulario, venga de donde venga.
    effect(() => {
      const peticion = this.presupuesto.peticion();
      if (peticion) untracked(() => this.aplicarPeticion(peticion));
    });

    // Guarda el progreso con cada cambio.
    effect(() => {
      this.paso();
      this.seleccion();
      this.alturaArmario();
      this.tienda();
      this.desmontar();
      this.fijarPared();
      this.zona();
      this.acceso();
      this.cuando();
      this.fecha();
      this.mueblesEnCasa();
      this.nombre();
      this.telefono();
      this.email();
      this.notas();
      untracked(() => this.guardarProgreso());
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

  private aplicarPeticion({ prefill, origen }: PeticionPresupuesto): void {
    this.ultimoFoco = this.doc.activeElement as HTMLElement | null;
    this.analitica.evento('form_open');

    if (this.enviado()) this.reiniciarFormulario();
    this.errorEnvio.set(false);
    if (!this.origen) this.origen = origen;

    if (prefill.tienda) this.tienda.set(prefill.tienda);
    if (prefill.zona && !this.zona().trim()) this.zona.set(prefill.zona);
    if (prefill.tipos?.length) {
      this.seleccion.update((s) => {
        const nueva = s.map((e) => ({ ...e }));
        for (const { tipo, subtipo } of prefill.tipos!) {
          const actual = nueva.find((e) => e.tipo === tipo);
          if (!actual) nueva.push({ tipo, cantidad: 1, subtipo: subtipo ?? null });
          else if (subtipo) actual.subtipo = subtipo;
        }
        return nueva;
      });
      // Con el mueble ya elegido, se empieza por los detalles.
      if (this.paso() === 1) this.paso.set(2);
    }

    setTimeout(() => this.titulo()?.nativeElement.focus({ preventScroll: true }), 60);
  }
}
