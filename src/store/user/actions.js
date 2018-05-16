import aws from 'src/axios/axios_db'

const actions = {
  // action return boolean result; get user profile info from 'user' state
  getUserProfileInfo ({commit}, payload) {
    return new Promise((resolve, reject) => {
      var json = localStorage.getItem('user')

      if (json !== null) {
        var userJSON = JSON.parse(json)
        
        commit('setUserProfileState', userJSON)
        resolve(true)
      } else if (payload === null) {
        resolve(false)
      } else {
        aws.get('/user/' + payload).then(response => {
          commit('setUserProfileState', response.data)
          commit('setUserProfileImageState', response.data.imageUrl)
          resolve(true)
        }).catch(error => {
          console.log(error)
          resolve(false)
        })
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
        commit('setUserProfileImageState', response.data.imageUrl)
        resolve(response.data)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}

export default actions
