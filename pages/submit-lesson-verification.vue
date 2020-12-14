<template>
  <v-container>
    <v-row  class="white" style="white-space:pre-line">


      <v-col cols='12' align='center'>
        Check your lesson detail!
      </v-col>
      <v-col cols='2'></v-col>
      <v-col cols="4" align='light' class="">
        Title
      </v-col>
      <v-col cols="4" align='center'>
        {{title}}
      </v-col>
      <v-col cols='2'></v-col>


      <v-col cols='2'></v-col>
      <v-col cols="4" align='light' class="">
        Date
      </v-col>
      <v-col cols="4" align='center'>
        {{date}}
      </v-col>
      <v-col cols='2'></v-col>


      <v-col cols='2'></v-col>
      <v-col cols="4" align='light' class="">
        Time
      </v-col>
      <v-col cols="4" align='center'>
        {{time}}
      </v-col>
      <v-col cols='2'></v-col>


      <v-col cols='2'></v-col>
      <v-col cols="4" align='light' class="">
        Language
      </v-col>
      <v-col cols="4" align='center'>
        {{language}}
      </v-col>
      <v-col cols='2'></v-col>


      <v-col cols='2'></v-col>
      <v-col cols='8' align='center'>
        {{detail}}
        <v-col cols='2'></v-col>

      </v-col>

    </v-row>

    <div align='right'>
      <v-btn to='/lesson_register' class="accent mt-5 mr-3" large>戻る</v-btn>
      <v-btn @click="register" class="accent mt-5" width='20%' large>
        登録
      </v-btn>
    </div>
  </v-container>
</template>
<router>
  path: '/lesson_register/verification'
</router>

<script>
import firebase from '~/plugins/firebase'
var db = firebase.firestore();


export default {
  data(){
    return{
    title : this.$store.state.lesson.title,
    time : this.$store.state.lesson.time,
    date : this.$store.state.lesson.date,
    language : this.$store.state.lesson.language,
    detail : this.$store.state.lesson.detail.replace(/\\n/g,'\n'),
    mail: '',
    teach:'',
    lang:'',
    }
  },
  created(){
    var self = this
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user)
      self.mail = user.email
      console.log(self.mail)

      db.collection("users").where('mailadress' , "==" , self.mail).get().then((query) => {
      query.forEach(element => {
        self.teach = element.id
        console.log(element.data())
        console.log(element.id)
        });
      }).catch((error) => {
          console.log(error)
      });

      db.collection("languages").where('name' , "==" , self.language).get().then((query) => {
      query.forEach(element => {
        self.lang = element.id
        console.log(element.data())
        console.log(element.id)
        });
      }).catch((error) => {
          console.log(error)
      });
    })


  },
  methods:{
    register:function(){
      console.log(this.$store.state.lesson.title);

      console.log(this.teach)
      var langref = db.collection("languages").doc(this.lang)
      var teachref = db.collection("users").doc(this.teach)
      db.collection("lessons").add({
          title: this.title,
          lesson_time: this.time,
          lesson_date: this.date,
          language_id: langref,
          detail: this.detail,
          teacher_id: teachref,
          joinFlag: false,
      }).then(function(docRef){
        console.log('成功！',docRef.id)
      }).catch(function(error){
        console.log('失敗...',error)
      })

      this.$store.commit('lesson/refresh',
      {title:this.title, time:this.time, date:this.date, language:this.language, detail:this.detail.replace(/\n/g,'\\n')})

      this.$router.push('/home')
      },



  },
}
</script>
