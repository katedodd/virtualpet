<template>
  <div>
    <div>Welcome, {{ currentUser.firstName }}!</div>
    <img :src="nepoetsImage" style="width: 100px"/>
    <div>this is {{ testNepoet.name }}</div>
    <div>it is {{ testNepoet.hunger }} not-hungers</div>
    <div>last feeding: {{ testNepoet.lastFedDateDisplay() }} at {{ testNepoet.lastFedTimeDisplay() }}</div>
    <button type="submit" @click="feedNepoet(testNepoet)">gib food</button>
  </div>
</template>

<script>

import {Nepoet} from '../models/nepoet';
import {Food} from '../models/food';
import {User} from '../models/user';
import {imagesNepoets} from '../variables';

export default {
  name: "TestPage",
  computed: {
    nepoetsImage: function() {
      let mood = this.testNepoet.assessMood();
      let color = this.testNepoet.color;
      let species = this.testNepoet.species;
      return this.images.find(element => element.includes(mood + color + species));
    }
  },
  methods: {
    feedNepoet(nepoet) {
      console.log("mmmm potatoes");
      let potato = new Food(
          "potat",
          42,
          12
      );
      if (this.currentUser.money > potato.price)
        nepoet.feed(potato);
      else
        alert("ya too poor, " + this.currentUser.firstName);
      this.currentUser.money -= potato.price;
    },
  },
  data() {
    let currentUser = new User(
        "samantha",
        "patrick",
        "12/31/2031",
        50
    );

    let testNepoet = new Nepoet(
        "felix",
        "bocky",
        "12",
        "blue",
        "50",
        50,
        new Date(),
        ""
    )

    return {
      testNepoet,
      currentUser,
      images: imagesNepoets
    }
  }
}
</script>

<style scoped>

* {
  position: relative;
  /*display: flex;*/
  top: 25px;
}

</style>
