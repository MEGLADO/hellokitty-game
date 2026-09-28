// Swipes on touch screens (and mouse drags), arrow keys / WASD on keyboards.
export class Input {
  constructor(el, onAction) {
    this.onAction = onAction;
    this.active = null;
    this.enabled = false;
    const threshold = () => Math.max(22, Math.min(window.innerWidth, window.innerHeight) * 0.06);

    const down = (e) => {
      if (!this.enabled) return;
      this.active = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now() };
      if (e.pointerType !== 'mouse') e.preventDefault();
    };
    const move = (e) => {
      const a = this.active;
      if (!a || a.id !== e.pointerId) return;
      const dx = e.clientX - a.x, dy = e.clientY - a.y;
      const th = threshold();
      if (Math.abs(dx) < th && Math.abs(dy) < th) return;
      let action;
      if (Math.abs(dx) > Math.abs(dy)) action = dx > 0 ? 'right' : 'left';
      else action = dy > 0 ? 'down' : 'up';
      // one action per direction per touch, so a long swipe moves one lane;
      // a new direction (like right then up) still chains without lifting
      if (action !== a.last) this.onAction(action);
      a.last = action;
      a.x = e.clientX;
      a.y = e.clientY;
      e.preventDefault();
    };
    const up = (e) => {
      if (this.active && this.active.id === e.pointerId) this.active = null;
    };
    el.addEventListener('pointerdown', down, { passive: false });
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    // stop iOS from scrolling / zooming the page
    el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault());

    window.addEventListener('keydown', (e) => {
      const map = {
        ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right',
        ArrowUp: 'up', KeyW: 'up', Space: 'up', ArrowDown: 'down', KeyS: 'down',
        Escape: 'pause', KeyP: 'pause',
      };
      const act = map[e.code];
      if (!act) return;
      if (e.target && (e.target.tagName === 'BUTTON') && (e.code === 'Space')) return;
      if (!this.enabled && act !== 'pause') return;
      e.preventDefault();
      if (!e.repeat) this.onAction(act);
    });
  }
}
