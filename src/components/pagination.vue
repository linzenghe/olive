<template>
  <div id="pager" class="pager">
    <button class="btn btn-pager" :disabled="this.current == 1" @click="prePage" title="上一页"><i class="icon icon-zuo"></i></button>
    <span v-if="pageNo !== 1" class="page-index" :class="1 == current ? 'active':''" @click="goPage(1)">1</span>
    <span v-if="preClipped" class="page-index">...</span>
    <span v-for="index in pages" class="page-index" :class="index == current ? 'active':''"  @click="goPage(index)">{{index}}</span>
    <span v-if="backClipped" class="page-index">...</span>
    <span class="page-index" :class="pageNo == current ? 'active':''" @click="goPage(pageNo)">{{pageNo}}</span>
    <button class="btn btn-pager" :disabled="this.current == pageNo" @click="nextPage" title="下一页"><i class="icon icon-you"></i></button>
  </div>
</template>
<script>
  export default {
    props: {
      // 用于记录总页码，可由父组件传过来
      pageNo: {
        type: Number,
        default: 1
      },
      // 用于记录当前页数，这个与父组件进行数据交互来完成每一页的数据更新，所以我们只要改变current的值来控制整个页面的数据即可
      current: {
        type: Number,
        default: 1
      }
    },
    data(){
      return {
        backClipped: true,
        preClipped: false
      }
    },
    methods: {
      prePage () {
        // 上一页
        this.current--
      },
      nextPage () {
        // 下一页
        this.current++
      },
      goPage (index) {
        // 跳转到相应页面
        if (index !== this.current) {
          this.current = index
        }
      }
    },
    computed: {
      // 使用计算属性来得到每次应该显示的页码
      pages: function () {
        let ret = []
        if (this.current > 3) {
          // 当前页码大于三时，显示当前页码的前2个
          ret.push(this.current - 2)
          ret.push(this.current - 1)
          if (this.current > 4) {
            // 当前页与第一页差距4以上时显示省略号
            this.preClipped = true
          }
        } else {
          this.preClipped = false
          for (let i = 2; i < this.current; i++) {
            ret.push(i)
          }
        }
        if (this.current !== this.pageNo && this.current !== 1) {
          ret.push(this.current)
        }
        if (this.current < (this.pageNo - 2)) {
          // 显示当前页码的后2个
          ret.push(this.current + 1)
          ret.push(this.current + 2)
          if (this.current <= (this.pageNo - 3)) {
//            当前页与最后一页差距3以上时显示省略号
            this.backClipped = true
          }
        } else {
          this.backClipped = false
          for (let i = (this.current + 1); i < this.pageNo; i++) {
            ret.push(i)
          }
        }
        // 返回整个页码组
        return ret
      }
    }
  }
</script>
<style>
  .pager {
    text-align: right;
  }
  .pager*{
    box-sizing: border-box;
  }
  .btn-pager {
    padding: 0px;
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: #fff;
    color: #000;
    border: 1px solid #e3e3e3;
    border-radius: 0px;
    margin-top: -1px;
  }
  .btn-pager:hover {
    background-color: #f2f2f2;
  }
  .page-index {
    display: inline-block;
    width: 24px;
    height: 30px;
    line-height: 30px;
    background-color: #ffffff;
    cursor: pointer;
    color: #000000;
    text-align: center;
  }
  .pager .active {
    color: #fff;
    background-color: #b4a078;
  }
</style>
