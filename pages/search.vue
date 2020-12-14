<template>
    <div class="main_div">
        <v-card 
            elevation="2"
            style="border-radius: 10px;">
            <v-container class="search_card">
                <p class="search_title">search lesson!</p>
                <!--フォーム-->
                <v-form>
                    <v-row class="row_el_top">
                        <v-col cols="12" sm="5" xs="12" class="element_left">
                            <!--:rules="nameRules"-->
                            <!--名前-->
                            <v-text-field
                            v-model="username"
                            label="user"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" offset="2" xs="12" class="element_right">
                            <!--言語選択-->
                            <v-select
                            :items="items"
                            v-model="language"
                            label="language"
                            required></v-select>
                        </v-col>
                    </v-row>
                    
                    <v-row class="row_el">
                        <v-col cols="12" sm="5" xs="12" class="element_left">
                            <!--時間-->
                            <time-picker v-model="time" class=""/>
                        </v-col>
                        <v-col cols="12" sm="5" offset="2" xs="12" class="element_right">
                            <!--日付-->
                            <date-picker v-model="date" class="" />
                        </v-col>
                    </v-row>
                    <!--検索ボタン-->
                    <div class="search_btn">
                        <v-btn 
                        class="accent"
                        elevation="3"
                        x-large
                        v-on:click="search">
                            Search
                        </v-btn>              
                    </div>
                </v-form>
            </v-container>
        </v-card>
        <div v-if="searchflg">
            <div v-for="lesson in lessons" :key="lesson.title">
                <v-card
                class="mx-auto mt-8 detail_card"
                style="border-radius: 10px;"
                elevation="2"
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
                                <p class="card_title">{{lesson.data.title}}</p>
                            </v-col>
                            <v-col cols="12" md="5" offset="1" class="info_div">
                                <!--ユーザー情報-->
                                <v-list-item-subtitle>
                                    <p class="info_ele">Language : {{languages[lesson.data.language_id.id-1]}}</p>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                    <p class="info_ele">Date : {{lesson.data.lesson_date}}</p>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                    <p class="info_ele">Time : {{lesson.data.lesson_time}}</p>
                                </v-list-item-subtitle>
                            </v-col>
                        </v-row>    
                    </v-list-item-content>
                </v-list-item>
                <hr class="under_line">
                <div class="under_div">
                    <v-row>
                        <v-col cols="12"  md="6">
                            <!--プロフィール-->
                            <p class="card_profile">{{lesson.text}}</p>
                        </v-col>
                        <v-col cols="12" md="4" offset="2">
                            <!--参加ボタン-->
                            <div v-if="lesson.data.joinFlag">
                                <v-btn
                                elevation="2"
                                color="grey"
                                class="white--text"
                                x-large>
                                    Joined
                                </v-btn>           
                            </div>
                            <div v-else>
                                <v-btn 
                                class="accent"
                                elevation="3"
                                x-large
                                v-on:click="join(lesson.id)">
                                    Join!
                                </v-btn>                  
       
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-card>     
        </div>   
        </div>
    
        <div v-else>
        </div>
    </div>
</template>

