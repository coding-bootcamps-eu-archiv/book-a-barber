<template>
  <header class="nav-leiste">
    <nav><router-link to="/">Home</router-link></nav>
    <nav><router-link to="/Services">Services</router-link></nav>
    <nav><router-link to="/Appointments">Appointments</router-link></nav>
    <nav><router-link to="/Payment">Payment</router-link></nav>
    <img id="logo" src="@/images/bookabarberlogo.png" alt="" />
  </header>
  <router-view />

  <footer>©Enrico Carruba</footer>
</template>

<style>
.nav-leiste {
  display: flex;
  background-color: rgb(189, 135, 97);
  height: 5rem;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

#logo {
  width: 20rem;
  height: 5rem;
}

@media screen and (min-width: 768px) {
}
</style>
