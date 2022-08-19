import { mount } from "@vue/test-utils";

import SubmenuNav from "@/components/navigation/SubmenuNav";

describe("SubmenuNav", () => {
  const createConfig = (routeName) => {
    return {
      global: {
        mocks: {
          $route: { name: routeName },
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    };
  };
  describe("When the user is on the jobs page", () => {
    it("displays the job count", () => {
      const routeName = "JobResults";
      const wrapper = mount(SubmenuNav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("When the user is not on the jobs page", () => {
    it("does NOT display job count", () => {
      const routeName = "Home";
      const wrapper = mount(SubmenuNav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
