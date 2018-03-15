import { requiredIf } from 'vuelidate/lib/validators'
import * as validator from 'src/validations/userValidator'

const login = {
  email: null,
  password: null,
  
  validations: {
    email: validator.emailAddress,
    password: validator.mandatory
  },

  resetState () {
    this.email = null
    this.password = null
  }
}

const email = {
  email: null,
 
  validations: {
    email: validator.emailAddress,
  },

  resetState () {
    this.email = null
  }
}

const changePassword = {
  oldPassword: null,
  newPassword: null,
  confirmPassword: null,
  forceReset: false,

  validations: {
    oldPassword: requiredIf(function () {
      return forceReset
    }),
    newPassword: validator.password,
    confirmPassword: validator.confirmPassword
  },

  resetState () {
    this.oldPassword = null
    this.newPassword = null
    this.confirmPassword = null
    this.forceReset = false
  }
}

export { login, email, changePassword }