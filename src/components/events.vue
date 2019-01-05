<template>
  <v-container fluid>
    <h5 class="headline">Upcoming events</h5>
    <v-list v-for="event in events" :key="event.id">
      <v-list-tile avatar>
        <v-list-tile-avatar color="primary" size="15"></v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{event.date | event}}</v-list-tile-title>
          <v-list-tile-sub-title>{{event.event}}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{ event.time | time}}</v-list-tile-action-text>
        </v-list-tile-action>

      </v-list-tile>

      <v-divider inset></v-divider>
    </v-list>
  </v-container>
</template>




<script>
export default {
  computed: {
    events() {
      return this.$store.getters.createdEvents
    }
  }
}
</script>

<style scoped>
.v-list {
  width: 100%;
}

.headline {
  margin: 2vh 0;
}
</style>