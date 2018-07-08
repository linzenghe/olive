import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import layer from 'vue-layer'
import {setCookie,getCookie,delCookie} from '../assets/js/cookie'

Vue.prototype.axios = axios

Vue.prototype.$layer = layer(Vue);

Vue.use(Vuex)
/*第二步创建一个store*/
let store = new Vuex.Store({
  state:{
    resLogShow:false,   //登陆注册框
    logShow:false,      //登陆面板
    regShow:false,      //注册面板
    carShow:false,      //显示购物车
    searchShow:false,       //显示搜索框

    loginStatus:false,      //登录状态
    userInfo:{              //用户信息
      username:'',
      portraitUrl:''
    },

    /*购物车数量*/
    cartInfo:{
      count:0
    },
    /*购物车信息*/
    cartData:{
      cartView:{'amount':'','count':0},
      change: 0,
      cartItemListView:{
        'list':'',
        'count':''
      }
    },
  },
  /*计算*/
  getters:{

  },
  mutations: {
    /*登陆注册*/
    showLog(state){
      state.resLogShow=true
      state.logShow=true
    },
    showReg(state){
      state.resLogShow=true
      state.regShow=true
    },
    hideResLog(state){
      state.resLogShow=false
      state.logShow=false
      state.regShow=false
    },
    gotoLog(state){
      state.logShow=true
    },
    gotoReg(state){
      state.regShow=true
    },
    /*显示隐藏购物车*/
    showCar(state){
      state.carShow=true
    },
    hideCar(state){
      state.carShow=false
    },
    /*显示隐藏搜索框*/
    showSearch(state){
      state.searchShow=true
    },
    hideSearch(state){
      state.searchShow=false
    },
    /*发送验证码*/
    sendCode(state){

    },
    /*获取登录cookie*/
    getCookie(state){
      if(getCookie('userInfo')){
        let uInfo = JSON.parse(getCookie('userInfo'));
        state.userInfo=uInfo;
        state.loginStatus=true;
      }else{
        state.loginStatus=false;
      }
    },
    /*删除cookie*/
    delCookie(state){
      state.userInfo={username:'', portraitUrl:'',};
      state.loginStatus=false;
      delCookie('userInfo');
    },

    /*获取购物车数量*/
    getCarSum(state){
      axios.get("/api/cart/info").then(response => {
        state.cartInfo=response.data;
      }, response => {
        console.log(response.data);
      });
    },
    /*获取购物车*/
    getCartData(state){
      axios.get("/api/cart/current").then(response => {
        state.cartData=response.data;
        state.cartInfo.count=state.cartData.cartView.count;
        // console.log(state.cartData);
      }, response => {
        layer(Vue).msg('获取购物车失败');
        console.log(response.data);
      });
    },
    /*加入购物车*/
    addCartData(state,data){
      axios.post("/api/cart/add",data).then(response => {
        store.commit('getCartData');
        state.carShow=true;
      }, response => {
        layer(Vue).msg('加入购物车失败');
        console.log(response.data);
      });
    },
    /*删除商品*/
    delCartData(state,id){
      axios.delete("/api/cart/delete/"+id).then(response => {
        state.cartData.cartItemListView.list.forEach((goods,index)=>{
          if(goods.id==id){
            state.cartData.cartItemListView.list.splice(index,1)
          }
        })
        state.cartInfo.count=response.data.count;
        state.cartData.cartView.amount=response.data.amount;
      }, response => {
        layer(Vue).msg('删除失败');
        console.log(response.data);
      });
    },
    /*编辑购物车*/
    editCartCount(state,stark){
      axios.put("/api/cart/edit",stark).then(response => {
        state.cartData.cartItemListView.list.forEach((goods,index)=>{
          if(goods.id==response.data.cartItem.id){
            state.cartData.cartItemListView.list[index].count=response.data.cartItem.count
          }
        })
      }, error => {
        layer(Vue).msg(error.response.data.message);
      });
    }
  }
});

/*第三步，将store暴露*/
export default store
