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
              <v-btn small color="primary" elevation="5"
                ><v-icon small>mdi-plus</v-icon></v-btn
              >
              <v-btn small color="success" class="ml-1" elevation="5"
                ><v-icon small>mdi-pencil</v-icon></v-btn
              >
              <v-btn small color="orange" class="ml-1 white--text" elevation="5"
                ><v-icon small>mdi-filter</v-icon></v-btn
              >
              <v-btn small color="error" class="ml-1"
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
    };
  },
};
</script>

<style>
.checkbox {
  margin: 0 !important;
  padding: 0 !important;
}
</style>