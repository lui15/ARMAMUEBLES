/** Fotos con versiones de 160, 480 y 720 px para el móvil. Anchos de public/images. */
const ANCHOS: Record<string, number> = {
  'armario-abatibles': 735,
  'armario-correderas': 1000,
  'auxiliar': 736,
  'cama': 828,
  'cocina-grande': 736,
  'cocina-isla': 735,
  'cocina-mediana': 1000,
  'cocina-pequena': 1000,
  'comedor': 1000,
  'comoda': 736,
  'electrodomesticos': 736,
  'escritorio': 1000,
  'estanteria': 736,
  'mesita-noche': 736,
  'mueble-completo': 900,
  'mueble-tv': 896,
  'muebles-bano': 735,
  'varios-muebles': 961,
  'vestidor': 736,
  'zapatero': 720
};

const base = (src: string): string => src.replace(/^.*\/images\//, '').replace(/\.webp$/, '');

const variante = (src: string, ancho: number): string => src.replace(/\.webp$/, `-${ancho}.webp`);

/** srcset con las versiones de 480 y 720 px y la original. Null si la foto no tiene versiones. */
export function srcsetDe(src: string): string | null {
  const ancho = ANCHOS[base(src)];
  if (!ancho) return null;
  const medio = ancho > 720 ? `, ${variante(src, 720)} 720w` : '';
  return `${variante(src, 480)} 480w${medio}, ${src} ${ancho}w`;
}

/** Versión de 160 px, para miniaturas. */
export function fotoPequena(src: string): string {
  return ANCHOS[base(src)] ? variante(src, 160) : src;
}
