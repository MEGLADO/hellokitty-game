import { POWERS } from './config.js';

const $ = (id) => document.getElementById(id);

const HEART_SVG = (fill) => `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M12 21s-8-4.9-10-9.8C.6 7.6 3 4 6.6 4c2.2 0 3.8 1.2 5.4 3 1.6-1.8 3.2-3 5.4-3C21 4 23.4 7.6 22 11.2 20 16.1 12 21 12 21z" fill="${fill}" stroke="#fff" stroke-width="1.6"/></svg>`;

const CHECK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const ICONS = {
  magnet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4v8a3 3 0 0 0 6 0V3h4v8a7 7 0 0 1-14 0z" fill="#ff3d6e"/><path d="M5 3h4v3H5zM15 3h4v3h-4z" fill="#fff"/></svg>',
  rush: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" fill="#ffc21a"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-4.9-10-9.8C.6 7.6 3 4 6.6 4c2.2 0 3.8 1.2 5.4 3 1.6-1.8 3.2-3 5.4-3C21 4 23.4 7.6 22 11.2 20 16.1 12 21 12 21z" fill="#4fb8ff"/></svg>',
  dash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2L4 13.5h6.2L8.8 22 20 9.8h-6.4z" fill="#ff7a3d"/></svg>',
  double: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7c-2-2-7-2-8 3-1 4 2 11 5 11 1.3 0 2-.6 3-.6s1.7.6 3 .6c3 0 6-7 5-11-1-5-6-5-8-3z" fill="#f5b400"/><path d="M12 7c0-2 1-4 3-5" stroke="#7a4a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',
};

export class UI {
  constructor(game) {
    this.game = game;
    this.screens = ['loading', 'title', 'hud', 'pause', 'over', 'wardrobe', 'help', 'revive', 'missions'].reduce((a, id) => ((a[id] = $(id)), a), {});
    this.els = {
      score: $('h-score'), hearts: $('h-hearts'), powers: $('h-powerups'),
      tBest: $('t-best'), tHearts: $('t-hearts'),
      oScore: $('o-score'), oBest: $('o-best'), oHearts: $('o-hearts'), oNew: $('o-new'), oTitle: $('o-title'),
      wName: $('w-name'), wStatus: $('w-status'), wAction: $('w-action'), wHearts: $('w-hearts'), wDots: $('w-dots'),
      toast: $('toast'), popups: $('popups'), tut: $('tutorial'), tutText: $('tut-text'), tutArrow: $('tut-arrow'),
      soundBtns: [$('btn-sound'), $('btn-sound2')], musicBtns: [$('btn-music'), $('btn-music2')],
      mood: $('mood'), banner: $('banner'), bannerText: $('banner-text'), combo: $('h-combo'), flyers: $('flyers'),
      mult: $('h-mult'), tLevel: $('t-level'), tMult: $('t-mult'), tDots: $('t-mdots'),
      mpop: $('mission-pop'), mpopText: $('mpop-text'), mpopReward: $('mpop-reward'),
      pMissions: $('p-missions'), oMissions: $('o-missions'), mList: $('m-list'), mLevel: $('m-level'), mSub: $('m-sub'),
      rvCost: $('rv-cost'), rvBank: $('rv-bank'), rvTimer: $('rv-timer'),
    };
    this.mpopQueue = [];
    this.flyCount = 0;
    this.last = { score: -1, hearts: -1 };
    this.powerEls = {};
    this.toastTimer = 0;
    this.bind();
  }

