<template>
  <v-layout fluid>
    <h3 class="headline">Notes</h3>
    <v-list v-for="event in events" :key="event.id" style="background-color:#f7f7f7;">
      <v-list-tile avatar>
        <v-list-tile-avatar color="primary" size="15"></v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{event.date | event}}</v-list-tile-title>
          <v-list-tile-sub-title>{{event.event}}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>time</v-list-tile-action-text>
        </v-list-tile-action>

      </v-list-tile>

      <v-divider inset></v-divider>
    </v-list>
  </v-layout>

</template>

<script>
  export default {
   
  }
</script>

<style  scoped>

</style>