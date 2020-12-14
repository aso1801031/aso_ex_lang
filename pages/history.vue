<template>
  <v-container>
    <!-- <h1>学習履歴確認</h1> -->
    <v-layout wrap>
      <v-flex xs4 text-left>
        <v-icon @click="previous">mdi-arrow-left</v-icon>
      </v-flex>
      <v-flex xs4 text-center>
        <h1 class="font-weight-regular" align='center'>{{date}}<br>{{month}}</h1>
      </v-flex>
      <v-flex xs4 text-right>
        <v-icon @click="rear">mdi-arrow-right</v-icon>
      </v-flex>
    </v-layout>
    <LineChart :chartData="this.chartdata" :options="this.options" ref="Line" />
    <v-btn-toggle
    v-model="datechoice"
    mandatory
    >
    <v-btn  class="accent" @click="years2">
      Year
    </v-btn>

    <v-btn  class="accent" @click="months">
      Month
    </v-btn>

    </v-btn-toggle>

  </v-container>
</template>

<script>
import Vue from 'vue'
import LineChart from '@/components/graph.vue'
import firebase from '~/plugins/firebase'
var db = firebase.firestore();


export default {
  components: {
    LineChart
  },
  data(){
    return {
        chartdata: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom'
            },
        },
        teach:'',
        historydata:[],
        flag:0,
        Attendancedata:[],
        datechoice: "year",
        date: "2020",
        month: "",
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        years: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        yearsflg: 0,
        days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

    }
  },
  async created(){
    var self = this
    if(this.flag == 0){

    await firebase.auth().onAuthStateChanged(await async function(user) {
      console.log(user)
      var u = ''
      //console.log(user.id)
      //メールからログインしているユーザを取得
      await db.collection("users").where('mailadress' , "==" , user.email).get().then((query) => {
      query.forEach(element => {
        u = db.collection("users").doc(element.id)


        });
      }).catch((error) => {
          console.log(error)
      });
      console.log(u.id)

      //ログインしているユーザが教師をしているレッスンを取得
      await db.collection('lessons').where('teacher_id' , '==' , u).get().then(async (query) => {
        query.forEach(lesson => {
          var data = lesson.data()
          console.log('student:',lesson.data())
          console.log(data.lesson_date)
          var date = []
          date.push(data.lesson_date.split('-'))
          //言語を取得してdateにpush
          console.log(data.language_id.id)
          var language = data.language_id.id
          db.collection('languages').doc(language).get().then((query) =>{
            date.push(query.data().name)
          })
          console.log(date)
          self.historydata.push(date)
          console.log(self.historydata)
        })
        })

      //ログインしているユーザが生徒をしているレッスンを取得
      await db.collection('lessonAttendances').where('student_id' , '==' , u).get().then(async (query) => {
        await query.forEach(async lesson => {
          console.log(lesson.data())
          var le = lesson.data()
          var doc = le.lesson_id.id
          console.log(doc)

          await db.collection('lessons').doc(doc).get().then(async (query) => {
            console.log(query.data())
            var date = []
            console.log(query.data().lesson_date)
            date.push(query.data().lesson_date.split('-'))
            var language = query.data().language_id.id
            await db.collection('languages').doc(language).get().then((query) =>{
              date.push(query.data().name)
            })
            self.historydata.push(date)
            console.log('push')
            self.kirikae()
          })
        })
      })
      console.log('レンダリング')
      /* self.kirikae() */
    })
    }

  },
  /* async mounted(){
    console.log('mounted render')
    await this.kirikae()
  }, */
  /* computed:{
    datechoice:{
      get: function(){
        return 'year'
      },
      set: function(value){
        return value
      }
    }
  }, */
  methods:{
    kirikae:async function(){
      console.log(this.historydata)

      this.chartdata.datasets = []
      await this.initialize()
      await this.year()
      var label = 'Total'

      await this.chartdata.datasets.push( {
                  label:label,
                  borderColor:'#555555',
                  backgroundColor: 'rgba(0,255,0,0)',
                  data: this.data
                })
      this.$refs.Line.RenderChart()
    },
    //初期化
    initialize: function(){
      switch(this.datechoice){
        case 0:
          this.month = ""
          this.data = [0,0,0,0,0,0,0,0,0,0,0,0]
          this.chartdata.labels = this.years
          break;

        case 1:
          this.data = []
          this.chartdata.labels = []
          if(this.yearsflg == 2){
            if( (this.date % 4 === 0 && this.date % 100 !== 0) || this.date % 400 === 0) {
              for(var i = 0; i < 29 ; i++){
                this.data.push(0)
                this.chartdata.labels.push(i+1);
              }
            }else{
              for(var i = 0; i < 28 ; i++){
                this.data.push(0)
                this.chartdata.labels.push(i+1);
              }
            }
          }else{
            for(var i = 0; i < this.days[this.yearsflg-1] ; i++){
              this.data.push(0)
              this.chartdata.labels.push(i+1);
            }
          }
          break;
      }
    },
    //年月の計算
    year: function(){
      switch(this.datechoice){
        //年
        case 0:
          this.historydata.forEach(element => {
            element.forEach(history => {
              console.log(history[0])
              if(this.date == history[0]){
                this.data[Number(history[1]) - 1] ++
              }
            })
          });
          break;
        //月
        case 1:
          this.historydata.forEach(element => {
            element.forEach(history => {
              if(this.date == history[0]){
                console.log(this.yearsflg,"  ",history[1])
                console.log(history)
                if(this.yearsflg == history[1]){
                  this.data[Number(history[2]) - 1] ++
                }
              }
            })
          });
          break;

      }
    },
    //年月前に
    previous: function(){
      console.log(this.datechoice)
      console.log(this.month)
      console.log(this.years[11])
      switch(this.datechoice){
        //年
        case 0:
          this.date--
          console.log('year!!!')
          break;
        //月
        case 1:
          //1月だったら年を-1して12月に
          if(this.yearsflg == 1){
            this.date--
            this.month = this.years[11]
            this.yearsflg = 12
          }else if(this.yearsflg != 1){
            this.yearsflg--
            this.month = this.years[this.yearsflg-1]

          }

          break;
      }
      console.log(this.month)
      this.kirikae()
    },
    //年月後に
    rear: function(){
      switch(this.datechoice){
        //年
        case 0:
          this.date++
          break;
        //月
        case 1:
          if(this.yearsflg == 12){
            //12月だったら年を+1して1月に
            this.date++
            this.month = this.years[0]
            this.yearsflg = 1
          }else if(this.yearsflg != 12){
            this.month = this.years[this.yearsflg]
            this.yearsflg++
          }

          console.log(this.yearsflg)
          break;
      }
      this.kirikae()
    },
    //ボタンの切替(modelの動きが遅いため)
    years2: function(){
      this.datechoice = 0
      this.kirikae()
    },
    months: function(){
      this.datechoice = 1
      this.month = this.years[0]
      this.yearsflg = 1
      this.kirikae()
    },
  }
}
</script>

<router>
  path:'/history'
</router>

