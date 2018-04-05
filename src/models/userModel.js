import * as validator from 'src/validations/customValidator'
import basedModel from './baseModel'

class userModel extends basedModel {
  constructor () {
    super()

    this.firstName = null
    this.lastName = null
    this.email = null
    this.mobile = null
    this.birthdate = null
    this.gender = null
    this.address = null
    this.country = null
    this.profileImage = null
    this.mode = 'view'  //default to view
  }

  static validationScheme () {
    return {
      firstName: validator.firstName,
      lastName: validator.lastName,
      email: validator.emailAddress,
      mobile: validator.mobile2,
      birthdate: validator.birthdate,
      gender: validator.gender,
      address: validator.address,
      country: validator.country,
      profileImage: validator.image
    }
  }

  resetState () {
    this.firstName = null
    this.lastName = null
    this.email = null
    this.mobile = null
    this.birthdate = null
    this.gender = null
    this.address = null
    this.country = null
    this.profileImage = null
    this.mode = 'view' 
  }
}

export default userModel