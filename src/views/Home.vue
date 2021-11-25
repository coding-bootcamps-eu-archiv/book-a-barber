<template>
  <MultiStepHeader :step="1" />
  <PlzHannover />

  <div class="primaryFeature">
    <article class="firstPage">
      <h1>Dein Barbier <br />kommt zu dir!</h1>
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
        ><button class="searchBtn" @click="findPlz()">Search</button>
        <div class="overlay" v-if="validation">
          <div class="validationTxt">
            {{ validation }}
            <br />
            <div>
              <button class="validBtn" @click="this.validation = false">
                Okay
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import PlzHannover from "@/components/PlzHannover.js";
import MultiStepHeader from "@/components/MultiStepHeader.vue";

export default {
  name: "Home",
  data() {
    return {
      postcode: "",
      validation: "",
    };
  },
  components: {
    MultiStepHeader,
  },

  methods: {
    findPlz() {
      const plzAsNumber = Number.parseInt(this.postcode);
      if (PlzHannover.includes(plzAsNumber)) {
        this.$router.push("/Services");
      } else {
        this.validation =
          "Sorry, wir bieten unseren Service aktuell nur in Hannover an";
      }
    },
  },
};
</script>

<style>
.primaryFeature {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  width: 100%;
  min-width: 100vw;
  min-height: 60vw;
}
.firstPage {
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: relative;
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
  font-size: 1.5rem;
  width: 25rem;
  height: 20rem;
  padding: 1.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(40px);
  margin: auto;
  border-radius: 10%;
  flex-direction: column;
}

.validBtn {
  display: flex;
  position: relative;
  align-self: flex-end;
  justify-content: center;
  padding: 0.3rem 0.6rem;
  background: var(--btn-background-clr);
  border: var(--btn-border);
  border-radius: 25px;
  margin: 2rem;
}

.validBtn:hover {
  background-color: rgb(131, 131, 131);
}

h1 {
  width: 100%;
  justify-content: left;
}

.searchBtn {
  background: var(--btn-background-clr);
  border: var(--btn-border);
  border-radius: 25px;
}

@media screen and (max-width: 600px) {
  .primaryFeature {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
    background-repeat: no-repeat;
    background-size: content;
    margin: auto;
    min-width: 70vw;
    min-height: 60vw;
  }

  .validationTxt {
    position: absolute;
    display: flex;
    width: 60vw;
    height: 40vw;
    padding: 1.5rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(40px);
    margin: auto;
    border-radius: 10%;
    flex-direction: column;
  }

  .validBtn {
    display: flex;
    position: relative;
    align-self: flex-end;
    justify-content: center;
    padding: 0;
    background: var(--btn-background-clr);
    border: var(--btn-border);
    border-radius: 25px;
    margin: 0 0.5rem;
  }
}

@media screen and (max-width: 400px) {
  .primaryFeature {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
    background-repeat: no-repeat;
    background-size: content;
    margin: auto;
    min-width: 70vw;
    min-height: 60vw;
  }

  .validationTxt {
    position: absolute;
    display: flex;
    font-size: 1.3rem;
    width: 60vw;
    height: 80vw;
    padding: 1.5rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(40px);
    margin: auto;
    border-radius: 10%;
    flex-direction: column;
  }

  .validBtn {
    display: flex;
    position: relative;
    align-self: flex-end;
    justify-content: center;
    padding: 0;
    background: var(--btn-background-clr);
    border: var(--btn-border);
    border-radius: 25px;
    margin: 0 0.5rem;
  }
}
</style>
