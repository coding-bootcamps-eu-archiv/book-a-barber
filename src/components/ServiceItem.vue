<template>
  <article class="shipping-layout">
    <section class="img-wrapper">
      <figure class="frame-image">
        <aside class="shipping-stamp">Flying Barber</aside>
        <img :src="require(`../images/${avatar}.jpeg`)" />
      </figure>
    </section>
    <section class="description">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </section>
    <section class="box-shopping">
      <label class="price">Preis: € {{ price }} </label>
      <label class="duration">Dauer: {{ duration }} </label>
      <button class="adding">Hinzufügen</button>
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
};
</script>

<style></style>
