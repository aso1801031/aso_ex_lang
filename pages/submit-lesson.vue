<template>
  <v-container>
    <v-card elevation="5">
    <v-form>
      <v-row  class="">


        <v-col cols='12' align='center'>
          make your lesson!
        </v-col>
        <v-col cols='2'></v-col>
        <v-col cols="4" align='light' class="pt-8">
          Title
        </v-col>
        <v-col cols="4" align='center'>
          <v-text-field
            v-model="title"
            label="title"
            clearable
            :rules="titlerules"
          ></v-text-field>
        </v-col>
        <v-col cols='2'></v-col>


        <v-col cols='2'></v-col>
        <v-col cols="4" align='light' class="pt-8">
          Date
        </v-col>
        <v-col cols="4" align='center'>
          <div class="d-flex">
            <date-picker v-model="date" class="p-5" />
          </div>
        </v-col>
        <v-col cols='2'></v-col>


        <v-col cols='2'></v-col>
        <v-col cols="4" align='light' class="pt-8">
          Time
        </v-col>
        <v-col cols="4" align='center'>
          <time-picker v-model="time" class="p-5"/>
        </v-col>
        <v-col cols='2'></v-col>


        <v-col cols='2'></v-col>
        <v-col cols="4" align='light' class="pt-8">
          Language
        </v-col>
        <v-col cols="4" align='center'>
          <v-select
            :items="languageList"
            v-model="language"
            label="language"
            clearable
            :rules="languagerules"
          ></v-select>
        </v-col>
        <v-col cols='2'></v-col>


        <v-col cols='2'></v-col>
        <v-col cols='8' align='center'>
          <v-textarea
            name="input-7-1"
            filled
            label="detail"
            auto-grow
            background-color='white'
            v-model="detail"
            :rules="detailrules"
          ></v-textarea>
          <v-col cols='2'></v-col>

        </v-col>

      </v-row>
    </v-form>
    </v-card>
    <div align='right'>
      <v-btn @click="verfication" class="accent mt-5" width='20%' large elevation="5">
        確認
      </v-btn>
    </div>
  </v-container>
</template>
<router>
  path: '/lesson_register'
</router>

<script>
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import firebase from '~/plugins/firebase'
var db = firebase.firestore();


export default {
  components:{
    DatePicker,
    TimePicker,
  },
  data(){
    return{
      /*time:this.$store.state.lesson.time,
      date:this.$store.state.lesson.date,
      language:this.$store.state.lesson.language,
      detail:this.$store.state.lesson.detail.replace(/\\n/g,'\n'),*/
      titleflg:null,
      titlerules:[
        value => {
          if(!value){
            this.titleflg = true
            return '入力してください'
          }else{
            if(value.length > 20){
              this.titleflg = true
              return '20文字以内で入力してください'
            }
            this.titleflg = false
          }
          return true
          }
      ],
      languageList:[],
      languageflg:null,
      languagerules:[
        value => {
          if(!value){
            this.languageflg = true
            return '選択してください'
          }else{
            this.languageflg = false
          }
          return true
          }
      ],
      detailflg:true,
      detailrules:[
        value => {
          if(!value){
            this.detailflg = true
            return '入力してください'
          }else{
            if(value.length > 100){
              this.detailflg = true
              return '100文字以内で入力してください'
            }
            this.detailflg = false
          }
          return true
          }
      ],

    }
  },
  created(){
    db.collection('languages').get().then((query) => {
      query.forEach(element => {
        var data = element.data()
        console.log(data.name)
        this.languageList.push(data.name)
        console.log(this.languageList)
        console.log(element.id)
      });
    }).catch((error=>{
      console.log(error)
    }));

    db.collection("lessonHistorys").get().then((query) => {
      query.forEach(element => {
        var data = element.data()
        console.log(data.user_id.path)
        console.log(element.id)
        });
      }).catch((error) => {
          console.log(error)
      });
  },
  computed:{
    title: {
      get: function(){//この中の変数の値が変化した時
        return this.$store.state.lesson.title
      },
      set:function(newValue){//titleの値が変化した時
        this.a = newValue
        this.$store.commit('lesson/title',this.a)
        console.log(this.title)
      }
    },
    time: {
      get: function(){
        return this.$store.state.lesson.time
      },
      set:function(newValue){
        this.a = newValue
        this.$store.commit('lesson/time',this.a)
        console.log(this.time)
      }
    },
    date: {
      get: function(){
        return this.$store.state.lesson.date
      },
      set:function(newValue){
        this.a = newValue
        this.$store.commit('lesson/date',this.a)
        console.log(this.date)
      }
    },
    language: {
      get: function(){
        return this.$store.state.lesson.language
      },
      set:function(newValue){
        this.a = newValue
        this.$store.commit('lesson/language',this.a)
        console.log(this.language)
      }
    },
    detail: {
      get: function(){
        if(this.$store.state.lesson.detail != null)
          return this.$store.state.lesson.detail.replace(/\\n/g,'\n')
        return ''
      },
      set:function(newValue){
        this.a = newValue
        this.$store.commit('lesson/detail',this.a)
        console.log(this.detail)
        console.log(this.daterules)
      }
    },
    daterules: {
      get: function(){
        return this.$store.state.lesson.daterules
      }
    },
    timerules:{
      get: function(){
        return this.$store.state.lesson.timerules
      }
    }
  },
  methods:{
    verfication:function(){
      console.log(this.titleflg)
      console.log(this.timerules)
      console.log(this.daterules)
      console.log(this.languageflg)
      console.log(this.detailflg)
      if(this.titleflg!=true && this.timerules==null && this.daterules==null && this.languageflg!=true && this.detailflg!=true){

        this.$store.commit('lesson/insert',
        {title:this.title, time:this.time, date:this.date, language:this.language, detail:this.detail.replace(/\n/g,'\\n')})
        this.$router.push('/lesson_register/verification')
      }else{
        alert('入力エラーがあります')
      }
    },
  },
}
</script>
