// Merged, vertex-coloured models for the scenery of each world.
// Every function returns a single BufferGeometry (one draw call per prop type).
import * as THREE from 'three';
import { part, merge, xf, paint, heartGeometry, starGeometry, cloudGeometry, paintedBow } from './geom.js';

export function stripedPole(h, r, a, b, bands, y0 = 0) {
  const parts = [];
  const seg = h / bands;
  for (let i = 0; i < bands; i++) {
    parts.push(part(new THREE.CylinderGeometry(r, r, seg, 10, 1, true), i % 2 ? a : b, { y: y0 + seg * (i + 0.5) }));
  }
  return parts;
}

// Cone or cylinder split into alternating coloured wedges (tents, carousel roofs).
function stripedCone(rTop, rBottom, h, colors, segments, t = {}) {
  const parts = [];
  for (let i = 0; i < segments; i++) {
    const g = new THREE.CylinderGeometry(rTop, rBottom, h, 3, 1, false, (i / segments) * Math.PI * 2, (Math.PI * 2) / segments);
    parts.push(part(g, colors[i % colors.length], t));
  }
  return parts;
}

// ---------------- Candy Town ----------------

export function candyLamp() {
  const parts = stripedPole(2.9, 0.085, '#ff5f9e', '#ffffff', 10);
  const hook = new THREE.TorusGeometry(0.32, 0.085, 8, 18, Math.PI);
  parts.push(part(hook, '#ff5f9e', { x: 0.32, y: 2.9 }));
  parts.push(part(new THREE.CylinderGeometry(0.1, 0.16, 0.18, 12), '#ffffff', { x: 0.64, y: 2.8 }));
  parts.push(part(new THREE.CylinderGeometry(0.17, 0.2, 0.12, 12), '#ffffff', { y: 0.06 }));
  return merge(parts);
}
export const candyLampBulb = () => new THREE.SphereGeometry(0.2, 12, 10).translate(0.64, 2.6, 0);

export function cottonTree() {
  const parts = stripedPole(1.7, 0.13, '#ffe3f0', '#ffffff', 3);
  const blobs = [[0, 2.25, 0, 0.95], [0.6, 1.95, 0.2, 0.62], [-0.55, 2.02, -0.15, 0.66], [0.1, 2.85, 0.1, 0.62], [-0.15, 1.85, 0.5, 0.5]];
  for (const [x, y, z, r] of blobs) parts.push(part(new THREE.SphereGeometry(1, 12, 8), '#ffffff', { x, y, z, s: r }));
  return merge(parts);
}

export function lollipop() {
  const parts = [part(new THREE.CylinderGeometry(0.07, 0.07, 2.3, 8), '#ffffff', { y: 1.15 })];
  const rings = [[0.85, 0.18, '#ff6fae'], [0.66, 0.2, '#ffffff'], [0.47, 0.22, '#ff6fae'], [0.29, 0.24, '#ffffff'], [0.12, 0.26, '#ff6fae']];
  for (const [r, t, c] of rings) parts.push(part(new THREE.CylinderGeometry(r, r, t, 22), c, { y: 2.9, rx: Math.PI / 2 }));
  parts.push(paintedBow('#7fd6ff', { s: 0.5, y: 2.12, z: 0.1 }));
  return merge(parts);
}

export function cottage(wall, roof, door) {
  const parts = [];
  parts.push(part(new THREE.BoxGeometry(2.6, 2.0, 2.4), wall, { y: 1.0 }));
  parts.push(part(new THREE.ConeGeometry(2.15, 1.55, 4), roof, { y: 2.77, ry: Math.PI / 4 }));
  parts.push(part(new THREE.BoxGeometry(0.34, 0.8, 0.34), '#ffffff', { x: -0.6, y: 3.1, z: -0.4 }));
  parts.push(part(new THREE.BoxGeometry(0.42, 0.14, 0.42), roof, { x: -0.6, y: 3.52, z: -0.4 }));
  // front faces +x (toward the road)
  parts.push(part(new THREE.BoxGeometry(0.1, 1.05, 0.66), door, { x: 1.31, y: 0.53 }));
  parts.push(part(new THREE.SphereGeometry(0.05, 8, 6), '#ffd23f', { x: 1.38, y: 0.55, z: 0.18 }));
  for (const z of [-0.78, 0.78]) {
    parts.push(part(new THREE.BoxGeometry(0.08, 0.62, 0.62), '#ffffff', { x: 1.31, y: 1.3, z }));
    parts.push(part(new THREE.BoxGeometry(0.1, 0.48, 0.48), '#bfe8ff', { x: 1.32, y: 1.3, z }));
    parts.push(part(new THREE.BoxGeometry(0.12, 0.14, 0.7), '#ffb3d1', { x: 1.34, y: 0.92, z }));
  }
  parts.push(part(heartGeometry(0.42), '#ff4f97', { x: 1.34, y: 1.35, ry: Math.PI / 2 }));
  return merge(parts);
}

