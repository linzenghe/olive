<template>
  <div class="customer-content">
    <div class="customer-address">
      <div class="title clear">
        <p class="tip fl">已保存收货地址(地址最多10条，还能保存2条)</p>
        <a class="add fr" @click="addressNew">+新建地址</a>
      </div>
      <div class="address-empty" v-if="list.length==null">
        暂无收货地址
      </div>
      <table class="addressList" v-else>
        <thead>
          <tr>
            <th class="w1">收货人</th>
            <th class="w2">地址</th>
            <th class="w3">联系方式</th>
            <th class="w4">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list">
            <td>{{item.contact}}</td>
            <td>{{item.province+item.city+item.county+item.address}}</td>
            <td>{{item.contactPhone}}</td>
            <td class="opt">
              <a class="edit">编辑</a>
              <a class="del" @click="delAddress(item.id)">删除</a>
              <a class="set" :class="item.primary==1?'cur':''" v-text="item.primary==1?'默认地址':'设为默认地址'" @click="setPrimary(item.id)"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <addressAddPanel v-bind:addShow="addShow" v-on:listenToCloseAddEvent="closeAddPop"></addressAddPanel>
    <!--<addressEditPanel></addressEditPanel>-->
  </div>
</template>
<script>
  import addressAddPanel from '@/components/address-addpanel'
  import addressEditPanel from '@/components/address-editpanel'
  export default {
    data(){
      return{
        list:[],
        addShow:false,
      }
    },
    components: {
      addressAddPanel,
      addressEditPanel
    },
    mounted(){
      this.axios.get("/api/customer/address/list").then(response => {
        this.list=response.data.list;
      }, error => {
        this.$layer.msg(error.response.data.message);
      });
    },
    methods:{
      /*设为默认地址*/
      setPrimary(id){
        this.axios.put("/api/customer/address/primary",{'id':id}).then(response => {
          this.list.forEach((address,index)=>{
            this.list[index].primary=0;
            if(address.id==id){
              this.$layer.msg('设置成功');
              this.list[index].primary=1;
            }
          })
        }, error => {
          this.$layer.msg(error.response.data.message)
        });
      },
      /*删除*/
      delAddress(id){
        this.axios.delete("/api/customer/address/delete/"+id).then(response => {
          this.list.forEach((address,index)=>{
            if(address.id==id){
              this.list.splice(index,1)
            }
          })
        }, error => {
          this.$layer.msg(error.response.data.message)
        });
      },
      /*新增地址*/
      addressNew(){
        this.addShow=true
      },
      /*关闭新增弹窗*/
      closeAddPop(){
        this.addShow=false
      }
    }
  }
</script>

<style>
  .customer-address{
    padding-bottom: 50px;
  }
  .customer-address .title .tip{
    font-size: 14px;
    color: #222;
  }
  .customer-address .title .add{
    color: #d4282d;
    font-size: 14px;
  }
  .customer-address .addressList{
    border: 1px solid #e5e5e5;
    width: 100%;
    text-align: center;
    margin-top: 16px;
    box-sizing: border-box;
  }
  .customer-address .addressList .w1{
    width: 120px;
  }
  .customer-address .addressList .w2{
    width: 300px;
  }
  .customer-address .addressList .w3{
    width: 200px;
  }
  .customer-address .addressList .w4{
    width: 230px;
  }
  .customer-address .addressList thead{
    background: #f5f5f5;
  }
  .customer-address .addressList thead th{
    font-weight: normal;
    border-bottom: 1px solid #e8e8e8;
    color: #999;
    height: 43px;
    box-sizing: border-box;
  }
  .customer-address .addressList tbody td{
    height: 80px;
    box-sizing: border-box;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 14px;
    color: #333;
  }
  .customer-address .addressList .opt a{
    display: inline-block;
    margin: 0 2px;
    color: #d4282d;
    text-align: center;
  }
  .customer-address .addressList .opt a:hover{
    text-decoration: underline;
  }
  .customer-address .addressList .opt .set{
    width: 86px;
  }
  .customer-address .addressList .opt .set.cur{
    background: #f5f3ef;
    padding: 2px 0;
    border: 1px solid #b4a078;
    color: #b4a078;
    box-sizing: border-box;
  }
  .customer-address .addressList .opt .set.cur:hover{
    text-decoration: none;
    background: #fff;
  }
</style>
