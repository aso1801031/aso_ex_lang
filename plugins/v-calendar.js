import Vue from 'vue'
import schedule from '~/pages/schedule.vue'
import VCalendar from 'v-calendar'

Vue.use(VCalendar) 
Vue.config.productionTip = false

new Vue({
  render: h => h(schedule),
}).$mount('#app')