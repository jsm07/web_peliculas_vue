export default {
  state: {
    peliculas: [],
  },
  mutations: {
    setPeliculas(state, peliculas) {
      state.peliculas = peliculas;
    },
  },
  actions: {
    setPeliculas({ commit }, peliculas) {
      commit('setPeliculas', peliculas);
    },
  },
};
