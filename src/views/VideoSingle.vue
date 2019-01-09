<template>
  <div class="page-container">
    <v-layout>
      <div class="vid-container">
        <v-btn icon flat class="btn" color="white" @click="$router.go(-1)">
          <v-icon large>arrow_back</v-icon>
           </v-btn>
        <video
          class="video"
          width="100%"
          preload="metadata"
         controls
          controlslist="nodownload"
          autoplay
          :src="video.videoUrl"
          id="videoElement"
          v-play="playing"
        >
        </video>
     
      </div>
    </v-layout>
       <div class="controls" style="display:none" >
          <v-btn v-show="paused" @click="play">Play</v-btn>
           <v-btn v-show="playing" @click="pause">Pause</v-btn>
          <input type="range" id="seek-bar" value="0">
          <button type="button" id="mute">Mute</button>
          <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
          <v-btn type="button" id="full-screen">Full-Screen</v-btn>
        </div>
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
   /* data() {
     return{
       playing: false
       }
  },
 methods: {
   play() {
      this.playing = true;
    },
    pause() {
      this.playing = false;
    }
 }, */
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
   /*  paused() {
      return !this.playing;
    } */
  }/* ,

   directives: {
    play: {
      bind(el, binding, vnode) {
        el.addEventListener('playing', () => {
          vnode.context[binding.expression] = !el.paused;
        });
        el.addEventListener('pause', () => {
          vnode.context[binding.expression] = !el.paused;
        });
        vnode.context[binding.expression] = !el.paused;
      },
      update(el, binding) {
        if (el.paused) {
          if (binding.value) {
            el.play();
          }
        } else if (!binding.value) {
          el.pause();
        }
      }
    }
  }, */
}
</script>

<style  scoped>
.inline {display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 5vw;}
.btn {position: absolute; z-index: 1000;}
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