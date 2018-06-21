import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*第二步创建一个store*/
let store = new Vuex.Store({
  state:{
    /*存放数据*/
    /*carPanelData : [],
    /!*是否为最大值*!/
    maxOff : false,
    /!*控制隐藏显示*!/
    carShow : false,
    ball:{
      show : false,   //显示
      el : null,     //点击哪一个
      img : ''
    }*/
    resLogShow:false,
    logShow:false,
    regShow:false
  },
  /*计算*/
  getters:{
    /*totalCount(state){
      let count=0
      state.carPanelData.forEach(goods=>{
        count+=goods.count
      })
      return count
    },
    /!*价格*!/
    totalPrice(state){
      let price=0
      state.carPanelData.forEach(goods=>{
        price+=goods.count*goods.info.price
      })
      return price
    }*/
  },
  mutations: {
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
    }
    /*addCarpanelData(state,data){
      state.carShow=true
      /!*bOff是否添加过*!/
      let bOff=true
      state.carPanelData.forEach((goods)=>{
        if(goods.info.sku_id === data.info.sku_id){
          goods.count+=data.count
          if(goods.count > goods.info.limit_num){
            goods.count=goods.count-data.count
            state.maxOff=true
            bOff=false
            return
          }
          bOff=false
          /!*更改小球状态*!/
          state.ball.show = true
          state.ball.img = data.info.ali_image
          state.ball.el = event.path[0]
        }
      })
      if(bOff){
        let goodsData=data
        Vue.set(goodsData,'count',data.count)
        state.carPanelData.push(goodsData)
        /!*更改小球状态*!/
        state.ball.show = true
        state.ball.img = data.info.ali_image
        state.ball.el = event.path[0]
      }
    },
    delCarpanelData(state,id){
      state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id===id){
          state.carPanelData.splice(index,1)
          return
        }
      })
    },
    /!*关闭提示*!/
    closePrompt(state){
      state.maxOff=false
    },
    /!*显示购物车*!/
    showCar(state){
      state.carShow=true
    },
    hideCar(state){
      state.carShow=false
    },

    /!*增加*!/
    plusCartPanelData(state,id){
      state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id===id){
          if(goods.sku_id>=goods.limit_num) return
          goods.count++
          return
        }
      })
    },
    /!*减少*!/
    subCartPanelData(state,id){
      state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id===id){
          if(goods.count<=1) return
          goods.count--
          return
        }
      })
    }*/
  }
})

/*第三步，将store暴露*/
export default store
