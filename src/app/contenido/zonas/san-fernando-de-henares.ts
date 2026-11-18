import { ZonaContenido } from './tipos';

export const SAN_FERNANDO_DE_HENARES: ZonaContenido = {
  slug: 'san-fernando-de-henares',
  nombre: 'San Fernando de Henares',
  tipo: 'municipio',
  frase: 'Casco histórico, Parque Henares y urbanizaciones.',
  ventajas: ['Presupuesto ajustado', 'Llevamos herramientas', 'Una sola persona de contacto'],
  intro:
    'Montamos muebles en San Fernando de Henares, un municipio de unos 39 000 vecinos a 15 km de Madrid. Nació en 1746 alrededor de una fábrica real, y esa historia todavía se nota en el centro, muy distinto de los barrios que crecieron después.',
  barrios: ['Casco histórico (plaza de España y plaza de Fernando VI)', 'Plaza del Trébol', 'Ciudad Parque Henares', 'Copasa', 'Fuencasa', 'Parque Henares', 'Zonas de adosados'],
  viviendas: [
    'Fernando VI fundó la población junto a la Real Fábrica de Paños, con viviendas para sus trabajadores. El casco histórico, en torno a la plaza de España y la plaza de Fernando VI, es conjunto histórico-artístico desde 1983; tras su reconstrucción entre 2005 y 2011, la antigua fábrica alberga hoy el ayuntamiento y viviendas.',
    'Fuera del centro, la Plaza del Trébol reúne bloques de los años 60, y Ciudad Parque Henares, Copasa y Fuencasa son urbanizaciones de los 70 y primeros 80. Los barrios de adosados llegaron con el plan de 1988, y Parque Henares es la zona de ensanche.',
  ],
  accesos:
    'Se llega por la A-2 (km 15), la M-40 y la M-45, con la R-3 y la M-50 cerca. La línea 7 de metro tiene estación en el centro del pueblo, y la estación de Cercanías de San Fernando da servicio a las líneas C-2, C-7 y C-8. Al norte quedan el polígono Puerta de Madrid y el parque empresarial.',
  aparcamiento:
    'En el casco histórico, con edificios protegidos y plazas peatonales, la furgoneta no siempre puede acercarse a la puerta. En las urbanizaciones de los 70 y en las zonas de adosados suele ser más sencillo. Si vives en el centro, indícanos por qué calle se llega mejor.',
  dificultades: [
    {
      titulo: 'Viviendas en el casco protegido',
      texto:
        'En los edificios del centro histórico conviene revisar el ancho de puertas y escaleras antes de traer muebles muy grandes. Si tienes dudas, mándanos una foto del acceso.',
    },
    {
      titulo: 'Adosados con escalera interior',
      texto:
        'En las casas de varias plantas, los armarios y las camas suelen ir arriba. Los montamos directamente en la habitación para no tener que subir el mueble ya montado.',
    },
  ],
  proceso:
    'Nos cuentas qué muebles son y en qué barrio vives. En el centro, te preguntamos por el acceso; en un adosado, por la planta de cada mueble. Te damos un presupuesto ajustado y, el día del montaje, una sola persona de contacto te acompaña hasta el final.',
  consejos: [
    'Mándanos una foto del acceso al centro',
    'Monta arriba los muebles de arriba',
    'Revisa el ancho de las puertas',
    'Ten el albarán a mano',
  ],
  faqs: [
    {
      pregunta: '¿Montáis muebles en el casco histórico de San Fernando?',
      respuesta: 'Sí. Cuéntanos por dónde se accede mejor a tu casa y lo organizamos.',
    },
    {
      pregunta: '¿Y en Parque Henares o las urbanizaciones?',
      respuesta: 'Sí, y también en Copasa, Fuencasa y Ciudad Parque Henares.',
    },
    {
      pregunta: '¿Montáis en la Plaza del Trébol?',
      respuesta: 'Sí. Sus bloques son de los años 60, así que te preguntamos antes por la escalera y el ascensor.',
    },
    {
      pregunta: 'Vivo en un adosado de tres plantas, ¿montáis en todas?',
      respuesta: 'Sí. Montamos cada mueble en su planta. Indica en el formulario qué va en cada una.',
    },
    {
      pregunta: '¿Montáis oficinas en el polígono Puerta de Madrid?',
      respuesta: 'Sí: mesas, estanterías y archivadores. Indícanos a qué hora podemos entrar en el edificio.',
    },
  ],
  cerca: ['coslada', 'torrejon-de-ardoz', 'vicalvaro'],
  servicios: ['montaje-camas-canapes-madrid', 'montaje-armarios-madrid'],
  imagen: './images/cama.webp',
  imagenAlt: 'Dormitorio con cama montada',
  fuentes: [
    { texto: 'San Fernando de Henares, en Wikipedia', url: 'https://es.wikipedia.org/wiki/San_Fernando_de_Henares' },
  ],
};
