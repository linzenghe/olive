<template>
  <div id="goodsDetail" class="container goodsDetail">
    <div class="crumbs"><span>商品详情<i class="icon icon-you"></i></span><span>商品名称</span></div>
    <div class="item-box clear">
      <div class="gallery-wrapper fl">
        <div class="gallery">
          <div class="thumb">
            <ul>
              <li class="on"><img :src="goodsDate.imageList[currentImageNum]"></li>
            </ul>
          </div>
          <div class="thumbnail">
            <div class="prev" @click="prevImgPage"><i class="icon icon-zuo"></i></div>
            <div class="scroll-box">
              <ul class="clear" :style="{'left':slideLeft+'px','width':398*imgPage+'px'}">
                <li v-for="(item,index) in goodsDate.imageList" :class="index==currentImageNum?'on':''" @mouseenter="currentImageNum=index"><img :src="item"></li>
              </ul>
            </div>
            <div class="next" @click="nextImgPage"><i class="icon icon-you"></i></div>
          </div>
        </div>
      </div>
      <div class="goods-info fl">
        <div class="info-title">
          <h4 class="title">{{goodsDate.name}}<label v-for="item in goodsDate.labels.split(',')">{{item}}</label></h4>
          <p class="subtitle">{{goodsDate.subtitle}}</p>
        </div>
        <div class="info-body">
          <div class="price clear">
            <label>价格</label><p>￥{{goodsDate.price}}</p>
          </div>
          <hr>
          <ul>
            <li class="clear"><label>商品产地</label><p>{{goodsDate.origin}}</p></li>
            <!--<li class="clear"><label>保质期至</label><p>2019-04-12</p></li>-->
            <!--<li class="clear"><label>商品等级</label><p>特级初榨</p></li>-->
            <!--<li class="clear"><label>包装描述</label><p>玻璃瓶装</p></li>-->
          </ul>
        </div>
        <div class="sku-panel">
          <div class="sku-params clear" v-for="item,index in goodsSpecList">
            <label class="params-name">{{item.title}}</label>
            <ul class="params-tab">
              <li v-for="sku in item.list" >
                <a class="router-link-active" :title="sku.title" @click="choiceSku(index,sku.id)">{{sku.title}}</a>
              </li>
            </ul>
          </div>
          <div class="sku-params clear">
            <label class="params-name">数量</label>
            <div class="field">
              <div class="u-selnum">
                <span class="less" :class="{'down-disabled':buyData.count<=1}" @click="subCount"><i class="icon icon-jian"></i></span>
                <input type="text" v-model="buyData.count">
                <span class="more" :class="{'up-disabled':buyData.count>=limit_count}" @click="addCount"><i class="icon icon-jia"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="operation-wrapper clear">
          <div class="btn buy fl"><a>立即购买</a></div>
          <div class="btn cat fl"><a><i class="icon icon-gouwuche"></i>加入购物车</a></div>
          <div class="btn follow fl"><a><i class="icon icon-shoucang"></i><br>收藏</a></div>
        </div>
      </div>
    </div>
    <!--商品详情-->
    <div class="detail-panel">
      <ul class="detail-tab clear">
        <li v-for="(item,index) in detailTab" :class="index==curDetailTab?'cur':''" @click="curDetailTab=index">{{item}}</li>
      </ul>
      <div class="tab-content">
        <!--详情-->
        <div class="detail" v-if="curDetailTab==0" v-html="goodsDate.description">{{goodsDate.description}}</div>
        <div class="option" v-if="curDetailTab==1">这是使用指南</div>
        <div class="logistics" v-if="curDetailTab==2">这是物流与售后</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      limit_count:1,
      goodsDate:{
        labels:'',
        description:'',
        imageList:[]
      },
      follow:0,
      goodsSpecList:null,
      goodsSpecUnitList:null,
      currentImageNum:0,     /*当前显示图片的序号*/
      imgPage:1,             /*轮播的页数*/
      curImgPage:1,          /*当前轮播的页数*/
      slideLeft:5,           /*位置*/

      detailTab:['商品详情','使用指南','物流与售后'],    //详情导航
      curDetailTab:0,   //当前导航

      /*选择的sku*/
      choice:[],
      /*购买的sku*/
      buysku:{
        "id": '',
        "title": "",
        "specIdList": [],
        "stocks": '',
        "price": '',
        "promotionPrice": '',
        "fare": '',
        "salesVolume": '',
        "primary": '',
        "imageUrl": ""
      },
      /*购买或加入购物车数据*/
      buyData:{
        skuId:'',
        count:1,
      }
    }
  },
  computed:{
    goodsId(){
     let goodsId=this.$route.query.goodsId;
     return goodsId
    }
  },
  mounted(){
    this.axios.get("/api/goods/"+this.goodsId).then(response => {
      this.goodsDate=response.data.goodsView;
      this.follow=response.data.follow;
      this.goodsSpecList=response.data.goodsSpecList;
      this.goodsSpecUnitList=response.data.goodsSpecUnitList;
      this.imgPage=Math.ceil(this.goodsDate.imageList.length/4);
      this.limit_count=this.goodsDate.stocks
    }, response => {
      this.$layer.msg("获取商品失败");
      console.log(response.data);
    });
  },
  methods:{
    addCount () {
      this.buyData.count++
      if(this.buyData.count>this.goodsDate.stocks){
        this.buyData.count = this.goodsDate.stocks
        this.$layer.msg('超过库存');
      }
    },
    subCount () {
      this.buyData.count--
      if(this.buyData.count<1){
        this.buyData.count = 1
      }
    },
    prevImgPage(){
      if(this.curImgPage==1){
        return false
      }else{
        this.slideLeft=this.slideLeft-398;
        this.curImgPage--
      }
    },
    nextImgPage(){
      if(this.curImgPage==this.imgPage){
        return false
      }else{
        this.slideLeft=this.slideLeft+398
        this.curImgPage++
      }
    },
    choiceSku(index,id){

    }
  },
  watch:{
    buyData:{
      handler:function (val,oldval) {
        if(this.buyData.count>this.goodsDate.stocks){
          this.buyData.count=this.goodsDate.stocks
        }
      },
      deep:true
    }
  },

}
</script>

