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
  component: Login
}

let signUpPage = {
  path: '/signup',
  name: 'SignUp',
  component: SignUp
}

let resendConfirmationPage = {
  path: '/resend-confirmation',
  component: ResendConfirmation
}

let forgotPasswordPage = {
  path: '/reset-password',
  component: ForgotPassword
}

let confirmForgotPasswordPage = {
  path: '/confirm-password',
  component: ConfirmForgotPassword
}

let changePasswordPage = {
  path: '/change-password',
  component: ChangePassword
}

let dashboardLayoutPage = {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardLayout
}

let profileMenuPage = {
  path: '/profile',
  component: DashboardLayout,
  children: [
    {
      path: '/user-profile',
      name: 'My Profile',
      component: UserProfile
    }
  ]
}

const routes = [
  {
    path: '/',
    component: Home,
    naem: 'home'
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
