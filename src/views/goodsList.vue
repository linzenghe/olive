<template>
  <div id="goodsList" class="container goodsList">
    <div class="crumbs"><span>搜索结果<i class="icon icon-you"></i></span><span>{{searchKeyword?searchKeyword:'全部'}}</span></div>
    <div class="category-h">
      <div class="category-b">
        <div class="cate-items">
          <div class="cate-item cate clear">
            <label class="fl">类别</label>
            <ul class="fl cateList">
              <li v-for="item in cate" @click="cateSearch(item.name)" :class="searchDate.level==item.name?'active':''">{{item.name}}</li>
            </ul>
          </div>
          <div class="cate-item add clear">
            <label class="fl">产地</label>
            <ul class="fl cateList">
              <li v-for="item in add" @click="originSearch(item.name)" :class="searchDate.origin==item.name?'active':''">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="sort clear">
          <div class="fl sort-left">
            <label class="fl">排序</label>
            <ul class="sort_list">
              <li class="default">默认</li>
              <li class="price">价格<i class="icon icon-shengxu"></i><i class="icon icon-jiangxu"></i></li>
              <li class="priceRange">
                <div class="priceInput start fl">
                  <input class="">
                  <i>￥</i>
                </div>
                <span class="fl">-</span>
                <div class="priceInput end fl">
                  <input class="">
                  <i>￥</i>
                </div>
                <div class="submit fl">
                  <button>确定</button>
                  <a>清空</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="fr sort-right">
            <p>搜索到<span>{{total}}</span>条相似结果</p>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-items clear">
      <goodsItem v-for="(item,index) in goodsList"  :key='index' :item='item'></goodsItem>
    </div>
    <div class="noResult" v-if="goodsList.length==0">
      <p class="tip">未搜索到结果</p>
    </div>
    <pagination :total="total" :current-page='current' @pagechange="pagechange" v-if="goodsList.length!=0"></pagination>
  </div>
</template>

<script>
import goodsItem from '@/components/goods-item'
import pagination from '@/components/pagination'
export default {
  data(){
    return {
      total: 150,     // 记录总条数
      display: 10,    // 每页显示条数
      current: 1,     // 当前的页数
      goodsList:[],   // 商品数据
      url:{},         // 当前路由
      /*类别*/
      cate:[{name:'一级A货'},{name:'二级B货'},{name:'三级C货'}],
      /*产地*/
      add:[{name:'中国'},{name:'法国'},{name:'西班牙'}],
      /*搜索参数*/
      searchDate:{
        content: '',      //内容
        categoryId: '',    //品类id
        level: '',         //品类等级
        origin: '',        //产地
        salesVolume: '',   //销量排序
        recommend: '',     //推荐
        price: '',         //价格排序
        startPrice: '',    //起始价格
        endPrice: '',      //最高价格
        pageIndex: 0,    //起始页
        pageSize: 10,    //个数
      }
    }
  },
  computed:{
    searchKeyword(){
      let searchKeyword='';
      this.searchDate.content=this.$route.query.keyword;
      this.url=this.$route.query;
      return searchKeyword=this.$route.query.keyword;
    }
  },
  components: {
    goodsItem,
    pagination,
  },
  mounted(){
    this.axios.post("/api/goods/search",this.searchDate).then(response => {
      this.goodsList=response.data.list;
      this.total=response.data.count;
    }, response => {
      this.$layer.msg("搜索失败");
      console.log(response.data);
    });
  },
  methods:{
    pagechange(currentPage){
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      this.searchDate.pageIndex=currentPage-1;
      this.axios.post("/api/goods/search",this.searchDate).then(response => {
        this.goodsList=response.data.list;
        this.total=response.data.count;
      }, response => {
        this.$layer.msg("获取数据失败");
        console.log(response.data);
      });
    },
    cateSearch(cateName){
      this.url.level=cateName;
      console.log(this.url);
      this.$router.push({name:'search',query:this.url});
    },
    originSearch(originName){
      console.log(originName)
    }
  }

}
</script>

<style>
  .goodsList{
    padding-bottom: 50px;
  }
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
  .goodsList .category-h .cate-items{
    margin-top: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  .goodsList .category-h .cate-item{
    margin-bottom: 8px;
  }
  .goodsList .category-h .cate-item:last-child{
    margin-bottom: 0;
  }
  .goodsList .category-h .cate-item label{
    font-size: 14px;
    color: #999;
    display: inline-block;
    width: 115px;
  }
  .goodsList .category-h .cate-item .cateList{
    width: 1085px;
  }
  .goodsList .category-h .cate-item .cateList li{
    float: left;
    color: #222;
    margin-right: 40px;
    margin-bottom: 8px;
    cursor: pointer;
  }
  .goodsList .category-h .cate-item .cateList li.active{
    color: #b4a078;
  }
  .goodsList .category-h .sort{
    margin-bottom: 16px;
  }
  .goodsList .category-h .sort .sort-left .sort_list {
    float: left;
  }
  .goodsList .category-h .sort .sort-left>label{
    font-size: 14px;
    color: #999;
    display: inline-block;
    width: 115px;
    line-height: 26px;
  }
  .goodsList .category-h .sort .sort-left .sort_list li{
    float: left;
    margin-right: 30px;
    color: #222;
    cursor: pointer;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.default{
    line-height: 26px;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.price{
    position: relative;
    padding-right: 20px;
    line-height: 26px;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.price .icon{
    font-size: 12px;
    position: absolute;
    line-height: 13px;
    color: #999;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.price .icon-shengxu{
    top: 2px;
    right: 0;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.price .icon-jiangxu{
    bottom: 2px;
    right: 0;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange .priceInput{
    width: 64px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 2px 2px 2px 16px;
    position: relative;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange .priceInput input{
    width: 100%;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange .priceInput i{
    position: absolute;
    left: 1px;
    top: 0;
    line-height: 26px;
    color: #999;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange>span{
    line-height: 26px;
    margin: 0 8px;
    color: #999;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange .submit{
    line-height: 26px;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange .submit button{
    padding: 2px 6px;
    vertical-align: middle;
    letter-spacing: normal;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    border: none;
    background-color: #b4a078;
    margin-left: 8px;
  }
  .goodsList .category-h .sort .sort-left .sort_list li.priceRange .submit>a{
    line-height: 26px;
    margin-left: 4px;
  }
  .goods-items{
    margin-left: -12px;
    margin-right: -12px;
    padding-top: 8px;
  }
  .noResult{
    padding: 0 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .noResult .tip{
    margin-top: 56px;
    margin-bottom: 56px;
    font-size: 16px;
    font-weight: normal;
  }
</style>
