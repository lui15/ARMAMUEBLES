import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ConsentimientoService, GA_ID } from '../compartido/consentimiento.service';
import { SeoService } from '../seo.service';
import { LEGAL } from './legal-data';

const PAGINAS_LEGALES = {
  aviso: { titulo: 'Aviso legal', path: '/aviso-legal' },
  privacidad: { titulo: 'Política de privacidad', path: '/politica-privacidad' },
  cookies: { titulo: 'Política de cookies', path: '/politica-cookies' },
};

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="legal">
      <a class="volver" routerLink="/">← Volver a {{ legal.nombre }}</a>

      @if (tipo === 'aviso') {
        <h1>Aviso legal</h1>

        <h2>Titular de la web</h2>
        <p>
          En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de
          comercio electrónico (LSSI), se informa de que el sitio web {{ legal.dominio }} pertenece
          a:
        </p>
        <ul>
          <li><strong>Titular:</strong> {{ legal.titular }}</li>
          <li><strong>NIF:</strong> {{ legal.nif }}</li>
          <li><strong>Domicilio:</strong> {{ legal.domicilio }}</li>
          <li><strong>Correo electrónico:</strong> {{ legal.correo }}</li>
          @if (legal.registro) {
            <li><strong>Datos registrales:</strong> {{ legal.registro }}</li>
          }
        </ul>

        <h2>Objeto</h2>
        <p>
          Esta web ofrece información sobre {{ legal.actividad }} y permite solicitar presupuesto.
          Los precios que aparecen, cuando los hay, son orientativos y no constituyen una oferta
          vinculante.
        </p>

        <h2>Uso de la web</h2>
        <p>
          Te comprometes a usar la web de forma lícita y a facilitar datos veraces en los
          formularios. Enviar una solicitud no supone ningún compromiso de contratación.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          Los textos, el diseño y el logotipo de ArmaMuebles pertenecen a su titular. Las marcas y
          logotipos de tiendas que aparecen pertenecen a sus respectivos propietarios y solo indican
          de qué tiendas montamos muebles: no implican afiliación ni patrocinio. No se permite
          reproducir los contenidos propios de esta web sin autorización.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Procuramos que la información sea correcta y esté actualizada, pero puede contener
          errores. No respondemos del contenido de las webs de terceros a las que se pueda enlazar.
        </p>

        <h2>Legislación aplicable</h2>
        <p>
          Estas condiciones se rigen por la legislación española. Si eres consumidor, conservas los
          derechos y el fuero que te reconoce la normativa de consumo.
        </p>
      } @else if (tipo === 'cookies') {
        <h1>Política de cookies</h1>

        <h2>Qué son</h2>
        <p>
          Las cookies son pequeños archivos que una web guarda en tu navegador para recordar
          información sobre tu visita.
        </p>

        <h2>Cookies que usamos</h2>
        <p>Solo usamos cookies analíticas de Google Analytics, y únicamente si las aceptas:</p>
        <ul>
          <li>
            <strong>_ga y {{ cookieGa }}</strong> (de Google): distinguen visitantes de forma
            mediante un identificador para medir cuántas personas visitan la web y qué páginas
            consultan. Duran hasta 2 años.
          </li>
        </ul>
        <p>
          Además guardamos tu decisión en el almacenamiento local de tu navegador, bajo el nombre
          armamuebles-cookies, para no volver a preguntarte en 24 meses. Es un dato técnico, no se
          envía a nadie y no necesita tu consentimiento.
        </p>

        <h2>Cómo aceptarlas, rechazarlas o cambiar de opinión</h2>
        <p>
          Puedes rechazarlas con la misma facilidad con la que las aceptas, y la web funciona igual
          en ambos casos. Puedes cambiar tu decisión cuando quieras:
        </p>
        <p>
          <button type="button" class="btn btn-ink btn-sm" (click)="consentimiento.reabrir()">
            Configurar cookies
          </button>
        </p>
        <p>
          También puedes bloquear o borrar las cookies desde los ajustes de tu navegador.
        </p>

        <h2>Más información</h2>
        <p>
          Google trata estos datos como se explica en su
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de
            privacidad</a>. Sobre el resto de datos personales, consulta nuestra
          <a routerLink="/politica-privacidad">política de privacidad</a>.
        </p>
      } @else {
        <h1>Política de privacidad</h1>

        <h2>Responsable del tratamiento</h2>
        <ul>
          <li><strong>Responsable:</strong> {{ legal.titular }}</li>
          <li><strong>NIF:</strong> {{ legal.nif }}</li>
          <li><strong>Domicilio:</strong> {{ legal.domicilio }}</li>
          <li><strong>Correo electrónico:</strong> {{ legal.correo }}</li>
        </ul>

        <h2>Qué datos tratamos</h2>
        <p>Cuando nos envías una solicitud, tratamos estos datos: {{ legal.datos }}.</p>

        <h2>Para qué los usamos y con qué base legal</h2>
        <p>
          Los usamos para atender tu solicitud, contactar contigo y prepararte un presupuesto. La
          base legal es la aplicación de medidas precontractuales que nos pides (artículo 6.1.b del
          RGPD). No los usamos para enviarte publicidad.
        </p>

        <h2>Estadísticas de visitas</h2>
        <p>
          Si aceptas las cookies analíticas, Google Analytics recoge datos sobre cómo usas la web.
          La base legal es tu consentimiento (artículo 6.1.a del RGPD), que puedes retirar cuando
          quieras. Tienes los detalles en la
          <a routerLink="/politica-cookies">política de cookies</a>.
        </p>

        <h2>Cuánto tiempo los conservamos</h2>
        <p>{{ legal.conservacion }}</p>

        <h2>Quién puede tratarlos</h2>
        <p>
          No vendemos tus datos. Para que la web funcione, algunos proveedores los tratan por
          cuenta nuestra:
        </p>
        <ul>
          @for (proveedor of legal.proveedores; track proveedor) {
            <li>{{ proveedor }}</li>
          }
        </ul>
        <p>
          Si alguno de ellos trata datos fuera del Espacio Económico Europeo, se hará con las
          garantías que exige el RGPD.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes pedir el acceso, la rectificación, la supresión, la limitación o la portabilidad
          de tus datos y oponerte a su tratamiento escribiendo a {{ legal.correo }}. Si crees que no
          los hemos tratado correctamente, puedes reclamar ante la Agencia Española de Protección
          de Datos (www.aepd.es).
        </p>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      background: #fff;
      font-family: var(--ui);
    }
    .legal {
      max-width: 760px;
      margin: 0 auto;
      padding: 40px 24px 72px;
      color: #1b2b34;
      line-height: 1.65;
    }
    .volver {
      color: #72a91f;
      font-weight: 700;
      text-decoration: none;
    }
    h1 {
      margin: 24px 0 16px;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      line-height: 1.15;
    }
    h2 {
      margin: 32px 0 8px;
      font-size: 1.2rem;
    }
    p,
    ul {
      margin: 0 0 12px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 6px;
      overflow-wrap: anywhere;
    }
    p a {
      color: var(--green-d);
    }
  `,
})
export class LegalPage {
  readonly legal = LEGAL;
  readonly consentimiento = inject(ConsentimientoService);
  readonly cookieGa = `_ga_${GA_ID.replace('G-', '')}`;
  readonly tipo = inject(ActivatedRoute).snapshot.data['tipo'] as keyof typeof PAGINAS_LEGALES;

  constructor() {
    const { titulo, path } = PAGINAS_LEGALES[this.tipo];

    inject(SeoService).update({
      title: `${titulo} | ${LEGAL.nombre}`,
      description: `${titulo} de ${LEGAL.dominio}.`,
      path,
      noindex: true,
    });
  }
}
