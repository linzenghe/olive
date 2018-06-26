<template>
  <div class="customer-content">
    <div class="customer-address">
      <div class="title clear">
        <p class="tip fl">已保存收货地址(地址最多10条，还能保存2条)</p>
        <a class="add fr">+新建地址</a>
      </div>
      <table class="addressList">
        <thead>
          <tr>
            <th class="w1">收货人</th>
            <th class="w2">地址</th>
            <th class="w3">联系方式</th>
            <th class="w4">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>收货淫</td>
            <td>福建省厦门市湖里区华昌路135号客家大厦B501</td>
            <td>157****4899</td>
            <td class="opt">
              <a class="edit">编辑</a>
              <a class="del">删除</a>
              <a class="set">设为默认地址</a>
            </td>
          </tr>
          <tr>
            <td>收货淫</td>
            <td>福建省厦门市湖里区华昌路135号客家大厦B501</td>
            <td>157****4899</td>
            <td class="opt">
              <a class="edit">编辑</a>
              <a class="del">删除</a>
              <a class="set cur">默认地址</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

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
