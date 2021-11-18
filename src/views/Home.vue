<template>
  <div class="primary-feature">
    <article class="first-page">
      <h1>Do you need me? Tell me where</h1>
      <label for="PLZ"></label>
      <input placeholder="PLZ" type="text" id="PLZ" />
      <button>Search</button>
      <router-link to="/Services" class="pfeil"> &#10230;</router-link>
    </article>
  </div>
</template>

<style>
.pfeil {
  font-size: 30px;
  color: white;
  padding: 10px;
}

.primary-feature {
  background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
  background-repeat: no-repeat;
}
.first-page {
  color: white;
  width: 100%;
  height: 600px;
}
</style>
