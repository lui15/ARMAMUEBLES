import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MARCAS, TELEFONO, TELEFONO_VISIBLE, WHATSAPP } from '../datos/catalogo';
import { PAGINAS } from '../landing/landing-data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly anio = new Date().getFullYear();
  readonly telefono = TELEFONO;
  readonly telefonoVisible = TELEFONO_VISIBLE;
  readonly whatsapp = WHATSAPP;
  readonly marcas = MARCAS;

  readonly servicios = PAGINAS.filter((p) => p.tipo === 'servicio');
  readonly tiendas = PAGINAS.filter((p) => p.tipo === 'marca');
  readonly zonas = PAGINAS.filter((p) => p.tipo === 'zona');
  readonly empresa = PAGINAS.filter((p) => p.tipo === 'hub' || p.tipo === 'inicio');
}
