<template>
  <v-row>
    <v-col>
      <v-card elevation="6">
        <v-card-title>
          <v-row>
            <v-col sm="12" md="6" lg="6" class="font-weight-bold">
              Countries
            </v-col>
            <v-col sm="12" md="6" lg="6" class="d-flex justify-end">
              <v-btn small color="primary" elevation="5"
                ><v-icon small>mdi-plus</v-icon></v-btn
              >
              <v-btn small color="success" class="ml-1" elevation="5"
                ><v-icon small>mdi-pencil</v-icon></v-btn
              >
              <v-btn small color="orange" class="ml-1 white--text" elevation="5"
                ><v-icon small>mdi-filter</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore esse,
          unde quia labore sapiente numquam ex distinctio cum praesentium
          commodi, perferendis, quos animi error explicabo. Consectetur, nemo?
          Nostrum, est totam.
        </v-card-text>
        <v-card-actions>actions here</v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>