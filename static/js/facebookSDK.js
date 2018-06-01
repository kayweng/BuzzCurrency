window.fbAsyncInit = function () {
  FB.init({
    appId: '373057009882230',
    cookie: true,
    xfbml: true,
    version: 'v3.0'
  })
    
  FB.AppEvents.logPageView()

  FB.getLoginStatus(function (response) {
    console.log(response)
  })
};

(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]

  if (d.getElementById(id)) return

  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=373057009882230&autoLogAppEvents=1'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))
