<template>
  <img class="w-12 h-12 object-contain rounded-3xl" :src="imageLink" />
</template>

<script>
import pfp from "@/assets/imgs/profileImage.png";

export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: pfp,
    };
  },
};
</script>
