<template>
  <div class="vertical">
    <v-card class="radius" v-for="video in videos" :key="video.id">
      <v-card-actions class="top-icon" >
      <saveVideoModal v-bind:videoId="video.id"></saveVideoModal>
      </v-card-actions>
      <v-img @click="onLoadVideo(video.id)" :src="video.thumbnail" height="100%">
        <v-container class="scrim" fill-height fluid>
          <v-layout fluid fill-height>
            <v-icon class="bottom-icon" medium dark >play_circle_filled</v-icon>
            <div class="bottom-title"> 
            <h5 class="title">{{video.title}}</h5>
            <p class="body-1">{{video.date | event}}</p>
            </div>
          </v-layout>
        </v-container>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  

  computed: {
    videos() {
      return this.$store.getters.loadedVideos
    }
  },

  methods: {
    onLoadVideo(id) {
      this.$router.push("/videos/" + id);
    }
  }
};
</script>

<style  scoped>
.title {
  color: #fff;
  bottom: 2em;
  z-index: 1;
}

.top-icon {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
}

.scrim {background-image: linear-gradient(to top, rgba(0,0,0,0.8), transparent);}

.bottom-icon {
  position: absolute;
  z-index: 1;
  left: 2vh;
  bottom: 3vh;
}

.bottom-title {
  color: #fff;
  position: absolute;
  bottom: 0;
 margin-left: 2.5em;
  z-index: 2;
}

.inline {
  display: grid !important;
  grid-template-columns: 1fr 5fr;
  margin: unset;
  padding: unset;
  width: 100%;
}
.inline i {
  bottom: 0;
}

.radius {
width: 100%;
  height: 400px;
  background-color: #32889e;
 margin: 1em 0 2em 0;
  cursor: pointer;
}
.vertical {
  width: 100%;
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
}
.vertical::-webkit-scrollbar {
  display: none;
}

i {
  position: absolute;
  z-index: 1;

}

@media (min-width: 1025px) {

.vertical {
  height: auto;
  min-width: 100%;
  display: grid;
  overflow-x: auto;
  overflow-y: hidden;
grid-template-columns: repeat(4, 1fr); 
  grid-column-gap: 20px;

}
.radius {
  width: 100%;
  height: 400px;
  cursor: pointer;
 
}


}
</style>