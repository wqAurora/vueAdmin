import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Base from '@/components/Base'
import Basis from '@/components/Basis'
import Essential from '@/components/Essential'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/base',
      name: 'base',
      component: Base
    },
    {
      path: '/basis',
      name: 'basis',
      component: Basis
    },
    {
      path: '/essential',
      name: 'essential',
      component: Essential
    }
  ]
})
