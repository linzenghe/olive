import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'
import '../assets/css/footer.css'
Vue.use(Router)

import Shop from '../views/shop'
import Home from '../views/home'
import Mphone from '../views/mPhone'
import PageOne from '../views/page_one'
import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_Four'
import PageFive from '../views/page_Five'
import Item from '../views/item'
import Cart from '../views/cart'


export default new Router({
  mode:'history',
  routes: [
    {path:'/',component:Shop},
    {path:'/home',component:Home},
    {path:'/Mphone',component:Mphone},
    {path:'/PageOne',component:PageOne},
    {path:'/PageTwo',component:PageTwo},
    {path:'/PageThree',component:PageThree},
    {path:'/PageFour',component:PageFour},
    {path:'/PageFive',component:PageFive},
    {path:'/Item',name:'Item',component:Item},
    {path:'/Cart',name:'Cart',component:Cart}
  ]
})
