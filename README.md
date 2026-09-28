<div align="center">

<img src="assets/icon-192.png" width="96" height="96" alt="Kitty app icon">

# Hello Kitty Dream Dash

A fan-made 3D endless runner for your phone. Dash through Candy Town, grab hearts, ride rainbows and unlock cute outfits.

## [▶ Tap here to play](https://raw.githack.com/MEGLADO/hellokitty-game/HEAD/index.html)

<img src="assets/screens/title.jpg" width="190" alt="Title screen with Kitty waving"> <img src="assets/screens/run.jpg" width="190" alt="Kitty running down the candy road"> <img src="assets/screens/rush.jpg" width="190" alt="Rainbow Rush power-up"> <img src="assets/screens/night.jpg" width="190" alt="Starry night with glowing lamps">

</div>

## Play on your phone

1. Open the **Tap here to play** link above on your phone (Safari on iPhone, Chrome on Android). Nothing to download or install.
2. Tap **Play**.
3. Swipe on the screen to move Kitty. Swipe left or right to change lanes, up to jump, down to slide.

No sound on iPhone? Flip the silent switch on the side of the phone off, then tap the music button.

### Make it a full-screen app

Add it to your home screen so it opens like a real app, with no browser bars:

- **iPhone:** tap the Share button, then **Add to Home Screen**.
- **Android:** tap the **⋮** menu, then **Add to Home screen** (or **Install app**).

## How to play

| Swipe | Kitty… |
| --- | --- |
| ← → | changes lanes |
| ↑ | jumps over candy fences |
| ↓ | slides under ribbon gates |

- Run up the pink ramps to ride on top of the cake trains.
- Gift towers, cakes, cupcakes and rolling yarn balls are too big to jump. Switch lanes!
- Hearts are worth 10 points, shiny apples give 5 hearts at once.
- The sky changes as you run: Strawberry Morning, Peach Sunset, Starry Night and Cotton Candy Dawn.
- On a computer: arrow keys or WASD, Space to jump, P to pause.

### Power-ups

| Bubble | What it does |
| --- | --- |
| Heart Magnet | pulls every nearby heart to Kitty |
| Rainbow Rush | Kitty flies on a cloud above everything, leaving a rainbow trail |
| Bubble Shield | saves you from one crash |
| Golden Apple | doubles every heart for a while |

### Wardrobe

Spend your hearts on seven outfits: Classic Kitty, Sakura Dream, Ocean Sailor, Mint Candy, Starlight, Princess Kitty and Rainbow Magic. Your best score, hearts and outfits are saved on your phone.

<img src="assets/screens/wardrobe.jpg" width="190" alt="Wardrobe with the Princess Kitty outfit">

## Optional: a shorter link with GitHub Pages

The play link above works right away. If you want a shorter address like `meglado.github.io/hellokitty-game`, switch on GitHub Pages once:

1. Open the repo on github.com and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the branch `claude/upbeat-turing-2ey9n1` (or `main` if you merge it there) and the **/ (root)** folder, then **Save**.
4. After about a minute the game is live at **https://meglado.github.io/hellokitty-game/**

## What's inside

- **three.js** 3D scene with a curved "tiny planet" road, cel-shaded Kitty with outlines, glowing bloom, sparkles, confetti, a rainbow trail and speed lines
- A dream castle, rainbow, candy-cane lamps, lollipops and cotton candy trees
- Music and sound effects made with the Web Audio API in code, so there are no audio files
- Graphics quality lowers itself automatically on slower phones
- Everything is self-contained (the fonts are bundled too), so it also works on networks that block outside sites

## For developers

```bash
npm install
npm run build     # bundles src/ into dist/game.js and writes index.html
npm run serve     # http://localhost:8080
```

- `src/` has the game: `main.js` (game loop and states), `kitty.js`, `world.js`, `track.js`, `particles.js`, `fx.js`, `audio.js`, `ui.js`
- `node tools/track-check.mjs` generates kilometres of track and checks that every stretch can be passed
- `node tools/smoke-test.mjs <out-dir> <scenario>` plays the game in a phone-sized headless browser and saves screenshots (scenarios: `run`, `night`, `crash`, `wardrobe`, `gallery`, `mechanics`, `bot`)
- Handy URL options: `?debug` shows FPS, `?quality=low|medium|high` forces graphics quality

## Credits

- Built with [three.js](https://threejs.org) (MIT)
- Fonts: [Mochiy Pop One](https://fonts.google.com/specimen/Mochiy+Pop+One) and [M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c), both under the SIL Open Font License 1.1 (see `assets/fonts/`)

This is a fan-made game for fun. It is not affiliated with or endorsed by Sanrio. Hello Kitty is a trademark of Sanrio Co., Ltd.
