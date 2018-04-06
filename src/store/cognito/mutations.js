import * as types from './mutations-types'

export default {
  [types.AUTHENTICATE] (state, payload) {
    state.user = payload
  },
  [types.SIGNOUT] (state) {
    state.user = null
  },
  [types.ATTRIBUTES] (state, payload) {
    state.user.attributes = payload
  }
}
