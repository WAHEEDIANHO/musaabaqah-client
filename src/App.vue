<template>
  <main id="app">
    <Nav v-if="!($route.path.toString().endsWith('moderator') || $route.path.endsWith('participant'))" />
    <router-view />
    <PageFooter v-if="!($route.path.endsWith('moderator') || $route.path.endsWith('participant'))" />
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
    console.log(this.$route.path)
  }
}
</script>

<style>

</style>
