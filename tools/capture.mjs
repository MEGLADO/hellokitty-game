// Renders the app icons and README screenshots into assets/.
// Usage: node tools/capture.mjs
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/opt/node22/lib/node_modules/playwright'));
}
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.woff2': 'font/woff2', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const d = await readFile(join(root, p));
    res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' });
    res.end(d);
  } catch {
    res.writeHead(404);
    res.end();
  }
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}/index.html`;
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
await mkdir(join(root, 'assets', 'screens'), { recursive: true });

async function page(viewport, dpr, query, save) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: dpr, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await p.goto(`${base}?${query}`);
  if (save) {
    await p.evaluate((s) => localStorage.setItem('hk-dream-dash-v1', JSON.stringify(s)), save);
    await p.reload();
  }
  return { p, ctx };
}

// icons
for (const [size, file] of [[512, 'icon-512.png'], [192, 'icon-192.png'], [180, 'apple-touch-icon.png']]) {
  const { p, ctx } = await page({ width: size, height: size }, 1, 'shot=icon&quality=high');
  await p.waitForTimeout(3500);
  await p.screenshot({ path: join(root, 'assets', file) });
  await ctx.close();
  console.log('icon', file);
}

// screenshots (portrait phone)
const phone = { width: 390, height: 844 };
{
  const { p, ctx } = await page(phone, 1.5, 'quality=high', { runs: 3 });
  await p.waitForTimeout(3500);
  await p.screenshot({ path: join(root, 'assets', 'screens', 'title.jpg'), type: 'jpeg', quality: 86 });
  await p.evaluate(() => document.getElementById('btn-play').click());
  await p.waitForTimeout(5200);
  await p.screenshot({ path: join(root, 'assets', 'screens', 'run.jpg'), type: 'jpeg', quality: 86 });
  await p.evaluate(() => window.__game.activate('rush', window.__game.player.x, 1, 0));
  await p.waitForTimeout(2600);
  await p.screenshot({ path: join(root, 'assets', 'screens', 'rush.jpg'), type: 'jpeg', quality: 86 });
  await ctx.close();
  console.log('screens title/run/rush');
}
{
  const { p, ctx } = await page(phone, 1.5, 'quality=high&god&start=1450', { runs: 3 });
  await p.waitForTimeout(2500);
  await p.evaluate(() => document.getElementById('btn-play').click());
  await p.waitForTimeout(6000);
  await p.screenshot({ path: join(root, 'assets', 'screens', 'night.jpg'), type: 'jpeg', quality: 86 });
  await ctx.close();
  console.log('screen night');
}
{
  const { p, ctx } = await page(phone, 1.5, 'quality=high', { runs: 3, hearts: 1200, owned: ['classic', 'sakura', 'princess'], outfit: 'princess' });
  await p.waitForTimeout(2500);
  await p.evaluate(() => document.getElementById('btn-wardrobe').click());
  await p.waitForTimeout(2500);
  await p.screenshot({ path: join(root, 'assets', 'screens', 'wardrobe.jpg'), type: 'jpeg', quality: 86 });
  await ctx.close();
  console.log('screen wardrobe');
}
await browser.close();
server.close();
