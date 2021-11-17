<template>
  <section>
    <article>
      <h1>Termin auswählen</h1>
      <ul>
        <li class="days">Montag</li>
        <li class="days">Dienstag</li>
        <li class="days">Mittwoch</li>
        <li class="days">Donnerstag</li>
        <li class="days">Freitag</li>
        <li class="days">Samstag</li>
        <li class="days">Sonntag</li>
        <li
          class="appointments"
          v-for="appointment in availableAppointments"
          :key="appointment"
        >
          {{ appointment.monday }}
          {{ appointment.thuesday }}
          {{ appointment.wednesday }}
        </li>
      </ul>

      <router-link to="/Payment"
        ><button class="button-next-page">
          Auswahl bestätigen
        </button></router-link
      >
    </article>
  </section>
</template>

<script>
export default {
  data: () => ({
    availableAppointments: [
      { monday: ["10:00", "11.00"] },
      { thuesday: [10.0, 12.0, 13.0, 14.0, 17.0] },
      { wednesday: [9.0, 12.0, 15.0, 16.0, 18.0] },
    ],
  }),
};
</script>

<style>
.button-next-page {
  position: absolute;
  bottom: 2rem;
}

.days {
  list-style: none;
  display: inline-block;
}

.appointments {
  list-style: none;
}
</style>
