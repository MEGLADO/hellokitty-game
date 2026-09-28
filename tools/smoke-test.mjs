// Loads the game in a phone-sized headless Chromium, plays a little and
// saves screenshots. Usage: node tools/smoke-test.mjs [outDir] [scenario]
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
const out = process.argv[2] || join(root, 'build', 'shots');
const scenario = process.argv[3] || 'full';
await mkdir(out, { recursive: true });

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  let p = decodeURIComponent(url.pathname);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const data = await readFile(join(root, p));
    res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;

const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
});
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
});
const page = await context.newPage();
const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`);
});
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`));

const scenarios = {
  run: 'quality=high&god&debug',
  night: 'quality=high&god&debug&start=1450',
  sunset: 'quality=high&god&debug&start=760',
  crash: 'quality=high&debug&start=400',
  wardrobe: 'quality=high&debug',
  title: 'quality=high&debug',
  bot: 'quality=low&debug',
  mechanics: 'quality=low&debug',
  flow: 'quality=low',
  regress: 'quality=low',
  worlds: 'quality=high&debug',
  juice: 'quality=high&debug',
  pads: 'quality=low&debug',
  missions: 'quality=low',
};
const q = process.env.Q || scenarios[scenario] || scenarios.run;
await page.goto(`http://localhost:${port}/index.html?${q}`, { waitUntil: 'load' });
const wait = (ms) => page.waitForTimeout(ms);
const shot = async (name) => {
  await page.screenshot({ path: join(out, `${scenario}-${name}.png`) });
  console.log('shot', `${scenario}-${name}`);
};
const state = () => page.evaluate(() => window.__game && window.__game.state);
const info = () => page.evaluate(() => {
  const g = window.__game;
  return { state: g.state, dist: g.dist.toFixed(1), score: Math.floor(g.score || 0), hearts: g.runHearts, speed: g.speed.toFixed(1), obstacles: g.track.obstacles.length, items: g.track.items.length, calls: g.drawCalls, tris: g.renderer.info.render.triangles };
});
const play = () => page.evaluate(() => document.getElementById('btn-play').click());

await page.evaluate(() => { try { localStorage.setItem('hk-dream-dash-v1', JSON.stringify({ runs: 5, hearts: 420, best: 1234 })); } catch (e) {} });
await page.reload({ waitUntil: 'load' });
await wait(3000);
console.log('state:', await state());
await shot('01-title');

