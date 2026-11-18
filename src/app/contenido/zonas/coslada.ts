import { ZonaContenido } from './tipos';

export const COSLADA: ZonaContenido = {
  slug: 'coslada',
  nombre: 'Coslada',
  tipo: 'municipio',
  frase: 'Del Casco y Ciudad 70 al Barrio del Puerto.',
  ventajas: ['Te atendemos solo nosotros', 'Presupuesto ajustado', 'Nos llevamos los cartones'],
  intro:
    'Montamos muebles en Coslada, un municipio de unos 80 000 vecinos al lado de Madrid que creció muy deprisa en la segunda mitad del siglo XX. Hay pisos de los 70, chalés y barrios recién construidos, y en cada uno el montaje se prepara de forma distinta.',
  barrios: ['Casco', 'Ciudad San Pablo (Ciudad 70)', 'Valleaguado Norte y Sur', 'Barrio del Puerto', 'Barrio de la Estación', 'El Esparragal y Las Conejeras'],
  viviendas: [
    'El Casco es el barrio más poblado y el de comercio tradicional. Ciudad San Pablo, conocida como Ciudad 70, es una urbanización iniciada en esa década con grandes bloques, mientras que El Esparragal y Las Conejeras son zonas de chalés y viviendas unifamiliares.',
    'Coslada sigue ampliándose: el Barrio del Puerto, junto al humedal, es de construcción reciente, y hay nuevos desarrollos previstos como el Barrio del Jarama, La Rambla y Barrancosa. En los pisos nuevos solemos montar la casa completa; en los de los 70, sobre todo cocinas y armarios de reforma.',
  ],
  accesos:
    'Pocos municipios están tan bien conectados: A-2, M-40, M-45, M-21, M-50 y R-3. El metro llega con la línea 7 (Barrio del Puerto, Coslada Central, La Rambla y Hospital del Henares) y el Cercanías C-2, C-7 y C-8 para en Coslada y en San Fernando. Toda la franja norte es polígono logístico, junto al puerto seco.',
  aparcamiento:
    'En los bloques de Ciudad 70 y el Casco puede costar parar cerca del portal en horas punta. En las zonas de chalés el acceso suele ser más fácil. Si conoces una buena hora para descargar en tu calle, dínosla.',
  dificultades: [
    {
      titulo: 'Bloques altos de los 70',
      texto:
        'En los edificios de varias plantas de Ciudad 70, las piezas largas de un armario alto tienen que caber en el ascensor. Si nos dices sus medidas o si hay montacargas, lo planificamos antes de ir.',
    },
    {
      titulo: 'Chalés con varias plantas',
      texto:
        'En El Esparragal y Las Conejeras los muebles se reparten entre plantas. Dinos qué va arriba y qué va abajo, y montamos cada mueble en su sitio.',
    },
  ],
  proceso:
    'Nos cuentas los muebles y el barrio. Si vives en un bloque alto, te preguntamos por el ascensor; si es un chalé, por las plantas. Te damos un presupuesto ajustado, montamos y nos llevamos los cartones y plásticos.',
  consejos: [
    'Mide el ascensor si el armario es alto',
    'Indica qué mueble va en cada planta',
    'Elige una hora tranquila para descargar',
    'Deja libre el hueco del mueble',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en todo Coslada?',
      respuesta: 'Sí: Casco, Ciudad 70, Valleaguado, Barrio del Puerto, Barrio de la Estación y las zonas de chalés.',
    },
    {
      pregunta: '¿Y en el Barrio del Puerto, que es nuevo?',
      respuesta: 'Sí. En pisos recién entregados montamos cocinas, armarios y dormitorios completos.',
    },
    {
      pregunta: 'Vivo en Ciudad 70, ¿subís los muebles por la escalera?',
      respuesta: 'Sí. Si tu portal no tiene ascensor, indícalo en el formulario: las piezas se suben por separado.',
    },
    {
      pregunta: '¿Montáis muebles comprados en tiendas de la zona?',
      respuesta: 'Sí. Montamos muebles de IKEA, Leroy Merlin, Conforama y otras tiendas, compres donde compres.',
    },
    {
      pregunta: '¿Montáis en los chalés de El Esparragal y Las Conejeras?',
      respuesta: 'Sí. En las casas de varias plantas montamos cada mueble en la planta donde va, sin subirlo ya montado.',
    },
  ],
  cerca: ['san-fernando-de-henares', 'san-blas', 'vicalvaro', 'torrejon-de-ardoz'],
  servicios: ['montaje-armarios-madrid', 'montaje-cocinas-madrid'],
  imagen: './images/armario-abatibles.webp',
  imagenAlt: 'Armario de puertas abatibles montado en un dormitorio',
  fuentes: [{ texto: 'Coslada, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Coslada' }],
};
