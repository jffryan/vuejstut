<template>
  <section>
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <!-- This is what I did but he wants something different using all the logic inside the computed object
      <span :class="['capitalize', title]">{{ title }}</span> for everyone
      -->
      <span :class="['capitalize', titleClasses]">{{ title }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">This is a vue demo.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  name: "RotatingHeadline",
  data() {
    return {
      title: "build",
      interval: null,
    };
  },
  computed: {
    titleClasses() {
      return {
        [this.title.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const titles = ["build", "create", "design", "code"];
        this.title = nextElementInList(titles, this.title);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
