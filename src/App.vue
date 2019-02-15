<template>
  <div id="app">
    <top-bar> </top-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Topbar from './components/TopBar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    'top-bar': Topbar,
    'app-footer': Footer
  }
}
</script>

<style>
  body{
       background-color: #f5f4f4;
        font-family: 'Roboto', sans-serif;
    }
</style>