<style>
  .crumbs{
    margin-top: 20px;
    font-size: 14px;
    color: #999;
  }
  .crumbs span .icon{
    font-size: 12px;
    margin: 0 4px;
  }
  .crumbs span:last-child{
    color: #222;
  }
  .goodsDetail .item-box{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .goodsDetail .gallery-wrapper{
    width: 408px;
  }
  .goodsDetail .gallery-wrapper .thumb{
    width: 408px;
    height: 408px;
  }
  .goodsDetail .gallery-wrapper .thumb ul{
    width: 408px;
    height: 408px;
    border: 1px solid #d5d5d5;
    position: relative;
  }
  .goodsDetail .gallery-wrapper .thumb ul li{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    opacity: 0;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .goodsDetail .gallery-wrapper .thumb ul li img{
    width: 100%;
    height: 100%;
  }
  .goodsDetail .gallery-wrapper .thumb li.on {
    -webkit-animation: thumb-change .35s ease-out 1;
    animation: thumb-change .35s ease-out 1;
    position: relative;
    display: block;
    z-index: 1;
    opacity: 1;
  }
  .goodsDetail .gallery-wrapper .thumbnail{
    position: relative;
    margin-top: 24px;
  }
  .goodsDetail .gallery-wrapper .thumbnail .prev{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 6px 2px;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    left: -6px;
    z-index: 99;
    text-align: center;
    cursor: pointer;
  }
  .goodsDetail .gallery-wrapper .thumbnail .next{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 6px 2px;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    right: -6px;
    z-index: 99;
    text-align: center;
    cursor: pointer;
  }
  .goodsDetail .gallery-wrapper .thumbnail .prev .icon,.goodsDetail .gallery-wrapper .thumbnail .next .icon{
    font-size: 22px;
    font-weight: bold;
    line-height: 36px;
  }
  .goodsDetail .gallery-wrapper .thumbnail .prev:hover .icon{
    color: #b4a078;
  }
  .goodsDetail .gallery-wrapper .thumbnail .next:hover .icon{
    color: #b4a078;
  }
  .goodsDetail .gallery-wrapper .thumbnail .scroll-box{
    position: relative;
    width: 100%;
    height: 88px;
    overflow: hidden;
    padding: 0 5px;
    box-sizing: border-box;
  }
  .goodsDetail .gallery-wrapper .thumbnail .scroll-box ul{
    position: absolute;
    min-width: 398px;
  }
  .goodsDetail .gallery-wrapper .thumbnail .scroll-box ul li{
    width: 88px;
    height: 88px;
    float: left;
    background: #d5d5d5;
    margin: 0 6px;
    box-sizing: border-box;
  }
  .goodsDetail .gallery-wrapper .thumbnail .scroll-box ul li.on{
    border: 2px solid #b4a078;
  }
  .goodsDetail .gallery-wrapper .thumbnail .scroll-box ul li img{
    width: 100%;
    height: 100%;
  }
  .goodsDetail .goods-info{
    width: 792px;
    padding-left: 80px;
    box-sizing: border-box;
  }
  .goodsDetail .goods-info .info-title .title{
    font-size: 24px;
    color: #222222;
    line-height: 24px;
  }
  .goodsDetail .goods-info .info-title .title label{
    font-size: 12px;
    color: #fff;
    background: #b4a078;
    padding: 0 4px;
    border-radius: 3px;
    margin-left: 6px;
  }
  .goodsDetail .goods-info .info-title .subtitle{
    font-size: 14px;
    color: #999;
    line-height: 14px;
    margin-top: 16px;
  }
  .goodsDetail .goods-info .info-body{
    background-color: #f5f3ef;
    border-top: 1px dotted #dedede;
    border-bottom: 1px dotted #dedede;
    padding: 10px;
    line-height: 24px;
    font-size: 13px;
    position: relative;
    margin: 16px 0;
  }
  .goodsDetail .goods-info .info-body .price{
    height: 45px;
    margin-bottom: 5px;
    overflow: hidden;
  }
  .goodsDetail .goods-info .info-body .price p{
    font-size: 20px;
    font-weight: 700;
    margin-right: 1px;
    margin-left: 0;
    height: 30px;
    color: #d7282d;
  }
  .goodsDetail .goods-info .info-body li{
    margin-bottom: 8px;
  }
  .goodsDetail .goods-info .info-body label{
    display: inline-block;
    width: 100px;
    color: #666;
    float: left;
    font-size: 14px;
  }
  .goodsDetail .goods-info .info-body p{
    float: left;
    font-size: 14px;
    color: #333;
  }
  .goodsDetail .goods-info .info-body hr{
    margin: 10px 0px 10px 0px;
    overflow: hidden;
    border: none;
    height: 1px;
    border-bottom: 1px dashed #d2d2d2;
  }

  .goodsDetail .goods-info .sku-panel{
    padding-top: 8px;
  }
  .goodsDetail .goods-info .sku-panel .sku-params{
    margin-top: 16px;
  }
  .goodsDetail .goods-info .sku-panel .sku-params .params-name{
    width: 54px;
    float: left;
    font-size: 14px;
    line-height: 30px;
    color: #222;
  }
  .goodsDetail .goods-info .sku-panel .sku-params .params-tab{
    float: left;
    width: 658px;
  }
  .goodsDetail .goods-info .sku-panel .sku-params .params-tab li{
    float: left;
    position: relative;
    margin-right: 10px;
    margin-bottom: 15px;
    vertical-align: middle;
  }
  .goodsDetail .goods-info .sku-panel .sku-params .params-tab li a{
    border: 1px solid #ddd;
    float: left;
    cursor: pointer;
    position: relative;
    padding: 0 25px;
    line-height: 28px;
    font-size: 12px;
    color: #333;
    overflow: hidden;
  }
  .goodsDetail .goods-info .sku-panel .sku-params .params-tab li.on a{
    border: 2px solid #b4a078;
    color: #333;
    margin: -1px;
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

  .goodsDetail .operation-wrapper{
    margin-top: 30px;
  }
  .goodsDetail .operation-wrapper .btn{
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    padding: 0;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
    color: #b4a078;
    border: 1px solid #b4a078;
    background-color: #f5f3ef;
    width: 168px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  .goodsDetail .operation-wrapper .btn a{
    color: #b4a078;
    font-weight: normal;
  }
  .goodsDetail .operation-wrapper .btn.buy:hover{
    background: #fff;
  }
  .goodsDetail .operation-wrapper .btn.cat{
    border: 1px solid #b4a078;
    background-color: #b4a078;
  }
  .goodsDetail .operation-wrapper .btn.cat a{
    color: #fff;
  }
  .goodsDetail .operation-wrapper .btn.cat .icon{
    font-size: 20px;
    margin-right: 4px;
  }
  .goodsDetail .operation-wrapper .btn.cat:hover{
    border: 1px solid #c0ae8a;
    background-color: #c0ae8a;
  }
  .goodsDetail .operation-wrapper .btn.follow{
    width: 53px;
    line-height: 20px;
    padding-top: 6px;
    background: #fff;
    border-color:#d5d5d5;
  }
  .goodsDetail .operation-wrapper .btn.follow a{
    font-size: 12px;
    line-height: 12px;
    color: #999;
  }
  .goodsDetail .operation-wrapper .btn.follow .icon{
    font-size: 20px;
  }
  .goodsDetail .operation-wrapper .btn.follow.active{
    border-color:#b4a078;
  }
  .goodsDetail .operation-wrapper .btn.follow.active a{
    color: #b4a078;
  }
  .goodsDetail .operation-wrapper .btn.follow.active .icon-shoucang:before{
    content: '\e613';
  }
  .goodsDetail .detail-panel .detail-tab{
    border-bottom: 2px solid #b4a078;
  }
  .goodsDetail .detail-panel .detail-tab li{
    float: left;
    width: 140px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: #222;
    line-height: 36px;
  }
  .goodsDetail .detail-panel .detail-tab li:hover{
    background: #f5f3ef;
  }
  .goodsDetail .detail-panel .detail-tab li.cur{
    background: #b4a078;
    color: #fff;
  }
  .tab-content{
    padding: 30px 0;
  }
</style>
