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
  
  props:['videoId', 'videoList'],
computed: {
  videos() {
    return this.videoList
  }
},
  methods: {
    onLoadVideo(id) {
      this.$router.push("/videos/" + id);
    }
  }
}
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
  z-index: 2;
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



.radius {
  border-radius: 7px;
  min-width: 220px;
  height: 250px;
  background-color: #32889e;
  margin: 2vw 4vw 2vw 0;
  cursor: pointer;
  flex: 0 0 auto;
}


.horizontal {
 width: 100%;
 padding-left:24px;
 margin-right:24px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}



.horizontal::-webkit-scrollbar {
  display: none;
}
@media (min-width: 1025px) {
  .horizontal {
    margin-top: 1em;
    min-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 500px;
    grid-row-gap: 1em;
    grid-column-gap: 1em;
  }
  .radius {
    margin: 0;
    height: 240px;
    width: 100%;
  }
  .radius:nth-of-type(1) {
    height: 500px;
    grid-column: 1 / 3;
    grid-row: 1/3;
  }
  .radius:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  .radius:nth-of-type(3) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .radius:nth-of-type(4) {
    display: none;
  }
  .radius:nth-of-type(5) {
    display: none;
  }
}
</style>