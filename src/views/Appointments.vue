<template>
  <section>
    <article>
      <h1>Termin auswählen</h1>
      <p>{{ appointments }}</p>
      <router-link to="/Payment"
        ><button class="button-next-page">
          Auswahl bestätigen
        </button></router-link
      >
    </article>
  </section>
</template>

<script>
import appointments from "@/components/appointments.json";
export default {
  data() {
    return {
      appointments: appointments,
    };
  },
  async created() {
    console.log(this.appointments);
  },
};
</script>

<style>
html {
<<<<<<< HEAD
=======
  font-family: "Courier New", Courier, monospace;
>>>>>>> cde8949bf7904a0b6fd4b27db1629deb1cf1c2f3
}

.button-next-page {
  position: absolute;
  bottom: 2rem;
}

.days {
  list-style: none;
  display: flexbox;
}

.appointments {
  list-style: none;
  display: grid;
  grid-template-columns: 14% 14% 14% 14%;
  grid-template-rows: auto;
}
</style>
