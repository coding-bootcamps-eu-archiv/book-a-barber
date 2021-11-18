<template>
  <main class="page-services">
    <h1>When do you want to be visited by us?</h1>
    <router-link class="button" to="/Appointments"
      >Up to looking for a Termin</router-link
    >
  </main>
  <hr />
  <main class="services-layout">
    <article class="shipping-layout" v-for="service in services" :key="service">
      <section class="goods-info">
        <figure>
          <aside class="shipping">Free Shipping</aside>
          <img src="@/images/pic-hair.jpeg" alt="pic-hair" />
        </figure>

        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </section>
      <section class="box-shopping">
        <label class="price">Preis: €{{ service.price }}</label>

        <div class="coloring">
          <label>Color:</label>
          <button class="btn-circle-1"></button>
          <button class="btn-circle-2"></button>
        </div>
        <button class="adding">Hinzufügen</button>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        id: 1,
        title: "Haircut",
        avatar: "@/images/pic-hair.jpg",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "35",
      },
      {
        id: 2,
        title: "Barber",
        avatar: "@/images/pic-barber.jpg",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "40",
      },
      {
        id: 3,
        title: "All in One",
        avatar: "@/images//pic-all-in-one.jpg",
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
.page-services {
  background-color: lightslategray;
}

.button {
  padding: 0.25rem;
  border: 2px solid black;
  border-radius: 0.25rem;
  background-color: darkgoldenrod;
}

.button:active {
  background-color: yellow;
}

.card {
  display: grid;
}

main {
  margin: 2rem;
}

@media screen and (min-width: 800px) {
  .services-layout {
    display: flex;
    justify-content: space-between;
  }
}
.shipping-layout {
  background-color: blanchedalmond;
  width: 30vw;
  border-radius: 1rem;
}

.shipping {
  position: relative;
  text-align: center;
  background-color: white;
  border-radius: 0.2rem;
  width: 30rem;
  opacity: 0.5;
  padding: 0.2rem;
  top: 1rem;
  right: 10rem;
}

img {
  width: 22vw;

  display: block;
  border-radius: 0.5rem;
}
.box-shopping {
  margin: 0.5rem;
  background-color: aliceblue;
  border-radius: 0.5rem;
  height: 8vh;
}
</style>
