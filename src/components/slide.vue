<template>
  <div class="carousel-wrap" id="carousel">
    <div class="carousel-slider" @mouseenter="stop" @mouseleave="go">
      <button type="button" class="slick-arrow slick-prev" @click="prev"><i class="icon icon-zuo"></i></button>
      <transition-group tag="ul" class="slick-list" name="list">
        <li v-for="(list,index) in slideList" :key="index" :class="{'slick-active':index===currentIndex}" v-show="index===currentIndex" >
          <a :href="list.clickUrl">
            <img :src="list.imageUrl" :alt="list.desc">
          </a>
        </li>
      </transition-group>
      <button type="button" class="slick-arrow slick-next" @click="next"><i class="icon icon-you"></i></button>
      <ul class="slick-dots">
        <li v-for="(list,index) in slideList" :class="{'slick-active':index===currentIndex}" @mouseover="change(index)">
          <button></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props:['slideList'],
    data(){
      return{
        currentIndex:0,
        timer: ''
      }
    },
    methods:{
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      //停止
      stop() {
        clearInterval(this.timer)
        this.timer = null
      },
      //改变
      change(index) {
        this.currentIndex = index
      },
      //自动
      autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      },
      //上一页
      prev(){
        this.currentIndex--;
        if(this.currentIndex <0){
          this.currentIndex = this.slideList.length-1
        }
      },
      next(){
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    }
  }
</script>
<style>
  .carousel-wrap{
    height: 420px;
    overflow: hidden;
    position: relative;
  }
  .carousel-wrap .carousel-slider{
    position: static;
  }
  .carousel-wrap .carousel-slider .slick-arrow{
    position: absolute;
    z-index: 9;
    top: 200px!important;
    width: 50px;
    height: 50px;
    opacity: 80;
    background-color: #D0C4AF;
    border-radius: 500px;
    cursor: pointer;
    color: #fff;
  }
  .carousel-wrap .carousel-slider .slick-arrow .icon{
    font-size: 22px;
  }
  .carousel-wrap .carousel-slider .slick-arrow.slick-prev{
    display: block;
    left: 100px;
  }
  .carousel-wrap .carousel-slider .slick-arrow.slick-next{
    display: block;
    right: 100px;
  }
  .carousel-wrap .carousel-slider .slick-list{
    position: relative;
    height: 420px;
    background: #e5e5e5;
  }
  .carousel-wrap .carousel-slider .slick-list li{
    position: absolute;
    left:0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition:opacity 500ms ease;
    -moz-transition:opacity 500ms ease; /* Firefox 4 */
    -webkit-transition:opacity 500ms ease; /* Safari and Chrome */
    -o-transition:opacity 500ms ease; /* Opera */
  }
  .carousel-wrap .carousel-slider .slick-list li.slick-active{
    opacity: 1;
  }
  .carousel-wrap .carousel-slider .slick-list li img{
    width: 100%;
    min-height: 420px;
  }
  .carousel-wrap .carousel-slider .slick-dots{
    position: absolute;
    bottom: 4px;
    display: block;
    width: 100%;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  .carousel-wrap .carousel-slider .slick-dots li{
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 8px 10px;
    padding: 0;
    cursor: pointer;
  }
  .carousel-wrap .carousel-slider .slick-dots li button{
    font-size: 0;
    line-height: 0;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 500px;
    color: transparent;
    border: 1px solid #cecece;
    background: #fff;
    padding: 0;
  }
  .carousel-wrap .carousel-slider .slick-dots li.slick-active button{
    -webkit-box-shadow: 0 0 0 4px #dfcead;
    -moz-box-shadow: 0 0 0 4px #dfcead;
    box-shadow: 0 0 0 4px #dfcead;
    background: #a7936e;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    -ms-border-radius: 500px;
    -o-border-radius: 500px;
    border-radius: 500px;
    border: none;
  }
</style>




