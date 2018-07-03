<template>
  <li class="nav-item search-item" ref="search" @click="searchShowhandle">
    <i class="icon icon-sousuo"></i>
    <div class="search-wrapper" id="search-wrapper" v-show="searchShow">
      <div class="search">
        <div class="search-box">
          <input placeholder="输入搜索内容" v-model="keyword" type="search">
          <span class="del"><i class="icon icon-close" v-show="focus" @click="delKey"></i></span>
        </div>
        <button class="search-btn" @click.stop="search(keyword)"><i class="icon icon-sousuo"></i></button>
      </div>
      <div class="search-history" v-if="searchLog.length!=0">
        <div class="clear title"><span class="fl">最近搜索</span><i class="icon icon-del fr" @click="delHistory"></i></div>
        <ul>
          <li v-for="item in searchLog" @click.stop="historySearch(item.log)">{{item.log}}</li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
  import {setCookie,getCookie,delCookie} from '../assets/js/cookie'
  export default {
    data(){
      return{
        keyword:'',
        focus:false,
        searchLog:[]
      }
    },
    computed:{
      searchShow(){
        return this.$store.state.searchShow
      }
    },
    methods:{
      searchShowhandle(){
        this.$store.commit('showSearch');
      },
      searchHidehandle(){
        this.$store.commit('hideSearch');
      },
      delKey(){
        this.keyword=''
      },
      /*查询*/
      search(keyword){
        this.$store.commit('hideSearch');
        let logJson={};
        if(keyword==''){
          this.$router.push({name:'search',query:{keyword:''}});
        }else{
          keyword=keyword.replace(/(^\s*)|(\s*$)/g, "");
          logJson.log=keyword;
          for(var i in this.searchLog){
            if(this.searchLog[i].log==keyword){
              this.searchLog.splice(i, 1)
            }
          }
          this.searchLog.splice(0,0,logJson);
          if(this.searchLog.length>6){
            this.searchLog.splice(6,this.searchLog.length);
          }
          setCookie('searchLog',JSON.stringify(this.searchLog),1000*60);
          this.$router.push({name:'search',query:{keyword:keyword}});
        }
      },
      historySearch(historylog){
        this.$store.commit('hideSearch');
        let logJson={};
        logJson.log=historylog;
        for(var i in this.searchLog){
          if(this.searchLog[i].log==historylog){
            this.searchLog.splice(i, 1)
          }
        }
        this.searchLog.splice(0,0,logJson);
        if(this.searchLog.length>6){
          this.searchLog.splice(6,this.searchLog.length);
        }
        setCookie('searchLog',JSON.stringify(this.searchLog),1000*60);
        this.$router.push({name:'search',query:{keyword:historylog}});
      },
      /*删除历史记录*/
      delHistory(){
        this.searchLog=[];
        delCookie('searchLog');
      }
    },
    watch:{
      keyword:{
        handler:function(){
          if(this.keyword==''){
            this.focus=false
          }else{
            this.focus=true
          }
        }
      }
    },
    mounted(){
      /*页面挂载获取cookie，如果存在查询的cookie*/
      if(getCookie('searchLog')){
        let history=JSON.parse(getCookie('searchLog'));
        if(history.length>6){
          history.splice(6,history.length);
        }
        this.searchLog=history;
      }
      let _this=this;
      document.addEventListener('click',function (e) {
        if(!!_this.$refs.search.contains(e.target)) return
          _this.$store.commit('hideSearch');

      })
    },
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
    padding:0 20px 0 10px;
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
    overflow-y: auto;
  }
  .search-wrapper .search-history ul li{
    font-size: 13px;
    line-height: 24px;
    color: #333;
    cursor: pointer;
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .search-wrapper .search-history ul li:hover{
    background: #e5e5e5;
  }
</style>
