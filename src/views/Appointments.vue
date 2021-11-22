<template>
  <section>
    <article>
      <h1>Termin auswählen</h1>
      <!-- Monday -->
      <table>
        <tr>
          <th class="days">Montag</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Montag'">{{ appointment.time }}</td>
        </tr>
      </table>
      <!-- Tuesday -->
      <table>
        <tr>
          <th class="days">Dienstag</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Dienstag'">{{ appointment.time }}</td>
        </tr>
      </table>
      <!-- Wednesday -->
      <table>
        <tr>
          <th class="days">Mittwoch</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Mittwoch'">{{ appointment.time }}</td>
        </tr>
      </table>
      <!-- Thursday -->
      <table>
        <tr>
          <th class="days">Donnerstag</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Donnerstag'">
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Friday -->
      <table>
        <tr>
          <th class="days">Freitag</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Freitag'">
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Saturday -->
      <table>
        <tr>
          <th class="days">Samstag</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Samstag'">
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Sunday -->
      <table>
        <tr>
          <th class="days">Sonntag</th>
        </tr>
        <tr v-for="appointment in appointments.appointments" :key="appointment">
          <td v-if="appointment.day === 'Sonntag'">
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <router-link to="/Payment"
        ><button class="button-next-page">
          Auswahl bestätigen
        </button></router-link
      >
    </article>
  </section>
</template>

<script>
import timeSlots from "@/components/appointments.json";

export default {
  data() {
    return {
      appointments: timeSlots,
    };
  },
};
</script>

<style>
.button-next-page {
  position: absolute;
  bottom: 2rem;
}

table {
  border-collapse: separate;
  border-spacing: 0.4rem;
  height: 14%;
  width: 14%;
}

.appointments {
  list-style: none;
}
</style>
