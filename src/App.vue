<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="content-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {msg} from './variables.js';
import Navbar from "./components/navbar/navbar";

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {

  },
  data() {
    return {
      message: msg,
    }
  }
}
</script>

<style>


</style>
