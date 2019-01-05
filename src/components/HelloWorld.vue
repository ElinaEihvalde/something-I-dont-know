<template>
  <v-app dark>
<v-navigation-drawer v-model="sideNav" fixed>
<v-list>
  <v-list-tile>
    <v-list-tile-action>
      <v-icon>home</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>videos</v-list-tile-content>
  </v-list-tile>
</v-list>
</v-navigation-drawer>
   <v-toolbar>
     <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
<v-toolbar-title>House of dance</v-toolbar-title>

<v-spacer></v-spacer>
<v-toolbar-items>
  
<v-btn flat><v-icon left>home</v-icon>Something</v-btn>

</v-toolbar-items>
   </v-toolbar>
 
   <main>
   </main>
  </v-app>
</template>

<script>
  export default {
  data () {
    return {
      sideNav: false
      //
    }
  }
}
</script>

<style>

</style>
