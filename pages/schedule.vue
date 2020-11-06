<template>
  <div class="calendar_app">
    <div id="app">
      <calendar/>
    </div>
  </div>
</template>
    
<script>
import calendar from '~/components/Calendar.vue'

export default {
  name: 'app',
  components: {
    calendar
  }
}
</script>

<style>
#app {
  margin: 20px auto;
  display: inline-block;
}
.calendar_app{  
  text-align: center;
}
</style>