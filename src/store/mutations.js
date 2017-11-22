import {APP} from './mutations-type'

export default {
  [APP.VERSION] (state, { version }) {
    state.appVersion = version
  }
}
