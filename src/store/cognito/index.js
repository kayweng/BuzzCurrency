import ActionsFactory from './actions'
import mutations from './mutations'

const state = {
  user: {
    username: null | '',
    tokens: null | {
      IdToken: '',
      RefreshToken: '',
      AccessToken: ''
    },
    attributes: {}
  }
}

const getters = {
  cognitoUserEmail: state => state.user.attributes['email'],
  cognitoUserName: state => state.user.attributes['name']
}

export default class CognitoAuth {
  constructor (config) {
    this.state = state
    this.getters = getters
    this.actions = new ActionsFactory(config)
    this.mutations = mutations
  }
}
