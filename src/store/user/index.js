import model from 'src/models/userModel'
import actions from './actions'
import mutations from './mutations'

const state = {
  profile: model,
  tempProfile: null
}

export default {
  state,
  actions,
  mutations
}
