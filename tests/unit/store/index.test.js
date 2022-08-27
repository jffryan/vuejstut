import { state, mutations } from "@/store";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
  it("stores job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
  describe("LOGOUT_USER", () => {
    it("logs the user out", () => {
      const state = { isLoggedIn: true };
      mutations.LOGOUT_USER(state);
      expect(state).toEqual({ isLoggedIn: false });
    });
  });
  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job1", "Job2"]);
      expect(state).toEqual({ jobs: ["Job1", "Job2"] });
    });
  });
});
