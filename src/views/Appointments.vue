<template>
  <section>
    <h1>Termin auswählen</h1>
    <article class="class1">
      <!-- Monday -->
      <table>
        <tr>
          <th class="days">Montag</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Montag'"
          >
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Tuesday -->
      <table>
        <tr>
          <th class="days">Dienstag</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Dienstag'"
          >
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Wednesday -->
      <table>
        <tr>
          <th class="days">Mittwoch</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Mittwoch'"
          >
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Thursday -->
      <table>
        <tr>
          <th class="days">Donnerstag</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Donnerstag'"
          >
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Friday -->
      <table>
        <tr>
          <th class="days">Freitag</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Freitag'"
          >
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Saturday -->
      <table>
        <tr>
          <th class="days">Samstag</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Samstag'"
          >
            {{ appointment.time }}
          </td>
        </tr>
      </table>
      <!-- Sunday -->
      <table>
        <tr>
          <th class="days">Sonntag</th>
        </tr>
        <tr
          @click="chosenAppointment"
          v-for="appointment in appointments.appointments"
          :key="appointment"
        >
          <td
            :data-appointment-id="appointment.id"
            v-if="appointment.day === 'Sonntag'"
          >
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
    chosenAppointment(event) {
      debugger;
      let appointmentId = event.target.getAttribute("data-appointment-id");
      let appointmentsArray = [...this.appointments];
      let appointment = appointmentsArray.find(
        (appointment) => appointment.id === appointmentId
      );

      console.log(this.appointments);
      sessionStorage.setItem("appointment", JSON.stringify(appointment));
      this.value = `${appointment.day} um ${appointment.time}`;
    },
  },
};
</script>

<style>
.button-next-page {
  position: absolute;
  bottom: 2rem;
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
