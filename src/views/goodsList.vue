<template>
  <div id="goodsList" class="container goodsList">
    <div class="crumbs"><span>搜索结果<i class="icon icon-you"></i></span><span>关键字</span></div>
    <div class="category-h">
      <div class="category-b">
        <div class="cate-items">
          <div class="cate-item cate clear">
            <label class="fl">类别</label>
            <ul class="fl cateList">
              <li>二级类别1</li>
              <li>二级类别2</li>
              <li>二级类别3</li>
            </ul>
          </div>
          <div class="cate-item add clear">
            <label class="fl">产地</label>
            <ul class="fl cateList">
              <li>产地名称1</li>
              <li>产地名称2</li>
              <li>产地名称3</li>
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
            <p>搜索到<span>200</span>条相似结果</p>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-items">
      <!--<goodsItem v-for="(item,index) in homeData.goodsList"  :key='index' :item='item'></goodsItem>-->
    </div>
    <pagination :page-no="pageNo" :current.sync="currentPage"></pagination>
  </div>
</template>

<script>
import goodsItem from '@/components/goods-item'
import pagination from '@/components/pagination'
export default {
  data(){
    return {
      currentPage: 1,
      pageNo:10,
    }
  },
  components: {
    goodsItem,
    pagination
  },
  mounted(){

  },
  watch: {
    currentPage: 'requestData'
  },
  ready(){
    this.requestData()
  },
  methods:{
    requestData(){

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
</style>
