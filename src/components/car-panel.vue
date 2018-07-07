<template>
  <li class="nav-item cart-item" ref="cartpanel" @mouseenter="carShowhandle" @mouseleave="carHidehandle">
    <i class="icon icon-gouwuche"></i>
    <span class="sum">{{cartInfo.count==null?'0':cartInfo.count}}</span>
    <div class="nav-cart-wrapper" v-if="carShow">
      <div class="nav-cart-list">
        <div class="empty" v-if="carGoodsData.cartItemListView==null||carGoodsData.cartItemListView.list.length==0">
          <i class="icon icon-gouwuche"></i>
          <h3>购物车还是空滴</h3>
          <p>您还没有选购任何商品</p>
        </div>
        <div class="full" v-if="carGoodsData.cartItemListView!=null&&carGoodsData.cartItemListView.list.length!=0">
          <div class="nav-cart-items">
            <div class="cart-item-sell clear" v-for="item in carGoodsData.cartItemListView.list">
              <div class="item-thumb">
                <router-link :to="{name: 'goods', query: {goodsId:item.goodsId}}"><img :src="item.bannerUrl"></router-link>
              </div>
              <div class="item-desc">
                <p class="title"><router-link :to="{name: 'goods', query: {goodsId:item.goodsId}}">{{item.goodsName}}</router-link></p>
                <p class="subTitle clear"><span class="fl cate">{{item.goodsSubtitle}}</span><span class="fl count">x{{item.count}}</span><span class="fr price">￥{{item.promotionPrice}}</span></p>
              </div>
              <div class="del-btn" @click.stop="delCartGoods(item.id)">
                <i class="icon icon-close"></i>
              </div>
            </div>
          </div>
          <div class="nav-cart-total">
            <div class="totalPrice">
              <p>商品合计: <span class="price">￥{{carGoodsData.cartView.amount}}</span></p>
            </div>
            <div class="gotoCart">
              <router-link class="gotoCartBtn" to="/cart">去购物车结算</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    carShow(){
      return this.$store.state.carShow
    },
    cartInfo(){
      return this.$store.state.cartInfo
    },
    carGoodsData(){
      return this.$store.state.cartData
    },
  },
  mounted(){
    this.$store.commit('getCarSum');
    let _this=this;
    document.addEventListener('click',function (e) {
      if(!!_this.$refs.cartpanel.contains(e.target)) return
      _this.$store.commit('hideCar')
    })
  },
  methods:{
    carShowhandle(){
      this.$store.commit('getCartData');
      this.$store.commit('showCar');
    },
    carHidehandle(){
      this.$store.commit('hideCar')
    },
    /*删除商品*/
    delCartGoods(id){
      this.$store.commit('delCartData',id)
    }
  }

}
</script>
