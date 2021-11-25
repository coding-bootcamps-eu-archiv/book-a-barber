<template>
  <article class="shipping-layout">
    <section class="img-wrapper">
      <figure class="frame-image">
        <aside class="shipping-stamp">Flying Barber</aside>
        <img :src="require(`../images/${service.avatar}.jpeg`)" />
      </figure>
    </section>
    <section class="description">
      <h2 id="title">{{ service.title }}</h2>
      <p>{{ service.description }}</p>
    </section>
    <section class="box-shopping">
      <label id="servicePrice" class="price"
        >Preis: € {{ service.price }}
      </label>
      <label class="duration">Dauer: {{ service.duration }} </label>
      <button
        id="btnToSaveToLocalStorageService"
        @click="addToLocalStorage(service)"
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
    service: {
      Type: Object,
    },
  },
  methods: {
    addToLocalStorage(service) {
      const serviceName = service.title;
      const sumPayment = service.price;

      localStorage.setItem("serviceName", serviceName);
      localStorage.setItem("sumPayment", sumPayment);
    },
  },
};
</script>

<style></style>
