<template>
  <v-layout class="block" fluid>
    <h3 class="headline">Notes</h3>
    <v-list row v-for="note in notes" :key="note" style="background-color:#f7f7f7;">
      <div v-if="note">
        <v-list-tile avatar>
          <v-list-tile-avatar color="#ff6d00" size="15"></v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{note}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>time</v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider ></v-divider>
      </div>
    </v-list>
  </v-layout>
</template>

<script>
export default {
  props: ["videoId"],
  computed: {
    notes() {
      let notesList = [];
      this.$store.getters.user.savedVideos.forEach(video => {
        if (video.id === this.videoId) {
          console.log(video, this.videoId);
          notesList = video.notes;
        }
      });
      return notesList;
    }
  }
};
</script>

<style  scoped>
.v-list {
  width: 100%;
}

.block{display: block;}

.headline {
  margin: 2vw 0 0;
}

</style>