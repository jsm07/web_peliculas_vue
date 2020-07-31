import Vue from 'vue'
import Vuex from 'vuex'
import PeliculasStore from './peliculas.store'
import UserStore from './user.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...UserStore.state,
    ...PeliculasStore.state,
  },
  mutations: {
    ...UserStore.mutations,
    ...PeliculasStore.mutations,
  },
  actions: {
    ...UserStore.actions,
    ...PeliculasStore.actions,
  }
})
