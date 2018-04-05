import * as types from 'src/cognito/mutations-types'

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
