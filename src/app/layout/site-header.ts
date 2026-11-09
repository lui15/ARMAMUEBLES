import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { TELEFONO, TELEFONO_VISIBLE } from '../datos/catalogo';
import { PAGINAS } from '../landing/landing-data';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { ScrollEstado } from './scroll-estado.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TelefonoLink, WhatsappLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  readonly scroll = inject(ScrollEstado);
  readonly presupuesto = inject(PresupuestoService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly telefono = TELEFONO;
  readonly telefonoVisible = TELEFONO_VISIBLE;

  readonly servicios = PAGINAS.filter((p) => p.tipo === 'servicio');
  readonly tiendas = PAGINAS.filter((p) => p.tipo === 'marca');
  readonly zonas = PAGINAS.filter((p) => p.tipo === 'zona');

  readonly enlaces = [
    { ruta: '/precios', texto: 'Precios' },
    { ruta: '/zonas', texto: 'Zonas' },
    { ruta: '/como-trabajamos', texto: 'Cómo trabajamos' },
    { ruta: '/opiniones', texto: 'Opiniones' },
    { ruta: '/preguntas-frecuentes', texto: 'Preguntas' },
  ];

  readonly megaAbierto = signal(false);
  readonly menuAbierto = signal(false);

  constructor() {
    effect(() => {
      const abierto = this.menuAbierto();
      if (this.esNavegador) this.doc.documentElement.style.overflow = abierto ? 'hidden' : '';
    });
  }

  /** Con teclado alterna; con ratón o táctil solo abre, porque pasar por encima ya lo abrió. */
  alPulsarServicios(evento: MouseEvent): void {
    this.megaAbierto.set(evento.detail === 0 ? !this.megaAbierto() : true);
  }

  cerrarTodo(): void {
    this.megaAbierto.set(false);
    this.menuAbierto.set(false);
  }

  pedirPresupuesto(): void {
    this.cerrarTodo();
    this.presupuesto.abrir();
  }

  @HostListener('document:keydown.escape')
  alPulsarEscape(): void {
    this.cerrarTodo();
  }

  @HostListener('document:click', ['$event'])
  alPulsarFuera(evento: MouseEvent): void {
    if (this.megaAbierto() && !this.host.contains(evento.target as Node)) {
      this.megaAbierto.set(false);
    }
  }
}
