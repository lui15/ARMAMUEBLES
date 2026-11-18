// Genera dist/arma-muebles/browser/sitemap.xml con todas las páginas prerenderizadas e
// indexables. Se ejecuta solo después de "npm run build" (script "postbuild").
// Excluye las páginas con noindex (legales) y la de error.
import fs from 'node:fs';
import path from 'node:path';

const SITIO = 'https://armamuebles.es';
const RAIZ = 'dist/arma-muebles/browser';
const hoy = new Date().toISOString().slice(0, 10);

function paginas(dir, base = '') {
  const lista = [];
  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entrada.isDirectory()) continue;
    const ruta = path.join(dir, entrada.name);
    const html = path.join(ruta, 'index.html');
    if (fs.existsSync(html)) lista.push({ url: `${base}/${entrada.name}`, html });
    lista.push(...paginas(ruta, `${base}/${entrada.name}`));
  }
  return lista;
}

const todas = [{ url: '', html: path.join(RAIZ, 'index.html') }, ...paginas(RAIZ)];
const indexables = todas.filter(
  ({ html }) => !/name="robots" content="noindex/.test(fs.readFileSync(html, 'utf8')),
);

const prioridad = (url) => (url === '' ? '1.0' : '0.8');
const filas = indexables
  .sort((a, b) => a.url.localeCompare(b.url))
  .map(
    ({ url }) =>
      `  <url>\n    <loc>${SITIO}${url ? url + '/' : '/'}</loc>\n    <lastmod>${hoy}</lastmod>\n    <priority>${prioridad(url)}</priority>\n  </url>`,
  );

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${filas.join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${indexables.length} URL (de ${todas.length} páginas prerenderizadas)`);
