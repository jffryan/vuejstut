<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span class="text-sm">
          <span class="text-brand-red-1">1653</span>
          jobs matched
        </span>
      </div>
      <div class="ml-auto flex">
        <p>Saved Jobs</p>
        <p class="ml-9">Job Alerts</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmenuNav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
