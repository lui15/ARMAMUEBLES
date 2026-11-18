import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ConsentimientoService } from '../compartido/consentimiento.service';
import { TelefonoLink, WhatsappLink } from '../compartido/enlaces-contacto';
import { MARCAS, TELEFONO, TELEFONO_VISIBLE, WHATSAPP } from '../datos/catalogo';
import { INDICE_PAGINAS as PAGINAS } from '../landing/indice.generado';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, TelefonoLink, WhatsappLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly consentimiento = inject(ConsentimientoService);
  readonly anio = new Date().getFullYear();
  readonly telefono = TELEFONO;
  readonly telefonoVisible = TELEFONO_VISIBLE;
  readonly whatsapp = WHATSAPP;
  readonly marcas = MARCAS;

  readonly servicios = PAGINAS.filter((p) => p.tipo === 'servicio');
  readonly tiendas = PAGINAS.filter((p) => p.tipo === 'marca');
  /** Con muchas zonas, el pie enseña unas pocas y enlaza a /zonas. */
  readonly zonas = PAGINAS.filter((p) => p.tipo === 'zona').slice(0, 6);
  readonly empresa = PAGINAS.filter(
    (p) => p.tipo === 'hub' || p.tipo === 'inicio' || p.tipo === 'guia',
  );
}
