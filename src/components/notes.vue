<template>
  <v-layout fluid>
    <h3 class="headline">Notes</h3>
    <v-list  v-for="note in notes" :key="note" style="background-color:#f7f7f7;">
      <div v-if="note">
     <v-list-tile avatar>
        <v-list-tile-avatar color="primary" size="15"></v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title></v-list-tile-title>
          <v-list-tile-sub-title></v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{note}}</v-list-tile-action-text>
        </v-list-tile-action>

      </v-list-tile>

      <v-divider inset></v-divider>
      </div>
    </v-list>
  </v-layout>

</template>

<script>
  export default {
     props: ["videoId"],
  computed: {
    notes() {
     let notesList = []
     this.$store.getters.user.savedVideos.forEach(video => {
       if(video.id === this.videoId){
         console.log(video, this.videoId)
         notesList = video.notes
       }
     });
    return notesList
    }
  }
  }
</script>

<style  scoped>

</style>