export function mushroom() {
  const parts = [part(new THREE.CylinderGeometry(0.2, 0.26, 0.6, 12), '#fff4ea', { y: 0.3 })];
  parts.push(part(new THREE.SphereGeometry(0.62, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), '#ff5577', { y: 0.55, sy: 0.75 }));
  const dots = [[0.3, 0.8, 0.2], [-0.25, 0.85, 0.25], [0.05, 1.0, -0.1], [-0.3, 0.75, -0.3], [0.32, 0.72, -0.28], [0, 0.78, 0.45]];
  for (const [x, y, z] of dots) parts.push(part(new THREE.SphereGeometry(0.09, 8, 6), '#ffffff', { x, y, z }));
  return merge(parts);
}

export function bush() {
  const parts = [];
  const blobs = [[0, 0.45, 0, 0.6], [0.5, 0.35, 0.1, 0.45], [-0.5, 0.38, -0.05, 0.48], [0.1, 0.7, 0.05, 0.42]];
  for (const [x, y, z, r] of blobs) parts.push(part(new THREE.SphereGeometry(1, 10, 7), '#9fe8b4', { x, y, z, s: r }));
  const flowers = [[0.3, 0.9, 0.3], [-0.4, 0.75, 0.35], [0.6, 0.6, 0.4], [-0.1, 1.05, -0.1], [0, 0.55, 0.55]];
  flowers.forEach(([x, y, z], i) => parts.push(part(new THREE.SphereGeometry(0.1, 8, 6), i % 2 ? '#ff8fc0' : '#fff38a', { x, y, z })));
  return merge(parts);
}

export function heartBalloon() {
  const parts = [part(heartGeometry(1.0, 0.3), '#ffffff', {})];
  parts.push(part(new THREE.CylinderGeometry(0.012, 0.012, 1.8, 4), '#ffffff', { y: -1.35 }));
  return merge(parts);
}

// ---------------- Strawberry Garden ----------------

export function tulipLamp() {
  const parts = [part(new THREE.CylinderGeometry(0.08, 0.11, 2.8, 8), '#58c47a', { y: 1.4 })];
  for (const s of [-1, 1]) {
    parts.push(part(new THREE.SphereGeometry(0.4, 10, 6), '#6fd690', { x: s * 0.28, y: 0.9 + (s > 0 ? 0.4 : 0), sx: 0.85, sy: 0.14, sz: 0.4, rz: s * 0.5 }));
  }
  parts.push(part(new THREE.CylinderGeometry(0.2, 0.24, 0.12, 12), '#ffffff', { y: 0.06 }));
  // petals cupping the glowing bulb
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    parts.push(part(new THREE.SphereGeometry(0.3, 10, 8), '#ff7a9c', { x: Math.cos(a) * 0.2, y: 3.0, z: Math.sin(a) * 0.2, sx: 0.55, sy: 1.05, sz: 0.55, rx: Math.sin(a) * 0.35, rz: -Math.cos(a) * 0.35 }));
  }
  return merge(parts);
}
export const tulipLampBulb = () => new THREE.SphereGeometry(0.19, 12, 10).translate(0, 3.12, 0);

export function appleTree() {
  const parts = [part(new THREE.CylinderGeometry(0.16, 0.26, 1.8, 8), '#9a6a4a', { y: 0.9 })];
  const blobs = [[0, 2.45, 0, 1.15], [0.8, 2.1, 0.2, 0.8], [-0.75, 2.15, -0.1, 0.85], [0.1, 3.1, 0.15, 0.8], [0.2, 2.2, 0.8, 0.7], [-0.2, 2.3, -0.8, 0.7]];
  for (const [x, y, z, r] of blobs) parts.push(part(new THREE.SphereGeometry(1, 12, 8), '#7ed98e', { x, y, z, s: r }));
  const apples = [[0.9, 2.5, 0.6], [-0.9, 2.4, 0.5], [0.3, 3.3, 0.8], [1.2, 2.0, -0.3], [-0.5, 2.0, 1.05], [-1.2, 2.3, -0.5], [0.5, 1.8, -0.9], [0.0, 3.6, -0.4]];
  for (const [x, y, z] of apples) parts.push(part(new THREE.SphereGeometry(0.17, 10, 8), '#ff3b4f', { x, y, z }));
  return merge(parts);
}

