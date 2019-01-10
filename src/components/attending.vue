<template>
  <div>
    <v-bottom-sheet v-model="sheet">
      <v-icon disabled slot="activator" color="#9FA8DA!important">more_horiz</v-icon>

      <v-list class="radius">
        <v-subheader class="headline">Can't attend the class?</v-subheader>
        <div class="center">
          <v-btn flat @click="snackbar1 = true; sheet=false">I can't come</v-btn>
          <v-btn color="info" @click="snackbar2 = true; sheet=false">I will be there</v-btn>
        </div>
      </v-list>
    </v-bottom-sheet>

    <v-snackbar class="snack"
      v-model="snackbar1"
      :timeout="timeout"
      :top="y === 'top'"
      :multi-line="mode === 'multi-line'"
      color="#fff"
      
    >
      {{ text1 }}
      <v-btn color="#FF3D00" flat @click="snackbar1 = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar class="snack"
      v-model="snackbar2"
      :timeout="timeout"
      :top="y === 'top'"
      :multi-line="mode === 'multi-line'"
      color="#fff"
    >
      {{ text2 }}
      <v-btn color="#FF3D00" flat @click="snackbar1 = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    snackbar1: false,
    snackbar2: false,
    y: "top",
    mode: "multi-line",
    timeout: 4000,
    text1: "Don't forget to train at home!",
    text2: "See You in class!",
   
  }),

  methods: {}
};
</script>
<style>

.v-snack__wrapper {border-radius: 12px!important}


.snack {
margin-top: 18px!important;
width: 95%;
margin: auto;
color: black;
font-size: 1.1em;
}
</style>

<style scoped>
.radius {
  border-radius: 12px 12px 0 0;
  
}
.headline {
  padding-top: 4vw;
  letter-spacing: 1.5em;
  text-align:center;
}

.center {
  padding: 5vw 0;
  
}


</style>