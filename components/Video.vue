<template>
  <v-row class="pa-4">
    <v-col cols="12" sm="6">
      <v-sheet :width="videoWidthOnline" :height="videoHeightOnline" v-bind:class="{ success: !connectFlag, info:connectFlag}" >
        <video autoplay :srcObject.prop="otherStream" v-bind:style="{maxWidth:videoWidthOnline+'px',width:videoWidthOnline+'px'}" id="online"></video>
      </v-sheet>

    </v-col>

    <v-col cols="12" sm="6" class="text-right" >
      <v-row justify="end" class="pr-2">
        <v-sheet :width="videoWidthLocal" :height="videoHeightLocal" >
          <video autoplay :srcObject.prop="localStream" v-bind:style="{maxWidth:videoWidthLocal+'px',width:videoWidthLocal+'px'}" ></video>
        </v-sheet>
      </v-row>
      <v-row >
        <v-col>
          <!-- <input v-model="searchText" class="white primary--text mb-2"> -->
          <v-spacer></v-spacer>

          <!-- <div>{{myId}}</div> -->
          <v-btn @click = "makeCall" x-large class="accent">call</v-btn>
        </v-col>

      </v-row>

    </v-col>


  </v-row>



</template>

<script>
import Peer from "skyway-js"
import firebase from '~/plugins/firebase'
export default {
  name: 'app',
  data(){
    return {
      localStream: undefined,
      otherStream: undefined,
      peer: "",
      mediaConnection: null,
      myId: null,
      searchText:"",
      searchId:"",
      roomId: this.$route.params.id,
      fullId:"",
      connectFlag:false,

    }　
  },
  async created() {
    var topId = this.roomId.slice(0, 8)
    var bottomId = this.$store.state.id.slice(0,8)
    this.fullId = topId+bottomId
    console.log("[Video.vue] my id:",this.fullId)
    this.peer = new Peer(this.fullId,{key:"969c8db0-2e67-45f6-ac03-7adc5efddf18"})
    firebase.firestore().collection("chats").doc(this.roomId).get()
    .then(doc =>  {
      doc.data().user1.get().then(user_First =>{
        doc.data().user2.get().then(user_Second =>{
          var bottomOtherId = ""
          if(user_First.id == this.$store.state.id){
            bottomOtherId = user_Second.id.slice(0,8)
          }else{
            bottomOtherId = user_First.id.slice(0,8)
          }
          this.searchId = topId + bottomOtherId
          console.log("[Video.vue] other id:",this.searchId)
        }).then(none => {
          this.makeCall()
          })
      })





    })
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    // await firebase.firestore()
    // .collection('chats')
    // .doc(this.roomId)
    // .get()
    // .then(doc =>{
    //   doc.data().user1
    // })

  },
  methods: {
    makeCall(){

      try {
        console.log("call!!!")
        this.mediaConnection = this.peer.call(this.searchId,this.localStream)
        this.peer.on('error', function(err){
          console.log("[Video]: guess your partner is's ready for call...");
        })
        this.mediaConnection.on('stream', stream => {
          console.log("streamきたよ!!!")
          this.otherStream = stream;
          this.connectFlag = true
        })
      } catch (error) {
          console.log(error)
        }
    },
  },
  async mounted(){
    await this.peer.on('open', () => {
      console.log('peer opened!')
      this.myId = this.peer.id
    })
    await this.peer.on('call', mediaConnection => {
      console.log("コールされました")
      mediaConnection.answer(this.localStream);
      this.mediaConnection = mediaConnection
      this.mediaConnection.on('stream', stream => {
        console.log("streamきたよ!!!")
        this.otherStream = stream;
        this.connectFlag = true
      })

    })


  },
  computed:{
    videoWidthLocal () {

        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return this.$vuetify.breakpoint.width *0.9
          case 'sm': return this.$vuetify.breakpoint.width *0.4
          case 'md': return this.$vuetify.breakpoint.width *0.28
          case 'lg': return this.$vuetify.breakpoint.width *0.28
          case 'xl': return this.$vuetify.breakpoint.width *0.3
        }

      },
      videoHeightLocal () {
        return this.videoWidthLocal * 0.75
      },
      videoWidthOnline () {

        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return this.$vuetify.breakpoint.width *0.9
          case 'sm': return this.$vuetify.breakpoint.width *0.5
          case 'md': return this.$vuetify.breakpoint.width *0.40
          case 'lg': return this.$vuetify.breakpoint.width *0.40
          case 'xl': return this.$vuetify.breakpoint.width *0.35
        }

      },
      videoHeightOnline () {
        return this.videoWidthOnline * 0.75
      },
  },
}
</script>
<style scoped>

</style>
