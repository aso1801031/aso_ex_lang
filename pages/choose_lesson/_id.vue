<template>
    <v-container fluid>
      <v-row justify="center" align="center" >
        <v-col cols="10">
          <!-- カード -->
          <v-card elevation="0">
            <!-- 上カード内容 -->
            <v-row align="center" >

              <v-col cols="2" class="ml-7">
                <v-sheet color="success rounded"  width="100" height="100">
                </v-sheet>
              </v-col >

              <v-col cols="3">
                <div class="quickSand"  style="font-size:30px;">{{title}}</div>
              </v-col>
              <v-col cols="2"></v-col>
              <v-col cols="4" justify="right" >
                <v-row class="ma-0 pa-0">
                  <v-col class="ma-0 pa-0">
                    <div class="quickSand">Language:</div>
                  </v-col>
                  <v-col  class="ma-0 pl-2 py-0 pr-0">
                    <div class="quickSand">{{language}}</div>
                  </v-col>
                  
                </v-row>
                
                <v-row class="ma-0 pa-0">
                  <v-col class="ma-0 pa-0">
                    <div class="quickSand">Data:</div>
                  </v-col>
                  <v-col  class="ma-0 pl-2 py-0 pr-0">
                    <div class="quickSand">{{date}}</div>
                  </v-col>
                </v-row>

                <v-row class="ma-0 pa-0">
                  <v-col class="ma-0 pa-0">
                    <div class="quickSand">Time:</div>
                  </v-col>
                  <v-col  class="ma-0 pl-2 py-0 pr-0">
                    <div class="quickSand">{{time}}</div>
                  </v-col>
                </v-row>
              </v-col>

            </v-row>
            <!-- カード上部_end -->
            <v-divider></v-divider>
            <!-- カード下部 -->
            <v-row  align="end">
              <v-col cols="5">
                <div class="quickSand ml-5" style="">{{text}}</div>
              </v-col>
              <v-col cols="7"  align="right">
                <v-btn class="accent mr-5" @click="join" elevation="0" large width="200">参加</v-btn>
              </v-col>
            </v-row>
            <!-- カード下部_end -->

          </v-card>
          <!-- カード_end -->
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import firebase from '~/plugins/firebase'
export default {
    data (){
      return{
        title: "",
        language: "",
        date: "",
        time: "",
        text: "",
        id:this.$route.params.id,
        teacherUser: "",
        lesson_id:"",
        
      }
    },
    async created () {
      if(this.id != null){
        await firebase.firestore().collection('lessons').doc(this.id).get().then(
        doc => {
           doc.data().language_id.get().then(res => { 
            
            doc.data().teacher_id.get().then(user => {
              this.language = res.data().name
            this.title = (doc.data().title)
            
            this.date = (doc.data().lesson_date)
            this.time = (doc.data().lesson_time)
            this.text = (doc.data().detail)
            this.teacherUser = (user.id)
            this.lesson_id = (doc.id)
            })

            
          })
        })
      }
    },
    methods:{
      async join(){
        console.log("join!")
        let refData = await this.createChat()
        await this.createAttendances(refData)
        this.$router.push("/home");
      },
      async createChat(){
        var ref = firebase.firestore().collection('users')
        var userData = await {
          user1:ref.doc(this.teacherUser),
          user2:ref.doc(this.$store.state.id),
        }
        let docRef = await firebase.firestore()
                .collection('chats')
                .add(userData)
        return docRef
                
      },
      async createAttendances(docRef){
        var refUser = firebase.firestore().collection('users')
        var refLesson = firebase.firestore().collection('lessons')
        var attendData = await {
          chat_id:docRef,
          lesson_id:refLesson.doc(this.id),
          student_id:refUser.doc(this.$store.state.id),
          teacher_id:refUser.doc(this.teacherUser),
        }
        await firebase.firestore()
                .collection('lessonAttendances')
                .add(attendData)
      }
    }
    
    
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  .vullkorn{
    font-family: 'Vollkorn', serif;
  }
  .quickSand{
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  }
</style>