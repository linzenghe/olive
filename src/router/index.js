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



import PageOne from '../views/page_one'
import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_Four'
import PageFive from '../views/page_Five'
import Item from '../views/item'
import Cart from '../views/cart'

const router = new Router({
  mode:'history',
  routes: [
    {path:'/',component:Home},
    {
      path: '/customer',
      component: Center,
      children: [
        {
          path: 'info',
          name: 'Info',
          component: CustomerInfo
        },
        {
          path: 'address',
          name: 'Address',
          component: CustomerAddress
        },
        {
          path: 'order',
          name: 'Order',
          component: CustomerOrder
        }
      ],
    },


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

/*router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('token')) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})*/
export default router
