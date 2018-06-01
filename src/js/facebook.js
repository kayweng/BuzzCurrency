var facebook = {

  getLoginStatus () {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus(function (response) {
        if (response) {
          resolve(response.status)
        } else {
          reject('get facebook login status error')
        }
      })
    })
  },

  loginFacebook () {
    return new Promise((resolve, reject) => {
      window.FB.login(function (response) {
        resolve(response)
      }, {scope: 'public_profile, email, user_birthday, user_gender'})
    })
  },

  retrieveMeFacebookInfo () {
    return new Promise((resolve, reject) => {
      window.FB.api('/me?fields=id,name,first_name,last_name,email,gender,address,birthday', function (response) {
        resolve(response)
      })
    })
  }
}

export default facebook
