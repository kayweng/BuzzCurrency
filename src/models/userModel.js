import * as validator from 'src/validations/customValidator'
import basedModel from './baseModel'

class userModel extends basedModel {
  constructor (data) {
    super()

    this.resetState()
    this.edit = false

    if (data !== null && data !== undefined) {
      this.firstName = data.firstName
      this.lastName = data.lastName
      this.email = data.email
      this.mobile = data.mobile
      this.birthdate = data.birthdate
      this.gender = data.gender
      this.address = data.address
      this.country = data.country
      this.userType = data.userType
      this.userTypeDescription = data.userTypeDescription
      this.imageUrl = data.imageUrl
      this.active = data.active
      this.createdOn = data.createdOn
      this.modifiedOn = data.modifiedOn
      this.lastUpdate = new Date()
    }
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
    this.userType = null
    this.userTypeDescription = null
    this.imageUrl = null
    this.active = null
    this.createdOn = null
    this.modifiedOn = null
    this.lastUpdate = null
    this.edit = false
  }
}

export default userModel
