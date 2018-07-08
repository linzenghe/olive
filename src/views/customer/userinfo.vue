<template>
  <div class="customer-content">
    <div class="customer-info">
      <div class="info-wrap">
        <div class="imageBox">
          <img :src="userInfo.portraitUrl">
        </div>
        <div class="info">
          <h5 class="name">{{userInfo.name}}</h5>
          <p class="int"><span>会员积分</span>{{userInfo.consumption}}</p>
        </div>
      </div>
      <div class="setting-wrap">
        <ul class="tab clear">
          <li v-for="item,index in tab" :class="index==tabCur?'current':''">{{item}}</li>
        </ul>
        <div class="tab-content bindPhone" id="bindPhone">
          <form class="form" id="bindPhoneForm" role="form">
            <div class="item">
              <input class="item-input" type="text" placeholder="输入国内手机号码">
            </div>
            <div class="item">
              <button class="item-button" type="button">获取验证码</button>
            </div>
            <div class="item">
              <input class="item-input" type="text" placeholder="设置登录密码">
            </div>
            <div class="submit-item">
              <button class="item-button" type="button">确认绑定</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userInfo:{
        "name": "",
        "phone": "",
        "uuid": "",
        "portraitUrl": null,
        "createTime": null,
        "consumption": 0,
        "hasOpenId": null
      },
      tab:['绑定手机号码','查询积分记录'],
      tabCur:0,   //当前导航
    }
  },
  mounted(){
    this.axios.get("/api/current").then(response => {
      this.userInfo=response.data;
      console.log(this.userInfo);
    }, error => {
      this.$layer.msg(error.response.data.message);
    });
  }
}
</script>

<style>
  .customer-info .info-wrap{
    width: 360px;
    background: #f5f5f5;
    border: 1px solid #979797;
    position: relative;
    padding: 48px 0px 48px 130px;
    box-sizing: border-box;
  }
  .customer-info .info-wrap .imageBox{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 50%;
    margin-top: -32px;
    background: #D8D8D8;
    border: 1px solid #979797;
  }
  .customer-info .info-wrap .imageBox img{
    width: 100%;
  }
  .customer-info .info-wrap .info{
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .customer-info .info-wrap .info h5{
    font-size: 14px;
    color: #222222;
    font-weight: normal;
  }
  .customer-info .info-wrap .info p{
    font-size: 14px;
    color: #737373;
  }
  .customer-info .info-wrap .info p span{
    margin-right: 26px;
  }
  .customer-info .setting-wrap{
    padding-top: 30px;
  }
  .customer-info .setting-wrap .tab{
    border-bottom: 2px solid #979797;
  }
  .customer-info .setting-wrap .tab li{
    float: left;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    line-height: 46px;
    padding: 0 28px;
  }
  .customer-info .setting-wrap .tab li:hover{
    background: #f5f3ef;
  }
  .customer-info .setting-wrap .tab li.current{
    background: #b4a078;
    color: #fff;
  }
  .customer-info .setting-wrap .tab-content{
    padding-bottom: 140px;
  }
  .customer-info .setting-wrap .tab-content.bindPhone .form{
    width: 364px;
  }
  .customer-info .setting-wrap .tab-content.bindPhone .form .item{
    margin-top: 24px;
  }
</style>
