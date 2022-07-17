import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders some text", () => {
    const wrapper = mount(ActionButton);
    expect(wrapper.text()).toBeTruthy();
  });
  it("applies style class to the button", () => {
    const wrapper = mount(ActionButton, {
      buttonType: "primary",
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
