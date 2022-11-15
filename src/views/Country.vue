<template>
  <v-row>
    <v-col>
      <v-card elevation="6" class="pa-5">
        <v-card-title>
          <v-row>
            <v-col sm="12" md="6" lg="6" class="font-weight-bold">
              Countries
            </v-col>
            <v-col sm="12" md="6" lg="6" class="d-flex justify-end">
              <v-btn small color="primary" elevation="5" @click="dialog=true"
                ><v-icon small>mdi-plus</v-icon></v-btn
              >
              <v-btn small color="success" class="ml-1" elevation="5"
                ><v-icon small>mdi-pencil</v-icon></v-btn
              >
              <v-btn small color="orange" class="ml-1 white--text" elevation="5"
                ><v-icon small>mdi-filter</v-icon></v-btn
              >
              <v-btn small color="error" class="ml-1" @click="delete_dialog=true"
                ><v-icon small>mdi-delete</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    <v-checkbox
                      class="checkbox"
                      hide-details
                      dense
                    ></v-checkbox>
                  </th>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>
                    <v-checkbox
                      class="checkbox"
                      hide-details
                      dense
                    ></v-checkbox>
                  </td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <div>
            <v-pagination v-model="page" :length="3"></v-pagination>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-dialog
      v-model="dialog"
      max-width="300"
    >
      <v-card>
        <v-card-title class="text-h9">
          Register Country
        </v-card-title>

        <v-card-text>
            <v-row>
              <v-col cols="12" class="pa-3">
                <v-text-field label="Name" placeholder="Enter country code here" v-model="name" dense rounded outlined></v-text-field>
              </v-col>
            </v-row>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          
          <v-btn
            color="green"
            @click="dialog = false"
            small
          >
            Cancel
          </v-btn>
          <v-btn
            small
            color="primary"
            @click="dialog = false"
          >
            Save
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="delete_dialog"
      max-width="300"
    >
      <v-card>
        <v-card-title class="text-h9 d-flex justify-center">
          <v-icon size="85" color="orange">mdi-alert-circle-outline</v-icon>
        </v-card-title>

        <v-card-text class="d-flex text-center">
            <v-row>
              <v-col cols="12" class="pa-3 text-h9">
                <h3 class="text-h9">
                  Are you sure to delete?
                </h3>
              </v-col>
            </v-row>

        </v-card-text>

        <v-card-actions class="d-flex justify-center">

          
          <v-btn
            color="primary"
            @click="delete_dialog = false"
            small
          >
            Cancel
          </v-btn>
          <v-btn
            small
            color="error"
            @click="delete_dialog = false"
          >
            Yes
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 11, name: "Afghanistan" },
        { id: 12, name: "Japan" },
        { id: 13, name: "Dubai" },
      ],
      page: 2,
      dialog:false,
      name:'',
      delete_dialog:false
    };
  },
  watch:{
    dialog(){
      this.name=''
    }
  }
};
</script>

<style>
.checkbox {
  margin: 0 !important;
  padding: 0 !important;
}
</style>