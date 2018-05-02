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

  // uploadUserProfileImage ({commit}, payload) {
  //   var config = {
  //     headers: { 'content-type': 'multipart/form-data' }
  //   }
  //   var reader = new FileReader()
  //   reader.readAsDataURL(payload.image)

  //   return new Promise((resolve, reject) => {
  //     reader.onload = (upload) => {
  //       console.log(upload.target.result)
  //       aws.post('/user/image/' + payload.username, { data: upload.target.result }, config).then(response => {
  //         resolve(response)
  //       }).catch(error => {
  //         reject(error)
  //       })
  //     }
  //   })
  // },
  uploadUserProfileImage ({commit}, payload) {
    var formData = new FormData()

    formData.append('file', payload.image)

    var config = {
      headers: { 'content-type': payload.image.type }
    }

    return new Promise((resolve, reject) => {
      aws.post('/user/image/' + payload.username, formData, config).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  saveUser ({commit}, payload) {
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
