<template>
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

      <router-link to="/Payment"
        ><button class="button-next-page">Termin auswählen</button></router-link
      >
    </article>
    <article>
      <h3 id="chosen-appointment">
        Dein ausgewählter Termin: {{ this.value }}
      </h3>
      <p id="show-chosen-appointment"></p>
    </article>
  </section>
</template>

<script>
import timeSlots from "@/components/appointments.json";

export default {
  data() {
    return {
      appointments: timeSlots,
      value: "",
    };
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
.button-next-page {
}
.class1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-left: 2rem;
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
</style>
