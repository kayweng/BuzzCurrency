import { store } from 'src/store/index'

let authPages = ['Home', 'Login', 'SignUp', 'ResetPassword', 'ResendConfirmation', 'PageNotFound', 'Error']

function loginRoute (to, from, next) {
  
  if (store.state.cognito.user.username !== 0 || store.state.cognito.user.tokens !== 0) { 
    next('Dashboard')
    return
  }

  next()
}

function authRoute (to, from, next) {
  // Unknown route name
  if (to.name === undefined) {
    next('PageNotFound')
    return
  }

  // Auth pages, no token check is needed
  if (authPages.indexOf(to.name) > -1) {
    next()
    return
  }
  
  // Other pages, no token found and require login
  if (store.state.cognito.user.tokens === 0) {
    next('/login?s=true')
    return
  }

  if (store.state.cognito.user.username !== 0) {
    if (store.state.cognito.user.attributes === undefined) {
      store.dispatch('getUserAttributes').then((attributes) => {
        next()
      }).catch((error) => {
        next('Error')
      })
    }else{
      next()
    }
  }else{
    next('/login?s=true')
  }
}

export  {
  loginRoute,
  authRoute
}