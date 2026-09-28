import * as THREE from 'three';
import { toonMat, glossMat } from './materials.js';
import { part, merge, xf, paint, heartGeometry, starGeometry, appleGeometry, paintedBow } from './geom.js';
import { BEND_PARS, BEND_APPLY, bendUniforms } from './bend.js';
import { LANE_W, KITTY_HW, KITTY_HD, SPAWN_AHEAD, DESPAWN_BEHIND, JUMP_V, GRAVITY } from './config.js';

const TRAIN_TOP = 2.1;
const CAR_LEN = 7;
const RAMP_LEN = 5;
const STEP = 0.45;

// ---------------- obstacle models ----------------

function barrierModel() {
  const p = [];
  for (const x of [-0.86, 0.86]) {
    for (let i = 0; i < 4; i++) {
      p.push(part(new THREE.CylinderGeometry(0.095, 0.095, 0.21, 12), i % 2 ? '#ff5f9e' : '#ffffff', { x, y: 0.105 + i * 0.21 }));
    }
    p.push(part(new THREE.SphereGeometry(0.14, 12, 10), '#ff5f9e', { x, y: 0.9 }));
  }
  for (let i = 0; i < 8; i++) {
    p.push(part(new THREE.CylinderGeometry(0.11, 0.11, 0.215, 12), i % 2 ? '#ff5f9e' : '#ffffff', { x: -0.7525 + i * 0.215, y: 0.64, rz: Math.PI / 2 }));
  }
  p.push(part(new THREE.CylinderGeometry(0.075, 0.075, 1.72, 10), '#8fd3ff', { y: 0.3, rz: Math.PI / 2 }));
  p.push(paintedBow('#e8112d', { s: 0.42, y: 0.66, z: 0.12 }));
  return merge(p);
}

function gateModel() {
  const p = [];
  for (const x of [-0.92, 0.92]) {
    for (let i = 0; i < 8; i++) {
      p.push(part(new THREE.CylinderGeometry(0.1, 0.1, 0.31, 12), i % 2 ? '#6fdcc0' : '#ffffff', { x, y: 0.155 + i * 0.31 }));
    }
    p.push(part(new THREE.SphereGeometry(0.16, 12, 10), '#ffd23f', { x, y: 2.56 }));
  }
  p.push(part(new THREE.BoxGeometry(1.94, 0.78, 0.1), '#ffffff', { y: 1.56 }));
  p.push(part(new THREE.BoxGeometry(1.8, 0.64, 0.14), '#ff6fae', { y: 1.56 }));
  p.push(part(heartGeometry(0.46, 0.2), '#ffffff', { y: 1.57, z: 0.12 }));
  p.push(part(new THREE.CylinderGeometry(0.05, 0.05, 1.84, 8), '#ffffff', { y: 2.42, rz: Math.PI / 2 }));
  const flagCols = ['#ffd23f', '#8fd3ff', '#ffffff', '#b58cff', '#ffd23f', '#8fd3ff'];
  for (let i = 0; i < 6; i++) {
    const x = -0.75 + i * 0.3;
    p.push(part(new THREE.ConeGeometry(0.14, 0.3, 3), flagCols[i], { x, y: 1.08, rx: Math.PI, ry: Math.PI / 6 }));
  }
  return merge(p);
}

function giftModel() {
  const p = [];
  p.push(part(new THREE.BoxGeometry(1.8, 1.35, 1.6), '#ff9ec8', { y: 0.675 }));
  p.push(part(new THREE.BoxGeometry(0.3, 1.37, 1.62), '#ffffff', { y: 0.675 }));
  p.push(part(new THREE.BoxGeometry(1.82, 1.37, 0.3), '#ffffff', { y: 0.675 }));
  p.push(part(new THREE.BoxGeometry(1.35, 1.0, 1.25), '#8fe3c9', { y: 1.85, ry: 0.15 }));
  p.push(part(new THREE.BoxGeometry(0.26, 1.02, 1.27), '#ffd23f', { y: 1.85, ry: 0.15 }));
  p.push(part(new THREE.BoxGeometry(1.37, 1.02, 0.26), '#ffd23f', { y: 1.85, ry: 0.15 }));
  p.push(paintedBow('#ff4f97', { s: 0.75, y: 2.5, ry: 0.15 }));
  return merge(p);
}

