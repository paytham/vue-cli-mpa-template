import {APP} from './mutations-type'

export default {
  setAppVersion ({ commit }, { version }) {
    commit(APP.VERSION, { version })
  }
}
