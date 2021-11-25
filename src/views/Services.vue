<template>
  <article class="page-services">
    <h1>Please choose one from our services!</h1>
  </article>

  <main class="services-layout">
    <ServiceItem
      v-for="service in barberServices"
      :key="service"
      :service="service"
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
  --buying-area-bg-color: lightslategray;
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

.services-layout {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  background-color: transparent;
}

.shipping-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: snow;
  width: 50vw;

  border-radius: 1rem;
  margin: 1.5rem;
}

@media screen and (min-width: 800px) {
  .services-layout {
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .shipping-layout {
    width: 30vw;
    padding: 0;
  }
  .shipping-layout + .shipping-layout {
    margin: 1rem;
  }
}
.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vw;
}
@media screen and (min-width: 800px) {
  .img-wrapper {
    width: 30%;
    height: 30%;
    margin-top: 0;
  }
}

.frame-image {
  position: relative;
  margin: 0;
}

.shipping-stamp {
  font-size: 0.75rem;
  position: absolute;
  background-color: var(--header-color);
  border-radius: 0.2rem;
  opacity: 0.4;
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
  height: 20vw;
}
.box-shopping {
  width: 90%;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  background-color: lightgrey;
  border-radius: 0.5rem;
  height: 12vh;
  display: grid;
  padding: 1rem;
  grid-template-areas:
    "price duration"
    "btn-buy btn-buy";
  gap: 1rem;
}
.price {
  grid-area: price;
  color: black;
  background-color: snow;
  border-radius: 0.25rem;
  width: 100%;
}
.duration {
  grid-area: duration;
  color: black;
  background-color: snow;
  border-radius: 0.25rem;
  width: 100%;
}
.adding {
  grid-area: btn-buy;
  color: white;
  background-color: blue;
  border-radius: 0.25rem;
}

/* Button to the next episode */
.button {
  padding: 0.25rem;
  border: 2px solid var(--border-color);
  border-radius: 0.25rem;
  background-color: var(--body-background-color);
  margin-bottom: 5rem;
}
</style>
