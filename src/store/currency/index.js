import actions from './actions'
import mutations from './mutations'

// state
const state = {
  currencyBasedCode: '',
  currencyCodes: [],
  baseCurrencyRates: []
}

const getters = {
  currencyBasedCode: state => staet.baseCode,
  currencyCodes: state => state.currencyCodes,
  baseCurrencyRates: state => state.baseCurrencyRates
}

export default {
  state,
  getters,
  actions,
  mutations
}
