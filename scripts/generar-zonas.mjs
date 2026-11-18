// Genera src/app/contenido/zonas/index.ts con todas las zonas de la carpeta.
// Para añadir una zona basta con crear su archivo: este script la incluye en el próximo build.
import fs from 'node:fs';
import path from 'node:path';

const Z = path.join(import.meta.dirname, '..', 'src', 'app', 'contenido', 'zonas');
const NO_ZONAS = new Set(['index.ts', 'tipos.ts', 'pagina-de-zona.ts']);

const zonas = fs
  .readdirSync(Z)
  .filter((f) => f.endsWith('.ts') && !f.endsWith('.spec.ts') && !NO_ZONAS.has(f))
  .sort()
  .map((f) => {
    const s = fs.readFileSync(path.join(Z, f), 'utf8');
    const m = s.match(/export const (\w+): ZonaContenido = \{/);
    if (!m) throw new Error(`${f} no exporta una ZonaContenido`);
    const slug = s.match(/\n  slug: '([^']+)'/)?.[1];
    if (`${slug}.ts` !== f) throw new Error(`${f}: el slug '${slug}' debe coincidir con el nombre del archivo`);
    return { archivo: f.slice(0, -3), constante: m[1] };
  });

const salida = `// Archivo generado por scripts/generar-zonas.mjs. No lo edites a mano.
import { PaginaSeo } from '../../landing/pagina-seo';
${zonas.map((z) => `import { ${z.constante} } from './${z.archivo}';`).join('\n')}
import { paginaDeZona } from './pagina-de-zona';
import { ZonaContenido } from './tipos';

/** Todas las zonas con contenido propio, por orden alfabético de archivo. */
export const ZONAS_CONTENIDO: ZonaContenido[] = [
${zonas.map((z) => `  ${z.constante},`).join('\n')}
];

export const PAGINAS_ZONAS_CONTENIDO: PaginaSeo[] = ZONAS_CONTENIDO.map(paginaDeZona);
`;

const destino = path.join(Z, 'index.ts');
if (!fs.existsSync(destino) || fs.readFileSync(destino, 'utf8') !== salida) fs.writeFileSync(destino, salida);
console.log(`Zonas: ${zonas.length}`);
