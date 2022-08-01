import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import modules from './modules'

Vue.use(Vuex)

const persistedStates = createPersistedState({
  paths: ['current',"cart"]
})

const store = new Vuex.Store({
  modules,
  plugins: [persistedStates],
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

