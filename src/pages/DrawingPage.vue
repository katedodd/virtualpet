<template>
  <div>
    <h1>trying to be rad</h1>
    <img :src="testNepoet.img"/>
    <drawing></drawing>
  </div>
</template>

<script>
import drawing from "../components/drawing/drawing";
import {Nepoet} from "../models/nepoet";

export default {
  name: "DrawingPage",
  components: {
    drawing
  },
  data() {
    let testNepoet = new Nepoet(
        "felix",
        "bocky",
        "12",
        "blue",
        "50",
        50,
        new Date(),
        "" //TODO save blob from drawing component to this property
    );

    return {
      testNepoet
    }
  }
}
</script>

<style scoped>

</style>
