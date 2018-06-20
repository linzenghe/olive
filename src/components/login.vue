<template>
  <div id="loginPop" class="loginPop">
    <div class="pop-mask"></div>
    <div class="loginPop-overlay">
      <div class="loginPop-m">
        <div class="loginPop-b">
          <div class="closeBtn"></div>
          <div class="loginPop-c">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style>
  .loginPop .pop-mask{
    opacity: 0;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
  }
  .loginPop .loginPop-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 999;
  }
  .loginPop .loginPop-overlay .loginPop-m{
    width: 386px;
    overflow: visible;
    height: 445px!important;
    position: relative;
    top: 20%;
    margin: 0 auto;
    background-color: #fff;
    z-index: 10;
    display: none;
  }
  .loginPop .loginPop-overlay .loginPop-b{
    left: 50%;
    margin-left: -193px;
  }
</style>




