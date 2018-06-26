<template>
  <div class="customer-content">
    <div class="customer-order">
      <div class="order-header clear">
        <ul class="order-tab">
          <li class="item active"><a>全部订单</a></li>
          <li class="item"><a>待付款</a></li>
          <li class="item"><a>待发货</a></li>
          <li class="item"><a>已发货</a></li>
          <li class="item"><a>待评价</a></li>
        </ul>
        <div class="order-search">
          <input class="search-input" placeholder="请输入订单号" type="text">
          <span class="del"></span>
          <button class="searchBtn">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.customer-order .order-header .order-tab{
  float: left;
  border-bottom: 2px solid #eaeaea;
}
.customer-order .order-header .order-tab .item{
  float: left;
  width: 110px;
  padding: 10px 0;
  height: 40px;
  font-weight: 900;
  font-size: 16px;
  color: #333;
  margin-bottom: -2px;
  box-sizing: border-box;
}
.customer-order .order-header .order-tab .item a{
  display: block;
  font-size: 16px;
  height: 18px;
  line-height: 1;
  border-left: 1px solid #eaeaea;
  text-align: center;
}
.customer-order .order-header .order-tab .item:first-child a{
  border: none;
}
.customer-order .order-header .order-tab .item.active{
  border-bottom: 2px solid #b4a078;
}
.customer-order .order-header .order-tab .item.active a{
  color: #b4a078;
}
.customer-order .order-header .order-search{
  width: 250px;
  float: right;
  margin-top: 10px;
  font-size: 13px;
}
.customer-order .order-header .order-search .search-input{
  width: 200px;
  height: 28px;
  border: 1px solid #ddd;
  display: inline-block;
  float: left;
  padding-left: 12px;
  box-sizing: border-box;
}
.customer-order .order-header .order-search .searchBtn{
  width: 50px;
  height: 28px;
  margin-left: -1px;
  border: 1px solid #ddd;
  border-radius: 0;
  display: inline-block;
  float: left;
  background: #F5F5F5;
}
.customer-order .order-header .order-search .searchBtn:hover{
  background: #e5e5e5;
}
</style>
