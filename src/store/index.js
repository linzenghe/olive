import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
/*第二步创建一个store*/
let store = new Vuex.Store({
  state:{
    resLogShow:false,   //登陆注册框
    logShow:false,      //登陆面板
    regShow:false,      //注册面板
    carShow:false,       //显示购物车
    searchShow:false,       //显示搜索框
    loginStatue:false,      //登录状态
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

  }
});

/*第三步，将store暴露*/
export default store
