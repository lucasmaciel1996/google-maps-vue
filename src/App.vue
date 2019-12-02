<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="40" height="40">
    <GoogleMapCustom msg="Maps in Vue"/>
  </div>
</template>

<script>
import GoogleMapCustom from './components/GoogleMapCustom.vue'

export default {
  name: 'app',
  components: {
    GoogleMapCustom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
