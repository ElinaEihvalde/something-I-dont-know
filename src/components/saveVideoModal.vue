<template>
  <v-dialog persistent v-model="saveDialog">
    <v-btn icon flat color="white" slot="activator">
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
              <v-btn type="sumbit" class="info" @click="onSave" >OK</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
props: ['videoId'],

  data: () => ({
    saveDialog: false
  }),
  

  computed: {
    videoIsSaved() {
    return this.$store.getters.user.savedVideos.indexOf(this.videoId) > -1
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

