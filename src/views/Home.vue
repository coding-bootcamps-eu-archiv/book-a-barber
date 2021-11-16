<template>
  <article class="first-page">
    <h1>Do you need me? Tell me where</h1>
    <label for="PLZ">PLZ</label>
    <input type="text" id="PLZ" />
    <button>Search</button>
    <router-link to="/Services">Services</router-link>
  </article>
</template>

<style>
.first-page {
  background-color: lightblue;
}

button {
}
</style>
