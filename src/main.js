import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync';
import vMediaQuery from 'v-media-query'
import LightBootstrap from './light-bootstrap-main'
import globalMixins from './globalMixins'
import { store } from './store/index'
import routes from './routes/routes'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import App from './App.vue'

/* user plugins */
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(vMediaQuery)
Vue.use(Vuelidate)

/* user mixins */
Vue.mixin(globalMixins)

/* default axios */
axios.defaults.baseURL = 'https://ixsm7jb4vh.execute-api.ap-southeast-1.amazonaws.com/Stage/' 

// configure router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

/* We import element-ui variables at the end so they can override the default element-ui colors */
import './assets/sass/element_variables.scss'
import './assets/css/common.css'
import './assets/css/animation.css'
