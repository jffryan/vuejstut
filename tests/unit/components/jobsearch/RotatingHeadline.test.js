import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import RotatingHeadline from "@/components/jobsearch/RotatingHeadline";

describe("Rotating Headline", () => {
  // These will apply to every test. They shouldn't really affect any debugging.
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory title", () => {
    const wrapper = mount(RotatingHeadline);
    const titlePhrase = wrapper.find("[data-test='title-phrase']");
    expect(titlePhrase.text().toLowerCase()).toBe("build for everyone");
  });
  it("changes title at a consistent interval", () => {
    mount(RotatingHeadline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps title after the first interval", async () => {
    const wrapper = mount(RotatingHeadline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const titlePhrase = wrapper.find("[data-test='title-phrase']");
    expect(titlePhrase.text().toLowerCase()).toBe("create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(RotatingHeadline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
