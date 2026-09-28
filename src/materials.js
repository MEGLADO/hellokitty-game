import * as THREE from 'three';
import { bendify } from './bend.js';

// Three-step cel shading ramp.
const gradientMap = (() => {
  const tex = new THREE.DataTexture(new Uint8Array([105, 190, 255]), 3, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
})();

// Shared rim light so characters pop at night.
export const rimUniforms = {
  uRimColor: { value: new THREE.Color('#ffd6f0') },
  uRimStrength: { value: 0.35 },
};

function rimExtra(shader) {
  shader.uniforms.uRimColor = rimUniforms.uRimColor;
  shader.uniforms.uRimStrength = rimUniforms.uRimStrength;
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\nuniform vec3 uRimColor;\nuniform float uRimStrength;')
    .replace(
      '#include <opaque_fragment>',
      `{
        float rimDot = 1.0 - clamp( dot( normal, normalize( vViewPosition ) ), 0.0, 1.0 );
        outgoingLight += uRimColor * pow( rimDot, 3.0 ) * uRimStrength;
      }
      #include <opaque_fragment>`
    );
}
rimExtra.key = 'rim';

export function toonMat(color, opts = {}) {
  const { rim = false, bend = true, ...rest } = opts;
  const m = new THREE.MeshToonMaterial({ color, gradientMap, ...rest });
  // far-away backdrop pieces skip the curved-world bend
  if (!bend) return m;
  return bendify(m, rim ? rimExtra : undefined);
}

export function glossMat(color, opts = {}) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.0, ...opts });
  return bendify(m);
}

export function basicMat(color, opts = {}) {
  return bendify(new THREE.MeshBasicMaterial({ color, ...opts }));
}

// Inverted-hull outline: back faces pushed out along the normal.
export const outlineUniforms = { uOutline: { value: 0.03 } };
function outlineExtra(shader) {
  shader.uniforms.uOutline = outlineUniforms.uOutline;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nuniform float uOutline;')
    .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed += normalize( normal ) * uOutline;');
}
outlineExtra.key = 'outline';

export const outlineMat = bendify(
  new THREE.MeshBasicMaterial({ color: 0x1d0f18, side: THREE.BackSide }),
  outlineExtra
);
