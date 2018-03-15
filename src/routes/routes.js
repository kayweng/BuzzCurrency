// *
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue'

// Landing page
import Home from 'src/pages/Home/HomeLayout.vue'
// Auth page
import UserLogin from 'src/pages/Auth/Layout/Login.vue'
import UserSignUp from 'src/pages/Auth/Layout/SignUp.vue'
import UserForgotPassword from 'src/pages/Auth/Layout/ForgotPassword.vue'
import UserChangePassword from 'src/pages/Auth/Layout/ChangePassword.vue'

/* To be remove */
import DashboardLayout from 'src/pages/Dashboard/Layout/DashboardLayout.vue'
import Overview from 'src/pages/Dashboard/Dashboard/Overview.vue'
import Stats from 'src/pages/Dashboard/Dashboard/Stats.vue'

// Pages
import User from 'src/pages/Dashboard/Pages/UserProfile.vue'
import TimeLine from 'src/pages/Dashboard/Pages/TimeLinePage.vue'
// import Login from 'src/pages/Dashboard/Pages/Login.vue'
// import Register from 'src/pages/Dashboard/Pages/Register.vue'
import Lock from 'src/pages/Dashboard/Pages/Lock.vue'

// Components pages
import Buttons from 'src/pages/Dashboard/Components/Buttons.vue'
import GridSystem from 'src/pages/Dashboard/Components/GridSystem.vue'
import Panels from 'src/pages/Dashboard/Components/Panels.vue'
import SweetAlert from 'src/pages/Dashboard/Components/SweetAlert.vue'
import Notifications from 'src/pages/Dashboard/Components/Notifications.vue'
import Icons from 'src/pages/Dashboard/Components/Icons.vue'
import Typography from 'src/pages/Dashboard/Components/Typography.vue'

// Forms pages
import RegularForms from 'src/pages/Dashboard/Forms/RegularForms.vue'
import ExtendedForms from 'src/pages/Dashboard/Forms/ExtendedForms.vue'
import ValidationForms from 'src/pages/Dashboard/Forms/ValidationForms.vue'
import Wizard from 'src/pages/Dashboard/Forms/Wizard.vue'

// TableList pages
import RegularTables from 'src/pages/Dashboard/Tables/RegularTables.vue'
import ExtendedTables from 'src/pages/Dashboard/Tables/ExtendedTables.vue'
import PaginatedTables from 'src/pages/Dashboard/Tables/PaginatedTables.vue'
// Maps pages
import GoogleMaps from 'src/pages/Dashboard/Maps/GoogleMaps.vue'
import FullScreenMap from 'src/pages/Dashboard/Maps/FullScreenMap.vue'
import VectorMaps from 'src/pages/Dashboard/Maps/VectorMapsPage.vue'

// Calendar
import Calendar from 'src/pages/Dashboard/Calendar/CalendarRoute.vue'
// Charts
import Charts from 'src/pages/Dashboard/Charts.vue'

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }

  ]
}
let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: RegularForms
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: ExtendedForms
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: ValidationForms
    },
    {
      path: 'wizard',
      name: 'Wizard',
      component: Wizard
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: ExtendedTables
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      component: PaginatedTables
    }]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: FullScreenMap
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: VectorMaps
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: UserLogin
}

let signUpPage = {
  path: '/signup',
  name: 'SignUp',
  component: UserSignUp
}

let forgotPasswordPage = {
  path: '/reset-password',
  component: UserForgotPassword
}

let changePasswordPage = {
  path: '/change-password',
  component: UserChangePassword
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}

const routes = [
  {
    path: '/',
    component: Home,
    naem: 'home'
  },
  {
    path: '/overview',
    redirect: '/admin/overview'
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  signUpPage,
  forgotPasswordPage,
  changePasswordPage,
  lockPage,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'Stats',
        component: Stats
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  },
  {path: '*', component: NotFound}
]

export default routes
