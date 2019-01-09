<template>
<div>
   <!-- Side navigation -->
    <v-navigation-drawer id="drawer" v-model="drawer" fixed temporary v-if="userIsAuthenticated" class="drawer-height">
      <!-- Image and container -->
      <v-list class="top">
        <img src="https://i.imgur.com/0bWwcEd.jpg">
      </v-list>
     
      <!-- Middle part of navigation -->
      <v-list class="mid">
        <v-list-tile 
        v-for="item in items" 
        :key="item.title" 
        :class="item.class" 
        :to="item.link">
          <v-list-tile-action class="icon-padding">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- Bottom part of navigation -->
      <v-list class="bottom">
          <v-list-tile to="/settings">
          <v-list-tile-action 
          class="icon-padding">
            <v-icon>settings</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Log out button -->
        <v-list-tile @click="onLogout" to="/login">
          <v-list-tile-action 
          class="icon-padding">
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Log out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- Burger menu opening button -->
 <div class="bar">
    <div class="banner">
<svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.7 77.55"><title>logo</title><path d="M.17,35.75V1.37H7V14.9H20.49V1.37h6.87V35.75H20.49v-15H7v15Z" transform="translate(-0.12 -0.54)"/><path d="M33.07,18.77A22.07,22.07,0,0,1,34.63,10a16.18,16.18,0,0,1,3.17-4.71,13.24,13.24,0,0,1,4.4-3.1A18.5,18.5,0,0,1,49.52.79q7.52,0,12,4.71t4.51,13.11q0,8.33-4.48,13t-12,4.7q-7.59,0-12.07-4.68T33.07,18.77Zm7.08-.23q0,5.84,2.67,8.85a9.11,9.11,0,0,0,13.52,0q2.63-3,2.63-9T56.4,9.63a8.63,8.63,0,0,0-6.81-2.91,8.69,8.69,0,0,0-6.85,2.94Q40.15,12.61,40.15,18.54Z" transform="translate(-0.12 -0.54)"/><path d="M71.38,1.37h6.87V20a39,39,0,0,0,.26,5.75,5.57,5.57,0,0,0,2.1,3.39,7.26,7.26,0,0,0,4.54,1.28,6.87,6.87,0,0,0,4.41-1.21,4.78,4.78,0,0,0,1.79-3,39.14,39.14,0,0,0,.3-5.84v-19h6.87V19.43A46.9,46.9,0,0,1,98,28.18a9.72,9.72,0,0,1-2.05,4.31,10.37,10.37,0,0,1-4,2.8,17.24,17.24,0,0,1-6.54,1A18.66,18.66,0,0,1,78,35.2a10.57,10.57,0,0,1-4-3,9.5,9.5,0,0,1-1.93-3.81,42.18,42.18,0,0,1-.67-8.72Z" transform="translate(-0.12 -0.54)"/><path d="M104,24.57l6.68-.66a8.27,8.27,0,0,0,2.45,5,7.35,7.35,0,0,0,5,1.59,7.59,7.59,0,0,0,5-1.42,4.24,4.24,0,0,0,1.68-3.32,3.15,3.15,0,0,0-.71-2.08,5.66,5.66,0,0,0-2.47-1.49q-1.21-.42-5.5-1.5-5.52-1.38-7.75-3.4a9,9,0,0,1-3.13-6.92,8.9,8.9,0,0,1,1.47-4.91A9.24,9.24,0,0,1,111,2a16.86,16.86,0,0,1,6.69-1.2q6.4,0,9.64,2.84a10.06,10.06,0,0,1,3.4,7.57l-6.87.3a5.91,5.91,0,0,0-1.89-3.81,6.87,6.87,0,0,0-4.35-1.16,7.79,7.79,0,0,0-4.69,1.24,2.51,2.51,0,0,0-1.09,2.13,2.65,2.65,0,0,0,1,2.09q1.3,1.1,6.31,2.3a33.09,33.09,0,0,1,7.41,2.47,9.59,9.59,0,0,1,3.76,3.49,10.3,10.3,0,0,1,1.36,5.48A10.2,10.2,0,0,1,130,31.27a9.75,9.75,0,0,1-4.59,3.83,19.09,19.09,0,0,1-7.4,1.25q-6.45,0-9.91-3T104,24.57Z" transform="translate(-0.12 -0.54)"/><path d="M137.45,35.75V1.37h25.22V7.19H144.31v7.62h17.08V20.6H144.31V30h19v5.79Z" transform="translate(-0.12 -0.54)"/><path d="M.12,43.12H12.67a24.28,24.28,0,0,1,6.47.66,11.36,11.36,0,0,1,5.13,3.17,15.06,15.06,0,0,1,3.25,5.57,25.62,25.62,0,0,1,1.11,8.13,22.81,22.81,0,0,1-1,7.32A15.19,15.19,0,0,1,24,74a12,12,0,0,1-4.83,2.74A20.57,20.57,0,0,1,13,77.5H.12ZM7,48.94V71.71h5.13a18.5,18.5,0,0,0,4.15-.33A6.31,6.31,0,0,0,19,70a7.31,7.31,0,0,0,1.8-3.32,22.66,22.66,0,0,0,.7-6.3,20.76,20.76,0,0,0-.7-6.12,7.89,7.89,0,0,0-1.95-3.33,6.52,6.52,0,0,0-3.18-1.62,30.84,30.84,0,0,0-5.64-.33Z" transform="translate(-0.12 -0.54)"/><path d="M65.14,77.5H57.67l-3-7.81H41.1L38.29,77.5H31L44.26,43.12h7.26ZM52.49,63.9,47.81,51.14,43.21,63.9Z" transform="translate(-0.12 -0.54)"/><path d="M68.85,77.5V43.12h6.68l13.92,23v-23h6.38V77.5H88.95L75.23,55.08V77.5Z" transform="translate(-0.12 -0.54)"/><path d="M124.87,64.86,131.53,67q-1.53,5.63-5.09,8.36a15.9,15.9,0,0,1-20.18-1.95q-4.36-4.68-4.36-12.79,0-8.58,4.39-13.33a15,15,0,0,1,11.53-4.75A14.06,14.06,0,0,1,128,46.27a13.61,13.61,0,0,1,3.48,6.33l-6.8,1.64A7.3,7.3,0,0,0,122.12,50a7.16,7.16,0,0,0-4.65-1.55,7.7,7.7,0,0,0-6.14,2.74Q109,54,109,60.1q0,6.52,2.32,9.29a7.5,7.5,0,0,0,6,2.77A6.84,6.84,0,0,0,122,70.4,10.25,10.25,0,0,0,124.87,64.86Z" transform="translate(-0.12 -0.54)"/><path d="M137.42,77.5V43.12h25.22v5.82H144.29v7.62h17.08v5.79H144.29v9.36h19V77.5Z" transform="translate(-0.12 -0.54)"/><path d="M177.83,18.52a22.06,22.06,0,0,1,1.55-8.82A16.18,16.18,0,0,1,182.55,5a13.24,13.24,0,0,1,4.4-3.1A18.5,18.5,0,0,1,194.28.54q7.52,0,12,4.71t4.51,13.11q0,8.33-4.48,13t-12,4.7q-7.59,0-12.07-4.68T177.83,18.52Zm7.08-.23q0,5.84,2.67,8.85a9.11,9.11,0,0,0,13.52,0q2.63-3,2.63-9t-2.56-8.82a9.43,9.43,0,0,0-13.66,0Q184.9,12.36,184.9,18.29Z" transform="translate(-0.12 -0.54)"/><path d="M183.23,77.34V43h23.32v5.82H190.1v8.14h14.2v5.82H190.1V77.34Z" transform="translate(-0.12 -0.54)"/><rect x="170.11" y="0.84" width="4.5" height="76.06"/></svg>
</div>
<v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="userIsAuthenticated" fixed id="menu"></v-toolbar-side-icon>
</div>
<!-- TEPMORARY -->
      <v-toolbar v-if="userIsNotAuthenticated">
        <v-toolbar-title>Login in or sign up</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
    <v-btn to="/login" flat>
      <v-icon left>input</v-icon>
      Log in
    </v-btn>
    <v-btn to="/signup" flat>
      <v-icon left>lock_open</v-icon>
      Sign up
    </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <!-- TEPMORARY -->
