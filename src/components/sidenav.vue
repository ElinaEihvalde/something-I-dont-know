<template>
<div>
   <!-- Side navigation -->
    <v-navigation-drawer id="drawer" v-model="drawer" absolute temporary v-if="userIsAuthenticated" class="drawer-height">
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
<v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="userIsAuthenticated"></v-toolbar-side-icon>
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

/* .active{
    color: #fff !important;
    background-color: #000070;
    border-radius: 0 50px 50px 0;
    margin-right: 10%;
} */
</style>
