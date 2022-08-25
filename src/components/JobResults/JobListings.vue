<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "@/components/JobResults/JobListing";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    displayedJobs() {
      const that = this;
      const pageString = that.$route.query.page || "1";
      const pageNumber = Number.parseInt(pageString);
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return that.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const that = this;
    const url = "http://localhost:3000/jobs";

    const response = await axios.get(url);
    that.jobs = response.data;
  },
};
</script>
