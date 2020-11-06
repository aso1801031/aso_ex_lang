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
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
  #app{
    width: 100%;
  }
</style>