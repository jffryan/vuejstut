<template>
  <div>
    <p>Job Page {{ currentJobId }}</p>
  </div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      const that = this;
      return that.$route.params.id;
    },
  },
};
</script>
