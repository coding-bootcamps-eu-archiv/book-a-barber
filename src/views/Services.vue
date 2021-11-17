<template>
  <article class="page-services">
    <h1>When do you want to be visited by us?</h1>
    <router-link class="button" to="/Appointments"
      >Up to looking for a Termin</router-link
    >
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Beschreibung</th>
          <th>Dauer</th>
          <th>Preis</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service">
          <td>{{ service.title }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.duration }}</td>
          <td>{{ service.price }}</td>
          <td>{{ service.avatar }}</td>
          <td>
            <button>Auswählen</button>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        id: 1,
        title: "Haircut",
        avatar: "img/xxxxx.jpg",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "40",
      },
      {
        id: 2,
        title: "",
        avatar: "img/xxxxx.jpg",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "40",
      },
      {
        id: 3,
        title: "Haircut",
        avatar: "img/xxxxx.jpg",
        description:
          "jQuery (auch jQuery Core) ist eine freie JavaScript-Bibliothek, die Funktionen zur DOM-Navigation und -Manipulation zur Verfügung stellt.",
        duration: "20min",
        price: "40",
      },
    ],
  }),
};
</script>

<style>
.page-services {
  background-color: lightslategray;
}

.button {
  padding: 0.25rem;
  border: 2px solid black;
  border-radius: 0.25rem;
  background-color: darkgoldenrod;
}

.button:active {
  background-color: yellow;
}
</style>
