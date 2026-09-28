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

const only = process.argv[2]; // 'icons' or 'screens' to do just one part

// icons
if (only !== 'screens') {
  for (const [size, file] of [[512, 'icon-512.png'], [192, 'icon-192.png'], [180, 'apple-touch-icon.png']]) {
    const { p, ctx } = await page({ width: size, height: size }, 1, 'shot=icon&quality=high');
    await p.waitForTimeout(3500);
    await p.screenshot({ path: join(root, 'assets', file) });
    await ctx.close();
    console.log('icon', file);
  }
}

// screenshots (portrait phone)
const phone = { width: 390, height: 844 };
const jpg = (name) => ({ path: join(root, 'assets', 'screens', name), type: 'jpeg', quality: 86 });
const player = {
  runs: 3, hearts: 640, best: 18250, level: 3,
  missions: [
    { id: 'jelly', target: 7, progress: 7, done: true },
    { id: 'hearts', target: 90, progress: 64, done: false },
    { id: 'trains', target: 7, progress: 2, done: false },
  ],
};
if (only !== 'icons') {
  {
    const { p, ctx } = await page(phone, 1.5, 'quality=high', player);
    await p.waitForTimeout(3500);
    await p.screenshot(jpg('title.jpg'));
    await p.evaluate(() => document.getElementById('btn-missions').click());
    await p.waitForTimeout(1200);
    await p.screenshot(jpg('missions.jpg'));
    await p.evaluate(() => window.__game.closeMissions());
    await p.evaluate(() => document.getElementById('btn-play').click());
    await p.waitForTimeout(5200);
    await p.screenshot(jpg('run.jpg'));
    await p.evaluate(() => window.__game.activate('rush', window.__game.player.x, 1, 0));
    await p.waitForTimeout(2600);
    await p.screenshot(jpg('rush.jpg'));
    await ctx.close();
    console.log('screens title/missions/run/rush');
  }
  // one shot in each of the other worlds
  for (const [file, start, wait] of [['garden.jpg', 860, 6000], ['clouds.jpg', 1460, 6000], ['carnival.jpg', 2060, 7000]]) {
    const { p, ctx } = await page(phone, 1.5, `quality=high&god&start=${start}`, player);
    await p.waitForTimeout(2500);
    await p.evaluate(() => document.getElementById('btn-play').click());
    await p.waitForTimeout(wait);
    await p.screenshot(jpg(file));
    await ctx.close();
    console.log('screen', file);
  }
  // mid-air off a jelly trampoline
  {
    const { p, ctx } = await page(phone, 1.5, 'quality=high&start=900', player);
    await p.waitForTimeout(2500);
    await p.evaluate(() => document.getElementById('btn-play').click());
    await p.waitForTimeout(2500);
    await p.evaluate(() => {
      const g = window.__game, t = g.track, d = g.dist;
      t.reset(d, g.runStart);
      t.nextS = Infinity;
      t.addObstacle('jelly', g.player.lane, d + 14);
      t.addObstacle('block', g.player.lane, d + 22, { kind: 'cake' });
      t.addObstacle('barrier', g.player.lane - 1 || 1, d + 30);
      t.addLine(g.player.lane, d + 18, 10, 2.2, 4.2);
    });
    for (let i = 0; i < 80; i++) {
      await p.waitForTimeout(100);
      const y = await p.evaluate(() => window.__game.player.y);
      if (y > 3.6) break;
    }
    await p.screenshot(jpg('bounce.jpg'));
    await ctx.close();
    console.log('screen bounce');
  }
  {
    const { p, ctx } = await page(phone, 1.5, 'quality=high', { ...player, hearts: 1200, owned: ['classic', 'sakura', 'princess'], outfit: 'princess' });
    await p.waitForTimeout(2500);
    await p.evaluate(() => document.getElementById('btn-wardrobe').click());
    await p.waitForTimeout(2500);
    await p.screenshot(jpg('wardrobe.jpg'));
    await ctx.close();
    console.log('screen wardrobe');
  }
}
await browser.close();
server.close();
