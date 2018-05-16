import UserModel from 'src/models/userModel'
import { readImageUrlData } from 'src/js/image'

const mutations = {
  setUserProfileState (state, data) {
    state.profile = new UserModel(data)
    localStorage.setItem('user', JSON.stringify(state.profile))
  },
  
  async setUserProfileImageState (state, data) {
    if (state.profile !== null) {
      await readImageUrlData(data).then(response => {
        state.profile.imageData = response
        localStorage.setItem('user', JSON.stringify(state.profile))
      })
    }
  }
}

export default mutations
