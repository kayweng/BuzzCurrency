// *
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue'

// Landing page
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

/* To be remove */
// import DashboardLayout from 'src/pages/Dashboard/Layout/DashboardLayout.vue'
// import Overview from 'src/pages/Dashboard/Dashboard/Overview.vue'
// import Stats from 'src/pages/Dashboard/Dashboard/Stats.vue'

// // Pages
// import User from 'src/pages/Dashboard/Pages/UserProfile.vue'
// import TimeLine from 'src/pages/Dashboard/Pages/TimeLinePage.vue'
// // import Login from 'src/pages/Dashboard/Pages/Login.vue'
// // import Register from 'src/pages/Dashboard/Pages/Register.vue'
// import Lock from 'src/pages/Dashboard/Pages/Lock.vue'

// // Components pages
// import Buttons from 'src/pages/Dashboard/Components/Buttons.vue'
// import GridSystem from 'src/pages/Dashboard/Components/GridSystem.vue'
// import Panels from 'src/pages/Dashboard/Components/Panels.vue'
// import SweetAlert from 'src/pages/Dashboard/Components/SweetAlert.vue'
// import Notifications from 'src/pages/Dashboard/Components/Notifications.vue'
// import Icons from 'src/pages/Dashboard/Components/Icons.vue'
// import Typography from 'src/pages/Dashboard/Components/Typography.vue'

// // Forms pages
// import RegularForms from 'src/pages/Dashboard/Forms/RegularForms.vue'
// import ExtendedForms from 'src/pages/Dashboard/Forms/ExtendedForms.vue'
// import ValidationForms from 'src/pages/Dashboard/Forms/ValidationForms.vue'
// import Wizard from 'src/pages/Dashboard/Forms/Wizard.vue'

// // TableList pages
// import RegularTables from 'src/pages/Dashboard/Tables/RegularTables.vue'
// import ExtendedTables from 'src/pages/Dashboard/Tables/ExtendedTables.vue'
// import PaginatedTables from 'src/pages/Dashboard/Tables/PaginatedTables.vue'
// // Maps pages
// import GoogleMaps from 'src/pages/Dashboard/Maps/GoogleMaps.vue'
// import FullScreenMap from 'src/pages/Dashboard/Maps/FullScreenMap.vue'
// import VectorMaps from 'src/pages/Dashboard/Maps/VectorMapsPage.vue'

// // Calendar
// import Calendar from 'src/pages/Dashboard/Calendar/CalendarRoute.vue'
// // Charts
// import Charts from 'src/pages/Dashboard/Charts.vue'

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
  component: DashboardLayout
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
  { path: '*', component: NotFound }
]

export default routes
