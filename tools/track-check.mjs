// Generates a lot of track in Node (no rendering) and checks that every
// stretch is passable and nothing overlaps. Usage: node tools/track-check.mjs [metres] [seeds]
import { Track } from '../src/track.js';
import { SPEED_START, SPEED_MAX, SPEED_RAMP } from '../src/config.js';

const METRES = Number(process.argv[2]) || 6000;
const SEEDS = Number(process.argv[3]) || 20;

// deterministic Math.random per seed
function seedRandom(seed) {
  let s = seed >>> 0;
  Math.random = () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const problems = new Map();
const flag = (kind, detail) => {
  if (!problems.has(kind)) problems.set(kind, []);
  const list = problems.get(kind);
  if (list.length < 5) list.push(detail);
  else list.more = (list.more || 0) + 1;
};

const hard = (o) => o.type === 'block' || o.type === 'yarn' || (o.type === 'train' && !o.hasRamp);

for (let seed = 1; seed <= SEEDS; seed++) {
  seedRandom(seed);
  const t = new Track({ add() {} }, {});
  let dist = 0;
  const dt = 1 / 30;
  let time = 0;
  const seen = new Set();
  while (dist < METRES) {
    const speed = Math.min(SPEED_MAX, SPEED_START + dist * SPEED_RAMP);
    dist += speed * dt;
    time += dt;
    t.update(dt, dist, speed, time);

    // mark trains that are reachable by a ramp in the same lane
    for (const o of t.obstacles) {
      if (o.type !== 'train') continue;
      o.hasRamp = t.obstacles.some((r) => r.type === 'ramp' && r.lane === o.lane && Math.abs(r.sb - o.sa) < 0.01);
    }
    // any train touching a reachable train (side by side) is reachable too
    for (const o of t.obstacles) {
      if (o.type === 'train' && !o.hasRamp) {
        o.hasRamp = t.obstacles.some((q) => q.type === 'train' && q.hasRamp && Math.abs(q.lane - o.lane) === 1 && q.sa <= o.sa + 0.5 && q.sb >= o.sa);
      }
    }

    for (const o of t.obstacles) {
      if (seen.has(o)) continue;
      seen.add(o);
      // overlaps in the same lane
      for (const q of t.obstacles) {
        if (q === o || q.lane !== o.lane || o.dead || q.dead) continue;
        const pairOk = (o.type === 'ramp' && q.type === 'train') || (o.type === 'train' && q.type === 'ramp');
        const overlap = Math.min(o.sb, q.sb) - Math.max(o.sa, q.sa);
        if (overlap > 0.01 && !pairOk) flag('overlap', `seed ${seed} @${o.sa.toFixed(1)} ${o.type}/${q.type} lane ${o.lane}`);
      }
    }

    // passability at sample points ahead
    for (let s = dist + 20; s < dist + 140; s += 1.5) {
      let blocked = 0;
      for (const lane of [-1, 0, 1]) {
        const here = t.obstacles.filter((o) => o.lane === lane && o.sa - 0.6 <= s && o.sb + 0.6 >= s);
        if (here.some(hard)) blocked++;
      }
      if (blocked >= 3) flag('wall', `seed ${seed} at s=${s.toFixed(1)} (dist ${dist.toFixed(0)})`);
    }

    // hearts / power-ups inside obstacles
    for (const it of [...t.items, ...t.powers]) {
      if (it.checked) continue;
      it.checked = true;
      const lane = Math.round(it.x / 2.1);
      for (const o of t.obstacles) {
        if (o.lane !== lane || it.s < o.sa - 0.3 || it.s > o.sb + 0.3) continue;
        let inside;
        if (o.platform) {
          const surf = o.ramp ? o.top * Math.min(1, Math.max(0, (it.s - o.sa) / (o.sb - o.sa))) : o.top;
          inside = it.y < surf + 0.3;
        } else {
          inside = it.y > o.minY - 0.3 && it.y < o.maxY + 0.2;
          // hearts under a gate are fine (you slide under), hearts over a barrier are fine
          if (o.type === 'gate' && it.y < o.minY) inside = false;
          if (o.type === 'barrier' && it.y > o.maxY + 0.2) inside = false;
        }
        if (inside) flag(it.kind === 'heart' || it.kind === 'apple' ? 'item-in-obstacle' : 'power-in-obstacle', `seed ${seed} ${it.kind} @${it.s.toFixed(1)} lane ${lane} y=${it.y.toFixed(2)} in ${o.type}`);
      }
    }

    // rolling yarn must not roll through other obstacles
    for (const o of t.obstacles) {
      if (o.type !== 'yarn' || !o.rolling) continue;
      for (const q of t.obstacles) {
        if (q === o || q.lane !== o.lane) continue;
        if (Math.min(o.sb, q.sb) - Math.max(o.sa, q.sa) > 0) flag('yarn-through', `seed ${seed} yarn @${o.s.toFixed(1)} hits ${q.type}`);
      }
    }
  }
}

if (problems.size === 0) {
  console.log(`OK: ${SEEDS} seeds x ${METRES} m, no unfair walls, overlaps or buried items`);
} else {
  for (const [kind, list] of problems) {
    console.log(`${kind}: ${list.length}${list.more ? ` (+${list.more} more)` : ''}`);
    for (const d of list) console.log('   ', d);
  }
  process.exitCode = 1;
}
