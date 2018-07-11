<template>
  <div id="addressAddPop" class="addressPop" v-if="addShow">
    <div class="pop-mask"></div>
    <div class="addressPop-overlay">
      <div class="addressPop-m">
        <div class="addressPop-b">
          <div class="closeBtn" @click="closePop"><i class="icon icon-close"></i></div>
          <div class="addressPop-c">
            <div class="title">新建地址</div>
            <form class="form" id="addressFrom" role="form">
              <div class="item">
                <input class="item-input" v-model="address.contact" type="text" placeholder="输入收货人姓名">
              </div>
              <div class="item">
                <input class="item-input" v-model="address.contactPhone" type="text" placeholder="输入收货人电话">
              </div>
              <v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" :placeholders="placeholders"></v-distpicker>
              <div class="item">
                <textarea class="item-textarea" v-model="address.address" placeholder="输入详细地址"></textarea>
              </div>
              <div class="submit-item">
                <button class="item-button" type="button" @click="addSubmit">确认新建</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    data() {
      return {
        address:{
          contact:'',
          contactPhone:'',
          province:'',
          city:'',
          county:'',
          address:'',
          regionId:''
        },
        placeholders: {
          province: '--- 省 ---',
          city: '--- 市 ---',
          area: '--- 区 ---',
        }
      }
    },
    inject:['reload'],
    props:["addShow"],
    components: {
      VDistpicker
    },
    methods:{
      onChangeProvince(data){
        this.editAddress.province=data.value
      },
      onChangeCity(data){
        if(data.code!=undefined){
          this.editAddress.city=data.value
        }else{
          this.editAddress.city=''
        }
      },
      onChangeArea(data){
        if(data.code!=undefined){
          this.editAddress.county=data.value;
          this.editAddress.regionId=data.code;
        }else{
          this.editAddress.county='';
          this.editAddress.regionId='';
        }
      },
      /*关闭弹窗*/
      closePop(){
        this.$emit('listenToCloseAddEvent');
      },
      /*新建地址*/
      addSubmit(){
        this.axios.post("/api/customer/address/create",this.address).then(response => {
          this.$layer.msg('添加成功');
          this.reload();
        }, error => {
          this.$layer.msg(error.response.data.message);
        });
      }
    }
  }
</script>
<style>
  .addressPop .pop-mask{
    opacity: 0.8;
    background-color:#000;
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .addressPop .addressPop-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 100;
  }
  .addressPop .addressPop-overlay .addressPop-m{
    width: 360px;
    overflow: visible;
    position: relative;
    top: 20%;
    margin: 0 auto;
    background-color: #fff;
    z-index: 10;
  }
  .addressPop.show .addressPop-overlay .addressPop-m{
    display: block;
  }
  .addressPop .addressPop-overlay .addressPop-b{
    padding: 36px;
  }
  .addressPop .addressPop-overlay .addressPop-b .closeBtn{
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
  .addressPop .addressPop-overlay .addressPop-b .closeBtn .icon{
    font-size: 26px;
    color: #777;
  }
  .addressPop .addressPop-overlay .addressPop-b .closeBtn:hover .icon{
    color: #333;
  }
  .addressPop .addressPop-overlay .addressPop-b .title{
    font-size: 16px;
    color: #222222;
    line-height: 16px;
    padding-bottom: 8px;
  }
  .distpicker-address-wrapper select{
    width: 100%;
    margin-top: 16px;
    border-radius: 0;
    border: 1px solid rgba(0,0,0,0.50)
  }
</style>
