<template>
  <v-container>
    <v-flex>
      <v-tabs fixed-tabs v-model="active_tab">
        <v-tab v-for="tab in tabs" :key="tab.id"  >{{ tab.title }}</v-tab>
        <v-tab-item>
          <v-layout row>
            <largeCards></largeCards>
          </v-layout>
        </v-tab-item>
        <v-tab-item >
          <v-layout row>
            <savedLargeCards></savedLargeCards>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-container>
</template>

<script>
import largeCards from "../components/largeCards.vue"
import savedLargeCards from "../components/savedLargeCards.vue";

export default {
  components: {
    largeCards,
      savedLargeCards
  },
  data() {
    return {
         active_tab: 1,
      tabs: [{ title: "All",id:'1' }, { title: "Saved", id:'2' }]
    }
  }
}
</script>

<style>
/* .theme--light.v-btn-toggle {
  background: transparent !important;
}
.v-btn--active:before,
.v-btn:hover:before,
.v-btn:focus:before {
  background: transparent !important;
  border-bottom: solid black 2px;
}
.v-btn-toggle--selected {
  box-shadow: none;
}
.v-btn:before {
  opacity: 1;
}
.flex {
  text-align: center;
}
.v-btn-toggle .v-btn {
  padding: 0 35px;
} */
.theme--light.v-tabs__bar {
  background-color: transparent;
  padding: 0 12.5% 20px;
  text-align: center;
}
.v-tabs__slider.accent {
  background-color: black !important;
  border-color: black !important;
  width: 100%;
}

.v-tabs__div {
  font-size: 12px;
}
.container {
  padding-top: 0;
}
</style>
