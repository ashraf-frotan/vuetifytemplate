<template>
  <v-app-bar color="primary accent-4" dense dark app>
    <v-app-bar-nav-icon @click="$emit('minLeftSidebar')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-menu transition="slide-y-transition" left class="mt-4">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon small class="mr-4" v-on="on" v-bind="attrs">
          <v-badge content="4" color="green" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <v-subheader> Notifications </v-subheader>
        <v-divider></v-divider>
        <v-list-item
          v-for="(notification, index) in notifications"
          :key="index"
          link
        >
          <v-list-item-avatar>
            <img src="@/assets/img/avatar.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ notification.title }}</v-list-item-title>
            <v-list-item-subtitle>{{
              notification.subtitle
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon small class="mr-5">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu left bottom open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge color="green" dot overlap left bottom>
            <v-avatar size="35">
              <img src="@/assets/img/profile/profile.jpg" alt="ashraf" />
            </v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link @click="$router.push('/profile')">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ name: 'Login' })">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          title: "Ashraf Frotan",
          subtitle: "Hi ☺",
        },
        {
          title: "Milad Hekmat",
          subtitle: "Keep going",
        },
      ],
    };
  },
};
</script>

<style>
</style>