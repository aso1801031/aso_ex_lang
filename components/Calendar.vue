<template>
  <div>
    <div class="date_pick">
      <v-date-picker 
        locale="en"
        title-position="left">  
        <template slot='header-title' slot-scope='props'>
          {{props.monthLabel}}  {{props.yearLabel}}
        </template>
        <!--
        <template slot='day-content' slot-scope='props'>
          <div class="cell-header">
            {{props.day.day}}
          </div>
          
          <div class="cell-content">
            <template v-if="dateList.some(date => date.ymd === dateToYYYYMMDD(props.day.date))">
              <div 
                class="cell-content-line" 
                v-for="content in getContentFromKey(dateToYYYYMMDD(props.day.date))" 
                v-bind:key="content">
                ・{{content}}
              </div>
            </template>
          </div>
        </template>
        -->
      </v-date-picker>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear();
      return {
        date,
        dateList: [
        {ymd: '20201105', contents: ['講座']},
      ]
      };
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
    }
  };
  </script>
  
  <style>
    .date_pick{
      text-align: center;
      display: inline-block;
    }
    .vc-grid-cell{
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .vc-arrow{
      padding-top: 13px;
      padding-right: 16px;
    }
    
  </style>