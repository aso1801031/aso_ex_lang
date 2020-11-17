<template>
  <div class="calendar_view">
    <v-date-picker
    full-width
    no-title
    elevation="3"
    :weekday-format="getDay"
    v-model="picker"
    />
      <h4 class="mt-3">{{l_date}}</h4>
      <div v-for="allLesson of allLessons" v-if="allLesson.lesson_date == l_date">
        <p class="lesson_time">{{ allLesson.lesson_time }}</p>
        <a v-bind:href="url"><p class="lesson_title">{{allLesson.title}}</p></a>
      </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      url:"/schedule-detail/",
      l_date: null,
      allLessons: [],
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
    }
  },
  methods:{
    getDay(date){
      const daysOfWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let i = new Date(date).getDay(date)
      return daysOfWeek[i]
    },
    getLessonDate(){
      firebase.firestore().collection('lessons').get().then(snapshot => {
      snapshot.forEach(doc => {
        //this.allLessons.push(doc.data())

        console.log(doc.data().lesson_date+"と"+this.l_date);
        /*if(doc.data().lesson_date == l_date){
          console.log(doc.data().lesson_date);
          this.url += doc.id
        }*/
      })
    })
    }
  },
  created:function () {
    firebase.firestore().collection('lessons').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.allLessons.push(doc.data())

        console.log(doc.data().lesson_date+"と"+this.l_date);
        /*if(doc.data().lesson_date == l_date){
          console.log(doc.data().lesson_date);
          this.url += doc.id
        }*/
      })
    })
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
  .lesson_time{
    font-size: 1em;
    margin-bottom: 0%;
    margin-top: 10px;
    color: dimgray;
  }
  .lesson_title{
    font-size: 1.1em;
    margin: 0%;
  }
  .v-application p {
    margin-bottom: 0px;
  }
</style>