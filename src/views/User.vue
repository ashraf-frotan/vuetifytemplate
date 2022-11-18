<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="8">
              <div>Users</div>
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
            :headers="headers"
            :items="users"
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
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title>Add new User</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6"
              ><v-text-field
                label="Name"
                placeholder="Enter name here"
                rounded
                outlined
                dense
              ></v-text-field
            ></v-col>
            <v-col cols="6"
              ><v-text-field
                label="Email"
                placeholder="Enter email here"
                rounded
                outlined
                dense
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select
                label="Role"
                :items="roles"
                dense
                outlined
                rounded
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="Profile Image"
                rounded
                outlined
                dense
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6"
              ><v-text-field
                label="Password"
                placeholder="Enter password here"
                rounded
                outlined
                dense
                type="password"
              ></v-text-field
            ></v-col>
            <v-col cols="6"
              ><v-text-field
                label="Confirm Password"
                placeholder="Enter confirm password here"
                rounded
                outlined
                dense
                type="password"
              ></v-text-field
            ></v-col>
          </v-row>
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
  name: "User",
  data() {
    return {
      selected: [],
      singleSelect: false,
      roles: ["Admin", "User"],
      dialog: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Create Date", value: "created_at" },
        { text: "Update Date", value: "updated_at" },
      ],
      users: [
        {
          id: 1,
          name: "ashraf",
          email: "ashraf@gmail.com",
          role: "Admin",
          created_at: "2022-10-10",
          updated_at: "2022-11-12",
        },
        {
          id: 2,
          name: "milad",
          email: "ashraf@gmail.com",
          role: "User",
          created_at: "2022-10-10",
          updated_at: "2022-11-12",
        },
        {
          id: 3,
          name: "jawid",
          email: "ashraf@gmail.com",
          role: "User",
          created_at: "2022-10-10",
          updated_at: "2022-11-12",
        },
        {
          id: 4,
          name: "mehran",
          email: "ashraf@gmail.com",
          role: "Admin",
          created_at: "2022-10-10",
          updated_at: "2022-11-12",
        },
        {
          id: 5,
          name: "ashraf",
          email: "ashraf@gmail.com",
          role: "Admin",
          created_at: "2022-10-10",
          updated_at: "2022-11-12",
        },
      ],
    };
  },
};
</script>

<style>
</style>