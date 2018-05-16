import { store } from 'src/store/index'

let noAuthPage = ['Home', 'Login', 'SignUp', 'ResetPassword', 'ResendConfirmation', 'PageNotFound', 'Error']
 
async function loginRoute (to, from, next) {
  var _logged = localStorage.getItem('keepMeSignedIn')
  var rememberLoggedIn = _logged === undefined ? false : (_logged === 'true')
  if (!rememberLoggedIn || store.state.cognito.user === null) {
    store.dispatch('signOut')
    next()
  } else {
    await store.dispatch('getCurrentUser').then((response) => {
      next('Dashboard')
    }, (error) => {
      console.log(error)
      next()
    })
  }
}

async function authRoute (to, from, next) {
  if (noAuthPage.indexOf(to.name) > -1) {
    next()
    return
  }

  if (store.state.cognito.user === null) {
    next('/login?s=true')
    return
  }
  
  await store.dispatch('getCurrentUser').catch((error) => {
    console.log(error)
    next('/login?s=true')
    return
  })
  
  await store.dispatch('getUserAttributes').catch((error) => {
    console.log(error)
    next('/login?s=true')
    return
  })
  
  next()
}

export {
  loginRoute,
  authRoute
}
