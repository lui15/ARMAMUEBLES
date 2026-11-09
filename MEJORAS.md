# Auditoría de ArmaMuebles (9 de noviembre de 2026)

Recorrido a 375 px (móvil) y 1280 px (ordenador) de la portada, `/precios`, `/montaje-armarios-pax`, `/montador-muebles-barajas`, `/como-trabajamos` y el formulario. Navegador Chrome, con Supabase, EmailJS y Google bloqueados.

## Medición
- **Ningún contacto se mide.** Los enlaces de WhatsApp (barra móvil, landing, llamada final, pie y formulario) y de teléfono (cabecera, menú móvil, barra móvil y pie) no envían ningún evento. Por eso GA4 muestra 0 eventos clave.
- El formulario no envía ningún evento: ni al abrirse, ni por pasos, ni al guardarse.

## Formulario
- **Paso 1:** solo deja elegir un mueble. Quien monta un dormitorio (cama, mesitas y cómoda) no puede pedirlo todo de una vez.
- **Paso 1:** las fotos grandes de cada tarjeta obligan a mucho scroll en el móvil, y solo caben dos tarjetas por pantalla.
- No pregunta lo que cambia el precio: tienda, si hay que desmontar o fijar a la pared, planta y ascensor, ni cuándo.
- No guarda el progreso. Si se recarga la página, se pierde todo.
- WhatsApp solo aparece si falla el envío, no en cada paso.
- Tras enviar, no ofrece mandar una foto del mueble o del albarán.
- No hay casilla de privacidad.
- **EmailJS sin configurar:** el servicio, la plantilla y la clave pública siguen con valores de ejemplo (`TU_...`). Hoy no se envía ningún aviso por correo. No se cambia: es una decisión del dueño.

## Precios
- **Portada:** no hay ningún precio en la primera pantalla.
- **`/precios`:** no responde directamente a "¿cuánto cuesta?", no tiene buscador y no dice si el IVA está incluido.
- Falta lo que también se cobra: servicio mínimo, desplazamiento, precio por hora y desmontaje.
- Hay una contradicción por resolver: el catálogo anuncia "desde 25 €" (mesita), pero el servicio mínimo es de 40 €. Se mostrará siempre la nota del servicio mínimo.

## Contenido y SEO
- **H1 de la portada:** el texto que lee Google se mezcla con el rotador de marcas: "Montamos tu cocina completa de Bricomart de IKEA, Leroy Merlin… en Madrid". Además, el titular no dice el precio.
- **Opiniones:** no hay ninguna.
- **Datos estructurados:** el de `landing-data.ts` tiene un `TODO` sobre la dirección. Los servicios no tienen `PriceSpecification`.
- **Páginas de servicio:** no tienen un bloque "Cuánto cuesta" con enlace a precios ni guías de precio.
- **Venta cruzada:** no hay enlaces a Mudanzas360 ni a ObraLocal Madrid.
- **Portada larga en el móvil:** unos 11.600 px.

## Accesibilidad y móvil
Áreas táctiles por debajo de 44 px:
- Migas de pan (17 px de alto).
- Enlaces del pie (25 px).
- Enlaces con flecha "Ver todos…" (24 px).
- Botón de pausa de la escena animada (34 px).
- Teléfono de la cabecera (24 px).

## Rendimiento
- La escena animada de la cocina es un SVG grande dentro de la primera pantalla. Hay que medir si retrasa el LCP en el móvil.

---

# Estado tras las mejoras (rama `mejora-maximo-nivel`)

Resuelto todo lo anterior, salvo lo indicado como pendiente al final. Verificación del 9 de noviembre de 2026 en Chrome, con Supabase, EmailJS y Google bloqueados en las pruebas.

| Comprobación | Resultado |
|---|---|
| `npm run build` | Sin errores ni avisos. 26 rutas prerenderizadas |
| HTML prerenderizado (25 URL del sitemap) | Un H1 por página, title < 60, description 140–155, sin duplicados, FAQ del schema = FAQ visibles |
| `PENDIENTE`, `TODO`, `Lorem`, `XXX` en `src/` y `dist/` | Ninguno |
| Schema | JSON-LD válido (se analiza en cada URL); sin `Review` ni `AggregateRating` |
| Formulario a 375 y 414 px | 99/99 |
| Eventos de Analytics | 9/9 en enlaces y todos los del formulario; ninguno con las cookies rechazadas |
| Precios, opiniones, logos, cookies | 32/32 · 25/25 · 15/15 · 42/42 |
| Regresión general (navegación, 404, anchos de 360 a 2560 px) | 45/45 |
| Tests unitarios | 2/2 |

## Lighthouse en el móvil

Medido en local, con Brotli como el CDN de Hostinger. Varía entre ejecuciones:

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Portada | 89–99 (3 ejecuciones: 99, 89, 89) | 100 | 100 | 100 |
| `/precios` | 93 (3 ejecuciones) | 100 | 100 | 100 |

LCP de laboratorio: portada 1,8–3,3 s; `/precios` 2,8–2,9 s. CLS: 0,005 o menos. TBT: 20–60 ms.

## Pendiente
- **EmailJS sin configurar:** el servicio, la plantilla y la clave pública siguen con valores `TU_...`, así que no se envía ningún aviso por correo.
- **Mínimo de 40 €:** la portada anuncia "desde 25 €" (la mesita del catálogo), pero el servicio mínimo es de 40 €. Se avisa en el formulario y en `/precios`.
- **Sin probar:** Safari, Firefox y móviles reales. Tampoco se ha pasado la herramienta de resultados enriquecidos de Google, que necesita la web publicada.
