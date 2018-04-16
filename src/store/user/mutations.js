import UserModel from 'src/models/userModel'

const mutations = {
  setUserProfileState (state, data) {
    state.profile = new UserModel(data)

    if (state.profile.email !== null) {
      localStorage.setItem('userProfile', JSON.stringify(state.profile))
    }
  }
}

export default mutations
