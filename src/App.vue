<template>
  <main id="app">
    <Nav />
    <router-view />
    <PageFooter />
  </main>
</template>

<script>

import Nav from './components/nav.vue'
import PageFooter from "@/components/Footer.vue";
// import M from 'materialize-css'

export default {
  name: 'App',
  components: {
    PageFooter,
    Nav,
  },
  mounted () {
    // M.AutoInit()
  }
}
</script>

<style>

</style>
