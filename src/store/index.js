import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state: {
    appVersion: '2.0',
    serverUrl: 'http://www.iqinban.com',
    apiUrl: 'http://www.iqinban.com/iqb/'
  },
  strict: debug
})
