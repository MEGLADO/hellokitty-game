import * as THREE from 'three';
import { toonMat, glossMat, basicMat, outlineMat } from './materials.js';
import { earGeometry, bowGeometries, starGeometry, cloudGeometry } from './geom.js';
import { BEND_PARS, BEND_APPLY, bendUniforms } from './bend.js';

const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));

// A bubbly iridescent shell used for the shield.
function bubbleMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uAlpha: { value: 1 },
      ...bendUniforms,
    },
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
      uniform float uAlpha;
      varying vec3 vN;
      varying vec3 vV;
      vec3 hue(float h) {
        return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
      }
      void main() {
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 2.2);
        vec3 col = mix(vec3(0.75, 0.9, 1.0), hue(f * 1.4 + uTime * 0.15 + vN.y * 0.3), 0.55);
        float glint = pow(max(dot(normalize(vN), normalize(vec3(-0.4, 0.6, 0.7))), 0.0), 40.0);
        gl_FragColor = vec4(col * (rim * 1.05 + 0.04) + glint * 1.2, (rim * 0.6 + 0.03 + glint * 0.8) * uAlpha);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

export class Kitty {
  constructor() {
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.mats = {
      white: toonMat(0xffffff, { rim: true }),
      black: basicMat(0x1c1017),
      shine: basicMat(0xffffff),
      nose: toonMat(0xffc41f),
      bow: glossMat(0xe8112d, { roughness: 0.6, envMapIntensity: 0.3 }),
      shirt: toonMat(0xffd23f, { rim: true }),
      overalls: toonMat(0x2f63d6, { rim: true }),
      gold: glossMat(0xffc93c, { roughness: 0.25, metalness: 0.6, emissive: 0x6b4a00, emissiveIntensity: 0.4 }),
      acc: glossMat(0xff8fc0, { roughness: 0.35 }),
      accGlow: glossMat(0xffe066, { emissive: 0xffb700, emissiveIntensity: 1.3, roughness: 0.3 }),
    };
    this.pose = {
      legL: 0, legR: 0, armLx: 0, armRx: 0, armLz: -0.35, armRz: 0.35,
      tiltX: 0, rotX: 0, lift: 0, headZ: 0, headX: 0, spin: 0,
    };
    this.mode = 'idle';
    this.time = 0;
    this.phase = 0;
    this.squash = 0;
    this.squashV = 0;
    this.blinkT = 2;
    this.waveT = 2.5;
    this.rainbowBow = false;
    this.build();
  }

  add(parent, geo, mat, outline = false) {
    const m = new THREE.Mesh(geo, mat);
    parent.add(m);
    if (outline) {
      const o = new THREE.Mesh(geo, outlineMat);
      m.add(o);
    }
    return m;
  }

