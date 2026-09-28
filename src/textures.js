import * as THREE from 'three';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function heartPath(g, x, y, s) {
  g.beginPath();
  g.moveTo(x, y + s * 0.42);
  g.bezierCurveTo(x - s * 0.1, y + s * 0.33, x - s * 0.52, y + s * 0.08, x - s * 0.52, y - s * 0.15);
  g.bezierCurveTo(x - s * 0.52, y - s * 0.37, x - s * 0.36, y - s * 0.49, x - s * 0.21, y - s * 0.49);
  g.bezierCurveTo(x - s * 0.09, y - s * 0.49, x, y - s * 0.41, x, y - s * 0.3);
  g.bezierCurveTo(x, y - s * 0.41, x + s * 0.09, y - s * 0.49, x + s * 0.21, y - s * 0.49);
  g.bezierCurveTo(x + s * 0.36, y - s * 0.49, x + s * 0.52, y - s * 0.37, x + s * 0.52, y - s * 0.15);
  g.bezierCurveTo(x + s * 0.52, y + s * 0.08, x + s * 0.1, y + s * 0.33, x, y + s * 0.42);
  g.closePath();
}

function starPath(g, x, y, outer, inner, points = 5, rot = -Math.PI / 2) {
  g.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = rot + (i / (points * 2)) * Math.PI * 2;
    const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
    if (i === 0) g.moveTo(px, py);
    else g.lineTo(px, py);
  }
  g.closePath();
}

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function finish(c, { repeat = false, aniso = 1, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  return t;
}

// Road: 7.4 units wide, one tile = 8 units long.
export function roadTexture(aniso) {
  const W = 512, H = 512;
  const [c, g] = canvas(W, H);
  g.fillStyle = '#ffb0d2';
  g.fillRect(0, 0, W, H);
  const u = (x) => ((x + 3.7) / 7.4) * W;
  // soft tiles in each lane
  const lanes = [[-3.15, -1.05], [-1.05, 1.05], [1.05, 3.15]];
  lanes.forEach(([a, b], li) => {
    const x0 = u(a), x1 = u(b);
    for (let row = 0; row < 4; row++) {
      const y0 = (row * H) / 4;
      g.fillStyle = (row + li) % 2 === 0 ? '#ffa3c9' : '#ffbfdc';
      roundRect(g, x0 + 7, y0 + 7, x1 - x0 - 14, H / 4 - 14, 16);
      g.fill();
    }
  });
  // tiny hearts
  g.fillStyle = 'rgba(255,255,255,0.55)';
  const hearts = [[-2.1, 0.15], [0, 0.4], [2.1, 0.65], [-2.1, 0.9], [0, 0.9 - 0.75], [2.1, 0.15 + 0.25]];
  for (const [x, v] of hearts) {
    heartPath(g, u(x), v * H, 26);
    g.fill();
  }
  // dashed lane dividers
  g.fillStyle = '#ffffff';
  for (const x of [-1.05, 1.05]) {
    for (let y = 0; y < H; y += H / 2) {
      roundRect(g, u(x) - 7, y + 40, 14, H / 2 - 80, 7);
      g.fill();
    }
  }
  // frosting edges with scallops
  const edgeL = u(-3.15), edgeR = u(3.15);
  g.fillStyle = '#fffafc';
  g.fillRect(0, 0, edgeL, H);
  g.fillRect(edgeR, 0, W - edgeR, H);
  const scallops = 8;
  for (let i = 0; i < scallops; i++) {
    const cy = ((i + 0.5) / scallops) * H;
    g.beginPath();
    g.arc(edgeL, cy, H / scallops / 2, -Math.PI / 2, Math.PI / 2);
    g.fill();
    g.beginPath();
    g.arc(edgeR, cy, H / scallops / 2, Math.PI / 2, Math.PI * 1.5);
    g.fill();
  }
  // sprinkles on the frosting
  const sprinkle = ['#ff6fae', '#7fd6ff', '#ffd23f', '#8ee6b8'];
  for (let i = 0; i < 26; i++) {
    const side = i % 2 === 0 ? 0 : 1;
    const x = side === 0 ? 6 + ((i * 37) % Math.max(1, edgeL - 20)) : edgeR + 18 + ((i * 29) % Math.max(1, W - edgeR - 26));
    const y = (i * 97) % H;
    g.save();
    g.translate(x, y);
    g.rotate(i * 1.3);
    g.fillStyle = sprinkle[i % sprinkle.length];
    roundRect(g, -7, -2.5, 14, 5, 2.5);
    g.fill();
    g.restore();
  }
  const t = finish(c, { aniso });
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

// Grass: mint with flowers. One tile = 12 units.
export function grassTexture(aniso) {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#b8f0cc';
  g.fillRect(0, 0, S, S);
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 0; i < 220; i++) {
    g.fillStyle = rand() > 0.5 ? 'rgba(120, 214, 160, 0.45)' : 'rgba(215, 255, 228, 0.6)';
    g.beginPath();
    g.ellipse(rand() * S, rand() * S, 2 + rand() * 4, 1 + rand() * 2, rand() * 3, 0, Math.PI * 2);
    g.fill();
  }
  const petals = ['#ffffff', '#ff9cc9', '#ffe27a', '#c9b3ff'];
  for (let i = 0; i < 16; i++) {
    const x = rand() * S, y = rand() * S, col = petals[i % petals.length];
    g.fillStyle = col;
    for (let p = 0; p < 5; p++) {
      const a = (p / 5) * Math.PI * 2;
      g.beginPath();
      g.arc(x + Math.cos(a) * 4, y + Math.sin(a) * 4, 3.4, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = col === '#ffe27a' ? '#ff8fbf' : '#ffd23f';
    g.beginPath();
    g.arc(x, y, 2.6, 0, Math.PI * 2);
    g.fill();
  }
  return finish(c, { repeat: true, aniso });
}

// Candy-cane stripes for the curbs.
export function stripeTexture(a = '#ff5f9e', b = '#ffffff') {
  const S = 64;
  const [c, g] = canvas(S, S);
  g.fillStyle = b;
  g.fillRect(0, 0, S, S);
  g.fillStyle = a;
  for (let i = -2; i < 4; i++) {
    g.beginPath();
    g.moveTo(i * 32, 0);
    g.lineTo(i * 32 + 16, 0);
    g.lineTo(i * 32 + 16 + S, S);
    g.lineTo(i * 32 + S, S);
    g.closePath();
    g.fill();
  }
  return finish(c, { repeat: true });
}

// White picket fence with transparent gaps. One tile = 4 units.
export function fenceTexture(aniso) {
  const W = 256, H = 64;
  const [c, g] = canvas(W, H);
  g.clearRect(0, 0, W, H);
  g.fillStyle = '#ffffff';
  roundRect(g, 0, 20, W, 7, 3);
  g.fill();
  roundRect(g, 0, 44, W, 7, 3);
  g.fill();
  for (let i = 0; i < 8; i++) {
    const x = i * 32 + 8;
    g.beginPath();
    g.moveTo(x, H);
    g.lineTo(x, 12);
    g.quadraticCurveTo(x + 8, 0, x + 16, 12);
    g.lineTo(x + 16, H);
    g.closePath();
    g.fill();
  }
  g.fillStyle = 'rgba(255, 170, 205, 0.55)';
  for (let i = 0; i < 8; i++) g.fillRect(i * 32 + 8, 54, 16, 10);
  const t = finish(c, { repeat: true, aniso });
  return t;
}

// Draw something at (x, y) plus its wrapped copies so a tile repeats seamlessly.
function wrapped(W, H, x, y, r, fn) {
  for (const dx of [-W, 0, W]) {
    for (const dy of [-H, 0, H]) {
      const px = x + dx, py = y + dy;
      if (px + r < 0 || px - r > W || py + r < 0 || py - r > H) continue;
      fn(px, py);
    }
  }
}

function seeded(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}

const roadU = (x, W) => ((x + 3.7) / 7.4) * W;

// Strawberry Garden: picnic gingham with lace edges.
export function gardenRoadTexture(aniso) {
  const W = 512, H = 512;
  const [c, g] = canvas(W, H);
  const u = (x) => roadU(x, W);
  g.fillStyle = '#fff3e4';
  g.fillRect(0, 0, W, H);
  const x0 = u(-3.15), x1 = u(3.15);
  g.fillStyle = 'rgba(255, 86, 110, 0.32)';
  for (let x = x0; x < x1; x += 64) g.fillRect(x, 0, 32, H);
  for (let y = 0; y < H; y += 64) g.fillRect(x0, y, x1 - x0, 32);
  // strawberries
  const berry = (x, y) => {
    g.fillStyle = '#ff3d5a';
    g.beginPath();
    g.moveTo(x, y + 20);
    g.bezierCurveTo(x - 22, y + 2, x - 16, y - 16, x, y - 12);
    g.bezierCurveTo(x + 16, y - 16, x + 22, y + 2, x, y + 20);
    g.fill();
    g.fillStyle = '#ffe27a';
    for (const [dx, dy] of [[-6, -4], [5, -3], [0, 5], [-4, 10], [5, 9]]) g.fillRect(x + dx, y + dy, 2.5, 3.5);
    g.fillStyle = '#3fae5a';
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i - 2) * 0.55;
      g.beginPath();
      g.ellipse(x + Math.cos(a) * 7, y - 13 + Math.sin(a) * 3, 6, 2.5, a, 0, Math.PI * 2);
      g.fill();
    }
  };
  berry(u(-2.1), 110);
  berry(u(0), 360);
  berry(u(2.1), 230);
  g.fillStyle = '#ffffff';
  for (const x of [-1.05, 1.05]) {
    for (let y = 0; y < H; y += H / 2) {
      roundRect(g, u(x) - 7, y + 40, 14, H / 2 - 80, 7);
      g.fill();
    }
  }
  // lace doily edges
  const edgeL = u(-3.15), edgeR = u(3.15);
  g.fillRect(0, 0, edgeL, H);
  g.fillRect(edgeR, 0, W - edgeR, H);
  const sc = 10;
  for (let i = 0; i < sc; i++) {
    const cy = ((i + 0.5) / sc) * H;
    g.fillStyle = '#ffffff';
    g.beginPath();
    g.arc(edgeL, cy, H / sc / 2, -Math.PI / 2, Math.PI / 2);
    g.fill();
    g.beginPath();
    g.arc(edgeR, cy, H / sc / 2, Math.PI / 2, Math.PI * 1.5);
    g.fill();
    g.fillStyle = 'rgba(255, 150, 180, 0.55)';
    for (const x of [edgeL * 0.45, edgeR + (W - edgeR) * 0.55]) {
      g.beginPath();
      g.arc(x, cy, 5, 0, Math.PI * 2);
      g.fill();
    }
  }
  const t = finish(c, { aniso });
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

// Cloud Kingdom: a rainbow road with fluffy cloud edges.
export function cloudRoadTexture(aniso) {
  const W = 512, H = 512;
  const [c, g] = canvas(W, H);
  const u = (x) => roadU(x, W);
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, W, H);
  const bands = ['#ff9aae', '#ffc896', '#fff08e', '#aef2bd', '#9fd6ff', '#cdb3ff'];
  bands.forEach((col, i) => {
    const a = u(-3.15 + i * 1.05), b = u(-3.15 + (i + 1) * 1.05);
    g.fillStyle = col;
    g.fillRect(a, 0, b - a + 1, H);
    g.fillStyle = 'rgba(255,255,255,0.28)';
    g.fillRect(a + (b - a) * 0.3, 0, (b - a) * 0.18, H);
  });
  const rand = seeded(11);
  g.fillStyle = 'rgba(255,255,255,0.85)';
  for (let i = 0; i < 16; i++) {
    const x = u(-3.0 + rand() * 6.0), y = rand() * H;
    starPath(g, x, y, 7 + rand() * 5, 2, 4, 0);
    g.fill();
  }
  g.fillStyle = '#ffffff';
  for (const x of [-1.05, 1.05]) {
    for (let y = 0; y < H; y += H / 2) {
      roundRect(g, u(x) - 6, y + 50, 12, H / 2 - 100, 6);
      g.fill();
    }
  }
  const edgeL = u(-3.15), edgeR = u(3.15);
  g.fillRect(0, 0, edgeL, H);
  g.fillRect(edgeR, 0, W - edgeR, H);
  const sc = 6;
  for (let i = 0; i < sc; i++) {
    const cy = ((i + 0.5) / sc) * H;
    g.beginPath();
    g.arc(edgeL, cy, H / sc / 2 + 4, -Math.PI / 2, Math.PI / 2);
    g.fill();
    g.beginPath();
    g.arc(edgeR, cy, H / sc / 2 + 4, Math.PI / 2, Math.PI * 1.5);
    g.fill();
  }
  const t = finish(c, { aniso });
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

// Starlight Carnival: purple tiles, gold stars and bulb-dot lane lines.
export function carnivalRoadTexture(aniso) {
  const W = 512, H = 512;
  const [c, g] = canvas(W, H);
  const u = (x) => roadU(x, W);
  g.fillStyle = '#9a80ee';
  g.fillRect(0, 0, W, H);
  const lanes = [[-3.15, -1.05], [-1.05, 1.05], [1.05, 3.15]];
  lanes.forEach(([a, b], li) => {
    const x0 = u(a), x1 = u(b);
    for (let row = 0; row < 4; row++) {
      const y0 = (row * H) / 4;
      g.fillStyle = (row + li) % 2 === 0 ? '#8a6ee6' : '#aa92f6';
      roundRect(g, x0 + 7, y0 + 7, x1 - x0 - 14, H / 4 - 14, 16);
      g.fill();
      g.fillStyle = '#ffd84a';
      starPath(g, (x0 + x1) / 2, y0 + H / 8, 16, 7);
      g.fill();
    }
  });
  for (const x of [-1.05, 1.05]) {
    for (let y = 8; y < H; y += 32) {
      g.fillStyle = '#fff0a0';
      g.beginPath();
      g.arc(u(x), y, 7, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#ffffff';
      g.beginPath();
      g.arc(u(x) - 2, y - 2, 2.5, 0, Math.PI * 2);
      g.fill();
    }
  }
  const edgeL = u(-3.15), edgeR = u(3.15);
  for (const [a, b] of [[0, edgeL], [edgeR, W]]) {
    g.fillStyle = '#ffffff';
    g.fillRect(a, 0, b - a, H);
    g.save();
    g.beginPath();
    g.rect(a, 0, b - a, H);
    g.clip();
    g.fillStyle = '#ff4f7e';
    for (let y = -64; y < H + 64; y += 32) {
      g.beginPath();
      g.moveTo(a, y);
      g.lineTo(b, y + 20);
      g.lineTo(b, y + 36);
      g.lineTo(a, y + 16);
      g.fill();
    }
    g.restore();
    g.fillStyle = '#ffd23f';
    g.fillRect(a === 0 ? b - 6 : a, 0, 6, H);
  }
  const t = finish(c, { aniso });
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

// Flower meadow for Strawberry Garden (one tile = 12 units).
export function meadowTexture(aniso) {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#a4e89c';
  g.fillRect(0, 0, S, S);
  const rand = seeded(23);
  for (let i = 0; i < 200; i++) {
    g.fillStyle = rand() > 0.5 ? 'rgba(96, 196, 110, 0.45)' : 'rgba(210, 255, 200, 0.55)';
    const x = rand() * S, y = rand() * S, rx = 2 + rand() * 4, ry = 1 + rand() * 2, rot = rand() * 3;
    wrapped(S, S, x, y, 6, (px, py) => {
      g.beginPath();
      g.ellipse(px, py, rx, ry, rot, 0, Math.PI * 2);
      g.fill();
    });
  }
  const petals = ['#ff5c7a', '#ffffff', '#ffd23f', '#ff9ec8', '#c9a0ff', '#ff8a4f'];
  for (let i = 0; i < 34; i++) {
    const x = rand() * S, y = rand() * S, col = petals[i % petals.length], r = 3.2 + rand() * 1.8;
    wrapped(S, S, x, y, 10, (px, py) => {
      g.fillStyle = col;
      for (let p = 0; p < 5; p++) {
        const a = (p / 5) * Math.PI * 2;
        g.beginPath();
        g.arc(px + Math.cos(a) * r, py + Math.sin(a) * r, r * 0.85, 0, Math.PI * 2);
        g.fill();
      }
      g.fillStyle = col === '#ffd23f' ? '#ff7a4f' : '#ffe066';
      g.beginPath();
      g.arc(px, py, r * 0.7, 0, Math.PI * 2);
      g.fill();
    });
  }
  return finish(c, { repeat: true, aniso });
}

// Fluffy cloud sea for Cloud Kingdom.
export function cloudSeaTexture(aniso) {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#efe2ff';
  g.fillRect(0, 0, S, S);
  const rand = seeded(5);
  const puff = (x, y, r, col) => {
    wrapped(S, S, x, y, r, (px, py) => {
      const gr = g.createRadialGradient(px, py - r * 0.25, 0, px, py, r);
      gr.addColorStop(0, col);
      gr.addColorStop(0.65, col);
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr;
      g.beginPath();
      g.arc(px, py, r, 0, Math.PI * 2);
      g.fill();
    });
  };
  for (let i = 0; i < 26; i++) puff(rand() * S, rand() * S, 22 + rand() * 26, i % 3 === 0 ? 'rgba(255, 214, 236, 0.9)' : 'rgba(226, 214, 255, 0.85)');
  for (let i = 0; i < 40; i++) puff(rand() * S, rand() * S, 14 + rand() * 22, 'rgba(255, 255, 255, 0.95)');
  return finish(c, { repeat: true, aniso });
}

// Starlight Carnival ground: minty lawn sprinkled with confetti.
export function carnivalGroundTexture(aniso) {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#7fd8bd';
  g.fillRect(0, 0, S, S);
  const rand = seeded(41);
  const cols = ['#ff6fae', '#ffd23f', '#8fd3ff', '#ffffff', '#c9a0ff'];
  for (let i = 0; i < 70; i++) {
    const x = rand() * S, y = rand() * S, col = cols[i % cols.length], rot = rand() * 3;
    wrapped(S, S, x, y, 8, (px, py) => {
      g.save();
      g.translate(px, py);
      g.rotate(rot);
      g.fillStyle = col;
      roundRect(g, -5, -2, 10, 4, 2);
      g.fill();
      g.restore();
    });
  }
  for (let i = 0; i < 10; i++) {
    const x = rand() * S, y = rand() * S;
    wrapped(S, S, x, y, 10, (px, py) => {
      g.fillStyle = '#fff3a0';
      starPath(g, px, py, 8, 3.5);
      g.fill();
    });
  }
  return finish(c, { repeat: true, aniso });
}

// Diagonal stripes that cycle through several colours.
export function multiStripeTexture(colors) {
  const S = 64 * colors.length;
  const [c, g] = canvas(S, 64);
  const w = S / colors.length;
  for (let i = -colors.length; i < colors.length * 2; i++) {
    g.fillStyle = colors[((i % colors.length) + colors.length) % colors.length];
    g.beginPath();
    g.moveTo(i * w, 0);
    g.lineTo(i * w + w, 0);
    g.lineTo(i * w + w + 64, 64);
    g.lineTo(i * w + 64, 64);
    g.closePath();
    g.fill();
  }
  return finish(c, { repeat: true });
}

export function emptyTexture() {
  const [c, g] = canvas(4, 4);
  g.clearRect(0, 0, 4, 4);
  return finish(c, { repeat: true });
}

export function shadowTexture() {
  const S = 128;
  const [c, g] = canvas(S, S);
  const gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  gr.addColorStop(0, 'rgba(90, 30, 70, 0.55)');
  gr.addColorStop(0.55, 'rgba(90, 30, 70, 0.28)');
  gr.addColorStop(1, 'rgba(90, 30, 70, 0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, S, S);
  return finish(c, {});
}

// Particle sprite atlas: 4 x 4 cells.
// 0 glow, 1 star, 2 heart, 3 sparkle, 4 confetti, 5 ring, 6 petal, 7 puff,
// 8 butterfly (open), 9 streak, 10 gem, 11 wisp, 12 butterfly (folded)
export function particleAtlas() {
  const cell = 128;
  const [c, g] = canvas(cell * 4, cell * 4);
  const ctr = (i) => [(i % 4) * cell + cell / 2, Math.floor(i / 4) * cell + cell / 2];
  const glow = (x, y, r, a = 1) => {
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, `rgba(255,255,255,${a})`);
    gr.addColorStop(0.3, `rgba(255,255,255,${a * 0.45})`);
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  };
  g.fillStyle = '#fff';
  // 0 glow
  {
    const [x, y] = ctr(0);
    glow(x, y, 60);
  }
  // 1 star
  {
    const [x, y] = ctr(1);
    glow(x, y, 58, 0.5);
    g.fillStyle = '#fff';
    starPath(g, x, y, 44, 19);
    g.fill();
  }
  // 2 heart
  {
    const [x, y] = ctr(2);
    g.fillStyle = '#fff';
    heartPath(g, x, y + 4, 96);
    g.fill();
  }
  // 3 sparkle (four point twinkle)
  {
    const [x, y] = ctr(3);
    glow(x, y, 40, 0.8);
    g.fillStyle = '#fff';
    starPath(g, x, y, 58, 7, 4, 0);
    g.fill();
  }
  // 4 confetti
  {
    const [x, y] = ctr(4);
    g.fillStyle = '#fff';
    roundRect(g, x - 34, y - 18, 68, 36, 8);
    g.fill();
  }
  // 5 ring
  {
    const [x, y] = ctr(5);
    g.strokeStyle = '#fff';
    g.lineWidth = 6;
    g.beginPath();
    g.arc(x, y, 50, 0, Math.PI * 2);
    g.stroke();
  }
  // 6 petal
  {
    const [x, y] = ctr(6);
    g.fillStyle = '#fff';
    g.beginPath();
    g.moveTo(x, y + 48);
    g.bezierCurveTo(x - 46, y + 10, x - 30, y - 40, x - 6, y - 44);
    g.lineTo(x, y - 34);
    g.lineTo(x + 6, y - 44);
    g.bezierCurveTo(x + 30, y - 40, x + 46, y + 10, x, y + 48);
    g.fill();
  }
  // 7 puff
  {
    const [x, y] = ctr(7);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      glow(x + Math.cos(a) * 16, y + Math.sin(a) * 16, 40, 0.55);
    }
    glow(x, y, 50, 0.7);
  }
  // 8 & 12 butterfly, wings open and folded
  const butterfly = (i, open) => {
    const [x, y] = ctr(i);
    g.fillStyle = '#fff';
    const w = open ? 1 : 0.35;
    for (const s of [-1, 1]) {
      g.beginPath();
      g.ellipse(x + s * 22 * w, y - 12, 26 * w, 22, s * -0.5, 0, Math.PI * 2);
      g.fill();
      g.beginPath();
      g.ellipse(x + s * 16 * w, y + 16, 17 * w, 15, s * 0.5, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = 'rgba(80, 40, 70, 0.9)';
    roundRect(g, x - 4, y - 26, 8, 52, 4);
    g.fill();
  };
  butterfly(8, true);
  butterfly(12, false);
  // 9 streak
  {
    const [x, y] = ctr(9);
    const gr = g.createLinearGradient(x, y - 60, x, y + 60);
    gr.addColorStop(0, 'rgba(255,255,255,0)');
    gr.addColorStop(0.7, 'rgba(255,255,255,0.8)');
    gr.addColorStop(1, 'rgba(255,255,255,1)');
    g.fillStyle = gr;
    roundRect(g, x - 7, y - 60, 14, 120, 7);
    g.fill();
  }
  // 10 gem
  {
    const [x, y] = ctr(10);
    glow(x, y, 56, 0.4);
    g.fillStyle = '#fff';
    g.beginPath();
    g.moveTo(x, y - 40);
    g.lineTo(x + 28, y);
    g.lineTo(x, y + 40);
    g.lineTo(x - 28, y);
    g.closePath();
    g.fill();
  }
  // 11 wisp
  {
    const [x, y] = ctr(11);
    for (let i = -2; i <= 2; i++) glow(x + i * 16, y + Math.abs(i) * 4, 34 - Math.abs(i) * 4, 0.45);
  }
  const t = finish(c, {});
  return t;
}
