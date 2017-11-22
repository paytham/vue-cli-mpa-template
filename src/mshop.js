import Vue from 'vue'
import MShop from './MShop.vue'
import router from '@/router/mshop'
import store from '@/store'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#qinban-mshop',
  router,
  store,
  template: '<MShop/>',
  components: { MShop }
})
