<template>

    <section >

        <!-- 画像エリア -->
        <div class="gajou">
            <img width="35%" height="35%" src="/image/aso.jpg">
        </div>

        <!-- ボタンエリア -->
        <div class="btn_area">
                
                <v-btn 
                class="accent "
                elevation="3"
                height="80"
                width="50"
                @click="search"
                x-large
                >
                    <div>
                        <img width="10%" height="10%" src="/image/Search.png">
                        <br>
                        <h4>検索</h4>
                    </div>
                </v-btn> 


                <v-btn 
                class="accent ml-3"
                elevation="3"
                height="80"
                width="50"
                @click="lesson"
                x-large
                >
                    <div>
                        <img width="10%" height="10%" src="/image/Lesson.png">
                        <br>
                        <h4>レッスン登録</h4>
                    </div>
                </v-btn> 


                <v-btn 
                class="accent ml-3"
                elevation="3"
                height="80"
                width="50"
                @click="schedule"
                x-large
                >
                    <div>
                        <img width="10%" height="10%" src="/image/Schedule.png">
                        <br>
                        <h4>スケジュール確認</h4>
                    </div>
                </v-btn> 


                <v-btn 
                class="accent ml-3"
                elevation="3"
                height="80"
                width="50"
                @click="history"
                x-large
            　  >
                    <div>
                        <img width="10%" height="10%" src="/image/History.png">
                        <br>
                        <h4>学習履歴確認</h4>
                    </div>
                </v-btn> 


                <v-btn 
                class="accent ml-3"
                elevation="3"
                height="80"
                width="50"
                @click="profile"
                x-large
                >
                    <div>
                        <img width="10%" height="10%" src="/image/Profile.png">
                        <br>
                        <h4>プロフィール</h4>
                    </div>
                </v-btn> 

        </div>

    </section>

</template>

<script>
export default {
    methods:{
        search:function(){
            this.$router.push('search')
        },
        lesson:function(){
            this.$router.push('lesson_register')
        },
        schedule:function(){
            this.$router.push('schedule')
        },
        history:function(){
            this.$router.push('history')
        },
        profile:function(){
            this.$router.push('profile')
        },
    }
    
}
</script>

<style scoped>
 /* 画像(麻生ロゴ) */
.gajou {
    margin-left: 40%;
    margin-top: 10%;
}
/* ボタンエリア */
.btn_area{
    margin-top: 15%;
    margin-left: 9%
} 
/* ボタンデザイン */
.btn_design{
    margin-right: 3%;
    width:150px;
    padding: 10px;
    background-color: #20b2aa; /* 背景色 */
    color: white; /* 文字の色 */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
    font-weight: bold; /* 文字の太さ */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.5em; /* 角を丸める */
}   
</style>