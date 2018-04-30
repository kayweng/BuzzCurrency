import aws from 'src/axios/axios_db'
import base64 from 'src/js/base64.js'

const actions = {
  undo () {
    
  },
  getUserProfileInfo ({commit}, payload) {
    var json = localStorage.getItem('user')

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
  },
  uploadUserProfileImage ({commit}, payload) {
    var username = payload.username
    var form = new FormData()
    
    form.append("file", payload.image)

    console.log(payload.image)
    return new Promise((resolve, reject) => {
      aws.post('/user/image/' + username, form, { 
        headers:{ 'Content-Type': 'multipart/form-data' }
      }).then(response => {
        console.log(response)
        commit('setUserProfileImageState', response.data)
        resolve(response.data)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}

export default actions
