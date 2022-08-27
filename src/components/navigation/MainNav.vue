<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl transition duration-150 ease-out hover:text-brand-blue-2"
          >{{ siteTitle }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              class="h-full ml-9 first:ml-0 transition duration-150 ease-out"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.link"
                tabindex="0"
                class="flex items-center h-full p-2 hover:text-brand-blue-2"
                >{{ menuItem.name }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image
            v-if="isLoggedIn"
            data-test="profile-image"
            @click="LOGOUT_USER()"
          />
          <action-button
            v-else
            data-test="login-button"
            button-text="Sign in"
            button-type="primary"
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <submenu-nav v-if="isLoggedIn" data-test="submenu-nav" />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import ActionButton from "@/components/common/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import SubmenuNav from "@/components/navigation/SubmenuNav.vue";

import { LOGIN_USER, LOGOUT_USER } from "@/store";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubmenuNav,
  },
  data() {
    return {
      siteTitle: "Vue Demo",
      menuItems: [
        {
          name: "Teams",
          link: "/jobs/results",
        },
        {
          name: "Locations",
          link: "/jobs/results",
        },
        {
          name: "Life at COMPANY",
          link: "/jobs/results",
        },
        {
          name: "How we hire",
          link: "/jobs/results",
        },
        {
          name: "Students",
          link: "/jobs/results",
        },
        {
          name: "Jobs",
          link: "/jobs/results",
        },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations([LOGIN_USER, LOGOUT_USER]),
  },
};
</script>
