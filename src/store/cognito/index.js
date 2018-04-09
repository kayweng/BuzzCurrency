import ActionsFactory from './actions'
import mutations from './mutations'

const state = {
  user: {
    username: null | '',
    tokens: null | {
      IdToken: '',
      RefreshToken: '',
      AccessToken: '',
    },
    attributes: {}
  }
};

export default class CognitoAuth {
  constructor (config) {
    this.state = state  
    this.actions = new ActionsFactory(config)
    this.mutations = mutations
  }
}
