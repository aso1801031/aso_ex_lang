<template>
  <div class="calendar_view">
    <!--
      <v-calendar
        is-expanded 
        locale="en"
        :masks="{ weekdays: 'WWW' }"  
        title-position="left">
      <template slot='day-content' slot-scope='props'>
        <div class="cell-header" role="button">
          {{props.day.day}}
        </div>
        <div class="cell-content">
        <template 
        v-if="dateList.some(date => date.ymd === dateToYYYYMMDD(props.day.date))">
          <div 
          class="cell-content-line" 
          v-for="content in getContentFromKey(dateToYYYYMMDD(props.day.date))" 
          v-bind:key="content">
            ・{{content}}
          </div>
          </template>
        </div>
      </template>
      </v-calendar>
      <v-date-picker 
      full-width
      is-expanded
      locale="en"
      :masks="{ weekdays: 'WWW' }"
      mode="dateTime" 
      title-position="left">      
      </v-date-picker>-->
      <v-date-picker
      full-width
      no-title
      elevation="3"
      :weekday-format="getDay"
      v-model="picker"
      >
      </v-date-picker>

    </div>
  </div>
</template>

<script>
export default {
  /*name: 'calendar',
  data() {
    return {
      dateList: [
        //{ymd: '20201110', contents: ['髪を切る','面談','靴を買う']}
      ]
    }
  },
  computed: {
  },
  methods: {
     dateToYYYYMMDD: function(date) {
      let y = date.getFullYear()
      let m = ('00' + (date.getMonth()+1)).slice(-2)
      let d = ('00' + date.getDate()).slice(-2)
      let result = y + '' + m + '' + d
      return result
    },
    getContentFromKey: function(key) {
      const target = this.dateList.find((date) => {
        return (date.ymd === key)
      })
      return target.contents
    }
  }*/
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
  }),
  methods:{
    getDay(date){
      const daysOfWeek = [ 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let i = new Date(date).getDay(date)
      return daysOfWeek[i]
    }
  }
};
</script>

<style>
  .calendar_view{
    margin: 50px auto;
    width: 50%;
  }
  /*
  .vc-title[data-v-3491b290] {
    font-size: var(--text-lg);
    color: var(--gray-800);
    font-weight: var(--font-semibold);
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
    padding: 0 8px;
    font-size: 1.4em;
}
  .vc-grid-cell{
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vc-arrow{
    margin-top: 18px;
    margin-right: 16px;
    font-size: 1.3em;
  }
  .vc-weekday[data-v-3491b290] {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 5px 0;
    font-size: 1em;
  }
  .cell-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--rounded-full);
    width: 32px;
    height: 32px;
    margin: 3px auto;
    padding: 8px;
    font-size: 1.4em;
  }
  .vc-day-content[data-v-a1110b40] {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    font-weight: var(--font-medium);
    width: 28px;
    height: 28px;
    margin: 1.6px auto;
    border-radius: var(--rounded-full);
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }*/
  .v-date-picker-header {
    padding: 4px 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 20px 0px;
  }
  .v-date-picker-header__value button {
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 0.5rem;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    font-size: 1.5em;
  }
  .v-date-picker-table--date th {
    padding: 8px 0;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.3em;
  }
  .v-date-picker-table .v-btn {
    z-index: auto;
    margin: 20px;
    padding: 3px;
    font-size: 1.2em;
  }
  .v-picker--full-width > .v-picker__body {
    margin: 0;
    margin: initial;
    height: 550px;
  }
</style>