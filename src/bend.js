// "Tiny planet" curved-world effect. Every world material gets its vertices
// pushed down (and a little sideways) by the square of their view depth, so
// the road rolls away over the horizon like a candy planet.

export const bendUniforms = {
  uBendY: { value: 0.0026 },
  uBendX: { value: 0.0 },
};

export const BEND_PARS = /* glsl */ `
uniform float uBendY;
uniform float uBendX;
`;

// Expects a view-space `vec4 mvPosition` in scope.
export const BEND_APPLY = /* glsl */ `
{
  float bendZ = min( mvPosition.z, 0.0 );
  mvPosition.y -= uBendY * bendZ * bendZ;
  mvPosition.x += uBendX * bendZ * bendZ;
}
`;

// Patch a built-in material. `extra` may tweak the shader further and should
// carry a `key` so three.js compiles a separate program for it.
export function bendify(material, extra) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uBendY = bendUniforms.uBendY;
    shader.uniforms.uBendX = bendUniforms.uBendX;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + BEND_PARS)
      .replace(
        '#include <project_vertex>',
        '#include <project_vertex>\n' + BEND_APPLY + '\ngl_Position = projectionMatrix * mvPosition;'
      );
    if (extra) extra(shader);
  };
  const key = 'bend-' + (extra && extra.key ? extra.key : 'plain');
  material.customProgramCacheKey = () => key;
  return material;
}
