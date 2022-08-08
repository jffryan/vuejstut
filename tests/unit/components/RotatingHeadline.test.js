import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import RotatingHeadline from "@/components/RotatingHeadline";

describe("Rotating Headline", () => {
  it("displays introductory title", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(RotatingHeadline);
    const titlePhrase = wrapper.find("[data-test='title-phrase']");
    expect(titlePhrase.text().toLowerCase()).toBe("build for everyone");
    jest.useRealTimers();
  });
  it("changes title at a consistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(RotatingHeadline);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it("swaps title after the first interval", async () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(RotatingHeadline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const titlePhrase = wrapper.find("[data-test='title-phrase']");
    expect(titlePhrase.text().toLowerCase()).toBe("create for everyone");
    jest.useRealTimers();
  });

  it("removes interval when component disappears", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(RotatingHeadline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
