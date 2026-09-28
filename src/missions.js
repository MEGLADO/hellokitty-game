// Missions: three goals at a time. Finish all three to level up, which
// raises the score multiplier for every run after.
import { BIOMES, ZONE_LEN } from './config.js';

export const MAX_LEVEL = 30;

const step = (v, s) => Math.max(s, Math.round(v / s) * s);
const pl = (n, one, many = one + 's') => `${n.toLocaleString()} ${n === 1 ? one : many}`;

// run: counts within a single run (progress restarts each run)
// group: at most one mission from each group at a time
export const KINDS = {
  hearts: { run: true, group: 'hearts', text: (n) => `Collect ${pl(n, 'heart')} in one run`, target: (L) => step(40 + 25 * (L - 1), 5) },
  meters: { run: true, group: 'dist', text: (n) => `Run ${n.toLocaleString()} m in one run`, target: (L) => step(400 + 220 * (L - 1), 50) },
  score: { run: true, group: 'dist', text: (n) => `Score ${n.toLocaleString()} in one run`, target: (L) => step(1500 * L * (1 + 0.3 * (L - 1)), 500) },
  world: {
    run: true,
    group: 'dist',
    text: (n) => `Reach ${BIOMES[Math.round(n / ZONE_LEN) % BIOMES.length].name} in one run`,
    target: (L) => Math.min(3, 1 + Math.floor((L - 1) / 3)) * ZONE_LEN,
    unit: 'm',
  },
  jumps: { run: true, group: 'moves', text: (n) => `Jump ${pl(n, 'time')} in one run`, target: (L) => Math.min(80, 12 + 4 * (L - 1)) },
  slides: { run: true, group: 'moves', text: (n) => `Slide ${pl(n, 'time')} in one run`, target: (L) => Math.min(50, 6 + 3 * (L - 1)) },
  combo: { run: true, group: 'combo', text: (n) => `Reach a x${n} heart combo`, target: (L) => Math.min(60, 10 + 5 * (L - 1)) },
  jelly: { group: 'jelly', text: (n) => `Bounce on ${pl(n, 'jelly trampoline')}`, target: (L) => Math.min(40, 3 + 2 * (L - 1)) },
  smash: { group: 'smash', text: (n) => `Smash ${pl(n, 'thing')} with Sugar Dash`, target: (L) => Math.min(60, 3 + 3 * (L - 1)) },
  powers: { group: 'powers', text: (n) => `Grab ${pl(n, 'power-up')}`, target: (L) => Math.min(40, 3 + 2 * (L - 1)) },
  apples: { group: 'apples', text: (n) => `Collect ${pl(n, 'red apple')}`, target: (L) => Math.min(60, 4 + 3 * (L - 1)) },
  trains: { group: 'trains', text: (n) => `Run along ${pl(n, 'cake train')}`, target: (L) => Math.min(40, 3 + 2 * (L - 1)) },
};

export const missionReward = (level) => 20 + 10 * Math.min(level, 20);

export function pickMissions(level, avoid = []) {
  const ids = Object.keys(KINDS).filter((id) => !avoid.includes(id));
  const out = [];
  const groups = new Set();
  while (out.length < 3 && ids.length) {
    const id = ids.splice(Math.floor(Math.random() * ids.length), 1)[0];
    if (groups.has(KINDS[id].group)) continue;
    groups.add(KINDS[id].group);
    out.push({ id, target: KINDS[id].target(level), progress: 0, done: false });
  }
  return out;
}

export class Missions {
  // hooks: { done(mission, reward), levelUp(level) }
  constructor(save, hooks) {
    this.save = save;
    this.hooks = hooks;
    if (!(save.level >= 1)) save.level = 1;
    save.level = Math.min(MAX_LEVEL, Math.floor(save.level));
    if (!this.valid(save.missions)) save.missions = pickMissions(save.level);
  }

  valid(list) {
    return Array.isArray(list) && list.length === 3 && list.every((m) => m && KINDS[m.id] && m.target > 0 && m.progress >= 0);
  }

  get level() {
    return this.save.level;
  }

  // score multiplier
  get mult() {
    return this.save.level;
  }

  startRun() {
    for (const m of this.save.missions) if (!m.done && KINDS[m.id].run) m.progress = 0;
  }

  // best value reached this run
  set(id, v) {
    for (const m of this.save.missions) {
      if (m.id !== id || m.done || v <= m.progress) continue;
      m.progress = Math.floor(v);
      this.check(m);
    }
  }

  // running count across runs (or within this run for run missions)
  add(id, n = 1) {
    for (const m of this.save.missions) {
      if (m.id !== id || m.done) continue;
      m.progress += n;
      this.check(m);
    }
  }

  check(m) {
    if (m.progress < m.target) return;
    m.progress = m.target;
    m.done = true;
    const reward = missionReward(this.save.level);
    this.save.hearts += reward;
    this.hooks.done(this.describe(m), reward);
    if (this.save.missions.every((x) => x.done)) {
      const old = this.save.missions.map((x) => x.id);
      if (this.save.level < MAX_LEVEL) this.save.level++;
      this.save.missions = pickMissions(this.save.level, old);
      this.hooks.levelUp(this.save.level);
    }
  }

  describe(m) {
    const k = KINDS[m.id];
    return { ...m, text: k.text(m.target), run: !!k.run, unit: k.unit || '' };
  }

  list() {
    return this.save.missions.map((m) => this.describe(m));
  }

  doneCount() {
    return this.save.missions.filter((m) => m.done).length;
  }
}
