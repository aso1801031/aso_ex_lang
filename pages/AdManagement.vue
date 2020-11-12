<!-- 表示内容 -->
<template>
    <!-- 背景エリア -->
    <div class="main_div">
        <!-- 繰り返しユーザーを表示する -->
        <ul v-for="allUsers of allUsers" :key="allUsers.name">
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
        
    }
    /* async function execute() {
        const userData = {
            name: "name" + (new Date()).getTime(),
        };
        const userRef = await db.collection("users").add(userData);

        const postData = {
            name: "post" + (new Date()).getTime(),
            user: userRef
        };
        const postRef = await db.collection("posts").add(postData);

        const querySnapshot = await db.collection("posts").get();
        const posts = [];
        querySnapshot.forEach(doc => {
            posts.push(doc.data());
        });

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            const userQuerySnapshot = await post.user.get();
            post.userData = userQuerySnapshot.data();
        }

        return posts;
    }
    execute().then(posts => {
        console.log(posts);
        process.exit(0);
    }); */
    
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


/* 変更ボタンデザイン */
.changebtn_design{
    width:30%;
    padding: 2%;
    color: white; /* 文字の色 */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
    font-weight: bold; /* 文字の太さ */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
}   
.profile_card{
        margin-top: 30px;
        margin-bottom: 40px;
        padding: 30px;
    }

</style>