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
        </ul>
        <ul class="navbar-right">
          <searchPanel></searchPanel>
          <carPanel></carPanel>
          <li class="nav-item" @click="showLogPop" v-if="!loginStatus">登录</li>
          <li class="nav-item registerBtn" @click="showRegPop" v-if="!loginStatus">注册</li>
          <li class="nav-item user-item clear" v-if="loginStatus" @mouseenter="userShowhandle" @mouseleave="userHidehandle">
            <div class="imageBox fl">
              <img :src="userInfo.portraitUrl">
            </div>
            <div class="name fl">{{userInfo.username}}<i class="icon icon-xia"></i></div>
            <ul class="drop-menu" v-if="userNav">
              <router-link tag='li' to='/customer/info' @click.native="userHidehandle"><a href="javascript:;">账户中心</a></router-link>
              <li><a href="javascript:;" @click="exit">退出登陆</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <loginPop v-on:listenToLogin="loginEnd"></loginPop>
  </div>
</template>

<script>
import loginPop from './loginPop'
import carPanel from './car-panel'
import searchPanel from './search-panel'
import {setCookie,getCookie,delCookie} from '../assets/js/cookie'
export default {
  data(){
    return{
      userInfo:{          /*用户信息*/
        username:'',
        portraitUrl:'',
      },
      loginStatus:false,  /*登录状态*/
      userNav:false,
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
    },
    loginEnd(data){
      this.userInfo=data;
      this.loginStatus=true;
    },
    userShowhandle(){
      this.userNav=true
    },
    userHidehandle(){
      this.userNav=false
    },
    exit(){
      this.axios.get("/api/logout").then(response => {
        this.userInfo={username:'', portraitUrl:''};
        this.loginStatus=false;
        delCookie('userInfo');
      }, response => {
        this.$layer.msg('退出失败');
        return false;
      });
    }
  },
  mounted(){
    if(getCookie('userInfo')){
      let uInfo = JSON.parse(getCookie('userInfo'));
      this.userInfo=uInfo;
      this.loginStatus=true;
    }else{
      this.loginStatus=false;
    }
  }
}
</script>