if (scenario === 'run') {
  await play();
  await wait(1800);
  await shot('02-run-start');
  await page.keyboard.press('ArrowLeft');
  await wait(900);
  await shot('03-left');
  await page.keyboard.press('ArrowUp');
  await wait(250);
  await shot('04-jump');
  await wait(1200);
  await page.keyboard.press('ArrowDown');
  await wait(200);
  await shot('05-slide');
  await page.evaluate(() => window.__game.activate('rush', window.__game.player.x, 1, 0));
  await wait(1500);
  await shot('06-rush');
  await wait(6000);
  await page.evaluate(() => window.__game.activate('magnet', window.__game.player.x, 1, 0));
  await page.evaluate(() => window.__game.activate('shield', window.__game.player.x, 1, 0));
  await wait(1500);
  await shot('07-magnet-shield');
  console.log('info:', JSON.stringify(await info()));
} else if (scenario === 'night' || scenario === 'sunset') {
  await play();
  await wait(4000);
  await shot('02-run');
  await page.keyboard.press('ArrowRight');
  await wait(3000);
  await shot('03-run');
  console.log('info:', JSON.stringify(await info()));
} else if (scenario === 'crash') {
  await play();
  await wait(2000);
  await page.evaluate(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d);
    t.nextS = Infinity;
    t.addObstacle('block', g.player.lane, d + 18, { kind: 'cake' });
    t.addLine(g.player.lane, d + 4, 5);
  });
  for (let i = 0; i < 90; i++) {
    await wait(500);
    const st = await state();
    if (st === 'dying') await shot('02-dying');
    if (st === 'over') break;
  }
  await wait(800);
  await shot('03-over');
  console.log('info:', JSON.stringify(await info()));
} else if (scenario === 'gallery') {
  await play();
  await wait(1500);
  await page.evaluate(() => {
    const g = window.__game;
    g.freeze = true;
  });
  await wait(2500);
  const setup = (fn) => page.evaluate(fn);
  await setup(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d);
    t.nextS = Infinity;
    t.addObstacle('barrier', -1, d + 9);
    t.addObstacle('gate', 0, d + 9);
    t.addObstacle('block', 1, d + 9, { kind: 'gift' });
    t.addLine(0, d + 3, 2);
  });
  await wait(1200);
  await shot('02-barrier-gate-gift');
  await setup(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d);
    t.nextS = Infinity;
    t.addObstacle('block', -1, d + 9, { kind: 'cake' });
    t.addObstacle('block', 0, d + 9, { kind: 'cupcake' });
    t.addObstacle('yarn', 1, d + 9, { move: 0 });
  });
  await wait(1200);
  await shot('03-cake-cupcake-yarn');
  await setup(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d);
    t.nextS = Infinity;
    t.addObstacle('ramp', 0, d + 12);
    t.addObstacle('train', 0, d + 12, { cars: 2 });
    t.addObstacle('train', 1, d + 8, { cars: 2 });
    t.addItem('apple', -1, d + 6, 1.0);
    t.addPower('magnet', -1, d + 10);
    t.addPower('rush', -1, d + 14);
    t.addPower('shield', -1, d + 18);
    t.addPower('double', -1, d + 22);
  });
  await wait(1200);
  await shot('04-train-powerups');
} else if (scenario === 'bot') {
  // autopilot: reads the upcoming track and swipes like a player would
  await page.evaluate(() => {
    const g = window.__game;
    g.botLog = [];
    const hardFor = (o, p) => o.type === 'block' || o.type === 'yarn' || (o.type === 'train' && p.y < o.top - 0.3 && !g.track.obstacles.some((r) => r.type === 'ramp' && r.lane === o.lane && Math.abs(r.sb - o.sa) < 0.01));
    g.botStats = { onTrain: 0, jumps: 0, slides: 0 };
    g.botRevives = [];
    const tick = () => {
      requestAnimationFrame(tick);
      // take the first "keep going?" of each run, then let the run end
      if (g.state === 'revive') {
        if (g.revives < 1) {
          g.botRevives.push({ metres: Math.round(g.dist - g.runStart), ...g.lastDeath });
          g.revive();
        } else g.declineRevive();
        return;
      }
      if (g.state !== 'playing') return;
      const p = g.player, t = g.track, d = g.dist, v = Math.max(g.speed, 1);
      if (p.grounded && p.y > 1.9) g.botStats.onTrain++;
      const ahead = (lane, range) => t.obstacles.filter((o) => o.lane === lane && !o.dead && o.sb > d - 0.4 && o.sa < d + range);
      const laneSafe = (lane) => !ahead(lane, v * 1.1 + 3).some((o) => hardFor(o, p) && o.sa > d - 0.2);
      // dodge hard stuff
      const threat = ahead(p.lane, v * 0.75 + 2).find((o) => hardFor(o, p) && o.sa > d);
      if (threat) {
        const options = [p.lane - 1, p.lane + 1].filter((l) => l >= -1 && l <= 1).sort((a, b) => Math.abs(a) - Math.abs(b));
        const target = options.find(laneSafe) ?? (laneSafe(p.lane - 2) ? p.lane - 1 : laneSafe(p.lane + 2) ? p.lane + 1 : null);
        if (target !== null && target !== undefined && Math.abs(p.x - p.lane * 2.1) < 0.3) g.onAction(target < p.lane ? 'left' : 'right');
        return;
      }
      const next = ahead(p.lane, v * 0.5 + 1).filter((o) => o.sa > d).sort((a, b) => a.sa - b.sa)[0];
      if (!next) return;
      const tta = (next.sa - d - 0.3) / v;
      if (next.type === 'barrier' && tta < 0.26 && p.grounded) { g.onAction('up'); g.botStats.jumps++; }
      if (next.type === 'gate' && tta < 0.3 && !p.sliding) { g.onAction('down'); g.botStats.slides++; }
    };
    tick();
  });
  await play();
  const deaths = [];
  const t0 = Date.now();
  while (Date.now() - t0 < 150000) {
    await wait(1000);
    const s = await page.evaluate(() => ({ state: window.__game.state, dist: window.__game.dist, start: window.__game.runStart, death: window.__game.lastDeath }));
    if (s.state === 'over') {
      deaths.push({ metres: Math.round(s.dist - s.start), ...s.death });
      if (deaths.length === 1) await shot('02-bot-over');
      await page.evaluate(() => { window.__game.lastDeath = null; document.getElementById('btn-again').click(); });
    }
  }
  const final = await page.evaluate(() => ({ dist: Math.round(window.__game.dist - window.__game.runStart), state: window.__game.state }));
  console.log('bot deaths:', deaths.length, JSON.stringify(deaths, null, 0));
  console.log('current run metres:', final.dist, final.state, JSON.stringify(await page.evaluate(() => window.__game.botStats)));
  console.log('bot revives:', JSON.stringify(await page.evaluate(() => window.__game.botRevives)));
  console.log('level:', JSON.stringify(await page.evaluate(() => ({ level: window.__game.missions.level, missions: window.__game.missions.list().map((m) => `${m.text} ${m.progress}/${m.target}`) }))));
} else if (scenario === 'mechanics') {
  await play();
  await wait(2000);
  const results = {};
  // helper: set up a layout and watch the kitty for a while
  const run = async (name, setupFn, ms, watchFn) => {
    await page.evaluate(setupFn);
    const samples = [];
    const t0 = Date.now();
    while (Date.now() - t0 < ms) {
      await wait(100);
      samples.push(await page.evaluate(watchFn));
    }
    results[name] = samples;
  };
  const watch = () => {
    const g = window.__game, p = g.player;
    const o = g.track.obstacles[0];
    return { st: g.state, y: +p.y.toFixed(2), lane: p.lane, x: +p.x.toFixed(2), sl: p.sliding, ahead: o ? +(o.sa - g.dist).toFixed(1) : null };
  };
  // 1. ramp + train in her lane
  await run('ramp', () => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d); t.nextS = Infinity;
    t.addObstacle('ramp', g.player.lane, d + 20);
    t.addObstacle('train', g.player.lane, d + 20, { cars: 2 });
  }, 5000, watch);
  // 2. barrier: jump when close
  await run('barrier', () => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d); t.nextS = Infinity;
    const o = t.addObstacle('barrier', g.player.lane, d + 25);
    const tick = () => {
      if (g.state !== 'playing') return;
      const tta = (o.sa - g.dist - 0.3) / g.speed;
      if (tta < 0.25 && tta > 0) { g.onAction('up'); return; }
      requestAnimationFrame(tick);
    };
    tick();
  }, 3500, watch);
  // 3. gate: slide when close
  await run('gate', () => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d); t.nextS = Infinity;
    const o = t.addObstacle('gate', g.player.lane, d + 25);
    const tick = () => {
      if (g.state !== 'playing') return;
      const tta = (o.sa - g.dist - 0.3) / g.speed;
      if (tta < 0.28 && tta > 0) { g.onAction('down'); return; }
      requestAnimationFrame(tick);
    };
    tick();
  }, 3500, watch);
  // 4. side bump: long train in the neighbour lane, try to switch into it
  await run('bump', () => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d); t.nextS = Infinity;
    const lane = g.player.lane === 1 ? 0 : g.player.lane + 1;
    t.addObstacle('train', lane, d + 2, { cars: 3 });
    setTimeout(() => g.onAction(lane > g.player.lane ? 'right' : 'left'), 300);
  }, 2500, watch);
  // 5. hearts get collected
  const before = await page.evaluate(() => window.__game.runHearts);
  await page.evaluate(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d); t.nextS = Infinity;
    t.addLine(g.player.lane, d + 10, 8);
  });
  await wait(2500);
  const after = await page.evaluate(() => window.__game.runHearts);
  const summary = {};
  for (const [k, v] of Object.entries(results)) {
    summary[k] = { alive: v.every((x) => x.st === 'playing'), maxY: Math.max(...v.map((x) => x.y)), lanes: [...new Set(v.map((x) => x.lane))], slid: v.some((x) => x.sl) };
  }
  summary.hearts = after - before;
  console.log('mechanics:', JSON.stringify(summary));
} else if (scenario === 'flow') {
  const click = (id) => page.evaluate((i) => document.getElementById(i).click(), id);
  const visible = () => page.evaluate(() => ['title', 'hud', 'pause', 'over', 'wardrobe', 'help', 'revive', 'missions'].filter((id) => !document.getElementById(id).hidden).join(','));
  const log = async (label) => console.log(label.padEnd(18), (await state()).padEnd(10), await visible());
  await log('start');
  await click('btn-help'); await wait(400); await log('help');
  await click('help-close'); await wait(300); await log('help closed');
  await click('btn-missions'); await wait(400); await log('missions');
  await page.mouse.click(20, 20); await wait(300); await log('backdrop closes');
  await click('btn-music'); await click('btn-sound'); await wait(200); await log('muted');
  await click('btn-music'); await click('btn-sound');
  await click('btn-play'); await wait(1500); await log('playing');
  await click('btn-pause'); await wait(400); await log('paused');
  await shot('02-paused');
  await click('btn-resume'); await wait(300); await log('resume→count');
  await wait(2500); await log('after count');
  await page.keyboard.press('KeyP'); await wait(300); await log('key pause');
  await click('btn-home1'); await wait(800); await log('home');
  await click('btn-wardrobe'); await wait(800); await log('wardrobe');
  await click('w-next'); await wait(300);
  await click('w-action'); await wait(600); await log('bought sakura');
  await shot('03-bought');
  const saveNow = await page.evaluate(() => JSON.parse(localStorage.getItem('hk-dream-dash-v1')));
  console.log('save:', JSON.stringify(saveNow));
  await click('w-action'); await wait(1500); await log('play from wardrobe');
  await page.evaluate(() => { const g = window.__game, t = g.track, d = g.dist; t.reset(d); t.nextS = Infinity; t.addObstacle('block', g.player.lane, d + 12); });
  for (let i = 0; i < 20 && (await state()) !== 'revive'; i++) await wait(500);
  await log('keep going?');
  await click('btn-norevive'); await wait(600);
  await log('crashed');
  await click('btn-wardrobe2'); await wait(600); await log('over→wardrobe');
  await click('w-back'); await wait(600); await log('back home');
  await click('btn-play'); await wait(800); await log('play again');
} else if (scenario === 'regress') {
  // replays the bugs found in review; each check prints ok / FAIL
  const cdp = await context.newCDPSession(page);
  const swipe = async (x0, y0, x1, y1, steps = 8) => {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y: y0 }] });
    for (let i = 1; i <= steps; i++) {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x0 + ((x1 - x0) * i) / steps, y: y0 + ((y1 - y0) * i) / steps }] });
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  };
  const check = (name, ok, detail = '') => console.log(`${ok ? 'ok  ' : 'FAIL'} ${name} ${detail}`);
  const g = (fn, arg) => page.evaluate(fn, arg);
  await play();
  await wait(1500);
  await g(() => { const t = window.__game.track; t.reset(window.__game.dist); t.nextS = Infinity; });
  // 1. a long swipe moves exactly one lane
  await g(() => { window.__game.player.lane = -1; window.__game.player.x = -2.1; });
  await swipe(100, 600, 260, 600, 10);
  await wait(300);
  const lane1 = await g(() => window.__game.player.lane);
  check('long swipe moves one lane', lane1 === 0, `(lane ${lane1})`);
  // 2. bump off a train from an edge lane: must not end up inside it
  await g(() => {
    const G = window.__game, t = G.track, d = G.dist;
    t.reset(d); t.nextS = Infinity;
    G.player.lane = -1; G.player.x = -2.1; G.player.prevLane = -1;
    t.addObstacle('train', 0, d - 2, { cars: 3 });
  });
  await wait(200);
  await swipe(100, 600, 260, 600, 10);
  await wait(1500);
  const after = await g(() => ({ st: window.__game.state, lane: window.__game.player.lane }));
  check('side bump off a train is safe', after.st === 'playing' && after.lane === -1, JSON.stringify(after));
  // swipe again right away into the same train: still refused
  await swipe(100, 600, 260, 600, 10);
  await wait(1200);
  const after2 = await g(() => ({ st: window.__game.state, lane: window.__game.player.lane }));
  check('repeat swipe into train refused', after2.st === 'playing', JSON.stringify(after2));
  // 3. rush: hearts collected in the air, none left floating after landing
  await g(() => { const G = window.__game; G.track.reset(G.dist); G.track.nextS = G.dist + 40; });
  const h0 = await g(() => window.__game.runHearts);
  await g(() => window.__game.activate('rush', window.__game.player.x, 1, 0));
  await wait(9000);
  const hRush = await g(() => window.__game.runHearts);
  check('rush collects hearts', hRush - h0 > 0, `(+${hRush - h0})`);
  // end the rush now and make sure no hearts are left hanging out of reach
  await g(() => { window.__game.powers.rush = 0.01; });
  await wait(1500);
  const rush = await g(() => ({ floating: window.__game.track.items.filter((it) => it.y > 4 && it.s > window.__game.dist).length, rushing: window.__game.powers.rush > 0, y: +window.__game.player.y.toFixed(2), st: window.__game.state }));
  check('no unreachable sky hearts after rush', !rush.rushing && rush.floating === 0 && rush.st === 'playing', JSON.stringify(rush));
  // 4. pause menu sound toggles keep the game quiet
  await page.evaluate(() => document.getElementById('btn-pause').click());
  await wait(300);
  await page.evaluate(() => { document.getElementById('btn-music2').click(); document.getElementById('btn-music2').click(); document.getElementById('btn-sound2').click(); document.getElementById('btn-sound2').click(); });
  await wait(300);
  const ctxState = await g(() => window.__game.audio.ctx && window.__game.audio.ctx.state);
  check('pause menu keeps audio suspended', ctxState !== 'running', `(${ctxState})`);
  // 5. second run starts easy (difficulty measured from the run start)
  await page.evaluate(() => document.getElementById('btn-home1').click());
  await wait(500);
  await g(() => { window.__game.dist += 5000; });
  await play();
  await wait(800);
  const firstTypes = await g(() => { const G = window.__game; return [...new Set(G.track.obstacles.filter((o) => o.sa - G.runStart < 220).map((o) => o.type))]; });
  check('second run starts easy', !firstTypes.some((t) => ['train', 'yarn', 'gate', 'ramp'].includes(t)), JSON.stringify(firstTypes));
  // 6. outfit switching doesn't leak geometry
  await g(() => { window.__game.state = 'playing'; window.__game.goHome(); });
  await page.evaluate(() => document.getElementById('btn-wardrobe').click());
  await wait(300);
  const geo0 = await g(() => window.__game.renderer.info.memory.geometries);
  for (let i = 0; i < 21; i++) await page.evaluate(() => document.getElementById('w-next').click());
  await wait(600);
  for (let i = 0; i < 21; i++) await page.evaluate(() => document.getElementById('w-next').click());
  await wait(600);
  const geo1 = await g(() => window.__game.renderer.info.memory.geometries);
  check('outfit switching keeps geometry count flat', geo1 - geo0 < 40, `(${geo0} -> ${geo1})`);
} else if (scenario === 'worlds') {
  // one run per world (and one looking at a border), using the start offset
  const starts = [['candy', 0], ['garden', 650], ['clouds', 1250], ['carnival', 1850], ['border', 540]];
  for (const [name, start] of starts) {
    await page.evaluate((st) => {
      const g = window.__game;
      g.god = true;
      g.startOffset = st;
      if (g.state !== 'title') g.goHome();
      document.getElementById('btn-play').click();
    }, start);
    await wait(4200);
    await shot(`02-${name}`);
    const info2 = await page.evaluate(() => ({ biome: window.__game.world.biomeNow, zone: window.__game.world.zoneNow, calls: window.__game.drawCalls }));
    console.log(name, JSON.stringify(info2));
  }
} else if (scenario === 'juice') {
  // carnival at night with fireworks, hearts flying into the counter, shadows
  await page.evaluate(() => { const g = window.__game; g.god = true; g.startOffset = 1880; document.getElementById('btn-play').click(); });
  await wait(2500);
  await page.evaluate(() => { const g = window.__game; g.fireworks(5); const t = g.track; t.addLine(g.player.lane, g.dist + 6, 12, 1.6); });
  await wait(1700);
  await shot('02-fireworks');
  await wait(1500);
  await shot('03-carnival');
  await page.evaluate(() => { const g = window.__game; g.startOffset = 0; g.goHome(); document.getElementById('btn-play').click(); });
  await wait(2500);
  await page.evaluate(() => { const g = window.__game, t = g.track, d = g.dist; t.addObstacle('train', 1, d + 9, { cars: 2 }); t.addObstacle('block', -1, d + 12, { kind: 'cupcake' }); t.addLine(g.player.lane, d + 4, 10, 1.4); });
  await wait(1300);
  await shot('04-shadows-combo');
  console.log('info:', JSON.stringify(await info()));
} else if (scenario === 'pads') {
  // a jelly trampoline and a Sugar Dash pad in Kitty's lane, no god mode
  await play();
  await wait(1500);
  const d0 = await page.evaluate(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d, g.runStart); t.nextS = Infinity;
    const lane = g.player.lane;
    t.addObstacle('jelly', lane, d + 18);
    t.addObstacle('block', lane, d + 26, { kind: 'cake' });
    t.addObstacle('boost', lane, d + 48);
    t.addObstacle('block', lane, d + 60, { kind: 'gift' });
    t.addObstacle('barrier', lane, d + 70);
    g.padLog = [];
    g.smashN = 0;
    const smash0 = g.smash.bind(g);
    g.smash = (o) => { g.smashN++; smash0(o); };
    const tick = () => { requestAnimationFrame(tick); g.padLog.push([+g.player.y.toFixed(2), g.powers.dash > 0 ? 1 : 0, g.state, +g.dist.toFixed(1)]); };
    tick();
    return d;
  });
  await wait(250);
  await shot('01b-jelly-ahead');
  let shotJelly = false, shotDash = false, shotPad = false;
  for (let i = 0; i < 300; i++) {
    await wait(200);
    const st = await page.evaluate(() => ({ y: window.__game.player.y, dash: window.__game.powers.dash, dist: window.__game.dist, state: window.__game.state }));
    if (!shotPad && st.dist > d0 + 34 && st.y < 0.5) { await shot('02b-pad-ahead'); shotPad = true; }
    if (!shotJelly && st.y > 3) { await shot('02-bounce'); shotJelly = true; }
    if (!shotDash && st.dash > 0) { await wait(300); await shot('03-dash'); shotDash = true; }
    if (st.dist > d0 + 80 || st.state !== 'playing') break;
  }
  await wait(500);
  const log = await page.evaluate((d0) => {
    const L = window.__game.padLog;
    let maxY = 0;
    for (const x of L) maxY = Math.max(maxY, x[0]);
    return { frames: L.length, travelled: +(window.__game.dist - d0).toFixed(1), maxY, dashed: L.some((x) => x[1]), state: window.__game.state, smashed: window.__game.smashN };
  }, d0);
  console.log('pads:', JSON.stringify(log));
} else if (scenario === 'missions') {
  // missions panel, completing a full set mid-run, then the revive offer
  await page.evaluate(() => {
    const g = window.__game;
    g.save.missions = [
      { id: 'jumps', target: 2, progress: 0, done: false },
      { id: 'jelly', target: 1, progress: 0, done: false },
      { id: 'hearts', target: 5, progress: 0, done: false },
    ];
    g.ui.level(g.missions.level, g.missions.doneCount());
  });
  await page.evaluate(() => document.getElementById('btn-missions').click());
  await wait(900);
  await shot('02-panel');
  await page.evaluate(() => document.getElementById('m-close').click());
  await play();
  await wait(1500);
  await page.keyboard.press('ArrowUp');
  await wait(1500);
  await page.keyboard.press('ArrowUp');
  await wait(700);
  await shot('03-mission-done');
  await page.evaluate(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d, g.runStart); t.nextS = Infinity;
    t.addObstacle('jelly', g.player.lane, d + 14);
    t.addLine(g.player.lane, d + 40, 8);
  });
  for (let i = 0; i < 100; i++) {
    await wait(200);
    if (await page.evaluate(() => window.__game.missions.level) > 1) break;
  }
  await wait(1200);
  await shot('04-level-up');
  const lv = await page.evaluate(() => ({ level: window.__game.missions.level, mult: document.getElementById('h-mult').textContent, hidden: document.getElementById('h-mult').hidden, bank: window.__game.save.hearts, list: window.__game.missions.list().map((m) => m.text) }));
  console.log('level:', JSON.stringify(lv));
  // crash into a cake: the revive offer should appear
  await page.evaluate(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d, g.runStart); t.nextS = Infinity;
    t.addObstacle('block', g.player.lane, d + 16, { kind: 'cake' });
    t.addObstacle('barrier', g.player.lane, d + 30);
  });
  for (let i = 0; i < 100; i++) {
    await wait(200);
    if ((await state()) === 'revive') break;
  }
  await wait(600);
  await shot('05-revive');
  const before = await page.evaluate(() => ({ bank: window.__game.save.hearts, run: window.__game.runHearts, cost: window.__game.reviveCost() }));
  await page.evaluate(() => document.getElementById('btn-revive').click());
  await wait(400);
  await shot('06-revived');
  for (let i = 0; i < 60; i++) {
    await wait(200);
    if ((await state()) === 'playing') break;
  }
  await wait(1500);
  const after = await page.evaluate(() => ({ state: window.__game.state, bank: window.__game.save.hearts, run: window.__game.runHearts, revives: window.__game.revives, cost: window.__game.reviveCost(), obstaclesNear: window.__game.track.obstacles.filter((o) => !o.remove && o.sa < window.__game.dist + 20).length }));
  console.log('revive:', JSON.stringify({ before, after }));
  await shot('07-running-again');
  // crash again and let the offer time out
  await page.evaluate(() => {
    const g = window.__game, t = g.track, d = g.dist;
    t.reset(d, g.runStart); t.nextS = Infinity;
    g.player.invincible = 0;
    t.addObstacle('block', g.player.lane, d + 16, { kind: 'gift' });
  });
  for (let i = 0; i < 150; i++) {
    await wait(200);
    if ((await state()) === 'over') break;
  }
  await wait(1200);
  await shot('08-over');
  console.log('final:', JSON.stringify(await info()), await state());
  await page.evaluate(() => document.getElementById('btn-home2').click());
  await wait(1200);
  await shot('09-title');
} else if (scenario === 'wardrobe') {
  await page.evaluate(() => document.getElementById('btn-wardrobe').click());
  await wait(2000);
  await shot('02-wardrobe');
  for (let i = 0; i < 6; i++) {
    await page.evaluate(() => document.getElementById('w-next').click());
    await wait(1200);
    await shot(`03-outfit-${i + 1}`);
  }
  await page.evaluate(() => document.getElementById('w-back').click());
  await page.evaluate(() => document.getElementById('btn-help').click());
  await wait(800);
  await shot('04-help');
}

console.log('errors:', errors.length ? '\n' + errors.join('\n') : 'none');
await browser.close();
server.close();
