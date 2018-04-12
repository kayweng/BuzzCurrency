import { authRoute, loginRoute } from './routeActions'

// General pages
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue'

// Home pages
import Home from 'src/pages/Home/HomeLayout.vue'

// Auth pages
import Login from 'src/pages/Auth/Pages/Login.vue'
import SignUp from 'src/pages/Auth/Pages/SignUp.vue'
import ResendConfirmation from 'src/pages/Auth/Pages/ResendConfirmation.vue'
import ForgotPassword from 'src/pages/Auth/Pages/ForgotPassword.vue'
import ConfirmForgotPassword from 'src/pages/Auth/Pages/ConfirmForgotPassword.vue'
import ChangePassword from 'src/pages/Auth/Pages/ChangePassword.vue'

// Dashboard page
import DashboardLayout from 'src/pages/Dashboard/DashboardLayout.vue'
import UserProfile from 'src/pages/Profile/Layout/UserProfile.vue'

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login,
  props: true,
  beforeEnter: loginRoute
}

let signUpPage = {
  path: '/signup',
  name: 'SignUp',
  component: SignUp,
  beforeEnter: loginRoute
}

let resendConfirmationPage = {
  path: '/resend-confirmation',
  name: 'ResendConfirmation',
  component: ResendConfirmation
}

let forgotPasswordPage = {
  path: '/reset-password',
  name: 'ResetPassword',
  component: ForgotPassword
}

let confirmForgotPasswordPage = {
  path: '/confirm-password',
  name: 'ConfirmPassword',
  component: ConfirmForgotPassword
}

let changePasswordPage = {
  path: '/change-password',
  name: 'ChangePassword',
  component: ChangePassword
}

let dashboardLayoutPage = {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardLayout,
  beforeEnter: authRoute
}

let profileMenuPage = {
  path: '/profile',
  name: 'Profile',
  component: DashboardLayout,
  beforeEnter: authRoute,
  children: [
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
}

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  loginPage,
  signUpPage,
  resendConfirmationPage,
  forgotPasswordPage,
  confirmForgotPasswordPage,
  changePasswordPage,
  dashboardLayoutPage,
  profileMenuPage,
  { path: '*', component: NotFound }
]

export default routes
