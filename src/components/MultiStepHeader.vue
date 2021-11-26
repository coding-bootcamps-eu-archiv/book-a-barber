<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <header class="nav-leiste">
    <nav :class="getActiveClass(1)" class="navVisibility">
      <router-link v-if="isStepActive(1)" to="/"
        ><i class="fa fa-home" style="font-size: 20px"></i
      ></router-link>
      <span v-else><i class="fa fa-home" style="font-size: 20px"></i></span>
    </nav>
    <nav :class="getActiveClass(2)" class="navVisibility">
      <router-link v-if="isStepActive(2)" to="/Services"
        ><i class="fa fa-cart-plus" style="font-size: 20px"></i
      ></router-link>
      <span v-else
        ><i class="fa fa-cart-plus" style="font-size: 20px"></i
      ></span>
    </nav>
    <nav :class="getActiveClass(3)" class="navVisibility">
      <router-link v-if="isStepActive(3)" to="/Appointments"
        ><i class="fa fa-calendar" style="font-size: 20px"></i
      ></router-link>
      <span v-else><i class="fa fa-calendar" style="font-size: 20px"></i></span>
    </nav>
    <nav :class="getActiveClass(4)" class="navVisibility">
      <router-link v-if="isStepActive(4)" to="/Payment"
        ><i class="fa fa-drivers-license-o" style="font-size: 20px"></i
      ></router-link>
      <span v-else
        ><i class="fa fa-drivers-license-o" style="font-size: 20px"></i
      ></span>
    </nav>
    <nav :class="getActiveClass(5)" class="navVisibility">
      <router-link v-if="isStepActive(5)" to="/"
        ><i class="fa fa-handshake-o" style="font-size: 20px"></i
      ></router-link>
      <span v-else
        ><i class="fa fa-handshake-o" style="font-size: 20px"></i
      ></span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MultiStepHeader",
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentStep: this.step,
    };
  },
  methods: {
    isStepActive(minStep) {
      console.log(this.currentStep >= minStep);
      return this.currentStep >= minStep;
    },
    getActiveClass(step) {
      let currentClass = "inactive";
      if (this.isStepActive(step)) {
        currentClass = "active";
      }
      return currentClass;
    },
  },
};
</script>

<style>
.nav-leiste {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(189, 135, 97);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(252, 231, 215);
}

.navVisibility {
  justify-content: space-evenly;
  margin: auto;
  padding: 1rem;
}
</style>
