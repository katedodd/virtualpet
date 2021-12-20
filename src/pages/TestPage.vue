<template>
  <div>
    <div>Welcome, {{ currentUser.firstName }}!</div>
    <br/>
    <img :src="nepoetsImage" style="width: 100px"/>
    <br/>
    <br/>
    <div>this is {{ testNepoet.name }}</div>
    <div><strong>it is {{ testNepoet.hunger }} not-hungers</strong></div>
    <br/>
    <br/>
    <div>you can feed it, but only if you gots the cash money</div>
    <br/>
    <div>which you {{ determineMoney() }}</div>
    <br/>
    <div>because you gots {{ currentUser.money }} moneys</div>
    <br/>
    <div>get more money by drawing (top left)</div>
    <br/>
    <div>last feeding: {{ testNepoet.lastFedDateDisplay() }} at {{ testNepoet.lastFedTimeDisplay() }}</div>
    <br/>
    <button type="submit" @click="feedNepoet(testNepoet)">gib potato</button>
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
  mounted: function() {
    this.testNepoet.becomeHungry();
  },
  methods: {
    feedNepoet(nepoet) {
      if (this.currentUser.money > this.potato.price)
        nepoet.feed(this.potato);
      else
        alert("ya too poor, " + this.currentUser.firstName);
      this.currentUser.money -= this.potato.price;
    },
    determineMoney() {
      return this.currentUser.money > this.potato.price ? "do" : "don't";
    }
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
        42,
        new Date(),
        "",
        4
    )

    let potato = new Food(
        "potat",
        15,
        12
    );

    return {
      testNepoet,
      currentUser,
      images: imagesNepoets,
      potato
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