function cakeModel() {
  const p = [];
  const tiers = [[0.92, 0.9, 0, '#fff4f8'], [0.7, 0.75, 0.9, '#ffb3d1'], [0.48, 0.62, 1.65, '#fff4f8']];
  for (const [r, h, y, c] of tiers) {
    p.push(part(new THREE.CylinderGeometry(r, r, h, 28), c, { y: y + h / 2 }));
    p.push(part(new THREE.TorusGeometry(r, 0.07, 8, 28), c === '#fff4f8' ? '#ff8fc0' : '#ffffff', { y: y + h, rx: Math.PI / 2 }));
    const n = Math.round(r * 9);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      p.push(part(new THREE.SphereGeometry(0.1, 8, 6), '#ffffff', { x: Math.cos(a) * r, y: y + 0.08, z: Math.sin(a) * r }));
    }
  }
  for (const [x, z] of [[0, 0], [0.22, 0.2], [-0.24, 0.12], [0.05, -0.25]]) {
    p.push(part(new THREE.SphereGeometry(0.14, 12, 10), '#ff3355', { x, y: 2.38, z, sy: 1.2 }));
    p.push(part(new THREE.ConeGeometry(0.07, 0.08, 6), '#4fc26b', { x, y: 2.56, z }));
  }
  return merge(p);
}

function cupcakeModel() {
  const p = [];
  const n = 14;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    p.push(part(new THREE.BoxGeometry(0.34, 1.0, 0.1), i % 2 ? '#c9a8ff' : '#b08cff', { x: Math.cos(a) * 0.72, y: 0.5, z: Math.sin(a) * 0.72, ry: -a + Math.PI / 2, rx: 0 }));
  }
  p.push(part(new THREE.CylinderGeometry(0.72, 0.62, 1.0, 20), '#b08cff', { y: 0.5 }));
  const swirl = [[0.82, 1.15], [0.66, 1.5], [0.48, 1.8], [0.3, 2.05]];
  for (const [r, y] of swirl) p.push(part(new THREE.TorusGeometry(r, 0.22, 10, 26), '#ffa8cf', { y, rx: Math.PI / 2 }));
  p.push(part(new THREE.SphereGeometry(0.28, 14, 10), '#ffa8cf', { y: 2.2 }));
  p.push(part(new THREE.SphereGeometry(0.2, 14, 10), '#ff2a4d', { y: 2.52 }));
  p.push(part(new THREE.CylinderGeometry(0.02, 0.02, 0.28, 5), '#6b3b2a', { y: 2.78, rz: 0.4 }));
  const sprinkle = ['#ffd23f', '#8fd3ff', '#ffffff', '#6fdcc0'];
  for (let i = 0; i < 18; i++) {
    const a = i * 2.4;
    const r = 0.5 + (i % 3) * 0.12;
    p.push(part(new THREE.CapsuleGeometry(0.025, 0.08, 2, 4), sprinkle[i % 4], { x: Math.cos(a) * r, y: 1.3 + (i % 4) * 0.18, z: Math.sin(a) * r, rz: a, rx: a * 0.7 }));
  }
  return merge(p);
}

function trainCarModel(body, stripe) {
  const p = [];
  // near face at local z = 0, body extends to z = -CAR_LEN
  const L = CAR_LEN - 0.3;
  const zc = -CAR_LEN / 2;
  p.push(part(new THREE.BoxGeometry(1.9, 1.72, L), body, { y: 1.12, z: zc }));
  p.push(part(new THREE.BoxGeometry(1.98, 0.14, L + 0.06), '#ffffff', { y: 2.03, z: zc }));
  p.push(part(new THREE.BoxGeometry(1.94, 0.2, L + 0.02), stripe, { y: 0.66, z: zc }));
  p.push(part(new THREE.BoxGeometry(1.7, 0.2, L - 0.3), '#ffe6f1', { y: 0.2, z: zc }));
  for (const x of [-0.965, 0.965]) {
    for (let i = 0; i < 3; i++) {
      p.push(part(new THREE.BoxGeometry(0.06, 0.62, 1.2), '#ffffff', { x, y: 1.42, z: -1.2 - i * 2.2 }));
      p.push(part(new THREE.BoxGeometry(0.08, 0.5, 1.06), '#aee4ff', { x, y: 1.42, z: -1.2 - i * 2.2 }));
    }
    for (const z of [-0.9, -2.0, -4.7, -5.8]) {
      p.push(part(new THREE.CylinderGeometry(0.26, 0.26, 0.14, 16), '#5a3d6b', { x: x * 0.93, y: 0.26, z, rz: Math.PI / 2 }));
      p.push(part(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 10), '#ffd23f', { x: x * 0.93, y: 0.26, z, rz: Math.PI / 2 }));
    }
  }
  // front face: window, heart and headlights
  p.push(part(new THREE.BoxGeometry(1.4, 0.66, 0.06), '#ffffff', { y: 1.5, z: -0.12 }));
  p.push(part(new THREE.BoxGeometry(1.26, 0.52, 0.08), '#aee4ff', { y: 1.5, z: -0.1 }));
  p.push(part(heartGeometry(0.42, 0.18), '#ff3d7f', { y: 0.95, z: -0.08 }));
  for (const x of [-0.62, 0.62]) {
    p.push(part(new THREE.SphereGeometry(0.13, 12, 10), new THREE.Color(3.2, 2.9, 1.6), { x, y: 0.95, z: -0.12 }));
  }
  return merge(p);
}

