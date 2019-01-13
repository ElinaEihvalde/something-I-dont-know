<template>
<v-content>
   <div class="wrapper">
<calendar class="calendar"></calendar>
<div class="week-container" v-for="container in containers" :key="container.id">
<h3 class="headline">{{container.hed}}</h3>
<p class="subheading">{{container.sub}}</p>
 <weekCard></weekCard>
</div>
<events class="events"></events>
   </div>
   <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      fixed
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="#ff6d00"
        dark
        fab
      >
        <v-icon>queue</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
  <v-btn
        fab
        dark
        small
        color="indigo"
        to='/AddEvent'
      >
        <v-icon>add</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
</v-content>
</template>


<script>
import calendar from '../components/calendar.vue'
import weekCard from '../components/weekCard.vue'
import events from '../components/events.vue'

 export default {
    components: {
      calendar,
      weekCard,
      events
    },
        data() {
      return {
        containers: [
           {
            id:1,
            hed:'Your weekly schedule', 
            sub: new Date().getFullYear() ,
            link: '#'
          }
          
        ],

          direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
  
        
      }
    },
     computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    }
  

}
</script>

<style scoped>
.calendar {
  margin-bottom: 2.5em;
  margin-top: 7vh;
}
.events {
  margin-bottom: 2.5em;
}
.week-container {
  height: auto;
  margin-bottom: 2.5em;
  padding: 0 0 0 24px;
}
.subheading {
  color: #4657c4;
  margin: unset;
}

@media (min-width: 1025px) {
  .wrapper {
    width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    padding: 0 24px;
  }
  .calendar {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .events {
    grid-column: 2 / 3;
    grid-row: 1;
    padding-top: 5vh;
  }
  .week-container {
    grid-column: 1 / 3;
    grid-row: 2;
    width: 100%;
    padding: 0;
  }
  .container {margin: unset;}


  
}



</style>