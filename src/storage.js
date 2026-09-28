const KEY = 'hk-dream-dash-v1';

const defaults = () => ({
  best: 0,
  hearts: 0,
  owned: ['classic'],
  outfit: 'classic',
  sfx: true,
  music: true,
  runs: 0,
  quality: null,
});

export function loadSave() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = { ...defaults(), ...JSON.parse(raw) };
      if (!Array.isArray(d.owned) || !d.owned.includes('classic')) d.owned = ['classic', ...(Array.isArray(d.owned) ? d.owned : [])];
      return d;
    }
  } catch (e) {
    /* storage unavailable */
  }
  return defaults();
}

export function writeSave(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (e) {
    /* storage unavailable */
  }
}
