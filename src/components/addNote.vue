<template>
  <div>
    <v-bottom-sheet v-model="sheet">
      <v-icon disabled large slot="activator" color="#9FA8DA!important">playlist_add</v-icon>

      <v-list class="radius">
        <v-subheader class="headline">Add a note</v-subheader>
        <colorpicker></colorpicker>

        <!-- <v-select chips item-avatar="teal" :items="colors" label="Standard"></v-select> -->

        <!--  Note input  -->
        <v-textarea v-model="note" auto-grow label="Your note" rows="1"></v-textarea>

        <!--   Save/cancel buttons    -->
        <v-btn small color="info" @click="snackbar1 = true; sheet=false">Save</v-btn>
        <v-btn small flat @click=" sheet=false">Cancel</v-btn>
      </v-list>
    </v-bottom-sheet>

    <!-- Snackbar for adding notes -->
    <v-snackbar
      class="snack"
      v-model="snackbar1"
      :timeout="timeout"
      :top="y"
      :multi-line="mode"
      color="#fff"
    >
      {{ text1 }}
      <v-btn color="#FF3D00" flat @click="snackbar1 = false">Close</v-btn>
    </v-snackbar>

    
  </div>
</template>

<script>
import colorpicker from './colorpicker.vue'


export default {

  components: {
    colorpicker
  },
  data: () => ({
    sheet: false,
    note: "",
    snackbar1: false,
    snackbar2: false,
    y: "top",
    mode: "multi-line",
    timeout: 4000,
    text1: "Note added succesfully",
 

colors: ['#00BCD4', '#CDDC39', '#E91E63', '#9C27B0']

  }),

  methods: {}
};
</script>


<style scoped>
.radius {
  border-radius: 12px 12px 0 0;
  padding: 10px;
}
.headline {
  padding: 4vw;
  letter-spacing: 1.5em;
  text-align: center;
}
.v-text-field {
  width: 90%;
  margin: 0 auto 3vh;
}

.v-btn {margin-bottom: 5vh;}
</style>