<template>
  <article class="page-services">
    <h1>Please choose from our services!</h1>
  </article>

  <main class="services-layout">
    <ServiceItem
      v-for="service in barberServices"
      :key="service"
      :title="service.title"
      :description="service.description"
      :duration="service.duration"
      :price="service.price"
      :avatar="service.avatar"
    />
  </main>
  <router-link class="button" to="/Appointments"
    >Up to looking for a Termin</router-link
  >
</template>

<script>
import ServiceItem from "@/components/ServiceItem.vue";
import data from "@/components/data.json";
export default {
  components: { ServiceItem },
  data: () => ({
    barberServices: data,
  }),
};
/*Methode() {
let totalPrice = {{ bookindata.payment.sum }} + 19% */
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  margin: 0;
  --header-color: lightslategray;
  --text-color: black;
  --border-color: black;
  --body-background-color: darkgoldenrod;
  --card-background-color: blanchedalmond;
  --buying-area-bg-color: white;
}
/* "Header" with Sticky-Styling */
.page-services {
  background-color: var(--header-color);
  padding: 1rem 0;
  opacity: 0.75;
  position: sticky;
  top: 0;
  z-index: 2;
}
/* Button to the next episode */
.button {
  padding: 0.25rem;
  border: 2px solid var(--border-color);
  border-radius: 0.25rem;
  background-color: var(--body-background-color);
}

.services-layout {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  background-color: var(--body-background-color);
}

.shipping-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--card-background-color);
  width: 50vw;
  border-radius: 1rem;
  margin: 1.5rem;
}
@media screen and (min-width: 800px) {
  .services-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .shipping-layout {
    width: 30vw;
  }
}
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48vw;
  height: 48vw;
}
.frame-image {
  position: relative;
  margin: 0;
}

.shipping-stamp {
  font-size: 0.75rem;
  position: absolute;
  background-color: var(--buying-area-bg-color);
  border-radius: 0.2rem;
  opacity: 0.5;
  width: 12ch;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
  top: 1rem;
  right: 1rem;
}
figure {
  display: flex;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: fill;
  display: block;
  border-radius: 0.5rem;
}
@media screen and (min-width: 800px) {
  img {
    width: 30vw;
    height: 30vw;
  }
}

.description {
  padding: 0 1rem;
  text-align: left;
}
.box-shopping {
  margin: 0.5rem;
  background-color: var(--buying-area-bg-color);
  border-radius: 0.5rem;
  height: 8vh;
  display: grid;
  grid-template-areas:
    "price btn-buy"
    "duration btn-buy";
}
.price {
  grid-area: price;
  background-color: blue;
}
.duration {
  grid-area: duration;
  background-color: yellow;
}
.adding {
  grid-area: btn-buy;

  background-color: red;
}
</style>
