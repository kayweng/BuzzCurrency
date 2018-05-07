import aws from 'src/axios/axios_db'
import base64 from 'src/js/base64.js'

const actions = {
  getUserProfileInfo ({commit}, payload) {
    var json = localStorage.getItem('user')

    return new Promise((resolve,reject) => {
      if (json !== null) {
        // var userProfile = JSON.parse(base64.decode(json))
        var userProfile = JSON.parse(json)
  
        commit('setUserProfileState', userProfile)
        commit('setUserProfileImageState', userProfile.imageUrl)
        
        resolve(userProfile)
      } else if (payload !== null) {
        aws.get('/user/' + payload).then(response => {
          commit('setUserProfileState', response.data)
          commit('setUserProfileImageState', response.data.imageUrl)
        
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      } else {
        reject(null)
      }
    })
  },

  saveUserProfileImage ({commit}, payload) {
    var config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    return new Promise((resolve, reject) => {
      var reader = new FileReader()
      reader.readAsDataURL(payload.image)

      reader.onload = (upload) => {
        aws.post('/user/image/' + payload.username, { data: upload.target.result }, config).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      }
    })
  },

  saveUserProfile ({commit}, payload) {
    return new Promise((resolve, reject) => {
      aws.post('/user/' + payload.email, payload).then(response => {
        commit('setUserProfileState', response.data)
        resolve(response.data)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}

export default actions
