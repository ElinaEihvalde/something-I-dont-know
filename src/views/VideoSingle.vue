<template>
  <v-container>
    <v-layout>
      <div>
      <video
        class="video"
        width="100%"
        preload="metadata"
        controlslist="nodownload"
        controls
        :src="video.videoUrl"
        ></video>
        <img width="100%" :src="video.thumbnail">
      </div>
    </v-layout>
    <v-layout>
      <div class="description">
        <h3 class="headline">{{video.title}}</h3>
        <saveVideoModal :videoId="video.id"></saveVideoModal>
        <p class="subheading">{{video.date | event}}</p>
        <p class="body-1">{{video.description}}</p>
      </div>
    </v-layout>
   
  </v-container>
</template>

<script>

export default {
  
  props: ["id"],
  computed: {
    video() {
      return this.$store.getters.loadedVideo(this.id);
    }
  }
};
</script>

<style  scoped>
.video {
  border-radius: 0 0 7px 7px;
}
.description {
  padding-left: 24px;
  margin-top: 2vh;
}
.subheading {
  color: #3f51b5;
}
</style>