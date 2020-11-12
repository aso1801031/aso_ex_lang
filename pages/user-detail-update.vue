
<!-- 表示内容 -->
<template>
    <div class="main_div">
        <!-- 背景エリア -->
        <v-card 
            elevation="2"
            style="border-radius: 10px;">
            <v-container class="profile_card">
            <h1 align=center>edit profile</h1>
            <v-form>
                <!-- Imageエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-5" align=center>Image</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <label v-show="!uploadedImage" class="input-item__label info">
                        select your file
                        <input type="file" @change="onFileChange" />
                        </label>
                         <div class="preview-item">
                            <img
                                v-show="uploadedImage"
                                width="200" height="200"
                                class="preview-item-file"
                                :src="uploadedImage"
                                alt=""
                            />
                            <div v-show="uploadedImage" class="preview-item-btn" @click="remove">
                                <p class="preview-item-name">{{ img_name }}</p>
                                <p class="preview-item-icon">change image</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                
                <!-- dateエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Date</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <v-text-field
                            v-model="date"
                            label="date"
                            ></v-text-field> 
                    </v-col>
                </v-row>


                <!-- Nameエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Name</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <!--名前入力フィールド-->
                            <v-text-field
                            v-model="name"
                            label="name"
                            ></v-text-field>  
                    </v-col>
                </v-row>

                <!-- Languageエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Language</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <v-select
                            :items="items"
                            label="language"
                            required>
                        </v-select>
                    </v-col>
                </v-row>

                <!-- Profileエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Profile</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <v-text-field v-model="text" label="profile"/>
                    </v-col>
                </v-row>

                <!-- ボタンエリア -->
                <div align="center" class="mt-16">
                    <!-- 変更ボタン -->
                    <button onclick="location.href=''" class="changebtn_design accent">変更
                    </button>
                    <br>
                    
                    
                </div>
            </v-form>
            </v-container>
        </v-card>
    </div>
</template> 

<script>
    export default {
      data: () => ({
        uploadedImage: '',
        img_name: '',
        valid: false,
        username: '',
        items: ['Japanese', 'English', 'Chinese', 'Korean','French','Spanish'],
        time: '',
        date: '',
        name: '',
        text: '',
        /*nameRules: [
          v => !!v || 'Name is required',
          //v => v.length <= 10 || 'Name must be less than 10 characters',
        ],*/
        /*email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],*/
     }),
     methods: {
        onFileChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            this.createImage(files[0]);
            this.img_name = files[0].name;
        },
        // アップロードした画像を表示
        createImage(file) {
            const reader = new FileReader();
            reader.onload = e => {
                this.uploadedImage = e.target.result;
            };
                reader.readAsDataURL(file);
        },
        remove() {
            this.uploadedImage = false;
        },
     },

    }
</script>

<router>
  path: '/profile/update'
</router>

<!-- スタイルを指定 -->
<style scoped>
.main_div{
    width:70%;
    margin:auto;
}
/* 背景を指定 */
.backarea {
    background-color: white; /* 背景色指定 */
    border-radius: 10px;
}
/* 改行キャンセルの呪文詠唱 */
.nobr {
    align-items: center;
    justify-content: center;
    display: flex;
}
/* テキストデザイン */
.text_size {
    width: 100px;
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
        width: 65%;
        padding: 30px;
    }
/*画像選択ボタンを消す*/
label > input {
  display: none;
}
/*画像選択ボタンのCSS*/
label {
    padding: 0.5rem 1rem;
    border: solid none;
    width:30%;
    color:black; /* 文字の色 */
    text-decoration: none; /* 文字の下線を消す */
    border-radius: 0.3em; /* 角を丸める */
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2); /* 文字の影 */
} 

label::after {
  font-size: 1rem;
  color: #888;
  padding-left: 1rem;
}
</style>