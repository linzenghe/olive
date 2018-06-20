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
          <li class="nav-item">搜索</li>
          <li class="nav-item">购物车</li>
          <li class="nav-item">登录</li>
          <li class="nav-item registerBtn">注册</li>
        </ul>
      </div>
    </div>
    <loginPop></loginPop>
  </div>
</template>

<script>
import loginPop from './login'
export default {
  components:{
    loginPop,
  }
}
</script>
