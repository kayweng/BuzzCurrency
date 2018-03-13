import Vue from 'vue'
import Vuex from 'vuex'
import currency from './modules/currency'
import cognitoConfig from '../../config/cognito'
import CognitoAuth from 'src/cognito/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    currency: currency,
    cognito: new CognitoAuth(cognitoConfig)
  }
})
