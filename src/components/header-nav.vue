<template>
  <div id="header">
    <div class="navbar">
      <div class="container clear">
        <div class="navbar-logo">
          <img src="@/assets/img/logo.jpg" alt="logo">
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a>标题1</a>
            <ul class="drop-menu">
              <li><a>副标题一</a></li>
              <li><a>副标题二</a></li>
              <li><a>副标题三</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a>标题2</a>
            <ul class="drop-menu">
              <li><a>副标题一</a></li>
              <li><a>副标题二</a></li>
              <li><a>副标题三</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a>标题2</a>
            <ul class="drop-menu">
              <li><a>副标题一</a></li>
              <li><a>副标题二</a></li>
              <li><a>副标题三</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a>标题2</a>
            <ul class="drop-menu">
              <li><a>副标题一</a></li>
              <li><a>副标题二</a></li>
              <li><a>副标题三</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a>标题2</a>
            <ul class="drop-menu">
              <li><a>副标题一</a></li>
              <li><a>副标题二</a></li>
              <li><a>副标题三</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a>标题2</a>
            <ul class="drop-menu">
              <li><a>副标题一</a></li>
              <li><a>副标题二</a></li>
              <li><a>副标题三</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-right">
          <searchPanel></searchPanel>
          <carPanel></carPanel>
          <li class="nav-item" @click="showLogPop">登录</li>
          <li class="nav-item registerBtn" @click="showRegPop">注册</li>
          <li class="nav-item user-item clear">
            <div class="imageBox fl">
              <img src="">
            </div>
            <div class="name fl">小花<i class="icon icon-xia"></i></div>
          </li>
        </ul>
      </div>
    </div>
    <loginPop></loginPop>
  </div>
</template>

<script>
import loginPop from './login'
import carPanel from './car-panel'
import searchPanel from './search-panel'
export default {
  data(){
    return{

    }
  },
  components:{
    loginPop,
    carPanel,
    searchPanel
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
