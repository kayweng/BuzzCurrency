import axios from 'axios'

const fixerApi = axios.create({
  baseURL: 'https://api.fixer.io/'
})

const freeCurrencyAPI = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5/'
})

export { fixerApi, freeCurrencyAPI }
