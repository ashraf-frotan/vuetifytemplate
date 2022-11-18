<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="8">
              <div>Timetable</div>
              <v-alert
                color="green"
                dense
                text
                dismissible
                border="left"
                v-model="save_alert"
                >Timetable created successfully!</v-alert
              >
            </v-col>
            <v-col cols="4" class="d-flex justify-end">
              <v-tooltip bottom color="pink">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="primary"
                    small
                    v-on="on"
                    v-bind="attrs"
                    @click="dialog = true"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </template>
                <span>Add New</span>
              </v-tooltip>
              <v-tooltip bottom color="error">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="green"
                    small
                    class="ml-1 white--text"
                    v-on="on"
                    v-bind="attrs"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </template>
                <span>Edit</span>
              </v-tooltip>
              <v-tooltip bottom color="purple">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="orange"
                    small
                    class="ml-1 white--text"
                    v-on="on"
                    v-bind="attrs"
                    ><v-icon>mdi-filter</v-icon></v-btn
                  >
                </template>
                <span>Filter</span>
              </v-tooltip>
              <v-tooltip color="orange" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    color="error"
                    small
                    class="ml-1"
                    v-on="on"
                    v-bind="attrs"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  >
                </template>
                <span>Delete</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="timetables"
            v-model="selected"
            dense
            item-key="id"
            show-select
            :single-select="singleSelect"
            :items-per-page="10"
          >
            <template v-slot:top>
              <v-switch v-model="singleSelect" label="Single Select"></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" width="400">
      <v-card class="pa-2">
        <v-card-title> Add New Timetable </v-card-title>
        <v-card-text>
          <v-select :items="cities" label="From" small></v-select>
          <v-select :items="cities" label="To" small></v-select>
          <v-select :items="days" label="Day" small></v-select>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small @click="dialog = false">Cancel</v-btn>
          <v-btn small color="primary" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Timetable",
  data() {
    return {
      selected: [],
      singleSelect: false,
      dialog: false,
      save_alert: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "From", value: "from" },
        { text: "To", value: "to" },
        { text: "Day", value: "day" },
      ],
      timetables: [
        { id: 1, from: "Dubai", to: "Kabul", day: "Saturday" },
        { id: 2, from: "Kabul", to: "Mazar", day: "Monday" },
        { id: 3, from: "Pert", to: "Frankfort", day: "Sunday" },
        { id: 4, from: "Zurikh", to: "Herat", day: "Friday" },
        { id: 5, from: "Ghazni", to: "Jaghuri", day: "Thursday" },
      ],
      cities: [
        "Dubai",
        "Kabul",
        "Pert",
        "Ghazni",
        "Tehran",
        "Mazar",
        "Washington DC",
      ],
      days: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
    };
  },
  methods: {
    save() {
      this.dialog = false;
      this.save_alert = true;
    },
  },
};
</script>

<style>
</style>