<template>
  <router-view />

  <footer>©Enricco Carruba</footer>
</template>

<style>
.nav-leiste {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(189, 135, 97);
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
</style>
