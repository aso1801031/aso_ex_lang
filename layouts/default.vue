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
       Service Name
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

            <img v-bind:src='item.icon' width='16px' height="16px">

          </nuxt-link>
      </div>
      <div>
        <button onclick="location.href='login" @click="logout">ログアウト</button>
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
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: require('@/assets/search.png'),
          title: '検索',
          to: '/search'
        },
        {
          icon: require('@/assets/schedule.png'),
          title: '予定確認',
          to: '/schedule'
        },
        {
          icon: require('@/assets/graph.png'),
          title: '学習履歴確認',
          to: '/history'
        },
        {
          icon: require('@/assets/lesson_register.png'),
          title: 'レッスン登録',
          to: '/lesson_register'
        },
        {
          icon: require('@/assets/profile.png'),
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
    logout() {
      firebase.auth().signOut().then(function() {
        console.log("signout")
      }).catch(function(error) {
        // An error happened.
      });
    } 
  },
  created: ()=>{
      firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // サインインしていない状態
        // サインイン画面に遷移する等
        // 例:
        location.href = '/login';
      } else {
        // サインイン済み
      }
    });
  },
}
</script>

<style>
  #app{
    width: 100%;
  }
</style>