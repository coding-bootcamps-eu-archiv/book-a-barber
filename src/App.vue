<template>
  <header class="nav-leiste">
    <img id="logo" src="@/images/bookabarberlogo.png" alt="" />
  </header>
  <router-view />
  <hr />
  <footer>©Enrico Carruba</footer>
</template>

<style>
html {
  --btn-background-clr: rgb(181, 181, 181);
  --btn-border: rgb(131, 131, 131) solid 2px;
  --btn-padding: 0.3rem 0.6rem;
  --btn-hover-clr: rgb(131, 131, 131);
  --border-radius: (10%);
}

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
  position: relative;
}

#app:after {
  content: " ";
  position: absolute;
  background-image: url("https://baerte.info/wp-content/uploads/2019/06/barber.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  width: 100%;
  height: 100%;
  opacity: 50%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
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
