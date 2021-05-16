<template>
    <div class="flexbox">
        <div v-for="scruffy in scruffies" :key="scruffy">
            <img v-bind:src="scruffy" class="scruffyImage" @click="clickScruffy(this)" :id="scruffy">
        </div>
    </div>
</template>

<script>
import { imagesScruffies } from '../variables.js';

export default {
    name: "ScruffyDisplay",
    components: {

    },
    methods: {
        clickScruffy() {
            console.log()
            // this.setAttribute('id', 'isClicked');
            console.log(this);
            this.$el.childNodes[0].children[0].classList.add("scruffyImageClick");
            this.$el.childNodes[0].children[0].classList.remove("scruffyImage");
            this.$root.$el.childNodes[0].classList.add("blurBackground");
        }
    },
    data() {
    return {
      scruffies: imagesScruffies
    }
  }
}
</script>

<style>

.scruffyImage {
    position: relative;
    z-index: 100;
    left: 50%;
    animation: idle 1s infinite ease-in-out;
}

.scruffyImage:hover {
    animation: shake 0.2s infinite ease-out;
}

.scruffyImageClick {
    position: absolute;
    z-index: 100;
    left: 50%;
    animation: roll 2s ease-in-out forwards;
    animation-delay: 0.3s;
}

@keyframes idle {
    0% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
    100% { transform: scaleX(1); }
}

@keyframes shake {
    0% { transform: translate(0px, 0px); }
    30% { transform: translate(2px, 1px); }
    60% { transform: translate(1px, 2px); }
    100% { transform: translate(0px, 0px); }
}

@keyframes roll {
    0% { transform: none }
    20% { transform: rotate(-60deg) }
    30% { transform: rotate(0deg); left: 50%; }
    40%, 70%, 85% { transform: rotate(360deg); }
    55%, 80%, 90% { transform: rotate(-360deg); }
    100% { transform: rotate(360deg); left: 110%; }
}

</style>
