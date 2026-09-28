import * as THREE from 'three';
import { BEND_PARS, BEND_APPLY, bendUniforms } from './bend.js';

// Sprite ids in the atlas
export const SP = { GLOW: 0, STAR: 1, HEART: 2, SPARKLE: 3, CONFETTI: 4, RING: 5, PETAL: 6, PUFF: 7, BUTTERFLY: 8, STREAK: 9, GEM: 10, WISP: 11 };

const vert = (bend) => /* glsl */ `
${BEND_PARS}
uniform float uScale;
uniform float uTime;
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
attribute float aSprite;
attribute float aRot;
varying vec3 vColor;
varying float vAlpha;
varying float vSprite;
varying float vRot;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  ${bend ? BEND_APPLY : ''}
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = aSize * uScale / max(-mvPosition.z, 0.2);
  vColor = aColor;
  vAlpha = aAlpha;
  vSprite = aSprite;
  // butterflies flap between two frames
  if (aSprite > 7.5 && aSprite < 8.5 && sin(uTime * 22.0 + position.x * 3.1 + position.y * 5.3) < 0.0) vSprite = 12.0;
  vRot = aRot;
}`;

const FRAG = /* glsl */ `
uniform sampler2D uAtlas;
varying vec3 vColor;
varying float vAlpha;
varying float vSprite;
varying float vRot;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  p = mat2(c, -s, s, c) * p * 1.08;
  p += 0.5;
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) discard;
  float col = mod(vSprite, 4.0);
  float row = floor(vSprite / 4.0);
  vec2 uv = vec2((col + p.x) / 4.0, 1.0 - (row + p.y) / 4.0);
  vec4 t = texture2D(uAtlas, uv);
  float a = t.a * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * t.rgb, a);
}`;

class System {
  constructor(max, atlas, blending, bend = true) {
    this.max = max;
    this.count = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.sprite = new Float32Array(max);
    this.rot = new Float32Array(max);
    // simulation state
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.size1 = new Float32Array(max);
    this.spin = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.world = new Uint8Array(max);
    this.a0 = new Float32Array(max);
    this.twinkle = new Float32Array(max);

    const attr = (arr, n) => {
      const a = new THREE.BufferAttribute(arr, n);
      a.setUsage(THREE.DynamicDrawUsage);
      return a;
    };
    g.setAttribute('position', attr(this.pos, 3));
    g.setAttribute('aColor', attr(this.col, 3));
    g.setAttribute('aSize', attr(this.size, 1));
    g.setAttribute('aAlpha', attr(this.alpha, 1));
    g.setAttribute('aSprite', attr(this.sprite, 1));
    g.setAttribute('aRot', attr(this.rot, 1));
    g.setDrawRange(0, 0);
    this.geo = g;
    this.uniforms = { uAtlas: { value: atlas }, uScale: { value: 500 }, uTime: { value: 0 }, ...bendUniforms };
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vert(bend),
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
  }

  emit(o) {
    let i = this.count;
    if (i >= this.max) {
      // recycle a random old particle
      i = Math.floor(Math.random() * this.max);
    } else {
      this.count++;
    }
    const c = o.color || [1, 1, 1];
    this.pos[i * 3] = o.x;
    this.pos[i * 3 + 1] = o.y;
    this.pos[i * 3 + 2] = o.z;
    this.vel[i * 3] = o.vx || 0;
    this.vel[i * 3 + 1] = o.vy || 0;
    this.vel[i * 3 + 2] = o.vz || 0;
    this.col[i * 3] = c[0];
    this.col[i * 3 + 1] = c[1];
    this.col[i * 3 + 2] = c[2];
    this.life[i] = 0;
    this.maxLife[i] = o.life || 1;
    this.size0[i] = o.size ?? 0.3;
    this.size1[i] = o.sizeEnd ?? this.size0[i];
    this.size[i] = this.size0[i];
    this.sprite[i] = o.sprite || 0;
    this.rot[i] = o.rot ?? Math.random() * 6.28;
    this.spin[i] = o.spin || 0;
    this.grav[i] = o.gravity || 0;
    this.drag[i] = o.drag || 0;
    this.world[i] = o.world === false ? 0 : 1;
    this.a0[i] = o.alpha ?? 1;
    this.alpha[i] = this.a0[i];
    this.twinkle[i] = o.twinkle || 0;
  }

