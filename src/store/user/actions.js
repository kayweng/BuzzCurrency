import api from 'src/axios/axios_db'

const actions = {
  undo () {

  },
  async getUserProfileInfo ({commit}, payload) {
    if (payload !== null) {
      return new Promise((resolve, reject) => {
        api.get('/user/' + payload).then(response => {
          commit('setUserProfileState', response.data)
          resolve(response)
        }).catch((error) => {
          console.log(error.response)
          reject(error)
        })
      })
    }
  }
}

export default actions
