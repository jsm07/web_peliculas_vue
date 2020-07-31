export default {
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setPeliculas({ commit }, user) {
      commit("setUser", user);
    },
  },
};
