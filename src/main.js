// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import layer from 'vue-layer'
import Validator from 'vue-validator'
import {setCookie,getCookie,delCookie} from './assets/js/cookie'
Vue.use(Validator)


Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.prototype.$layer = layer(Vue, {
  msgtime: 1.5,//目前只有一项，即msg方法的默认消失时间，单位：秒
});

/*导航守卫*/
router.beforeEach((to,from,next)=>{
  // delCookie('userInfo');
  if(to.meta.requireAuth){
    axios.get("/api/current").then(response => {
      let userInfo={'username':response.data.name,'portraitUrl':response.data.portraitUrl}
      setCookie('userInfo',JSON.stringify(userInfo),1000*60);
      next();
    }, response => {
      next({path:'/login'});
    });
  } else{
    next();
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
