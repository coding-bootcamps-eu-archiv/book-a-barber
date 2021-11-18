<template>
  <div class="primary-feature">
    <article class="first-page">
      <br />
      <h1>Do you need me? <br />Tell me where</h1>
      <label for="PLZ"></label>
      <input placeholder="PLZ" type="text" id="PLZ" />

      <router-link to="/Services"> <button>Search</button></router-link>
    </article>
  </div>
</template>

<style>
.primary-feature {
  background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  max-width: 70vw;
  height: 50vw;
}
.first-page {
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