export function giantStrawberry() {
  const pts = [];
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    const y = -1 + t * 2;
    // pointy bottom, round shoulders
    const r = Math.sin(Math.min(1, t * 1.25) * Math.PI * 0.5) * (1 - Math.pow(Math.max(0, t - 0.82) / 0.18, 2) * 0.35) * 0.95;
    pts.push(new THREE.Vector2(Math.max(0.001, r), y));
  }
  pts.push(new THREE.Vector2(0.3, 1.03), new THREE.Vector2(0.001, 1.04));
  const body = new THREE.LatheGeometry(pts, 18);
  const parts = [part(body, '#ff4262', { y: 1.0 })];
  let seed = 3;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 26; i++) {
    const t = 0.18 + rand() * 0.62;
    const a = rand() * Math.PI * 2;
    const y = -1 + t * 2;
    const r = Math.sin(Math.min(1, t * 1.25) * Math.PI * 0.5) * 0.95;
    parts.push(part(new THREE.SphereGeometry(0.06, 6, 4), '#ffe27a', { x: Math.cos(a) * r, y: 1 + y, z: Math.sin(a) * r, sy: 1.6 }));
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    parts.push(part(new THREE.SphereGeometry(0.4, 8, 6), '#4fc26b', { x: Math.cos(a) * 0.35, y: 2.02, z: Math.sin(a) * 0.35, sx: 1, sy: 0.12, sz: 0.4, ry: -a }));
  }
  parts.push(part(new THREE.CylinderGeometry(0.06, 0.09, 0.4, 6), '#3f9a55', { y: 2.2 }));
  return merge(parts);
}

export function tulipPatch() {
  const parts = [];
  const cols = ['#ff4f7e', '#ffd23f', '#ff9ec8', '#ffffff', '#ff7a4f'];
  const spots = [[0, 0], [0.45, 0.2], [-0.4, 0.25], [0.2, -0.4], [-0.3, -0.35], [0.6, -0.3]];
  spots.forEach(([x, z], i) => {
    const h = 0.7 + (i % 3) * 0.15;
    parts.push(part(new THREE.CylinderGeometry(0.03, 0.03, h, 5), '#4fae5f', { x, y: h / 2, z }));
    parts.push(part(new THREE.SphereGeometry(0.16, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.62), cols[i % cols.length], { x, y: h + 0.1, z, rx: Math.PI, sy: 1.3 }));
    parts.push(part(new THREE.SphereGeometry(0.2, 6, 4), '#5cc46c', { x: x + 0.08, y: 0.25, z, sx: 0.25, sy: 1, sz: 0.6, rz: -0.3 }));
  });
  return merge(parts);
}

export function giantTeacup() {
  const pts = [[0.001, 0], [0.55, 0.02], [0.7, 0.12], [0.85, 0.45], [0.95, 0.85], [1.0, 1.1], [0.93, 1.12], [0.86, 0.9], [0.001, 0.9]].map(([x, y]) => new THREE.Vector2(x, y));
  const parts = [part(new THREE.LatheGeometry(pts, 24), '#ffb3d1', { y: 0.12 })];
  parts.push(part(new THREE.TorusGeometry(0.97, 0.05, 6, 24), '#ffffff', { y: 1.2, rx: Math.PI / 2 }));
  parts.push(part(new THREE.CylinderGeometry(1.3, 1.15, 0.12, 24), '#ffffff', { y: 0.06 }));
  parts.push(part(new THREE.TorusGeometry(0.3, 0.08, 8, 12, Math.PI * 1.2), '#ffb3d1', { x: 1.0, y: 0.72, rz: -Math.PI * 0.6 }));
  parts.push(part(heartGeometry(0.45, 0.12), '#ff4f97', { y: 0.68, z: 0.92, s: 1 }));
  parts.push(part(new THREE.CylinderGeometry(0.86, 0.86, 0.02, 24), '#c98a5a', { y: 1.0 }));
  return merge(parts);
}

export function picnic() {
  const parts = [];
  const n = 5, size = 0.5;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      parts.push(part(new THREE.BoxGeometry(size, 0.03, size), (i + j) % 2 ? '#ff5d73' : '#ffffff', { x: (i - 2) * size, y: 0.02, z: (j - 2) * size }));
    }
  }
  parts.push(part(new THREE.BoxGeometry(0.8, 0.5, 0.55), '#d9a066', { x: 0.3, y: 0.28, z: -0.2 }));
  parts.push(part(new THREE.TorusGeometry(0.3, 0.04, 6, 12, Math.PI), '#b8804a', { x: 0.3, y: 0.53, z: -0.2 }));
  parts.push(part(new THREE.SphereGeometry(0.16, 10, 8), '#ff3b4f', { x: -0.5, y: 0.17, z: 0.4 }));
  parts.push(part(new THREE.SphereGeometry(0.16, 10, 8), '#ff3b4f', { x: -0.25, y: 0.17, z: 0.62 }));
  return merge(parts);
}

