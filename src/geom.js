import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

// Bake a transform into a geometry.
export function xf(geo, t = {}) {
  const { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1 } = t;
  const sx = t.sx ?? s, sy = t.sy ?? s, sz = t.sz ?? s;
  _e.set(rx, ry, rz);
  _q.setFromEuler(_e);
  _p.set(x, y, z);
  _s.set(sx, sy, sz);
  _m.compose(_p, _q, _s);
  geo.applyMatrix4(_m);
  return geo;
}

// Give a geometry a flat vertex colour so many parts can be merged into one draw call.
export function paint(geo, color) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  const c = color instanceof THREE.Color ? color : new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  for (const name of Object.keys(g.attributes)) {
    if (!['position', 'normal', 'uv', 'color'].includes(name)) g.deleteAttribute(name);
  }
  g.clearGroups();
  return g;
}

export function part(geo, color, t) {
  return paint(xf(geo, t), color);
}

export function merge(parts) {
  const g = mergeGeometries(parts, false);
  g.computeBoundingSphere();
  g.computeBoundingBox();
  return g;
}

// Smooth normals on extruded shapes so they look puffy.
export function puff(geo) {
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  let g = mergeVertices(geo, 1e-4);
  g.computeVertexNormals();
  const n = g.attributes.position.count;
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  return g;
}

export function heartShape(k = 1) {
  const s = new THREE.Shape();
  s.moveTo(0, -0.44 * k);
  s.bezierCurveTo(-0.1 * k, -0.33 * k, -0.52 * k, -0.08 * k, -0.52 * k, 0.15 * k);
  s.bezierCurveTo(-0.52 * k, 0.37 * k, -0.36 * k, 0.49 * k, -0.21 * k, 0.49 * k);
  s.bezierCurveTo(-0.09 * k, 0.49 * k, 0, 0.41 * k, 0, 0.3 * k);
  s.bezierCurveTo(0, 0.41 * k, 0.09 * k, 0.49 * k, 0.21 * k, 0.49 * k);
  s.bezierCurveTo(0.36 * k, 0.49 * k, 0.52 * k, 0.37 * k, 0.52 * k, 0.15 * k);
  s.bezierCurveTo(0.52 * k, -0.08 * k, 0.1 * k, -0.33 * k, 0, -0.44 * k);
  return s;
}

export function heartGeometry(size = 1, depth = 0.16, detail = 1) {
  const g = new THREE.ExtrudeGeometry(heartShape(size), {
    depth: depth * size,
    bevelEnabled: true,
    bevelThickness: 0.13 * size,
    bevelSize: 0.09 * size,
    bevelSegments: detail > 1 ? 5 : 3,
    curveSegments: detail > 1 ? 18 : 9,
  });
  g.center();
  return puff(g);
}

export function starShape(outer = 0.5, inner = 0.23, points = 5) {
  const s = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / (points * 2)) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

export function starGeometry(size = 1) {
  const g = new THREE.ExtrudeGeometry(starShape(0.5 * size, 0.24 * size), {
    depth: 0.12 * size,
    bevelEnabled: true,
    bevelThickness: 0.08 * size,
    bevelSize: 0.06 * size,
    bevelSegments: 3,
  });
  g.center();
  return puff(g);
}

// Apple body from a lathe profile with dimples at the top and bottom.
export function appleGeometry(r = 0.5) {
  const pts = [];
  const N = 18;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const a = -Math.PI / 2 + t * Math.PI;
    let x = Math.cos(a) * r * (1 + 0.1 * Math.sin(t * Math.PI) * (t > 0.5 ? 1.0 : 0.55));
    let y = Math.sin(a) * r * 0.9;
    y -= Math.exp(-Math.pow((t - 1) / 0.13, 2)) * 0.16 * r;
    y += Math.exp(-Math.pow(t / 0.1, 2)) * 0.07 * r;
    pts.push(new THREE.Vector2(Math.max(1e-4, x), y));
  }
  return new THREE.LatheGeometry(pts, 20);
}

// Rounded cat ear.
export function earGeometry() {
  const pts = [
    [0.2, -0.04], [0.195, 0.04], [0.17, 0.13], [0.125, 0.21], [0.075, 0.27], [0.03, 0.305], [0.0001, 0.315],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const g = new THREE.LatheGeometry(pts, 28);
  g.scale(1, 1, 0.72);
  return g;
}

// Returns separate geometries for the two loops and the knot of a ribbon bow
// (unit size, roughly 1.3 wide).
export function bowGeometries(detail = 1) {
  const a = detail > 1 ? 24 : 12, b = detail > 1 ? 16 : 9;
  const loopL = new THREE.SphereGeometry(0.5, a, b);
  xf(loopL, { sx: 0.66, sy: 0.5, sz: 0.3, rz: -0.22, x: -0.37 });
  const loopR = new THREE.SphereGeometry(0.5, a, b);
  xf(loopR, { sx: 0.66, sy: 0.5, sz: 0.3, rz: 0.22, x: 0.37 });
  const knot = new THREE.SphereGeometry(0.5, a * 0.75, b);
  xf(knot, { sx: 0.32, sy: 0.32, sz: 0.3, z: 0.02 });
  return [loopL, loopR, knot];
}

// Painted bow merged into one geometry (for props).
export function paintedBow(color, t = {}) {
  const parts = bowGeometries().map((g) => paint(g, color));
  const g = merge(parts);
  return xf(g, t);
}

// Fluffy cloud made of overlapping spheres.
export function cloudGeometry(seed = 1, color = 0xffffff) {
  let r = seed * 9301 + 49297;
  const rand = () => {
    r = (r * 9301 + 49297) % 233280;
    return r / 233280;
  };
  const parts = [];
  const n = 5 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1) - 0.5;
    const rad = 0.75 + rand() * 0.55 - Math.abs(t) * 0.6;
    parts.push(part(new THREE.SphereGeometry(1, 11, 8), color, {
      x: t * 3.2 + (rand() - 0.5) * 0.4,
      y: rand() * 0.45 + (0.5 - Math.abs(t)) * 0.5,
      z: (rand() - 0.5) * 0.9,
      s: rad,
      sy: rad * 0.82,
    }));
  }
  // flat-ish base
  parts.push(part(new THREE.SphereGeometry(1, 11, 6), color, { sx: 2.1, sy: 0.45, sz: 0.9, y: -0.15 }));
  return merge(parts);
}
