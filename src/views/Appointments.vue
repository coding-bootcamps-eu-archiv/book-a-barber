<template>
  <MultiStepHeader :step="3" />
  <section>
    <h1>Termin auswählen</h1>
    <article class="class1">
      <table v-for="appointment in appointments" :key="appointment.day">
        <tr>
          <th class="days">{{ appointment.day }}</th>
        </tr>
        <tr
          @click="chosenAppointment(slot)"
          v-for="slot in appointment.slots"
          :key="slot"
        >
          <td>
            {{ slot.time }}
          </td>
        </tr>
      </table>
  <body>
    <section>
      <h1>Termin auswählen</h1>
      <article class="timeSlots">
        <table v-for="appointment in appointments" :key="appointment.day">
          <tr>
            <th class="days">{{ appointment.day }}</th>
          </tr>
          <tr
            @click="chosenAppointment(slot)"
            v-for="slot in appointment.slots"
            :key="slot"
          >
            <td>
              {{ slot.time }}
            </td>
          </tr>
        </table>
      </article>


      <article>
        <h3 id="chosen-appointment">
          Dein ausgewählter Termin: {{ this.value }}
        </h3>
        <p id="show-chosen-appointment"></p>
      </article>
      <article>
        <router-link to="/Payment"
          ><button class="button-next-page">Termin buchen</button></router-link
        >
      </article>
    </section>
  </body>
</template>

<script>
import timeSlots from "@/components/appointments.json";
import MultiStepHeader from "@/components/MultiStepHeader.vue";

export default {
  data() {
    return {
      appointments: timeSlots,
      value: "",
    };
  },
  components: {
    MultiStepHeader,
  },
  methods: {
    chosenAppointment(slot) {
      localStorage.setItem("appointmentDay", JSON.stringify(slot.day));
      localStorage.setItem("appointmentTime", JSON.stringify(slot.time));
      this.value = `${slot.day} um ${slot.time}`;
    },
  },
};
</script>

<style>
.class1 {
  height: 100%;
body {
  height: 30rem;

  width: 100%;
}
.timeSlots {
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;
}

tr {
  display: flex;
  justify-content: center;
}

.appointments {
  list-style: none;
}

.days {
  margin-bottom: 0.5rem;
}

#chosen-appointment {
  display: flex;
  justify-content: left;
  margin-left: 2rem;
}

td:hover {
  background-color: lightgrey;
}

.section {
  height: 500px;
}

.button-next-page {
  position: relative;
  margin-top: 3rem;
  background: var(--btn-background-clr);
  border: var(--btn-border);
  padding: var(--btn-padding);
}

.button-next-page:hover {
  background-color: var(--btn-hover-clr);
}

@media (max-width: 600px) {
  .timeSlots {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .button-next-page {
    position: relative;
    margin-top: 1rem;
    background: var(--btn-background-clr);
    border: var(--btn-border);
    padding: var(--btn-padding);
  }
}
</style>
