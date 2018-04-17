import fixer from 'src/axios/axios_fixer'
import { date } from 'src/js/date'

// state
const state = {
  currency_data: {},
  currencyRates: []
}

// getters
const getters = {
  currency_data: state => state.currency_data,
  currencyRates: state => state.currencyRates
}

// mutations
const mutations = {
  setCurrencyData (state, data) {
    state.currencies = {}
    state.currencyRates = []
    // allocate data to local storage
    localStorage.setItem('fixer_currencies', JSON.stringify(data))
    // set state currency string
    state.currency_data = JSON.parse(localStorage.getItem('fixer_currencies'))
    // set state currency data
    for (var i = 0; i < Object.keys(state.currency_data['rates']).length; i++) {
      var key = Object.keys(state.currency_data['rates'])[i]
      var value = Object.values(state.currency_data['rates'])[i]
      state.currencyRates.push({
        'code': key,
        'rate': value
      })
    }
  }
}

// actions
const actions = {
  async getCurrencies ({commit}) {
    var localCurrencies = localStorage.getItem('fixer_currencies')

    if (localCurrencies !== null) {
      var json = JSON.parse(localCurrencies)
      var baseDate = new Date(json.date)
      
      if (baseDate === date.today) {
        commit('setCurrencyData', localCurrencies)
        return
      }
    }

    return new Promise((resolve, reject) => {
      fixer.get('/latest?base=MYR').then(response => {
        commit('setCurrencyData', response.data)
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}