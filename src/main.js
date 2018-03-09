import Vue from 'vue'
import VueRouter from 'vue-router'
import vMediaQuery from 'v-media-query'
import LightBootstrap from './light-bootstrap-main'
import globalMixins from './globalMixins'
import { store } from './store/store'
import routes from './routes/routes'
import axios from 'axios'
import App from './App.vue'

/* user plugins */
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(vMediaQuery)

/* user mixins */
Vue.mixin(globalMixins)

/* default axios */
axios.defaults.baseURL = '' // tobe app server

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})

/* We import element-ui variables at the end so they can override the default element-ui colors */
import './assets/sass/element_variables.scss'
import './assets/css/common.css'
import './assets/css/animation.css'
