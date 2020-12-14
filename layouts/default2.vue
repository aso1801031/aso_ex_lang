<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="secondary white--text"
    >
     <h1>
      <nuxt-link to='/' class="white--text" style="text-decoration: none;">
       Alacarte
      </nuxt-link>
     </h1>


    </v-app-bar>
    <v-main class="info">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
