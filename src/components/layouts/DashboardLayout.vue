<template>
  <div>
    <LeftSidebar ref="close" />
    <Header @minLeftSidebar="minimize" />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import LeftSidebar from "@/components/LeftSidebar.vue";
import Header from "@/components/Header.vue";
export default {
  name: "DashboardLayout",
  components: {
    LeftSidebar,
    Header,
  },
  methods: {
    minimize() {
      this.$refs.close.minimize();
    },
  },
};
</script>

<style>
</style>