<template>
  <v-app>
    <LeftSidebar ref="close" />
    <Header @minLeftSidebar="test" />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftSidebar from "./components/LeftSidebar.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    LeftSidebar,
    Header,
  },
  methods:{
    test(){
      this.$refs.close.minimize();
    }
  },

  data: () => ({
    //
  }),
};
</script>
