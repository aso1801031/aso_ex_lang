<template>
     <v-app >
        <nuxt />
     </v-app>
</template>
<script>
export default {
   middleware({ store, redirect }) {
      // If the user is not authenticated
      if (store.getters['user/isAuthenticated']) {
        return redirect('/home')
      }
    },
}
</script>
<style scoped>
    
</style>
