import { createStore } from "vuex";

import getJobs from "@/api/getJobs";

import {
  LOGIN_USER,
  LOGOUT_USER,
  RECEIVE_JOBS,
  FETCH_JOBS,
} from "@/store/variables";

// ---------------------------
//* STATE
// ---------------------------

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

// ---------------------------
//* MUTATIONS
// ---------------------------

export const mutations = {
  // Mutations need to be synchronous methods
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [LOGOUT_USER](state) {
    state.isLoggedIn = false;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};

// ---------------------------
//* ACTIONS
// ---------------------------

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

// ---------------------------
//* STORE
// ---------------------------

const store = createStore({
  state,
  mutations,
  actions,
  getters: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});

export default store;