// ---------------- Cloud Kingdom ----------------

export function starLamp() {
  const parts = [part(new THREE.CylinderGeometry(0.06, 0.1, 3.0, 8), '#ffffff', { y: 1.5 })];
  parts.push(part(new THREE.TorusGeometry(0.28, 0.035, 6, 20), '#ffd9f0', { y: 3.2 }));
  parts.push(part(new THREE.SphereGeometry(0.25, 10, 8), '#ffffff', { y: 0.12, sy: 0.5 }));
  return merge(parts);
}
export const starLampGlow = () => xf(starGeometry(0.5), { y: 3.2 });

export function cloudPuff() {
  return cloudGeometry(8, '#ffffff');
}

export function floatingIsland() {
  const parts = [];
  parts.push(part(new THREE.ConeGeometry(2.2, 2.6, 8), '#c9b6e8', { y: -1.3, rx: Math.PI }));
  parts.push(part(new THREE.CylinderGeometry(2.25, 2.3, 0.5, 12), '#8fe0a8', { y: 0.2 }));
  parts.push(part(new THREE.CylinderGeometry(0.08, 0.1, 0.9, 6), '#ffffff', { x: 0.8, y: 0.9, z: 0.3 }));
  parts.push(part(new THREE.SphereGeometry(0.55, 10, 8), '#ffc2e9', { x: 0.8, y: 1.55, z: 0.3 }));
  parts.push(part(new THREE.BoxGeometry(0.9, 0.7, 0.8), '#ffffff', { x: -0.6, y: 0.8, z: -0.3 }));
  parts.push(part(new THREE.ConeGeometry(0.75, 0.6, 4), '#ff8fc4', { x: -0.6, y: 1.45, z: -0.3, ry: Math.PI / 4 }));
  parts.push(part(new THREE.BoxGeometry(0.22, 0.34, 0.05), '#bfe8ff', { x: -0.6, y: 0.8, z: 0.13 }));
  return merge(parts);
}

export function hotAirBalloon(colA, colB) {
  const parts = [];
  const gores = 10;
  for (let i = 0; i < gores; i++) {
    const g = new THREE.SphereGeometry(1.6, 3, 12, (i / gores) * Math.PI * 2, (Math.PI * 2) / gores);
    parts.push(part(g, i % 2 ? colA : colB, { y: 3.2, sy: 1.15 }));
  }
  parts.push(part(new THREE.CylinderGeometry(0.45, 0.7, 0.5, 10, 1, true), colA, { y: 1.35 }));
  parts.push(part(new THREE.BoxGeometry(0.7, 0.55, 0.7), '#c98a5a', { y: 0.28 }));
  for (const [x, z] of [[0.3, 0.3], [-0.3, 0.3], [0.3, -0.3], [-0.3, -0.3]]) {
    parts.push(part(new THREE.CylinderGeometry(0.015, 0.015, 0.9, 3), '#8a6a4a', { x, y: 0.95, z }));
  }
  return merge(parts);
}

export function rainbowArch() {
  const cols = ['#ff8fa3', '#ffc38a', '#fff08a', '#a8f0b0', '#8fd3ff', '#c8a8ff'];
  const parts = [];
  cols.forEach((c, i) => {
    parts.push(part(new THREE.TorusGeometry(8.9 - i * 0.28, 0.15, 6, 40, Math.PI), c, { sz: 0.6 }));
  });
  // little clouds where the arch meets the ground
  for (const x of [-7.5, 7.5]) parts.push(xf(cloudGeometry(x > 0 ? 6 : 7, '#ffffff'), { x, y: 0.3, s: 0.75 }));
  return merge(parts);
}

// ---------------- Starlight Carnival ----------------

export function carnivalLamp() {
  const parts = stripedPole(3.0, 0.08, '#6a4cc4', '#ffd23f', 6);
  parts.push(part(new THREE.CylinderGeometry(0.5, 0.5, 0.06, 12), '#6a4cc4', { y: 3.05 }));
  parts.push(part(new THREE.CylinderGeometry(0.2, 0.24, 0.12, 12), '#ffd23f', { y: 0.06 }));
  return merge(parts);
}
export const lanternGlow = () => new THREE.SphereGeometry(0.34, 12, 10).scale(1, 1.25, 1).translate(0, 3.5, 0);

