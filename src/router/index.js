import Vue from 'vue'
import Router from 'vue-router'
import IndexList from '@/page/home/index-list'
import Register from '@/page/home/register'
import formView from '@/components/formView'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexList',
      component:IndexList,
      meta: {
        title: '首页入口'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component:Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/formView',
      name: 'formView',
      component:formView,
      meta: {
        title: '展示'
      }
    },
  ]
})
