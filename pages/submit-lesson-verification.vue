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
export default {
  data(){
    return{
    title : this.$store.state.lesson.title,
    time : this.$store.state.lesson.time,
    date : this.$store.state.lesson.date,
    language : this.$store.state.lesson.language,
    detail : this.$store.state.lesson.detail.replace(/\\n/g,'\n'),
    }
  },
  methods:{
    register:function(){
      console.log(this.$store.state.lesson.title);
      this.$store.commit('lesson/refresh',
      {title:this.title, time:this.time, date:this.date, language:this.language, detail:this.detail.replace(/\n/g,'\\n')})
    }
  },
}
</script>
