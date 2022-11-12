<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <v-card class="mt-5 pa-6" elevation="3">
          <v-card-title class="d-flex justify-center">
            <h2 class="mb-4">Sign Up</h2>
          </v-card-title>
          <v-card-subtitle
            ><router-link to="/login">Sign In</router-link>
            here</v-card-subtitle
          >
          <v-card-text>
            <v-text-field
              label="Name"
              placeholder="Enter your name here"
              append-icon="mdi-account"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="Email"
              placeholder="Enter email here"
              append-icon="mdi-email"
              outlined
              dense
              rounded
            >
            </v-text-field>
            <v-text-field
              label="Password"
              placeholder="Enter your password here"
              append-icon="mdi-lock"
              type="password"
              outlined
              rounded
              dense
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              placeholder="Enter confirm password here"
              append-icon="mdi-lock"
              type="password"
              outlined
              rounded
              dense
            >
            </v-text-field>
            <v-checkbox color="success" label="Remember me"></v-checkbox>
            <v-btn color="primary" block
              ><v-icon>mdi-login</v-icon> Sign Up</v-btn
            >
          </v-card-text>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>