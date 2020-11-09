<!-- 表示内容 -->
<template>

    <section>

        <!-- 背景エリア -->
        <div class="backarea mt-10 pt-16 pb-16">

            <!-- E-mailエリア -->
            <div class="nobr mt-10">
                <h3 class="text_size mr-16" align=center>E-mail</h3>
                <p class="text_design ml-16 pt-3">1801000@s.asojuku.ac.jp</p>
            </div>

            <!-- Passwordエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-16" align=center>Password</h3>
                <p class="text_design ml-16 pt-3">*************</p>
            </div>
            
            <!-- Confirm Passwordエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-16" align=center>Confirm Password</h3>
                <p class="text_design ml-16 pt-3">*************</p>
            </div>
            
            <!-- Nameエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-16" align=center>Name</h3>
                <p class="text_design ml-16 pt-3">麻生　太郎</p>
            </div>
            
            <!-- Languageエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-16" align=center>Language</h3>
                <p class="text_design ml-16 pt-3">Japanese</p>
            </div>

            <!-- Profileエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-16" align=center>Profile</h3>
                <p class="text_design ml-16 pt-3">
                    あいうえおかきくけこさしすせそたちつてと
                    <br>
                    なにぬねのはひふへほまみむめもやゆよ
                </p>
            </div>

            <!-- Imageエリア -->
            <div class="image_area mt-16">
                <h3 class="text_size ml-16" align=center>Image</h3>
                <img src="" width="200" height="200" class="ml-16 pl-16">
                
            </div>

            <!-- ボタンエリア -->
            <div align="center" class="mt-16 pt-16">
                <!-- 新規登録ボタン -->
                <button onclick="" class="newbtn_design accent">新規登録</button>
                <br>
                <!-- ログインボタン -->
                <button onclick="location.href='login'" class="returnbtn_design mt-16 accent">戻る</button>
                
                
            </div>

        </div>

    </section>

</template> 

<!-- データ操作 -->
<script>

</script>

<!-- スタイルを指定 -->
<style scoped>
/* 背景を指定 */
.backarea {
    background-color: white; /* 背景色指定 */
}
/* 改行キャンセルの呪文詠唱 */
.nobr {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left:10%
}
/* imageエリア */
.image_area {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 20%
}
/* テキストデザイン */
.text_size {
    width: 100px;
}
/* テキストボックスデザイン */
.text_design {
    height: 20%;
    width: 40%;
}
/* 新規登録ボタンデザイン */
.newbtn_design{
    width:30%;
    padding: 2%;
    color: white; /* 文字の色 */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
    font-weight: bold; /* 文字の太さ */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
}   
/* 戻るボタンデザイン */
.returnbtn_design{
    width:20%;
    height: 10%;
    padding: 10px;
    color: white; /* 文字の色 */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
    font-weight: bold; /* 文字の太さ */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
} 
</style>