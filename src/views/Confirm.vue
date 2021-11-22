<template>
  <h1 class="thanks-text">Thanks for the Booking ✅</h1>
  <section class="confirm-text"></section>

  <h2>Bestellübersicht</h2>
  <article class="order">
    <section class="data-customer">
      <h3>Kunde:</h3>
      <p>Vorname:</p>
      <p>Nachname:</p>
      <p>E-Mail:</p>
      <p>Strasse, HsNr.:</p>
      <p>PLZ:</p>
      <p>Stadt:</p>
      <p>Handy:</p>
    </section>
    <section class="data-payment">
      <h3>Datum:</h3>
      <p>Tag:</p>
      <p>Uhrzeit:</p>
      <h3>Bezahlung:</h3>
      <p>Methode:</p>
      <p>Summe:</p>
    </section>
  </article>
  <router-link to="/">Back to Start</router-link>
</template>

<style>
.thanks-text {
  padding: 1rem;
  border-radius: 0.5rem;
  border-style: none;
  color: brown;
  background-color: burlywood;
}

.order {
  margin: auto;
  border: 2px solid grey;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 80vw;
  text-align: left;
  /* height: 30vw; */
}

.data-customer {
  background-color: darkgray;
  width: 100%;
  padding-left: 1rem;
}

.data-payment {
  background-color: aqua;
  width: 100%;
  padding-left: 1rem;
}
@media screen and (min-width: 800px) {
  .order {
    flex-direction: row;
    justify-content: space-around;
  }
  .data-customer {
    width: 50%;
  }

  .data-payment {
    width: 50%;
  }
}
</style>
