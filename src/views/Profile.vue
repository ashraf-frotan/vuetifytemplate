<template>
  <v-row>
    <v-col>
      <v-card style="height: 100vh">
        <v-card-title>User Profile</v-card-title>
        <v-card-text>
          <v-card max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/img/avatar.png"
            >
              <v-card-title>System user</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Admin </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Ashraf Frotan</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions class="d-flex justify-center">
              <v-btn color="green" small class="white--text"> Edit </v-btn>
              <v-btn color="orange" small class="white--text"> Exit </v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      img: "@/src/assets/img/avatar.png",
    };
  },
};
</script>

<style>
</style>