<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-col cols="6">
            <div>Passangers</div>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-tooltip bottom color="purple">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-on="on"
                  v-bind="attrs"
                  small
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
                  small
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
                  small
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
                  small
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
            :items="passangers"
            v-model="selected"
            :single-select="singleSelect"
            show-select
            item-key="id"
            :items-per-page="8"
          >
            <template v-slot:top>
              <v-switch v-model="singleSelect"> </v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" width="800">
      <v-card class="pa-2">
        <v-card-title> Add New Passanger </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6"
              ><v-text-field
                placeholder="Enter passanger name here"
                label="Name"
                dense
                outlined
              ></v-text-field
            ></v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Enter passanger lastname here"
                label="Lastname"
                dense
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6"
              ><v-text-field
                placeholder="Enter passanger email here"
                label="Email"
                dense
                outlined
              ></v-text-field
            ></v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Enter passanger phone here"
                label="Phone"
                dense
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6"
              ><v-text-field
                placeholder="Enter passanger address here"
                label="Address"
                dense
                outlined
              ></v-text-field
            ></v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Enter passanger tazkira ID here"
                label="Tazkira ID"
                dense
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" small @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Passanger",
  data() {
    return {
      selected: [],
      singleSelect: false,
      dialog: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Tazkira ID", value: "tazkira_id" },
        { text: "Phone", value: "phone" },
        { text: "Email", value: "email" },
        { text: "Address", value: "address" },
      ],
      passangers: [
        {
          id: 1,
          name: "Ashraf Frotan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 2,
          name: "Jawid Habibi",
          tazkira_id: "343234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 3,
          name: "Milad Hekmat",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 4,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 5,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 6,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 7,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 8,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 9,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 10,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 11,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
        {
          id: 12,
          name: "Mehran Ali Jan",
          tazkira_id: "123234",
          phone: "0798665544",
          email: "ashraf@gmail.com",
          address: "Address",
        },
      ],
    };
  },
};
</script>

<style>
</style>