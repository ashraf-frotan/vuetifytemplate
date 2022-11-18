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
        <v-list-item-title class="text-h6">
          {{ project_title }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ project_subtitle }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="moveToUrl(item.url)"
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
    <v-dialog v-model="delete_dialog" max-width="300">
      <v-card>
        <v-card-title class="text-h9 d-flex justify-center">
          <v-icon size="85" color="orange">mdi-alert-circle-outline</v-icon>
        </v-card-title>
        <v-card-text class="d-flex text-center">
          <v-row>
            <v-col cols="12" class="pa-3 text-h9">
              <h3 class="text-h9">Are you sure to logout?</h3>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="delete_dialog = false" small>
            Cancel
          </v-btn>
          <v-btn small color="error" @click="$router.push('/')"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftSidebar",
  data() {
    return {
      drawer: true,
      delete_dialog: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", url: "/home" },
        { title: "Airplanes", icon: "mdi-airplane", url: "/airplanes" },
        { title: "Countries", icon: "mdi-flag", url: "/countries" },
        { title: "States", icon: "mdi-map", url: "/states" },
        { title: "Timetable", icon: "mdi-timetable", url: "/timetable" },
        { title: "Flights", icon: "mdi-airplane", url: "/flights" },
        { title: "Passanger", icon: "mdi-account", url: "/passangers" },
        { title: "Books", icon: "mdi-book", url: "/books" },
        { title: "User Management", icon: "mdi-account", url: "/users" },
        { title: "Profile", icon: "mdi-account", url: "/profile" },
        { title: "Logout", icon: "mdi-logout", url: "/" },
      ],
      right: null,
      mini: false,
      project_title: "Flight",
      project_subtitle: "Management",
    };
  },
  methods: {
    minimize() {
      this.mini = !this.mini;
      if (this.mini == true) {
        this.project_title = "F..";
        this.project_subtitle = "M..";
      } else {
        this.project_title = "Flight";
        this.project_subtitle = "Management";
      }
    },
    moveToUrl(url) {
      if (url != "/") {
        this.$router.push(url);
      } else {
        this.delete_dialog = true;
      }
    },
  },
};
</script>
