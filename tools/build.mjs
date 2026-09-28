// Bundles the game and writes index.html (GitHub Pages / any static host)
// plus build/artifact.html (a single self-contained page).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const r = (p) => join(root, p);

await build({
  entryPoints: [r('src/main.js')],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020', 'safari15', 'chrome90', 'firefox90'],
  outfile: r('dist/game.js'),
  legalComments: 'none',
  logLevel: 'warning',
});

const js = readFileSync(r('dist/game.js'), 'utf8');
const css = readFileSync(r('src/style.css'), 'utf8');
const tpl = readFileSync(r('src/template.html'), 'utf8');
const hash = createHash('sha1').update(js).update(css).digest('hex').slice(0, 10);

const fonts = [
  ['Mochiy Pop One', 400, 'mochiy-pop-one-latin-400-normal.woff2'],
  ['M PLUS Rounded 1c', 500, 'm-plus-rounded-1c-latin-500-normal.woff2'],
  ['M PLUS Rounded 1c', 800, 'm-plus-rounded-1c-latin-800-normal.woff2'],
  ['M PLUS Rounded 1c', 900, 'm-plus-rounded-1c-latin-900-normal.woff2'],
];
const fontFaces = (inline) =>
  fonts
    .map(([family, weight, file]) => {
      const src = inline
        ? `data:font/woff2;base64,${readFileSync(r('assets/fonts/' + file)).toString('base64')}`
        : `assets/fonts/${file}`;
      return `@font-face { font-family: "${family}"; font-style: normal; font-weight: ${weight}; font-display: swap; src: url("${src}") format("woff2"); }`;
    })
    .join('\n');

const slice = (a, b) => {
  const i = tpl.indexOf(a), j = tpl.indexOf(b);
  if (i < 0 || j < 0) throw new Error(`missing marker ${a}`);
  return tpl.slice(i + a.length, j).trim();
};

const index = tpl
  .replace('<!--STYLE-->', `<style>\n${css.replace('/*FONTFACES*/', fontFaces(false))}</style>`)
  .replace('<!--SCRIPT-->', `<script type="module" src="dist/game.js?v=${hash}"></script>`)
  .replace(/<!--(FONTS|BODY)-(START|END)-->\n?/g, '');
writeFileSync(r('index.html'), index);

// Artifact flavour: no document wrapper, everything inline.
const title = tpl.match(/<title>.*<\/title>/)[0];
const body = slice('<!--BODY-START-->', '<!--BODY-END-->');
const inlineJs = js.replace(/<\/script/gi, '<\\/script');
mkdirSync(r('build'), { recursive: true });
writeFileSync(
  r('build/artifact.html'),
  `${title}\n<style>\n${css.replace('/*FONTFACES*/', fontFaces(true))}</style>\n${body}\n<script type="module">\n${inlineJs}\n</script>\n`
);

console.log(`built dist/game.js (${(js.length / 1024).toFixed(0)} KB), index.html, build/artifact.html · v=${hash}`);
