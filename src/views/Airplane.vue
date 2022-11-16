<template>
  <v-row>
    <v-col> 
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="8">Airplanes</v-col>
             <v-col cols="4" class="d-flex justify-end">
              <v-tooltip bottom color="purple">
                <template v-slot:activator="{on,attrs}">
                  <v-btn x-small fab v-on="on" v-bind="attrs" color="primary">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                </template>
                <small>Add New</small>
              </v-tooltip>
              <v-tooltip bottom color="pink">
                <template v-slot:activator="{on,attrs}">
                  <v-btn x-small fab v-on="on" v-bind="attrs" color="green" class="ml-1 white--text">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                </template>
                <small>Edit</small>
              </v-tooltip>
              <v-tooltip bottom color="orange">
                <template v-slot:activator="{on,attrs}">
                  <v-btn x-small fab v-on="on" v-bind="attrs" color="orange" class="ml-1 white--text">
                  <v-icon>mdi-filter</v-icon>
                </v-btn>
                </template>
                <small>Filter</small>
              </v-tooltip>
              <v-tooltip bottom color="pink">
                <template v-slot:activator="{on,attrs}">
                  <v-btn x-small fab v-on="on" v-bind="attrs" color="error" class="ml-1 white--text">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                </template>
                <small>Delete</small>
              </v-tooltip>
             </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>

        </v-card-text>
      </v-card>  
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Airplane",
  data(){
    return {
      headers:[],
      airplanes:[
        {id:1, name:'AC12',created_at:'2012-01-23',updated_at:'2012-01-29'},
        {id:2, name:'BM12',created_at:'2014-01-23',updated_at:'2012-01-29'},
        {id:3, name:'AC12 L',created_at:'2014-01-23',updated_at:'2012-01-29'},
        {id:4, name:'AT66',created_at:'2015-01-23',updated_at:'2012-01-29'},
        {id:5, name:'ZZ99',created_at:'2017-01-23',updated_at:'2012-01-29'},
        {id:6, name:'AK12',created_at:'2016-01-23',updated_at:'2012-01-29'},
      ]
    }
  }
};
</script>

<style>
</style>