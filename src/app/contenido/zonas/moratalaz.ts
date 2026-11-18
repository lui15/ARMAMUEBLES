import { ZonaContenido } from './tipos';

export const MORATALAZ: ZonaContenido = {
  slug: 'moratalaz',
  nombre: 'Moratalaz',
  tipo: 'distrito',
  frase: 'Pisos de los años 60 y 70 entre la M-30 y la M-40.',
  ventajas: ['Presupuesto ajustado', 'Una sola persona de contacto', 'Trato cercano'],
  intro:
    'Montamos muebles en Moratalaz, un distrito compacto y residencial que se construyó casi entero en pocos años. Esa uniformidad ayuda: conocer cómo son sus edificios nos permite prever el montaje antes de llegar.',
  barrios: ['Pavones', 'Horcajo', 'Marroquina', 'Media Legua', 'Fontarrón', 'Vinateros'],
  viviendas: [
    'Moratalaz nació en los años 60 como zona residencial promovida por la inmobiliaria Urbis, que había comprado la mayor parte del terreno en 1957. A mediados de los 70 el distrito estaba prácticamente terminado, con grandes conjuntos de bloques y zonas verdes entre ellos.',
    'Aun así, cada barrio tiene su época. Fontarrón se levantó casi por completo en los 50 y 60; Media Legua mezcla viviendas de esos años al sur con otras de los 70, 80 y 90 al norte; Horcajo es el barrio más reciente. Es normal encontrar pisos que se reforman por dentro y estrenan cocina o armarios empotrados.',
  ],
  accesos:
    'El distrito queda encajado entre la M-30 al oeste, la M-40 al este, la A-3 al sur y la M-23 (el eje de O\'Donnell) al norte. Por dentro lo cruzan la avenida de Moratalaz, el camino de Vinateros y la avenida del Doctor García Tapia. La línea 9 de metro para en Estrella, Vinateros, Artilleros y Pavones.',
  aparcamiento:
    'Las zonas verdes entre bloques son una ventaja para vivir, pero a veces alejan el portal de la calle. Si la furgoneta no puede parar cerca de tu portal, cuéntanos por dónde se accede mejor y lo tenemos en cuenta al calcular el tiempo.',
  dificultades: [
    {
      titulo: 'Portales retirados de la calle',
      texto:
        'En muchos conjuntos de bloques hay que cruzar jardines o pasos peatonales desde la calle hasta el portal. Las cajas pesadas se llevan en varios viajes, por eso nos ayuda saber la distancia.',
    },
    {
      titulo: 'Reformas de cocina',
      texto:
        'En pisos de los 60 y 70 es frecuente cambiar la cocina entera. Recuerda que el montaje no incluye fontanería ni electricidad: conviene que las tomas estén donde marca el plano de la cocina nueva.',
    },
  ],
  proceso:
    'Te pedimos los muebles, el barrio y cómo es el acceso al portal. Con una foto del albarán o del plano te damos un presupuesto ajustado. El día del montaje subimos, montamos, nivelamos y fijamos a la pared lo que lo necesite.',
  consejos: [
    'Dinos cómo se llega al portal',
    'Revisa las tomas de agua y luz',
    'Ten a mano el plano de la cocina',
    'Indica la planta del piso',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en Fontarrón y en Vinateros?',
      respuesta: 'Sí, y también en Pavones, Horcajo, Marroquina y Media Legua.',
    },
    {
      pregunta: 'Estoy reformando la cocina, ¿la montáis?',
      respuesta: 'Sí, con los electrodomésticos colocados. La fontanería, la electricidad y la encimera de piedra no están incluidas en el montaje.',
    },
    {
      pregunta: 'Mi portal está lejos de la calle, ¿cambia algo?',
      respuesta: 'Solo la organización. Indícalo en el formulario y lo tenemos en cuenta en el presupuesto.',
    },
    {
      pregunta: '¿Montáis armarios empotrados por dentro?',
      respuesta: 'Montamos interiores modulares de armario, como baldas, barras y cajoneras. Si es un trabajo a medida, cuéntanoslo y lo valoramos.',
    },
    {
      pregunta: '¿Por dónde entráis al distrito?',
      respuesta: 'Moratalaz queda entre la M-30 y la M-40, así que entramos por la que quede más cerca de tu calle.',
    },
  ],
  cerca: ['vicalvaro', 'ciudad-lineal', 'san-blas'],
  servicios: ['montaje-cocinas-madrid', 'montaje-muebles-a-medida-madrid'],
  imagen: './images/cocina-mediana.webp',
  imagenAlt: 'Cocina mediana recién montada',
  fuentes: [{ texto: 'Moratalaz, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Moratalaz' }],
};
