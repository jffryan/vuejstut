import { createStore } from "vuex";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  // Mutations need to be synchronous methods
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  LOGOUT_USER(state) {
    state.isLoggedIn = false;
  },
};

const store = createStore({
  state,
  mutations,
  getters: {},
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});

export default store;
