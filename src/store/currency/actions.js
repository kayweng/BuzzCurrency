import { fixerApi, freeCurrencyAPI } from 'src/axios/axios_api'
import { date } from 'src/js/date'

const actions = {
  async getBaseCurrencies ({commit}) {
    var currencies = localStorage.getItem('baseCurrencyJSON')

    if (currencies !== null) {
      var json = JSON.parse(currencies)
      var baseDate = new Date(json.date)

      if ((baseDate.getDay() <= date.today.getDay() - 1) &&
        (baseDate.getMonth() === date.today.getMonth()) &&
        (baseDate.getFullYear() === date.today.getFullYear())
      ) {
        commit('setBaseCurrencies', json)
        return
      }
    }

    return new Promise((resolve, reject) => {
      fixerApi.get('/latest?base=MYR').then(response => {
        commit('setBaseCurrencies', response.data)
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  async convertCurrencyRate ({commit}, payload) {
    return new Promise((resolve, reject) => {
      freeCurrencyAPI.get('/convert?q=' + payload).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  }
}

export default actions
