import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  WritableSignal,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { createClient } from '@supabase/supabase-js';

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

// Web pública sin inicio de sesión: no hace falta guardar ni renovar sesiones.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
});

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
   MODELOS Y DATOS
===================================================== */

interface ServicioBase {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  incluye: string[];
  precioDesde: number;
  foto: string;
  etiqueta?: string;
  electro?: boolean; // las cocinas incluyen la colocación de electrodomésticos
}

interface Servicio extends ServicioBase {
  imagen: string;
  miniatura: string;
  resumen: string[];
}

const ID_SOLO_ELECTRO = 19;

const unsplash = (foto: string, ancho: number): string =>
  `https://images.unsplash.com/${foto}?auto=format&fit=crop&q=70&w=${ancho}`;

const PRECIO = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

const REDUCIR_MOVIMIENTO =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Palabras que se deslizan en el titular del inicio. */
const MARCAS = ['IKEA', 'Leroy Merlin', 'Obramat', 'Conforama', 'Bricomart', 'Brico Depot'];
const PIEZAS = [
  'mesita de noche',
  'estantería',
  'armario',
  'cama',
  'cómoda',
  'escritorio',
  'mueble de TV',
  'mesa de comedor',
];

/** Fases del montaje de la cocina animada. */
const ETAPAS = [
  { nombre: 'Medidas', texto: 'Tomamos medidas en tu casa' },
  { nombre: 'Bajos', texto: 'Montando los muebles bajos' },
  { nombre: 'Encimera', texto: 'Colocando encimera y frigorífico' },
  { nombre: 'Altos', texto: 'Fijando los muebles altos' },
  { nombre: 'Campana', texto: 'Instalando campana y placa' },
  { nombre: 'Puertas', texto: 'Ajustando puertas y tiradores' },
  { nombre: 'Electro', texto: 'Colocando los electrodomésticos' },
  { nombre: '¡Lista!', texto: '¡Cocina lista para usar!' },
] as const;

/** Posición del taladro en cada fase: [x, y, giro horizontal, rotación]. */
const POSES: readonly (readonly [number, number, 1 | -1, number])[] = [
  [680, 170, 1, 10],
  [150, 268, 1, -4],
  [340, 208, 1, 4],
  [300, 92, -1, -4],
  [352, 88, 1, 4],
  [398, 262, -1, 3],
  [420, 186, 1, -4],
  [680, 170, 1, 10],
];

const ELECTRO = 'Colocación de electrodomésticos incluida';

