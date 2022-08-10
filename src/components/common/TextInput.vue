<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :value="value"
    :input-key="inputKey"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    inputKey: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event) {
      const that = this;
      const userInput = event.target.value;
      const payload = {
        inputKey: that.inputKey,
        userInput: userInput,
      };
      that.$emit("handleInput", payload);
    },
  },
};
</script>
