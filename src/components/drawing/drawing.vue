<template>
  <div>
    <div>
      Line Width:
      <select v-model="selected" @change="setPen">
        <option value="2">Thin</option>
        <option value="5">Medium</option>
        <option value="10">Bold</option>
      </select>
    </div>
    <canvas
        @mousedown="startPainting"
        @mouseup="finishedPainting"
        @mousemove="draw"
        id="canvas"
        width="300"
        height="300"
    />
    <div>
      <button @click="saveCanvas">Save</button>
      <button @click="clearCanvas">Clear</button>
    </div>
  </div>
</template>

<script>
import "./drawing.css";

export default {
  name: "drawing",
  methods: {
    setPen() {
      console.log(this.selected);
      this.ctx.lineWidth = this.selected;
    },
    clearCanvas() {
      if(confirm("Clear the canvas and start over?"))
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    saveCanvas() {

      this.canvas.toBlob(function(blob) {
        let newImg = document.createElement('img'),
            url = URL.createObjectURL(blob);

        newImg.onload = function() {
          // no longer need to read the blob so it's revoked
          URL.revokeObjectURL(url);
        };

        newImg.src = url;
        document.body.appendChild(newImg);
      });
    },
    startPainting(e) {
      this.painting = true;
      this.draw(e);
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
    },
    draw(e) {
      if(!this.painting) return;
      this.ctx.lineCap = "round";

      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(e.offsetX, e.offsetY);
    },
  },
  data() {
    return {
      message: "Hello, child!",
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      lineSize: 5,
      selected: null,
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.vueCanvas = this.ctx;
    this.ctx.lineWidth = 5;
  }
}
</script>

<style scoped>

</style>
