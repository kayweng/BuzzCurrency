import * as validator from 'src/validations/userValidator'
import basedModel from './baseModel'

class LoginModel extends basedModel {
  constructor () {
    super()
    
    this.email = null
    this.password = null
  }

  static validationScheme () {
    return {
      email: validator.emailAddress,
      password: validator.mandatory
    }
  }

  resetState () {
    this.email = null
    this.password = null
  }
}

export { LoginModel }
