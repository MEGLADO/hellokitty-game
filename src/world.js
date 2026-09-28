import * as THREE from 'three';
import { toonMat, basicMat, glossMat, rimUniforms } from './materials.js';
import { part, merge, xf, paint, heartGeometry, cloudGeometry, paintedBow } from './geom.js';
import { roadTexture, grassTexture, stripeTexture, fenceTexture } from './textures.js';
import { bendUniforms } from './bend.js';
import { PALETTES, PALETTE_LENGTH, PALETTE_BLEND } from './config.js';

const ROAD_LEN = 280;
const ROAD_Z0 = 22; // near end of the ground strips (behind the camera)

function mulberry(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- prop geometry ----------

function stripedPole(h, r, a, b, bands, y0 = 0) {
  const parts = [];
  const seg = h / bands;
  for (let i = 0; i < bands; i++) {
    parts.push(part(new THREE.CylinderGeometry(r, r, seg, 10, 1, true), i % 2 ? a : b, { y: y0 + seg * (i + 0.5) }));
  }
  return parts;
}

function lampGeometry() {
  const parts = stripedPole(2.9, 0.085, '#ff5f9e', '#ffffff', 10);
  // candy-cane hook arcing toward +x
  const hook = new THREE.TorusGeometry(0.32, 0.085, 8, 18, Math.PI);
  parts.push(part(hook, '#ff5f9e', { x: 0.32, y: 2.9 }));
  parts.push(part(new THREE.CylinderGeometry(0.1, 0.16, 0.18, 12), '#ffffff', { x: 0.64, y: 2.8 }));
  parts.push(part(new THREE.CylinderGeometry(0.17, 0.2, 0.12, 12), '#ffffff', { y: 0.06 }));
  return merge(parts);
}

function cottonTreeGeometry() {
  const parts = stripedPole(1.7, 0.13, '#ffe3f0', '#ffffff', 3);
  const blobs = [
    [0, 2.25, 0, 0.95], [0.6, 1.95, 0.2, 0.62], [-0.55, 2.02, -0.15, 0.66], [0.1, 2.85, 0.1, 0.62], [-0.15, 1.85, 0.5, 0.5],
  ];
  for (const [x, y, z, r] of blobs) parts.push(part(new THREE.SphereGeometry(1, 12, 8), '#ffffff', { x, y, z, s: r }));
  return merge(parts);
}

function lollipopGeometry() {
  const parts = [part(new THREE.CylinderGeometry(0.07, 0.07, 2.3, 8), '#ffffff', { y: 1.15 })];
  const rings = [[0.85, 0.18, '#ff6fae'], [0.66, 0.2, '#ffffff'], [0.47, 0.22, '#ff6fae'], [0.29, 0.24, '#ffffff'], [0.12, 0.26, '#ff6fae']];
  for (const [r, t, c] of rings) parts.push(part(new THREE.CylinderGeometry(r, r, t, 22), c, { y: 2.9, rx: Math.PI / 2 }));
  parts.push(paintedBow('#7fd6ff', { s: 0.5, y: 2.12, z: 0.1 }));
  return merge(parts);
}

function houseGeometry(wall, roof, door) {
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

function mushroomGeometry() {
  const parts = [part(new THREE.CylinderGeometry(0.2, 0.26, 0.6, 12), '#fff4ea', { y: 0.3 })];
  parts.push(part(new THREE.SphereGeometry(0.62, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), '#ff5577', { y: 0.55, sy: 0.75 }));
  const dots = [[0.3, 0.8, 0.2], [-0.25, 0.85, 0.25], [0.05, 1.0, -0.1], [-0.3, 0.75, -0.3], [0.32, 0.72, -0.28], [0, 0.78, 0.45]];
  for (const [x, y, z] of dots) parts.push(part(new THREE.SphereGeometry(0.09, 8, 6), '#ffffff', { x, y, z }));
  return merge(parts);
}

function bushGeometry() {
  const parts = [];
  const blobs = [[0, 0.45, 0, 0.6], [0.5, 0.35, 0.1, 0.45], [-0.5, 0.38, -0.05, 0.48], [0.1, 0.7, 0.05, 0.42]];
  for (const [x, y, z, r] of blobs) parts.push(part(new THREE.SphereGeometry(1, 10, 7), '#9fe8b4', { x, y, z, s: r }));
  const flowers = [[0.3, 0.9, 0.3], [-0.4, 0.75, 0.35], [0.6, 0.6, 0.4], [-0.1, 1.05, -0.1], [0, 0.55, 0.55]];
  flowers.forEach(([x, y, z], i) => parts.push(part(new THREE.SphereGeometry(0.1, 8, 6), i % 2 ? '#ff8fc0' : '#fff38a', { x, y, z })));
  return merge(parts);
}

function balloonGeometry() {
  const parts = [part(heartGeometry(1.0, 0.3), '#ffffff', {})];
  parts.push(part(new THREE.CylinderGeometry(0.012, 0.012, 1.8, 4), '#ffffff', { y: -1.35 }));
  return merge(parts);
}

// ---------- scrolling instanced props ----------

class Scroller {
  // meshes: InstancedMesh[] that share transforms. place(inst, rand) fills x/y/rotY/scale/color.
  constructor(meshes, count, spacing, place, seed) {
    this.meshes = meshes;
    this.count = count;
    this.spacing = spacing;
    this.span = count * spacing;
    this.place = place;
    this.rand = mulberry(seed);
    this.items = [];
    for (let i = 0; i < count; i++) this.items.push({ s: 0, x: 0, y: 0, ry: 0, sc: 1, sy: 1, bob: 0, phase: 0 });
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.e = new THREE.Euler();
    this.v = new THREE.Vector3();
    this.sv = new THREE.Vector3();
    for (const mesh of meshes) mesh.frustumCulled = false;
  }

  reset(dist) {
    this.items.forEach((it, i) => {
      it.s = dist - 22 + i * this.spacing + this.rand() * this.spacing * 0.8;
      this.respawn(it, i);
    });
  }

  respawn(it, i) {
    this.place(it, this.rand, i);
    if (!it.color) return;
    for (const mesh of this.meshes) {
      mesh.setColorAt(i, it.color);
      mesh.instanceColor.needsUpdate = true;
    }
  }

  update(dist, time) {
    const { m, q, e, v, sv } = this;
    for (let i = 0; i < this.count; i++) {
      const it = this.items[i];
      let z = dist - it.s;
      if (z > 24) {
        it.s += this.span;
        this.respawn(it, i);
        z = dist - it.s;
      }
      e.set(0, it.ry, 0);
      q.setFromEuler(e);
      v.set(it.x, it.y + (it.bob ? Math.sin(time * 1.4 + it.phase) * it.bob : 0), z);
      sv.set(it.sc, it.sc * it.sy, it.sc);
      m.compose(v, q, sv);
      for (const mesh of this.meshes) mesh.setMatrixAt(i, m);
    }
    for (const mesh of this.meshes) mesh.instanceMatrix.needsUpdate = true;
  }
}

// ---------- the world ----------

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    this.pal = {};
    this.buildLights();
    this.buildSky();
    this.buildBackground();
    this.buildGround(aniso);
    this.buildProps();
    this.paletteIndex = -1;
    this.setPalette(0);
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xffffff, 0xffc0dd, 1.2);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.7);
    this.sun.position.set(4, 10, 7);
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.scene.fog = new THREE.Fog(0xffd8ec, 42, 140);
  }

  buildSky() {
    this.skyUniforms = {
      uTop: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uBottom: { value: new THREE.Color() },
      uSunColor: { value: new THREE.Color() },
      uSunDir: { value: new THREE.Vector3(-0.35, 0.22, -0.9).normalize() },
      uSunDisc: { value: 1 },
      uTime: { value: 0 },
    };
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(900, 32, 20),
      new THREE.ShaderMaterial({
        uniforms: this.skyUniforms,
        vertexShader: /* glsl */ `
          varying vec3 vDir;
          void main() {
            vDir = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: /* glsl */ `
          uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir;
          uniform float uSunDisc, uTime;
          varying vec3 vDir;
          void main() {
            vec3 d = normalize(vDir);
            float h = d.y;
            vec3 col = mix(uHorizon, uTop, pow(smoothstep(-0.03, 0.62, h), 0.75));
            col = mix(uBottom, col, smoothstep(-0.3, -0.02, h));
            float sd = max(dot(d, normalize(uSunDir)), 0.0);
            col += uSunColor * (smoothstep(0.9985, 0.9992, sd) * 2.6 * uSunDisc + pow(sd, 24.0) * 0.3 * uSunDisc + pow(sd, 4.0) * 0.05);
            gl_FragColor = vec4(col, 1.0);
          }`,
        side: THREE.BackSide,
        depthWrite: false,
        depthTest: false,
        fog: false,
      })
    );
    sky.renderOrder = -10;
    sky.frustumCulled = false;
    this.sky = sky;
    this.scene.add(sky);

    // stars
    const n = 520;
    const pos = new Float32Array(n * 3);
    const tw = new Float32Array(n);
    const rand = mulberry(99);
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const y = 0.08 + rand() * 0.92;
      const r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(a) * r * 800;
      pos[i * 3 + 1] = y * 800;
      pos[i * 3 + 2] = Math.sin(a) * r * 800;
      tw[i] = rand() * 10;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aTw', new THREE.BufferAttribute(tw, 1));
    this.starUniforms = { uAlpha: { value: 0 }, uTime: { value: 0 }, uPx: { value: 1 } };
    this.stars = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: this.starUniforms,
      vertexShader: /* glsl */ `
        attribute float aTw;
        uniform float uTime, uPx;
        varying float vA;
        void main() {
          vA = 0.55 + 0.45 * sin(uTime * (1.5 + fract(aTw) * 2.5) + aTw * 7.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (1.5 + fract(aTw * 3.7) * 2.8) * uPx;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uAlpha;
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * 1.6, a * vA * uAlpha);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false,
    }));
    this.stars.renderOrder = -9;
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);
  }

  buildBackground() {
    // Everything here follows the camera and ignores the curved-world bend.
    const bg = (this.bg = new THREE.Group());
    this.scene.add(bg);

    // rainbow arc
    this.rainbowUniforms = { uAlpha: { value: 0.6 } };
    const rb = new THREE.Mesh(
      new THREE.TorusGeometry(300, 26, 6, 80, Math.PI),
      new THREE.ShaderMaterial({
        uniforms: this.rainbowUniforms,
        vertexShader: /* glsl */ `
          varying float vR;
          varying float vA;
          void main() {
            vR = (length(position.xy) - 274.0) / 52.0;
            vA = position.y / 300.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: /* glsl */ `
          uniform float uAlpha;
          varying float vR;
          varying float vA;
          void main() {
            float r = clamp(vR, 0.0, 1.0);
            vec3 c;
            if (r < 0.1667) c = vec3(0.72, 0.55, 1.0);
            else if (r < 0.3333) c = vec3(0.45, 0.72, 1.0);
            else if (r < 0.5) c = vec3(0.5, 0.95, 0.65);
            else if (r < 0.6667) c = vec3(1.0, 0.95, 0.5);
            else if (r < 0.8333) c = vec3(1.0, 0.7, 0.45);
            else c = vec3(1.0, 0.45, 0.6);
            float edge = smoothstep(0.0, 0.06, r) * smoothstep(1.0, 0.94, r);
            float foot = smoothstep(0.0, 0.25, vA);
            gl_FragColor = vec4(c, edge * foot * uAlpha);
          }`,
        transparent: true,
        depthWrite: false,
        fog: false,
      })
    );
    rb.scale.set(1, 0.9, 0.05);
    rb.position.set(40, -150, -560);
    rb.renderOrder = -8;
    this.rainbow = rb;
    bg.add(rb);

    // distant hills
    const hillMat = toonMat(0xffffff, { fog: false, bend: false });
    const hillGeo = new THREE.SphereGeometry(1, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2);
    const hillDefs = [
      [-250, -420, 110, 52, '#a9ecc4'], [-95, -470, 115, 44, '#ffc2de'], [70, -450, 100, 54, '#c9b8ff'],
      [220, -430, 115, 48, '#a9ecc4'], [360, -380, 100, 40, '#ffd3b0'], [-380, -360, 100, 42, '#ffd3b0'],
      [-170, -390, 70, 34, '#ffe3a3'], [140, -380, 75, 36, '#ffc2de'],
    ];
    this.hills = new THREE.InstancedMesh(hillGeo, hillMat, hillDefs.length);
    this.hillColors = [];
    hillDefs.forEach(([x, z, r, h, c], i) => {
      const m = new THREE.Matrix4().compose(new THREE.Vector3(x, -22, z), new THREE.Quaternion(), new THREE.Vector3(r, h, r * 0.8));
      this.hills.setMatrixAt(i, m);
      this.hillColors.push(new THREE.Color(c));
      this.hills.setColorAt(i, this.hillColors[i]);
    });
    this.hills.frustumCulled = false;
    bg.add(this.hills);

    // dream castle on the horizon
    const castle = [];
    const pink = '#ffc4df', rose = '#ff6fae', white = '#fff7fb', gold = '#ffd23f';
    castle.push(part(new THREE.BoxGeometry(36, 26, 14), white, { y: 13 }));
    for (let i = -2; i <= 2; i++) castle.push(part(new THREE.BoxGeometry(4.2, 3.2, 14.4), white, { x: i * 8, y: 27.4 }));
    const towers = [[-22, 44, 6], [22, 44, 6], [-10, 56, 5], [10, 56, 5], [0, 70, 6.5]];
    for (const [x, h, r] of towers) {
      castle.push(part(new THREE.CylinderGeometry(r, r * 1.05, h, 18), pink, { x, y: h / 2, z: -2 }));
      castle.push(part(new THREE.ConeGeometry(r * 1.35, r * 3.2, 18), rose, { x, y: h + r * 1.6, z: -2 }));
      castle.push(part(new THREE.SphereGeometry(r * 0.3, 10, 8), gold, { x, y: h + r * 3.25, z: -2 }));
      castle.push(part(new THREE.BoxGeometry(r * 0.6, r * 1.1, 0.4), '#8fd3ff', { x, y: h * 0.72, z: r - 2 }));
    }
    castle.push(part(heartGeometry(9, 0.3), rose, { y: 16, z: 7.3 }));
    castle.push(part(new THREE.BoxGeometry(8, 11, 0.6), '#ffe0ef', { y: 5.5, z: 7.1 }));
    this.castle = new THREE.Mesh(merge(castle), toonMat(0xffffff, { vertexColors: true, fog: false, bend: false }));
    this.castle.position.set(-62, -14, -480);
    this.castle.rotation.y = 0.18;
    bg.add(this.castle);

    // high clouds
    const cloudGeos = [cloudGeometry(1), cloudGeometry(2), cloudGeometry(5)];
    const cloudMat = toonMat(0xffffff, { vertexColors: true, fog: false, bend: false, emissive: 0xffe6f2, emissiveIntensity: 0.25 });
    this.skyClouds = [];
    const rand = mulberry(7);
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(cloudGeos[i % 3], cloudMat);
      const s = 7 + rand() * 9;
      m.scale.set(s, s * 0.8, s * 0.7);
      m.position.set(-420 + rand() * 840, 45 + rand() * 90, -250 - rand() * 280);
      m.userData.speed = 1.5 + rand() * 2.5;
      bg.add(m);
      this.skyClouds.push(m);
    }
    this.cloudMat = cloudMat;
    this.bgMats = [hillMat, this.castle.material, cloudMat];
  }

  buildGround(aniso) {
    // grass
    this.grassTex = grassTexture(aniso);
    this.grassTex.repeat.set(20, ROAD_LEN / 12);
    const grassGeo = new THREE.PlaneGeometry(240, ROAD_LEN, 1, 140);
    grassGeo.rotateX(-Math.PI / 2);
    grassGeo.translate(0, -0.02, ROAD_Z0 - ROAD_LEN / 2);
    this.grass = new THREE.Mesh(grassGeo, toonMat(0xffffff, { map: this.grassTex }));
    this.grass.frustumCulled = false;
    this.scene.add(this.grass);

    // road
    this.roadTex = roadTexture(aniso);
    this.roadTex.repeat.set(1, ROAD_LEN / 8);
    const roadGeo = new THREE.PlaneGeometry(7.4, ROAD_LEN, 1, 160);
    roadGeo.rotateX(-Math.PI / 2);
    roadGeo.translate(0, 0.0, ROAD_Z0 - ROAD_LEN / 2);
    this.road = new THREE.Mesh(roadGeo, toonMat(0xffffff, { map: this.roadTex }));
    this.road.frustumCulled = false;
    this.scene.add(this.road);

    // candy-cane curbs
    this.curbTex = stripeTexture();
    this.curbTex.repeat.set(2, ROAD_LEN / 1.2);
    const curbGeo = new THREE.CylinderGeometry(0.17, 0.17, ROAD_LEN, 12, 160, true);
    curbGeo.rotateX(Math.PI / 2);
    const curbMat = toonMat(0xffffff, { map: this.curbTex });
    this.curbs = [];
    for (const side of [-1, 1]) {
      const c = new THREE.Mesh(curbGeo, curbMat);
      c.position.set(side * 3.78, 0.13, ROAD_Z0 - ROAD_LEN / 2);
      c.frustumCulled = false;
      this.scene.add(c);
      this.curbs.push(c);
    }

    // picket fences
    this.fenceTex = fenceTexture(aniso);
    this.fenceTex.repeat.set(ROAD_LEN / 4, 1);
    const fenceGeo = new THREE.PlaneGeometry(ROAD_LEN, 0.85, 140, 1);
    fenceGeo.rotateY(Math.PI / 2);
    const fenceMat = toonMat(0xffffff, { map: this.fenceTex, alphaTest: 0.5, side: THREE.DoubleSide });
    for (const side of [-1, 1]) {
      const f = new THREE.Mesh(fenceGeo, fenceMat);
      f.position.set(side * 5.6, 0.42, ROAD_Z0 - ROAD_LEN / 2);
      f.frustumCulled = false;
      this.scene.add(f);
    }
  }

  buildProps() {
    const S = (this.scrollers = []);
    const inst = (geo, mat, n, color = false) => {
      const m = new THREE.InstancedMesh(geo, mat, n);
      if (color) m.setColorAt(0, new THREE.Color(1, 1, 1));
      this.scene.add(m);
      return m;
    };
    const vc = (opts = {}) => toonMat(0xffffff, { vertexColors: true, ...opts });

    // candy-cane lamps on both sides, every 14 units
    const lampN = 22;
    const lamps = inst(lampGeometry(), vc(), lampN);
    this.bulbMat = basicMat(new THREE.Color(1, 1, 1));
    const bulbGeo = new THREE.SphereGeometry(0.2, 12, 10);
    bulbGeo.translate(0.64, 2.6, 0);
    const bulbs = inst(bulbGeo, this.bulbMat, lampN);
    S.push(new Scroller([lamps, bulbs], lampN, 7, (it, r, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      it.x = side * 4.35;
      it.y = 0;
      it.ry = side < 0 ? 0 : Math.PI;
      it.sc = 1;
    }, 11));

    // cotton candy trees
    const treeColors = ['#ffb3d6', '#d9c2ff', '#b8f0d9', '#ffd6b8', '#bfe3ff', '#ffc2e9'].map((c) => new THREE.Color(c));
    const trees = inst(cottonTreeGeometry(), vc(), 26, true);
    S.push(new Scroller([trees], 26, 7.5, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (7 + r() * 14);
      it.y = 0;
      it.ry = r() * 6.28;
      it.sc = 0.9 + r() * 0.7;
      it.color = treeColors[Math.floor(r() * treeColors.length)];
    }, 21));

    // lollipops near the fence
    const lollis = inst(lollipopGeometry(), vc(), 10);
    S.push(new Scroller([lollis], 10, 19, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (6.4 + r() * 1.2);
      it.y = 0;
      it.ry = (r() - 0.5) * 0.6;
      it.sc = 0.85 + r() * 0.35;
    }, 31));

    // cottages
    const houseDefs = [['#fff8f0', '#ff5a6e', '#ff8fb1'], ['#fff2fa', '#ff8fc4', '#8fd3ff'], ['#f3fbff', '#7fb8ff', '#ffd23f']];
    houseDefs.forEach((d, k) => {
      const houses = inst(houseGeometry(...d), vc(), 4);
      S.push(new Scroller([houses], 4, 44, (it, r) => {
        const side = r() < 0.5 ? -1 : 1;
        it.x = side * (12 + r() * 9);
        it.y = 0;
        it.ry = (side < 0 ? 0 : Math.PI) + (r() - 0.5) * 0.5;
        it.sc = 0.9 + r() * 0.3;
      }, 41 + k * 17));
    });

    // mushrooms and bushes in the grass
    const shrooms = inst(mushroomGeometry(), vc(), 14);
    S.push(new Scroller([shrooms], 14, 11, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (6.2 + r() * 10);
      it.y = 0;
      it.ry = r() * 6.28;
      it.sc = 0.7 + r() * 0.8;
    }, 51));
    const bushes = inst(bushGeometry(), vc(), 18);
    S.push(new Scroller([bushes], 18, 8.5, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (5.9 + r() * 12);
      it.y = 0;
      it.ry = r() * 6.28;
      it.sc = 0.8 + r() * 0.8;
    }, 61));

    // heart balloons
    const balloonColors = ['#ff4f7e', '#ff8fc4', '#ff6fb5', '#b58cff', '#ffd23f'].map((c) => new THREE.Color(c));
    const balloons = inst(balloonGeometry(), glossMat(0xffffff, { vertexColors: true, roughness: 0.2 }), 12, true);
    S.push(new Scroller([balloons], 12, 15, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (6 + r() * 12);
      it.y = 3.5 + r() * 3;
      it.ry = (r() - 0.5) * 1.2;
      it.sc = 0.6 + r() * 0.35;
      it.bob = 0.35;
      it.phase = r() * 6;
      it.color = balloonColors[Math.floor(r() * balloonColors.length)];
    }, 71));

    // low clouds drifting beside the road
    const cloudGeo = cloudGeometry(4);
    const lowClouds = inst(cloudGeo, toonMat(0xffffff, { vertexColors: true, emissive: 0xfff0f6, emissiveIntensity: 0.3 }), 10);
    S.push(new Scroller([lowClouds], 10, 22, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (16 + r() * 16);
      it.y = 9 + r() * 7;
      it.ry = r() * 0.6;
      it.sc = 1.2 + r() * 1.4;
      it.bob = 0.5;
      it.phase = r() * 6;
    }, 81));
  }

  reset(dist) {
    for (const s of this.scrollers) s.reset(dist);
  }

  paletteAt(dist) {
    const idx = Math.floor(dist / PALETTE_LENGTH);
    const within = dist - idx * PALETTE_LENGTH;
    const start = PALETTE_LENGTH - PALETTE_BLEND;
    let f = 0;
    if (within > start) f = (within - start) / PALETTE_BLEND;
    f = f * f * (3 - 2 * f);
    return idx + f;
  }

  // t: float palette index (wraps)
  setPalette(t) {
    const n = PALETTES.length;
    const i0 = ((Math.floor(t) % n) + n) % n;
    const i1 = (i0 + 1) % n;
    const f = t - Math.floor(t);
    const A = PALETTES[i0], B = PALETTES[i1];
    const cache = (this._pc ||= {});
    const col = (key) => {
      const ca = (cache[A.name + key] ||= new THREE.Color(A[key]));
      const cb = (cache[B.name + key] ||= new THREE.Color(B[key]));
      return (this.pal[key] ||= new THREE.Color()).copy(ca).lerp(cb, f);
    };
    const num = (key) => (this.pal[key] = A[key] + (B[key] - A[key]) * f);
    this.skyUniforms.uTop.value.copy(col('top'));
    this.skyUniforms.uHorizon.value.copy(col('horizon'));
    this.skyUniforms.uBottom.value.copy(col('bottom'));
    this.skyUniforms.uSunColor.value.copy(col('sunColor'));
    this.skyUniforms.uSunDisc.value = num('sunDisc');
    this.scene.fog.color.copy(col('fog'));
    this.sun.color.copy(col('light'));
    this.sun.intensity = num('lightI');
    this.hemi.color.copy(col('hemiSky'));
    this.hemi.groundColor.copy(col('hemiGround'));
    this.hemi.intensity = num('hemiI');
    this.starUniforms.uAlpha.value = num('stars');
    this.rainbowUniforms.uAlpha.value = num('rainbow');
    rimUniforms.uRimStrength.value = num('rim');
    const lamps = num('lamps');
    this.bulbMat.color.setRGB(0.95 + lamps * 1.75, 0.82 + lamps * 1.3, 0.62 + lamps * 0.7);
    num('bloom');
    // haze the background toward the horizon colour
    const hz = this.pal.horizon;
    this.hillColors.forEach((c, i) => {
      const tmp = (this._tmp ||= new THREE.Color());
      tmp.copy(c).lerp(hz, 0.35);
      this.hills.setColorAt(i, tmp);
    });
    this.hills.instanceColor.needsUpdate = true;
    const night = num('stars');
    this.castle.material.color.setRGB(1 - night * 0.45, 1 - night * 0.5, 1 - night * 0.3);
    this.cloudMat.emissiveIntensity = 0.25 * (1 - night * 0.8);
    this.name = f < 0.5 ? A.name : B.name;
  }

  update(dt, dist, camera, time) {
    // ground texture scroll
    this.roadTex.offset.y = (dist / 8) % 1;
    this.grassTex.offset.y = (dist / 12) % 1;
    this.curbTex.offset.y = -(dist / 1.2) % 1;
    this.fenceTex.offset.x = (dist / 4) % 1;
    for (const s of this.scrollers) s.update(dist, time);
    this.sky.position.copy(camera.position);
    this.stars.position.copy(camera.position);
    this.stars.rotation.y = time * 0.01;
    this.starUniforms.uTime.value = time;
    this.bg.position.set(camera.position.x * 0.9, 0, camera.position.z);
    for (const c of this.skyClouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 460) c.position.x -= 920;
    }
    // gentle left/right sway of the road
    bendUniforms.uBendX.value = Math.sin(dist * 0.0045) * 0.0011;
  }
}
