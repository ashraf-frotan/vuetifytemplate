<template>
  <v-navigation-drawer
    app
    dark
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    color="primary"
  >
    <v-list-item link>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="$router.push(item.url)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftSidebar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", url: "/" },
        { title: "Countries", icon: "mdi-flag", url: "/countries" },
        { title: "States", icon: "mdi-map", url: "/states" },
        { title: "Airplanes", icon: "mdi-airplane", url: "/airplanes" },
      ],
      right: null,
      mini: false,
    };
  },
  methods: {
    minimize() {
      this.mini = !this.mini;
    },
  },
};
</script>
