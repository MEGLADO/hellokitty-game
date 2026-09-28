// Tunable numbers for the whole game live here.

export const LANE_W = 2.1; // distance between lane centres
export const KITTY_HW = 0.32; // collision half-width
export const KITTY_HD = 0.3; // collision half-depth (along the track)
export const KITTY_H = 1.45; // standing collision height
export const KITTY_SLIDE_H = 0.6; // sliding collision height

export const GRAVITY = 50;
export const JUMP_V = 15.2;
export const SLIDE_TIME = 0.65;
export const LANE_SPEED = 15.5; // units per second when switching lanes
export const RUSH_Y = 5.2; // flight height during Rainbow Rush

export const SPEED_START = 15;
export const SPEED_MAX = 31;
export const SPEED_RAMP = 0.0046; // extra speed per metre travelled

export const SPAWN_AHEAD = 150;
export const DESPAWN_BEHIND = 14;

export const POWERS = {
  magnet: { name: 'Heart Magnet', time: 10, color: '#ff4f97' },
  rush: { name: 'Rainbow Rush', time: 6.5, color: '#ff9f3d' },
  shield: { name: 'Bubble Shield', time: 30, color: '#4fb8ff' },
  double: { name: 'Golden Apple x2', time: 12, color: '#f5b400' },
};

// Outfits for the wardrobe. `bow: 'rainbow'` cycles through colours.
export const OUTFITS = [
  { id: 'classic', name: 'Classic Kitty', price: 0, bow: 0xe8112d, overalls: 0x2f63d6, shirt: 0xffd23f, acc: null },
  { id: 'sakura', name: 'Sakura Dream', price: 150, bow: 0xff6fb5, overalls: 0xff9ccb, shirt: 0xffffff, acc: 'flower' },
  { id: 'sailor', name: 'Ocean Sailor', price: 300, bow: 0x2a6df4, overalls: 0x1f3170, shirt: 0xffffff, acc: 'sailor' },
  { id: 'mint', name: 'Mint Candy', price: 450, bow: 0xffc21a, overalls: 0x3fcfa4, shirt: 0xfff1a6, acc: null },
  { id: 'star', name: 'Starlight', price: 700, bow: 0x9d6bff, overalls: 0x35257a, shirt: 0xffe066, acc: 'star' },
  { id: 'princess', name: 'Princess Kitty', price: 1000, bow: 0xff3d8b, overalls: 0xffb8dc, shirt: 0xffffff, acc: 'crown' },
  { id: 'rainbow', name: 'Rainbow Magic', price: 1500, bow: 'rainbow', overalls: 0xffffff, shirt: 0xbfe6ff, acc: 'star' },
];

// Sky moods that cycle as you run further. Colours are sRGB hex.
export const PALETTES = [
  {
    name: 'Strawberry Morning',
    top: '#63bcff', horizon: '#ffd3ea', bottom: '#ffe6f2', fog: '#ffd8ec',
    light: '#fff3e6', lightI: 1.55, hemiSky: '#fff6fb', hemiGround: '#ffc6e0', hemiI: 1.1,
    sunColor: '#fff0d8', sunDisc: 1.0, stars: 0, lamps: 0.05, rainbow: 0.6, rim: 0.22, bloom: 0.55,
  },
  {
    name: 'Peach Sunset',
    top: '#6f63e8', horizon: '#ffae8a', bottom: '#ffc7ae', fog: '#ffbc9f',
    light: '#ffd0a6', lightI: 1.5, hemiSky: '#ffe0d6', hemiGround: '#d8a2ff', hemiI: 1.05,
    sunColor: '#ffb070', sunDisc: 1.2, stars: 0.15, lamps: 0.75, rainbow: 0.25, rim: 0.4, bloom: 0.65,
  },
  {
    name: 'Starry Night',
    top: '#0d0a33', horizon: '#4f3590', bottom: '#2c2063', fog: '#3a2a75',
    light: '#b3c0ff', lightI: 1.05, hemiSky: '#9189ff', hemiGround: '#46357a', hemiI: 1.1,
    sunColor: '#e9ecff', sunDisc: 0.6, stars: 1, lamps: 1, rainbow: 0, rim: 0.6, bloom: 0.68,
  },
  {
    name: 'Cotton Candy Dawn',
    top: '#94a0ff', horizon: '#ffc1e3', bottom: '#ffdcee', fog: '#ffcbe5',
    light: '#ffe6f2', lightI: 1.5, hemiSky: '#f4e8ff', hemiGround: '#ffc2da', hemiI: 1.08,
    sunColor: '#ffe3f1', sunDisc: 0.9, stars: 0.3, lamps: 0.45, rainbow: 0.45, rim: 0.32, bloom: 0.6,
  },
];
export const PALETTE_LENGTH = 650; // metres per sky mood
export const PALETTE_BLEND = 170; // metres spent blending into the next mood
