<template>
  <article>
    <br />
    <h1>I will give Shine to you, give me your Money</h1>

    <article class="customer">
      <section class="customer-datas">
        <table>
          <tr>
            <th>ICH BUCHE ALS:</th>
          </tr>
          <tr>
            <td>
              <label for="surname"
                ><input type="text" id="surname" placeholder="Vorname"
              /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label for="lastname"
                ><input type="text" id="lastname" placeholder="Nachname"
              /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label for="email"
                ><input type="email" id="email" placeholder="E-Mail"
              /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label for="streetnr"
                ><input
                  type="text"
                  id="streetnr"
                  placeholder="Straße und Hausnr."
              /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label for="plz"
                ><input type="text" id="plz" placeholder="PLZ"
              /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label for="city"
                ><input type="text" id="city" placeholder="Stadt"
              /></label>
            </td>
          </tr>
          <tr>
            <td>
              <label for="phone"
                ><input type="text" id="phone" placeholder="Telefonnr."
              /></label>
            </td>
          </tr>
        </table>
      </section>
      <section class="customer-payment">
        <table>
          <tr>
            <th>ZUSAMMENFASSUNG</th>
          </tr>
        </table>
        <div class="infoshieldPayment">
          <p>{{ this.serviceName }}</p>
          <p>Eur: {{ this.sumPayment }}</p>
        </div>

        <p>Derzeit nehmen wir nur Barzahlungen am Ort an</p>
      </section>
    </article>
    <button id="btnToSaveToLocalStorage" @click="addToLocalStorage">
      Kundendaten speichern
    </button>
    <br />
    <router-link to="/Confirm">
      <button class="btnToPay">Up to pay!!!</button></router-link
    >
  </article>
</template>

<script>
import bookings from "@/components/booking.json";
export default {
  data() {
    return {
      surname: "",
      serviceName: "",
      sumPayment: "",
      bookingdatas: bookings,
    };
  },

  methods: {
    readFromLocalStorage() {
      this.serviceName = localStorage.getItem("serviceName");
      this.sumPayment = localStorage.getItem("sumPayment");
    },
    addToLocalStorage() {
      const inpSurname = document.getElementById("surname");
      const inpLastname = document.getElementById("lastname");
      const inpEmail = document.getElementById("email");
      const inpStreet = document.getElementById("streetnr");
      const inpPlz = document.getElementById("plz");
      const inpCity = document.getElementById("city");
      const inpPhone = document.getElementById("phone");

      const surname = inpSurname.value;
      const lastname = inpLastname.value;
      const emailcost = inpEmail.value;
      const street = inpStreet.value;
      const plz = inpPlz.value;
      const city = inpCity.value;
      const phone = inpPhone.value;

      /* Transfer the Data as an Object
        const userpaymentInformation = {
       }*/

      localStorage.setItem("surname", surname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("emailcost", emailcost);
      localStorage.setItem("street", street);
      localStorage.setItem("plz", plz);
      localStorage.setItem("city", city);
      localStorage.setItem("phone", phone);
    },
  },
  created() {
    this.readFromLocalStorage();
  },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  --header-color: lightslategray;
  --text-color: black;
  --border-color: black;
  --body-background-color: darkgoldenrod;
  --card-background-color: blanchedalmond;
  --buying-area-bg-color: white;
  --nav-color: rgb(189, 135, 97);
}

.customer {
  margin: auto;
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.customer-datas {
  background-color: var(--btn-hover-clr);
  padding: 3rem;
  margin: 5rem auto 2.5rem auto;
  opacity: 90%;
  max-width: 240px;
  border-radius: 10%;
}

.customer-payment {
  background-color: var(--btn-hover-clr);
  padding: 3rem;
  margin: 2.5rem auto 5rem auto;
  opacity: 90%;
  max-width: 240px;
  border-radius: 10%;
}

.infoshieldPayment {
  display: flex;
  justify-content: space-between;
}

input {
  border-radius: 25px;
  padding-left: 0.3rem;
}

@media screen and (min-width: 600px) {
  .customer {
    margin: auto;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .customer-datas {
    background-color: var(--btn-hover-clr);
    padding: 3rem;
    margin: 5rem 2.5rem 5rem 5rem;
    opacity: 90%;
    max-width: 250px;
    border-radius: 10%;
  }

  .customer-payment {
    background-color: var(--btn-hover-clr);
    padding: 3rem;
    margin: 5rem 5rem 5rem 2.5rem;
    opacity: 90%;
    max-width: 250px;
    border-radius: 10%;
    justify-self: center;
  }
}

#btnToSaveToLocalStorage {
  background: var(--btn-background-clr);
  border: var(--btn-border);
  padding: var(--btn-padding);
  margin: 0 auto;
  border-radius: 25px;
}

#btnToSaveToLocalStorage:hover {
  background-color: var(--btn-hover-clr);
}

.btnToPay {
  background: var(--btn-background-clr);
  border: var(--btn-border);
  padding: var(--btn-padding);
  margin: 1rem auto;
  border-radius: 25px;
}

.btnToPay:hover {
  background-color: var(--btn-hover-clr);
}
</style>
