<template>
  <MultiStepHeader :step="5" />
  <h1 class="thanks-text">Terminbuchung erfolgreich ✅</h1>
  <main class="confirming">
    <fieldset>
      <legend><h2>Bestellübersicht</h2></legend>
      <article class="order">
        <section class="data-customer">
          <h3>Meine Daten:</h3>
          <!--<p>Vorname: {{ data.adress.surname }}</p>-->
          <p>Vorname: {{ this.surname }}</p>
          <p>Nachname: {{ this.lastname }}</p>
          <p>E-Mail: {{ this.emailcost }}</p>
          <p>Strasse, HsNr.: {{ this.street }}</p>
          <p>PLZ: {{ this.plz }}</p>
          <p>Stadt: {{ this.city }}</p>
          <p>Handy: {{ this.phone }}</p>
        </section>
        <section class="data-payment">
          <h3>Leistung:</h3>
          <p>Bezeichnung: {{ this.serviceName }}</p>
          <h3>Datum:</h3>
          <p>Tag: {{ this.appointmentDay }}</p>
          <p>Uhrzeit: {{ this.appointmentTime }}</p>
          <h3>Bezahlung:</h3>
          <p>Summe: {{ this.sumPayment }}</p>
        </section>
      </article>
    </fieldset>
  </main>

  <router-link to="/"
    ><button class="backHomeBtn" @click="clearDatasOfLocalStorage()">
      Zurück zur Startseite
    </button></router-link
  >
</template>

<script>
import bookings from "@/components/booking.json";
import MultiStepHeader from "@/components/MultiStepHeader.vue";
export default {
  data() {
    return {
      bookingdatas: bookings,
      surname: "",
      lastname: "",
      email: "",
      streetnr: "",
      plz: "",
      city: "",
      phone: "",
    };
  },
  components: {
    MultiStepHeader,
  },
  methods: {
    readFromLocalStorage() {
      this.surname = localStorage.getItem("surname");
      this.lastname = localStorage.getItem("lastname");
      this.emailcost = localStorage.getItem("emailcost");
      this.street = localStorage.getItem("street");
      this.plz = localStorage.getItem("plz");
      this.city = localStorage.getItem("city");
      this.phone = localStorage.getItem("phone");

      /* Datas from Enrico*/
      this.appointmentDay = localStorage.getItem("appointmentDay");
      this.appointmentTime = localStorage.getItem("appointmentTime");

      /* Datas from Services*/
      this.serviceName = localStorage.getItem("serviceName");
      this.sumPayment = localStorage.getItem("sumPayment");
    },
    clearDatasOfLocalStorage() {
      localStorage.clear();
    },
  },

  created() {
    this.readFromLocalStorage();
  },
};
</script>

<style>
.confirming {
  display: flex;
  justify-content: center;
}
.thanks-text {
  padding: 1rem;
  border-radius: 0.5rem;
  border-style: none;
  color: brown;
  background-color: burlywood;
}

fieldset {
  margin: auto;
  border: 2px solid grey;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 80vw;
  text-align: left;
}

.data-customer {
  background-color: var(--btn-hover-clr);
  padding: 3rem;
  margin: 2rem auto 1rem auto;
  opacity: 90%;
  max-width: 300px;
  border-radius: 10%;
}

.data-payment {
  background-color: var(--btn-hover-clr);
  padding: 3rem;
  margin: 1rem auto 2rem auto;
  opacity: 90%;
  max-width: 300px;
  border-radius: 10%;
}

.backHomeBtn {
  background: var(--btn-background-clr);
  border: var(--btn-border);
  padding: var(--btn-padding);
  margin: 0 auto;
  border-radius: 25px;
}

.backHomeBtn:hover {
  background-color: var(--btn-hover-clr);
}

@media screen and (min-width: 800px) {
  .order {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0;
  }
  .data-customer {
    width: 50%;
    margin: 2rem 1rem 2rem 2rem;
  }

  .data-payment {
    width: 50%;
    margin: 2rem 2rem 2rem 1rem;
  }
}
</style>
