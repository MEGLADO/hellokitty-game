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

// Particle sprite atlas: 4 x 2 cells.
// 0 glow, 1 star, 2 heart, 3 sparkle, 4 confetti, 5 ring, 6 petal, 7 puff
export function particleAtlas() {
  const cell = 128;
  const [c, g] = canvas(cell * 4, cell * 2);
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
    g.lineWidth = 9;
    g.beginPath();
    g.arc(x, y, 48, 0, Math.PI * 2);
    g.stroke();
    glow(x, y, 60, 0.25);
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
  const t = finish(c, {});
  return t;
}
