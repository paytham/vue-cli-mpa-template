import Vue from 'vue'
import Router from 'vue-router'
// views
import Home from '@/views/desktop/Home'

Vue.use(Router)

const route = new Router({
  base: '/shop/',
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
