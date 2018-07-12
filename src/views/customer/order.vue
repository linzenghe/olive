<template>
  <div class="customer-content">
    <div class="customer-order">
      <div class="order-header clear">
        <ul class="order-tab">
          <li class="item" v-for="item in tabNav" :class="orderStatusDate.status==item.status?'active':''">
            <a @click="orderStatus(item.status)">{{item.name}}</a>
          </li>
        </ul>
        <div class="order-search">
          <input class="search-input" placeholder="请输入订单号" type="text">
          <span class="del"></span>
          <button class="searchBtn">搜索</button>
        </div>
      </div>
      <div class="order-items">
        <table class="order-item" v-for="(item,index) in list">
          <colgroup>
            <col width="620px">
            <col width="150px">
            <col width="130px">
          </colgroup>
          <thead>
            <tr>
              <th colspan="3">
                <span class="dealtime">下单时间：{{item.createTime}}</span>
                <span class="orderNum">订单号：{{item.number}}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="packageItem">
                  <div class="good">
                    <a class="link" v-for="goods in item.list">
                      <img :src="goods.bannerUrl" width="100px" height="100px">
                    </a>
                  </div>
                  <div class="express">
                    <div class="cell">
                      <p>共{{item.count}}件商品</p>
                    </div>
                  </div>
                  <div class="status">
                    <div class="cell">
                      <p v-if="item.status==-1">已取消</p>
                      <p v-else="item.status==0">待支付</p>
                      <p v-else="item.status==1">待发货</p>
                      <p v-else="item.status==2">待收货</p>
                      <p v-else="item.status==3">已完成</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="cost">
                  <p class="price">￥{{item.totalAmount}}</p>
                  <p class="fee">（含运费：￥{{item.fareAmount}}）</p>
                </div>
              </td>
              <td>
                <div class="f-txtcenter">
                  <a class="w-link" @click="gotoDetail(item.number)">查看详情</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange" v-if="list.length!=0"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
export default {
  data(){
    return{
      tabNav:[{status:'',name:'全部订单'},{status:'-1',name:'已取消'},{status:'0',name:'待支付'},{status:'1',name:'待发货'},{status:'2',name:'待收货'},{status:'3',name:'已完成'}],
      tabActive:'',
      list:[],
      total:0,
      current:1,  /*当前页*/
      display:1, /*每页显示10条订单*/

      urlQuery:{},
      orderStatusDate:{
        status:"",pageIndex:"0",pageSize:"1"
      },
    }
  },
  computed:{
    tabStatus(){
      this.urlQuery=this.$route.query;
      for(let i in this.urlQuery){
        if(i=='pageIndex'){
          this.current=parseInt(this.urlQuery[i])+1;
          this.orderStatusDate[i]=this.urlQuery[i];
        }
        this.orderStatusDate[i]=this.urlQuery[i];
      }
    },
  },
  components: {
    pagination,
  },
  mounted(){
    /*获取订单*/
    this.tabStatus;
    this.axios.post("/api/order/list",this.orderStatusDate).then(response => {
      this.list=response.data.list;
      this.total=response.data.count;
      console.log(this.list);
    }, error => {
      this.$layer.msg("获取订单失败");
      console.log(error.response.data);
    });
  },
  methods:{
    pagechange(currentPage){
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      this.orderStatusDate.pageIndex=currentPage-1;
      this.getPageDate();
      this.$router.push({name:'Order',query:{'status':this.orderStatusDate.status,pageIndex:this.orderStatusDate.pageIndex}});
    },
    getPageDate(){
      this.axios.post("/api/order/list",this.orderStatusDate).then(response => {
        this.list=response.data.list;
        this.total=response.data.count;
      }, error => {
        this.$layer.msg("获取订单失败");
        console.log(error.response.data);
      });
    },
    orderStatus(status){
      this.orderStatusDate.status=status;
      this.getPageDate();
      this.$router.push({name:'Order',query:{'status':status}});
    }
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
