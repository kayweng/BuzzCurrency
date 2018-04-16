import aws from 'src/axios/axios_db'

const actions = {
  undo () {

  },
  getUserProfileInfo ({commit}, payload) {
    var userProfile = JSON.parse(localStorage.getItem('userProfile'))

    if (userProfile === null) {
      if (payload !== null) {
        return new Promise((resolve, reject) => {
          console.log('calling web api ...')
          aws.get('/user/' + payload).then(response => {
            commit('setUserProfileState', response.data)
            resolve(response.data)
          }, (error) => {
            console.log(error)
            reject(error)
          })
        })
      }
    } else {
      console.log('using local storage ...')
      return new Promise((resolve, reject) => {
        commit('setUserProfileState', userProfile)
        return resolve(userProfile)
      })
    }
  }
}

export default actions
