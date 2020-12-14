<template>
  <div class="calendar_view">
    <!--{{$store.state.id}}-->
    <v-date-picker
    full-width
    no-title
    elevation="3"
    :weekday-format="getDay"
    :allowed-dates='allowedDate'
    :events="functionEvents"
    v-model="picker"
    />
    <p class="mt-1 mb-2 today">{{l_date}}</p>
    <!--教師側予定表示-->
    <p class="teacher_text mb-0 pb-0" v-if="teachTextFlg(l_date)">Teacher</p>
    <div v-for="allLesson of teachAllLessons" :key="allLesson.data.title" v-if="allLesson.data.lesson_date == l_date">
      <v-row>
        <v-col cols="12"  md="1">
          <p class="lesson_time">{{ allLesson.data.lesson_time }}</p>
        </v-col>
        <v-col cols="12"  md="11">
          <a class="title_link" v-bind:href="allLesson.id"><h5 class="lesson_title">{{allLesson.data.title}}</h5></a>
        </v-col>
      </v-row>
    </div>
    <!--生徒側予定表示-->
    <p class="student_text mb-0 pb-0" v-if="stuTextFlg(l_date)">Student</p>
    <div v-for="allLesson of studentAllLessons" :key="allLesson.data.title" v-if="allLesson.data.lesson_date == l_date">
      <v-row>
        <v-col cols="12"  md="1">
          <p class="lesson_time">{{ allLesson.data.lesson_time }}</p>
        </v-col>
        <v-col cols="12"  md="9">
          <a class="title_link_s" v-bind:href="allLesson.id"><h5 class="lesson_title">{{allLesson.data.title}}</h5></a>
        </v-col>
      </v-row>
    </div>

</div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      url:"",
      l_date: null,
      teachAllLessons: [],
      studentAllLessons:[],
      teachEvents:[],
      studentEvents:[],
    };
  },
  computed: {
    picker: {
      get() {
        return this.l_date;
      },
      set(val) {
        this.l_date = val;
      }
    },
  },
  methods:{
    getDay(date){
      const daysOfWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let i = new Date(date).getDay(date)
      return daysOfWeek[i]
    },
    allowedDate:function(val){
      let today = new Date()
      this.date = today.getDate()
      today = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      )
      let maxAllowedDay = new Date()
      maxAllowedDay.setDate(
        today.getDate() + 100
      )
      maxAllowedDay = new Date(
        maxAllowedDay.getFullYear(),
        maxAllowedDay.getMonth(),
        maxAllowedDay.getDate()
      )
      return today <= new Date(val)
    },
    teachTextFlg(date){
      let t_textflg = false;
      this.teachAllLessons.forEach( lesson => {
        if(lesson.data.lesson_date == date){
          t_textflg = true
        }
      })
      return t_textflg
    },
    stuTextFlg(date){
      let s_textflg = false;
      this.studentAllLessons.forEach( lesson => {
        if(lesson.data.lesson_date == date){
          s_textflg = true
        }
      })
      return s_textflg
    },
    functionEvents(date){
      if(this.teachEvents.includes(date) && this.studentEvents.includes(date)){
        return ["pink","blue"]
      }else if(this.teachEvents.includes(date)){
        return ["pink"]
      } else if(this.studentEvents.includes(date)){ 
        return ["blue"]
      }
      return false
    },
  },
  created:function () {
    // 現在の時間を取得
    let today = new Date();
    let l_date;
    firebase.firestore().collection('lessonAttendances').get().then(snapshot => {
      snapshot.forEach(doc => {
        //console.log("id=",doc.data().student_id.id)
        doc.data().lesson_id.get().then(res => { 
          //console.log("res id=",res.id,"store=",this.$store.state.id,res.id === this.$store.state.id)
          l_date = new Date(res.data().lesson_date+" "+res.data().lesson_time)
          //console.log(l_date)
          //console.log(res.data())
          if(doc.data().teacher_id.id === this.$store.state.id && today < l_date){
            this.teachAllLessons.push({id:"/schedule-detail/"+res.id,data:res.data()})
            this.teachEvents.push(res.data().lesson_date)
          }else if(doc.data().student_id.id === this.$store.state.id && today < l_date){
            this.studentAllLessons.push({id:"/choose_lesson/"+res.id,data:res.data()})
            this.studentEvents.push(res.data().lesson_date)
          }

        })
      })
    })
    console.log(this.$store.state.id)
    //console.log("created")
  },

};
</script>

<style>
  .calendar_view{
    margin: 50px auto;
    width: 50%;
  }
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
    margin: 20px;
    padding: 3px;
    font-size: 1.2em;
  }
  .v-picker--full-width > .v-picker__body {
    margin: 0;
    margin: initial;
    height: 550px;
  }
  .lesson_time{
    font-size: 1.2em;
    color: dimgray;
    margin: 0px;
  }
  .lesson_title{
    font-size: 1.2em;
    display:inline;
  }
  .teacher_text{
    font-size: 1.2em;
    color: crimson;
  }
  .student_text{
    font-size: 1.2em;
    color: dodgerblue;
  }
  a.title_link{
  transition: color 0.3s;
  text-decoration: none;
  margin-left: 8px;
  }
  a.title_link_s{
  transition: color 0.3s;
  text-decoration: none;
  margin-left: 8px;
  }
  .today{
    font-size: 1.25em;
  }
  a.title_link:hover{
  color : crimson;
  }
  a.title_link_s:hover{
  color :dodgerblue
  }
  .v-application p {
    margin-bottom: 0px;
  }
</style>