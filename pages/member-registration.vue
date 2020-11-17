<!-- 表示内容 -->
<template>

    <section>

        <!-- 背景エリア -->
        <div class="backarea mt-10 pt-16 pb-16">

            <!-- E-mailエリア -->
            <div class="nobr mt-10">
                <h3 class="text_size mr-6" align=center>E-mail</h3>
                <input type="email" class="text_design ml-6" placeholder="E-mail" v-model="mailadress" />
            </div>
            <div align=center>
                <!-- E-mail未入力時(エラーメッセージ1) -->
                <!-- <p v-if="email_flag=='1'" class="erorr_message mr-16 pr-10">※E-mailを入力してください。</p> -->
                <!-- 0文字または51文字以上の場合(エラーメッセージ2) -->
                <!-- <p v-else-if="email_flag=='2'" class="erorr_message mr-16 pr-10">※1~50文字以内で入力してください。</p> -->
                <!-- E-mailが有効でない(エラーメッセージ3) -->
                <!-- <p v-else-if="email_flag=='3'" class="erorr_message mr-16 pr-10">※このE-mailがご利用できません。</p> -->
            </div>

            <!-- Passwordエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Password</h3>
                <input type="password" class="text_design ml-6" placeholder="Password" v-model="password" />
            </div>
            <div align=center>
                <!-- Password未入力時(エラーメッセージ1) -->
                <!-- <p v-if="pass_flag=='1'" class="erorr_message mr-16 pr-4">※Passwordを入力してください。</p> -->
                <!-- 0文字または51文字以上の場合(エラーメッセージ2) -->
                <!-- <p v-else-if="pass_flag=='2'" class="erorr_message mr-16 pr-4">※1~20文字以内で入力してください。</p> -->
            </div>

            <!-- Confirm Passwordエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Confirm Password</h3>
                <input type="password" class="text_design ml-6" placeholder="Confirm Password">
            </div>
            <div align=center>
                <!-- confirm Password未入力時(エラーメッセージ1) -->
                <!-- <p v-if="Cpass_flag=='1'" class="erorr_message mr-16 pr-4">※Passwordを入力してください。</p> -->
                <!-- 0文字または21文字以上の場合(エラーメッセージ2) -->
                <!-- <p v-else-if="Cpass_flag=='2'" class="erorr_message mr-16 pr-4">※1~20文字以内で入力してください。</p> -->
                <!-- Passwordと違う場合(エラーメッセージ3) -->
                <!-- <p v-else-if="Cpass_flag=='3'" class="erorr_message mr-16 pr-4">※Passwordと入力が違います。</p> -->
            </div>

            <!-- Nameエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Name</h3>
                <input type="text" class="text_design ml-6" placeholder="Name" v-model="name" />
            </div>
            <div align=center>
                <!-- Name未入力時(エラーメッセージ1) -->
                <!-- <p v-if="name_flag=='1'" class="erorr_message mr-16 pr-4">※Nameを入力してください。</p> -->
                <!-- 0文字または21文字以上の場合(エラーメッセージ2) -->
                <!-- <p v-else-if="name_flag=='2'" class="erorr_message mr-16 pr-4">※1~20文字以内で入力してください。</p> -->
            </div>

            <!-- Birthエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Birth</h3>
                <input type="text" class="text_design ml-6" placeholder="Birth" v-model="birth" />
            </div>
            <div align=center>
                
            </div>

            <!-- Languageエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Language</h3>
                <select class="text_design ml-6" v-model="language_id">
                    <option value="null">言語を選択してください</option>
                    <option value="ja">Japanese</option>
                    <option value="en">English</option>
                    <option value="ko">Korean</option>
                    <option value="zn">Chinese</option>
                    <option value="fr">French</option>
                    <option value="it">Italian</option>
                    <option value="ru">Russian</option>
                    <option value="th">Thai</option>
                </select>
            </div>
            <div align=center>
                <!-- Language未選択時(エラーメッセージ1) -->
                <!-- <p v-if="Lang_flag=='1'" class="erorr_message mr-16 pr-4">※Languageを選択する。</p> -->
            </div>

            <!-- Profileエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Profile</h3>
                <!-- <input type="text" class="text_design ml-6" placeholder="Profile"> -->
                <textarea cols="54" rows="5" class="textarea_design ml-6" v-model="profile" />
            </div>
            <div align=center>
                <!-- 0文字または101文字以上の場合(エラーメッセージ1) -->
                <!-- <p v-if="pro_flag=='1'" class="erorr_message mr-16 pr-4">※0~100文字以内で入力してください。</p> -->
            </div>

            <!-- Imageエリア -->
            <div class="nobr mt-16 mr-16 pr-16">
                <h3 class="text_size ml-16 pl-5" align=center>Image</h3>
                <img :src="data.image" width="200" height="200" class="ml-16">
                <label class="label mr-16 ml-10">
                    select your file
                    <input type="file" class="ml-10" accept='image/*' ref="file" @change="setImage"/>
                </label>
            </div>

            <!-- ボタンエリア -->
            <div align="center" class="mt-16">
                <!-- 新規登録ボタン -->
                <button class="newbtn_design accent" @click="changAll">新規登録</button>
                <br>
                <!-- ログインボタン -->
                <button onclick="location.href='login'" class="returnbtn_design mt-16 accent">戻る</button>
                
                
            </div>

        </div>

    </section>

</template> 

<!-- データ操作 -->
<script>
export default {
    layout:"default2",
    data() {
        return {
            data: {
                image: "",
                name: "",
            }
        };
    },
    methods: {
        setImage(e) {
            const files = this.$refs.file;
            const fileImg = files.files[0];
            if (fileImg.type.startsWith("image/")) {
                    this.data.image = window.URL.createObjectURL(fileImg);
                    this.data.name = fileImg.name;
                    this.data.type = fileImg.type;
            }
        },
        changAll() {
            
            this.$store.commit("changMailadress", this.mailadress);
            this.$store.commit("changPassword", this.password);
            this.$store.commit("changName", this.name);
            this.$store.commit("changLanguage_id", this.language_id);
            this.$store.commit("changProfile", this.profile);
            this.$store.commit("changBirth", this.birth);
            // alert($store.state.mailadress);
            location.href = "mamber-registration-verification";
        }

    }
};
</script>

<!-- スタイルを指定 -->
<style scoped>
/* 背景を指定 */
.backarea {
    background-color: white; /* 背景色指定 */
    border-radius: 0.3em; /* 角を丸める */
}
/* 改行キャンセルの呪文詠唱 */
.nobr {
    align-items: center;
    justify-content: center;
    display: flex;
}
/* 画像のところ(「select your file」のところ) */
label > input {
 display: none;
}
.label {
    border: solid none;
    color:black; /* 文字の色 */
    background-color: #dcdcdc;
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.5); /* 文字の影 */
}
/* テキストデザイン */
.text_size {
    width: 100px;
}
/* テキストボックスデザイン */
.text_design {
    height: 20%;
    width: 40%;
    border-bottom: 1px solid #dcdcdc; /* 下線指定 */
}
/* テキスト(textarea)エリアデザイン */
.textarea_design {
border: 1px solid black;  /* 枠線 */
    padding: 0.5em;          /* 内側の余白量 */
    font-size: 1em;          /* 文字サイズ */
}
/* エラーメッセージ */
.erorr_message {
    color: red;
    font-weight: bolder
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