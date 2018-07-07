<template>
  <div id="cart" class="cart">
    <div class="container">
      <div class="back-opt"><a @click="back"><i class="icon icon-zuo"></i>返回上一页</a></div>
      <div class="cart-panel clear">
        <div class="cart-left">
          <div class="cart-items">
            <div class="cart-item clear">
              <div class="cart-goods-img fl">
                <img src="">
              </div>
              <div class="cart-goods-info fl">
                <h4>推荐商品主标题一行完全展现20个中文字符长度</h4>
                <div class="price">价格：<span>￥222</span><del>￥333</del></div>
                <div class="sku"><span>红色</span><span>500ml</span></div>
              </div>
              <div class="cart-opt fr">
                <div class="field">
                  <div class="u-selnum">
                    <span class="less"><i class="icon icon-jian"></i></span>
                    <input type="text" value="1">
                    <span class="more"><i class="icon icon-jia"></i></span>
                  </div>
                </div>
                <div class="del-btn"><i class="icon icon-close"></i></div>
              </div>
            </div>
            <div class="cart-item clear">
              <div class="cart-goods-img fl">
                <img src="">
              </div>
              <div class="cart-goods-info fl">
                <h4>推荐商品主标题一行完全展现20个中文字符长度</h4>
                <div class="price">价格：<span>￥222</span><del>￥333</del></div>
                <div class="sku"><span>红色</span><span>500ml</span></div>
              </div>
              <div class="cart-opt fr">
                <div class="field">
                  <div class="u-selnum">
                    <span class="less"><i class="icon icon-jian"></i></span>
                    <input type="text" value="1">
                    <span class="more"><i class="icon icon-jia"></i></span>
                  </div>
                </div>
                <div class="del-btn"><i class="icon icon-close"></i></div>
              </div>
            </div>
            <div class="cart-item clear">
              <div class="cart-goods-img fl">
                <img src="">
              </div>
              <div class="cart-goods-info fl">
                <h4>推荐商品主标题一行完全展现20个中文字符长度</h4>
                <div class="price">价格：<span>￥222</span><del>￥333</del></div>
                <div class="sku"><span>红色</span><span>500ml</span></div>
              </div>
              <div class="cart-opt fr">
                <div class="field">
                  <div class="u-selnum">
                    <span class="less"><i class="icon icon-jian"></i></span>
                    <input type="text" value="1">
                    <span class="more"><i class="icon icon-jia"></i></span>
                  </div>
                </div>
                <div class="del-btn"><i class="icon icon-close"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-right">
          <div class="submit-panel">
            <div class="submit-panel-h">购物车总金额</div>
            <div class="submit-panel-b">
              <ul>
                <li class="clear"><label>商品件数</label><span class="fr">24 件</span></li>
                <li class="clear"><label>商品金额</label><span class="fr">24 元</span></li>
                <li class="clear"><label>折扣金额</label><span class="fr">10 元</span></li>
                <li class="clear"><label>订单合计</label><span class="fr">14 元</span></li>
              </ul>
            </div>
            <div class="submit-panel-f">
              <a class="submit-btn">立即结算</a>
              <p class="tip">运费在添加收获地址后自动计算，在确认收获后您可获得会员积分。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service></service>
  </div>
</template>

<script>
  import service from '@/components/service'
  export default {
    computed:{

    },
    components:{
      service,
    },
    methods:{
      back(){
        this.$router.back(-1)
      }
    }
  }
</script>

<style>
  .back-opt{
    font-size: 14px;
    margin: 20px 0 24px;
  }
  .back-opt .icon{
    font-size: 14px;
    margin-right: 4px;
  }
  .cart-panel{
    margin-bottom: 100px;
  }
  .cart-panel .cart-left{
    float: left;
    width: 750px;
  }
  .cart-panel .cart-items .cart-item{
    border: 1px solid #979797;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.24);
    box-sizing: border-box;
    padding: 24px 24px;
    margin-bottom: 16px;
  }
  .cart-panel .cart-items .cart-item *{
    box-sizing: border-box;
  }
  .cart-panel .cart-items .cart-item .cart-goods-img{
    width: 120px;
    height: 120px;
    background: #D8D8D8;
    border: 1px solid #979797;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info{
    padding: 20px 30px;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info h4{
    font-size: 16px;
    color: #222222;
    line-height: 16px;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info .price{
    margin-top: 20px;
    font-size: 14px;
    color: #222;
    line-height: 14px;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info .price span{
    color: #d7282d;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info .price del{
    font-size: 12px;
    color: #999;
    margin-left: 8px;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info .sku{
    margin-top: 8px;
    font-size: 14px;
    line-height: 14px;
    color: #222;
  }
  .cart-panel .cart-items .cart-item .cart-goods-info .sku span{
    margin-right: 16px;
  }
  .cart-panel .cart-items .cart-item .cart-opt{
    padding: 42px 0;
  }
  .cart-panel .cart-items .cart-item .cart-opt .del-btn{
    float: right;
    margin-left: 16px;
    margin-top: 6px;
  }
  .cart-panel .cart-items .cart-item .cart-opt .del-btn .icon{
    font-size: 20px;
    cursor: pointer;
  }
  .field{
    margin-bottom: 3px;
    float: left;
  }
  .field .u-selnum{
    border: 1px solid #ddd;
    overflow: hidden;
  }
  .field .u-selnum .less,.field .u-selnum .more, .field .u-selnum input {
    position: relative;
    float: left;
    width: 36px;
    height: 30px;
    line-height: 28px;
    background: #fff;
  }
  .field .u-selnum .less.down-disabled,.field .u-selnum .more.up-disabled{
    cursor: no-drop;
  }
  .field .u-selnum .less{
    border-right: 1px solid #ddd;
    cursor: pointer;
    text-align: center;
  }
  .field .u-selnum input{
    box-sizing: border-box;
    border-radius: 0;
    border: 0;
    width: 60px;
    margin: 0;
    font-size: 12px;
    text-align: center;
    color: #333;
  }
  .field .u-selnum .more{
    border-left: 1px solid #ddd;
    cursor: pointer;
    text-align: center;
  }
  .field .u-selnum .less .icon,.field .u-selnum .more .icon{
    font-size: 20px;
    font-weight: 400;
    color: #b4a078;
    line-height: 30px;
  }
  .cart-panel .cart-right{
    float: right;
    width: 400px;
  }
  .cart-panel .cart-right .submit-panel{
    background: #F5F5F5;
    border: 1px solid rgba(0,0,0,0.30);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.24);
  }
  .cart-panel .cart-right .submit-panel .submit-panel-h{
    font-size: 14px;
    color: #999999;
    border-bottom: 1px solid rgba(0,0,0,0.30);
    padding: 16px 24px;
  }
  .cart-panel .cart-right .submit-panel .submit-panel-b{
    padding: 16px 24px;
    border-bottom: 1px solid rgba(0,0,0,0.30);
  }
  .cart-panel .cart-right .submit-panel .submit-panel-b li{
    margin-bottom: 8px;
    color: #222;
  }
  .cart-panel .cart-right .submit-panel .submit-panel-b li:last-child{
    margin-bottom: 0;
  }
  .cart-panel .cart-right .submit-panel .submit-panel-f{
    padding: 16px 24px;
  }
  .cart-panel .cart-right .submit-panel .submit-panel-f .submit-btn{
    background: #000000;
    display: block;
    line-height: 46px;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
  }
  .cart-panel .cart-right .submit-panel .submit-panel-f .tip{
    font-size: 13px;
    color: #222222;
    line-height: 18px;
    margin-top: 8px;
  }
</style>
