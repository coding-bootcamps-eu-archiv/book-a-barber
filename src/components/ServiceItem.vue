<template>
  <article class="shipping-layout">
    <section class="img-wrapper">
      <figure class="frame-image">
        <aside class="shipping-stamp">Flying Barber</aside>
        <img :src="require(`../images/${avatar}.jpeg`)" />
      </figure>
    </section>
    <section class="description">
      <h2 id="title">{{ title }}</h2>
      <p>{{ description }}</p>
    </section>
    <section class="box-shopping">
      <label id="servicePrice" class="price">Preis: € {{ price }} </label>
      <label class="duration">Dauer: {{ duration }} </label>
      <button
        id="btnToSaveToLocalStorageService"
        @click="addToLocalStorage(id)"
        class="adding"
      >
        Hinzufügen
      </button>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      Type: String,
    },
    description: {
      Type: String,
    },
    price: {
      Type: String,
    },
    duration: {
      Type: String,
    },
    avatar: {
      Type: String,
    },
  },
  methods: {
    addToLocalStorage() {
      const serviceTitle = document.getElementById("title");
      const servicePrice = document.getElementById("servicePrice");

      const serviceName = serviceTitle.value;
      const sumPayment = servicePrice.value;

      localStorage.setItem("serviceName", serviceName);
      localStorage.setItem("sumPayment", sumPayment);
    },
  },
};
</script>

<style></style>
