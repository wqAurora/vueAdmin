import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import Main from '@/components/page/Main'
import Base from '@/components/page/Base'
import Basis from '@/components/page/Basis'
import Essential from '@/components/page/Essential'
import Papers from '@/components/page/Papers'
import Editor from '@/components/page/Editor'


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
    },    
    {
      path: '/papers',
      name: 'papers',
      component: Papers
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
