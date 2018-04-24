import Vue from 'vue'
import Vuex from 'vuex'
import currency from './currency/index'
import user from './user/index'
import cognitoConfig from '../../config/cognito'
import CognitoAuth from 'src/store/cognito/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    currency,
    user,
    cognito: new CognitoAuth(cognitoConfig)
  }
})
