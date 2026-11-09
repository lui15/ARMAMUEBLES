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
