import { PaginaSeo, meta } from '../../landing/pagina-seo';
import { PRECIOS_EXTRA } from '../../datos/precios-extra';
import { ZonaContenido } from './tipos';

export const pathDeZona = (slug: string): string => `montador-muebles-${slug}`;

/** Título de 60 caracteres o menos: con la marca si cabe. */
function tituloZona(nombre: string): string {
  const base = `Montador de muebles en ${nombre}`;
  const conMarca = `${base} | ArmaMuebles`;
  return conMarca.length <= 60 ? conMarca : base;
}

/** Convierte el contenido de una zona en una página de la plantilla común. */
export function paginaDeZona(z: ZonaContenido): PaginaSeo {
  const enZona = z.tipo === 'distrito' ? `${z.nombre} (Madrid)` : z.nombre;
  return {
    path: pathDeZona(z.slug),
    tipo: 'zona',
    padre: 'zonas',
    title: tituloZona(z.nombre),
    description: meta(z.ventajas, z.frase),
    etiqueta: `Montador de muebles en ${z.nombre}`,
    zona: z.nombre,
    h1: { antes: 'Montador de', resaltado: `muebles en ${z.nombre}`, despues: '' },
    kicker: z.tipo === 'distrito' ? `Distrito de ${z.nombre}` : `Municipio de ${z.nombre}`,
    h2: `Montar muebles en ${enZona}: lo que conviene saber`,
    intro: z.intro,
    parrafos: [...z.viviendas, z.accesos, z.aparcamiento],
    puntos: z.consejos,
    bloques: [
      { titulo: `Barrios de ${z.nombre} donde montamos`, texto: `${z.barrios.join(', ')}.` },
      ...z.dificultades,
      { titulo: `Cómo organizamos el montaje en ${z.nombre}`, texto: z.proceso },
    ],
    // Lo que cuesta llegar: en la capital va en el servicio mínimo; fuera, el desplazamiento.
    preciosExtra: [PRECIOS_EXTRA[z.tipo === 'distrito' ? 0 : 1]],
    faqs: z.faqs,
    servicio: {
      nombre: `Montaje de muebles en ${z.nombre}`,
      descripcion: `Montaje de muebles y cocinas a domicilio en ${enZona}.`,
    },
    imagen: z.imagen,
    imagenAlt: z.imagenAlt,
    ids: [1, 5, 9, 11],
    fuentes: z.fuentes,
    relacionadas: [...z.cerca.map(pathDeZona), ...z.servicios, 'precios'],
  };
}
