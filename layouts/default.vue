<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="secondary white--text"
    >
     <h1>
      <nuxt-link to='/home' class="white--text" style="text-decoration: none;">
       Alacarte
      </nuxt-link>
     </h1>
      <v-spacer />
      <div v-for="(item,i) in items"
          :key="i"
          :to="item.to"
          :src="item.icon"
          router
          exact
        >
          <nuxt-link v-bind='item' class="white--text mr-3" style="text-decoration: none;">
            {{item.title}}
            
            <v-icon medium color="white darken-2">  {{item.icon}} </v-icon>
            

          </nuxt-link>
      </div>
      <div>
        <button onclick="location.href='login" @click="logoutUser">ログアウト
          <v-icon medium color="white darken-2">  mdi-logout-variant </v-icon>
        </button>
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
        return redirect('/login')
      }
    },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-magnify',
          title: '検索',
          to: '/search'
        },
        {
          icon: 'mdi-calendar-clock',
          title: '予定確認',
          to: '/schedule'
        },
        {
          icon: 'mdi-chart-bar',
          title: '学習履歴確認',
          to: '/history'
        },
        {
          icon: 'mdi-school',
          title: 'レッスン登録',
          to: '/lesson_register'
        },
        {
          icon: 'mdi-account',
          title: 'プロフィール',
          to: '/profile'
        },

        /* {
          icon: require('@/assets/logout.png'),
          title: 'ログアウト',
          to: '/login'
        } */

      ],
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
  created: ()=>{

  },
}
</script>

<style>
  #app{
    width: 100%;
  }
</style>
