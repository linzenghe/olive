<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import headerNav from './components/header-nav.vue'
import footerNav from './components/footer-nav.vue'
export default {
  name: 'app',
  components: {
    headerNav,
    footerNav
  }
}
</script>

<style>

</style>
