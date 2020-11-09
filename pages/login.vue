<!-- 表示内容 -->
<template>

    <section>

        <!-- 背景エリア -->
        <div class="backarea mt-10 pt-16 pb-16">
            
            <!-- E-mailエリア -->
            <div class="nobr mt-10">
                <h3 class="text_size"> E-mail </h3>
                <input type="text" class="text_design ml-6" placeholder="E-mail">
            </div>

            <!-- E-mailエラーエリア -->
            <div align=center class="pr-16 mr-16">
                <p class="erorr_message">※E-mailを入力してください。</p>
                <!-- E-mail未入力時(エラーメッセージ1) -->
                <!-- <p v-if="email_flag=='1'" class="erorr_message">※E-mailを入力してください。</p> -->
                <!-- E-mail形式でない(エラーメッセージ2) -->
                <!-- <p v-else-if="email_flag=='2'" class="erorr_message">※E-mailの形式で入力してください。</p> -->
                <!-- E-mailが有効でない(エラーメッセージ3) -->
                <!-- <p v-else-if="email_flag=='3'" class="erorr_message">※このE-mailがご利用できません。</p> -->
            </div>

            <!-- Passwordエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size">password </h3>
                <input type="password" class="text_design ml-6" placeholder="password">
            </div>

            <!-- Passwordエラーエリア -->
            <div>
                <!-- password未入力時(エラーメッセージ) -->
                <p class="erorr_message pr-10 mr-16" align="center">※Passwordを入力してください。</p>
                <!-- <p v-if="pass_flag" class="erorr_message">※Passwordを入力してください。</p> -->
            </div>

            <!-- ログイン失敗エラーエリア -->
            <div>
                <!-- ログイン失敗(エラーメッセージ) -->
                <p class="erorr_message mt-10" align=center>メールアドレスまたはパスワードが違います</p>
                <!-- <p v-if="login_flag" class="erorr_message mt-10">メールアドレスまたはパスワードが違います</p> -->
            </div>

            <!-- ボタンエリア -->
            <div align="center">
                
                <!-- ログインボタン -->
                <button onclick="" class="loginbtn_design mt-16">ログイン</button>

                <br>

                <!-- 新規登録ボタン -->
                <button onclick="location.href='search'" class="newbtn_design mt-16 mb-10">新規登録</button>

            </div>

        </div>

    </section>

</template> 

<!-- データ操作 -->
<script>
    // 内部処理できてないお♡
    // var flag = '1';
    // var pass_flag = false;
    // var login_flag = false
</script>

<!-- スタイルを指定 -->
<style scoped>
/* 背景を指定 */
.backarea {
    background-color: white; /* 背景色指定 */
}
.nobr{
    align-items: center;
    justify-content: center;
    display: flex;
}
/* テキストサイズを指定(テキストボックスを揃える為) */
.text_size{
    width: 100px; 
}
/* テキストボックスデザイン */
.text_design {
    height: 20%;
    width: 40%;
    border-bottom: 1px solid #dcdcdc; /* 下線指定 */
}
/* ボタンデザイン */
.loginbtn_design{
    width:30%;
    padding: 2%;
    background-color: #20b2aa; /* 背景色 */
    color: white; /* 文字の色 */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
    font-weight: bold; /* 文字の太さ */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
}   
.newbtn_design{
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
.erorr_message {
    color: red;
    font-weight: bolder
}

</style>