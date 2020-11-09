<template>

    <section >

        <!-- 画像エリア -->
        <div class="gajou">
            <img width="35%" height="35%" src="/image/aso.jpg">
        </div>

        <!-- ボタンエリア -->
        <div class="btn_area">
            <p>
                <button onclick="location.href='search'" class="btn_design accent"><img width="20%" height="20%" src="/image/Search.png"><br>検索</button>
                <button onclick="location.href='lesson_register'" class="btn_design accent"><img width="20%" height="20%" src="/image/Lesson.png"><br>レッスン登録</button>
                <button onclick="location.href='schedule'" class="btn_design accent"><img width="20%" height="20%" src="/image/Schedule.png"><br>スケジュール確認</button>
                <button onclick="location.href='history'" class="btn_design accent"><img width="20%" height="20%" src="/image/History.png"><br>学習履歴確認</button>
                <button onclick="location.href='profile'" class="btn_design accent"><img width="20%" height="20%" src="/image/Profile.png"><br>プロフィール</button>
                <!-- <button onclick="location.href='profile'" class="btn_design"><img width="20%" height="20%" src="/image/www.png"><br>プロフィール</button> -->
            </p>
        </div>

    </section>

</template>

<script>

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
    margin-left: 13%
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