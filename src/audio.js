// Tiny WebAudio synth: a bouncy J-pop style loop plus cute sound effects.
// Everything is generated in code, so there are no audio files to load.

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

// Chords per bar (MIDI notes), "royal road" progression then a resolve.
const CHORDS = [
  [53, 57, 60], // F
  [55, 59, 62], // G
  [52, 55, 59], // Em
  [57, 60, 64], // Am
  [50, 53, 57], // Dm
  [55, 59, 62], // G
  [48, 52, 55], // C
  [48, 52, 55], // C
];
const BASS = [41, 43, 40, 45, 38, 43, 36, 36];
// [step, midi, length in 16ths] per bar
const MELODY = [
  [[0, 76, 2], [2, 79, 2], [4, 81, 4], [8, 79, 2], [10, 76, 2], [12, 72, 4]],
  [[0, 74, 2], [2, 76, 2], [4, 79, 3], [7, 76, 1], [8, 74, 4], [12, 71, 4]],
  [[0, 71, 2], [2, 74, 2], [4, 76, 4], [8, 79, 2], [10, 76, 2], [12, 74, 2], [14, 76, 2]],
  [[0, 72, 6], [6, 69, 2], [8, 72, 2], [10, 74, 2], [12, 76, 4]],
  [[0, 77, 2], [2, 76, 2], [4, 74, 2], [6, 72, 2], [8, 74, 4], [12, 69, 4]],
  [[0, 71, 2], [2, 74, 2], [4, 79, 4], [8, 77, 2], [10, 76, 2], [12, 74, 4]],
  [[0, 76, 2], [2, 79, 2], [4, 84, 4], [8, 83, 2], [10, 81, 2], [12, 79, 4]],
  [[0, 76, 4], [4, 72, 4], [8, 79, 6]],
];

