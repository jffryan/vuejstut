import { mount } from "@vue/test-utils";

import SubmenuNav from "@/components/SubmenuNav";

describe("SubmenuNav", () => {
  describe("When the user is on the jobs page", () => {
    it("displays the job count", () => {
      const wrapper = mount(SubmenuNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("When the user is not on the jobs page", () => {
    it("does NOT display job count", () => {
      const wrapper = mount(SubmenuNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
