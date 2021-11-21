<template>
  <article>
    <h1>I will give Shine to you, give me your Money</h1>

    <article class="customer">
      <section class="customer-datas">
        <table>
          <tr>
            <th>ICH BUCHE ALS:</th>
          </tr>
          <td>
            <label for="surname"
              ><input type="text" id="surname" placeholder="Vorname"
            /></label>
            <label for="lastname"
              ><input type="text" id="lastname" placeholder="Nachname"
            /></label>
          </td>
          <tr>
            <td>
              <label for="email"
                ><input type="text" id="email" placeholder="E-Mail"
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
        <p v-for="bookingdata in bookingdatas.data" :key="bookingdata">
          {{ bookingdata.service.name }} {{ bookingdata.payment.sum }}
        </p>
      </section>
    </article>
    <hr />
    <router-link to="/Confirm">Up to pay!!!</router-link>
  </article>
</template>

<script>
import data from "@/components/booking.json";
export default {
  data() {
    return {
      bookingdatas: data,
    };
  },
};
console.log(data);
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
}

.customer {
  margin: auto;
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--body-background-color);
}

.customer-datas,
.customer-payment {
  background-color: var(--card-background-color);
  padding: 3rem;
  margin: 5rem;
}

@media screen and (min-width: 800px) {
  .customer {
    margin: auto;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .customer-data,
  .customer-payment {
    width: 38vw;
  }
}
</style>
