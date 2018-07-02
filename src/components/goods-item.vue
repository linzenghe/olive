<template>
  <div class="goods-item">
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
</template>

<script>
  export default {
    data(){
      return {
        itemIndex:0
      }
    },
    /*接受参数*/
    props: {
      item: Object
    },
    methods: {

    }
  }
</script>
<style>
  .goods-item{
    width: 25%;
    padding:0 12px;
    float: left;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .goods-item .imageBox{
    display: block;
    width: 100%;
    height: 282px;
    background: #D8D8D8;
    border: 1px solid #979797;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.24);
  }
  .goods-item .info{
    padding-top: 22px;
  }
  .goods-item .info h5{
    font-size: 16px;
    color: #222222;
    line-height: 16px;
  }
  .goods-item .info .sub-info{
    margin-top: 14px;
  }
  .goods-item .info .sub-info .labels{
    float: left;
    width: 200px;

  }
  .goods-item .info .sub-info .labels li{
    font-size: 12px;
    color: #fff;
    display: inline-block;
    background: #b4a078;
    padding:0 4px;
    border-radius: 3px;
    margin-right: 4px;
  }
  .goods-item .info .sub-info .price{
    float: right;
    font-size: 16px;
    color: #d4282d;
  }
</style>
