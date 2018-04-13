import aws from 'src/axios/axios_db'

const actions = {
  undo () {

  },
  getUserProfileInfo ({commit}, payload) {
    if (payload !== null) {
      return new Promise((resolve, reject) => {
        aws.get('/user/' + payload).then(response => {
          commit('setUserProfileState', response.data)
          resolve(response)
        }, (error) => {
          console.log(error)
          reject(error)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    }
  }
}

export default actions
