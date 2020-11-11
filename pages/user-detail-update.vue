<!--<template>
    <v-container class="text-center info">
      <div id = "detail">
        <v-row>
            <p>edit profile</p>
        </v-row>
        <div class="nobr">
            <h3>Image</h3>
            <form method="POST" id="change">
                <button class="info btn-square-pop2" type="submit" formaction="/profile/update" from="change">select yourfile</button>
            </form>
            <form method="POST" id="change">
                <button class="accent btn-square-pop3" type="submit" formaction="/profile/update" from="change">upload</button>
            </form>
        </div>
        <div class="nobr">
            <h3>Date</h3>
            <v-select :items="year" label="year"/>
            <v-select :items="month" label="month"/>
            <v-select :items="day" label="day"/>
        </div>
        <div class="nobr">
            <h3>Name</h3>
            <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="name" required></v-text-field>
        </div>
        <div class="nobr">
            <h3>Language</h3>
            <v-select :items="language" label="Language" solo>
            </v-select>
        </div>
        <div class="nobr">
            <h3>Profile</h3>
        </div>
        <form method="POST" id="change">
          <button class="accent btn-square-pop" type="submit" formaction="/profile/update" from="change">変更</button>
        </form>
      </div>
        
    </v-container>
</template>
<script>
    export default {
        data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        year: [
             1,2,3,4,5,6,7,8,9,10,11,12,
        ],
        month: [
            1,2,3,4,5,6,7,8,9,10,11,12,
        ],
        day: [
            1,2,3,4,5,6,7,8,9,10,11,12,
        ],
        language: [
            'japanese','chinese','english','spanish','hungle',
        ],
        }),
    }
</script>
<router>
  path: '/profile/update'
</router>
<style>
p{
    margin:auto;
}
.nobr{
    align-items: center;
    justify-content: center;
    display: flex;
}
.btn-square-pop2 {
  margin:auto;
  width:120%;
  margin:10px;
  text-decoration: none;
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: 300;
}
.btn-square-pop3 {
  margin:auto;
  width:120%;
  margin:10px;
  color:white;
  text-decoration: none;
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: 300;
}
.btn-square-pop:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}

</style>--!>
<!-- 表示内容 -->
<template>

    <section>

        <!-- 背景エリア -->
        <div class="backarea mt-10 pt-16 pb-16">
            <p align=center>edit profile</p>
            <!-- Imageエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size ml-16 pl-5" align=center>Image</h3>
                <img :src="data.image" width="200" height="200" class="ml-16">
                <label for="file_photo">
                <input type="file" id="file_photo" class="ml-10" accept='image/*' ref="file" @change="setImage"/>
                </label>
            </div>
            
            <!-- dateエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Date</h3>
                <select name="" class="select_design ml-6">
                    <option value="null">年</option>
                    <option value="ja">1998</option>
                    <option value="en">1999</option>
                    <option value="ko">2000</option>
                    <option value="zn">2001</option>
                    <option value="fr">2002</option>
                    <option value="it">2003</option>
                    <option value="ru">2004</option>
                    <option value="th">2005</option>
                </select>
                <select name="" class="select_design ml-6">
                    <option value="null">月</option>
                    <option value="ja">1</option>
                    <option value="en">2</option>
                    <option value="ko">3</option>
                    <option value="zn">4</option>
                    <option value="fr">5</option>
                    <option value="it">6</option>
                    <option value="ru">7</option>
                    <option value="th">9</option>
                    <option value="th">10</option>
                    <option value="th">11</option>
                    <option value="th">12</option>
                </select>
                <select name="" class="select_design ml-6">
                    <option value="null">日</option>
                    <option value="ja">1</option>
                    <option value="en">2</option>
                    <option value="ko">3</option>
                    <option value="zn">4</option>
                    <option value="fr">5</option>
                    <option value="it">6</option>
                    <option value="ru">7</option>
                    <option value="th">9</option>
                    <option value="th">10</option>
                    <option value="th">11</option>
                    <option value="th">12</option>
                    <option value="null">13</option>
                    <option value="ja">14</option>
                    <option value="en">15</option>
                    <option value="ko">16</option>
                    <option value="zn">17</option>
                    <option value="fr">18</option>
                    <option value="it">19</option>
                    <option value="ru">20</option>
                    <option value="th">21</option>
                    <option value="th">22</option>
                    <option value="th">23</option>
                    <option value="th">24</option>
                    <option value="null">25</option>
                    <option value="ja">26</option>
                    <option value="en">27</option>
                    <option value="ko">28</option>
                    <option value="zn">29</option>
                    <option value="fr">30</option>
                    <option value="it">31</option>
                </select>
            </div>


            <!-- Nameエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Name</h3>
                <input type="text" class="text_design ml-6" placeholder="Name">
            </div>
            <div align=center>
                <p class="erorr_message mr-16 pr-10">※Nameを入力してください。</p>
                <!-- Name未入力時(エラーメッセージ1) -->
                <!-- <p v-if="name_flag=='1'" class="erorr_message mr-16 pr-4">※Nameを入力してください。</p> -->
                <!-- 0文字または21文字以上の場合(エラーメッセージ2) -->
                <!-- <p v-else-if="name_flag=='2'" class="erorr_message mr-16 pr-4">※1~20文字以内で入力してください。</p> -->
            </div>

            <!-- Languageエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Language</h3>
                <select name="" class="text_design ml-6">
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
                <p class="erorr_message mr-16 pr-3">※Languageを選択してください。</p>
                <!-- Language未選択時(エラーメッセージ1) -->
                <!-- <p v-if="Lang_flag=='1'" class="erorr_message mr-16 pr-4">※Languageを選択する。</p> -->
            </div>

            <!-- Profileエリア -->
            <div class="nobr mt-16">
                <h3 class="text_size mr-6" align=center>Profile</h3>
                <!-- <input type="text" class="text_design ml-6" placeholder="Profile"> -->
                <textarea cols="54" rows="5" class="textarea_design ml-6"></textarea>
            </div>
            <div align=center>
                <p class="erorr_message mr-9">※0~100文字以内で入力してください。</p>
                <!-- 0文字または101文字以上の場合(エラーメッセージ1) -->
                <!-- <p v-if="pro_flag=='1'" class="erorr_message mr-16 pr-4">※0~100文字以内で入力してください。</p> -->
            </div>

            

            <!-- ボタンエリア -->
            <div align="center" class="mt-16">
                <!-- 変更ボタン -->
                <button onclick="location.href='mamber-registration-verification'" class="changebtn_design accent">変更
                </button>
                <br>
                
                
            </div>

        </div>

    </section>

</template> 

<!-- データ操作 -->
<script>
export default {
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

  }
};
</script>

<!-- スタイルを指定 -->
<style scoped>
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
/* テキストボックスデザイン */
.text_design {
    height: 20%;
    width: 40%;
    border-bottom: 1px solid #dcdcdc; /* 下線指定 */
}
/* セレクトボックスエリアデザイン */
.select_design {
    height: 20%;
    width: 10%;
    border-bottom: 1px solid #dcdcdc;
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

</style>