<template>
  <v-bottom-sheet persistent v-model="saveDialog">
    <v-btn icon flat color="white"  slot="activator">
      <v-icon v-if="!videoIsSaved">bookmark_border</v-icon>
      <v-icon v-else>bookmark</v-icon>
    </v-btn>

    <v-card class="radius">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title v-if="videoIsSaved">Remove from saved?</v-card-title>
            <v-card-title v-else>Save this video?</v-card-title>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat @click="saveDialog = false">Cancel</v-btn>
              <v-btn v-if="videoIsSaved" type="sumbit" class="info" @click="onSave" >Remove</v-btn>
              <v-btn v-else type="sumbit" class="info" @click="onSave" >Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
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

    <v-snackbar
      class="snack"
      v-model="snackbar2"
      :timeout="timeout"
      :top="y"
      :multi-line="mode"
      color="#fff"
    >
      {{ text2 }}
      <v-btn color="#FF3D00" flat @click="snackbar1 = false">Close</v-btn>
    </v-snackbar>
    </v-card>
  </v-bottom-sheet>


  
</template>


<script>
export default {
props: ['videoId'],

  data: () => ({
    saveDialog: false,
    snackbar1: false,
     snackbar2: false,
    y: "top",
    mode: "multi-line",
    timeout: 4000,
    text1: "Video saved succesfully",
    text2: "Video removed from saved"
  }),
  

  computed: {
    videoIsSaved() {
    let isSaved = false;
    this.$store.getters.user.savedVideos.forEach(element => {
      if(element.id === this.videoId) {
        isSaved = true;
      } 
    })
    return isSaved
    }
  },

  methods: {
    onSave() {
      if (this.videoIsSaved) {
        this.$store.dispatch("userRemovedVideos", this.videoId)
        
        this.saveDialog = false
         
      } else {
        this.$store.dispatch("userSavedVideos", this.videoId)

        this.saveDialog = false
         
      }
      
    }
  }
}
</script>

<style lang="sass">
.radius 
 border-radius: 7px
</style>

