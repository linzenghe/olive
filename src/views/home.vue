<template>
  <div id="home">
    <slide v-bind:slideList="homeData.bannerList"></slide>
    <div class="container">
      <!--社区活动-->
      <div class="panel-content active-panel">
        <div class="panel-title clear">
          <h3 class="fl">社区活动</h3>
          <a class="fr more">查看更多</a>
        </div>
        <div class="active-items clear">
          <div class="active-item" v-for="(item,index) in homeData.activeList" >
            <router-link class="imgBox" :to="item.linkUrl">
              <img :src="item.imageUrl" :alt="item.imageUrl">
            </router-link>
            <div class="info"><a>推荐文章标题推荐文章标题推荐文..</a></div>
          </div>
        </div>
      </div>
      <!--教你选购-->
      <div class="panel-content teach-panel">
        <div class="panel-title clear">
          <h3 class="fl">教你选购</h3>
          <a class="fr more">查看更多</a>
        </div>
        <div class="teach-items clear">
          <div class="teach-item" v-for="item in homeData.guideList">
            <router-link :to="item.linkUrl" v-bind:data-id="item.id"><img :src="item.imageUrl"></router-link>
          </div>
        </div>
      </div>
      <!--推荐商品-->
      <div class="panel-content recommend-panel">
        <div class="panel-title clear">
          <h3 class="fl">推荐商品</h3>
          <a class="fr more">全部商品</a>
        </div>
        <div class="goods-items clear">
          <div class="goods-item" v-for="item in homeData.goodsList">
            <a class="imageBox">
              <img :src="item.bannerUrl">
            </a>
            <div class="info">
              <h5><a>{{item.name}}</a></h5>
              <div class="sub-info clear">
                <ul class="labels">
                  <li v-for="label in item.labels.split(',')">{{label}}</li>
                </ul>
                <p class="price">￥{{item.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-content story-panel">
        <div class="panel-title clear">
          <h3 class="fl">用户故事</h3>
          <a class="fr more">查看更多</a>
        </div>
        <div class="story-items clear">
          <div class="story-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5 class="name">cathy</h5>
              <p class="comment">购物快捷方便，货品和想象中一样！</p>
            </div>
          </div>
          <div class="story-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5 class="name">cathy</h5>
              <p class="comment">购物快捷方便，货品和想象中一样！</p>
            </div>
          </div>
          <div class="story-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5 class="name">cathy</h5>
              <p class="comment">购物快捷方便，货品和想象中一样！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service></service>
  </div>
</template>

<script>
import slide from '@/components/slide'
import service from '@/components/service'

export default {
  data(){
    return {
      homeData:{},
    }
  },
  components: {
    slide,
    service
  },
  mounted(){


    this.axios.get("/api/home").then(response => {
      this.homeData= response.data;
    }, response => {
      return false;
    });
  }
}
</script>

<style>
  .panel-content{
    padding-top: 50px;
  }
  .panel-content .panel-title{
    font-size: 24px;
    color: #222;
    line-height: 24px;
  }
  .panel-content .panel-title .more{
    font-size: 14px;
    color: #666;
    cursor: pointer;
  }
  .panel-content .panel-title .more:hover{
    color: #333;
  }
  /*活动列表*/
  .active-items{
    padding-top: 30px;
  }
  .active-items .active-item{
    width: 33.333%;
    float: left;
    padding: 0 12px;
    box-sizing: border-box;
  }
  .active-items .active-item .imgBox{
    display: block;
    width: 100%;
    height: 418px;
    background: #F5F5F5;
    box-shadow: 0 2px 24px 0 rgba(0,0,0,0.24);
    margin: 0 auto;
  }
  .active-items .active-item .info{
    font-size: 14px;
    color: #222222;
    line-height: 24px;
    margin-top: 22px;
  }
  /*教你选购*/
  .teach-items{
    padding-top: 30px;
  }
  .teach-items .teach-item:first-child{
    position: relative;
    width: 722px;
    height: 470px;
    background: #D8D8D8;
    float: left;
    margin-left: 0;
  }
  .teach-items .teach-item{
    background-color: #D8D8D8;
    overflow: hidden;
    width: 231px;
    height: 231px;
    float: left;
    margin-left: 8px;
    text-align: center;
    margin-bottom: 8px;
  }
  /*推荐商品*/
  .goods-items{
    margin-left: -12px;
    margin-right: -12px;
    padding-top: 30px;
  }
  .goods-items .goods-item{
    width: 25%;
    padding:0 12px;
    float: left;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .goods-items .goods-item .imageBox{
    display: block;
    width: 100%;
    height: 282px;
    background: #D8D8D8;
    border: 1px solid #979797;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.24);
  }
  .goods-items .goods-item .info{
    padding-top: 22px;
  }
  .goods-items .goods-item .info h5{
    font-size: 16px;
    color: #222222;
    line-height: 16px;
  }
  .goods-items .goods-item .info .sub-info{
    margin-top: 14px;
  }
  .goods-items .goods-item .info .sub-info .labels{
    float: left;
    width: 200px;

  }
  .goods-items .goods-item .info .sub-info .labels li{
    font-size: 12px;
    color: #fff;
    display: inline-block;
    background: #b4a078;
    padding:0 4px;
    border-radius: 3px;
  }
  .goods-items .goods-item .info .sub-info .price{
    float: right;
    font-size: 16px;
    color: #d4282d;
  }
  /*用户故事*/
  .story-panel{
    padding-bottom: 50px;
  }
  .story-items{
    margin-top: 30px;
  }
  .story-items .story-item{
    width: 33.333%;
    box-sizing: border-box;
    float: left;
    position: relative;
    padding-left: 114px;
    height: 88px;
  }
  .story-items .story-item .imageBox{
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: #D8D8D8;
    border: 1px solid #979797;
    position: absolute;
    left: 13px;
  }
  .story-items .story-item .info{
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .story-items .story-item .info .name{
    font-size: 12px;
    color: #222222;
    line-height: 12px;
  }
  .story-items .story-item .info .comment{
    margin-top: 12px;
    font-size: 16px;
    color: #222222;
    font-weight: bold;
  }
</style>
