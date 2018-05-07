import UserModel from 'src/models/userModel'
import base64 from 'src/js/base64.js'
import { readImageUrlData } from 'src/js/image'

const mutations = {
  setUserProfileState (state, data) {
    state.profile = new UserModel(data)
    if (state.profile.email !== null) {
      //var json = base64.encode(JSON.stringify(state.profile))
      localStorage.setItem('user', JSON.stringify(state.profile))
    }
  },
  
  setUserProfileImageState (state, data) {
    if (state.profile !== null) {
      readImageUrlData(data).then(response => {
        state.profile.imageData = response
        localStorage.setItem('userImage', state.profile.imageData)
      })
    }
  }
}

export default mutations
