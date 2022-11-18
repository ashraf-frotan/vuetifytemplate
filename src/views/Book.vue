<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-col cols="6">
            <div>Books</div>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-tooltip bottom color="purple">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  x-small
                  fab
                  color="primary"
                  @click="dialog = true"
                  ><v-icon small>mdi-plus</v-icon></v-btn
                >
              </template>
              <small>Create New</small>
            </v-tooltip>
            <v-tooltip bottom color="orange">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  x-small
                  fab
                  color="green"
                  class="ml-1 white--text"
                  ><v-icon small>mdi-pencil</v-icon></v-btn
                >
              </template>
              <small>Edit</small>
            </v-tooltip>
            <v-tooltip bottom color="green">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  x-small
                  fab
                  color="orange"
                  class="ml-1 white--text"
                  ><v-icon small>mdi-filter</v-icon></v-btn
                >
              </template>
              <small>Filter</small>
            </v-tooltip>
            <v-tooltip bottom color="error">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  x-small
                  fab
                  color="error"
                  class="ml-1 white--text"
                  ><v-icon small>mdi-delete</v-icon></v-btn
                >
              </template>
              <small>Delete</small>
            </v-tooltip>
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="books"
            :single-select="singleSelect"
            show-select
            v-model="selected"
          >
            <template v-slot:top>
              <v-switch v-model="singleSelect"></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-title>Book Ticket</v-card-title>
        <v-card-text>
          <v-select label="Flight" :items="flights"></v-select>
          <v-text-field
            label="Price"
            placeholder="Enter price here"
          ></v-text-field>
          <v-text-field
            label="Seat"
            placeholder="Enter price here"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small @click="dialog = false">Cancel</v-btn>
          <v-btn small color="primary" @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selected: [],
      singleSelect: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Flight", value: "flight" },
        { text: "Seat", value: "seat" },
        { text: "Price", value: "price" },
        { text: "Passanger", value: "passanger" },
        { text: "Phone", value: "phone" },
      ],
      books: [
        {
          id: 1,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 2,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 3,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 4,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 5,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 6,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 7,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 8,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 9,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 10,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
        {
          id: 11,
          flight: "Ghazni-Paris",
          seat: 12,
          price: 2222.3,
          passanger: "Ali Ahmad",
          phone: "0795881586",
        },
      ],
      flights: ["Jaghuri-Tehran", "Kabul-Herat", "Shanghai-Doshanba"],
    };
  },
};
</script>

<style>
</style>