<template>
  <div class="vertical">
    <v-card class="radius" v-for="video in videos" :key="video.id">
      <v-icon dark @click="bookmark = bookmarkFull">{{bookmark}}</v-icon>
     <!--  <v-img @click="onLoadVideo(video.id)" :src="video.thumbnail" height="100%"> -->
         <v-img @click="onLoadVideo(video.id)" :src="video.thumbnail" height="100%">
 </v-img>
        <v-container fill-height fluid>
          <v-layout fill-height>
            <h5 class="title">{{video.title}}</h5>
          
          </v-layout>
        </v-container>
     <!--  </v-img> -->
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmark: "bookmark_border",
      bookmarkFull: "bookmark"

      
    };
  },

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
  position: absolute;
  bottom: 2vw;
  z-index: 2;
}

.radius {
width: 100%;
  height: 400px;
  background-color: #32889e;

  

  margin: 2vw 2vw 2vw 0;
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
  right: 2vh;
  top: 2vh;
}
</style>