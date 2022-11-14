<template>
  <v-app>
    <component :is="layout" />
  </v-app>
</template>

<script>
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
export default {
  name: "App",
  components: {
    DashboardLayout,
    AuthLayout,
  },
  methods: {},

  data() {
    return {
      layout: "AuthLayout",
    };
  },
  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "DashboardLayout";
      }
    },
  },
};
</script>
