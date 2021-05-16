<template>
  <nav>
    <img src="../../assets/nepoets/logop.png"/>
    <div class="farRight">
      <button @click="amLost()">hep im l0st</button>
    </div>
  </nav>
</template>

<script>
import './navbar.css';

export default {
  name: "navbar",
  methods: {
    amLost() {
      alert("samesies");
    }
  }
}
</script>

<style scoped>

</style>
