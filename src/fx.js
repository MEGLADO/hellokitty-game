import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 0.35 },
    uVignetteColor: { value: new THREE.Color('#7a1f5c') },
    uSpeed: { value: 0 },
    uAberr: { value: 0 },
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Color(1, 1, 1) },
    uAspect: { value: 1 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uSpeed, uAberr, uFlash, uAspect;
    uniform vec3 uVignetteColor, uFlashColor;
    varying vec2 vUv;
    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    void main() {
      vec2 c = vUv - 0.5;
      vec3 col;
      if (uAberr > 0.001) {
        vec2 off = c * uAberr * 0.018;
        col.r = texture2D(tDiffuse, vUv + off).r;
        col.g = texture2D(tDiffuse, vUv).g;
        col.b = texture2D(tDiffuse, vUv - off).b;
      } else {
        col = texture2D(tDiffuse, vUv).rgb;
      }
      vec2 q = c * vec2(uAspect, 1.0);
      float r = length(q);
      if (uSpeed > 0.001) {
        float ang = atan(q.y, q.x);
        float bin = floor(ang * 38.0);
        float n = hash(bin * 1.7 + floor(uTime * 14.0));
        float streak = step(0.8, n) * smoothstep(0.3, 0.75, r);
        float along = fract(r * 2.5 - uTime * 4.0 + hash(bin) * 3.0);
        streak *= smoothstep(0.0, 0.25, along) * smoothstep(1.0, 0.55, along);
        col += vec3(1.0, 0.93, 1.0) * streak * uSpeed * 0.55;
      }
      float v = smoothstep(0.35, 1.05, r);
      col = mix(col, col * uVignetteColor * 1.4, v * uVignette);
      col = mix(col, uFlashColor, uFlash);
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export class FX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.composer = new EffectComposer(renderer);
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.5, 1.0);
    // Bloom only things brighter than white in any channel (glowing hearts,
    // lamps, sparkles) instead of every pale pastel surface.
    const hp = this.bloom.materialHighPassFilter;
    hp.fragmentShader = hp.fragmentShader.replace('float v = luminance( texel.xyz );', 'float v = max( texel.r, max( texel.g, texel.b ) );');
    hp.needsUpdate = true;
    this.bloom.highPassUniforms.smoothWidth.value = 0.35;
    this.composer.addPass(this.bloom);
    this.final = new ShaderPass(FinalShader);
    this.composer.addPass(this.final);
    this.composer.addPass(new OutputPass());
    this.u = this.final.uniforms;
    this.bloomScale = 1;
    // lower-resolution bloom on smaller GPUs
    const setSize = this.bloom.setSize.bind(this.bloom);
    this.bloom.setSize = (w, h) => setSize(Math.max(64, Math.round(w * this.bloomScale)), Math.max(64, Math.round(h * this.bloomScale)));
  }

  setQuality(level) {
    this.level = level;
    this.bloom.enabled = level !== 'low';
    this.bloomScale = level === 'high' ? 1 : 0.5;
  }

  setSize(w, h, pr) {
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);
    this.u.uAspect.value = w / h;
  }

  render(dt) {
    this.u.uTime.value += dt;
    this.composer.render(dt);
  }
}
