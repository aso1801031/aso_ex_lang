<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="secondary white--text"
    >
     <h1>
      <nuxt-link to='/index' class="white--text" style="text-decoration: none;">
       Service Name
      </nuxt-link>
     </h1>
      <v-spacer />
      <div v-for="(item,i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <nuxt-link v-bind='item' class="white--text mr-3" style="text-decoration: none;">
            {{item.title}}
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
          icon: 'mdi-apps',
          title: '検索',
          to: '/search'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '予定確認',
          to: '/schedule'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '学習履歴確認',
          to: '/history'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'レッスン登録',
          to: '/lesson_register'
        },
        {
          icon: 'mdi-chart-bubble',
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
