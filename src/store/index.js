import { createStore } from "vuex";

// ---------------------------
//* STATE
// ---------------------------

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

// ---------------------------
//* MUTATIONS
// ---------------------------

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const mutations = {
  // Mutations need to be synchronous methods
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [LOGOUT_USER](state) {
    state.isLoggedIn = false;
  },
};

// ---------------------------
//* STORE
// ---------------------------

const store = createStore({
  state,
  mutations,
  getters: {},
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});

export default store;
