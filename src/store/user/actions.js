import aws from 'src/axios/axios_db'

const actions = {
  undo () {

  },
  getUserProfileInfo ({commit}, payload) {
    var userProfile = JSON.parse(localStorage.getItem('userProfile'))

    if (userProfile === null) {
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
      }
    } else {
      return new Promise((resolve, reject) => {
        commit('setUserProfileState', userProfile)
        return resolve(userProfile)
      })
    }
  }
}

export default actions
