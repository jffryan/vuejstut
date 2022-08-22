<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <!-- 1, 5, 5, 1 -->
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <rotating-headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img :src="staticImage" class="w-80 h-80 object-contain" />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import RotatingHeadline from "@/components/JobSearch/RotatingHeadline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";

import staticImage from "@/assets/imgs/VueLogo.png";

export default {
  name: "HeroSection",
  components: {
    RotatingHeadline,
    JobSearchForm,
  },
  data() {
    return {
      staticImage,
    };
  },
};
</script>