  bind() {
    const g = this.game;
    const on = (id, fn) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener('click', (e) => {
        e.preventDefault();
        if (g.state !== 'paused') g.audio.unlock();
        fn();
      });
    };
    on('btn-play', () => g.startRun());
    on('btn-again', () => g.startRun());
    on('btn-wardrobe', () => g.openWardrobe());
    on('btn-wardrobe2', () => g.openWardrobe());
    on('btn-help', () => g.showHelp(true));
    on('help-close', () => g.showHelp(false));
    on('btn-pause', () => g.pause());
    on('btn-resume', () => g.resume());
    on('btn-home1', () => g.goHome());
    on('btn-home2', () => g.goHome());
    on('w-prev', () => g.wardrobeStep(-1));
    on('w-next', () => g.wardrobeStep(1));
    on('w-action', () => g.wardrobeAction());
    on('w-back', () => g.closeWardrobe());
    on('btn-missions', () => g.openMissions());
    on('m-close', () => g.startRun());
    // tapping outside a panel closes it
    for (const id of ['missions', 'help']) {
      $(id).addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        if (id === 'missions') g.closeMissions();
        else g.showHelp(false);
      });
    }
    on('btn-revive', () => g.revive());
    on('btn-norevive', () => g.declineRevive());
    for (const id of ['btn-sound', 'btn-sound2']) on(id, () => g.toggleSfx());
    for (const id of ['btn-music', 'btn-music2']) on(id, () => g.toggleMusic());
  }

  show(...ids) {
    for (const [id, el] of Object.entries(this.screens)) {
      if (!el) continue;
      el.hidden = !ids.includes(id);
    }
  }

  setSound(sfx, music) {
    for (const b of this.els.soundBtns) {
      if (!b) continue;
      b.classList.toggle('off', !sfx);
      b.setAttribute('aria-pressed', String(sfx));
      b.setAttribute('aria-label', sfx ? 'Sound effects on' : 'Sound effects off');
    }
    for (const b of this.els.musicBtns) {
      if (!b) continue;
      b.classList.toggle('off', !music);
      b.setAttribute('aria-pressed', String(music));
      b.setAttribute('aria-label', music ? 'Music on' : 'Music off');
    }
  }

  titleStats(best, hearts) {
    this.els.tBest.textContent = best.toLocaleString();
    this.els.tHearts.textContent = hearts.toLocaleString();
  }

  hud(score, hearts) {
    if (score !== this.last.score) {
      this.els.score.textContent = score.toLocaleString();
      this.last.score = score;
    }
    if (hearts !== this.last.hearts) {
      this.els.hearts.textContent = hearts.toLocaleString();
      if (this.last.hearts >= 0 && hearts > this.last.hearts) {
        const el = this.els.hearts.parentElement;
        el.classList.remove('pop');
        void el.offsetWidth;
        el.classList.add('pop');
      }
      this.last.hearts = hearts;
    }
  }

  resetHud() {
    this.last = { score: -1, hearts: -1 };
    this.combo(0);
    this.els.powers.innerHTML = '';
    this.powerEls = {};
    this.hud(0, 0);
  }

  // timers: { kind: fraction 0..1 } for active power-ups
  powers(timers) {
    for (const kind of Object.keys(POWERS)) {
      const f = timers[kind];
      let el = this.powerEls[kind];
      if (f > 0) {
        if (!el) {
          el = document.createElement('div');
          el.className = 'power';
          el.style.setProperty('--c', POWERS[kind].color);
          el.innerHTML = ICONS[kind];
          el.title = POWERS[kind].name;
          this.els.powers.appendChild(el);
          this.powerEls[kind] = el;
        }
        el.style.setProperty('--f', f.toFixed(3));
      } else if (el) {
        el.remove();
        delete this.powerEls[kind];
      }
    }
  }

  toast(text, color = '#ff5fa2', ms = 1600) {
    const el = this.els.toast;
    el.textContent = text;
    el.style.setProperty('--c', color);
    el.hidden = false;
    el.classList.remove('in');
    void el.offsetWidth;
    el.classList.add('in');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      el.hidden = true;
    }, ms);
  }

  mood(name) {
    const el = this.els.mood;
    el.textContent = name;
    el.hidden = false;
    el.classList.remove('in');
    void el.offsetWidth;
    el.classList.add('in');
    clearTimeout(this.moodTimer);
    this.moodTimer = setTimeout(() => (el.hidden = true), 2600);
  }

  banner(text) {
    const el = this.els.banner;
    this.els.bannerText.textContent = text;
    el.hidden = false;
    el.classList.remove('in');
    void el.offsetWidth;
    el.classList.add('in');
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => (el.hidden = true), 3300);
  }

  combo(n) {
    const el = this.els.combo;
    if (n < 5) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = `x${n} combo`;
    el.classList.remove('pop');
    void el.offsetWidth;
    el.classList.add('pop');
  }

  // A little heart that flies from where it was collected into the counter.
  flyHeart(x, y, gold) {
    if (this.flyCount > 14) return;
    const icon = this.els.hearts.parentElement.querySelector('.ico');
    const r = icon.getBoundingClientRect();
    const el = document.createElement('div');
    el.className = 'flyer';
    el.innerHTML = HEART_SVG(gold ? '#f5b400' : '#ff4f97');
    el.style.transform = `translate(${x}px, ${y}px) scale(1.25)`;
    this.els.flyers.appendChild(el);
    this.flyCount++;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.transform = `translate(${r.left + r.width / 2}px, ${r.top + r.height / 2}px) scale(0.55)`;
        el.style.opacity = '0.85';
      })
    );
    setTimeout(() => {
      el.remove();
      this.flyCount--;
    }, 600);
  }

  popup(text, x, y, color = '#ff5fa2') {
    const el = document.createElement('div');
    el.className = 'popup';
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.setProperty('--c', color);
    this.els.popups.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  tutorial(kind) {
    const el = this.els.tut;
    if (!kind) {
      el.hidden = true;
      this.tutKind = null;
      return;
    }
    if (this.tutKind === kind) return;
    this.tutKind = kind;
    const text = { jump: 'Swipe up to jump!', slide: 'Swipe down to slide!', side: 'Swipe left or right!' }[kind];
    this.els.tutText.textContent = text;
    el.dataset.kind = kind;
    el.hidden = false;
  }

  // Level badge on the title screen and the score multiplier in the HUD.
  level(level, doneCount) {
    this.els.tLevel.textContent = String(level);
    this.els.tMult.textContent = `x${level}`;
    [...this.els.tDots.children].forEach((d, i) => d.classList.toggle('on', i < doneCount));
    const m = this.els.mult;
    m.hidden = level < 2;
    if (m.textContent !== `x${level}`) {
      m.textContent = `x${level}`;
      m.classList.remove('pop');
      void m.offsetWidth;
      m.classList.add('pop');
    }
  }

  missions(el, list, fresh = []) {
    el.innerHTML = '';
    list.forEach((m, i) => {
      const row = document.createElement('div');
      row.className = 'mission' + (m.done ? ' done' : '') + (fresh.includes(m.id) ? ' fresh' : '');
      const check = document.createElement('span');
      check.className = 'm-check';
      if (m.done) check.innerHTML = CHECK_SVG;
      else check.textContent = String(i + 1);
      const body = document.createElement('span');
      body.className = 'm-body';
      const text = document.createElement('span');
      text.className = 'm-text';
      text.textContent = m.text;
      const bar = document.createElement('span');
      bar.className = 'm-bar';
      const fill = document.createElement('i');
      fill.style.setProperty('--f', Math.min(1, m.progress / m.target).toFixed(3));
      bar.appendChild(fill);
      body.append(text, bar);
      const num = document.createElement('span');
      num.className = 'm-num';
      const unit = m.unit ? ` ${m.unit}` : '';
      num.textContent = m.done ? 'Done!' : `${m.progress.toLocaleString()}/${m.target.toLocaleString()}${unit}`;
      row.append(check, body, num);
      el.appendChild(row);
    });
  }

  missionsPanel(level, maxed, list) {
    this.els.mLevel.textContent = String(level);
    this.els.mSub.innerHTML = maxed
      ? `You're at the top level: <b>score x${level}</b>! Missions still give hearts.`
      : `Finish all three to reach Level ${level + 1} and <b>score x${level + 1}</b>!`;
    this.missions(this.els.mList, list);
  }

  // "Mission complete" card; several in a row queue up.
  missionDone(text, reward) {
    this.mpopQueue.push([text, reward]);
    if (this.mpopQueue.length === 1) this.nextMissionPop();
  }

  nextMissionPop() {
    const next = this.mpopQueue[0];
    const el = this.els.mpop;
    if (!next) {
      el.hidden = true;
      return;
    }
    this.els.mpopText.textContent = next[0];
    this.els.mpopReward.textContent = `+${next[1]}`;
    el.hidden = false;
    el.classList.remove('in');
    void el.offsetWidth;
    el.classList.add('in');
    clearTimeout(this.mpopTimer);
    this.mpopTimer = setTimeout(() => {
      this.mpopQueue.shift();
      this.nextMissionPop();
    }, 3000);
  }

  clearMissionPops() {
    this.mpopQueue.length = 0;
    clearTimeout(this.mpopTimer);
    this.els.mpop.hidden = true;
  }

  revive(cost, bank, seconds) {
    this.els.rvCost.textContent = cost.toLocaleString();
    this.els.rvBank.textContent = bank.toLocaleString();
    const t = this.els.rvTimer;
    t.classList.remove('run');
    void t.offsetWidth;
    t.style.setProperty('--t', `${seconds}s`);
    t.classList.add('run');
  }

  gameOver({ score, best, hearts, isNew, title }) {
    this.els.oScore.textContent = score.toLocaleString();
    this.els.oBest.textContent = best.toLocaleString();
    this.els.oHearts.textContent = `+${hearts.toLocaleString()}`;
    this.els.oNew.hidden = !isNew;
    this.els.oTitle.textContent = title;
  }

  wardrobe(outfit, { owned, wearing, canBuy, bank, index, total }) {
    this.els.wName.textContent = outfit.name;
    this.els.wHearts.textContent = bank.toLocaleString();
    const btn = this.els.wAction;
    btn.disabled = false;
    btn.classList.remove('locked');
    if (wearing) {
      this.els.wStatus.textContent = 'Wearing now';
      btn.textContent = 'Play';
    } else if (owned) {
      this.els.wStatus.textContent = 'In your closet';
      btn.textContent = 'Wear';
    } else {
      this.els.wStatus.textContent = canBuy ? `Costs ${outfit.price.toLocaleString()} hearts` : `Needs ${outfit.price.toLocaleString()} hearts · you have ${bank.toLocaleString()}`;
      btn.textContent = `Buy · ${outfit.price.toLocaleString()}`;
      if (!canBuy) {
        btn.classList.add('locked');
        btn.disabled = true;
      }
    }
    const dots = this.els.wDots;
    if (dots.children.length !== total) {
      dots.innerHTML = '';
      for (let i = 0; i < total; i++) dots.appendChild(document.createElement('i'));
    }
    [...dots.children].forEach((d, i) => d.classList.toggle('on', i === index));
  }
}
