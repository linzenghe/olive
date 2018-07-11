<template>
  <div id="customer">
    <div class="container">
      <div class="customer-panel clear">
        <div class="leftNav">
          <h3 class="title">账户中心</h3>
          <ul class="account-nav">
            <router-link tag="li" :class="leftNavCur=='Info'?'current':''" :to="{name:'Info'}"><a>账户信息</a></router-link>
            <router-link tag="li" :class="leftNavCur=='Address'?'current':''" :to="{name:'Address'}"><a>地址簿</a></router-link>
            <router-link tag="li" :class="leftNavCur=='Order'?'current':''" :to="{name:'Order',query:{status:''}}"><a>所有订单</a></router-link>
            <router-link tag="li" :class="leftNavCur=='Follow'?'current':''" :to="{name:'Follow'}"><a>收藏夹</a></router-link>
            <router-link tag="li" :class="leftNavCur=='Setting'?'current':''" :to="{name:'Setting'}"><a>安全设置</a></router-link>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    leftNavCur(){
      let leftNavCur=this.$route.name;
      return leftNavCur
    }
  },
}
</script>
<style>
  .customer-panel{
    position: relative;
    padding-top: 55px;
  }
  .customer-panel .leftNav{
    width: 250px;
    float: left;
    padding-bottom: 30px;
  }
  .customer-panel .leftNav .title{
    font-size: 22px;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }
  .customer-panel .leftNav .account-nav{
    position: relative;
  }
  .customer-panel .leftNav .account-nav:after{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    border-right:1px solid #F0EDED;
    z-index: -1;
  }
  .customer-panel .leftNav .account-nav li a{
    display: block;
    padding-left: 30px;
    line-height: 38px;
    font-size: 14px;
    color: #000;
    font-weight: bold;
  }
  .customer-panel .leftNav .account-nav li.current{
    background: #f9f9f9;
  }
  .customer-panel .customer-content{
    float: left;
    width: 950px;
    padding-left: 50px;
    box-sizing: border-box;
  }
</style>
