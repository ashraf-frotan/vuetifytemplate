<template>
  <v-row>
    <v-col lg="12" md="12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ab
      a natus praesentium soluta earum facere, voluptatibus consectetur commodi,
      repudiandae officia tempore nesciunt obcaecati reprehenderit ex accusamus
      quibusdam vel.
    </v-col>
    <v-dialog v-model="dialog" width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please wait
          <v-progress-linear color="white" indeterminate> </v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 1000);
    },
  },
  methods: {
    openProgress() {
      this.dialog = true;
    },
  },
  created() {
    this.openProgress();
  },
};
</script>
