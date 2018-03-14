import { required, email, between, sameAs } from 'vuelidate/lib/validators'
import { date } from 'src/plugins/date'

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

const birthdate = {
  required,
  between: between(date.getDateByYearAdded(-80), date.getDateByYearAdded(-18))
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

const mandatory = {
  required
}

export { firstName, lastName, birthdate, emailAddress, mobile, password, confirmPassword, mandatory }
