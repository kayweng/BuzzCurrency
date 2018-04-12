import { store } from 'src/store/index'

let authPages = ['Home', 'Login', 'SignUp', 'ResetPassword', 'ResendConfirmation', 'PageNotFound', 'Error']

// Navigate sign up & login destination to dashboard if user is logon
async function loginRoute (to, from, next) {
  //await store.dispatch('signOut')
  //console.log(store.state)
  if (store.state.cognito.user === null) {
    next()
    return
  }

  if (store.state.cognito.user !== null && store.state.cognito.user.tokens === 0) {
    // try to retrieve token first; if session expired force user to re-login
    await store.dispatch('getCurrentUser').catch((error) => {
      console.log(error)
      next()
    })
  } else {
    next('Dashboard')
  }
}

async function authRoute (to, from, next) {
  //console.log(store.state)
  // Auth pages, no authentication check
  if (authPages.indexOf(to.name) > -1) {
    next()
  } else {
    // Other pages, no token found and require login
    if (store.state.cognito.user === null) {
      next('/login?s=true')
      return
    }

    if (store.state.cognito.user.tokens === 0) {
      // try to retrieve token first; if session expired force user to re-login
      await store.dispatch('getCurrentUser').catch((error) => {
        console.log(error)
        next('/login?s=true')
        return
      })
    }

    if (store.state.cognito.user.attributes === undefined) {
      await store.dispatch('getUserAttributes').catch((error) => {
        console.log(error)
        next('Error')
        return
      })
    }

    next()
  }
}

export {
  loginRoute,
  authRoute
}
