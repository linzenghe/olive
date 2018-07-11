<template>
  <div class="customer-content">
    <div class="customer-order">
      <div class="order-header clear">
        <a>{{tabActive}}</a>
        <ul class="order-tab">
          <li class="item" v-for="item in tabNav" :class="tabActive==item.status?'active':''"><router-link :to="{'name':'Order',query:{'status':item.status}}">{{item.name}}</router-link></li>
        </ul>
        <div class="order-search">
          <input class="search-input" placeholder="请输入订单号" type="text">
          <span class="del"></span>
          <button class="searchBtn">搜索</button>
        </div>
      </div>
      <div class="order-items">
        <table class="order-item">
          <colgroup>
            <col width="620px">
            <col width="150px">
            <col width="130px">
          </colgroup>
          <thead>
            <tr>
              <th colspan="3">
                <span class="dealtime">下单时间：2018-06-26 12:12:12</span>
                <span class="orderNum">订单号：1232312313</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="packageItem">
                  <div class="good">
                    <a class="link">
                      <img src="" width="100px" height="100px">
                    </a>
                  </div>
                  <div class="express">
                    <div class="cell">
                      <p>共4件商品</p>
                    </div>
                  </div>
                  <div class="status">
                    <div class="cell">
                      <p>已取消</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="cost">
                  <p class="price">￥12.12</p>
                  <p class="fee">（含运费：￥10.00）</p>
                </div>
              </td>
              <td>
                <div class="f-txtcenter">
                  <a class="w-link">查看详情</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="order-item">
          <colgroup>
            <col width="620px">
            <col width="150px">
            <col width="130px">
          </colgroup>
          <thead>
          <tr>
            <th colspan="3">
              <span class="dealtime">下单时间：2018-06-26 12:12:12</span>
              <span class="orderNum">订单号：1232312313</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="packageItem">
                <div class="good">
                  <a class="link">
                    <img src="" width="100px" height="100px">
                    <img src="" width="100px" height="100px">
                    <img src="" width="100px" height="100px">
                  </a>
                </div>
                <div class="express">
                  <div class="cell">
                    <p>共4件商品</p>
                  </div>
                </div>
                <div class="status">
                  <div class="cell">
                    <p>已取消</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="cost">
                <p class="price">￥12.12</p>
                <p class="fee">（含运费：￥10.00）</p>
              </div>
            </td>
            <td>
              <div class="f-txtcenter">
                <a class="w-link">查看详情</a>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabNav:[{status:'',name:'全部订单'},{status:'-1',name:'已取消'},{status:'0',name:'待支付'},{status:'1',name:'待发货'},{status:'2',name:'待收货'},{status:'3',name:'已完成'}],
      tabActive:''
    }
  },
  computed:{
    tabStatus(){
      this.tabActive=this.$route.query.status
    },
  },
  mounted(){
    /*获取订单*/
    this.tabStatus;
    /*data.status=this.$route.query.status;
    this.axios.post("/api/order/list",{}).then(response => {
      this.goodsList=response.data.list;
      this.total=response.data.count;
    }, response => {
      this.$layer.msg("搜索失败");
      console.log(response.data);
    });*/
  }
}
</script>

<style>
  .customer-order .order-header .order-tab{
    float: left;
    border-bottom: 2px solid #eaeaea;
  }
  .customer-order .order-header .order-tab .item{
    float: left;
    width: 100px;
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
    padding-right: 4px;
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
  .order-items{
    margin-top: 24px;
  }
  .order-items .order-item{
    border: 1px solid #e8e8e8;
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;
  }
  .order-items .order-item thead tr{
    background-color: #f5f5f5;
    height: 43px;
  }
  .order-items .order-item thead th{
    text-align: left;
    font-weight: normal;
  }
  .order-items .order-item thead .dealtime{
    float: left;
    margin-left: 20px;
    width: 265px;
  }
  .order-items .order-item thead .orderNum{
    float: left;
  }
  .order-items .order-item tbody tr{
    border: 1px solid #e8e8e8;
  }
  .order-items .order-item tbody td{
    padding: 20px 0;
    border-right: 1px solid #e8e8e8;
  }
  .order-items .order-item tbody .packageItem{
    overflow: hidden;
  }
  .order-items .order-item tbody .packageItem .good{
    float: left;
    margin-left: 20px;
    width: 338px;
    position: relative;
  }
  .order-items .order-item tbody .packageItem .good .link{
    float: left;
    position: relative;
  }
  .order-items .order-item tbody .packageItem .good img{
    width: 100px;
    height: 100px;
    background-color: #f4f4f4;
    margin-right: 10px;
    float: left;
  }
  .order-items .order-item tbody .packageItem .express{
    float: left;
    width: 130px;
    text-align: center;
    display: table;
    height: 100px;
  }
  .order-items .order-item tbody .packageItem .express .cell{
    display: table-cell;
    vertical-align: middle;
  }
  .order-items .order-item tbody .packageItem .express .cell p{
    font-size: 14px;
    color: #333;
  }
  .order-items .order-item tbody .packageItem .status{
    float: left;
    width: 130px;
    text-align: center;
    display: table;
    height: 100px;
  }
  .order-items .order-item tbody .packageItem .cell{
    vertical-align: middle;
    display: table-cell;
  }
  .order-items .order-item tbody .packageItem .cell p{
    font-size: 14px;
    color: #333;
  }
  .order-items .order-item tbody .cost{
    text-align: center;
  }
  .order-items .order-item tbody .cost .price{
    font-size: 14px;
    font-weight: 700;
  }
  .order-items .order-item tbody .cost .fee{
    margin-top: 3px
  }
  .order-items .order-item tbody .f-txtcenter{
    text-align: center;
  }
  .order-items .order-item tbody .f-txtcenter .w-link{
    color: #69c;
  }
</style>
