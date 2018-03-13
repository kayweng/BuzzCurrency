import ActionsFactory from './actions';
import mutations from './mutations';

const state = {
  user: {
    username: '', // email
    tokens: null | {
      IdToken: '', // in JWT format
      RefreshToken: '', // in JWT format
      AccessToken: '', // in JWT format
    },
    attributes: {
      name: null,
      phone_number: null,
    }
  }
}

export default class CognitoAuth {
  constructor(config) {
    this.state = state;
    this.actions = new ActionsFactory(config);
    this.mutations = mutations;
  }
}