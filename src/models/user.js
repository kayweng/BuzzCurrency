import * as validator from 'src/validations/userValidator'

const user = {
  firstName: null,
  lastName: null,
  email: null,
  mobile: null,
  birthdate: null,
  password: null,
  confirmPassword: null,
  agreement: false,
  reCaptcha: false,

  validations: {
    firstName: validator.firstName,
    lastName: validator.lastName,
    email: validator.emailAddress,
    mobile: validator.mobile,
    birthdate: validator.birthdate,
    password: validator.password,
    confirmPassword: validator.confirmPassword,
    agreement: validator.mandatory
  },

  resetUserState () {
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

export default user
