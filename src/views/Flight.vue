<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="6"
              ><div>Flights</div>
              <v-alert
                dense
                border="left"
                color="success"
                text
                v-model="save_alert"
                >Flight added succesfully!</v-alert
              ></v-col
            >
            <v-col cols="6" class="d-flex justify-end">
              <v-tooltip bottom color="pink">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    fab
                    v-bind="attrs"
                    x-small
                    color="primary"
                    @click="dialog = true"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </template>
                <span>Create New</span>
              </v-tooltip>
              <v-tooltip bottom color="purple">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    fab
                    v-bind="attrs"
                    x-small
                    color="green"
                    class="ml-1 white--text"
                    ><v-icon small>mdi-pencil</v-icon></v-btn
                  >
                </template>
                <span>Edit</span>
              </v-tooltip>
              <v-tooltip bottom color="purple">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    fab
                    v-bind="attrs"
                    x-small
                    color="orange"
                    class="ml-1 white--text"
                    ><v-icon>mdi-filter</v-icon></v-btn
                  >
                </template>
                <span>Filter</span>
              </v-tooltip>
              <v-tooltip bottom color="error">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-on="on"
                    fab
                    v-bind="attrs"
                    x-small
                    color="error"
                    class="ml-1"
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
            :items="items"
            v-model="selected"
            :single-select="singleSelect"
            show-select
            item-key="id"
            dense
          >
            <template v-slot:top>
              <v-switch label="Single select" v-model="singleSelect">
              </v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" width="600">
      <v-card class="pa-2">
        <v-card-title>Add New Flight</v-card-title>
        <v-card-text>
          <v-row class="d-flex justify-space-around">
            <v-col cols="6">
              <v-select :items="flights" label="Flights" dense></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="airplanes" label="Airplanes" dense></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-dialog
                ref="dialog"
                v-model="modal2"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="Time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker v-if="modal2" v-model="time" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal2 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(time)">
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small @click="dialog = false">Cancel</v-btn>
          <v-btn small color="primary" @click="saveFlight">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Flight",
  data() {
    return {
      selected: [],
      singleSelect: false,
      dialog: false,
      menu: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      time: null,
      modal2: false,
      save_alert: false,
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "Timetable",
          value: "timetable",
        },
        {
          text: "Airplane",
          value: "airplane",
        },
        {
          text: "Date",
          value: "date",
        },
        {
          text: "Time",
          value: "time",
        },
      ],
      items: [
        {
          id: 1,
          timetable: "Kabul-Kandahar",
          airplane: "AGB12",
          date: "2012-02-11",
          time: "02:00 AM",
        },
        {
          id: 2,
          timetable: "Jaghuri-Tehran",
          airplane: "AGB10",
          date: "2012-02-11",
          time: "02:00 AM",
        },
        {
          id: 3,
          timetable: "Nemroz-Kandahar",
          airplane: "AGB12",
          date: "2012-02-11",
          time: "02:00 AM",
        },
        {
          id: 4,
          timetable: "Dubai-Pert",
          airplane: "AGB12",
          date: "2012-02-11",
          time: "02:00 AM",
        },
        {
          id: 8,
          timetable: "Mazar-Herat",
          airplane: "AGB12",
          date: "2012-02-11",
          time: "02:00 AM",
        },
        {
          id: 5,
          timetable: "Kapisa-Badakhshan",
          airplane: "AGB12",
          date: "2012-02-11",
          time: "02:00 AM",
        },
        {
          id: 6,
          timetable: "Dehli-Zabul",
          airplane: "AGB12",
          date: "2012-02-11",
          time: "02:00 AM",
        },
      ],
      flights: ["Jaghuri-Tehran", "Kabul-Herat", "Shanghai-Doshanba"],
      airplanes: ["AC12", "AC34", "AC55", "PC12"],
    };
  },
  methods: {
    saveFlight() {
      this.dialog = false;
      this.save_alert = true;
    },
  },
};
</script>

<style>
</style>
