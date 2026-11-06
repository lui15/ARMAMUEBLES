import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="nf">
      <p class="nf-code">404</p>
      <h1>No encontramos esta página</h1>
      <p>
        La dirección que buscas no existe o ha cambiado. Puedes volver al inicio y pedir tu
        presupuesto de montaje.
      </p>
      <a routerLink="/">Volver al inicio</a>
    </div>
  `,
  styles: `
    .nf {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 24px;
      text-align: center;
      color: #1b2b34;
    }
    .nf-code {
      margin: 0;
      font-size: 4rem;
      font-weight: 800;
      color: #72a91f;
    }
    h1 {
      margin: 0;
      font-size: 1.6rem;
    }
    p {
      margin: 0;
      max-width: 460px;
      line-height: 1.6;
    }
    a {
      margin-top: 12px;
      padding: 12px 22px;
      border-radius: 999px;
      background: #72a91f;
      color: #fff;
      font-weight: 700;
      text-decoration: none;
    }
  `,
})
export class NotFoundPage {
  constructor() {
    inject(SeoService).update({
      title: 'Página no encontrada | ArmaMuebles',
      description: 'La página que buscas no existe. Vuelve al inicio de ArmaMuebles.',
      path: '/',
      noindex: true,
    });
  }
}
