import fixer from 'src/axios/axios_fixer'
import { date } from 'src/lib/date'

// state
const state = {
  currencies: {}
}

// getters
const getters = {
  currencies: state => state.currencies
}

// mutations
const mutations = {
  fetchCurrencies (state) {
    var refresh = false
    var localCurrencies = localStorage.getItem('fxier_currencies')

    state.currencies = {}

    if (localCurrencies === null) {
      refresh = true
    } else {
      var baseDate = JSON.parse(localCurrencies).date
      refresh = (baseDate !== null && date.yesterdayDateString() !== baseDate)
    }
    
    if (refresh) {
      fixer.get('/latest?base=MYR')
        .then(response => {
          console.log(response.data)
          localStorage.setItem('fxier_currencies', JSON.stringify(response.data))
          return
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      state.currencies = JSON.parse(localStorage.getItem('fxier_currencies'))
    }
  }
}

// actions
const actions = {
  getCurrencies ({commit}) {
    commit('fetchCurrencies')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
