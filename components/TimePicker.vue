<template>
  <v-menu
  ref="menu"
  v-model="menu2"
  :close-on-content-click="false"
  :nudge-right="40"
  :return-value.sync="time"
  transition="scale-transition"
  offset-y
  max-width="290px"
  min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="picker"
        label=time
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
        :rules="timerules"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="menu2"
      v-model="picker"
      @click:minute="$refs.menu.save(time)"
      :allowed-times='allowedTime'
    ></v-time-picker>
  </v-menu>
</template>



<script>
export default {
  props: {
    value: {
      type: String,
    }
  },
  data() {
    return {
      menu: false,
      menu2:false,
      time:'',
      modal2:false,
      timerules:[
        value => {
          if(!value){
            this.$store.commit('lesson/timerules','選択してください')
            return !!value || '選択してください'
          }
          this.$store.commit('lesson/timerules',null)
          return true
        },
      ],
    };
  },
  methods:{
    allowedTime:function(val){
      let today = new Date()
      today = new Date(
        today.getHours(),
        today.getMinutes(),
      )
      let maxAllowedDay = new Date()
      maxAllowedDay.setDate(
        today.getHours() + 100
      )
      maxAllowedDay = new Date(
        maxAllowedDay.getHours(),
        maxAllowedDay.getMinutes(),
      )
      return today <= new Date(val) && new Date(val) <= maxAllowedDay
     },
  },
  computed: {
    picker: {
      get() {
        return this.value;
      },
      set(val) {
        this.menu = false;
        this.$emit("input", val);
      }
    }
  }
};
</script>
