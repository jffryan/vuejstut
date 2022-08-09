import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Vue Demo");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at COMPANY",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user is logged in", () => {
    it("displays user profile image", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays submenu information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='submenu-nav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='submenu-nav']");
      expect(subnav.exists()).toBe(true);
    });
  });
  describe("user ui is unique", () => {
    it("does not display profile when logged out", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(!profileImage.exists());
    });
    it("does not display sign in button when signed in", async () => {
      const wrapper = shallowMount(MainNav);
      let loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      const profileImage = wrapper.find("[data-test='profile-image']");
      loginButton = wrapper.find("[data-test='login-button']");
      expect(profileImage.exists()).toBe(!loginButton.exists());
    });
  });
});
