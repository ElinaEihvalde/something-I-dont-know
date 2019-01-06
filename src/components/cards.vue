<template>
  <v-layout class="horizontal">
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
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      bookmark: "bookmark_border",
      bookmarkFull: "bookmark"
    };
  },
  props:['videoId'],

  computed: {
    videos () {
      return this.$store.getters.loadedVideos
    },
    video() {
      return this.$store.getters.loadedVideo(this.id);
    }

    
  },

  methods: {
    onLoadVideo(id) {
      this.$router.push("/videos/" + id);
    }
  }
};
</script>
<style>
.v-image__image,
.v-image__image--cover {
  border-radius: 7px;
}
</style>

<style scoped>
.top-icon {
  position: absolute;
  z-index: 100000;
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
  left: 50px;
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
  border-radius: 7px;
  min-width: 200px;
  height: 250px;
  background-color: #32889e;
  margin: 2vw 3vw 2vw 0;
  cursor: pointer;
}
.horizontal {
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.horizontal::-webkit-scrollbar {
  display: none;
}
</style>