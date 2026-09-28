import * as THREE from 'three';
import { BEND_PARS, BEND_APPLY, bendUniforms } from './bend.js';

// A glowing rainbow ribbon that streams behind Kitty during Rainbow Rush.
export class Trail {
  constructor(scene, n = 48) {
    this.n = n;
    this.pts = [];
    for (let i = 0; i < n; i++) this.pts.push(new THREE.Vector3(0, 0, i * 0.5));
    const pos = new Float32Array(n * 2 * 3);
    const uv = new Float32Array(n * 2 * 2);
    const idx = [];
    for (let i = 0; i < n; i++) {
      uv[i * 4] = i / (n - 1);
      uv[i * 4 + 1] = 0;
      uv[i * 4 + 2] = i / (n - 1);
      uv[i * 4 + 3] = 1;
      if (i < n - 1) {
        const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
        idx.push(a, c, b, b, c, d);
      }
    }
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(pos, 3);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);
    this.uniforms = { uAlpha: { value: 0 }, uTime: { value: 0 }, ...bendUniforms };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        ${BEND_PARS}
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          ${BEND_APPLY}
          gl_Position = projectionMatrix * mvPosition;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uAlpha;
        uniform float uTime;
        varying vec2 vUv;
        vec3 band(float v) {
          vec3 c[6];
          c[0] = vec3(1.0, 0.35, 0.5);
          c[1] = vec3(1.0, 0.62, 0.3);
          c[2] = vec3(1.0, 0.93, 0.4);
          c[3] = vec3(0.45, 0.95, 0.6);
          c[4] = vec3(0.4, 0.75, 1.0);
          c[5] = vec3(0.72, 0.5, 1.0);
          float f = clamp(v, 0.0, 0.999) * 6.0;
          int i = int(floor(f));
          vec3 col = c[0];
          for (int k = 0; k < 6; k++) { if (k == i) col = c[k]; }
          return col;
        }
        void main() {
          float edge = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
          float fade = pow(1.0 - vUv.x, 2.0) * smoothstep(0.0, 0.05, vUv.x);
          float shimmer = 0.9 + 0.1 * sin(vUv.x * 40.0 - uTime * 18.0);
          vec3 col = band(vUv.y) * shimmer;
          gl_FragColor = vec4(col, edge * fade * uAlpha * 0.85);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(g, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 6;
    scene.add(this.mesh);
    this.alpha = 0;
    this.width = 0.95;
  }

  reset(x, y) {
    for (let i = 0; i < this.n; i++) this.pts[i].set(x, y, i * 0.5);
  }

  update(dt, head, worldDz, active, time) {
    this.alpha += ((active ? 1 : 0) - this.alpha) * Math.min(1, dt * (active ? 5 : 2.5));
    this.uniforms.uAlpha.value = this.alpha;
    this.uniforms.uTime.value = time;
    this.mesh.visible = this.alpha > 0.01;
    if (!this.mesh.visible) return;
    for (let i = this.n - 1; i > 0; i--) {
      this.pts[i].copy(this.pts[i - 1]);
      this.pts[i].z += worldDz;
    }
    this.pts[0].copy(head);
    // keep the points spaced along the direction of travel
    for (let i = 1; i < this.n; i++) {
      const p = this.pts[i];
      const prev = this.pts[i - 1];
      if (p.z < prev.z + 0.05) p.z = prev.z + 0.05;
    }
    const a = this.posAttr.array;
    const w = this.width / 2;
    for (let i = 0; i < this.n; i++) {
      const p = this.pts[i];
      a[i * 6] = p.x - w;
      a[i * 6 + 1] = p.y;
      a[i * 6 + 2] = p.z;
      a[i * 6 + 3] = p.x + w;
      a[i * 6 + 4] = p.y;
      a[i * 6 + 5] = p.z;
    }
    this.posAttr.needsUpdate = true;
  }
}
