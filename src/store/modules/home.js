
//state
const state = {
    currencies: [],
}

//getters
const getters = {
    currencies: state => state.currencies,
}

//mutations
const mutations = {
    fetchCurrencies( state, limit) {
        
        for(var i=0; i< limit; i++){
            state.currencies.push({
                id: i,
                code: 'MYR',
                rate: 2.9650
            })
        }
    }
}

//actions
const actions = {
    getCurrencies ( {commit}, limit) {
        //todo: chekc mobile/desktop limit
        commit('fetchCurrencies', limit);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}