<template>
  <PlzHannover v-for="plz in plzs" v-bind="plz" :key="plz" />

  <div class="primary-feature">
    <article class="first-page">
      <h1>Do you need me? <br />Tell me where</h1>
      <section class="plzSearch">
        <label for="PLZ"></label>
        <input
          placeholder="Your postcode"
          type="text"
          id="PLZ"
          v-model="postcode"
          @keypress.enter="findPlz()"
        />

        <router-link to="/Services"> </router-link
        ><button @click="findPlz()">Search</button>
        <div class="overlay" v-if="validation">
          <div class="validationTxt">
            {{ validation }}
            <button class="validBtn" @click="this.validation = false">
              Okay
            </button>
          </div>
        </div>
      </section>
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
      validation: "",
    };
  },

  methods: {
    findPlz() {
      const plzAsNumber = Number.parseInt(this.postcode);
      if (PlzHannover.includes(plzAsNumber)) {
        this.$router.push("/Services");
      } else {
        //alert("Sorry, this is not Hannover");
        this.validation = "Sorry, this is not Hannover";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0;
}

.overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.validationTxt {
  position: absolute;
  display: flex;
  color: red;
  font: bold;
  background-color: white;
  border: 5px solid black;
  width: 300px;
  height: 200px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.validBtn {
  display: flex;
  position: absolute;
  align-self: flex-end;
}
</style>
