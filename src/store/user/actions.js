import axios from 'axios'

const actions = {
  undo () {

  },
  async getUserProfileInfo ({commit}, payload) {
    if (payload !== null) {
      return new Promise((resolve, reject) => {
        axios.get('/user/' + payload)
        .then(response => {
          commit('setUserProfileState', response.data)
          resolve(response)
        }, error => {
          reject(error)
        })
      })
    }
  }
}

export default actions
