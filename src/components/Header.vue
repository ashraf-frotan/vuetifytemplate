<template>
  <v-app-bar color="primary accent-4" dense dark app>
    <v-app-bar-nav-icon @click="$emit('minLeftSidebar')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu left bottom open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-avatar size="35">
            <img src="@/assets/img/profile/profile.jpg" alt="ashraf" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
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
export default {};
</script>

<style>
</style>