const SERVICIOS_BASE: ServicioBase[] = [
  {
    id: 1,
    nombre: 'Cocina pequeña',
    categoria: 'Cocinas',
    descripcion:
      'Montaje completo de cocinas compactas, con módulos bajos y altos, puertas y cajones. Los electrodomésticos van incluidos.',
    incluye: [
      ELECTRO,
      'Módulos bajos y muebles altos',
      'Puertas, cajones y tiradores',
      'Nivelación y ajuste final',
    ],
    precioDesde: 120,
    foto: './images/cocina-pequeña.jpg',
    etiqueta: 'Ideal para pisos',
    electro: true,
  },
  {
    id: 2,
    nombre: 'Cocina mediana',
    categoria: 'Cocinas',
    descripcion:
      'Cocinas con varios módulos, cajoneras y columnas, montadas y niveladas. Incluye la colocación de tus electrodomésticos.',
    incluye: [
      ELECTRO,
      'Muebles altos, bajos y cajoneras',
      'Columnas y módulos auxiliares',
      'Ajuste de puertas y cajones',
      'Nivelación y fijación',
    ],
    precioDesde: 220,
    foto: './images/cocina-mediana.jpg',
    etiqueta: 'La más pedida',
    electro: true,
  },
  {
    id: 3,
    nombre: 'Cocina grande',
    categoria: 'Cocinas',
    descripcion:
      'Composiciones amplias con muchos módulos, columnas y extraíbles. Incluye la colocación de todos tus electrodomésticos.',
    incluye: [
      ELECTRO,
      'Muebles altos y bajos',
      'Columnas, cajoneras y extraíbles',
      'Ajuste de puertas y cajones',
      'Nivelación de todos los módulos',
    ],
    precioDesde: 350,
    foto: './images/cocina-grande.jpg',
    etiqueta: 'Cocina completa',
    electro: true,
  },
  {
    id: 4,
    nombre: 'Cocina con isla',
    categoria: 'Cocinas',
    descripcion:
      'Cocina completa con isla central, montada, nivelada y fijada. Electrodomésticos incluidos.',
    incluye: [
      ELECTRO,
      'Muebles bajos y altos',
      'Montaje y fijación de la isla',
      'Cajoneras y puertas',
      'Nivelación final',
    ],
    precioDesde: 450,
    foto: './images/cocina-isla.jpg',
    etiqueta: 'Con isla',
    electro: true,
  },
  {
    id: 5,
    nombre: 'Armario de puertas abatibles',
    categoria: 'Armarios',
    descripcion: 'Armarios de una o varias puertas, con baldas, barras y bisagras bien ajustadas.',
    incluye: [
      'Estructura y laterales',
      'Baldas interiores',
      'Barras para colgar',
      'Puertas y bisagras',
      'Ajustes finales',
    ],
    precioDesde: 65,
    foto: './images/armario-abatibles.jpg',
  },
  {
    id: 6,
    nombre: 'Armario de puertas correderas',
    categoria: 'Armarios',
    descripcion: 'Armarios con sistema de puertas deslizantes, guías alineadas y regulación fina.',
    incluye: [
      'Estructura completa',
      'Baldas y divisiones',
      'Sistema de guías',
      'Puertas correderas',
      'Regulación de puertas',
    ],
    precioDesde: 90,
    foto: './images/armario-correderas.jpg',
  },
  {
    id: 7,
    nombre: 'Vestidor',
    categoria: 'Armarios',
    descripcion: 'Estructuras abiertas y sistemas de vestidor modulares, listos para organizar.',
    incluye: [
      'Estructura modular',
      'Baldas',
      'Barras de colgar',
      'Cajoneras',
      'Ajustes y nivelación',
    ],
    precioDesde: 120,
    foto: './images/vestidor.jpg',
  },
  {
    id: 8,
    nombre: 'Mesita de noche',
    categoria: 'Dormitorio',
    descripcion: 'Mesitas de noche con cajones o puertas, montadas con precisión.',
    incluye: [
      'Montaje de estructura',
      'Montaje de cajones',
      'Colocación de tiradores',
      'Ajustes finales',
    ],
    precioDesde: 25,
    foto: './images/mesita-noche.jpg',
  },
  {
    id: 9,
    nombre: 'Cama y estructura',
    categoria: 'Dormitorio',
    descripcion: 'Camas individuales, dobles y estructuras con almacenaje.',
    incluye: [
      'Montaje de estructura',
      'Montaje de somier',
      'Instalación de patas',
      'Ajuste de piezas',
    ],
    precioDesde: 45,
    foto: './images/cama.jpg',
  },
  {
    id: 10,
    nombre: 'Cómoda y cajonera',
    categoria: 'Dormitorio',
    descripcion: 'Cómodas, cajoneras y muebles de almacenamiento con cajones que deslizan bien.',
    incluye: [
      'Montaje de estructura',
      'Montaje de cajones',
      'Colocación de guías',
      'Ajuste de frentes',
    ],
    precioDesde: 40,
    foto: './images/comoda.jpg',
  },
  {
    id: 11,
    nombre: 'Mueble de televisión',
    categoria: 'Salón',
    descripcion: 'Muebles de televisión, bajos y modulares, firmes y bien nivelados.',
    incluye: ['Montaje de estructura', 'Puertas y cajones', 'Baldas', 'Ajustes y nivelación'],
    precioDesde: 45,
    foto: './images/mueble-tv.jpg',
  },
  {
    id: 12,
    nombre: 'Mueble de salón completo',
    categoria: 'Salón',
    descripcion: 'Composición de salón con módulos, vitrinas y estanterías.',
    incluye: [
      'Montaje de módulos',
      'Montaje de vitrinas',
      'Baldas y estantes',
      'Ajuste de puertas',
      'Nivelación',
    ],
    precioDesde: 100,
    foto: './images/mueble-completo.jpg',
    etiqueta: 'Composición completa',
  },
  {
    id: 13,
    nombre: 'Mesa de comedor',
    categoria: 'Mesas y auxiliares',
    descripcion: 'Mesas de comedor, extensibles y auxiliares, estables desde el primer día.',
    incluye: [
      'Montaje de patas',
      'Ensamblaje de estructura',
      'Colocación de extensibles',
      'Revisión de estabilidad',
    ],
    precioDesde: 35,
    foto: './images/comedor.jpg',
  },
  {
    id: 14,
    nombre: 'Escritorio',
    categoria: 'Mesas y auxiliares',
    descripcion: 'Escritorios de trabajo y estudio, con cajones si los incluye.',
    incluye: ['Montaje de tablero', 'Estructura y patas', 'Cajones si incluye', 'Ajustes finales'],
    precioDesde: 35,
    foto: './images/auxiliar.jpg',
  },
  {
    id: 15,
    nombre: 'Estantería',
    categoria: 'Almacenamiento',
    descripcion: 'Estanterías, librerías y muebles modulares, fijados a pared si hace falta.',
    incluye: [
      'Montaje de estructura',
      'Colocación de baldas',
      'Nivelación',
      'Fijación a pared si procede',
    ],
    precioDesde: 35,
    foto: './images/estanteria.jpg',
  },
  {
    id: 16,
    nombre: 'Mueble auxiliar',
    categoria: 'Almacenamiento',
    descripcion: 'Muebles auxiliares, recibidores y aparadores.',
    incluye: ['Montaje de estructura', 'Puertas y cajones', 'Baldas interiores', 'Ajustes finales'],
    precioDesde: 35,
    foto: './images/auxiliar.jpg',
  },
  {
    id: 17,
    nombre: 'Mueble zapatero',
    categoria: 'Almacenamiento',
    descripcion: 'Zapateros y muebles para recibidores.',
    incluye: [
      'Montaje de estructura',
      'Puertas abatibles',
      'Baldas interiores',
      'Ajuste de cierres',
    ],
    precioDesde: 35,
    foto: './images/zapatero.jpg',
  },
  {
    id: 18,
    nombre: 'Mueble de baño',
    categoria: 'Almacenamiento',
    descripcion: 'Muebles de baño, cajoneras y auxiliares.',
    incluye: [
      'Montaje de mueble',
      'Montaje de cajones',
      'Colocación de puertas',
      'Ajustes finales',
    ],
    precioDesde: 45,
    foto: './images/muebles-baño.jpg',
  },
  {
    id: ID_SOLO_ELECTRO,
    nombre: 'Solo electrodomésticos',
    categoria: 'Cocinas',
    descripcion:
      'Si ya tienes la cocina montada, colocamos tus electrodomésticos integrables o de libre instalación.',
    incluye: [
      'Colocación en su hueco',
      'Ajuste de posición',
      'Integración estética en el mobiliario',
      'Revisión de encaje',
    ],
    precioDesde: 35,
    foto: './images/electrodomesticos.jpg',
    etiqueta: 'Si ya tienes cocina',
  },
  {
    id: 20,
    nombre: 'Montaje de varios muebles',
    categoria: 'Mesas y auxiliares',
    descripcion: 'Varios muebles montados en una misma visita, con el trabajo bien organizado.',
    incluye: [
      'Revisión de piezas',
      'Montaje de muebles',
      'Ajustes finales',
      'Organización del trabajo',
    ],
    precioDesde: 40,
    foto: './images/varios-muebles.jpg',
  },
];

