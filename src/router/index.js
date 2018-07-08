import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/header.css'
import '@/assets/css/reset.css'
import '@/assets/css/footer.css'
import '@/assets/fonts/iconfont.css'
Vue.use(Router)

import Home from '@/views/home'
import Center from '@/views/center'
import CustomerInfo from '@/views/customer/userinfo'
import CustomerAddress from '@/views/customer/address'
import CustomerOrder from '@/views/customer/order'
import CustomerFollow from '@/views/customer/follow'
import CustomerSetting from '@/views/customer/setting'
import NoFound  from '@/views/404'
import ServerError from '@/views/500'
import Login from '@/views/login'
import GoodsList from '@/views/goodsList'
import GoodsDetail from '@/views/goodsDetail'
import Cart from '@/views/cart'
import OrderConfirm from '@/views/orderConfirm'



import PageOne from '../views/page_one'
import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_Four'
import PageFive from '../views/page_Five'
import Item from '../views/item'


const router = new Router({
  mode:'history',
  routes: [
    {path:'/',component:Home},
    {
      path: '/customer',
      component: Center,
      meta:{requireAuth:true},
      children: [
        {path: 'info', name: 'Info', meta:{requireAuth:true}, component: CustomerInfo},
        {path: 'address', name: 'Address', meta:{requireAuth:true}, component: CustomerAddress},
        {path: 'order', name: 'Order', meta:{requireAuth:true}, component: CustomerOrder},
        {path: 'follow', name: 'Follow', meta:{requireAuth:true}, component: CustomerFollow},
        {path: 'setting', name: 'Setting', meta:{requireAuth:true}, component: CustomerSetting},
      ],
    },
    {path:'/login',component:Login},
    {path:'/404',component:NoFound},
    {path:'/500',component:ServerError},
    {path:'/search',name:'search',component:GoodsList},
    {path:'/goods',name:'goods',component:GoodsDetail},
    {path:'/cart',component:Cart},
    {path:'/order/confirm',component:OrderConfirm},




    /*旧*/
    {path:'/PageOne',component:PageOne},
    {path:'/PageTwo',component:PageTwo},
    {path:'/PageThree',component:PageThree},
    {path:'/PageFour',component:PageFour},
    {path:'/PageFive',component:PageFive},
    {path:'/Item',name:'Item',component:Item},
    {path:'/Cart',name:'Cart',component:Cart}
  ]
})
export default router
