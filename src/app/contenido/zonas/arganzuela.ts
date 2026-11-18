import { ZonaContenido } from './tipos';

export const ARGANZUELA: ZonaContenido = {
  slug: 'arganzuela',
  nombre: 'Arganzuela',
  tipo: 'distrito',
  frase: 'Delicias, Legazpi, Acacias, Imperial y Madrid Río.',
  ventajas: ['Presupuesto ajustado', 'Nos llevamos los cartones', 'Trato cercano'],
  intro:
    'Montamos muebles en Arganzuela, el distrito entre el Manzanares y Atocha. Tiene unos 153 000 vecinos en siete barrios, todos dentro de la M-30, y una historia industrial que todavía se ve en sus calles junto a pisos de construcción mucho más reciente.',
  barrios: ['Imperial', 'Las Acacias', 'La Chopera', 'Legazpi', 'Las Delicias', 'Palos de la Frontera', 'Atocha'],
  viviendas: [
    'En el siglo XIX el ferrocarril y el ensanche convirtieron esta zona en el barrio industrial de Madrid: la Fábrica de Tabacos de Embajadores, la de Osram en Santa María de la Cabeza o el Mercado de Frutas y Hortalizas de Legazpi, abierto en 1935. Casi todas aquellas instalaciones han desaparecido.',
    'En su lugar llegaron viviendas nuevas, el Pasillo Verde Ferroviario y, más tarde, Madrid Río a lo largo del Manzanares. Hoy conviven edificios de principios del siglo XX, como los de la Colonia del Pico del Pañuelo, con bloques de las últimas décadas, donde es habitual montar cocinas y dormitorios enteros.',
  ],
  accesos:
    'Los paseos de las Delicias y de Santa María de la Cabeza son los grandes ejes, junto con las rondas de Atocha y Toledo. En metro llegan las líneas 1, 3, 5 y 6, con paradas en Legazpi, Delicias, Acacias, Pirámides o Méndez Álvaro, y en Cercanías están Atocha, Embajadores y las estaciones del Pasillo Verde.',
  aparcamiento:
    'En los paseos principales hay tráfico constante, pero las calles interiores suelen dar más margen para descargar. Junto a Madrid Río algunos tramos son peatonales: dinos por qué calle se llega mejor a tu portal.',
  dificultades: [
    {
      titulo: 'Edificios antiguos junto a pisos nuevos',
      texto:
        'En los inmuebles de principios del siglo XX las escaleras pueden ser estrechas; en las promociones recientes, el reto es montar la casa entera en poco tiempo. Cuéntanos cuál es tu caso.',
    },
    {
      titulo: 'Portales junto a zonas peatonales',
      texto:
        'Cerca de Madrid Río o del Matadero hay calles sin acceso para vehículos. Acordamos contigo el punto de parada más cercano.',
    },
  ],
  proceso:
    'Nos dices qué muebles son y en qué calle vives. Si el portal da a zona peatonal, buscamos el acceso más cercano. Te damos un presupuesto ajustado, montamos y nos llevamos todos los cartones.',
  consejos: [
    'Indica si tu portal da a zona peatonal',
    'Mándanos fotos de la escalera',
    'Junta las cajas en una habitación',
    'Revisa que han llegado todas las piezas',
  ],
  faqs: [
    {
      pregunta: '¿Montáis en Legazpi y en Delicias?',
      respuesta: 'Sí, y en el resto de barrios: Imperial, Acacias, La Chopera, Palos de la Frontera y Atocha.',
    },
    {
      pregunta: 'Vivo junto a Madrid Río y no se puede aparcar en la puerta, ¿qué hacemos?',
      respuesta: 'Paramos en la calle con acceso más cercana y llevamos las piezas a mano hasta tu portal.',
    },
    {
      pregunta: 'Me mudo a un piso nuevo en Méndez Álvaro, ¿montáis todo?',
      respuesta: 'Sí. Pásanos la lista de lo que llega y te decimos cuántas horas lleva y si conviene repartirlo en dos días.',
    },
    {
      pregunta: 'Mi edificio es de principios del siglo XX, ¿cambia algo?',
      respuesta: 'Solo la preparación: mándanos una foto de la escalera y del ascensor si lo hay.',
    },
    {
      pregunta: '¿Retiráis el embalaje?',
      respuesta: 'Sí. Nos llevamos cartones y plásticos al terminar.',
    },
  ],
  cerca: ['retiro', 'usera', 'carabanchel', 'latina', 'puente-de-vallecas'],
  servicios: ['montaje-cocinas-madrid', 'montaje-dormitorios-madrid'],
  imagen: './images/cocina-mediana.webp',
  imagenAlt: 'Cocina mediana montada',
  fuentes: [{ texto: 'Arganzuela, en Wikipedia', url: 'https://es.wikipedia.org/wiki/Arganzuela' }],
};
