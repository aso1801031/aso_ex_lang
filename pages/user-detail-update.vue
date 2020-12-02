
<!-- 表示内容 -->
<template>
    <div class="main_div">
        <!-- 背景エリア -->
        <v-card 
            elevation="2"
            style="border-radius: 10px;">
            <v-container class="profile_card">
            <ValidationObserver v-slot="{ invalid }">
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
                
                <!-- birthエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Birth</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <ValidationProvider name="birth" rules="required|max:50" v-slot="{ errors }">
                        <v-text-field
                            v-model="birth"
                            label="birth"
                            type="date"
                            :error-messages="errors"
                            ></v-text-field>
                        </ValidationProvider>
                    </v-col>
                </v-row>


                <!-- Nameエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Name</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <ValidationProvider name="name" rules="required|max:50" v-slot="{ errors }">
                        <!--名前入力フィールド-->
                            <v-text-field
                            v-model="name"
                            label="name"
                            :error-messages="errors"
                            ></v-text-field>  
                            </ValidationProvider>
                    </v-col>
                </v-row>

                <!-- Languageエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Language</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <ValidationProvider rules="required" name="Language" v-slot="{ errors }">
                        <v-select 
                        v-model="language"
                        :items="languageList"
                        label="language"
                        :error-messages="errors"
                        clearable
                        />
                        </ValidationProvider>
                    </v-col>
                </v-row>

                <!-- Profileエリア -->
                <v-row class="nobr mt-16">
                    <v-col cols="12" md="3">
                        <h3 class="text_size mr-6" align=center>Profile</h3>
                    </v-col>
                    <v-col cols="12" md="8" offset="1">
                        <ValidationProvider name="profile" rules="required|max:50" v-slot="{ errors }">
                        <v-text-field 
                        v-model="text" 
                        auto-grow
                        label="profile" 
                        :error-messages="errors"/>
                        </ValidationProvider>
                    </v-col>
                </v-row>

                <!-- ボタンエリア -->
                <div align="center" class="mt-16">
                    <!-- 変更ボタン -->
                    <v-btn 
                    :disabled= "invalid || !isFormCompleted"
                    @click="change" 
                    class="changebtn_design accent">
                    変更
                    </v-btn>
                    <br>
                    
                    
                </div>
            </v-form>
            </ValidationObserver>
            </v-container>
        </v-card>
    </div>
</template> 

<script>
    import firebase from '~/plugins/firebase'
    import { extend } from 'vee-validate';
    import * as rules from 'vee-validate/dist/rules';
    var db = firebase.firestore();

     Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
    });

    // with typescript
    for (let [rule, validation] of Object.entries(rules)) {
    extend(rule, {
        ...validation
    });
    }


    export default {
      data: () => ({
        uploadedImage: '',
        img_name: '',
        valid: false,

        time: '',
        date: '',
        name: '',
        text: '',
        birth: '',
        id:'ai',
        displayButtons: true,
        languageList:[],
        language:'',
        
        }),
     computed:{
        // 入力欄未入力時
            isFormCompleted: function() {
                if (
                    !this.name ||
                    !this.text ||
                    !this.birth ||
                    !this.language
                ) {
                    return false
                }
                return true
            },
            
     },
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
        change(){
            this.displayButtons = false;
            var self = this;
            console.log(self.languageList);
            /* ログイン中のユーザーのメールアドレスを取得する */
            /* 取得したメールアドレスとuserテーブルのメールアドレスの一致する情報を代入する */
            db.collection("languages").where('name' , "==" , this.language).get().then((query) => {
            query.forEach(element => {
                this.lang = element.id
                console.log(element.data())
                console.log(element.id)
                var langref = db.collection("languages").doc(this.lang)
                let citiesRef = firebase.firestore().collection('users').doc(self.id);
                console.log(langref)
                citiesRef.update({
                    /* 一致した場合 */
                    birth: self.birth,
                    name: self.name,
                    profile:self.text,
                    language_id:langref,
                });
            this.$router.push('/profile')
                });
            }).catch((error) => {
                console.log(error)
            });

            
        }
     },
     
     created:function () {
            var self = this
            /* ログイン中のユーザーのメールアドレスを取得する */
            /* 取得したメールアドレスとuserテーブルのメールアドレスの一致する情報を代入する */
            firebase.auth().onAuthStateChanged(function(user) {
            let citiesRef = firebase.firestore().collection('users');
            let query = citiesRef.where('mailadress', '==', user.email).get()
              .then(snapshot => {
                if (snapshot.empty) {
                  /* 一致する物がなかった場合 */
                  console.log('No matching documents.');
                  return;
                }
                /* 一致した場合 */
                snapshot.forEach(doc => {
                  self.id=doc.id;
                  self.name=doc.data().name;
                  
                  var b = doc.data().birth;
                  b = b.replace("/","-");
                  b = b.replace("/","-");
                  console.log(b);
                  self.birth=b;
                  self.text=doc.data().profile;
                  self.language = doc.data().language_id.path;
                  console.log(self.language);
                  var a = self.language.split('/');
                  db.collection('languages').doc(a[1]).get().
                  then((query)=> {
                      console.log(query.data().name);
                      self.language = query.data().name;
                  })
                  console.log(doc.id, '=>', doc.data().name);
                })
              })
              .catch(err => {
                console.log('Error getting documents', err);
              });
            })

            /* languageの処理 */
            db.collection('languages').get().then((query) => {
            query.forEach(element => {
                var data = element.data()
                console.log(data.name)
                this.languageList.push(data.name)
                console.log(this.languageList)
                console.log(element.id)
            });
            }).catch((error=>{
            console.log(error)
            }));
            
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