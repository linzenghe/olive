<template>
  <div id="addressEditPop" class="addressPop" v-if="editShow">
    <div class="pop-mask"></div>
    <div class="addressPop-overlay">
      <div class="addressPop-m">
        <div class="addressPop-b">
          <div class="closeBtn" @click="closePop"><i class="icon icon-close"></i></div>
          <div class="addressPop-c">
            <div class="title">编辑地址</div>
            <form class="form" id="addressFrom" role="form">
              <div class="item">
                <input class="item-input" type="text" v-model="editAddress.contact" placeholder="输入收货人姓名">
              </div>
              <div class="item">
                <input class="item-input" type="text" v-model="editAddress.contactPhone" placeholder="输入收货人电话">
              </div>
              <v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" :placeholders="placeholders"  :province="editAddress.province" :city="editAddress.city" :area="editAddress.county"></v-distpicker>
              <div class="item">
                <textarea class="item-textarea" v-model="editAddress.address" placeholder="输入详细地址"></textarea>
              </div>
              <div class="submit-item">
                <button class="item-button" type="button" @click="editSubmit">确认修改</button>
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
        placeholders: {
          province: '--- 省 ---',
          city: '--- 市 ---',
          area: '--- 区 ---',
        }
      }
    },
    inject:['reload'],
    props:[
      "editShow",
      "editAddress"
    ],
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
        this.$emit('listenToCloseEditEvent');
      },
      /*修改地址*/
      editSubmit(){
        this.axios.put("/api/customer/address/update",this.editAddress).then(response => {
          this.$layer.msg('修改成功');
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
