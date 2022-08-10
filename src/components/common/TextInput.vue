<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :value="modelValue"
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
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput(event) {
      const that = this;
      const userInput = event.target.value;
      that.$emit("update:modelValue", userInput);
    },
  },
};
</script>
