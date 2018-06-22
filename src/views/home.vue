<template>
  <div id="home">
    <slide></slide>
    <div class="container">
      <!--社区活动-->
      <div class="panel-content active-panel">
        <div class="panel-title">
          <h3>社区活动</h3>
          <a class="more">查看更多</a>
        </div>
        <div class="active-items">
          <div class="active-item">
            <div class="imgBox">
              <img src="">
            </div>
            <div class="info">推荐文章标题推荐文章标题推荐文..</div>
          </div>
          <div class="active-item">
            <div class="imgBox">
              <img src="">
            </div>
            <div class="info">推荐文章标题推荐文章标题推荐文..</div>
          </div>
          <div class="active-item">
            <div class="imgBox">
              <img src="">
            </div>
            <div class="info">推荐文章标题推荐文章标题推荐文..</div>
          </div>
        </div>
      </div>
      <!--教你选购-->
      <div class="panel-content teach-panel">
        <div class="panel-title">
          <h3>教你选购</h3>
          <a class="more">查看更多</a>
        </div>
        <div class="teach-items clear">
          <div class="teach-left">
            <a><img src=""></a>
          </div>
          <div class="teach-right">
            <div class="teach-right-top">
              <a><img src=""></a>
            </div>
            <div class="teach-right-bottom">
              <a><img src=""></a>
            </div>
          </div>
        </div>
      </div>
      <!--推荐商品-->
      <div class="panel-content recommend-panel">
        <div class="panel-title">
          <h3>推荐商品</h3>
          <a class="more">查看更多</a>
        </div>
        <div class="goods-items clear">
          <a class="goods-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5>推荐商品主标题一行完全展现完全展现..</h5>
              <ul class="labels">
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <div class="panel-content story-panel">
        <div class="panel-title">
          <h3>推荐商品</h3>
          <a class="more">查看更多</a>
        </div>
        <div class="story-items clear">
          <div class="story-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5 class="name">cathy</h5>
              <p>购物快捷方便，货品和想象中一样！</p>
            </div>
          </div>
          <div class="story-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5 class="name">cathy</h5>
              <p>购物快捷方便，货品和想象中一样！</p>
            </div>
          </div>
          <div class="story-item">
            <div class="imageBox">
              <img src="">
            </div>
            <div class="info">
              <h5 class="name">cathy</h5>
              <p>购物快捷方便，货品和想象中一样！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service></service>
  </div>
</template>

<script>
import slide from '@/components/slide'
import service from '@/components/service'

export default {
  data(){
    return {

    }
  },
  components: {
    slide,
    service
  }
}
</script>

<style>

</style>
