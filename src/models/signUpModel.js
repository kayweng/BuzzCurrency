import * as validator from 'src/validations/userValidator'
import basedModel from './baseModel'

class SignUpModel extends basedModel {
  constructor () {
    super()

    this.firstName = null
    this.lastName = null
    this.email = null
    this.mobile = null
    this.birthdate = null
    this.password = null
    this.confirmPassword = null
    this.agreement = false
    this.reCaptcha = false
  }

  static validationScheme () {
    return {
      firstName: validator.firstName,
      lastName: validator.lastName,
      email: validator.emailAddress,
      mobile: validator.mobile,
      birthdate: validator.birthdate,
      password: validator.password,
      confirmPassword: validator.confirmPassword,
      agreement: validator.mandatory
    }
  }

  name () {
    return this.firstName + ' ' + this.lastName
  }

  resetState () {
    this.firstName = null
    this.lastName = null
    this.email = null
    this.mobile = null
    this.birthdate = null
    this.password = null
    this.confirmPassword = null
    this.agreement = false
    this.reCaptcha = false
  }
}

export default SignUpModel