  build() {
    const M = this.mats;
    this.body.position.y = 0.03;

    // HEAD
    const head = (this.head = new THREE.Group());
    head.position.set(0, 1.07, 0);
    this.body.add(head);
    const headGeo = new THREE.SphereGeometry(0.5, 48, 32);
    headGeo.scale(1.2, 0.9, 1.0);
    this.add(head, headGeo, M.white, true);

    const earGeo = earGeometry();
    for (const side of [-1, 1]) {
      const ear = this.add(head, earGeo, M.white, true);
      ear.position.set(side * 0.33, 0.25, 0.03);
      ear.rotation.z = -side * 0.52;
    }

    // eyes (with a tiny shine) and a hidden pair of dizzy X eyes
    const eyeGeo = new THREE.SphereGeometry(0.5, 20, 14);
    eyeGeo.scale(0.1, 0.142, 0.06);
    const shineGeo = new THREE.SphereGeometry(0.017, 8, 6);
    this.eyes = [];
    this.xEyes = new THREE.Group();
    head.add(this.xEyes);
    const xGeo = new THREE.BoxGeometry(0.13, 0.026, 0.02);
    for (const side of [-1, 1]) {
      const eye = this.add(head, eyeGeo, M.black);
      eye.position.set(side * 0.205, -0.02, -0.458);
      eye.rotation.y = side * 0.38;
      const shine = new THREE.Mesh(shineGeo, M.shine);
      shine.position.set(0.016, 0.03, -0.027);
      eye.add(shine);
      this.eyes.push(eye);
      for (const r of [0.8, -0.8]) {
        const bar = new THREE.Mesh(xGeo, M.black);
        bar.position.set(side * 0.205, -0.02, -0.47);
        bar.rotation.set(0, side * 0.38, r);
        this.xEyes.add(bar);
      }
    }
    this.xEyes.visible = false;

    const noseGeo = new THREE.SphereGeometry(0.5, 16, 12);
    noseGeo.scale(0.13, 0.085, 0.07);
    const nose = this.add(head, noseGeo, M.nose);
    nose.position.set(0, -0.125, -0.475);

    const whiskerGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.34, 6);
    whiskerGeo.rotateZ(Math.PI / 2);
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const w = this.add(head, whiskerGeo, M.black);
        w.position.set(side * 0.66, -0.035 - i * 0.075, -0.24 + i * 0.02);
        w.rotation.z = side * (0.16 - i * 0.16);
        w.rotation.y = side * 0.18;
      }
    }

    // bow on her left ear
    this.bow = new THREE.Group();
    this.bow.position.set(-0.31, 0.33, -0.07);
    this.bow.rotation.set(-0.12, 0.25, 0.42);
    this.bow.scale.setScalar(0.5);
    head.add(this.bow);
    for (const g of bowGeometries(2)) this.add(this.bow, g, M.bow, true);

    this.acc = new THREE.Group();
    head.add(this.acc);

    // BODY
    const shirt = this.add(this.body, new THREE.CapsuleGeometry(0.24, 0.16, 8, 22), M.shirt, true);
    shirt.position.y = 0.47;
    const overallsGeo = new THREE.CapsuleGeometry(0.258, 0.06, 8, 22);
    overallsGeo.scale(1, 1, 0.96);
    const overalls = this.add(this.body, overallsGeo, M.overalls, true);
    overalls.position.y = 0.34;
    const buttonGeo = new THREE.SphereGeometry(0.035, 10, 8);
    for (const side of [-1, 1]) {
      const b = this.add(this.body, buttonGeo, M.shirt);
      b.position.set(side * 0.09, 0.5, -0.235);
    }

    // arms
    const armGeo = new THREE.CapsuleGeometry(0.078, 0.14, 6, 14);
    const sleeveGeo = new THREE.CylinderGeometry(0.105, 0.094, 0.13, 16);
    this.arms = [];
    for (const side of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(side * 0.24, 0.6, 0);
      this.body.add(arm);
      const a = this.add(arm, armGeo, M.white, true);
      a.position.y = -0.15;
      const s = this.add(arm, sleeveGeo, M.shirt, true);
      s.position.y = -0.035;
      this.arms.push(arm);
    }

    // legs
    const legGeo = new THREE.CapsuleGeometry(0.1, 0.07, 6, 14);
    this.legs = [];
    for (const side of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.12, 0.2, 0);
      this.body.add(leg);
      const l = this.add(leg, legGeo, M.white, true);
      l.position.y = -0.1;
      this.legs.push(leg);
    }

    const tailGeo = new THREE.CapsuleGeometry(0.055, 0.13, 4, 10);
    const tail = this.add(this.body, tailGeo, M.white, true);
    tail.position.set(0, 0.26, 0.25);
    tail.rotation.x = 0.95;
    this.tail = tail;

    // blob shadow
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 1.1), null);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.renderOrder = 1;
    this.root.add(this.shadow);

    // rainbow cloud she rides during Rainbow Rush
    this.cloud = new THREE.Mesh(cloudGeometry(3, 0xffffff), toonMat(0xffffff, { vertexColors: true, emissive: 0xffc6e6, emissiveIntensity: 0.35 }));
    this.cloud.scale.set(0.42, 0.34, 0.5);
    this.cloud.position.y = -0.12;
    this.cloud.visible = false;
    this.root.add(this.cloud);
    this.cloudAmt = 0;

    // shield bubble
    this.bubbleMat = bubbleMaterial();
    this.bubble = new THREE.Mesh(new THREE.SphereGeometry(1.0, 32, 20), this.bubbleMat);
    this.bubble.position.y = 0.78;
    this.bubble.visible = false;
    this.root.add(this.bubble);
    this.bubbleAmt = 0;

    // magnet halo on the ground
    this.halo = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.05, 8, 40),
      basicMat(new THREE.Color(2.2, 0.55, 1.2), { transparent: true, opacity: 0.9 })
    );
    this.halo.rotation.x = Math.PI / 2;
    this.halo.visible = false;
    this.root.add(this.halo);

    // dizzy stars
    this.dizzy = new THREE.Group();
    this.dizzy.position.y = 1.75;
    const starGeo = starGeometry(0.22);
    const starMat = glossMat(0xffd84a, { emissive: 0xffa800, emissiveIntensity: 0.9 });
    for (let i = 0; i < 3; i++) {
      const s = new THREE.Mesh(starGeo, starMat);
      this.dizzy.add(s);
    }
    this.dizzy.visible = false;
    this.root.add(this.dizzy);
  }

  setShadowMaterial(mat) {
    this.shadow.material = mat;
  }

  setOutfit(outfit) {
    const M = this.mats;
    this.rainbowBow = outfit.bow === 'rainbow';
    if (!this.rainbowBow) M.bow.color.set(outfit.bow);
    M.overalls.color.set(outfit.overalls);
    M.shirt.color.set(outfit.shirt);
    // accessories are built once and reused
    while (this.acc.children.length) this.acc.remove(this.acc.children[0]);
    if (outfit.acc) this.acc.add(this.accessory(outfit.acc));
    if (outfit.acc === 'flower') M.acc.color.set(0xffa3cf);
    if (outfit.acc === 'crown') M.acc.color.set(0xff4f97);
  }

  accessory(kind) {
    const cache = (this.accCache ||= {});
    if (cache[kind]) return cache[kind];
    const M = this.mats;
    const g = new THREE.Group();
    if (kind === 'flower') {
      const petal = new THREE.SphereGeometry(0.075, 12, 10);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const p = this.add(g, petal, M.acc, true);
        p.position.set(Math.cos(a) * 0.075, Math.sin(a) * 0.075, 0);
        p.scale.set(1, 1, 0.55);
      }
      const c = this.add(g, new THREE.SphereGeometry(0.05, 10, 8), M.nose);
      c.position.z = -0.02;
      g.position.set(0.36, 0.28, -0.2);
      g.rotation.y = 0.5;
    } else if (kind === 'sailor') {
      const white = toonMat(0xffffff);
      const hat = this.add(g, new THREE.CylinderGeometry(0.2, 0.23, 0.13, 24), white, true);
      hat.position.y = 0.06;
      const band = this.add(g, new THREE.CylinderGeometry(0.235, 0.235, 0.05, 24), toonMat(0x1f3170));
      band.position.y = 0.02;
      const brim = this.add(g, new THREE.TorusGeometry(0.23, 0.035, 8, 24), white, true);
      brim.rotation.x = Math.PI / 2;
      g.position.set(0.12, 0.43, 0.02);
      g.rotation.z = -0.22;
    } else if (kind === 'star') {
      const s = this.add(g, starGeometry(0.34), M.accGlow, true);
      s.position.set(0.34, 0.3, -0.12);
      s.rotation.set(0, 0.4, -0.2);
    } else if (kind === 'crown') {
      const ring = this.add(g, new THREE.CylinderGeometry(0.19, 0.2, 0.1, 24, 1, true), M.gold, true);
      ring.position.y = 0.05;
      const spikeGeo = new THREE.ConeGeometry(0.05, 0.14, 8);
      const gemGeo = new THREE.SphereGeometry(0.03, 8, 6);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const spike = this.add(g, spikeGeo, M.gold);
        spike.position.set(Math.cos(a) * 0.19, 0.16, Math.sin(a) * 0.19);
        const gem = this.add(g, gemGeo, M.acc);
        gem.position.set(Math.cos(a) * 0.2, 0.05, Math.sin(a) * 0.2);
      }
      g.position.set(0.1, 0.44, 0);
      g.rotation.z = -0.18;
    }
    g.traverse((o) => {
      if (o.isMesh && o.material !== outlineMat) o.castShadow = true;
    });
    cache[kind] = g;
    return g;
  }

  // Kicks for squash & stretch.
  kick(amount) {
    this.squashV += amount;
  }

  update(dt, s) {
    // s: { mode, speed, vx, height, flying, shield, magnet, facing }
    this.time += dt;
    const t = this.time;
    const P = this.pose;
    const mode = s.mode;
    const tgt = {
      legL: 0, legR: 0, armLx: 0, armRx: 0, armLz: -0.32, armRz: 0.32,
      tiltX: 0, rotX: 0, lift: 0, headZ: 0, headX: 0, spin: 0,
    };
    let lambda = 16;
    let bob = 0;

    if (mode === 'run') {
      const freq = 2.3 + s.speed * 0.075;
      this.phase += dt * freq * Math.PI * 2;
      const sn = Math.sin(this.phase);
      tgt.legL = sn * 0.95;
      tgt.legR = -sn * 0.95;
      tgt.armLx = -sn * 0.9;
      tgt.armRx = sn * 0.9;
      tgt.armLz = -0.28;
      tgt.armRz = 0.28;
      tgt.tiltX = -0.1;
      tgt.headZ = Math.sin(this.phase) * 0.05;
      tgt.headX = 0.04;
      bob = Math.abs(Math.cos(this.phase)) * 0.085;
      lambda = 30;
    } else if (mode === 'jump') {
      tgt.legL = -0.75;
      tgt.legR = 0.35;
      tgt.armLz = -2.3;
      tgt.armRz = 2.3;
      tgt.armLx = -0.2;
      tgt.armRx = -0.2;
      tgt.tiltX = 0.05;
      tgt.headX = -0.08;
      lambda = 14;
    } else if (mode === 'slide') {
      tgt.rotX = -1.28;
      tgt.lift = 0.3;
      tgt.armLx = -2.9;
      tgt.armRx = -2.9;
      tgt.armLz = -0.2;
      tgt.armRz = 0.2;
      tgt.legL = 0.35 + Math.sin(t * 30) * 0.1;
      tgt.legR = 0.35 - Math.sin(t * 30) * 0.1;
      tgt.headX = 0.35;
      lambda = 22;
    } else if (mode === 'fly') {
      tgt.rotX = -0.35;
      tgt.armLz = -1.35 + Math.sin(t * 7) * 0.12;
      tgt.armRz = 1.35 - Math.sin(t * 7) * 0.12;
      tgt.legL = 0.55;
      tgt.legR = 0.35;
      tgt.headX = -0.15;
      bob = Math.sin(t * 4) * 0.08;
      lambda = 8;
    } else if (mode === 'crash') {
      // plopped down on her bottom, seeing stars
      tgt.tiltX = 0.3;
      tgt.lift = -0.08;
      tgt.legL = 1.4;
      tgt.legR = 1.2;
      tgt.armLz = -1.15 + Math.sin(t * 6) * 0.1;
      tgt.armRz = 1.15 - Math.sin(t * 6) * 0.1;
      tgt.armLx = -0.35;
      tgt.armRx = -0.35;
      tgt.headZ = Math.sin(t * 4.5) * 0.14;
      tgt.headX = -0.12;
      lambda = 10;
    } else if (mode === 'happy') {
      tgt.armLz = -2.5 + Math.sin(t * 14) * 0.25;
      tgt.armRz = 2.5 - Math.sin(t * 14) * 0.25;
      bob = Math.abs(Math.sin(t * 7)) * 0.35;
      tgt.headZ = Math.sin(t * 7) * 0.1;
      lambda = 18;
    } else {
      // idle with a wave now and then
      this.waveT -= dt;
      const waving = this.waveT < 1.4 && this.waveT > 0;
      if (this.waveT < 0) this.waveT = 3.5 + Math.random() * 2;
      tgt.armRz = waving ? 2.55 + Math.sin(t * 13) * 0.35 : 0.32 + Math.sin(t * 2) * 0.04;
      tgt.armLz = -0.32 - Math.sin(t * 2) * 0.04;
      tgt.headZ = Math.sin(t * 1.3) * 0.07 + (waving ? -0.06 : 0);
      bob = Math.sin(t * 2.2) * 0.015 + 0.015;
      lambda = 10;
    }

    for (const k in tgt) P[k] = damp(P[k], tgt[k], lambda, dt);

    // squash spring
    const k = 190, c = 13;
    this.squashV += (-k * this.squash - c * this.squashV) * dt;
    this.squash += this.squashV * dt;
    const sq = THREE.MathUtils.clamp(this.squash, -0.4, 0.4);

    // apply pose
    this.legs[0].rotation.x = P.legL;
    this.legs[1].rotation.x = P.legR;
    this.arms[0].rotation.set(P.armLx, 0, P.armLz);
    this.arms[1].rotation.set(P.armRx, 0, P.armRz);
    this.head.rotation.set(P.headX, 0, P.headZ);
    this.body.rotation.x = P.rotX + P.tiltX;
    this.body.position.y = 0.03 + P.lift + bob;
    this.body.scale.set(1 - sq * 0.45, 1 + sq, 1 - sq * 0.45);
    this.tail.rotation.z = Math.sin(t * 6) * 0.35;

    // lean into lane changes
    this.root.rotation.z = damp(this.root.rotation.z, -(s.vx || 0) * 0.028, 12, dt);
    const faceY = (s.facing || 0) + (s.vx || 0) * -0.018;
    this.root.rotation.y = damp(this.root.rotation.y, faceY, 7, dt);

    // bow wiggle + rainbow bow
    this.bow.rotation.z = 0.42 + Math.sin(t * 9) * 0.04 + sq * 0.5;
    if (this.rainbowBow) this.mats.bow.color.setHSL((t * 0.25) % 1, 0.9, 0.58);

    // blinking
    this.blinkT -= dt;
    let eyeY = 1;
    if (this.blinkT < 0.12) eyeY = 0.12;
    if (this.blinkT < 0) this.blinkT = 2 + Math.random() * 3;
    const dizzy = mode === 'crash';
    for (const e of this.eyes) {
      e.scale.y = eyeY;
      e.visible = !dizzy;
    }
    this.xEyes.visible = dizzy;

    // shadow on the ground
    const h = Math.max(0, s.height || 0);
    this.shadow.position.y = -h + 0.03;
    const ss = 1 / (1 + h * 0.4);
    this.shadow.scale.set(ss, ss, ss);
    this.shadow.visible = this.useBlob !== false && !s.flying;

    // cloud, bubble, halo
    this.cloudAmt = damp(this.cloudAmt, s.flying ? 1 : 0, 6, dt);
    this.cloud.visible = this.cloudAmt > 0.02;
    const cs = this.cloudAmt;
    this.cloud.scale.set(0.42 * cs, 0.34 * cs, 0.5 * cs);
    this.cloud.rotation.y = Math.sin(t * 2) * 0.1;

    this.bubbleAmt = damp(this.bubbleAmt, s.shield ? 1 : 0, 10, dt);
    this.bubble.visible = this.bubbleAmt > 0.02;
    this.bubbleMat.uniforms.uTime.value = t;
    this.bubbleMat.uniforms.uAlpha.value = this.bubbleAmt;
    const wob = 1 + Math.sin(t * 6) * 0.03;
    this.bubble.scale.set(wob * this.bubbleAmt, (2 - wob) * this.bubbleAmt, wob * this.bubbleAmt);

    this.halo.visible = !!s.magnet;
    if (s.magnet) {
      this.halo.position.y = -h + 0.08;
      const hs = 1 + Math.sin(t * 8) * 0.08;
      this.halo.scale.set(hs, hs, hs);
    }

    this.dizzy.visible = dizzy;
    if (dizzy) {
      this.dizzy.children.forEach((st, i) => {
        const a = t * 4 + (i / 3) * Math.PI * 2;
        st.position.set(Math.cos(a) * 0.5, Math.sin(t * 6 + i) * 0.06, Math.sin(a) * 0.5);
        st.rotation.set(0, a * 2, 0);
      });
      this.dizzy.position.set(0, 1.72, 0.32);
    }
  }
}

