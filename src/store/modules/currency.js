import fixer from 'src/axios/axios_fixer'
import { date } from 'src/plugins/date'

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
          localStorage.setItem('fxier_currencies', JSON.stringify(response.data))
          return
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      
      state.currency_data = JSON.parse(localStorage.getItem('fxier_currencies'))

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
}

// actions
const actions = {
  async getCurrencies ({commit}) {

    try{
      await commit('fetchCurrencies')
    }catch(ex){
      console.log(ex)
    }

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
