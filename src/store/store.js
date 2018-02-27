import Vue from 'vue';
import Vuex from 'vuex';
import Home from './modules/home'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        home: Home
    },
});