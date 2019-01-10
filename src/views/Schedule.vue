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