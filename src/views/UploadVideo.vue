<template>
  <v-content class="upload">
    <v-container>
      <v-flex>
        <v-layout row>
          <h2>Upload new video</h2>
        </v-layout>
        <br>
        <form @submit.prevent="onUploadVideo">
           <v-layout row>
            <video id='video'  height="300" controls :src="videoUrl"></video>
             <img :src='thumbnail'>
          </v-layout>
          <br>
          <v-layout row>
            <v-text-field name="title" label="Title" id="title" v-model="title"></v-text-field>
          </v-layout>
          <v-layout row>
            <input type="file" style="display:none" @change="onFilePicked" ref="fileInput">
          </v-layout>
                    <v-layout row>
            <v-textarea
              auto-grow
              name="description"
              label="Description"
              id="description"
              v-model="description"
              rows="1"
            ></v-textarea>
          </v-layout>
          <v-layout row>
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="info"
              class="white--text"
              @click="fileUpload"
            >Browse<v-icon right dark>perm_media</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            class="primary" 
            :disabled="!formIsValid" 
            type="submit" 
            color="success"
            >Upload<v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-layout>
        </form>
      </v-flex>
    </v-container>
  </v-content>     
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      thumbnail: "",
      videoUrl: "",
      description: "",
      video: null
    };
  },
  computed: {
    formIsValid() {
      return this.title !== "" && this.description !== "";
    }
  },

  methods: {

    onUploadVideo() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.video) {
        return;
      }
      
      const videoData = {
        title: this.title,
        thumbnail: this.thumbnail,
        video: this.video,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch("uploadVideo", videoData)
      this.$router.push("/videos")
    },

    fileUpload() {
      this.$refs.fileInput.click();
    },

  

  onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Wrong file type")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.videoUrl = fileReader.result // this is what I need for uploading to database and I need the same with this.thumbnail
       
      })

      fileReader.readAsDataURL(files[0])
    
      this.video = files[0] /// this shows the original video in the video thingy
      const videoElement = document.getElementById('video')
      videoElement.onloadeddata = () => {
      const canvas = document.createElement('canvas')
       canvas.height = videoElement.videoHeight
      canvas.width = videoElement.videoWidth
      canvas.getContext('2d').drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight)
     
      this.thumbnail = canvas.toDataURL("image/png")
    }
     
    } 


 

    /* onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Wrong file type")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.videoUrl = fileReader.result
      })

      fileReader.readAsDataURL(files[0])
      this.video = files[0]
    }  */
  }
}
</script>

<style  scoped>
.upload {margin-top: 10vh;}


</style>

