<template>
<v-content>
  <gridContainer></gridContainer>
  <schedule-cont></schedule-cont>
  </v-content>
</template>

<script>
import gridContainer from '../components/gridContainer.vue'
import scheduleCont from '../components/scheduleCont.vue'

export default {
  name: "App",
  components: {
    gridContainer,
    scheduleCont
  }
};
</script>



<!--- <template>
  <HelloWorld />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    }
  }
</script>
-->