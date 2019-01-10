<template>
  <div class="page-container">
    <v-layout>
      <div class="vid-container">
        <v-btn icon flat class="btn"  @click="$router.go(-1)">
          <v-icon large>arrow_back</v-icon>
           </v-btn>
        <video
          width="100%"
          preload="metadata"
         controls
          controlslist="nodownload"
          autoplay
          :src="video.videoUrl"
          id="video"
          v-play="playing"
        >
        </video>
     
      </div>
    </v-layout>
    <v-layout>
      <div class="description">
        <div class="inline">
        <h3 class="headline">{{video.title}}</h3>
         <addNote v-if="videoIsSaved" v-bind:videoId="this.id"></addNote>
        </div>
        
        <p class="subheading">{{video.date | event}}</p>
        <p class="body-1">{{video.description}}</p>

        <notes v-if="videoIsSaved" v-bind:videoId="this.id"></notes>
      </div>
    </v-layout>
  </div>
</template>

<script>
import addNote from '../components/addNote.vue'
import notes from '../components/notes.vue'

export default {
  components:{
    addNote,
    notes
  },
 
  props: ["id"],
  
  computed: {
    video() {
      return this.$store.getters.loadedVideo(this.id);
    },
    videoIsSaved() {
      let isSaved = false
      this.$store.getters.user.savedVideos.forEach(video => {
        if(video.id === this.id) {
          isSaved = true
        }
      });
      return isSaved
    }
 
  }
}
</script>

<style  scoped>
.inline {display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 5vw;}
.btn {position: absolute; z-index: 20; color:#fff;}
#video {
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
  margin: 2vw auto;
   border-radius: 7px;
  }
  #video {height: 35vw; width: 100%; }
.page-container {width: 70%; margin: auto;}

.headline { font-size: 2vw!important; padding-bottom: 1vw;}

.subheading, .body-1 {font-size: 1.vw!important;}

.btn{left: 20px; color:#000; }
}

</style>