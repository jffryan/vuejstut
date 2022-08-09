<template>
  <div>
    <main-nav />
    <hero-section />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import HeroSection from "@/components/jobsearch/HeroSection.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
