import { Injectable } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';

import { conBarra } from './seo.service';

/**
 * Hostinger redirige /ruta a /ruta/. Para no provocar esa redirección en cada clic ni dar a
 * Google dos versiones de cada página, los enlaces y la barra de direcciones llevan siempre
 * la barra final. El router sigue trabajando con las rutas sin barra.
 */
@Injectable()
export class BarraFinalLocationStrategy extends PathLocationStrategy {
  override prepareExternalUrl(interna: string): string {
    const externa = super.prepareExternalUrl(interna);
    const corte = externa.search(/[?#]/);
    const ruta = corte === -1 ? externa : externa.slice(0, corte);
    const resto = corte === -1 ? '' : externa.slice(corte);
    return conBarra(ruta || '/') + resto;
  }
}
