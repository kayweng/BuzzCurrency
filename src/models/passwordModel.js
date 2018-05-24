import { required, numeric, requiredIf } from 'vuelidate/lib/validators'
import * as validator from 'src/validations/userValidator'
import basedModel from './baseModel'

class PasswordModel extends basedModel {
  constructor () {
    super()
    this.code = null
    this.email = null
    this.oldPassword = null
    this.newPassword = null
    this.confirmPassword = null
    this.forceReset = false
  }

  static validationScheme () {
    return {
      code: {
        required,
        numeric
      },
      email: validator.emailAddress,
      oldPassword: requiredIf(function () {
        return forceReset
      }),
      newPassword: validator.password,
      confirmPassword: validator.confirmNewPassword,
      forceReset: {
        required
      }
    }
  }

  resetState () {
    this.code = null
    this.email = null
    this.oldPassword = null
    this.newPassword = null
    this.confirmPassword = null
    this.forceReset = false
  }
}

export { PasswordModel }