export const stringBulb = () => new THREE.SphereGeometry(0.09, 8, 6);

export function circusTent(a, b) {
  const parts = [];
  parts.push(...stripedCone(1.8, 1.8, 1.6, [a, b], 12, { y: 0.8 }));
  parts.push(...stripedCone(0.05, 2.2, 1.8, [a, b], 12, { y: 2.5 }));
  parts.push(part(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 4), '#ffffff', { y: 3.75 }));
  parts.push(part(new THREE.ConeGeometry(0.22, 0.4, 3), '#ffd23f', { x: 0.18, y: 3.95, rz: -Math.PI / 2 }));
  parts.push(part(new THREE.BoxGeometry(0.9, 1.1, 0.08), '#3a2a6a', { x: 0, y: 0.55, z: 1.78 }));
  return merge(parts);
}

// Ferris wheel: returns { stand, wheel, cabin, lights } geometries.
export function ferrisWheel() {
  const R = 8.5;
  const stand = [];
  for (const z of [-1.1, 1.1]) {
    for (const s of [-1, 1]) {
      const len = Math.hypot(4.2, 10.2);
      stand.push(part(new THREE.CylinderGeometry(0.18, 0.22, len, 8), '#ffffff', { x: s * 2.1, y: 5.1, z, rz: s * Math.atan2(4.2, 10.2) }));
    }
  }
  stand.push(part(new THREE.CylinderGeometry(0.35, 0.35, 2.6, 12), '#ffd23f', { y: 10.2, rx: Math.PI / 2 }));
  stand.push(part(new THREE.BoxGeometry(6, 0.3, 3), '#6a4cc4', { y: 0.15 }));
  const wheel = [];
  wheel.push(part(new THREE.TorusGeometry(R, 0.18, 8, 64), '#ff6fae', {}));
  wheel.push(part(new THREE.TorusGeometry(R * 0.55, 0.12, 6, 40), '#ffffff', {}));
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    wheel.push(part(new THREE.CylinderGeometry(0.06, 0.06, R, 4), '#ffffff', { x: (Math.cos(a) * R) / 2, y: (Math.sin(a) * R) / 2, rz: a - Math.PI / 2 }));
  }
  wheel.push(part(new THREE.CylinderGeometry(0.6, 0.6, 0.5, 16), '#ff6fae', { rx: Math.PI / 2 }));
  const cabin = [];
  cabin.push(part(new THREE.CylinderGeometry(0.55, 0.45, 0.7, 10), '#ffffff', { y: -0.75 }));
  cabin.push(part(new THREE.ConeGeometry(0.62, 0.4, 10), '#ffffff', { y: -0.2 }));
  cabin.push(part(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 4), '#ffffff', { y: 0.1 }));
  const lights = [];
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    lights.push(xf(new THREE.SphereGeometry(0.16, 6, 4), { x: Math.cos(a) * (R + 0.25), y: Math.sin(a) * (R + 0.25), z: 0.2 }));
  }
  const lightGeo = merge(lights.map((g) => paint(g, '#ffffff')));
  return { stand: merge(stand), wheel: merge(wheel), cabin: merge(cabin), lights: lightGeo, radius: R, hub: 10.2 };
}

// Carousel: returns { base, top, rider } geometries.
export function carousel() {
  const base = [];
  base.push(part(new THREE.CylinderGeometry(3.6, 3.8, 0.5, 24), '#ffd23f', { y: 0.25 }));
  base.push(part(new THREE.CylinderGeometry(3.4, 3.4, 0.08, 24), '#ffffff', { y: 0.54 }));
  base.push(part(new THREE.CylinderGeometry(0.4, 0.4, 3.4, 12), '#ff9ec8', { y: 2.2 }));
  const top = [];
  top.push(...stripedCone(0.08, 4.2, 1.8, ['#ff6fae', '#ffffff'], 16, { y: 4.8 }));
  top.push(...stripedCone(4.2, 4.2, 0.5, ['#ffd23f', '#ff6fae'], 16, { y: 3.65 }));
  top.push(part(new THREE.SphereGeometry(0.35, 10, 8), '#ffd23f', { y: 5.85 }));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    top.push(part(new THREE.CylinderGeometry(0.05, 0.05, 3.2, 5), '#ffd23f', { x: Math.cos(a) * 2.6, y: 2.1, z: Math.sin(a) * 2.6 }));
  }
  const rider = [part(heartGeometry(0.9, 0.3), '#ffffff', {}), part(paintedBow('#ffffff', { s: 0.35, y: 0.45 }), '#ffffff', {})];
  return { base: merge(base), top: merge(top), rider: merge(rider) };
}
