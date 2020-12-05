<template>
  <div id="app" class="container">
    <div class="row py-4">
      <menu-input />
      <menu-show />
    </div>
  </div>
</template>

<script>
  import MenuInput from './components/MenuInput.vue'
  import MenuShow from './components/MenuShow.vue'

  export default {
    name: 'app',
    components: {
      MenuInput,
      MenuShow
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>