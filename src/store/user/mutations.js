import UserModel from 'src/models/userModel'
import base64 from 'src/js/base64.js'

const mutations = {
  setUserProfileState (state, data) {
    state.profile = new UserModel(data)

    if (state.profile.email !== null) {
      var json = base64.encode(JSON.stringify(state.profile))
      localStorage.setItem('up', json)
    }
  }
}

export default mutations