</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: "home", title: "Home", link: '/'},
        { icon: "video_library", title: "All videos", link: '/videos' },
        { icon: "bookmark_border", title: "Saved videos", link: '/saved-videos' },
        { icon: "calendar_today", title: "Schedule", link: '/schedule' },
         { icon: "queue", title: "Upload new video", link: '/UploadVideo' },
         { icon: "add", title: "Create an event", link: '/AddEvent' }
      ]/* ,
      bottomItems: [
        { icon: "settings", title: "Settings", link: '/settings' },
        { icon: "exit_to_app", title: "Log out", link: '/log-out' }
      ], */
      //
    };
  } //Temporary
  ,
    computed: {
          /* buttons() {
            let buttons = [
          { icon: "lock_open", title: "Log in", link: '/login'}
          ]
          if (this.userIsAuthenticated) {
            buttons = [
            { icon: "exit_to_app", title: "Sign out", link: '/login'}
            ]
          }
            return buttons
          }, */
          userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
          },
          userIsNotAuthenticated () {
            return this.$store.getters.user == null && this.$store.getters.user == undefined
          }
          
  },
  //temporary
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
};
</script>

<style scoped>
.drawer-height {height: 100vh !important;}

.top {
  padding: 0;
  height: 23%;
  margin-bottom: 1%;
}
.top img {
  width: 300px;
  max-height: 100%;
}
.mid {height: 56%;}
.bottom {height: 20%;}

.icon-padding {margin-left: 3%;}

#menu {z-index: 2; margin: 0.3em;}

.banner {
  margin-bottom: 4vh;
  height: 7vh;
  padding: 2vh 0;
  position: absolute;
  text-align: center;
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  z-index: 1;
}
#logo {height: 3.5vh;}

@media (min-width: 1281px) {
.banner {display: none;}
#logo {display: none;}
}

/* .active{
    color: #fff !important;
    background-color: #000070;
    border-radius: 0 50px 50px 0;
    margin-right: 10%;
} */
</style>
