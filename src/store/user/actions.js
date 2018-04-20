import aws from 'src/axios/axios_db'
import base64 from 'src/js/base64.js'

const actions = {
  undo () {

  },
  getUserProfileInfo ({commit}, payload) {
    var json = localStorage.getItem('up')

    if (json !== null) {
      var userProfile = JSON.parse(base64.decode(json))

      return new Promise((resolve, reject) => {
        commit('setUserProfileState', userProfile)
        return resolve(userProfile)
      })
    } else {
      if (payload !== null) {
        return new Promise((resolve, reject) => {
          aws.get('/user/' + payload).then(response => {
            commit('setUserProfileState', response.data)
            resolve(response.data)
          }).catch(error => {
            console.log(error)
            reject(error)
          })
        })
      } else {
        return new Promise(null)
      }
    }
  }
}

export default actions