/* =====================================================
   DIRECTIVAS DE ANIMACIÓN
===================================================== */

let observadorCompartido: IntersectionObserver | null = null;

function observador(): IntersectionObserver {
  if (!observadorCompartido) {
    observadorCompartido = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('in');
            observadorCompartido?.unobserve(entrada.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
  }
  return observadorCompartido;
}

/** Hace aparecer el elemento al entrar en pantalla. Uso: appReveal="left" [appRevealDelay]="120" */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    class: 'reveal',
    '[attr.data-r]': 'appReveal() || "up"',
    '[style.--rd]': 'appRevealDelay() + "ms"',
  },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly appReveal = input<'up' | 'left' | 'right' | 'zoom' | ''>('');
  readonly appRevealDelay = input(0);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    const nodo = this.el.nativeElement;
    if (REDUCIR_MOVIMIENTO || typeof IntersectionObserver === 'undefined') {
      nodo.classList.add('in');
      return;
    }
    observador().observe(nodo);
  }

  ngOnDestroy(): void {
    observadorCompartido?.unobserve(this.el.nativeElement);
  }
}

/** Cuenta desde 0 hasta el número indicado cuando el elemento se ve. */
@Directive({ selector: '[appCount]', standalone: true })
export class CountDirective implements AfterViewInit {
  readonly appCount = input.required<number>();
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    const meta = this.appCount();
    const nodo = this.el.nativeElement;

