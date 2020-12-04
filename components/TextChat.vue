<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <v-card elevation="0">

                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="6">
                        <v-row class="mb-0 tb-0">
                            <v-textarea
                            v-model="message"
                            auto-grow
                            outlined
                            rows="2"
                            row-height="40"
                            ></v-textarea>
                        </v-row>
                        
                        <v-row class="pt-0 mt-0">
                            <v-spacer></v-spacer>
                            <v-btn class="accent" @click="pushMessage"><div>send!</div></v-btn>
                        </v-row>

                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>

                <transition-group name="message-list">
                    <div v-for="data in datas" :key="data.id">
                        <v-row>
                        <v-spacer v-if="data.flag"></v-spacer>
                        <v-col cols="4" class="ma-2">
                            <v-card outlined v-bind:class="{success : data.flag,info: !data.flag}">
                                <v-card-title>{{data.message}}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    </div>
                </transition-group>

                

            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import firebase from '~/plugins/firebase'
import 'firebase/firestore';
require('array-foreach-async');

export default {
    
    data: function(){
        return {
            message:"",
            
            datas:[],
            roomId: this.$route.params.id,
            id:"1",
            uid: this.$store.state.id,
            snapshot:"",
            number:1,
            

        }
    },
    
    created(){
        this.getData()
        
    },
    methods:{
        //dataをfirestoreにあげるメソッド
        async pushMessage(){
            if(this.message != ""){
                console.log("[TextChat]: pushing message!")
                var messageData = await {
                    message:this.message,
                    senderid:firebase.firestore().collection("users").doc(this.uid),
                    timestamp:firebase.firestore.FieldValue.serverTimestamp()
                }
                await console.log("[TextChat]:",messageData)
                firebase.firestore()
                .collection('chats')
                .doc(this.roomId)
                .collection('room')
                .doc()
                .set(messageData)
                
                    
            }
        },
        getData: async function(){
            var ref = firebase.firestore()
            .collection('chats')
            .doc(this.roomId)
            .collection('room')
            .orderBy("timestamp", "asc")

            ref.onSnapshot( (doc) => {
                doc.docChanges().forEachAsync(async change =>{
                    if (change.type === 'added') {
                        console.log("[TextChat]New message from DB:", change.doc.data().message);
                        await change.doc.data().senderid.get().then(user =>{
                            var yours = false
                            console.log("[TextChat]push message is:",change.doc.data().message)
                            // console.log("[TextChat]this user:",this.uid)
                            if(this.uid === user.id){
                                yours = true
                            }
                            var messageData = {
                                message:change.doc.data().message,
                                flag:yours,
                                id:this.number,
                                
                                }
                            this.datas.unshift(messageData)
                            this.number+=1
                            
                        })
                    }
                })
            }) 
            
        }
    },
}
</script>
<style scoped>
.message-list-enter{
    opacity: 0;
}
.message-list-enter-to{
    transition: opacity .5s;
}

</style>