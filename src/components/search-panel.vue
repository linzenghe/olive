<template>
  <li class="nav-item search-item" @mouseenter="searchShowhandle" @mouseleave="searchHidehandle">
    <i class="icon icon-sousuo"></i>
    <div class="search-wrapper" v-show="searchShow">
      <div class="search">
        <div class="search-box">
          <input placeholder="输入搜索内容" type="search">
          <span class="del"><i class="icon icon-close"></i></span>
        </div>
        <button class="search-btn"><i class="icon icon-sousuo"></i></button>
      </div>
      <div class="search-history">
        <div class="clear title"><span class="fl">最近搜索</span><i class="icon icon-del fr"></i></div>
        <ul>
          <li>骑士</li>
          <li>勇士</li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    computed:{
      searchShow(){
        return this.$store.state.searchShow
      }
    },
    methods:{
      searchShowhandle(){
        this.$store.commit('showSearch')
      },
      searchHidehandle(){
        this.$store.commit('hideSearch')
      },
    }

  }
</script>
<style>
  .search-item{
    position: relative;
  }
  .search-wrapper{
    position: absolute;
    right: 0;
    top: 54px;
    width: 300px;
    z-index: 99;
    overflow: visible;
    background: #fff;
    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, .06), 0 20px 40px rgba(0, 0, 0, .15);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .06), 0 20px 40px rgba(0, 0, 0, .15);
    padding: 10px;
    box-sizing: border-box;
    cursor: default;
  }
  .search-wrapper:before{
    content: '';
    position: absolute;
    right: 6px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    top: -8px;
    border-bottom: 8px solid rgba(0, 0, 0, .06);
  }
  .search-wrapper:after{
    content: '';
    position: absolute;
    right: 6px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    top: -6px;
    border-bottom: 8px solid #fff;
  }
  .search-wrapper .search{
    position: relative;
    padding-right: 42px;
  }
  .search-wrapper .search .search-box{
    border: 1px solid #eaeaea;
    line-height: 36px;
    width: 100%;
    padding:0 10px;
    position: relative;
    box-sizing: border-box;
  }
  .search-wrapper .search .search-box input{
    width: 100%;
    -webkit-appearance:none;
  }
  .search-wrapper .search .search-box input::-webkit-search-cancel-button{
    display: none;
  }
  .search-wrapper .search .search-box .icon{
    position: absolute;
    top: 0px;
    right: 6px;
    font-size: 16px!important;
    cursor: pointer;
  }
  .search-wrapper .search .search-btn{
    position: absolute;
    right: 0;
    top: 0;
    height: 38px;
    line-height: 38px;
  }
  .search-wrapper .search-history{
    max-height: 200px;
    padding: 8px 0 0;
    position: relative;
  }
  .search-wrapper .search-history:before{
    content: '';
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
  }
  .search-wrapper .search-history .title{
    font-size: 14px;
    color: #999;
    line-height: 14px;
    margin-top: 8px;
  }
  .search-wrapper .search-history .title .icon{
    font-size: 14px;
    cursor: pointer;
    color: #999;
  }
  .search-wrapper .search-history ul{
    line-height: normal;
    margin-top: 8px;
  }
  .search-wrapper .search-history ul li{
    font-size: 13px;
    line-height: 24px;
    color: #333;
    cursor: pointer;
    padding: 0 4px;
  }
  .search-wrapper .search-history ul li:hover{
    background: #e5e5e5;
  }
</style>
