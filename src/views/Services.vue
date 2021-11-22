<template>
  <article class="page-services">
    <h1>Please choose from our services!</h1>
  </article>

  <main class="services-layout">
    <article class="shipping-layout" v-for="service in services" :key="service">
      <aside class="shipping-stamp">Flying Barber</aside>
      <section class="goods-info">
        <figure>
          <img :src="require(`../images/${service.avatar}.jpeg`)" />
        </figure>
      </section>
      <section class="description">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </section>
      <section class="box-shopping">
        <label class="price">Preis: €{{ service.price }}</label>
        <label class="duration">Dauer: {{ service.duration }}</label>
        <button class="adding">Hinzufügen</button>
      </section>
    </article>
  </main>
  <router-link class="button" to="/Appointments"
    >Up to looking for a Termin</router-link
  >
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        id: 1,
        title: "Haircut",
        avatar: "pic-hair",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "35",
      },
      {
        id: 2,
        title: "Barber",
        avatar: "pic-barber",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "40",
      },
      {
        id: 3,
        title: "All in One",
        avatar: "pic-all-in-one",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "45min",
        price: "65",
      },
      {
        id: 4,
        title: "Tell my Name",
        avatar: "pic-all-in-one",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "45min",
        price: "65",
      },
    ],
  }),
};
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
  --buying-area-bg-color: snow;
}
/* "Header" with Sticky-Styling */
.page-services {
  background-color: var(--header-color);
  padding: 1rem 0;
  opacity: 0.75;
  position: sticky;
  top: 0;
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
@media screen and (min-width: 800px) {
  .services-layout {
    justify-content: space-around;
    flex-direction: row;
    flex-flow: wrap;
  }
}

.shipping-layout {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--card-background-color);
  width: 50vw;
  border-radius: 1rem;
  margin: 1.5rem;
}

.shipping-stamp {
  font-size: 0.75rem;
  position: relative;
  background-color: var(--buying-area-bg-color);
  border-radius: 0.2rem;
  opacity: 0.5;
  width: 12ch;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
  top: 3rem;
  left: 35vw;
}
figure {
  display: flex;
  justify-content: center;
}
img {
  width: 48vw;
  aspect-ratio: 1 / 1;
  display: block;
  border-radius: 0.5rem;
}
/* ::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #ffffff 3%, #ffffff00 50%);
} */

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
    "price button"
    "duration button";
}
.price {
  grid-area: price;
}
.duration {
  grid-area: duration;
}
.adding-buy {
  grid-area: button;
  padding: 2rem;
}
</style>
