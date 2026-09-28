import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { World } from './world.js';
import { Kitty } from './kitty.js';
import { Track } from './track.js';
import { Particles, SP } from './particles.js';
import { Trail } from './trail.js';
import { FX } from './fx.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { UI } from './ui.js';
import { loadSave, writeSave } from './storage.js';
import { particleAtlas, shadowTexture } from './textures.js';
import { basicMat } from './materials.js';
import { PALETTES } from './config.js';
import * as C from './config.js';

const params = new URLSearchParams(location.search);
const damp = (a, b, l, dt) => a + (b - a) * (1 - Math.exp(-l * dt));
const ease = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
const clamp = THREE.MathUtils.clamp;

function localPaletteIndex() {
  const h = new Date().getHours();
  if (h >= 5 && h < 7) return 3;
  if (h >= 7 && h < 17) return 0;
  if (h >= 17 && h < 19) return 1;
  return 2;
}

class Game {
  constructor() {
    this.save = loadSave();
    this.container = document.getElementById('game');
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.setClearColor(0xffd9ec);
    this.container.appendChild(renderer.domElement);
    this.renderer = renderer;

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.55;
    pmrem.dispose();

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1600);
    this.camera.position.set(0, 1.5, 4.4);
    this.fx = new FX(renderer, this.scene, this.camera);

    this.world = new World(this.scene, renderer);
    this.kitty = new Kitty();
    this.kitty.setShadowMaterial(basicMat(0xffffff, { map: shadowTexture(), transparent: true, depthWrite: false }));
    this.kitty.root.rotation.y = Math.PI;
    this.scene.add(this.kitty.root);
    this.track = new Track(this.scene, this);
    this.particles = new Particles(this.scene, particleAtlas());
    this.trail = new Trail(this.scene);
    this.audio = new AudioEngine();
    this.audio.setSfx(this.save.sfx);
    this.audio.setMusic(this.save.music);
    this.ui = new UI(this);
    this.ui.setSound(this.save.sfx, this.save.music);
    this.input = new Input(this.container, (a) => this.onAction(a));

    this.forcedQuality = ['low', 'medium', 'high'].includes(params.get('quality')) ? params.get('quality') : null;
    this.quality = this.forcedQuality || this.save.quality || this.guessQuality();
    this.fx.setQuality(this.quality);
    this.perf = { t: 0, frames: 0, slow: 0 };

    this.time = 0;
    this.dist = 0;
    this.runStart = 0;
    this.speed = 0;
    this.shake = 0;
    this.flash = 0;
    this.flashColor = new THREE.Color(1, 1, 1);
    this.camBlend = 0; // 0 = title rig, 1 = game rig
    this.fov = 60;
    this.baseFov = 60;
    this.titlePalette = localPaletteIndex();
    this.player = this.freshPlayer();
    this.powers = { magnet: 0, rush: 0, shield: 0, double: 0 };
    this.god = params.has('god');
    this.startOffset = Number(params.get('start')) || 0;
    this.ambientT = 0;
    this.sparkT = 0;

    this.kitty.setOutfit(this.outfitById(this.save.outfit));
    this.world.reset(this.dist);
    this.world.setPalette(this.titlePalette);
    this.state = 'title';
    this.facing = Math.PI;

    this.resize = this.resize.bind(this);
    window.addEventListener('resize', this.resize);
    window.addEventListener('orientationchange', () => setTimeout(this.resize, 200));
    if (window.visualViewport) window.visualViewport.addEventListener('resize', this.resize);
    this.resize();
    document.addEventListener('visibilitychange', () => this.onVisibility());

