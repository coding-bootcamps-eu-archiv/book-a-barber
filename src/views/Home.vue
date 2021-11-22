<template>
  <PlzHannover v-for="plz in plzs" v-bind="plz" :key="plz" />
  <div class="primary-feature">
    <article class="first-page">
      <br />
      <h1>Do you need me? <br />Tell me where</h1>
      <label for="PLZ"></label>
      <input
        placeholder="PLZ"
        type="number"
        id="PLZ"
        v-model="postcode"
        @keypress.enter="findPlz()"
      />

      <router-link to="/Services"> </router-link
      ><button @click="findPlz()">Search</button>
    </article>
  </div>
</template>

<script>
import PlzHannover from "@/components/PlzHannover.js";

export default {
  name: "Home",
  data() {
    return {
      postcode: "",
    };
  },

  methods: {
    findPlz() {
      console.log(PlzHannover);
      console.log(this.postcode);

      if (PlzHannover.includes(this.postcode)) {
        this.$router.push("/Services");
      } else {
        alert("Sorry, this is not Hannover");
      }
    },
  },
};
</script>

<style>
.primary-feature {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  min-width: 70vw;
  min-height: 60vw;
}
.first-page {
  color: white;
}
</style>
