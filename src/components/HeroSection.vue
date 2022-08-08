<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-purple-200">
      <div class="grid grid-cols-12">
        <!-- 1, 5, 5, 1 -->
        <div class="col-start-1 col-span-1 border border-black">1 col</div>
        <div class="col-start-2 col-span-5 border border-black">
          <rotating-headline />
        </div>
        <div class="col-start-7 col-span-5 border border-black">5 col</div>
        <div class="col-start-12 col-span-1 border border-black">1 col</div>
      </div>
    </section>
  </main>
</template>

<script>
import RotatingHeadline from "@/components/RotatingHeadline.vue";
export default {
  name: "HeroSection",
  components: {
    RotatingHeadline,
  },
};
</script>
