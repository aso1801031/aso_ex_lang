<template>
  <v-container>
    <h1>vue-chartjsで折れ線グラフ</h1>
    <v-layout wrap>
      <v-flex xs4 text-left>
        <v-icon @click="previous">mdi-arrow-left</v-icon>
      </v-flex>
      <v-flex xs4 text-center>
        <h1 class="font-weight-regular" align='center'>{{date}}</h1>
      </v-flex>
      <v-flex xs4 text-right>
        <v-icon @click="rear">mdi-arrow-right</v-icon>
      </v-flex>
    </v-layout>
    <LineChart :chartData="this.chartdata" :options="this.options" ref="Line" />
    <v-btn-toggle
    v-model="datechoice"
    >
    <v-btn value="year" class="accent" @click="kirikae">
      Year
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
        date: "2020",
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        years: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        datechoice:'year',

    }
  },
  async created(){
    var self = this
    if(this.flag == 0){
    firebase.auth().onAuthStateChanged(await async function(user) {
      console.log(user)
      console.log(user.email)
      //console.log(user.id)
      var u = ''
      //メールからログインしているユーザを取得
      await db.collection("users").where('mailadress' , "==" , user.email).get().then((query) => {
      query.forEach(element => {
        console.log(element.data())
        console.log(element.id)
        u = db.collection("users").doc(element.id)


        });
      }).catch((error) => {
          console.log(error)
      });
      console.log(u)

      //ログインしているユーザが教師をしているレッスンを取得
      await db.collection('lessons').where('teacher_id' , '==' , u).get().then((query) => {
        query.forEach(lesson => {
          console.log(lesson.data())
          var data = lesson.data()
          console.log(data.lesson_date)
          var date = []
          date.push(data.lesson_date.split('-'))
          console.log(date)
          self.historydata.push(date)
          console.log('historydataは存在する')
        })
        })
        //ログインしているユーザが生徒をしているレッスンを取得
      await db.collection('lessonAttendances').where('student_id' , '==' , u).get().then((query) => {
        query.forEach(lesson => {
          console.log(lesson.data().student_id)
          var le = lesson.data()
          var doc = le.lesson_id.path.split('/')
          console.log(doc[1])

          db.collection('lessons').doc(doc[1]).get().then((query) => {
            console.log(query.data())
          })
        })
      })
      self.kirikae()
    })
    }

  },
  methods:{
    kirikae:async function(){

      this.chartdata.datasets = []
      await this.initialize()
      await this.year()
      var label = 'total'
      console.log(this.data)
      console.log(this.chartdata.labels)

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
      this.data = [0,0,0,0,0,0,0,0,0,0,0,0]
      this.chartdata.labels = this.years


    },
    //年月の時の計算
    year: function(){
      this.historydata.forEach(element => {
        element.forEach(history => {
          console.log(history)
          console.log(history[0])
          if(this.date == history[0]){
            this.data[Number(history[1]) - 1] ++
          }
        })
      });
    },
    previous: function(){
      this.date--
      this.kirikae()
    },
    rear: function(){
      this.date++
      this.kirikae()
    },
  }
}
</script>

<router>
  path:'/history'
</router>