  kill(i) {
    const last = --this.count;
    if (i === last) return;
    const copy3 = (arr) => {
      arr[i * 3] = arr[last * 3];
      arr[i * 3 + 1] = arr[last * 3 + 1];
      arr[i * 3 + 2] = arr[last * 3 + 2];
    };
    copy3(this.pos);
    copy3(this.vel);
    copy3(this.col);
    for (const arr of [this.size, this.alpha, this.sprite, this.rot, this.life, this.maxLife, this.size0, this.size1, this.spin, this.grav, this.drag, this.world, this.a0, this.twinkle]) {
      arr[i] = arr[last];
    }
  }

  update(dt, worldDz, time) {
    this.uniforms.uTime.value = time;
    for (let i = 0; i < this.count; i++) {
      this.life[i] += dt;
      const L = this.maxLife[i];
      if (this.life[i] >= L) {
        this.kill(i);
        i--;
        continue;
      }
      const t = this.life[i] / L;
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt;
      this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt + (this.world[i] ? worldDz : 0);
      this.rot[i] += this.spin[i] * dt;
      this.size[i] = this.size0[i] + (this.size1[i] - this.size0[i]) * t;
      // pop in quickly, fade out at the end
      let a = this.a0[i] * Math.min(1, t * 8) * (t > 0.6 ? 1 - (t - 0.6) / 0.4 : 1);
      if (this.twinkle[i]) a *= 0.55 + 0.45 * Math.sin(time * this.twinkle[i] + i);
      this.alpha[i] = a;
    }
    const n = this.count;
    this.geo.setDrawRange(0, n);
    const attrs = this.geo.attributes;
    for (const key of ['position', 'aColor', 'aSize', 'aAlpha', 'aSprite', 'aRot']) {
      const a = attrs[key];
      a.clearUpdateRanges();
      a.addUpdateRange(0, Math.max(1, n) * a.itemSize);
      a.needsUpdate = true;
    }
  }
}

export class Particles {
  constructor(scene, atlas) {
    this.add = new System(900, atlas, THREE.AdditiveBlending);
    this.norm = new System(700, atlas, THREE.NormalBlending);
    this.norm.points.renderOrder = 4;
    // sky effects (fireworks) ignore the curved-world bend
    this.sky = new System(700, atlas, THREE.AdditiveBlending, false);
    this.sky.points.renderOrder = -7;
    scene.add(this.norm.points);
    scene.add(this.add.points);
    scene.add(this.sky.points);
    this.rockets = [];
    this.scale = 1;
    this.time = 0;
  }

  setScale(v) {
    this.add.uniforms.uScale.value = v;
    this.norm.uniforms.uScale.value = v;
    this.sky.uniforms.uScale.value = v;
  }

  update(dt, worldDz) {
    this.time += dt;
    this.updateRockets(dt);
    this.add.update(dt, worldDz, this.time);
    this.norm.update(dt, worldDz, this.time);
    this.sky.update(dt, 0, this.time);
  }

  // ---- fireworks ----
  // Launch a rocket from (x, y0, z) that bursts after `delay` seconds.
  firework(x, y0, z, color, delay = 0.9, onBurst) {
    this.rockets.push({ x, y: y0, z, vy: 26 + Math.random() * 6, t: delay, color, onBurst, trail: 0 });
  }

