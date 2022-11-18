<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title> 404 </v-card-title>
        <v-card-text>
          <div>Sorry, the page you are looking for doesn't exist</div>
        </v-card-text>
        <v-card-actions>
          <v-btn small @click="$router.go(-1)">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
</style>