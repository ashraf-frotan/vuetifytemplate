<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="8">
              <div>Airplanes</div>
              <div class="mt-2">
                <v-alert
                  type="success"
                  border="left"
                  dense
                  text
                  dismissible
                  v-show="delete_alert"
                  >Deleted successfully!</v-alert
                >
                <v-alert
                  type="success"
                  border="left"
                  dense
                  text
                  dismissible
                  v-show="save_alert"
                  >Created successfully!</v-alert
                >
              </div>
            </v-col>
            <v-col cols="4" class="d-flex justify-end">
              <v-tooltip bottom color="purple">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    x-small
                    fab
                    v-on="on"
                    v-bind="attrs"
                    color="primary"
                    @click="dialog = true"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <small>Add New</small>
              </v-tooltip>
              <v-tooltip bottom color="pink">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    x-small
                    fab
                    v-on="on"
                    v-bind="attrs"
                    color="green"
                    class="ml-1 white--text"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <small>Edit</small>
              </v-tooltip>
              <v-tooltip bottom color="orange">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    x-small
                    fab
                    v-on="on"
                    v-bind="attrs"
                    color="orange"
                    class="ml-1 white--text"
                  >
                    <v-icon>mdi-filter</v-icon>
                  </v-btn>
                </template>
                <small>Filter</small>
              </v-tooltip>
              <v-tooltip bottom color="pink">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    x-small
                    fab
                    v-on="on"
                    v-bind="attrs"
                    color="error"
                    class="ml-1 white--text"
                    @click="delete_dialog = true"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <small>Delete</small>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-data-table
            dense
            :headers="headers"
            :items="airplanes"
            v-model="selected"
            item-key="id"
            show-select
            :single-select="singleSelect"
          >
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single Selelct"
                class="pa-3"
              >
              </v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Add Dialogn -->
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-title> Register new Airplane </v-card-title>
        <v-card-text>
          <v-row class="pt-3">
            <v-col cols="6">
              <v-text-field
                label="Name"
                placeholder="Airplane name here"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Number"
                placeholder="Number of seats here"
                type="number"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small @click="dialog = false" elevation="3">Cancel</v-btn>
          <v-btn color="primary" small @click="save" elevation="3">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Delete Dialog -->
    <v-dialog v-model="delete_dialog" width="300">
      <v-card class="pa-3">
        <v-card-header class="d-flex justify-center">
          <v-icon size="85" color="orange">mdi-alert-circle-outline</v-icon>
        </v-card-header>
        <v-card-text class="d-flex justify-center">
          <h3>Are you sure to delete?</h3>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn small @click="delete_dialog = false">Cancel</v-btn>
          <v-btn color="error" small @click="deleteAirplane">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Airplane",
  data() {
    return {
      singleSelect: false,
      selected: [],
      dialog: false,
      delete_dialog: false,
      delete_alert: false,
      save_alert: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Date Created", value: "created_at" },
        { text: "Date Updated", value: "updated_at" },
      ],
      airplanes: [
        {
          id: 1,
          name: "AC12",
          created_at: "2012-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 2,
          name: "BM12",
          created_at: "2014-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 3,
          name: "AC12 L",
          created_at: "2014-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 4,
          name: "AT66",
          created_at: "2015-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 5,
          name: "ZZ99",
          created_at: "2017-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 6,
          name: "AK12",
          created_at: "2016-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 7,
          name: "JT12",
          created_at: "2012-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 8,
          name: "AS12",
          created_at: "2014-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 9,
          name: "KD12 M",
          created_at: "2014-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 10,
          name: "BMW",
          created_at: "2015-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 11,
          name: "SS73",
          created_at: "2017-01-23",
          updated_at: "2012-01-29",
        },
        {
          id: 12,
          name: "VUE",
          created_at: "2016-01-23",
          updated_at: "2012-01-29",
        },
      ],
    };
  },
  methods: {
    deleteAirplane() {
      this.delete_dialog = false;
      this.delete_alert = true;
    },
    save() {
      this.dialog = false;
      this.save_alert = true;
    },
  },
};
</script>

<style>
</style>