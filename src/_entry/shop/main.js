import Vue from 'vue'
import App from './App.vue'
import router from '@/router/shop'
import store from '@/store'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#qinban-shop',
  router,
  store,
  template: '<App />',
  components: { App }
})
