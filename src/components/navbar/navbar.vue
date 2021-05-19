<template>
  <nav>
    <div class="farLeft">
      <router-link to="/">Oregano</router-link>
    </div>
    <div class="farRight">
      <router-link to="/drawing">Draw</router-link>
      <button @click="amLost()">hep im l0st</button>
    </div>
  </nav>
</template>

<script>
import './navbar.scss';

export default {
  name: "Navbar",
  methods: {
    amLost() {
      alert("samesies");
    }
  }
}
</script>

<style scoped>

</style>