  updateRockets(dt) {
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.t -= dt;
      r.vy *= 1 - dt * 0.9;
      r.y += r.vy * dt;
      r.trail -= dt;
      if (r.trail <= 0) {
        r.trail = 0.016;
        this.sky.emit({ x: r.x, y: r.y, z: r.z, vy: -1, color: [1.5, 1.2, 0.9], size: 1.6, sizeEnd: 0.4, sprite: SP.STREAK, rot: 0, life: 0.45, world: false });
      }
      if (r.t <= 0) {
        this.burstSky(r.x, r.y, r.z, r.color);
        if (r.onBurst) r.onBurst();
        this.rockets.splice(i, 1);
      }
    }
  }

  burstSky(x, y, z, color) {
    const n = 90;
    const alt = color.map((v) => Math.min(2, v * 0.6 + 0.8));
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      const sp = 16 + Math.random() * 4;
      this.sky.emit({
        x, y, z,
        vx: Math.sin(b) * Math.cos(a) * sp, vy: Math.cos(b) * sp, vz: Math.sin(b) * Math.sin(a) * sp * 0.5,
        color: i % 4 === 0 ? alt : color, size: 2.8, sizeEnd: 0.5, sprite: i % 3 ? SP.GLOW : SP.SPARKLE,
        life: 1.6 + Math.random() * 0.8, gravity: 3, drag: 1.1, world: false, twinkle: i % 5 === 0 ? 14 : 0,
      });
    }
    this.sky.emit({ x, y, z, color, size: 4, sizeEnd: 26, sprite: SP.RING, life: 0.55, world: false, rot: 0 });
    this.sky.emit({ x, y, z, color: [2, 2, 2], size: 14, sizeEnd: 3, sprite: SP.GLOW, life: 0.35, world: false });
  }

  // -------- effects --------
  burst(x, y, z, { count = 14, color = [1, 0.5, 0.8], speed = 4, size = 0.35, sprite = SP.SPARKLE, life = 0.7, additive = true, gravity = 0, spread = 1, up = 0 } = {}) {
    const sys = additive ? this.add : this.norm;
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = Math.acos(2 * Math.random() - 1);
      const sp = speed * (0.4 + Math.random() * 0.6);
      sys.emit({
        x, y, z,
        vx: Math.sin(b) * Math.cos(a) * sp * spread,
        vy: Math.cos(b) * sp + up,
        vz: Math.sin(b) * Math.sin(a) * sp * spread,
        color: Array.isArray(color[0]) ? color[i % color.length] : color,
        size: size * (0.6 + Math.random() * 0.8),
        sizeEnd: size * 0.2,
        sprite: Array.isArray(sprite) ? sprite[i % sprite.length] : sprite,
        life: life * (0.6 + Math.random() * 0.6),
        spin: (Math.random() - 0.5) * 8,
        drag: 3,
        gravity,
      });
    }
  }

  ring(x, y, z, color = [1, 0.6, 0.85], size = 2.2, life = 0.45) {
    this.add.emit({ x, y, z, color, size: 0.3, sizeEnd: size, sprite: SP.RING, life, rot: 0 });
  }

  heartPop(x, y, z, double) {
    const pink = [1.6, 0.45, 0.9];
    const gold = [1.7, 1.25, 0.35];
    this.burst(x, y, z, { count: 9, color: double ? [gold, [1.4, 1.4, 1.4]] : [pink, [1.4, 1.2, 1.4]], speed: 3.2, size: 0.32, sprite: SP.SPARKLE, life: 0.5 });
    this.norm.emit({ x, y, z, vy: 1.8, color: double ? [1, 0.82, 0.3] : [1, 0.42, 0.7], size: 0.45, sizeEnd: 0.1, sprite: SP.HEART, life: 0.55, rot: 0 });
    this.ring(x, y, z, double ? [1.4, 1.1, 0.4] : [1.2, 0.5, 0.9], 1.4, 0.3);
  }

  bigPop(x, y, z, colors) {
    this.burst(x, y, z, { count: 26, color: colors, speed: 6, size: 0.5, sprite: [SP.SPARKLE, SP.STAR, SP.GLOW], life: 0.9 });
    this.burst(x, y, z, { count: 10, color: colors.map((c) => c.map((v) => Math.min(1, v * 0.7))), speed: 4, size: 0.4, sprite: SP.HEART, life: 1, additive: false, gravity: 3 });
    this.ring(x, y, z, colors[0], 3.2, 0.5);
    this.ring(x, y, z, [1.5, 1.5, 1.5], 2.2, 0.35);
  }

  dust(x, y, z, n = 6, color = [1, 0.86, 0.93]) {
    for (let i = 0; i < n; i++) {
      this.norm.emit({
        x: x + (Math.random() - 0.5) * 0.6, y: y + 0.08, z: z + (Math.random() - 0.2) * 0.4,
        vx: (Math.random() - 0.5) * 2.2, vy: 0.6 + Math.random() * 1.2, vz: 1 + Math.random() * 2,
        color, size: 0.45, sizeEnd: 0.9, sprite: SP.PUFF, life: 0.45 + Math.random() * 0.2, drag: 3, alpha: 0.75,
      });
    }
  }

  trailSparkle(x, y, z, color) {
    this.add.emit({
      x: x + (Math.random() - 0.5) * 0.5, y: y + Math.random() * 0.3, z: z + 0.2,
      vx: (Math.random() - 0.5) * 0.5, vy: Math.random() * 0.8, vz: 0,
      color, size: 0.18 + Math.random() * 0.12, sizeEnd: 0.02, sprite: SP.SPARKLE, life: 0.55, spin: 3,
    });
  }

  crash(x, y, z) {
    this.burst(x, y, z, { count: 18, color: [[1.6, 1.4, 0.4], [1.5, 1.5, 1.5]], speed: 6, size: 0.5, sprite: SP.STAR, life: 0.9 });
    this.dust(x, y, z, 12, [1, 0.9, 0.95]);
  }

  poof(x, y, z) {
    for (let i = 0; i < 14; i++) {
      this.norm.emit({
        x: x + (Math.random() - 0.5) * 1.4, y: y + Math.random() * 1.6, z: z + (Math.random() - 0.5) * 0.8,
        vx: (Math.random() - 0.5) * 3, vy: Math.random() * 2, vz: (Math.random() - 0.5) * 3,
        color: [1, 0.92, 0.97], size: 0.8, sizeEnd: 1.6, sprite: SP.PUFF, life: 0.6, drag: 2.5, alpha: 0.9,
      });
    }
    this.burst(x, y + 0.8, z, { count: 12, color: [[1.4, 1.2, 1.5]], speed: 5, size: 0.4, sprite: SP.SPARKLE, life: 0.6 });
  }

  confetti(camera, n = 70) {
    const colors = [[1, 0.35, 0.6], [1, 0.85, 0.3], [0.45, 0.85, 1], [0.55, 0.95, 0.7], [0.8, 0.6, 1], [1, 1, 1]];
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    for (let i = 0; i < n; i++) {
      const d = 4 + Math.random() * 3;
      const x = camera.position.x + dir.x * d + (Math.random() - 0.5) * 5;
      const y = camera.position.y + dir.y * d + 2.5 + Math.random() * 2;
      const z = camera.position.z + dir.z * d + (Math.random() - 0.5) * 2;
      this.norm.emit({
        x, y, z, vx: (Math.random() - 0.5) * 2, vy: -Math.random() * 1.5, vz: (Math.random() - 0.5),
        color: colors[i % colors.length], size: 0.22, sprite: i % 3 === 0 ? SP.HEART : SP.CONFETTI,
        life: 2.2 + Math.random(), spin: (Math.random() - 0.5) * 10, gravity: 2.2, drag: 1.2, world: false,
      });
    }
  }
}
