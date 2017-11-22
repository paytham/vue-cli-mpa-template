import Vue from 'vue'
import Router from 'vue-router'
// views
import Home from '@/views/mobile/Home'

Vue.use(Router)

const route = new Router({
  base: '/mshop/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

route.beforeEach((to, from, next) => {
  next()
})

route.afterEach((to, from) => {
  //
})

export default route
