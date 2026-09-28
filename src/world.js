import * as THREE from 'three';
import { toonMat, basicMat, glossMat, rimUniforms } from './materials.js';
import { part, merge, heartGeometry, cloudGeometry } from './geom.js';
import * as P from './props.js';
import {
  roadTexture, grassTexture, stripeTexture, fenceTexture, gardenRoadTexture, cloudRoadTexture, carnivalRoadTexture,
  meadowTexture, cloudSeaTexture, carnivalGroundTexture, multiStripeTexture, emptyTexture,
} from './textures.js';
import { bendUniforms } from './bend.js';
import { PALETTES, BIOMES, ZONE_LEN, ZONE_BLEND } from './config.js';

const ROAD_LEN = 280;
const ROAD_Z0 = 22; // near end of the ground strips (behind the camera)
const CANDY = 0, GARDEN = 1, CLOUDS = 2, CARNIVAL = 3;

function mulberry(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A material that shows `map` up to a world-space z and `uMapB` beyond it, so
// the road, grass, curbs and fences switch style exactly at a world border.
function zonify(m, mapB) {
  const zone = { uMapB: { value: mapB }, uZoneZ: { value: -1e6 } };
  const prev = m.onBeforeCompile;
  const prevKey = m.customProgramCacheKey();
  m.onBeforeCompile = (shader, renderer) => {
    prev.call(m, shader, renderer);
    shader.uniforms.uMapB = zone.uMapB;
    shader.uniforms.uZoneZ = zone.uZoneZ;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vZoneZ;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvZoneZ = ( modelMatrix * vec4( transformed, 1.0 ) ).z;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uMapB;\nuniform float uZoneZ;\nvarying float vZoneZ;')
      .replace(
        '#include <map_fragment>',
        `#ifdef USE_MAP
          vec4 sampledDiffuseColor = vZoneZ < uZoneZ ? texture2D( uMapB, vMapUv ) : texture2D( map, vMapUv );
          diffuseColor *= sampledDiffuseColor;
        #endif`
      );
  };
  m.customProgramCacheKey = () => prevKey + '-zone';
  m.userData.zone = zone;
  return m;
}

// ---------- scrolling instanced props ----------

class Scroller {
  // meshes: InstancedMesh[] sharing transforms. place(it, rand, i) fills x/y/ry/sc/color.
  // biomes: which worlds this prop appears in (null = all).
  constructor(world, meshes, count, spacing, place, seed, biomes = null) {
    this.world = world;
    this.meshes = meshes;
    this.count = count;
    this.spacing = spacing;
    this.span = count * spacing;
    this.place = place;
    this.biomes = biomes;
    this.rand = mulberry(seed);
    this.items = [];
    for (let i = 0; i < count; i++) this.items.push({ s: 0, x: 0, y: 0, ry: 0, rz: 0, sc: 1, sy: 1, bob: 0, phase: 0, hidden: false });
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
    it.hidden = !!this.biomes && !this.biomes.includes(this.world.biomeAt(it.s));
    if (!it.color) return;
    for (const mesh of this.meshes) {
      mesh.setColorAt(i, it.color);
      mesh.instanceColor.needsUpdate = true;
    }
  }

  update(dist, time) {
    const { m, q, e, v, sv } = this;
    let shown = false;
    for (let i = 0; i < this.count; i++) {
      const it = this.items[i];
      let z = dist - it.s;
      if (z > 24) {
        it.s += this.span;
        this.respawn(it, i);
        z = dist - it.s;
      }
      if (it.hidden) {
        sv.set(0, 0, 0);
      } else {
        shown = true;
        sv.set(it.sc, it.sc * it.sy, it.sc);
      }
      e.set(0, it.ry, it.rz);
      q.setFromEuler(e);
      v.set(it.x, it.y + (it.bob ? Math.sin(time * 1.4 + it.phase) * it.bob : 0), z);
      m.compose(v, q, sv);
      for (const mesh of this.meshes) mesh.setMatrixAt(i, m);
    }
    for (const mesh of this.meshes) {
      mesh.visible = shown;
      if (shown) mesh.instanceMatrix.needsUpdate = true;
    }
  }
}

// Big one-off set pieces (ferris wheels, carousels) that animate.
class Landmarks {
  constructor(world, make, count, spacing, place, animate, seed, biomes) {
    this.world = world;
    this.count = count;
    this.spacing = spacing;
    this.span = count * spacing;
    this.place = place;
    this.animate = animate;
    this.biomes = biomes;
    this.rand = mulberry(seed);
    this.items = [];
    for (let i = 0; i < count; i++) {
      const obj = make();
      obj.visible = false;
      world.scene.add(obj);
      this.items.push({ obj, s: 0, x: 0, ry: 0, sc: 1, hidden: true });
    }
  }

  reset(dist) {
    this.items.forEach((it, i) => {
      it.s = dist - 22 + i * this.spacing + this.rand() * this.spacing * 0.5;
      this.respawn(it);
    });
  }

  respawn(it) {
    this.place(it, this.rand);
    it.hidden = !this.biomes.includes(this.world.biomeAt(it.s));
  }

  update(dist, time) {
    for (const it of this.items) {
      let z = dist - it.s;
      if (z > 40) {
        it.s += this.span;
        this.respawn(it);
        z = dist - it.s;
      }
      it.obj.visible = !it.hidden && z > -230;
      if (!it.obj.visible) continue;
      it.obj.position.set(it.x, 0, z);
      it.obj.rotation.y = it.ry;
      it.obj.scale.setScalar(it.sc);
      this.animate(it.obj, time);
    }
  }
}

// ---------- the world ----------

export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.origin = 0;
    const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    this.pal = {};
    this.glowMats = [];
    this.buildLights();
    this.buildSky();
    this.buildBackground();
    this.buildGround(aniso);
    this.buildProps();
    this.zonePair = -1;
    this.setPalette(0);
  }

  // ---------- zones ----------
  zoneIndexAt(s) {
    return Math.max(0, Math.floor((s - this.origin) / ZONE_LEN));
  }

  biomeAt(s) {
    return this.zoneIndexAt(s) % BIOMES.length;
  }

  // Palette position for the kitty at distance `dist` (blends into the next world).
  paletteAt(dist) {
    const zi = this.zoneIndexAt(dist);
    const within = dist - this.origin - zi * ZONE_LEN;
    let f = (within - (ZONE_LEN - ZONE_BLEND)) / ZONE_BLEND;
    f = Math.min(1, Math.max(0, f));
    return zi + f * f * (3 - 2 * f);
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight(0xffffff, 0xffc0dd, 1.2);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.7);
    this.sun.position.set(7, 18, 11);
    this.sun.target.position.set(0, 0, -12);
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.scene.fog = new THREE.Fog(0xffd8ec, 42, 140);
  }

  // Real-time shadows around Kitty (the world scrolls, so the light stays put).
  setShadows(size) {
    const sun = this.sun;
    sun.castShadow = size > 0;
    if (!size) return;
    sun.shadow.mapSize.set(size, size);
    const cam = sun.shadow.camera;
    cam.left = -16;
    cam.right = 16;
    cam.top = 26;
    cam.bottom = -26;
    cam.near = 2;
    cam.far = 70;
    cam.updateProjectionMatrix();
    sun.shadow.bias = -0.0008;
    sun.shadow.normalBias = 0.04;
    if (sun.shadow.map) {
      sun.shadow.map.dispose();
      sun.shadow.map = null;
    }
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
  }

  buildGround(aniso) {
    // one texture per world; the zone shader switches between them
    this.sets = [];
    const set = (textures, repeatX, repeatY, scroll) => {
      for (const t of textures) {
        t.wrapS = t.wrapS === THREE.ClampToEdgeWrapping && repeatX === 1 ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
        t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(repeatX, repeatY);
      }
      const s = { textures, scroll, mats: [] };
      this.sets.push(s);
      return s;
    };

    this.groundSet = set([grassTexture(aniso), meadowTexture(aniso), cloudSeaTexture(aniso), carnivalGroundTexture(aniso)], 20, ROAD_LEN / 12, (t, d) => (t.offset.y = (d / 12) % 1));
    const grassGeo = new THREE.PlaneGeometry(240, ROAD_LEN, 1, 140);
    grassGeo.rotateX(-Math.PI / 2);
    grassGeo.translate(0, -0.02, ROAD_Z0 - ROAD_LEN / 2);
    const grassMat = zonify(toonMat(0xffffff, { map: this.groundSet.textures[0] }), this.groundSet.textures[1]);
    this.groundSet.mats.push(grassMat);
    this.grass = new THREE.Mesh(grassGeo, grassMat);
    this.grass.frustumCulled = false;
    this.grass.receiveShadow = true;
    this.scene.add(this.grass);

    this.roadSet = set([roadTexture(aniso), gardenRoadTexture(aniso), cloudRoadTexture(aniso), carnivalRoadTexture(aniso)], 1, ROAD_LEN / 8, (t, d) => (t.offset.y = (d / 8) % 1));
    const roadGeo = new THREE.PlaneGeometry(7.4, ROAD_LEN, 1, 160);
    roadGeo.rotateX(-Math.PI / 2);
    roadGeo.translate(0, 0.0, ROAD_Z0 - ROAD_LEN / 2);
    const roadMat = zonify(toonMat(0xffffff, { map: this.roadSet.textures[0] }), this.roadSet.textures[1]);
    this.roadSet.mats.push(roadMat);
    this.road = new THREE.Mesh(roadGeo, roadMat);
    this.road.frustumCulled = false;
    this.road.receiveShadow = true;
    this.scene.add(this.road);

    this.curbSet = set(
      [stripeTexture('#ff5f9e', '#ffffff'), stripeTexture('#ff5d73', '#fff4e6'), multiStripeTexture(['#ff9aae', '#ffc896', '#fff08e', '#aef2bd', '#9fd6ff', '#cdb3ff']), stripeTexture('#ffd23f', '#7d5fd8')],
      2, ROAD_LEN / 1.2, (t, d) => (t.offset.y = -(d / 1.2) % 1)
    );
    const curbGeo = new THREE.CylinderGeometry(0.17, 0.17, ROAD_LEN, 12, 160, true);
    curbGeo.rotateX(Math.PI / 2);
    const curbMat = zonify(toonMat(0xffffff, { map: this.curbSet.textures[0] }), this.curbSet.textures[1]);
    this.curbSet.mats.push(curbMat);
    for (const side of [-1, 1]) {
      const c = new THREE.Mesh(curbGeo, curbMat);
      c.position.set(side * 3.78, 0.13, ROAD_Z0 - ROAD_LEN / 2);
      c.frustumCulled = false;
      c.receiveShadow = true;
      this.scene.add(c);
    }

    const fence = fenceTexture(aniso);
    this.fenceSet = set([fence, fence, emptyTexture(), fence], ROAD_LEN / 4, 1, (t, d) => (t.offset.x = (d / 4) % 1));
    const fenceGeo = new THREE.PlaneGeometry(ROAD_LEN, 0.85, 140, 1);
    fenceGeo.rotateY(Math.PI / 2);
    const fenceMat = zonify(toonMat(0xffffff, { map: fence, alphaTest: 0.5, side: THREE.DoubleSide }), fence);
    this.fenceSet.mats.push(fenceMat);
    for (const side of [-1, 1]) {
      const f = new THREE.Mesh(fenceGeo, fenceMat);
      f.position.set(side * 5.6, 0.42, ROAD_Z0 - ROAD_LEN / 2);
      f.frustumCulled = false;
      this.scene.add(f);
    }
  }

  buildProps() {
    const S = (this.scrollers = []);
    const inst = (geo, mat, n, color = false, shadow = false) => {
      const m = new THREE.InstancedMesh(geo, mat, n);
      if (color) m.setColorAt(0, new THREE.Color(1, 1, 1));
      m.castShadow = shadow;
      this.scene.add(m);
      return m;
    };
    const vc = (opts = {}) => toonMat(0xffffff, { vertexColors: true, ...opts });
    const glow = (base) => {
      const m = basicMat(new THREE.Color(base));
      m.userData.base = new THREE.Color(base);
      this.glowMats.push(m);
      return m;
    };
    const add = (meshes, count, spacing, place, seed, biomes) => S.push(new Scroller(this, meshes, count, spacing, place, seed, biomes));
    const sideLamp = (it, r, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      it.x = side * 4.35;
      it.y = 0;
      it.ry = side < 0 ? 0 : Math.PI;
      it.sc = 1;
    };
    const anySide = (min, spread) => (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (min + r() * spread);
      it.y = 0;
      it.ry = r() * 6.28;
    };

    // ---- lamps, one style per world
    add([inst(P.candyLamp(), vc(), 22, false, true), inst(P.candyLampBulb(), glow('#fff2c8'), 22)], 22, 7, sideLamp, 11, [CANDY]);
    add([inst(P.tulipLamp(), vc(), 22, false, true), inst(P.tulipLampBulb(), glow('#ffe0ec'), 22)], 22, 7, sideLamp, 12, [GARDEN]);
    add([inst(P.starLamp(), vc(), 22, false, true), inst(P.starLampGlow(), glow('#fff0a0'), 22)], 22, 7, sideLamp, 13, [CLOUDS]);
    const lanternColors = ['#ffb3d6', '#ffe28a', '#aee4ff', '#d6b8ff'].map((c) => new THREE.Color(c));
    add([inst(P.carnivalLamp(), vc(), 22, false, true), inst(P.lanternGlow(), glow('#ffffff'), 22, true)], 22, 7, (it, r, i) => {
      sideLamp(it, r, i);
      it.color = lanternColors[i % lanternColors.length];
    }, 14, [CARNIVAL]);

    // ---- Candy Town
    const treeColors = ['#ffb3d6', '#d9c2ff', '#b8f0d9', '#ffd6b8', '#bfe3ff', '#ffc2e9'].map((c) => new THREE.Color(c));
    add([inst(P.cottonTree(), vc(), 26, true, true)], 26, 7.5, (it, r) => {
      anySide(7, 14)(it, r);
      it.sc = 0.9 + r() * 0.7;
      it.color = treeColors[Math.floor(r() * treeColors.length)];
    }, 21, [CANDY]);
    add([inst(P.lollipop(), vc(), 10, false, true)], 10, 19, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (6.4 + r() * 1.2);
      it.y = 0;
      it.ry = (r() - 0.5) * 0.6;
      it.sc = 0.85 + r() * 0.35;
    }, 31, [CANDY]);
    [['#fff8f0', '#ff5a6e', '#ff8fb1'], ['#fff2fa', '#ff8fc4', '#8fd3ff'], ['#f3fbff', '#7fb8ff', '#ffd23f']].forEach((d, k) => {
      add([inst(P.cottage(...d), vc(), 4)], 4, 44, (it, r) => {
        const side = r() < 0.5 ? -1 : 1;
        it.x = side * (12 + r() * 9);
        it.y = 0;
        it.ry = (side < 0 ? 0 : Math.PI) + (r() - 0.5) * 0.5;
        it.sc = 0.9 + r() * 0.3;
      }, 41 + k * 17, k === 0 ? [CANDY, GARDEN] : [CANDY]);
    });
    add([inst(P.mushroom(), vc(), 14)], 14, 11, (it, r) => {
      anySide(6.2, 10)(it, r);
      it.sc = 0.7 + r() * 0.8;
    }, 51, [CANDY]);
    add([inst(P.bush(), vc(), 18)], 18, 8.5, (it, r) => {
      anySide(5.9, 12)(it, r);
      it.sc = 0.8 + r() * 0.8;
    }, 61, [CANDY, GARDEN]);
    const balloonColors = ['#ff4f7e', '#ff8fc4', '#ff6fb5', '#b58cff', '#ffd23f'].map((c) => new THREE.Color(c));
    add([inst(P.heartBalloon(), glossMat(0xffffff, { vertexColors: true, roughness: 0.2, envMapIntensity: 0.6 }), 12, true)], 12, 15, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (6 + r() * 12);
      it.y = 3.5 + r() * 3;
      it.ry = (r() - 0.5) * 1.2;
      it.sc = 0.6 + r() * 0.35;
      it.bob = 0.35;
      it.phase = r() * 6;
      it.color = balloonColors[Math.floor(r() * balloonColors.length)];
    }, 71, [CANDY, CARNIVAL]);

    // ---- Strawberry Garden
    add([inst(P.appleTree(), vc(), 22, false, true)], 22, 8.5, (it, r) => {
      anySide(7.5, 13)(it, r);
      it.sc = 0.85 + r() * 0.5;
    }, 81, [GARDEN]);
    add([inst(P.giantStrawberry(), vc(), 10, false, true)], 10, 17, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (6.6 + r() * 4);
      it.y = 0;
      it.ry = r() * 6.28;
      it.rz = side * 0.12;
      it.sc = 0.8 + r() * 0.5;
    }, 82, [GARDEN]);
    add([inst(P.tulipPatch(), vc(), 24)], 24, 6, (it, r) => {
      anySide(5.9, 3.5)(it, r);
      it.sc = 0.9 + r() * 0.5;
    }, 83, [GARDEN]);
    add([inst(P.giantTeacup(), vc(), 6, false, true)], 6, 30, (it, r) => {
      anySide(8, 8)(it, r);
      it.sc = 1.1 + r() * 0.5;
    }, 84, [GARDEN]);
    add([inst(P.picnic(), vc(), 6)], 6, 28, (it, r) => {
      anySide(9, 9)(it, r);
      it.sc = 1.2 + r() * 0.4;
    }, 85, [GARDEN]);

    // ---- Cloud Kingdom
    add([inst(P.cloudPuff(), vc({ emissive: 0xfff0f8, emissiveIntensity: 0.25 }), 40)], 40, 4.3, (it, r, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      it.x = side * (5.4 + r() * 1.2);
      it.y = -0.2 + r() * 0.3;
      it.ry = r() * 6.28;
      it.sc = 0.55 + r() * 0.35;
      it.sy = 0.8;
    }, 91, [CLOUDS]);
    add([inst(P.floatingIsland(), vc(), 10, false, true)], 10, 20, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (11 + r() * 16);
      it.y = 3 + r() * 6;
      it.ry = r() * 6.28;
      it.sc = 0.8 + r() * 0.6;
      it.bob = 0.6;
      it.phase = r() * 6;
    }, 92, [CLOUDS]);
    [['#ff8fc4', '#ffffff'], ['#8fd3ff', '#fff08a']].forEach(([a, b], k) => {
      add([inst(P.hotAirBalloon(a, b), vc(), 6)], 6, 36, (it, r) => {
        const side = r() < 0.5 ? -1 : 1;
        it.x = side * (9 + r() * 22);
        it.y = 7 + r() * 11;
        it.ry = r() * 6.28;
        it.sc = 1 + r() * 0.6;
        it.bob = 0.9;
        it.phase = r() * 6;
      }, 93 + k, [CLOUDS]);
    });
    // big enough that the camera passes underneath even during Rainbow Rush
    add([inst(P.rainbowArch(), vc({ emissive: 0xffffff, emissiveIntensity: 0.15 }), 4)], 4, 52, (it) => {
      it.x = 0;
      it.y = 0;
      it.ry = 0;
      it.sc = 1.25;
    }, 95, [CLOUDS]);

    // ---- Starlight Carnival
    const bulbColors = ['#ffd6f0', '#fff2a0', '#a8e8ff', '#ffb0d0', '#ffffff'].map((c) => new THREE.Color(c).multiplyScalar(2.6));
    this.stringBulbs = inst(P.stringBulb(), basicMat(0xffffff), 300, true);
    add([this.stringBulbs], 300, 0.58, (it, r, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      it.x = side * 4.05;
      it.y = 0.36;
      it.ry = 0;
      it.sc = 1;
      it.color = bulbColors[(i >> 1) % bulbColors.length];
    }, 101, [CARNIVAL]);
    [['#ff6fae', '#ffffff'], ['#8f73e6', '#ffd23f']].forEach(([a, b], k) => {
      add([inst(P.circusTent(a, b), vc(), 5, false, true)], 5, 38, (it, r) => {
        const side = r() < 0.5 ? -1 : 1;
        it.x = side * (10 + r() * 10);
        it.y = 0;
        it.ry = side < 0 ? Math.PI / 2 : -Math.PI / 2;
        it.sc = 1 + r() * 0.4;
      }, 102 + k, [CARNIVAL]);
    });

    // ---- everywhere: low clouds drifting beside the road
    add([inst(cloudGeometry(4), vc({ emissive: 0xfff0f6, emissiveIntensity: 0.3 }), 10)], 10, 22, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (16 + r() * 16);
      it.y = 9 + r() * 7;
      it.ry = r() * 0.6;
      it.sc = 1.2 + r() * 1.4;
      it.bob = 0.5;
      it.phase = r() * 6;
    }, 111, null);

    this.buildLandmarks();
  }

  buildLandmarks() {
    const L = (this.landmarks = []);
    const vcm = toonMat(0xffffff, { vertexColors: true });
    const fw = P.ferrisWheel();
    const cabinColors = ['#ff8fc4', '#ffd23f', '#8fd3ff', '#b58cff', '#7fe0c0', '#ff9a6a', '#ffffff', '#ff6fae'].map((c) => new THREE.Color(c));
    const wheelLights = basicMat(new THREE.Color(2.6, 2.2, 1.6));
    this.glowMats.push(Object.assign(wheelLights, { userData: { base: new THREE.Color(1.1, 0.95, 0.75), always: 1.5 } }));
    L.push(new Landmarks(this, () => {
      const g = new THREE.Group();
      const stand = new THREE.Mesh(fw.stand, vcm);
      stand.castShadow = true;
      g.add(stand);
      const wheel = new THREE.Group();
      wheel.position.y = fw.hub;
      wheel.add(new THREE.Mesh(fw.wheel, vcm));
      wheel.add(new THREE.Mesh(fw.lights, wheelLights));
      g.add(wheel);
      const cabins = new THREE.InstancedMesh(fw.cabin, vcm, 8);
      cabinColors.forEach((c, i) => cabins.setColorAt(i, c));
      cabins.frustumCulled = false;
      g.add(cabins);
      g.userData = { wheel, cabins, m: new THREE.Matrix4(), p: new THREE.Vector3(), q: new THREE.Quaternion(), s: new THREE.Vector3(1, 1, 1) };
      return g;
    }, 2, 170, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (22 + r() * 8);
      it.ry = side * 0.35;
      it.sc = 1;
    }, (g, t) => {
      const u = g.userData;
      const a = t * 0.22;
      u.wheel.rotation.z = a;
      for (let i = 0; i < 8; i++) {
        const th = a + (i / 8) * Math.PI * 2;
        u.p.set(Math.cos(th) * fw.radius, fw.hub + Math.sin(th) * fw.radius, 0.1);
        u.m.compose(u.p, u.q, u.s);
        u.cabins.setMatrixAt(i, u.m);
      }
      u.cabins.instanceMatrix.needsUpdate = true;
    }, 121, [CARNIVAL]));

    const cz = P.carousel();
    const riderColors = ['#ff8fc4', '#8fd3ff', '#ffd23f', '#b58cff', '#7fe0c0', '#ffffff'].map((c) => new THREE.Color(c));
    L.push(new Landmarks(this, () => {
      const g = new THREE.Group();
      const base = new THREE.Mesh(cz.base, vcm);
      base.castShadow = true;
      g.add(base);
      const rotor = new THREE.Group();
      rotor.add(new THREE.Mesh(cz.top, vcm));
      const riders = new THREE.InstancedMesh(cz.rider, vcm, 6);
      riderColors.forEach((c, i) => riders.setColorAt(i, c));
      riders.frustumCulled = false;
      rotor.add(riders);
      g.add(rotor);
      g.userData = { rotor, riders, m: new THREE.Matrix4(), p: new THREE.Vector3(), q: new THREE.Quaternion(), e: new THREE.Euler(), s: new THREE.Vector3(1, 1, 1) };
      return g;
    }, 2, 120, (it, r) => {
      const side = r() < 0.5 ? -1 : 1;
      it.x = side * (13 + r() * 6);
      it.ry = 0;
      it.sc = 1;
    }, (g, t) => {
      const u = g.userData;
      u.rotor.rotation.y = t * 0.6;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        u.p.set(Math.cos(a) * 2.6, 1.6 + Math.sin(t * 2.2 + i * 1.7) * 0.45, Math.sin(a) * 2.6);
        u.e.set(0, -a, 0);
        u.q.setFromEuler(u.e);
        u.m.compose(u.p, u.q, u.s);
        u.riders.setMatrixAt(i, u.m);
      }
      u.riders.instanceMatrix.needsUpdate = true;
    }, 122, [CARNIVAL]));
  }

  // origin: where world 1 (Candy Town) starts
  reset(dist, origin = dist) {
    this.origin = origin;
    this.zonePair = -1;
    for (const s of this.scrollers) s.reset(dist);
    for (const l of this.landmarks) l.reset(dist);
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
    for (const m of this.glowMats) {
      const k = m.userData.always ?? 0.9 + lamps * 1.8;
      m.color.copy(m.userData.base).multiplyScalar(k);
    }
    num('bloom');
    const hills = num('hills');
    this.hills.position.y = -(1 - hills) * 75;
    const hz = this.pal.horizon;
    const tmp = (this._tmp ||= new THREE.Color());
    this.hillColors.forEach((c, i) => {
      tmp.copy(c).lerp(hz, 0.35);
      this.hills.setColorAt(i, tmp);
    });
    this.hills.instanceColor.needsUpdate = true;
    const night = num('stars');
    this.castle.material.color.setRGB(1 - night * 0.45, 1 - night * 0.5, 1 - night * 0.3);
    this.cloudMat.emissiveIntensity = 0.25 * (1 - night * 0.8);
  }

  update(dt, dist, camera, time) {
    // which two worlds are on screen, and where the border between them is
    const camS = dist - 26;
    const za = this.zoneIndexAt(camS);
    const borderS = this.origin + (za + 1) * ZONE_LEN;
    const ba = za % BIOMES.length, bb = (za + 1) % BIOMES.length;
    for (const set of this.sets) {
      for (const t of set.textures) set.scroll(t, dist);
      for (const m of set.mats) {
        m.map = set.textures[ba];
        m.userData.zone.uMapB.value = set.textures[bb];
        m.userData.zone.uZoneZ.value = dist - borderS;
      }
    }
    this.zoneNow = this.zoneIndexAt(dist);
    this.biomeNow = this.zoneNow % BIOMES.length;

    for (const s of this.scrollers) s.update(dist, time);
    for (const l of this.landmarks) l.update(dist, time);
    this.sky.position.copy(camera.position);
    this.stars.position.copy(camera.position);
    this.stars.rotation.y = time * 0.01;
    this.starUniforms.uTime.value = time;
    this.bg.position.set(camera.position.x * 0.9, 0, camera.position.z);
    for (const c of this.skyClouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 460) c.position.x -= 920;
    }
    bendUniforms.uBendX.value = Math.sin(dist * 0.0045) * 0.0011;
  }
}
