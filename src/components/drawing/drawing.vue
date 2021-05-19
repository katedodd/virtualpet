<template>
  <div id="canvas">

  </div>
</template>

<script>
import "./drawing.css";

export default {
  name: "drawing",
  methods: {

  },
  data() {
    return {
      message: "Hello, child!",
      vueCanvas: null,
    }
  },
  mounted() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    this.vueCanvas = ctx;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.fillRect(100, 100, 300, 300);
    ctx.strokeStyle = "red";
    ctx.strokeRect(100, 100, 300, 300);
  }
}
</script>

<style scoped>

</style>
