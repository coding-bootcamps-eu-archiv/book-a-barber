<template>
  <h1 class="thanks-text">Thanks for the Booking ✅</h1>

  <h2>Bestellübersicht</h2>
  <article class="order">
    <section class="data-customer">
      <h3>Kunde:</h3>
      <!--<p>Vorname: {{ data.adress.surname }}</p>-->
      <p>Vorname: {{ this.surname }}</p>
      <p>Nachname: {{ this.lastname }}</p>
      <p>E-Mail: {{ bookingdatas.data.adress.email }}</p>
      <p>Strasse, HsNr.: {{ bookingdatas.data.adress.street }}</p>
      <p>PLZ: {{ bookingdatas.data.adress.plz }}</p>
      <p>Stadt: {{ bookingdatas.data.adress.city }}</p>
      <p>Handy: {{ bookingdatas.data.adress.phone }}</p>
    </section>
    <section class="data-payment">
      <h3>Datum:</h3>
      <p>Tag: {{ bookingdatas.data.date.day }}</p>
      <p>Uhrzeit: {{ bookingdatas.data.date.time }}</p>
      <h3>Bezahlung:</h3>
      <p>Methode: {{ bookingdatas.data.payment.method }}</p>
      <p>Summe: {{ bookingdatas.data.payment.sum }}</p>
    </section>
  </article>
  <router-link to="/">Back to Start</router-link>
</template>

<script>
import bookings from "@/components/booking.json";
export default {
  data() {
    return {
      bookingdatas: bookings,
      surname: "",
      lastname: "",
    };
  },
  methods: {
    readFromLocalStorage() {
      this.surname = localStorage.getItem("surname");
      this.lastname = localStorage.getItem("lastname");

      console.log("surnameauslocalStorage", this.surname);
    },
  },
  created() {
    this.readFromLocalStorage();
  },
};
</script>

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
