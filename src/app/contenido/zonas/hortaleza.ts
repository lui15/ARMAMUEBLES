import { ZonaContenido } from './tipos';

export const HORTALEZA: ZonaContenido = {
  slug: 'hortaleza',
  nombre: 'Hortaleza',
  tipo: 'distrito',
  frase: 'De los poblados de los 50 a Sanchinarro y Valdebebas.',
  ventajas: ['Presupuesto ajustado', 'Te atendemos solo nosotros', 'Llevamos herramientas'],
  intro:
    'Montamos muebles en todo el distrito de Hortaleza, desde los bloques de Canillas y Pinar del Rey hasta los pisos nuevos de Sanchinarro y Valdebebas. Es un distrito con edificios de casi todas las épocas, y eso cambia bastante cómo se prepara cada montaje.',
  barrios: ['Palomas', 'La Piovera', 'Canillas', 'Pinar del Rey', 'Apóstol Santiago', 'Valdefuentes (con Sanchinarro y Valdebebas)'],
  viviendas: [
    'Hortaleza creció por capas. En los años 50 se levantaron poblados cerca de Manoteras y Canillas y, en el extremo opuesto, la urbanización de chalés del Parque Conde de Orgaz. En los 60 llegaron la UVA de Hortaleza y barrios como San Lorenzo, Parque de Santa María o La Piovera, y en los 70 Virgen del Cortijo, Esperanza o Villarosa.',
    'Desde los años 90 el distrito se amplió hacia el norte con Los Llanos, Arroyo del Santo y Sanchinarro, y más tarde con Valdebebas, que todavía sigue creciendo. Son pisos en bloques modernos, normalmente con ascensor y garaje, donde se montan muchas cocinas y armarios completos de casas recién entregadas.',
  ],
  accesos:
    'El distrito está bien comunicado por carretera gracias a la M-11 y la M-40, y por dentro lo recorren la Gran Vía de Hortaleza y la avenida de los Andes. En metro llegan la línea 4 (de Arturo Soria a Manoteras), la 8 por Pinar del Rey y Mar de Cristal, y el Metro Ligero 1 por Sanchinarro y Virgen del Cortijo.',
  aparcamiento:
    'En los barrios antiguos, con calles estrechas y bloques sin garaje, la descarga puede llevar más tiempo. En Sanchinarro y Valdebebas las calles son amplias, pero muchas urbanizaciones tienen el acceso cerrado. Si sabes dónde puede parar la furgoneta, indícalo en el formulario.',
  dificultades: [
    {
      titulo: 'Bloques de los años 50 y 60',
      texto:
        'En los edificios más antiguos de Canillas o Pinar del Rey puede no haber ascensor, o puede ser pequeño. Las piezas largas de un armario se suben por la escalera, así que conviene saber la planta antes de ir.',
    },
    {
      titulo: 'Casas recién entregadas',
      texto:
        'En los pisos nuevos de Valdebebas es habitual montar la cocina y varios armarios de golpe. Si es tu caso, pídelo todo en una sola solicitud y lo organizamos en la misma visita.',
    },
  ],
  proceso:
    'Nos cuentas qué hay que montar y en qué barrio estás. Si es un piso antiguo, te preguntamos por la planta y el ascensor; si es una urbanización cerrada, por el acceso y el portero. Con eso te damos un presupuesto ajustado y llegamos con todo previsto.',
  consejos: [
    'Indica si el edificio tiene ascensor',
    'Avisa al portero de la urbanización',
    'Deja las cajas en la habitación',
    'Mide el hueco del armario',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en Sanchinarro y Valdebebas?',
      respuesta: 'Sí. Sanchinarro y Valdebebas están en el barrio de Valdefuentes, dentro de Hortaleza, y montamos en los dos.',
    },
    {
      pregunta: '¿Y en el Parque Conde de Orgaz?',
      respuesta: 'Sí. En chalés y viviendas unifamiliares también montamos armarios, vestidores, cocinas y muebles de jardín por piezas.',
    },
    {
      pregunta: 'Vivo en un bloque antiguo sin ascensor, ¿es un problema?',
      respuesta: 'No. Marca la planta en el formulario y subimos las piezas del armario por separado, sin cargar con el mueble ya montado.',
    },
    {
      pregunta: 'Me acaban de entregar el piso, ¿podéis montar la cocina y los armarios?',
      respuesta: 'Sí. Elige todos los muebles en el formulario e indica cuántos son. Lo organizamos para que te atienda una sola persona de contacto.',
    },
    {
      pregunta: '¿Llegáis a Manoteras y a Pinar del Rey?',
      respuesta: 'Sí. Manoteras queda al final de la línea 4 y Pinar del Rey tiene parada de la línea 8; montamos en los dos.',
    },
  ],
  cerca: ['barajas', 'san-blas', 'ciudad-lineal', 'alcobendas'],
  servicios: ['montaje-cocinas-madrid', 'montaje-armarios-madrid'],
  imagen: './images/cocina-grande.webp',
  imagenAlt: 'Cocina amplia montada en un piso nuevo',
  fuentes: [{ texto: 'Hortaleza, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Hortaleza' }],
};
