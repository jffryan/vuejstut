import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/jobsearch/JobSearchForm";

describe("JobSearchForm", () => {
  describe("When user submits the form", () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = jest.fn();
      const $router = {
        push,
      };
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router: $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Nashville");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Nashville",
        },
      });
    });
  });
});
