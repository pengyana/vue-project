// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layer from 'vue-layer'
import lodash from 'lodash'
// import plugin from './plugin'
Vue.prototype.$layer = layer(Vue);
//引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//引入改变title
import VueWechatTitle from 'vue-wechat-title';

//公用css样式
import '@/assets/css/lib-reset.css'
import '@/assets/css/lib-util.css'
Vue.config.productionTip = false;
window._ = lodash
Vue.use(iView);
Vue.use(VueWechatTitle)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
