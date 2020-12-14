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
     <div>
        <button onclick="location.href='login" @click="logoutUser">ログアウト</button>
        <img src="@/assets/logout.png" width='16px' height="16px">
    </div>


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
import firebase from '~/plugins/firebase'
import { mapActions } from "vuex";
export default {
  middleware({ store, redirect }) {
      // If the user is not authenticated
      if (!store.getters['user/isAuthenticated']) {
        return redirect('/home')
      }
      firebase.firestore().collection('users').get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log("a");
            })
        })
      
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
