import { store } from 'src/store/index'

let noAuthPage = ['Home', 'Login', 'SignUp', 'ResetPassword', 'ResendConfirmation', 'PageNotFound', 'Error']

async function loginRoute (to, from, next) {
  // await store.dispatch('signOut')
  if (store.state.cognito.user === null) {
    next()
    return
  }

  if (store.state.cognito.user !== null && store.state.cognito.user.tokens === 0) {
    await store.dispatch('getCurrentUser').catch((error) => {
      console.log(error)
      next()
    })
  } else {
    next('Dashboard')
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
    next('Home')
    return
  })
  
  next()
}

export {
  loginRoute,
  authRoute
}
