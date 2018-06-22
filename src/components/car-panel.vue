<template>
  <li class="nav-item cart-item" @mouseenter="carShowhandle" @mouseleave="carHidehandle">
    <i class="icon icon-gouwuche"></i>
    <span class="sum">0</span>
    <div class="nav-cart-wrapper" v-if="carShow">
      <div class="nav-cart-list">
        <div class="empty" v-if="false">
          <i class="icon icon-gouwuche"></i>
          <h3>购物车还是空滴</h3>
          <p>您还没有选购任何商品</p>
        </div>
        <div class="full">
          <div class="nav-cart-items">
            <div class="cart-item-sell clear">
              <div class="item-thumb">
                <a>
                  <img src="@/assets/img/goods/1.png">
                </a>
              </div>
              <div class="item-desc">
                <p class="title"><a>这是商品名称这是商品名称这是商品名称这是商品名称</a></p>
                <p class="subTitle clear"><span class="fl cate">浅灰</span><span class="fl count">x1</span><span class="fr price">￥12</span></p>
              </div>
              <div class="del-btn">
                <i class="icon icon-close"></i>
              </div>
            </div>
            <div class="cart-item-sell clear">
              <div class="item-thumb">
                <a>
                  <img src="@/assets/img/goods/1.png">
                </a>
              </div>
              <div class="item-desc">
                <p class="title"><a>这是商品名称这是商品名称这是商品名称这是商品名称</a></p>
                <p class="subTitle clear"><span class="fl cate">浅灰</span><span class="fl count">x1</span><span class="fr price">￥12</span></p>
              </div>
              <div class="del-btn">
                <i class="icon icon-close"></i>
              </div>
            </div>
            <div class="cart-item-sell clear">
              <div class="item-thumb">
                <a>
                  <img src="@/assets/img/goods/1.png">
                </a>
              </div>
              <div class="item-desc">
                <p class="title"><a>这是商品名称这是商品名称这是商品名称这是商品名称</a></p>
                <p class="subTitle clear"><span class="fl cate">浅灰</span><span class="fl count">x1</span><span class="fr price">￥12</span></p>
              </div>
              <div class="del-btn">
                <i class="icon icon-close"></i>
              </div>
            </div>
            <div class="cart-item-sell clear">
              <div class="item-thumb">
                <a>
                  <img src="@/assets/img/goods/1.png">
                </a>
              </div>
              <div class="item-desc">
                <p class="title"><a>这是商品名称这是商品名称这是商品名称这是商品名称</a></p>
                <p class="subTitle clear"><span class="fl cate">浅灰</span><span class="fl count">x1</span><span class="fr price">￥12</span></p>
              </div>
              <div class="del-btn">
                <i class="icon icon-close"></i>
              </div>
            </div>
            <div class="cart-item-sell clear">
              <div class="item-thumb">
                <a>
                  <img src="@/assets/img/goods/1.png">
                </a>
              </div>
              <div class="item-desc">
                <p class="title"><a>这是商品名称这是商品名称这是商品名称这是商品名称</a></p>
                <p class="subTitle clear"><span class="fl cate">浅灰</span><span class="fl count">x1</span><span class="fr price">￥12</span></p>
              </div>
              <div class="del-btn">
                <i class="icon icon-close"></i>
              </div>
            </div>
            <div class="cart-item-sell clear">
              <div class="item-thumb">
                <a>
                  <img src="@/assets/img/goods/1.png">
                </a>
              </div>
              <div class="item-desc">
                <p class="title"><a>这是商品名称这是商品名称这是商品名称这是商品名称</a></p>
                <p class="subTitle clear"><span class="fl cate">浅灰</span><span class="fl count">x1</span><span class="fr price">￥12</span></p>
              </div>
              <div class="del-btn">
                <i class="icon icon-close"></i>
              </div>
            </div>
          </div>
          <div class="nav-cart-total">
            <div class="totalPrice">
              <p>商品合计: <span class="price">￥12312</span></p>
            </div>
            <div class="gotoCart">
              <a class="gotoCartBtn">去购物车结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  computed:{
    carShow(){
      return this.$store.state.carShow
    }
  },
  methods:{
    carShowhandle(){
      this.$store.commit('showCar')
    },
    carHidehandle(){
      this.$store.commit('hideCar')
    },
  }

}
</script>
