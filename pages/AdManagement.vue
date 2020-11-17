<!-- 表示内容 -->
<template>
    <!-- 背景エリア -->
    <div class="main_div">
        <!-- 繰り返しユーザーを表示する -->
        <ul v-for="allUsers of allUsers" :key="allUsers.mailadress">
        <v-card 
            elevation="2"
            style="border-radius: 10px;">
            <v-container class="profile_card">
                <v-row>
                    <v-col md="1">画像を<br>表示</v-col>
                    <v-row>
                        <v-col><h3>Username:</h3></v-col>
                        <v-col><h3>{{ allUsers.name }}</h3></v-col>
                    </v-row>
                    <v-row>
                        <v-col><p>Languages:</p></v-col>
                        <v-col><p>{{ allUsers.language_id }}</p></v-col>
                    </v-row>
                    <v-row>
                        <v-col><p>birth:</p></v-col>
                        <v-col><p>{{ allUsers.birth }}</p></v-col>
                    </v-row>
                    
                </v-row>
                <v-row>
                        <button onclick="location.href='AdManagement/detail'" class="detailbtn_design mt-16 mb-10 ">変更</button>
                        <button  class="detailbtn_design mt-16 mb-10" type="submit" @click="delet">削除</button>
                </v-row>
            </v-container>
        </v-card>
        </ul>
    </div>
</template> 

<script>
    import firebase from '~/plugins/firebase'
    export default {
        name:"",
        data: function(){
            return {
                name:"",
                db: null,
                allUsers: [],
            }
        },
        created:function () {
            firebase.firestore().collection('users').get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.allUsers.push(doc.data())
                })
            })
        },
        methods : {
        delet() {
            console.log("delete")

            }
        },
        
    }
</script>

<router>
  path: '/AdManagement'
</router>

<!-- スタイルを指定 -->
<style scoped>
.main_div{
    width:70%;
    margin:auto;
}
/* テキストデザイン */
.text_size {
    width: 100px;
}

.profile_card{
        margin-top: 30px;
        margin-bottom: 40px;
        padding: 30px;
    }
.detailbtn_design{
    width:20%;
    height: 10%;
    padding: 10px;
    background-color: #20b2aa; /* 背景色 */
    color: white; /* 文字の色 */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
    font-weight: bold; /* 文字の太さ */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
}   
.button-area{
    width: 30px;
    height: 40px;
}
</style>