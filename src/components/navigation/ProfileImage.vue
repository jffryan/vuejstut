<template>
  <img
    class="w-12 h-12 object-contain rounded-3xl cursor-pointer transition duration-150 ease-out hover:shadow-blue"
    :src="imageLink"
  />
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
