<template>
<v-content>
<calendar></calendar>
<scheduleCont></scheduleCont>
<events></events>
</v-content>

</template>


<script>
import calendar from '../components/calendar.vue'
import scheduleCont from '../components/scheduleCont.vue'
import events from '../components/events.vue'

  export default {
    name:'App',
    components: {
      calendar,
      scheduleCont,
      events
    }

}
</script>

<style>


</style>
 