    if (REDUCIR_MOVIMIENTO || typeof IntersectionObserver === 'undefined') {
      nodo.textContent = String(meta);
      return;
    }

    nodo.textContent = '0';
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        io.disconnect();
        const inicio = performance.now();
        const duracion = 1600;
        const paso = (ahora: number) => {
          const p = Math.min((ahora - inicio) / duracion, 1);
          nodo.textContent = String(Math.round(meta * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
      },
      { threshold: 0.6 },
    );
    io.observe(nodo);
  }
}

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevealDirective, CountDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  // `document` no existe en el servidor (SSR): se usa el inyectable y se comprueba la plataforma.
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');

  readonly currentYear = new Date().getFullYear();

  // Sustituye este número si quieres utilizar otro WhatsApp.
  readonly whatsappEmpresa = '34624671374';

  /* ---------- Datos ---------- */

  readonly categorias = [
    'Todos',
    'Cocinas',
    'Armarios',
    'Salón',
    'Dormitorio',
    'Almacenamiento',
    'Mesas y auxiliares',
  ];

  // Las fotos son archivos locales (./images/...), así que se usan tal cual.
  // `unsplash()` solo se emplea para imágenes que realmente están en Unsplash (el banner).
  readonly servicios: Servicio[] = SERVICIOS_BASE.map((s) => ({
    ...s,
    imagen: s.foto,
    miniatura: s.foto,
    resumen: s.incluye.slice(0, 4),
  }));

  readonly precioCocina = Math.min(
    ...this.servicios.filter((s) => s.electro).map((s) => s.precioDesde),
  );

  readonly imagenBanner = unsplash('photo-1556911220-bff31c812dba', 900);

  readonly electrodomesticos = [
    'Horno',
    'Placa de cocina',
    'Campana',
    'Microondas',
    'Lavavajillas',
    'Frigorífico',
  ];

  readonly zonas = [
    'Madrid capital',
    'Alcorcón',
    'Móstoles',
    'Leganés',
    'Getafe',
    'Fuenlabrada',
    'Pozuelo de Alarcón',
    'Majadahonda',
    'Las Rozas',
    'Alcobendas',
    'San Sebastián de los Reyes',
    'Torrejón de Ardoz',
    'Alcalá de Henares',
    'Coslada',
    'Rivas-Vaciamadrid',
    'Arganda del Rey',
    'Parla',
    'Pinto',
    'Valdemoro',
    'Otra zona de Madrid',
  ];

  readonly pasos = [
    { num: 1, nombre: 'Mueble' },
    { num: 2, nombre: 'Detalles' },
    { num: 3, nombre: 'Zona' },
    { num: 4, nombre: 'Contacto' },
  ];

  /* ---------- Inicio: palabras que se deslizan ---------- */

  readonly marcas = MARCAS;
  readonly marca = signal(0);
  readonly marcaPrev = signal(-1);

  readonly piezas = PIEZAS;
  readonly pieza = signal(0);
  readonly piezaPrev = signal(-1);

  /* ---------- Inicio: cocina interactiva ---------- */

  readonly etapas = ETAPAS;
  readonly etapa = signal(0);
  readonly reproduciendo = signal(true);
  readonly progresoEscena = computed(() => (this.etapa() + 1) / ETAPAS.length);

  readonly taladro = computed(() => {
    const e = this.etapa();
    const [x, y, giro, rotacion] = POSES[e];
    return {
      t: `translate(${x}px, ${y}px) rotate(${rotacion}deg) scale(${giro}, 1)`,
      o: e === 0 || e === ETAPAS.length - 1 ? 0 : 1,
    };
  });

  private temporizadorEscena?: ReturnType<typeof setTimeout>;

  /* ---------- Catálogo de la página ---------- */

  readonly categoriaSeleccionada = signal('Todos');
  readonly busqueda = signal('');
  readonly orden = signal('recomendados');
  readonly mostrarTodos = signal(false);

  readonly serviciosFiltrados = computed(() => {
    let lista = [...this.servicios];
    const categoria = this.categoriaSeleccionada();
    const termino = this.busqueda().toLowerCase().trim();

    if (categoria !== 'Todos') {
      lista = lista.filter((s) => s.categoria === categoria);
    }

    if (termino) {
      lista = lista.filter(
        (s) =>
          s.nombre.toLowerCase().includes(termino) ||
          s.descripcion.toLowerCase().includes(termino) ||
          s.categoria.toLowerCase().includes(termino),
      );
    }

    if (this.orden() === 'precio-menor') lista.sort((a, b) => a.precioDesde - b.precioDesde);
    if (this.orden() === 'precio-mayor') lista.sort((a, b) => b.precioDesde - a.precioDesde);

    return lista;
  });

  readonly serviciosVisibles = computed(() =>
    this.mostrarTodos() ? this.serviciosFiltrados() : this.serviciosFiltrados().slice(0, 8),
  );

  /* ---------- Cabecera, progreso y botón flotante ---------- */

  readonly scrolled = signal(false);
  readonly fabVisible = signal(false);

  /* ---------- Asistente de presupuesto ---------- */

  readonly formAbierto = signal(false);
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
      ? this.servicios
      : this.servicios.filter((s) => s.categoria === categoria);
  });

  readonly zonasFiltradas = computed(() => {
    const termino = this.busquedaZona().toLowerCase().trim();
    return termino ? this.zonas.filter((z) => z.toLowerCase().includes(termino)) : this.zonas;
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

  constructor() {
    // Bloquea el scroll de la página mientras el formulario está al frente (solo en el navegador).
    effect(() => {
      const abierto = this.formAbierto();
      if (this.esNavegador) {
        this.doc.body.style.overflow = abierto ? 'hidden' : '';
      }
    });

    afterNextRender(() => {
      if (REDUCIR_MOVIMIENTO) {
        this.etapa.set(ETAPAS.length - 1);
        this.reproduciendo.set(false);
      }

      this.zone.runOutsideAngular(() => {
        this.iniciarEfectosDeScroll();
        this.iniciarRotadores();
        this.programarEscena();
      });
    });

    this.destroyRef.onDestroy(() => {
      clearTimeout(this.temporizadorEscena);
      if (this.esNavegador) {
        this.doc.body.style.overflow = '';
      }
    });
  }

  /* ---------- Efectos: scroll y brillo que sigue al cursor ---------- */

  private iniciarEfectosDeScroll(): void {
    let esperando = false;

    const alHacerScroll = () => {
      if (esperando) return;
      esperando = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = this.doc.documentElement.scrollHeight - window.innerHeight;
        this.host.style.setProperty('--progress', String(max > 0 ? Math.min(y / max, 1) : 0));

        // Histéresis: se compacta al pasar de 40 px y se restaura por debajo de 8 px,
        // para que la cabecera no parpadee al subir y bajar.
        const compacta = this.scrolled() ? y > 8 : y > 40;
        if (compacta !== this.scrolled()) this.zone.run(() => this.scrolled.set(compacta));

        const fab = y > 700;
        if (fab !== this.fabVisible()) this.zone.run(() => this.fabVisible.set(fab));

        esperando = false;
      });
    };

    const alMoverPuntero = (evento: PointerEvent) => {
      if (evento.pointerType === 'touch') return;
      const objetivo = (evento.target as HTMLElement | null)?.closest<HTMLElement>('.glow');
      if (!objetivo) return;
      const caja = objetivo.getBoundingClientRect();
      objetivo.style.setProperty('--mx', `${evento.clientX - caja.left}px`);
      objetivo.style.setProperty('--my', `${evento.clientY - caja.top}px`);
    };

    window.addEventListener('scroll', alHacerScroll, { passive: true });
    this.host.addEventListener('pointermove', alMoverPuntero, { passive: true });
    alHacerScroll();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', alHacerScroll);
      this.host.removeEventListener('pointermove', alMoverPuntero);
    });
  }

  /* ---------- Inicio: marcas y muebles que se deslizan ---------- */

  private iniciarRotadores(): void {
    if (REDUCIR_MOVIMIENTO) return;

    const girar = (
      actual: WritableSignal<number>,
      previa: WritableSignal<number>,
      total: number,
      ms: number,
    ) => {
      const id = setInterval(() => {
        this.zone.run(() => {
          previa.set(actual());
          actual.set((actual() + 1) % total);
        });
      }, ms);
      this.destroyRef.onDestroy(() => clearInterval(id));
    };

    girar(this.marca, this.marcaPrev, MARCAS.length, 2400);
    girar(this.pieza, this.piezaPrev, PIEZAS.length, 2900);
  }

  /* ---------- Inicio: cocina interactiva ---------- */

  private programarEscena(): void {
    clearTimeout(this.temporizadorEscena);
    if (!this.esNavegador || REDUCIR_MOVIMIENTO || !this.reproduciendo()) return;

    const espera = this.etapa() === ETAPAS.length - 1 ? 4500 : 2200;

    this.zone.runOutsideAngular(() => {
      this.temporizadorEscena = setTimeout(() => {
        this.zone.run(() => this.etapa.update((e) => (e + 1) % ETAPAS.length));
        this.programarEscena();
      }, espera);
    });
  }

  irAEtapa(indice: number): void {
    this.etapa.set(indice);
    this.programarEscena();
  }

  alternarReproduccion(): void {
    this.reproduciendo.update((v) => !v);
    this.programarEscena();
  }

  /* ---------- Catálogo ---------- */

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada.set(categoria);
    this.mostrarTodos.set(false);
  }

  cambiarBusqueda(valor: string): void {
    this.busqueda.set(valor);
    this.mostrarTodos.set(false);
  }

  cambiarOrden(valor: string): void {
    this.orden.set(valor);
  }

  verTodos(): void {
    this.mostrarTodos.update((v) => !v);
  }

  servicioPorId(id: number): Servicio | undefined {
    return this.servicios.find((s) => s.id === id);
  }

  formatearPrecio(precio: number): string {
    return PRECIO.format(precio);
  }

  /* ---------- Asistente ---------- */

  abrirFormulario(servicio?: Servicio, categoria?: string): void {
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

    this.formAbierto.set(true);
    setTimeout(() => this.dialog()?.nativeElement.focus(), 60);
  }

  cerrarFormulario(): void {
    const habiaTerminado = this.enviado();
    this.formAbierto.set(false);
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
    if (!this.formAbierto()) return;

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
        precio_orientativo_desde: this.formatearPrecio(this.precioEstimadoMinimo()),
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
      precio: this.formatearPrecio(this.precioEstimadoMinimo()),
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
      `Precio orientativo desde: ${this.formatearPrecio(this.precioEstimadoMinimo())}`,
    ];

    if (servicio.electro) lineas.push('Incluye colocación de electrodomésticos.');
    lineas.push(`Detalles: ${this.descripcion().trim() || 'Sin detalles adicionales'}`);

    const url = `https://wa.me/${this.whatsappEmpresa}?text=${encodeURIComponent(lineas.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  }
}
