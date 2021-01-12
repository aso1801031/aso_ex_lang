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
     <h1 class="white--text menu" style="text-decoration: none;">
         管理者メニュー
     </h1>
     <div class="logout">
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
      
      
    },
    beforeCreate() {
        firebase.auth().onAuthStateChanged(function(user) {
      firebase.firestore().collection('users').where('mailadress', '==', user.email).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                if(doc.data().admin_flg === "false")
                {
                    location.href="/"
                }
            })
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
  },
  methods: {
    ...mapActions('user', [ 'logout' ]),
    async logoutUser() {
      await this.logout()
      // firebase.auth().signOut().then(function() {
      //   console.log("signout")
      // }).catch(function(error) {
      //   // An error happened.
      // });
      this.$router.push("/login");
    }
  },
}
</script>

<style scoped>
.logout{
    
}
.menu{
    margin-left: 30px;
    margin-right: 50%;
}
</style>
