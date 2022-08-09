<template>
  <button :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonText: {
      type: String,
      default: "Click here",
    },
    buttonType: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.buttonType]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium  transition duration-150 ease-out;
}

.primary {
  @apply rounded text-white bg-brand-blue-2 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-2 bg-transparent hover:bg-brand-blue-1 hover:text-white;
}
</style>
