<template>
  <v-row class="pa-4">
    <v-col cols="12" sm="6">
      <v-sheet :width="videoWidthOnline" :height="videoHeightOnline" class="success" >
        <video autoplay :srcObject.prop="otherStream" v-bind:style="{maxWidth:videoWidthOnline+'px',width:videoWidthOnline+'px'}" id="online"></video>
      </v-sheet>
      
    </v-col>

    <v-col cols="12" sm="6" class="text-right" >
      <v-row justify="end" class="pr-2">
        <v-sheet :width="videoWidthLocal" :height="videoHeightLocal" class="success">
          <video autoplay :srcObject.prop="localStream" v-bind:style="{maxWidth:videoWidthLocal+'px',width:videoWidthLocal+'px'}" ></video>       
        </v-sheet>
      </v-row>
      <v-row >
        <v-col>
          <input v-model="searchText" class="white primary--text mb-2">
          <v-spacer></v-spacer>
          
          <div>{{myId}}</div><v-btn @click = "makeCall" x-large class="accent">call</v-btn>
        </v-col>
        
      </v-row>
      
    </v-col>
    

  </v-row>
    
  
  
</template>

<script>
import Peer from "skyway-js"
export default {
  name: 'app',
  data(){
    return {
      localStream: undefined,
      otherStream: undefined,
      peer: new Peer({key:"16a14632-8309-465c-ab3f-8193008c0657"}),
      mediaConnection: null,
      myId: null,
      searchText:"",
      
    }　
  },
  async created() {
    
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
  },
  methods: {
    makeCall(){
      console.log("call!!!")
      this.mediaConnection = this.peer.call(this.searchText,this.localStream)
      this.mediaConnection.on('stream', stream => {
        console.log("streamきたよ!!!")
        this.otherStream = stream;
      })
    },
  },
  async mounted(){
    this.peer.on('open', () => {
      console.log('peer opened!')
      this.myId = this.peer.id
    });
    this.peer.on('call', mediaConnection => {
      console.log("コールされました")
      mediaConnection.answer(this.localStream);
      this.mediaConnection = mediaConnection
      this.mediaConnection.on('stream', stream => {
        console.log("streamきたよ!!!")
        this.otherStream = stream;
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