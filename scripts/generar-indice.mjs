// Genera src/app/landing/indice.generado.ts: un índice ligero de las páginas (ruta, tipo,
// etiqueta y zona) para las rutas, la cabecera, el pie y la portada, sin cargar su contenido.
// Se ejecuta solo antes de "npm run build" y "npm start". El test indice.spec.ts comprueba
// que coincide con PAGINAS.
import fs from 'node:fs';
import path from 'node:path';

const L = 'src/app/landing';
const Z = 'src/app/contenido/zonas';
const leer = (f) => fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

/** Texto de un array exportado (por ejemplo PAGINAS_HUB) dentro de un archivo. */
function bloque(archivo, nombre) {
  const s = leer(archivo);
  const ini = s.indexOf(`export const ${nombre}`);
  if (ini < 0) throw new Error(`No está ${nombre} en ${archivo}`);
  const fin = s.indexOf('\nexport const ', ini + 1);
  return s.slice(ini, fin < 0 ? undefined : fin);
}

/** Literal de texto ('...' o `...`) de una propiedad, sin interpolaciones. */
function texto(objeto, prop) {
  const m = objeto.match(new RegExp(`(?:^|\\n)    ${prop}: (?:'((?:[^'\\\\]|\\\\.)*)'|\`([^\`]*)\`)`));
  if (!m) return undefined;
  const valor = (m[1] ?? m[2]).replace(/\\'/g, "'");
  if (valor.includes('${')) throw new Error(`"${prop}" con interpolación no admitida en el índice: ${valor}`);
  return valor;
}

function paginas(archivo, nombre) {
  const objetos = bloque(archivo, nombre).split(/\n  \{\n/).slice(1);
  return objetos.map((o) => {
    const entrada = { path: texto(o, 'path'), tipo: texto(o, 'tipo'), etiqueta: texto(o, 'etiqueta') };
    const zona = texto(o, 'zona');
    if (zona) entrada.zona = zona;
    if (entrada.path === undefined || !entrada.tipo || !entrada.etiqueta) throw new Error(`Página incompleta en ${archivo}`);
    return entrada;
  });
}

function zonasContenido() {
  const indice = leer(path.join(Z, 'index.ts'));
  const lista = indice.slice(indice.indexOf('ZONAS_CONTENIDO: ZonaContenido[] = ['));
  const constantes = [...lista.matchAll(/^\s+(\w+),$/gm)].map((m) => m[1]);
  const archivos = Object.fromEntries([...indice.matchAll(/import \{ (\w+) \} from '\.\/([\w-]+)';/g)].map((m) => [m[1], m[2]]));
  return constantes.map((c) => {
    const s = leer(path.join(Z, `${archivos[c]}.ts`));
    const slug = s.match(/\n  slug: '([^']+)'/)[1];
    const nombre = s.match(/\n  nombre: '([^']+)'/)[1];
    return { path: `montador-muebles-${slug}`, tipo: 'zona', etiqueta: `Montador de muebles en ${nombre}`, zona: nombre };
  });
}

// Mismo orden que PAGINAS en landing-data.ts.
const indice = [
  ...paginas(`${L}/paginas-hub.ts`, 'PAGINAS_HUB'),
  ...paginas(`${L}/paginas-servicios.ts`, 'PAGINAS_SERVICIOS'),
  ...paginas(`${L}/paginas-nuevas.ts`, 'PAGINAS_SERVICIOS_NUEVOS'),
  ...paginas(`${L}/paginas-marcas.ts`, 'PAGINAS_MARCAS'),
  ...paginas(`${L}/paginas-nuevas.ts`, 'PAGINAS_MARCAS_NUEVAS'),
  ...zonasContenido(),
  ...paginas(`${L}/paginas-guias.ts`, 'PAGINAS_GUIAS'),
  ...paginas(`${L}/paginas-nuevas.ts`, 'PAGINAS_GUIAS_NUEVAS'),
];

const ts = `// ARCHIVO GENERADO por scripts/generar-indice.mjs. No editar a mano.
import { TipoPagina } from './pagina-seo';

export interface EntradaIndice {
  path: string;
  tipo: TipoPagina;
  etiqueta: string;
  zona?: string;
}

export const INDICE_PAGINAS: EntradaIndice[] = ${JSON.stringify(indice, null, 2).replace(/"(\w+)":/g, '$1:').replace(/"/g, "'")};
`;
fs.writeFileSync(`${L}/indice.generado.ts`, ts);
console.log(`indice.generado.ts: ${indice.length} páginas`);
