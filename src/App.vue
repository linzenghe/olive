<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view v-if="isRouterAlive"></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'
import footerNav from '@/components/footer-nav.vue'
export default {
  name: 'app',
  components: {
    headerNav,
    footerNav
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function () {
        this.isRouterAlive=true
      });
    }
  }
}
</script>

<style>

</style>
