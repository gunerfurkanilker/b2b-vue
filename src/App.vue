<script>
import appConfig from "@/app.config";

import { notificationMethods } from "@/state/helpers";

import { mapState } from "vuex";

export default {
  name: "app",
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  },
  computed:{
    ...mapState("process",["processLoading"])
  },
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl')
  },
  watch: {
    /**
     * Clear the alert message on route change
     */
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // clear alert on location change
      this.clearNotification();
    },
  },
  methods: {
    clearNotification: notificationMethods.clear,
  },
};
</script>

<template>
  <div id="app">
    <RouterView />
    <v-overlay :value="processLoading" opacity="1" z-index="999999">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>
