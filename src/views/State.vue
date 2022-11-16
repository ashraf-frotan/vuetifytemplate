<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col md="9">
              <div>States</div>
              <v-alert
                color="green"
                text
                dense
                dismissible
                border="left"
                v-show="save_dialog"
                class="mt-5"
                >Saved successfully!</v-alert
              >
            </v-col>
            <v-col md="3" class="d-flex justify-end">
              <v-tooltip bottom color="purple">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    v-bind="attrs"
                    x-small
                    color="primary"
                    fab
                    elevation="9"
                    @click="dialog = true"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>Add New</span>
              </v-tooltip>
              <v-tooltip color="pink" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="success"
                    x-small
                    fab
                    v-on="on"
                    v-bind="attrs"
                    class="ml-1"
                  >
                    <v-icon dense>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>
              <v-tooltip color="indigo" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="orange"
                    x-small
                    fab
                    dark
                    v-on="on"
                    v-bind="attrs"
                    class="ml-1 white--text"
                  >
                    <v-icon dense>mdi-filter</v-icon>
                  </v-btn>
                </template>
                <span>Filter</span>
              </v-tooltip>
              <v-tooltip color="cyan" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="error"
                    x-small
                    fab
                    v-on="on"
                    v-bind="attrs"
                    class="ml-1 white--text"
                  >
                    <v-icon dense>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="states"
            item-key="states.id"
            v-model="selected"
            :items-per-page="5"
            show-select
            :single-select="singleSelect"
            dense
          >
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Modal -->
    <v-dialog v-model="dialog" width="400">
      <v-card class="pa-2">
        <v-card-title> Add New State </v-card-title>
        <v-card-text>
          <v-text-field
            label="Name"
            placeholder="Enter state name here"
            outlined
            dense
          >
          </v-text-field>
          <v-select :items="countries" label="Country" dense outlined>
          </v-select>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" small @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "State",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "State", value: "state" },
        { text: "Country", value: "country" },
      ],
      states: [
        { id: 1, state: "kabul", country: "Afghanistan" },
        { id: 2, state: "tehran", country: "Iran" },
        { id: 3, state: "melborn", country: "Australlia" },
        { id: 4, state: "Tokyo", country: "America" },
        { id: 5, state: "Zorikh", country: "Swiss" },
        { id: 6, state: "ghazni", country: "Afghanistan" },
      ],
      countries: ["Iran", "Afghanistan"],
      selected: [],
      singleSelect: false,
      dialog: false,
      save_dialog: false,
    };
  },
  methods: {
    save() {
      this.dialog = false;
      this.save_dialog = true;
    },
  },
};
</script>

<style>
</style>