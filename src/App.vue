<template>
  <div id="app">
    <navbar></navbar>
    <TestPage></TestPage>
  </div>
</template>

<script>
import {msg} from './variables.js';
import TestPage from "./pages/TestPage";
import navbar from "./components/navbar/navbar";

export default {
  name: 'App',
  components: {
    navbar,
    TestPage
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.overlay {
  width: 99vw;
  height: 99vh;
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  z-index: 10;
  top: 0;
}

.blurBackground {
  animation: blur 2s ease-in forwards;
}

body {
  background-color: cornflowerblue;
}

@keyframes blur {
  0% { background-color: rgba(255, 255, 255, 0); }
  100% { background-color: rgba(255, 255, 255, 0.9); }
}

</style>
