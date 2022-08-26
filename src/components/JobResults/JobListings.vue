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
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
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
    currentPage() {
      const that = this;
      const pageString = that.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const that = this;
      const previousPage = that.currentPage - 1;
      const firstPage = 1;
      // Only navigate backwards if it's possible to do so
      return previousPage >= firstPage ? previousPage : null;
    },
    nextPage() {
      const that = this;
      const nextPage = that.currentPage + 1;
      // Need to include non-whole number values
      const maxPage = Math.ceil(that.jobs.length / 10);
      // Only navigate forward if the next page is less than the greatest possible index
      return nextPage <= maxPage ? nextPage : null;
    },
    displayedJobs() {
      const that = this;
      const firstJobIndex = (that.currentPage - 1) * 10;
      const lastJobIndex = that.currentPage * 10;
      return that.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    const that = this;
    const baseUrl = process.env.VUE_APP_API_URL;
    const url = `${baseUrl}/jobs`;

    const response = await axios.get(url);
    that.jobs = response.data;
  },
};
</script>
