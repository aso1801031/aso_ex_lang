<template>
  <div>
    <client-only>
      <v-row><vi/></v-row>
      <v-row><tx/></v-row>
      
    </client-only>
  </div>
  
</template>

<script>
import vi from '~/components/Video.vue'
import tx from '~/components/TextChat.vue'
export default {
    
  components: {
    vi,
    tx,

  }
}
</script>
<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>