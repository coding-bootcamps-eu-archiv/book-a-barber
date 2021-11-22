<template>
  <article class="confirm-page">
    <section class="confirm-text">
      <p>You have received an order confirmation by email ✅</p>
    </section>
    <section>
      <p>
        <u class="ol-text"><b>Bestellübersicht:</b></u>
      </p>
      <section class="order">
        <section class="adressdaten">
          <p><u>Adresse:</u></p>
          <p>Straße</p>
          <p>PLZ / Stadt</p>
          <p>Datum</p>
          <p>Dein Termin bei "Friseurname"</p>
        </section>
        <section>
          <p>
            <em>Haare und Bart schneiden</em>
          </p>
          <p>- Preis: 43€</p>
        </section>
      </section>
    </section>
  </article>
  <router-link to="/">Back to Start</router-link>
</template>

<style>
.ol-text {
}

.confirm-page {
  background-color: beige;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
}

.confirm-text {
  border: 2px solid grey;
  padding: 20px;
  width: 40vw;
  height: 20vw;
}
.order {
  border: 2px solid grey;
  padding: 20px;
  display: flex;
  width: 60vw;
  text-align: left;
  /* height: 30vw; */
}
@media screen and (min-width: 800px) {
  .confirm-page {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