function rampModel() {
  const p = [];
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(RAMP_LEN, 0);
  shape.lineTo(0, TRAIN_TOP);
  shape.closePath();
  const wedge = new THREE.ExtrudeGeometry(shape, { depth: 1.86, bevelEnabled: false });
  // shape X -> +z (toward player), extrude Z -> x
  xf(wedge, { ry: -Math.PI / 2, x: 0.93 });
  p.push(paint(wedge, '#ffb0d2'));
  const slope = Math.atan2(TRAIN_TOP, RAMP_LEN);
  const len = Math.hypot(TRAIN_TOP, RAMP_LEN);
  for (let i = 0; i < 5; i++) {
    const t = (i + 0.5) / 5;
    const y = TRAIN_TOP * (1 - t) + 0.02;
    const z = RAMP_LEN * t;
    p.push(part(new THREE.BoxGeometry(1.7, 0.04, 0.3), '#ffffff', { y, z, rx: slope }));
  }
  for (const x of [-0.93, 0.93]) {
    p.push(part(new THREE.BoxGeometry(0.1, 0.12, len), '#ffffff', { x, y: TRAIN_TOP / 2 + 0.06, z: RAMP_LEN / 2, rx: slope }));
  }
  return merge(p);
}

function yarnModel() {
  const p = [part(new THREE.SphereGeometry(0.82, 28, 20), '#ff8fc0', {})];
  const rot = [[0, 0, 0], [1.1, 0.3, 0], [0.5, 1.2, 0.4], [2.1, 0.7, 1.1], [0.9, 2.3, 0.2], [1.6, 1.6, 2.2]];
  for (const [rx, ry, rz] of rot) p.push(part(new THREE.TorusGeometry(0.815, 0.035, 6, 48), '#ff6fae', { rx, ry, rz }));
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.3, -0.6, 0.6), new THREE.Vector3(0.6, -0.8, 1.0), new THREE.Vector3(0.2, -0.82, 1.5), new THREE.Vector3(0.6, -0.82, 2.0),
  ]);
  p.push(part(new THREE.TubeGeometry(curve, 20, 0.04, 6, false), '#ff6fae', {}));
  return merge(p);
}

// ---------------- collectible models ----------------

function appleModel() {
  const p = [part(appleGeometry(0.42), '#ff2a3d', {})];
  p.push(part(new THREE.CylinderGeometry(0.025, 0.03, 0.2, 6), '#7a4a2a', { y: 0.38, rz: -0.2 }));
  p.push(part(new THREE.SphereGeometry(0.5, 12, 8), '#48c46c', { x: 0.1, y: 0.42, sx: 0.28, sy: 0.05, sz: 0.14, rz: 0.4, ry: 0.4 }));
  return merge(p);
}

function magnetModel() {
  const p = [part(new THREE.TorusGeometry(0.3, 0.11, 10, 24, Math.PI), '#ff3d6e', { rz: Math.PI })];
  for (const x of [-0.3, 0.3]) {
    p.push(part(new THREE.CylinderGeometry(0.11, 0.11, 0.24, 14), '#ff3d6e', { x, y: 0.12 }));
    p.push(part(new THREE.CylinderGeometry(0.112, 0.112, 0.14, 14), '#f4f4ff', { x, y: 0.3 }));
  }
  return xf(merge(p), { y: 0.05 });
}

function bubbleMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, ...bendUniforms },
    vertexShader: /* glsl */ `
      ${BEND_PARS}
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        ${BEND_APPLY}
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec3 vN;
      varying vec3 vV;
      vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
      void main() {
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 2.2);
        vec3 col = mix(vec3(1.0), hue(f * 1.3 + uTime * 0.2), 0.55);
        float glint = pow(max(dot(normalize(vN), normalize(vec3(-0.5, 0.6, 0.6))), 0.0), 30.0);
        float a = clamp(rim * 0.95 + glint + 0.05, 0.0, 1.0);
        gl_FragColor = vec4(col + glint * 0.6, a);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });
}

// ---------------- the track ----------------

const OB = {
  barrier: { hw: 0.95, minY: 0, maxY: 0.85, hd: 0.22 },
  gate: { hw: 0.95, minY: 0.98, maxY: 2.5, hd: 0.2 },
  block: { hw: 0.9, minY: 0, maxY: 2.6, hd: 0.8 },
  yarn: { hw: 0.78, minY: 0, maxY: 1.6, hd: 0.75 },
};

export class Track {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.group = new THREE.Group();
    scene.add(this.group);
    const vc = (o = {}) => toonMat(0xffffff, { vertexColors: true, ...o });
    const gloss = (o = {}) => glossMat(0xffffff, { vertexColors: true, ...o });
    this.models = {
      barrier: { geo: barrierModel(), mat: vc() },
      gate: { geo: gateModel(), mat: vc() },
      gift: { geo: giftModel(), mat: vc() },
      cake: { geo: cakeModel(), mat: vc() },
      cupcake: { geo: cupcakeModel(), mat: vc() },
      carPink: { geo: trainCarModel('#ff8fc0', '#ffffff'), mat: vc() },
      carMint: { geo: trainCarModel('#6fd6b8', '#ff8fc0'), mat: vc() },
      carLilac: { geo: trainCarModel('#b39cff', '#ffd23f'), mat: vc() },
      ramp: { geo: rampModel(), mat: vc() },
      yarn: { geo: yarnModel(), mat: vc() },
    };
    this.pools = {};
    this.obstacles = [];

    // collectibles (instanced)
    this.heartGeo = heartGeometry(0.62, 0.16);
    this.heartMesh = new THREE.InstancedMesh(this.heartGeo, glossMat(0xff4f9a, { emissive: 0xff2f86, emissiveIntensity: 0.5, roughness: 0.28, envMapIntensity: 0.7 }), 220);
    this.heartMesh.frustumCulled = false;
    this.heartMesh.count = 0;
    this.group.add(this.heartMesh);
    this.appleMesh = new THREE.InstancedMesh(appleModel(), glossMat(0xffffff, { vertexColors: true, roughness: 0.38, envMapIntensity: 0.35, emissive: 0x3a0810, emissiveIntensity: 0.2 }), 24);
    this.appleMesh.frustumCulled = false;
    this.appleMesh.count = 0;
    this.group.add(this.appleMesh);
    this.items = []; // { kind: 'heart'|'apple', s, x, y, alive, magnet, phase }

    // power-ups
    this.bubbleMat = bubbleMaterial();
    this.bubbleGeo = new THREE.SphereGeometry(0.62, 28, 18);
    this.icons = {
      magnet: { geo: magnetModel(), mat: glossMat(0xffffff, { vertexColors: true, envMapIntensity: 0.6, emissive: 0x551122, emissiveIntensity: 0.4 }) },
      rush: { geo: starGeometry(0.85), mat: glossMat(0xffd84a, { envMapIntensity: 0.6, emissive: 0xffa000, emissiveIntensity: 0.55 }) },
      shield: { geo: heartGeometry(0.6, 0.2), mat: glossMat(0x6fd6ff, { envMapIntensity: 0.6, emissive: 0x1a8cff, emissiveIntensity: 0.55 }) },
      double: { geo: appleGeometry(0.36), mat: glossMat(0xffc93c, { metalness: 0.4, roughness: 0.3, envMapIntensity: 0.7, emissive: 0xc07a00, emissiveIntensity: 0.45 }) },
    };
    this.powers = [];
    this.powerPool = [];

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this.reset(0);
  }

  // ---------- pools ----------
  getMesh(kind) {
    const pool = (this.pools[kind] ||= []);
    let m = pool.pop();
    if (!m) {
      const def = this.models[kind];
      m = new THREE.Mesh(def.geo, def.mat);
      m.frustumCulled = false;
      this.group.add(m);
    }
    m.visible = true;
    m.rotation.set(0, 0, 0);
    m.scale.set(1, 1, 1);
    return m;
  }

  release(o) {
    for (const m of o.meshes) {
      m.visible = false;
      (this.pools[m.userData.kind] ||= []).push(m);
    }
    o.meshes.length = 0;
  }

  // origin: where this run started, so difficulty ramps per run
  reset(dist, origin = dist) {
    this.origin = origin;
    for (const o of this.obstacles) this.release(o);
    this.obstacles = [];
    this.items = [];
    for (const p of this.powers) {
      p.group.visible = false;
      this.powerPool.push(p);
    }
    this.powers = [];
    this.nextS = dist + 48;
    this.lastPowerS = dist;
    this.rushing = false;
    this.tutorial = null;
  }

  // ---------- spawning helpers ----------
  laneX(l) {
    return l * LANE_W;
  }

  addObstacle(type, lane, s, extra = {}) {
    const o = { type, lane, x: this.laneX(lane), meshes: [], dead: false, ignoreUntil: 0, ...extra };
    const add = (kind, zOff = 0) => {
      const m = this.getMesh(kind);
      m.userData.kind = kind;
      m.userData.zOff = zOff;
      o.meshes.push(m);
      return m;
    };
    if (type === 'barrier' || type === 'gate' || type === 'yarn') {
      const d = OB[type];
      Object.assign(o, { hw: d.hw, minY: d.minY, maxY: d.maxY, sa: s - d.hd, sb: s + d.hd, s });
      add(type);
      if (type === 'yarn') o.move = extra.move ?? 9;
    } else if (type === 'block') {
      const d = OB.block;
      Object.assign(o, { hw: d.hw, minY: d.minY, maxY: d.maxY, sa: s - d.hd, sb: s + d.hd, s });
      const kinds = ['gift', 'cake', 'cupcake'];
      const m = add(extra.kind || kinds[Math.floor(Math.random() * kinds.length)]);
      m.rotation.y = (Math.random() - 0.5) * 0.4;
    } else if (type === 'train') {
      const cars = extra.cars || 2;
      const len = cars * CAR_LEN;
      Object.assign(o, { hw: 0.95, platform: true, top: TRAIN_TOP, sa: s, sb: s + len, s });
      const kinds = ['carPink', 'carMint', 'carLilac'];
      const k0 = Math.floor(Math.random() * 3);
      for (let i = 0; i < cars; i++) add(kinds[(k0 + i) % 3], i * CAR_LEN);
    } else if (type === 'ramp') {
      Object.assign(o, { hw: 0.95, platform: true, ramp: true, top: TRAIN_TOP, sa: s - RAMP_LEN, sb: s, s });
      add('ramp');
    }
    this.obstacles.push(o);
    return o;
  }

  addItem(kind, lane, s, y = 0.9) {
    this.items.push({ kind, x: this.laneX(lane), s, y, alive: true, magnet: false, phase: Math.random() * 6 });
  }

  addLine(lane, s0, n, gap = 2.2, y = 0.9) {
    for (let i = 0; i < n; i++) this.addItem('heart', lane, s0 + i * gap, y);
  }

  // Hearts following the jump arc over an obstacle at s.
  addArc(lane, s, speed, apple = false) {
    const T = (2 * JUMP_V) / GRAVITY;
    const D = speed * T;
    const n = 7;
    for (let i = 0; i < n; i++) {
      const f = i / (n - 1);
      const t = f * T;
      const y = 0.9 + JUMP_V * t - 0.5 * GRAVITY * t * t;
      const kind = apple && i === 3 ? 'apple' : 'heart';
      this.addItem(kind, lane, s - D / 2 + f * D, y);
    }
  }

  addPower(kind, lane, s, y = 1.1) {
    let p = this.powerPool.pop();
    if (!p) {
      const group = new THREE.Group();
      const bubble = new THREE.Mesh(this.bubbleGeo, this.bubbleMat);
      bubble.renderOrder = 3;
      const icon = new THREE.Mesh();
      group.add(icon);
      group.add(bubble);
      this.group.add(group);
      p = { group, icon };
    }
    const def = this.icons[kind];
    p.icon.geometry = def.geo;
    p.icon.material = def.mat;
    p.group.visible = true;
    Object.assign(p, { kind, x: this.laneX(lane), s, y, alive: true });
    this.powers.push(p);
  }

  pickPower() {
    const r = Math.random();
    if (r < 0.3) return 'magnet';
    if (r < 0.55) return 'rush';
    if (r < 0.78) return 'shield';
    return 'double';
  }

  laneClear(lane, s0, s1) {
    for (const o of this.obstacles) {
      if (o.lane === lane && o.sb > s0 && o.sa < s1) return false;
    }
    return true;
  }

  // ---------- patterns ----------
  spawnPattern(s, absDist, speed) {
    const dist = absDist - this.origin; // metres into this run
    const lanes = [-1, 0, 1];
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const pickType = (opts) => opts[Math.floor(Math.random() * opts.length)];
    const d = Math.min(1, dist / 2600);
    const L = shuffle([...lanes]);

    // power-up chance
    let powerLane = null;
    if (s - this.lastPowerS > 260 + Math.random() * 180) powerLane = L[2];

    const weights = [
      ['single', 3 - d * 1.5],
      ['double', 1 + d * 2],
      ['wallJump', 0.8],
      ['wallSlide', dist > 150 ? 0.8 : 0],
      ['mixed', dist > 400 ? 1 + d : 0],
      ['train', dist > 200 ? 1.4 + d : 0],
      ['doubleTrain', dist > 700 ? 0.8 + d : 0],
      ['yarn', dist > 500 ? 0.9 + d * 0.6 : 0],
      ['zigzag', dist > 900 ? 0.8 + d : 0],
      ['breather', 0.6],
    ];
    let total = weights.reduce((a, w) => a + w[1], 0);
    let r = Math.random() * total;
    let pat = 'single';
    for (const [name, w] of weights) {
      if ((r -= w) <= 0) {
        pat = name;
        break;
      }
    }

    let len = 1;
    const types = dist > 150 ? ['barrier', 'gate', 'block'] : ['barrier', 'block'];
    switch (pat) {
      case 'single': {
        const t = pickType(types);
        this.addObstacle(t, L[0], s);
        if (t === 'barrier') this.addArc(L[0], s, speed, Math.random() < 0.3);
        else this.addLine(L[1], s - 6, 6);
        break;
      }
      case 'double': {
        this.addObstacle(pickType(types), L[0], s);
        this.addObstacle(pickType(types), L[1], s);
        if (powerLane === null) this.addLine(L[2], s - 7, 6);
        break;
      }
      case 'wallJump': {
        for (const l of lanes) this.addObstacle('barrier', l, s);
        this.addArc(L[0], s, speed, Math.random() < 0.5);
        powerLane = null;
        break;
      }
      case 'wallSlide': {
        for (const l of lanes) this.addObstacle('gate', l, s);
        this.addLine(L[0], s - 3, 4, 2, 0.55);
        powerLane = null;
        break;
      }
      case 'mixed': {
        const soft = Math.random() < 0.5 ? 'barrier' : 'gate';
        this.addObstacle('block', L[0], s);
        this.addObstacle(soft, L[1], s);
        this.addObstacle(Math.random() < 0.35 ? 'block' : soft === 'barrier' ? 'gate' : 'barrier', L[2], s);
        if (soft === 'barrier') this.addArc(L[1], s, speed);
        powerLane = null;
        break;
      }
      case 'train': {
        const cars = 1 + Math.floor(Math.random() * 3);
        const ramp = Math.random() < 0.75;
        const lane = L[0];
        if (ramp) this.addObstacle('ramp', lane, s);
        this.addObstacle('train', lane, s, { cars });
        len = cars * CAR_LEN;
        if (ramp) this.addLine(lane, s + 1, Math.floor(len / 2.2), 2.2, TRAIN_TOP + 0.9);
        else this.addLine(L[1], s - 4, 7);
        if (Math.random() < 0.5 && len > 7) this.addObstacle(Math.random() < 0.5 ? 'barrier' : 'gate', L[2], s + len / 2);
        break;
      }
      case 'doubleTrain': {
        const cars = 2 + Math.floor(Math.random() * 2);
        len = cars * CAR_LEN;
        this.addObstacle('ramp', L[0], s);
        this.addObstacle('train', L[0], s, { cars });
        this.addObstacle('train', L[1], s + 2, { cars });
        this.addLine(L[0], s + 1, Math.floor(len / 2.2), 2.2, TRAIN_TOP + 0.9);
        if (Math.random() < 0.6) this.addObstacle(Math.random() < 0.5 ? 'barrier' : 'gate', L[2], s + len * 0.4);
        powerLane = null;
        break;
      }
      case 'yarn': {
        const lane = L.find((l) => this.laneClear(l, s - 26, s + 2));
        if (lane === undefined) {
          this.addObstacle('block', L[0], s);
          this.addLine(L[1], s - 6, 6);
          break;
        }
        const others = L.filter((l) => l !== lane);
        this.addObstacle('yarn', lane, s, { move: 8 + d * 5 });
        this.addLine(others[0], s - 8, 6);
        if (Math.random() < 0.5) this.addObstacle('barrier', others[1], s + 6);
        powerLane = null;
        break;
      }
      case 'zigzag': {
        const seq = Math.random() < 0.5 ? [-1, 0, 1] : [1, 0, -1];
        const gap = Math.max(10, speed * 0.55);
        seq.forEach((l, i) => this.addObstacle('block', l, s + i * gap));
        // hearts weave through the open lanes
        seq.forEach((l, i) => {
          const free = lanes.filter((x) => x !== l);
          this.addItem('heart', free[i % 2], s + i * gap);
        });
        len = gap * 2;
        powerLane = null;
        break;
      }
      case 'breather': {
        let lane = L[0];
        for (let i = 0; i < 10; i++) {
          if (i % 4 === 3) lane = Math.max(-1, Math.min(1, lane + (Math.random() < 0.5 ? -1 : 1)));
          this.addItem(i === 5 && Math.random() < 0.5 ? 'apple' : 'heart', lane, s + i * 2.2);
        }
        len = 22;
        break;
      }
    }
    if (powerLane !== null) {
      this.addPower(this.pickPower(), powerLane, s);
      this.lastPowerS = s;
    }
    return len;
  }

  // First-run tutorial: one of each obstacle in the middle lane.
  spawnTutorial(dist) {
    this.tutorial = [
      { s: dist + 55, type: 'barrier', hint: 'jump' },
      { s: dist + 100, type: 'gate', hint: 'slide' },
      { s: dist + 145, type: 'block', hint: 'side' },
    ];
    for (const t of this.tutorial) this.addObstacle(t.type, 0, t.s);
    this.addLine(0, dist + 20, 8);
    this.addArc(0, dist + 55, 16);
    this.addLine(-1, dist + 125, 6);
    this.addLine(1, dist + 150, 6);
    this.nextS = dist + 185;
  }

  beginRush(dist, lane = 0) {
    this.rushing = true;
    this.rushLane = lane;
    this.nextS = dist + 45;
    // clear far-away obstacles so the landing zone is open
    this.obstacles = this.obstacles.filter((o) => {
      if (o.sa > dist + 45) {
        this.release(o);
        return false;
      }
      return true;
    });
    this.items = this.items.filter((it) => it.s < dist + 45);
  }

  endRush(dist) {
    this.rushing = false;
    // sky hearts she can't reach any more
    this.items = this.items.filter((it) => !(it.y > 4 && it.s > dist));
    this.nextS = dist + 60;
  }

  // ---------- per-frame ----------
  update(dt, dist, speed, time) {
    // spawn
    while (this.nextS < dist + SPAWN_AHEAD) {
      if (this.rushing) {
        // a trail of sky hearts that starts in Kitty's lane and weaves one lane at a time
        this.addLine(this.rushLane, this.nextS, 6, 2.4, 5.4);
        this.nextS += 14.4;
        const step = Math.random() < 0.5 ? -1 : 1;
        this.rushLane = Math.max(-1, Math.min(1, this.rushLane + (this.rushLane === 0 ? step : -this.rushLane)));
      } else {
        const len = this.spawnPattern(this.nextS, dist, speed);
        const gap = Math.max(speed * 0.72, 26 - Math.min(1, (dist - this.origin) / 3000) * 12);
        this.nextS += len + gap;
      }
    }

    // move + recycle obstacles
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const o = this.obstacles[i];
      o.rolling = !!o.move && o.s - dist < 40;
      if (o.rolling) {
        o.s -= o.move * dt;
        o.sa -= o.move * dt;
        o.sb -= o.move * dt;
      }
      if (dist - o.sb > DESPAWN_BEHIND || o.remove) {
        this.release(o);
        this.obstacles.splice(i, 1);
        continue;
      }
      for (const m of o.meshes) {
        const base = o.type === 'ramp' || o.type === 'train' ? o.sa : o.s;
        m.position.set(o.x, 0, dist - base - (m.userData.zOff || 0));
        if (o.type === 'ramp') m.position.z = dist - o.sb;
        if (o.type === 'yarn') {
          m.position.y = 0.82;
          if (o.rolling) m.rotation.x += ((speed + o.move) / 0.82) * dt;
        }
        if (o.dead) {
          m.scale.multiplyScalar(Math.max(0, 1 - dt * 10));
          if (m.scale.x < 0.05) o.remove = true;
        }
      }
    }

    // collectibles
    const { _m, _q, _e, _v, _s } = this;
    let hn = 0, an = 0;
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      const z = dist - it.s;
      if (!it.alive || z > DESPAWN_BEHIND) {
        this.items.splice(i, 1);
        continue;
      }
      if (z < -SPAWN_AHEAD - 10) continue;
      const bob = Math.sin(time * 3 + it.phase) * 0.12;
      _e.set(0, time * 2.6 + it.phase, 0);
      _q.setFromEuler(_e);
      _v.set(it.x, it.y + bob, z);
      if (it.kind === 'heart' && hn < 220) {
        const pulse = 1 + Math.sin(time * 6 + it.phase) * 0.06;
        _s.set(pulse, pulse, pulse);
        _m.compose(_v, _q, _s);
        this.heartMesh.setMatrixAt(hn++, _m);
      } else if (it.kind === 'apple' && an < 24) {
        _s.set(1.15, 1.15, 1.15);
        _m.compose(_v, _q, _s);
        this.appleMesh.setMatrixAt(an++, _m);
      }
    }
    this.heartMesh.count = hn;
    this.appleMesh.count = an;
    this.heartMesh.instanceMatrix.needsUpdate = true;
    this.appleMesh.instanceMatrix.needsUpdate = true;

    // power-ups
    this.bubbleMat.uniforms.uTime.value = time;
    for (let i = this.powers.length - 1; i >= 0; i--) {
      const p = this.powers[i];
      const z = dist - p.s;
      if (!p.alive || z > DESPAWN_BEHIND) {
        p.group.visible = false;
        this.powerPool.push(p);
        this.powers.splice(i, 1);
        continue;
      }
      p.group.position.set(p.x, p.y + Math.sin(time * 2.5 + p.s) * 0.15, z);
      p.icon.rotation.set(0, time * 2.2, Math.sin(time * 3) * 0.15);
    }
  }

  // Kitty collision + support. k: { x, prevX, y, y0, h, dist, prevDist, time, dt }
  // Returns { ground, hit: obstacle|null, side: bool }
  collide(k) {
    let ground = 0;
    let hit = null;
    let side = false;
    const kx0 = k.x - KITTY_HW, kx1 = k.x + KITTY_HW;
    const ks0 = Math.min(k.prevDist, k.dist) - KITTY_HD, ks1 = k.dist + KITTY_HD;
    const near = [];
    for (const o of this.obstacles) {
      if (o.dead || k.time < o.ignoreUntil) continue;
      if (o.sb < ks0 || o.sa > ks1) continue;
      if (kx1 < o.x - o.hw || kx0 > o.x + o.hw) continue;
      near.push(o);
    }
    if (!near.length) return { ground, hit, side };
    const surfAt = (o, d) => (o.ramp ? o.top * THREE.MathUtils.clamp((d - o.sa) / (o.sb - o.sa), 0, 1) : o.top);
    // Height at the start of the frame, so one frame of gravity (or a big
    // frame step on a slow phone) can't sink her into a ramp.
    let yc = Math.max(k.y, k.y0 ?? k.y);
    const block = (o) => {
      if (hit) return;
      hit = o;
      const wasX = !(k.prevX + KITTY_HW < o.x - o.hw || k.prevX - KITTY_HW > o.x + o.hw);
      const moveS = o.rolling ? o.move * k.dt : 0;
      const wasS = !(o.sb + moveS < k.prevDist - KITTY_HD || o.sa + moveS > k.prevDist + KITTY_HD);
      side = wasS && !wasX;
    };
    // ramps first: walking up one lifts her to meet the train at its top
    for (const o of near) {
      if (!o.ramp) continue;
      if (yc >= surfAt(o, k.prevDist) - STEP) {
        const surf = surfAt(o, k.dist);
        ground = Math.max(ground, surf);
        yc = Math.max(yc, surf);
      } else block(o);
    }
    for (const o of near) {
      if (o.ramp) continue;
      if (o.platform) {
        if (yc >= o.top - STEP) ground = Math.max(ground, o.top);
        else block(o);
      } else if (k.y < o.maxY && k.y + k.h > o.minY) {
        block(o);
      }
    }
    return { ground, hit, side };
  }

  // Returns collected things near Kitty.
  collect(k, magnet, dt, onItem, onPower) {
    const cy = k.y + (k.sliding ? 0.35 : 0.75);
    const lo = Math.min(k.prevDist, k.dist) - 0.95, hi = k.dist + 0.95;
    for (const it of this.items) {
      if (!it.alive) continue;
      const ds = it.s - k.dist;
      if (magnet && ds < 16 && ds > -1) it.magnet = true;
      if (it.magnet) {
        const f = Math.min(1, dt * 11);
        it.x += (k.x - it.x) * f;
        it.y += (cy - it.y) * f;
        it.s += (k.dist - it.s) * f * 0.9;
      }
      if (it.s > lo && it.s < hi && Math.abs(it.x - k.x) < 0.95 && Math.abs(it.y - cy) < 1.05) {
        it.alive = false;
        onItem(it);
      }
    }
    for (const p of this.powers) {
      if (!p.alive) continue;
      if (p.s > lo - 0.15 && p.s < hi + 0.15 && Math.abs(p.x - k.x) < 1.1 && Math.abs(p.y - cy) < 1.4) {
        p.alive = false;
        onPower(p);
      }
    }
  }

  // Nearest obstacle ahead in a lane (for the tutorial hints).
  nextInLane(lane, dist) {
    let best = null;
    for (const o of this.obstacles) {
      if (o.lane !== lane || o.sa < dist) continue;
      if (!best || o.sa < best.sa) best = o;
    }
    return best;
  }
}
