<template>
  <v-toolbar>
    <v-spacer></v-spacer>
    <v-btn 
    v-for="button in buttons" 
        :key="button.title" 
        :class="button.class" 
        :to="button.link"
        flat>
      <v-icon left>{{ button.icon }}</v-icon>
      {{ button.title }}
    </v-btn>
  </v-toolbar>

</template>

<script>
import sidenav from './sidenav.vue'
export default {
  components: {
      sidenav
    },
  data() {
    return {
 
    }
  },
  computed: {
          buttons() {
            let buttons = [
          { icon: "lock_open", title: "Log in", link: '/login'}
          ]
          if (this.userIsAuthenticated) {
            buttons = [
            { icon: "exit_to_app", title: "Sign out", link: '/login'}
            ]
          }
            return buttons
          },
          userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
          }
  },
}
</script>

<style scoped>

/* .active{
    color: #fff !important;
    background-color: #000070;
    border-radius: 0 50px 50px 0;
    margin-right: 10%;
} */
</style>
