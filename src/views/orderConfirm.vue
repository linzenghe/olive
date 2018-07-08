<template>
  <div id="orderConfirm" class="container orderConfirm">
    <div class="title">收获地址</div>
    <div class="add-panel clear">
      <div class="add-item">
        <div class="add-h"><span>福建</span><span>厦门</span><span>湖里区</span></div>
        <div class="add-b">
          <div class="address">详细地址详细地址详细地址详细地址详细地址</div>
          <div class="contact clear">
            <div class="name">收货人<span>wade</span></div>
            <div class="phone">18422323232</div>
          </div>
        </div>
        <i class="default">默认地址</i>
      </div>
      <div class="add-item address-plus">
        <i class="icon icon-jia"></i>
        <p>添加收货地址</p>
      </div>
    </div>
    <hr>
    <div class="payDelivery clear">
      <div class="pay fl">
        <div class="title">支付方式</div>
        <div class="pay-panel clear">
          <div class="pay-item">
            支付宝
          </div>
          <div class="pay-item">
            微信
          </div>
        </div>
      </div>
      <div class="delivery fr">
        <div class="title">配送方式</div>
        <div class="del-panel clear">
          <div class="del-item">
            <p>海外直邮</p>
          </div>
          <div class="del-item">
            <p>国内仓直邮</p>
            <p class="tip">预计等待20天</p>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="orderInfo clear">
      <ul class="infoList fl">
        <li><label>商品小计</label><span>23232</span>元</li>
        <li><label>商品件数</label><span>23</span>件</li>
        <li><label>运费</label><span>23</span>元</li>
      </ul>
      <div class="sum fr"><label>订单总价</label><span>2222</span>元</div>
    </div>
    <div class="order-submit">
      <a class="pay-btn">立即支付</a>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{

    },
    components:{

    },
    mounted(){

    },
    methods:{

    },
  }
</script>

<style>
  .orderConfirm{
    padding-bottom: 50px;
  }
  .orderConfirm *{
    box-sizing: border-box;
  }
  .orderConfirm .title{
    font-size: 16px;
    color: #222222;
    line-height: 16px;
    font-weight: bold;
    padding: 24px 0 16px;
  }
  .orderConfirm .add-panel{

  }
  .orderConfirm .add-panel .add-item{
    width: 328px;
    border: 1px solid #ddd;
    float: left;
    position: relative;
    padding-bottom: 16px;
    height: 160px;
    margin-right: 24px;
  }
  .orderConfirm .add-panel .add-item .add-h{
    padding: 13px 24px;
    border-bottom: 1px solid #ddd;
  }
  .orderConfirm .add-panel .add-item .add-h span{
    font-size: 14px;
    color: #333;
    line-height: 14px;
    margin-right: 12px;
  }
  .orderConfirm .add-panel .add-item .add-b{
    padding: 13px 24px;
  }
  .orderConfirm .add-panel .add-item .add-b .address{
    font-size: 14px;
    color: #666;
  }
  .orderConfirm .add-panel .add-item .add-b .contact{
    margin-top: 8px;
  }
  .orderConfirm .add-panel .add-item .add-b .contact .name{
    float: left;
  }
  .orderConfirm .add-panel .add-item .add-b .contact .phone{
    float: right;
  }
  .orderConfirm .add-panel .add-item .default{
    position: absolute;
    right: 24px;
    bottom: 8px;
    color: #b4a078;
  }
  .orderConfirm .add-panel .add-item.address-plus{
    text-align: center;
    padding: 40px 0;
  }
  .orderConfirm .add-panel .add-item.address-plus .icon{
    font-size: 40px;
  }
  .orderConfirm hr{
    margin: 24px 0 8px;
    border:none;
    background: #ddd;
    height: 2px;
  }

  .orderConfirm .payDelivery .pay{
    width: 50%;
  }
  .orderConfirm .payDelivery .pay-panel .pay-item{
    float: left;
    width: 210px;
    height: 90px;
    text-align: center;
    background: #D8D8D8;
    border: 1px solid #ddd;
    margin-right: 16px;
    padding-top: 36px;
  }
  .orderConfirm .payDelivery .delivery{
    width: 50%;
  }
  .orderConfirm .payDelivery .delivery .del-item{
    float: left;
    width: 210px;
    height: 90px;
    text-align: center;
    background: #D8D8D8;
    border: 1px solid #ddd;
    margin-right: 16px;
    padding-top: 36px;
  }
  .orderConfirm .payDelivery .delivery .del-item .tip{
    font-size: 12px;
    color: #999;
  }
  .orderConfirm .orderInfo{
    padding: 24px 60px;
    border: 1px solid #ddd;
    background: #D8D8D8;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  .orderConfirm .orderInfo label{
    font-size: 14px;
    color: #333;
    margin-right: 16px;
  }
  .orderConfirm .orderInfo span{
    font-size: 14px;
    color: #d4282d;
    margin-right: 2px;
  }
  .orderConfirm .orderInfo .infoList li{
    float: left;
    margin-right: 48px;
  }
  .orderConfirm .order-submit{
    text-align: right;
  }
  .orderConfirm .order-submit .pay-btn{
    background: #000000;
    display: inline-block;
    width: 146px;
    height: 46px;
    color: #fff;
    text-align: center;
    line-height: 46px;
  }
</style>
