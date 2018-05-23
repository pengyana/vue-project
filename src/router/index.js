import Vue from 'vue'
import Router from 'vue-router'
import IndexList from '@/page/index-list'
import leftMenu from '@/components/leftMenu'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexList',
      component:IndexList
    },
    {
      path: '/leftMenu',
      name: 'leftMenu',
      component:leftMenu
    }
  ]
})