<script>
    import firebase from '~/plugins/firebase'
    import DatePicker from "@/components/SearchDatePicker";
    import TimePicker from "@/components/SearchTimePicker";

    export default {
        components:{
            DatePicker,
            TimePicker,
        },
        data: () => ({
            valid: false,
            username: '',
            items: ['japanese', 'english', 'chinese', 'hangle','french','spanish'],
            title: "",
            language: "",
            date: "",
            time: "",
            text: "",
            searchflg:false,
            lessons:[],
            languages:[],
            l_date:"",
        }),
        computed:{
        },
        methods: {
            search() {
                var userflg=false;
                var langflg=false;
                var timeflg=false;
                var dateflg=false;
                var userpath="users/";
                var langpath="languages/";
                this.lessons.length=0;
                this.searchflg=false;
                let today = new Date();
                //console.log(this.username,this.language,this.date,this.time)
                //usersでユーザー特定
                firebase.firestore().collection('users').get().then(snapshot => {
                    snapshot.forEach(doc => {
                        //名前判定
                        if(this.username !== ""){
                            if(this.username === doc.data().name){
                                userpath+=doc.id
                                //userflg = true
                                //console.log(1,userpath,doc.data().name,doc.id)
                            }
                        }


                    })
                })

                //languageで言語特定
                firebase.firestore().collection('languages').get().then(snapshot => {
                    snapshot.forEach(doc => {
                        //名前判定
                        if(this.language !== ""){
                            if(this.language === doc.data().name){
                                langpath+=doc.id
                                //langflg = true
                                //console.log(2,this.language,doc.data().name,langpath)
                            }
                        }

                    })
                })

                firebase.firestore().collection('lessons').get().then(snapshot => {
                    snapshot.forEach(doc => {
                        //console.log(doc.data().teacher_id.path,userpath,doc.data().teacher_id.path === userpath)
                        //名前判定
                        userflg = this.username === "" && doc.data().teacher_id.id !== this.$store.state.id|| // ユーザーがnullかつ自分の以外ならtrue
                        doc.data().teacher_id.path === userpath && doc.data().teacher_id.id !== this.$store.state.id // ユーザが入力値と等しいかつ、自分の以外ならtrue
                        //console.log(doc.data().teacher_id.id,this.$store.state.id,doc.data().teacher_id.id !== this.$store.state.id)
                        //言語判定
                        langflg = this.language === "" || doc.data().language_id.path === langpath
                        //時間判定
                        timeflg = this.time === "" || this.time === doc.data().lesson_time
                        //console.log(3,this.time,doc.data().lesson_time,timeflg)
                        //日付判定
                        dateflg = this.date === "" || this.date === doc.data().lesson_date
                        //console.log(4,this.date,doc.data().lesson_date,dateflg)

                        // 現在の時間を取得
                        this.l_date = new Date(doc.data().lesson_date+" "+doc.data().lesson_time)
                        if(userflg && langflg && timeflg && dateflg && today < this.l_date){
                            this.searchflg = true //判定をtrue
                            this.lessons.push({id:doc.id,data:doc.data()}) //lessonsに情報をまとめてlessonsに代入
                        }
                        if(this.username === "" && this.language === "" &
                            this.time === "" && this.date === ""){ //全てが空で検索したら判定をfalseにする
                                this.searchflg = false
                            }
                        //console.log(doc.data().language_id)
                        //console.log(5, userflg,langflg,timeflg , dateflg)

                    })
                })
                //console.log(this.username,this.language,this.date,this.time)
                //console.log(this.lessons)

            },
            join(id){
                location.href="/choose_lesson/"+id;
            }
        },
        created:function () {
            firebase.firestore().collection('languages').get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.languages.push(doc.data().name)
                })
            })
            //console.log("lang",this.languages)

        }
    }

    
</script>

<style>
    .main_div{
        width: 75%;
        margin: auto;
    }
    .search_card{
        margin-top: 30px;
        margin-bottom: 40px;
        width: 85%;
    }
    .search_title{
        text-align: center;
        margin-bottom: 0%;
        font-size: 1.5em;
        letter-spacing: 0.5px;
    }
   /* .element_left{
    }
    .element_right{
    }
    .search_el{
    }*/
    .row_el{
        margin-top: 50px;
        height: 60px;
    }
    .row_el_top{
        margin-top: 0%;
        height: 60px;
    }
    .search_btn{
        text-align: center;
        margin-top: 70px;
        margin-bottom: 30px;
        letter-spacing: 0.5px;
    }
    .v-btn:not(.v-btn--round).v-size--x-large {
        min-width: 180px;
    }
    .detail_card{
        margin: 0%;
    }
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
        word-wrap: normal;
    }
</style>
  