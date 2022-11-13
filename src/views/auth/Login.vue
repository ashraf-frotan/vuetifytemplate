<template>
  <v-container>
    <v-row>
      <v-col lg="6" md="8" sm="12" offset-lg="3" offset-md="2">
        <v-card class="mt-16 pa-10" elevation="3">
          <v-card-title class="d-flex justify-center">
            <h2 class="mb-4">Sign In</h2>
          </v-card-title>
          <v-card-subtitle>
            <router-link to="/register">Sign Up</router-link> for free
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
              label="Email"
              placeholder="Enter your email here"
              type="email"
              append-icon="mdi-email"
              v-model="email"
              :rules="[() => !!email || 'Email is required']"
              rounded
              outlined
              dense
            >
            </v-text-field>
            <v-text-field
              label="Password"
              placeholder="Enter your password here"
              type="password"
              append-icon="mdi-lock"
              v-model="password"
              :rules="[() => !!password || 'Password is required']"
              rounded
              dense
              outlined
            >
            </v-text-field>
            <v-checkbox color="success" label="Remeber me"></v-checkbox>

            <v-btn dense block color="primary">
              <v-icon>mdi-login</v-icon> Sign In</v-btn
            >
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <router-link to="/" class="text-text-decoration-none"
              >Forget Password</router-link
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
