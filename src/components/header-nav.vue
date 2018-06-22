<template>
  <div id="header">
    <div class="navbar">
      <div class="container clear">
        <div class="navbar-logo">
          <img src="@/assets/img/logo.jpg" alt="logo">
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">标题1</li>
          <li class="nav-item">标题2</li>
          <li class="nav-item">标题2</li>
          <li class="nav-item">标题2</li>
          <li class="nav-item">标题2</li>
          <li class="nav-item">标题2</li>
        </ul>
        <ul class="navbar-right">
          <li class="nav-item"><i class="icon icon-sousuo"></i></li>
          <carPanel></carPanel>
          <li class="nav-item" @click="showLogPop">登录</li>
          <li class="nav-item registerBtn" @click="showRegPop">注册</li>
        </ul>
      </div>
    </div>
    <loginPop></loginPop>
  </div>
</template>

<script>
import loginPop from './login'
import carPanel from './car-panel'
export default {
  data(){
    return{

    }
  },
  components:{
    loginPop,
    carPanel
  },
  methods:{
    showLogPop(){
      this.$store.commit('showLog');
    },
    showRegPop(){
      this.$store.commit('showReg');
    }
  }
}
</script>
