<template>
    <div id="loginPop" class="loginPop" v-if="resLogShow">
    <div class="pop-mask"></div>
    <div class="loginPop-overlay">
      <div class="loginPop-m">
        <div class="loginPop-b">
          <div class="closeBtn"  @click="closePop"><i class="icon icon-close"></i></div>
          <!--登录-->
          <div class="loginPop-c" v-if="logShow">
            <div class="title">会员登录</div>
            <form class="form" id="loginForm" role="form">
              <div class="item">
                <input class="item-input" type="text" placeholder="输入手机号码">
              </div>
              <div class="item">
                <button class="item-button" type="button">获取验证码</button>
              </div>
              <div class="item">
                <input class="item-input" type="text" placeholder="输入短信验证码">
              </div>
              <div class="submit-item">
                <button class="item-button" type="button">登录</button>
              </div>
              <div class="other_login clear">
                <p class="fl">社交账号快捷登录</p>
                <i class="icon icon-wechat fr"></i>
              </div>
            </form>
            <div class="pop-bottom">
              <div class="bottom-item">
                <button class="item-button" @click="gotoReg">前往注册</button>
              </div>
            </div>
          </div>
          <!--注册-->
          <div class="regPop-c" v-if="regShow">
            <div class="title">注册账号</div>
            <form class="form" id="regForm" role="form">
              <div class="item">
                <input class="item-input" type="text" placeholder="输入手机号码">
              </div>
              <div class="item">
                <button class="item-button" type="button">获取验证码</button>
              </div>
              <div class="item">
                <input class="item-input" type="text" placeholder="输入短信验证码">
              </div>
              <div class="agreement">
                <label><input type="checkbox" class="hide" checked><i class="icon icon-check-box-blank"></i>同意网站服务条款</label>
              </div>
              <div class="submit-item">
                <button class="item-button" type="button">注册</button>
              </div>
              <div class="other_login clear">
                <p class="fl">社交账号快捷登录</p>
                <i class="icon icon-wechat fr"></i>
              </div>
            </form>
            <div class="pop-bottom">
              <div class="bottom-item">
                <button class="item-button" @click="gotoLog">已有账号？立即登录</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  methods:{
    closePop(){
      this.$store.commit('hideResLog');
    },
    gotoReg(){
      this.$store.state.logShow=false;
      this.$store.state.regShow=true;
    },
    gotoLog(){
      this.$store.state.logShow=true;
      this.$store.state.regShow=false;
    },
  },
  computed:{
    resLogShow(){
      return this.$store.state.resLogShow
    },
    logShow(){
      return this.$store.state.logShow
    },
    regShow(){
      return this.$store.state.regShow
    }
  }
}
</script>
<style>
  .loginPop .pop-mask{
    opacity: 0.8;
    background-color:#000;
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .loginPop .loginPop-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 999;
  }
  .loginPop .loginPop-overlay .loginPop-m{
    width: 360px;
    overflow: visible;
    position: relative;
    top: 20%;
    margin: 0 auto;
    background-color: #fff;
    z-index: 10;
  }
  .loginPop.show .loginPop-overlay .loginPop-m{
    display: block;
  }
  .loginPop .loginPop-overlay .loginPop-b{
    padding: 36px;
  }
  .loginPop .loginPop-overlay .loginPop-b .closeBtn{
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
  .loginPop .loginPop-overlay .loginPop-b .closeBtn .icon{
    font-size: 26px;
    color: #777;
  }
  .loginPop .loginPop-overlay .loginPop-b .closeBtn:hover .icon{
    color: #333;
  }
  .loginPop .loginPop-overlay .loginPop-b .title{
    font-size: 16px;
    color: #222222;
    line-height: 16px;
    padding-bottom: 8px;
  }
  .loginPop .loginPop-overlay .loginPop-b .other_login{
    font-size: 14px;
    color: #222;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .loginPop .loginPop-overlay .loginPop-b .other_login .icon{
    font-size: 24px;
    color: #999;
    cursor: pointer;
  }
  .loginPop .loginPop-overlay .loginPop-b .other_login .icon:hover{
    color: #222;
  }
  .loginPop .loginPop-overlay .pop-bottom{
    position: relative;
  }
  .loginPop .loginPop-overlay .pop-bottom:before{
    content: '';
    position: absolute;
    top: 0;
    left: -36px;
    right: -36px;
    border-bottom: 1px solid #979797;
  }
  .loginPop .loginPop-overlay .pop-bottom .bottom-item{
    padding-top: 20px;
  }
  .loginPop .loginPop-overlay .pop-bottom .bottom-item .item-button{
    background: #000;
    color: #fff;
    font-size: 14px;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 12px 0;
  }
  .loginPop .loginPop-overlay .agreement{
     margin-top: 16px;
    font-size: 14px;
    color: #222;
  }
  .loginPop .loginPop-overlay .agreement .icon{
    color: #999;
    font-size: 18px;
    margin-right: 8px;
    display: inline-block;
    margin-bottom: -2px;
  }
  .loginPop .loginPop-overlay .agreement label input[type=checkbox]:checked+i:before{
    content: "\E637";
  }
</style>




