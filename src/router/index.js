import Vue from 'vue'
import Router from 'vue-router'
import IndexList from '@/page/index-list'
import Register from '@/page/register'
import formView from '@/components/formView'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexList',
      component:IndexList
    },
    {
      path: '/Register',
      name: 'Register',
      component:Register
    },
    {
      path: '/formView',
      name: 'formView',
      component:formView
    },
  ]
})
