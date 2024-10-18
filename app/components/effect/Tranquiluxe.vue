<script setup lang="ts">
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import vert from "./tranquiluxe-vert.glsl";
import frag from "./tranquiluxe-frag.glsl";

const ctnDom = useTemplateRef("ctnDom");

onMounted(() => {
  if (!ctnDom.value) {
    return;
  }

  const ctn = ctnDom.value;
  const renderer = new Renderer();
  const gl = renderer.gl;
  gl.clearColor(1, 1, 1, 1);

  function resize() {
    const scale = 1;
    // camera.perspective({
    //   aspect: gl.canvas.width / gl.canvas.height,
    // });
    renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
  }
  window.addEventListener("resize", resize, false);
  resize();

  const geometry = new Triangle(gl);

  const program = new Program(gl, {
    vertex: vert,
    fragment: frag,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new Color(0.3, 0.2, 0.5) },
      uResolution: {
        value: new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        ),
      },
    },
  });

  const mesh = new Mesh(gl, { geometry, program });

  let animateId: number;

  animateId = requestAnimationFrame(update);

  function update(t: number) {
    animateId = requestAnimationFrame(update);

    program.uniforms.uTime.value = t * 0.001;

    // Don't need a camera if camera uniforms aren't required
    renderer.render({ scene: mesh });
  }

  ctn.appendChild(gl.canvas);
  return () => {
    cancelAnimationFrame(animateId);
    window.removeEventListener("resize", resize);
    ctn.removeChild(gl.canvas);
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  };
});
</script>
<template>
  <div
    ref="ctnDom"
    style="
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    "
  />
</template>
