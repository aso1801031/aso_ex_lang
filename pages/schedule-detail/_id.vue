<template>
    <v-card
        class="mx-auto mt-8"
        style="border-radius: 10px;"
        elevation="2"
        max-width="800"
        outlined>
        <v-list-item one-line>
            <v-list-item-avatar
                tile
                size="80"
                color="success"
                class="image_tile">
            </v-list-item-avatar>
            <v-list-item-content class="pb-0">
                <v-row>
                    <v-col cols="12"  md="6">
                        <!--タイトル-->
                        <p class="card_title">{{title}}</p>
                    </v-col>
                    <v-col cols="12" md="5" offset="1" class="info_div">
                        <!--ユーザー情報-->
                        <v-list-item-subtitle>
                            <p class="info_ele">Language : {{language}}</p>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <p class="info_ele">Date : {{date}}</p>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <p class="info_ele">Time : {{time}}</p>
                        </v-list-item-subtitle>
                    </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>
        <hr class="under_line">
        <!--
        <v-card-actions>
            <v-btn
            outlined
            rounded
            text>
            Button
            </v-btn>
        </v-card-actions>
        -->
        <div class="under_div">
            <div>
                <p class="card_profile">{{text}}</p>
            </div>
            <div class="under_btn">
                <v-row>
                    <v-col cols="12"  sm="6" xs="12">
                        <div class="back_btn">
                            <!--戻るボタン-->
                            <v-btn 
                            class="accent"
                            elevation="3"
                            x-large
                            v-on:click="back"
                            >
                            back
                            </v-btn>        
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" xs="12">
                        <div class="lesson_btn">
                            <!--開始ボタン-->
                            <v-btn 
                            class="accent"
                            elevation="3"
                            x-large
                            v-on:click="start"
                            ><!--@click="submit"-->
                            lesson Start!
                            </v-btn>        
                        </div>
                    </v-col>
                </v-row>

            </div>
        </div>
    </v-card>    
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
            id:this.$route.params.id
            
        }
        },
        methods:{
            back: function () {
                location.href="/schedule"
            },
            start(){
                firebase.firestore().collection('lessonAttendances').get().then(snapshot => {
                    snapshot.forEach(doc => {
                        if(doc.data().lesson_id.id === this.id){
                            location.href = "/video-chat/"+doc.data().chat_id.id
                        }
                    })
                })

            }
        },
        async created () {
        if(this.id != null){
            firebase.firestore().collection('lessons').doc(this.id).get().then(
            doc => {
            doc.data().language_id.get().then(res => { 
                this.language = res.data().name
                this.title = (doc.data().title)
                
                this.date = (doc.data().lesson_date)
                this.time = (doc.data().lesson_time)
                this.text = (doc.data().detail)
            })
            })
        }
        },
    }
</script>

<style>
    .image_tile{
        margin-left: 20px;
        border-radius: 10px;
    }
    .card_title{
        font-size: 1.9em;
        margin-top: 50px;
        margin-left: 10px;
        padding-top: 0%;
    }
    .info_div{
        margin-top: 10px;
        padding-bottom: 0%;
    }
    .info_ele{
        padding-top: 0%;
        margin-top: 0px;
        margin-bottom: 2px;
        font-size: 1.2em;
    }
    .under_line{
        width: 90%;
        margin: 0px auto;
    }
    .under_div{
        width: 90%;
        margin: auto;
        margin-bottom: 15px;
    }
    .card_profile{
        font-size: 1.3em;
        margin-top: 20px;
        word-wrap: normal;
        width: 500px;
    }
    .under_btn{
        margin-top: 70px;
        margin-bottom: 30px;
        text-align: right;
    }
    .back_btn{
        text-align: left;
    }
    .lesson_btn{
        text-align: right;
    }
</style>
  