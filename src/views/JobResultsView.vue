<template>
  <div class="job-results">
    <h1 class="text-6xl font-bold">This is a job results page</h1>
    <button @click="goToHome">Go to home page</button>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
