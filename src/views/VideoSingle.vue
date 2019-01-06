<template>
  <div class="page-container">
    <v-layout>
      <div class="vid-container">
        <video
          class="video"
          width="100%"
          preload="metadata"
          controls
          controlslist="nodownload"
          
          :src="video.videoUrl"
          id="video"
        ></video>
      </div>
    </v-layout>
       <div id="video-controls">
          <v-btn type="button" id="play-pause">Play</v-btn>
          <input type="range" id="seek-bar" value="0">
          <button type="button" id="mute">Mute</button>
          <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
          <v-btn type="button" id="full-screen">Full-Screen</v-btn>
        </div>
    <v-layout>
      <div class="description">
        <h3 class="headline">{{video.title}}</h3>
        <saveVideoModal :videoId="video.id"></saveVideoModal>
        <p class="subheading">{{video.date | event}}</p>
        <p class="body-1">{{video.description}}</p>
      </div>
    </v-layout>
  </div>
</template>

<script>

export default {
  // I don't know what I'm doing
  props: ["id"],
  computed: {
    video() {
      return this.$store.getters.loadedVideo(this.id);
    }
  }
};
</script>

<style  scoped>

/* #video-controls {
  position: absolute;

} */
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

@media (min-width: 1281px) {
.vid-container{
  width: 100%;
  background-color: rgb(10, 10, 10);
  text-align: center;
  height: 35vw;
  margin: auto;
  }
  #video {height: 35vw; width: 100%;}
.page-container {width: 70%; margin: auto;}

}
</style>