// One musical style per world: the same tune, re-orchestrated.
// shift: semitones; the new style starts on the next bar.
const STYLES = [
  { name: 'candy', bpm: 128, shift: 0 }, // music box + synth pop
  { name: 'garden', bpm: 124, shift: 2 }, // marimba picnic with shakers
  { name: 'clouds', bpm: 112, shift: 5 }, // dreamy bells and pads
  { name: 'carnival', bpm: 138, shift: -2 }, // calliope oom-pah
];

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.sfxOn = true;
    this.musicOn = true;
    this.mode = 'title'; // 'title' | 'game' | 'off'
    this.step = 0;
    this.nextTime = 0;
    this.bpm = 128;
    this.style = 0;
    this.nextStyle = 0;
    this.combo = 0;
    this.lastHeart = 0;
    this.timer = null;
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try {
        this.ctx = new AC();
      } catch (e) {
        return;
      }
      const ctx = this.ctx;
      this.master = ctx.createGain();
      this.master.gain.value = 0.9;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 4;
      this.master.connect(comp).connect(ctx.destination);
      this.musicBus = ctx.createGain();
      this.musicBus.gain.value = this.musicOn ? 0.32 : 0;
      this.musicBus.connect(this.master);
      this.sfxBus = ctx.createGain();
      this.sfxBus.gain.value = this.sfxOn ? 0.7 : 0;
      this.sfxBus.connect(this.master);
      // small reverb for sparkle
      this.verb = ctx.createConvolver();
      this.verb.buffer = this.impulse(1.6);
      this.verbGain = ctx.createGain();
      this.verbGain.gain.value = 0.28;
      this.verb.connect(this.verbGain).connect(this.master);
      this.noiseBuf = this.makeNoise();
      this.nextTime = ctx.currentTime + 0.1;
      this.timer = setInterval(() => this.schedule(), 30);
    }
    if (this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
  }

  suspend() {
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {});
  }

  resume() {
    if (this.ctx && this.ctx.state !== 'running') {
      this.ctx.resume().catch(() => {});
      this.nextTime = Math.max(this.nextTime, this.ctx.currentTime + 0.05);
    }
  }

  setSfx(on) {
    this.sfxOn = on;
    if (this.sfxBus) this.sfxBus.gain.value = on ? 0.7 : 0;
  }

  setMusic(on) {
    this.musicOn = on;
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? 0.32 : 0, this.ctx.currentTime, 0.05);
  }

  setMode(mode) {
    this.mode = mode;
  }

  // Switch the music to a world's style (on the next bar).
  setWorld(i) {
    this.nextStyle = ((i % STYLES.length) + STYLES.length) % STYLES.length;
  }

  impulse(sec) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    return buf;
  }

  makeNoise() {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  // ---------- building blocks ----------
  tone(t, freq, dur, { type = 'sine', gain = 0.2, attack = 0.005, bus, verb = 0, slideTo, filter } = {}) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = o;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filter;
      o.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(bus || this.sfxBus);
    if (verb) {
      const s = ctx.createGain();
      s.gain.value = verb;
      g.connect(s).connect(this.verb);
    }
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  noise(t, dur, { gain = 0.2, type = 'bandpass', freq = 1000, freqTo, q = 1, bus } = {}) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (freqTo) f.frequency.exponentialRampToValueAtTime(freqTo, t + dur);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(bus || this.sfxBus);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.02);
  }

  // ---------- music ----------
  schedule() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    let spb = 60 / this.bpm / 4; // seconds per 16th
    while (this.nextTime < this.ctx.currentTime + 0.14) {
      if (this.step % 16 === 0 && this.nextStyle !== this.style) {
        this.style = this.nextStyle;
        this.bpm = STYLES[this.style].bpm;
        spb = 60 / this.bpm / 4;
      }
      if (this.mode !== 'off' && this.musicOn) this.playStep(this.step, this.nextTime);
      this.step = (this.step + 1) % (16 * 8);
      this.nextTime += spb;
    }
  }

  playStep(step, t) {
    const bar = Math.floor(step / 16);
    const s = step % 16;
    const game = this.mode === 'game';
    const bus = this.musicBus;
    const st = STYLES[this.style];
    const k = st.shift;
    const chord = CHORDS[bar].map((n) => n + k);
    const bass = BASS[bar] + k;
    const sixteenth = 60 / this.bpm / 4;
    const notes = MELODY[bar].filter((n) => n[0] === s);
    if (st.name === 'garden') this.garden(t, s, bar, notes, chord, bass, game, bus, sixteenth);
    else if (st.name === 'clouds') this.clouds(t, s, bar, notes, chord, bass, game, bus, sixteenth);
    else if (st.name === 'carnival') this.carnival(t, s, bar, notes, chord, bass, game, bus, sixteenth);
    else this.candy(t, s, bar, notes, chord, bass, game, bus, sixteenth);
  }

  kick(t, bus, gain = 0.5) {
    this.tone(t, 150, 0.16, { type: 'sine', gain, bus, slideTo: 45 });
  }

  // Candy Town: music box lead over synth-pop drums
  candy(t, s, bar, notes, chord, bass, game, bus, sx) {
    const k = STYLES[0].shift;
    for (const [, m, len] of notes) {
      this.tone(t, mtof(m + k), len * sx + 0.25, { type: 'triangle', gain: 0.16, bus, verb: 0.5 });
      this.tone(t, mtof(m + k + 12), 0.18, { type: 'sine', gain: 0.05, bus, verb: 0.4 });
    }
    if (s % 4 === 2) for (const n of chord) this.tone(t, mtof(n + 12), 0.14, { type: 'square', gain: game ? 0.035 : 0.022, bus, filter: 1800 });
    if (s % 4 === 0 || (game && s % 4 === 3 && s !== 15)) this.tone(t, mtof(bass + (s === 8 ? 7 : 0)), 0.22, { type: 'triangle', gain: game ? 0.28 : 0.16, bus });
    if (!game) {
      if (s === 0) this.tone(t, mtof(chord[0] + 24), 0.8, { type: 'sine', gain: 0.03, bus, verb: 0.6 });
      return;
    }
    if (s === 0 || s === 8 || s === 10) this.kick(t, bus);
    if (s === 4 || s === 12) this.noise(t, 0.16, { gain: 0.22, type: 'bandpass', freq: 1800, q: 0.8, bus });
    if (s % 2 === 0) this.noise(t, 0.04, { gain: s % 4 === 2 ? 0.09 : 0.05, type: 'highpass', freq: 7000, bus });
    if (s === 14 && bar % 2 === 1) this.tone(t, mtof(88), 0.12, { type: 'sine', gain: 0.05, bus, verb: 0.6 });
  }

  // Strawberry Garden: wooden marimba, bouncy bass, claps and a shaker
  garden(t, s, bar, notes, chord, bass, game, bus, sx) {
    const k = STYLES[1].shift;
    for (const [, m] of notes) {
      this.tone(t, mtof(m + k), 0.42, { type: 'sine', gain: 0.2, bus, verb: 0.3 });
      this.tone(t, mtof(m + k + 24), 0.07, { type: 'sine', gain: 0.035, bus });
      // a soft echo a dotted eighth later
      this.tone(t + sx * 3, mtof(m + k + 12), 0.25, { type: 'sine', gain: 0.045, bus, verb: 0.5 });
    }
    if (s % 4 === 2) for (const n of chord) this.tone(t, mtof(n + 12), 0.12, { type: 'triangle', gain: game ? 0.05 : 0.035, bus });
    if (s % 4 === 0 || (game && (s === 6 || s === 14))) this.tone(t, mtof(bass + (s === 6 || s === 14 ? 12 : 0)), 0.2, { type: 'triangle', gain: game ? 0.26 : 0.15, bus });
    if (!game) return;
    if (s === 0 || s === 8) this.kick(t, bus, 0.45);
    if (s === 4 || s === 12) {
      this.noise(t, 0.1, { gain: 0.18, type: 'bandpass', freq: 1500, q: 1.2, bus });
      this.noise(t + 0.012, 0.1, { gain: 0.12, type: 'bandpass', freq: 1100, q: 1.2, bus });
    }
    this.noise(t, 0.05, { gain: s % 2 === 1 ? 0.055 : 0.03, type: 'highpass', freq: 6000, bus });
  }

  // Cloud Kingdom: dreamy bells, warm pads and sparkly arpeggios
  clouds(t, s, bar, notes, chord, bass, game, bus, sx) {
    const k = STYLES[2].shift;
    for (const [, m, len] of notes) {
      this.tone(t, mtof(m + k), len * sx + 0.6, { type: 'sine', gain: 0.13, bus, verb: 0.9 });
      this.tone(t, mtof(m + k + 12), 0.5, { type: 'triangle', gain: 0.025, bus, verb: 0.9 });
    }
    if (s === 0) for (const n of chord) this.tone(t, mtof(n), sx * 17, { type: 'sine', gain: 0.035, attack: 0.3, bus, verb: 0.5 });
    if (s % 2 === 0) this.tone(t, mtof(chord[(s / 2) % 3] + 24), 0.16, { type: 'sine', gain: 0.022, bus, verb: 0.8 });
    if (s === 0 || s === 8) this.tone(t, mtof(bass), 0.55, { type: 'sine', gain: game ? 0.26 : 0.16, bus });
    if (!game) return;
    if (s === 0 || s === 8) this.kick(t, bus, 0.32);
    if (s === 4 || s === 12) this.noise(t, 0.3, { gain: 0.07, type: 'bandpass', freq: 3000, q: 0.6, bus });
    if (s % 4 === 2) this.noise(t, 0.05, { gain: 0.04, type: 'highpass', freq: 8000, bus });
    if (s === 14 && bar % 2 === 1) this.tone(t, mtof(chord[2] + 36), 0.4, { type: 'sine', gain: 0.03, bus, verb: 1 });
  }

  // Starlight Carnival: calliope organ over an oom-pah bass and tambourine
  carnival(t, s, bar, notes, chord, bass, game, bus, sx) {
    const k = STYLES[3].shift;
    for (const [, m, len] of notes) {
      const d = Math.min(len * sx, 0.3) + 0.08;
      this.tone(t, mtof(m + k), d, { type: 'square', gain: 0.075, bus, filter: 2400, verb: 0.25 });
      this.tone(t, mtof(m + k + 12), d, { type: 'triangle', gain: 0.1, bus, verb: 0.25 });
    }
    if (s % 4 === 0) this.tone(t, mtof(bass + (s % 8 === 4 ? 7 : 0)), 0.18, { type: 'triangle', gain: game ? 0.3 : 0.18, bus });
    if (s % 4 === 2) for (const n of chord) this.tone(t, mtof(n + 12), 0.1, { type: 'square', gain: game ? 0.032 : 0.02, bus, filter: 1600 });
    if (!game) return;
    if (s === 0 || s === 8) this.kick(t, bus, 0.45);
    if (s === 4 || s === 12) this.noise(t, 0.14, { gain: 0.2, type: 'bandpass', freq: 2200, q: 0.7, bus });
    if (s % 2 === 0) this.noise(t, 0.07, { gain: s % 4 === 2 ? 0.08 : 0.045, type: 'highpass', freq: 8500, bus });
    if (s === 14) this.tone(t, mtof(chord[1] + 36), 0.15, { type: 'sine', gain: 0.04, bus, verb: 0.5 });
  }

  // ---------- sound effects ----------
  now() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  ok() {
    return this.ctx && this.ctx.state === 'running' && this.sfxOn;
  }

  heart(double) {
    if (!this.ok()) return;
    const t = this.now();
    if (t - this.lastHeart < 0.5) this.combo = Math.min(this.combo + 1, 14);
    else this.combo = 0;
    this.lastHeart = t;
    const scale = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 26, 28, 31, 33];
    const base = 79 + scale[this.combo];
    this.tone(t, mtof(base), 0.12, { type: 'sine', gain: 0.16, verb: 0.3 });
    this.tone(t + 0.045, mtof(base + 7), 0.16, { type: 'sine', gain: 0.12, verb: 0.35 });
    if (double) this.tone(t + 0.09, mtof(base + 12), 0.14, { type: 'triangle', gain: 0.08, verb: 0.4 });
  }

  apple() {
    if (!this.ok()) return;
    const t = this.now();
    [84, 88, 91, 96].forEach((m, i) => this.tone(t + i * 0.05, mtof(m), 0.3, { type: 'triangle', gain: 0.13, verb: 0.5 }));
  }

  jump() {
    if (!this.ok()) return;
    const t = this.now();
    this.tone(t, 330, 0.16, { type: 'sine', gain: 0.22, slideTo: 760 });
    this.tone(t, 660, 0.1, { type: 'triangle', gain: 0.05, slideTo: 1300 });
  }

  land() {
    if (!this.ok()) return;
    this.tone(this.now(), 180, 0.08, { type: 'sine', gain: 0.18, slideTo: 90 });
  }

  slide() {
    if (!this.ok()) return;
    this.noise(this.now(), 0.28, { gain: 0.2, type: 'bandpass', freq: 1500, freqTo: 350, q: 1.2 });
  }

  lane() {
    if (!this.ok()) return;
    const t = this.now();
    this.noise(t, 0.11, { gain: 0.1, type: 'bandpass', freq: 900, freqTo: 2400, q: 1.5 });
    this.tone(t, 520, 0.07, { type: 'sine', gain: 0.05, slideTo: 700 });
  }

  bump() {
    if (!this.ok()) return;
    const t = this.now();
    this.tone(t, 220, 0.14, { type: 'square', gain: 0.07, slideTo: 110, filter: 900 });
    this.noise(t, 0.1, { gain: 0.15, type: 'lowpass', freq: 600 });
  }

  power() {
    if (!this.ok()) return;
    const t = this.now();
    [72, 76, 79, 84, 88, 91, 96].forEach((m, i) => this.tone(t + i * 0.045, mtof(m), 0.28, { type: 'triangle', gain: 0.12, verb: 0.6 }));
    this.noise(t, 0.5, { gain: 0.06, type: 'highpass', freq: 5000, freqTo: 12000 });
  }

  shieldPop() {
    if (!this.ok()) return;
    const t = this.now();
    this.tone(t, 1400, 0.25, { type: 'sine', gain: 0.14, slideTo: 300, verb: 0.5 });
    this.noise(t, 0.2, { gain: 0.14, type: 'highpass', freq: 3000 });
  }

  crash() {
    if (!this.ok()) return;
    const t = this.now();
    this.noise(t, 0.25, { gain: 0.35, type: 'lowpass', freq: 800, freqTo: 200 });
    this.tone(t, 200, 0.2, { type: 'sine', gain: 0.35, slideTo: 60 });
    [67, 66, 65, 64].forEach((m, i) => this.tone(t + 0.25 + i * 0.2, mtof(m), 0.22, { type: 'triangle', gain: 0.12, slideTo: mtof(m - 0.6) }));
  }

  click() {
    if (!this.ok()) return;
    this.tone(this.now(), 700, 0.06, { type: 'sine', gain: 0.14, slideTo: 1100 });
  }

  whoosh() {
    if (!this.ok()) return;
    this.noise(this.now(), 0.6, { gain: 0.2, type: 'bandpass', freq: 400, freqTo: 3000, q: 0.8 });
  }

  fanfare() {
    if (!this.ok()) return;
    const t = this.now();
    const seq = [[72, 0], [76, 0.1], [79, 0.2], [84, 0.3], [79, 0.45], [84, 0.55]];
    for (const [m, dt] of seq) {
      this.tone(t + dt, mtof(m), 0.3, { type: 'square', gain: 0.06, filter: 3000, verb: 0.4 });
      this.tone(t + dt, mtof(m), 0.3, { type: 'triangle', gain: 0.1, verb: 0.4 });
    }
  }

  fireworkLaunch() {
    if (!this.ok()) return;
    this.tone(this.now(), 500, 0.8, { type: 'sine', gain: 0.025, slideTo: 1500 });
  }

  fireworkPop() {
    if (!this.ok()) return;
    const t = this.now();
    this.noise(t, 0.35, { gain: 0.22, type: 'lowpass', freq: 900, freqTo: 120 });
    for (let i = 0; i < 5; i++) this.noise(t + 0.12 + Math.random() * 0.35, 0.05, { gain: 0.05, type: 'highpass', freq: 5000 });
  }

  milestone() {
    if (!this.ok()) return;
    const t = this.now();
    [79, 84, 88, 91, 96].forEach((m, i) => this.tone(t + i * 0.07, mtof(m), 0.32, { type: 'square', gain: 0.045, filter: 3200, verb: 0.5 }));
  }

  boing() {
    if (!this.ok()) return;
    const t = this.now();
    this.tone(t, 160, 0.45, { type: 'sine', gain: 0.3, slideTo: 620 });
    this.tone(t + 0.02, 320, 0.3, { type: 'triangle', gain: 0.08, slideTo: 1240 });
  }

  dash() {
    if (!this.ok()) return;
    const t = this.now();
    this.noise(t, 0.5, { gain: 0.22, type: 'bandpass', freq: 300, freqTo: 4000, q: 0.9 });
    [60, 67, 72, 79].forEach((m, i) => this.tone(t + i * 0.05, mtof(m + 12), 0.2, { type: 'square', gain: 0.05, filter: 2400 }));
  }

  smash() {
    if (!this.ok()) return;
    const t = this.now();
    this.noise(t, 0.2, { gain: 0.28, type: 'bandpass', freq: 1400, freqTo: 300, q: 0.7 });
    this.tone(t, 900, 0.18, { type: 'triangle', gain: 0.1, slideTo: 1800, verb: 0.4 });
  }

  mission() {
    if (!this.ok()) return;
    const t = this.now();
    [76, 79, 84, 88, 91, 96].forEach((m, i) => this.tone(t + i * 0.06, mtof(m), 0.4, { type: 'triangle', gain: 0.12, verb: 0.6 }));
  }

  revive() {
    if (!this.ok()) return;
    const t = this.now();
    [60, 64, 67, 72, 76, 79, 84].forEach((m, i) => this.tone(t + i * 0.05, mtof(m), 0.35, { type: 'sine', gain: 0.14, verb: 0.7 }));
    this.noise(t, 0.8, { gain: 0.06, type: 'highpass', freq: 4000, freqTo: 12000 });
  }

  buy() {
    if (!this.ok()) return;
    const t = this.now();
    [79, 84, 88, 91].forEach((m, i) => this.tone(t + i * 0.06, mtof(m), 0.35, { type: 'triangle', gain: 0.12, verb: 0.6 }));
  }
}
