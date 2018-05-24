const mutations = {
  setBaseCurrencies (state, data) {
    // allocate data to local storage
    localStorage.setItem('baseCurrencyJSON', JSON.stringify(data))
    // set state currency string
    const json = JSON.parse(localStorage.getItem('baseCurrencyJSON'))
    // set state currency data
    state.currencyBasedCode = data['base']
    
    for (var i = 0; i < Object.keys(json['rates']).length; i++) {
      var key = Object.keys(json['rates'])[i]
      var value = Object.values(json['rates'])[i]
      state.baseCurrencyRates.push({
        'code': key,
        'rate': value
      })
    }
  },
  setCurrencyCodes (state, data) {
    // allocate data to local storage
    localStorage.setItem('currencyCodeJSON', JSON.stringify(data))
    // set state currency string
    const json = JSON.parse(localStorage.getItem('currencyCodeJSON'))
    // set state currency data
    for (var i = 0; i < Object.keys(json['rates']).length; i++) {
      var key = Object.keys(json['currencyName'])[i]
      var value = Object.values(json['rates'])[i]
      state.baseCurrencyRates.push({
        'code': key,
        'country': value
      })
    }
  }
}

export default mutations