    this.ui.titleStats(this.save.best, this.save.hearts);
    this.ui.show('title');
    this.lastT = performance.now();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
    if (params.has('debug')) this.debugEl = document.getElementById('debug');
    if (params.get('shot') === 'icon') this.setupIconShot();
    window.__game = this;
  }

  // Portrait of Kitty on a plain background, used to render the app icons.
  setupIconShot() {
    this.iconShot = true;
    this.ui.show();
    for (const child of this.scene.children) {
      if (child !== this.kitty.root && !child.isLight) child.visible = false;
    }
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(128, 110, 10, 128, 128, 180);
    gr.addColorStop(0, '#ffe3f0');
    gr.addColorStop(1, '#ff7eb6');
    g.fillStyle = gr;
    g.fillRect(0, 0, 256, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = tex;
    this.fx.u.uVignette.value = 0;
  }

  guessQuality() {
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || 4;
    if (cores <= 2 || mem <= 2) return 'low';
    if (cores <= 4) return 'medium';
    return 'high';
  }

  outfitById(id) {
    return C.OUTFITS.find((o) => o.id === id) || C.OUTFITS[0];
  }

  freshPlayer() {
    return {
      lane: 0, prevLane: 0, x: 0, prevX: 0, vx: 0, y: 0, vy: 0, ground: 0,
      grounded: true, sliding: false, slideT: 0, fastFall: false, slideQueued: false,
      flying: false, invincible: 0, coyote: 0, jumpBuf: 0,
    };
  }

  pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    const cap = { high: 2, medium: 1.5, low: 1 }[this.quality];
    return Math.min(dpr, cap);
  }

  resize() {
    const w = Math.max(1, window.innerWidth);
    const h = Math.max(1, window.innerHeight);
    this.pr = this.pixelRatio();
    this.fx.setQuality(this.quality);
    this.fx.setSize(w, h, this.pr);
    this.camera.aspect = w / h;
    const hfov = THREE.MathUtils.degToRad(66);
    const vfov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(hfov / 2) / this.camera.aspect));
    this.baseFov = clamp(vfov, 48, 74);
    // portrait screens: pull the camera back a little so the side lanes fit
    this.camBack = clamp((1 - this.camera.aspect) * 2.2, 0, 1.4);
    this.camera.updateProjectionMatrix();
    this.world.starUniforms.uPx.value = this.pr;
  }

  // ---------------- state changes ----------------
  startRun() {
    if (this.state === 'playing' || this.state === 'countdown') return;
    this.audio.unlock();
    this.audio.setMode('game');
    this.audio.whoosh();
    this.kitty.setOutfit(this.outfitById(this.save.outfit));
    this.ui.show('hud');
    this.ui.resetHud();
    this.track.reset(this.dist);
    this.runStart = this.dist - this.startOffset;
    this.tutorialRun = this.save.runs < 2 && !this.startOffset;
    if (this.tutorialRun) this.track.spawnTutorial(this.dist);
    this.player = this.freshPlayer();
    this.powers = { magnet: 0, rush: 0, shield: 0, double: 0 };
    this.score = 0;
    this.runHearts = 0;
    this.speed = 0;
    this.introT = 0;
    this.facing = 0;
    this.kitty.mode = 'run';
    this.kitty.kick(2);
    this.input.enabled = true;
    this.state = 'playing';
    this.paletteStart = this.titlePalette;
    this.lastMood = Math.floor(this.paletteStart + 0.5);
    this.trail.reset(0, 0.6);
    this.requestWakeLock();
  }

  die(o) {
    const p = this.player;
    this.lastDeath = o && {
      type: o.type, lane: o.lane, kittyLane: p.lane, x: +p.x.toFixed(2), y: +p.y.toFixed(2), sliding: p.sliding, grounded: p.grounded,
      dist: +this.dist.toFixed(1), sa: +o.sa.toFixed(1), sb: +o.sb.toFixed(1),
      near: this.track.obstacles.filter((q) => q.sb > this.dist - 2 && q.sa < this.dist + 30).map((q) => `${q.type}@${q.lane}:${(q.sa - this.dist).toFixed(1)}`).join(' '),
    };
    this.state = 'dying';
    this.dyingT = 0;
    // stop dead at the obstacle, then bounce back a little
    if (o) this.dist = Math.min(this.dist, o.sa - C.KITTY_HD - 0.05);
    this.speed = 0;
    this.bounceV = 5;
    this.kitty.mode = 'crash';
    this.kitty.kick(-3);
    this.facing = Math.PI;
    this.input.enabled = false;
    this.player.sliding = false;
    this.player.flying = false;
    this.audio.crash();
    this.audio.setMode('off');
    this.shake = 0.7;
    this.flash = 0.55;
    this.flashColor.setRGB(1, 0.85, 0.92);
    this.particles.crash(this.player.x, this.player.y + 1.0, 0.2);
    this.ui.tutorial(null);
    if (navigator.vibrate) {
      try {
        navigator.vibrate([60, 40, 120]);
      } catch (e) {
        /* ignore */
      }
    }
  }

  gameOver() {
    const score = Math.floor(this.score);
    const isNew = score > this.save.best;
    this.save.best = Math.max(this.save.best, score);
    this.save.hearts += this.runHearts;
    this.save.runs += 1;
    writeSave(this.save);
    const titles = ['Oops!', 'Ouchie!', 'Bonk!', 'So close!'];
    this.ui.gameOver({
      score, best: this.save.best, hearts: this.runHearts, isNew,
      title: isNew ? 'Amazing!' : titles[Math.floor(Math.random() * titles.length)],
    });
    this.ui.show('over');
    this.state = 'over';
    this.audio.setMode('title');
    if (isNew) {
      this.audio.fanfare();
      this.particles.confetti(this.camera, 90);
    }
    this.releaseWakeLock();
  }

  goHome() {
    if (this.state === 'playing' || this.state === 'paused' || this.state === 'countdown') {
      // leaving mid-run still banks the hearts
      this.save.hearts += this.runHearts || 0;
      this.save.best = Math.max(this.save.best, Math.floor(this.score || 0));
      this.save.runs += 1;
      writeSave(this.save);
      this.audio.resume();
    }
    this.state = 'title';
    this.input.enabled = false;
    this.track.reset(this.dist);
    this.player = this.freshPlayer();
    this.powers = { magnet: 0, rush: 0, shield: 0, double: 0 };
    this.kitty.mode = 'idle';
    this.facing = Math.PI;
    this.kitty.setOutfit(this.outfitById(this.save.outfit));
    this.ui.titleStats(this.save.best, this.save.hearts);
    this.ui.tutorial(null);
    this.ui.show('title');
    this.audio.setMode('title');
    this.world.setPalette(this.titlePalette);
    this.releaseWakeLock();
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.input.enabled = false;
    this.ui.show('hud', 'pause');
    this.audio.suspend();
    this.releaseWakeLock();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.ui.show('hud');
    this.audio.resume();
    this.state = 'countdown';
    this.countT = 1.5;
    this.lastCount = 0;
    this.requestWakeLock();
  }

  showHelp(on) {
    if (on) this.ui.show('title', 'help');
    else this.ui.show('title');
  }

  toggleSfx() {
    this.save.sfx = !this.save.sfx;
    this.audio.setSfx(this.save.sfx);
    this.ui.setSound(this.save.sfx, this.save.music);
    writeSave(this.save);
    this.audio.click();
  }

  toggleMusic() {
    this.save.music = !this.save.music;
    this.audio.setMusic(this.save.music);
    this.ui.setSound(this.save.sfx, this.save.music);
    writeSave(this.save);
    this.audio.click();
  }

  // ---------------- wardrobe ----------------
  openWardrobe() {
    this.audio.click();
    this.state = 'wardrobe';
    this.wIndex = Math.max(0, C.OUTFITS.findIndex((o) => o.id === this.save.outfit));
    this.player = this.freshPlayer();
    this.kitty.mode = 'idle';
    this.facing = Math.PI;
    this.track.reset(this.dist);
    this.ui.show('wardrobe');
    this.refreshWardrobe();
  }

  refreshWardrobe() {
    const o = C.OUTFITS[this.wIndex];
    this.kitty.setOutfit(o);
    const owned = this.save.owned.includes(o.id);
    this.ui.wardrobe(o, {
      owned, wearing: this.save.outfit === o.id, canBuy: this.save.hearts >= o.price,
      bank: this.save.hearts, index: this.wIndex, total: C.OUTFITS.length,
    });
  }

  wardrobeStep(d) {
    const n = C.OUTFITS.length;
    this.wIndex = (this.wIndex + d + n) % n;
    this.audio.click();
    this.kitty.kick(1.6);
    this.particles.burst(0, 1.0, 0, { count: 12, color: [[1.5, 0.6, 1.1], [1.4, 1.4, 1.4]], speed: 3, size: 0.28, life: 0.6 });
    this.refreshWardrobe();
  }

  wardrobeAction() {
    const o = C.OUTFITS[this.wIndex];
    const owned = this.save.owned.includes(o.id);
    if (owned && this.save.outfit === o.id) {
      this.startRun();
      return;
    }
    if (!owned) {
      if (this.save.hearts < o.price) return;
      this.save.hearts -= o.price;
      this.save.owned.push(o.id);
      this.audio.buy();
      this.particles.bigPop(0, 1.0, 0, [[1.6, 0.5, 1.0], [1.6, 1.3, 0.4], [0.6, 1.2, 1.6]]);
      this.ui.toast('New outfit!', '#ff5fa2');
    } else {
      this.audio.click();
    }
    this.save.outfit = o.id;
    writeSave(this.save);
    this.kitty.mode = 'happy';
    this.happyT = 1.2;
    this.refreshWardrobe();
  }

  closeWardrobe() {
    this.audio.click();
    this.goHome();
  }

  // ---------------- input ----------------
  onAction(a) {
    if (a === 'pause') {
      if (this.state === 'playing') this.pause();
      else if (this.state === 'paused') this.resume();
      return;
    }
    if (this.state !== 'playing') return;
    const p = this.player;
    if (a === 'left' || a === 'right') {
      const nl = clamp(p.lane + (a === 'left' ? -1 : 1), -1, 1);
      if (nl !== p.lane) {
        p.prevLane = p.lane;
        p.lane = nl;
        this.audio.lane();
      }
    } else if (a === 'up') {
      if (p.flying) return;
      if (p.grounded || p.coyote > 0) this.doJump();
      else p.jumpBuf = 0.2;
    } else if (a === 'down') {
      if (p.flying) return;
      if (p.grounded) this.startSlide();
      else {
        p.fastFall = true;
        p.vy = Math.min(p.vy, -14);
        p.slideQueued = true;
      }
    }
  }

  doJump() {
    const p = this.player;
    p.vy = C.JUMP_V;
    p.grounded = false;
    p.coyote = 0;
    p.sliding = false;
    p.slideQueued = false;
    this.kitty.kick(2.4);
    this.audio.jump();
    this.particles.dust(p.x, p.y, 0.2, 5);
  }

  startSlide() {
    const p = this.player;
    p.sliding = true;
    p.slideT = C.SLIDE_TIME;
    this.kitty.kick(-1.6);
    this.audio.slide();
    this.particles.dust(p.x, p.y, 0.1, 7);
  }

  // ---------------- gameplay ----------------
  activate(kind, x, y, z) {
    const P = C.POWERS[kind];
    this.powers[kind] = P.time;
    this.ui.toast(P.name + '!', P.color);
    this.audio.power();
    this.flash = 0.35;
    this.flashColor.set(P.color);
    const col = new THREE.Color(P.color);
    this.particles.bigPop(x, y, z, [[col.r * 1.6, col.g * 1.6, col.b * 1.6], [1.5, 1.5, 1.5], [1.6, 0.6, 1.1]]);
    if (kind === 'rush') {
      const p = this.player;
      p.flying = true;
      p.sliding = false;
      p.vy = 0;
      this.track.beginRush(this.dist);
      this.trail.reset(p.x, p.y + 0.4);
      this.audio.whoosh();
    }
  }

  powerEnded(kind) {
    if (kind === 'rush') {
      const p = this.player;
      p.flying = false;
      p.vy = 0;
      p.invincible = 2.2;
      this.track.endRush(this.dist);
    }
  }

  onHit(o, side) {
    const p = this.player;
    if (p.invincible > 0 || this.god) {
      if (this.god && !side) o.ignoreUntil = this.time + 1;
      if (side) {
        p.lane = p.prevLane;
        o.ignoreUntil = this.time + 0.4;
      }
      return;
    }
    if (side) {
      p.lane = p.prevLane;
      o.ignoreUntil = this.time + 0.45;
      this.shake = Math.max(this.shake, 0.25);
      this.audio.bump();
      this.particles.dust(p.x, p.y + 0.5, 0, 6);
      return;
    }
    if (this.powers.shield > 0) {
      this.powers.shield = 0;
      o.dead = true;
      p.invincible = 1.2;
      this.audio.shieldPop();
      this.shake = 0.35;
      this.flash = 0.3;
      this.flashColor.set('#8fd3ff');
      this.particles.poof(o.x, 0, 0);
      this.ui.toast('Shield saved you!', '#4fb8ff', 1200);
      return;
    }
    this.die(o);
  }

  onItem(it) {
    const mult = this.powers.double > 0 ? 2 : 1;
    const z = this.dist - it.s;
    if (it.kind === 'heart') {
      this.runHearts += mult;
      this.score += 10 * mult;
      this.audio.heart(mult > 1);
      this.particles.heartPop(it.x, it.y, z, mult > 1);
    } else {
      this.runHearts += 5 * mult;
      this.score += 50 * mult;
      this.audio.apple();
      this.particles.bigPop(it.x, it.y, z, [[1.7, 0.35, 0.45], [1.6, 1.3, 0.4], [1.5, 1.5, 1.5]]);
      this.popupAt(`+${5 * mult}`, it.x, it.y + 0.6, z, '#ff3d5e');
    }
  }

  popupAt(text, x, y, z, color) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    const sx = (v.x * 0.5 + 0.5) * window.innerWidth;
    const sy = (-v.y * 0.5 + 0.5) * window.innerHeight;
    this.ui.popup(text, sx, sy, color);
  }

  updatePlaying(dt) {
    const p = this.player;
    const pw = this.powers;
    this.introT += dt;
    for (const k in pw) {
      if (pw[k] > 0) {
        pw[k] -= dt;
        if (pw[k] <= 0) {
          pw[k] = 0;
          this.powerEnded(k);
        }
      }
    }
    const rush = pw.rush > 0;
    const meters = this.dist - this.runStart;
    const target = this.freeze ? 0 : Math.min(C.SPEED_MAX, C.SPEED_START + meters * C.SPEED_RAMP) * (rush ? 1.45 : 1);
    const ramp = ease(this.introT / 0.8);
    this.speed = damp(this.speed, target * ramp, rush ? 2.5 : 5, dt);

    const prevDist = this.dist;
    this.dist += this.speed * dt;
    this.score += this.speed * dt;

    // sideways
    p.prevX = p.x;
    const tx = p.lane * C.LANE_W;
    p.x = damp(p.x, tx, 20, dt);
    if (Math.abs(tx - p.x) < 0.004) p.x = tx;
    p.vx = (p.x - p.prevX) / Math.max(dt, 1e-4);

    // vertical
    const y0 = p.y;
    if (p.flying) {
      p.y = damp(p.y, C.RUSH_Y, 3.2, dt);
      p.vy = 0;
      p.grounded = false;
    } else {
      p.vy -= C.GRAVITY * dt * (p.fastFall ? 2.3 : 1);
      p.y += p.vy * dt;
    }
    if (p.sliding) {
      p.slideT -= dt;
      if (p.slideT <= 0) p.sliding = false;
    }
    if (p.invincible > 0) p.invincible -= dt;

    const h = p.sliding ? C.KITTY_SLIDE_H : C.KITTY_H;
    const res = this.track.collide({ x: p.x, prevX: p.prevX, y: p.y, y0, h, dist: this.dist, prevDist, time: this.time, dt });
    p.ground = res.ground;
    if (!p.flying) {
      if (p.y <= res.ground) {
        if (!p.grounded) this.onLand(p.vy);
        p.y = res.ground;
        p.vy = 0;
        p.grounded = true;
        p.fastFall = false;
        p.coyote = 0.1;
        if (p.slideQueued) {
          p.slideQueued = false;
          this.startSlide();
        }
        if (p.jumpBuf > 0) {
          p.jumpBuf = 0;
          this.doJump();
        }
      } else if (p.y > res.ground + 0.03) {
        p.grounded = false;
        p.coyote -= dt;
      }
    }
    p.jumpBuf = Math.max(0, p.jumpBuf - dt);
    if (res.hit && !p.flying) this.onHit(res.hit, res.side);
    if (this.state !== 'playing') return;

    this.track.collect(
      { x: p.x, y: p.y, dist: this.dist, prevDist, sliding: p.sliding },
      pw.magnet > 0, dt,
      (it) => this.onItem(it),
      (pu) => this.activate(pu.kind, pu.x, pu.y, this.dist - pu.s)
    );

    // kitty pose
    let mode = 'run';
    if (p.flying) mode = 'fly';
    else if (p.sliding) mode = 'slide';
    else if (!p.grounded) mode = 'jump';
    this.kitty.mode = mode;

    // tutorial hints
    if (this.tutorialRun && this.track.tutorial) {
      let hint = null;
      for (const t of this.track.tutorial) {
        const ahead = t.s - this.dist;
        if (ahead > 0 && ahead < 30) hint = t.hint;
      }
      this.ui.tutorial(hint);
    }

    // palette / mood
    const pt = this.paletteStart + this.world.paletteAt(meters);
    this.world.setPalette(pt);
    const mood = Math.floor(pt + 0.5);
    if (mood !== this.lastMood) {
      this.lastMood = mood;
      this.ui.mood(PALETTES[mood % PALETTES.length].name);
    }

    // sparkles from her feet, extra during power-ups
    this.sparkT -= dt;
    if (this.sparkT <= 0) {
      this.sparkT = rush ? 0.02 : 0.07;
      const col = rush ? [[1.6, 0.5, 0.8], [1.6, 1.3, 0.4], [0.5, 1.4, 0.8], [0.5, 0.9, 1.6], [1.1, 0.6, 1.6]][Math.floor(Math.random() * 5)] : pw.double > 0 ? [1.6, 1.25, 0.4] : [1.4, 0.7, 1.1];
      this.particles.trailSparkle(p.x, p.y + (p.flying ? 0.1 : 0.05), 0.3, col);
    }
    if (pw.magnet > 0 && Math.random() < dt * 20) {
      const a = Math.random() * Math.PI * 2;
      this.particles.add.emit({ x: p.x + Math.cos(a) * 0.9, y: p.y + 0.7, z: Math.sin(a) * 0.9, vx: -Math.cos(a) * 1.5, vz: -Math.sin(a) * 1.5, color: [1.6, 0.5, 1.0], size: 0.22, sizeEnd: 0.05, sprite: SP.SPARKLE, life: 0.5, world: false });
    }

    this.ui.hud(Math.floor(this.score), this.runHearts);
    const timers = {};
    for (const k in pw) timers[k] = pw[k] > 0 && k !== 'shield' ? pw[k] / C.POWERS[k].time : pw[k] > 0 ? 1 : 0;
    this.ui.powers(timers);
  }

  onLand(vy) {
    const p = this.player;
    const hard = Math.min(1, -vy / 16);
    this.kitty.kick(-2.6 * hard - 0.4);
    if (hard > 0.3) {
      this.audio.land();
      this.particles.dust(p.x, p.y, 0.1, 6);
    }
  }

  // ---------------- camera ----------------
  updateCamera(dt) {
    const p = this.player;
    const t = this.time;
    const cam = this.camera;
    const inGame = this.state === 'playing' || this.state === 'dying' || this.state === 'over' || this.state === 'paused' || this.state === 'countdown';
    this.camBlend = damp(this.camBlend, inGame ? 1 : 0, inGame ? 2.6 : 3, dt);
    const b = ease(this.camBlend);

    // title & wardrobe rigs (in front of Kitty, looking back down the road)
    const wardrobe = this.state === 'wardrobe';
    const V = (this._camV ||= [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]);
    const tp = wardrobe
      ? V[0].set(Math.sin(t * 0.5) * 0.25, 1.0, 2.7 + this.camBack * 0.55)
      : V[0].set(Math.sin(t * 0.35) * 0.35, 1.05, 3.3 + this.camBack * 0.6);
    const tl = V[1].set(0, wardrobe ? 0.62 : 0.6, 0);

    const dying = this.state === 'dying' || this.state === 'over';
    const back = 4.8 + this.camBack * 0.4 + (this.powers.rush > 0 ? 0.8 : 0);
    const gp = V[2].set(p.x * 0.85, 4.4 + p.y * 0.62, back);
    const gl = V[3].set(p.x * 0.75, 0.2 + p.y * 0.62, -6);
    if (dying) {
      // swing in close to see her dizzy face, leaving room for the score card below
      gp.set(p.x * 0.9, 2.3 + p.ground, 4.0 + this.camBack * 0.4);
      gl.set(p.x, 0.25 + p.ground, 0);
    }

    const pos = tp.lerp(gp, b);
    const look = tl.lerp(gl, b);
    if (!this.camPos) {
      this.camPos = pos.clone();
      this.camLook = look.clone();
    }
    const lam = inGame ? 9 : 5;
    this.camPos.x = damp(this.camPos.x, pos.x, lam, dt);
    this.camPos.y = damp(this.camPos.y, pos.y, lam * 0.8, dt);
    this.camPos.z = damp(this.camPos.z, pos.z, lam, dt);
    this.camLook.x = damp(this.camLook.x, look.x, lam, dt);
    this.camLook.y = damp(this.camLook.y, look.y, lam * 0.8, dt);
    this.camLook.z = damp(this.camLook.z, look.z, lam, dt);

    this.shake = Math.max(0, this.shake - dt * 1.6);
    const s = this.shake * this.shake;
    cam.position.set(
      this.camPos.x + (Math.random() - 0.5) * s * 0.8,
      this.camPos.y + (Math.random() - 0.5) * s * 0.8,
      this.camPos.z
    );
    cam.lookAt(this.camLook.x, this.camLook.y, this.camLook.z);

    const speedFov = inGame ? clamp((this.speed - C.SPEED_START) * 0.35, 0, 8) : 0;
    const targetFov = this.baseFov + speedFov + (this.powers.rush > 0 ? 9 : 0) - (wardrobe ? 6 : 0);
    this.fov = damp(this.fov, targetFov, 3, dt);
    if (Math.abs(cam.fov - this.fov) > 0.01) {
      cam.fov = this.fov;
      cam.updateProjectionMatrix();
    }
    const bufH = this.renderer.domElement.height;
    this.particles.setScale(bufH / (2 * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2)));
  }

  // ---------------- ambient ----------------
  ambient(dt) {
    this.ambientT -= dt;
    if (this.ambientT > 0) return;
    this.ambientT = 0.12;
    const night = this.world.pal.stars || 0;
    const cx = this.camera.position.x;
    if (night > 0.5) {
      // fireflies
      const side = Math.random() < 0.5 ? -1 : 1;
      this.particles.add.emit({
        x: cx + side * (4.5 + Math.random() * 8), y: 0.5 + Math.random() * 3, z: -5 - Math.random() * 40,
        vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.3) * 0.5, vz: (Math.random() - 0.5) * 0.6,
        color: Math.random() < 0.5 ? [1.4, 1.6, 0.6] : [1.6, 0.7, 1.3], size: 0.3, sizeEnd: 0.2,
        sprite: SP.GLOW, life: 3, twinkle: 6,
      });
    }
    // drifting petals and tiny hearts
    const heart = Math.random() < 0.25;
    this.particles.norm.emit({
      x: cx + (Math.random() - 0.5) * 22, y: 4 + Math.random() * 6, z: -4 - Math.random() * 38,
      vx: 0.6 + Math.random() * 0.6, vy: -0.7 - Math.random() * 0.5, vz: (Math.random() - 0.5) * 0.4,
      color: heart ? [1, 0.45, 0.72] : [1, 0.78, 0.88], size: heart ? 0.3 : 0.26, sprite: heart ? SP.HEART : SP.PETAL,
      life: 5, spin: (Math.random() - 0.5) * 3, alpha: 0.9,
    });
  }

  // ---------------- frame ----------------
  loop(now) {
    requestAnimationFrame(this.loop);
    let dt = (now - this.lastT) / 1000;
    this.lastT = now;
    if (!(dt > 0)) dt = 1 / 60;
    dt = Math.min(dt, 0.05);
    if (this.state === 'paused') return;
    this.time += dt;
    this.update(dt);
    this.renderer.info.autoReset = false;
    this.renderer.info.reset();
    this.fx.render(dt);
    this.drawCalls = this.renderer.info.render.calls;
    this.watchPerf(dt);
  }

  update(dt) {
    const st = this.state;
    const prevDist = this.dist;
    if (st === 'playing') {
      this.updatePlaying(dt);
    } else if (st === 'countdown') {
      this.countT -= dt;
      const n = Math.ceil(this.countT / 0.5);
      if (n !== this.lastCount && n > 0) {
        this.lastCount = n;
        this.ui.toast(String(n), '#ff5fa2', 450);
        this.audio.click();
      }
      if (this.countT <= 0) {
        this.state = 'playing';
        this.input.enabled = true;
      }
    } else if (st === 'dying') {
      this.dyingT += dt;
      this.bounceV = damp(this.bounceV, 0, 5, dt);
      this.dist -= this.bounceV * dt;
      const p = this.player;
      p.vy -= C.GRAVITY * dt;
      p.y = Math.max(p.ground, p.y + p.vy * dt);
      if (this.dyingT > 1.35) this.gameOver();
    } else if (st === 'wardrobe') {
      if (this.happyT > 0) {
        this.happyT -= dt;
        if (this.happyT <= 0) this.kitty.mode = 'idle';
      }
    }
    const worldDz = this.dist - prevDist;

    // world + actors
    const p = this.player;
    this.world.update(dt, this.dist, this.camera, this.time);
    if (st !== 'playing' && st !== 'dying') this.track.update(0, this.dist, 0, this.time);
    else this.track.update(dt, this.dist, this.speed, this.time);

    this.kitty.root.position.set(p.x, p.y, 0);
    this.kitty.update(dt, {
      mode: this.kitty.mode,
      speed: this.speed,
      vx: st === 'playing' ? p.vx : 0,
      height: p.flying ? 3 : p.y - p.ground,
      flying: p.flying,
      shield: this.powers.shield > 0 && (st === 'playing' || st === 'countdown'),
      magnet: this.powers.magnet > 0 && st === 'playing',
      facing: this.facing,
    });
    // blink while invincible
    this.kitty.body.visible = !(p.invincible > 0 && st === 'playing' && Math.floor(this.time * 16) % 2 === 0);

    const head = (this._head ||= new THREE.Vector3());
    head.set(p.x, p.y + (p.flying ? -0.05 : 0.4), 0.2);
    this.trail.update(dt, head, worldDz, this.powers.rush > 0 && st === 'playing', this.time);
    this.particles.update(dt, worldDz);
    this.ambient(dt);
    this.updateCamera(dt);

    // screen effects
    const rush = this.powers.rush > 0 && st === 'playing';
    const u = this.fx.u;
    u.uSpeed.value = damp(u.uSpeed.value, rush ? 1 : st === 'playing' ? clamp((this.speed - 25) / 12, 0, 0.45) : 0, 4, dt);
    u.uAberr.value = damp(u.uAberr.value, rush ? 0.3 : 0, 4, dt) + this.shake * 0.6;
    this.flash = Math.max(0, this.flash - dt * 2.2);
    u.uFlash.value = this.flash * this.flash;
    u.uFlashColor.value.copy(this.flashColor);
    this.fx.bloom.strength = damp(this.fx.bloom.strength, (this.world.pal.bloom || 0.5) + (rush ? 0.3 : 0), 3, dt);

    if (this.iconShot) {
      const cam = this.camera;
      this.kitty.waveT = 99;
      this.kitty.blinkT = 99;
      cam.position.set(0, 1.16, 3.05);
      cam.lookAt(0, 1.1, 0);
      cam.fov = 33;
      cam.updateProjectionMatrix();
      this.fx.bloom.strength = 0.2;
    }
    if (this.debugEl) {
      this.fpsAcc = (this.fpsAcc || 0) * 0.95 + (1 / dt) * 0.05;
      this.debugEl.textContent = `${this.fpsAcc.toFixed(0)} fps · ${this.quality} · pr ${this.pr} · calls ${this.drawCalls}`;
    }
  }

  watchPerf(dt) {
    if (this.forcedQuality || this.state !== 'playing') return;
    const pf = this.perf;
    pf.t += dt;
    pf.frames++;
    if (pf.t < 3) return;
    const fps = pf.frames / pf.t;
    pf.t = 0;
    pf.frames = 0;
    if (fps < 45 && this.quality !== 'low') {
      pf.slow++;
      if (pf.slow >= 1) {
        this.quality = this.quality === 'high' ? 'medium' : 'low';
        this.save.quality = this.quality;
        writeSave(this.save);
        this.resize();
        pf.slow = 0;
      }
    }
  }

  onVisibility() {
    if (document.hidden) {
      if (this.state === 'playing') this.pause();
      this.audio.suspend();
    } else if (this.state !== 'paused') {
      this.audio.resume();
      this.lastT = performance.now();
    }
  }

  async requestWakeLock() {
    try {
      if (navigator.wakeLock && !this.wakeLock) {
        this.wakeLock = await navigator.wakeLock.request('screen');
        this.wakeLock.addEventListener('release', () => (this.wakeLock = null));
      }
    } catch (e) {
      this.wakeLock = null;
    }
  }

  releaseWakeLock() {
    try {
      if (this.wakeLock) this.wakeLock.release();
    } catch (e) {
      /* ignore */
    }
    this.wakeLock = null;
  }
}

function boot() {
  const loading = document.getElementById('loading');
  try {
    const test = document.createElement('canvas');
    const gl = test.getContext('webgl2');
    if (!gl) throw new Error('no-webgl2');
    new Game();
  } catch (e) {
    console.error(e);
    if (loading) {
      loading.hidden = false;
      const msg = loading.querySelector('.loading-text');
      if (msg) {
        msg.textContent = e && e.message === 'no-webgl2'
          ? 'This browser can’t show 3D graphics. Try the latest Safari or Chrome.'
          : 'Something went wrong while loading. Please refresh the page.';
      }
    }
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
