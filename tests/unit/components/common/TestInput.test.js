import { mount } from "@vue/test-utils";

import TextInput from "@/components/common/TextInput";

describe("TextInput", () => {
  it("communicates the user has entered a character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
