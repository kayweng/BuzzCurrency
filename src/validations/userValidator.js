import { required, email, between, sameAs } from 'vuelidate/lib/validators'
import { date } from 'src/js/date'

const firstName = {
  required,
  alphaSpace: val => {
    var regex = new RegExp(/^[a-zA-Z ]*$/)
    return regex.test(val)
  }
}

const lastName = {
  required,
  alphaSpace: val => {
    var regex = new RegExp(/^[a-zA-Z ]*$/)
    return regex.test(val)
  }
}

const emailAddress = {
  required,
  email
}

const mobile = {
  numericPlus: val => {
    if (val === null || val === '' || val === undefined) {
      return true
    }
    
    var regex = new RegExp(/^\+\d{6,14}$/)
    return regex.test(val)
  }
}

const mobile2 = {
  required,
  numericPlus: val => {
    if (val === null || val === '' || val === undefined) {
      return true
    }
    
    var regex = new RegExp(/^\+\d{6,14}$/)
    return regex.test(val)
  }
}

const gender = {
  required
}

const birthdate = {
  required,
  between: between(date.getDateByYearAdded(-80), date.getDateByYearAdded(-18))
}

const address = {
  required
}

const country = {
  required
}

const password = {
  required,
  passwordPolicy: val => {
    var regex = new RegExp(/(?=.*[a-z])(?=.*[0-9])(?=.{8,})/)

    return regex.test(val)
  }
}

const confirmPassword = {
  required,
  sameAs: sameAs('password')
}

const confirmNewPassword = {
  required,
  sameAs: sameAs('newPassword')
}

const mandatory = {
  required
}

const profileImage = {
  required
}

export {
  firstName,
  lastName,
  birthdate,
  emailAddress,
  mobile,
  mobile2,
  gender,
  address,
  country,
  password,
  confirmPassword,
  confirmNewPassword,
  mandatory,
  profileImage
}
