import * as validator from 'src/validations/userValidator'
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
      this.birthdate = new Date(data.birthdate)
      this.gender = data.gender === '-' ? null : data.gender
      this.address = data.address === '-' ? null : data.address
      this.country = data.country === '-' ? null : data.country
      this.userType = data.userType
      this.userTypeDescription = data.userTypeDescription
      this.imageUrl = data.imageUrl === '-' ? 'static/img/faces/user.jpg' : data.imageUrl
      this.active = data.active
      this.createdOn = data.createdOn
      this.modifiedOn = data.modifiedOn
      this.lastUpdate = new Date()

      this.imageData = data.imageData
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
      country: validator.country
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
    this.imageData = null
  }
}

export default userModel
