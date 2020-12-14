<!--表示領域-->
<template>
  <v-container>
    <v-row>
      <v-col cols=10></v-col>
      <!--変更ボタン-->
      <v-col cols=2 class="text-left info">
        <form method="POST" id="change">
          <button class="accent btn-square-pop" type="submit" formaction="/profile/update" from="change">変更</button>
        </form>
      </v-col>
    </v-row>
    <!--プロフィール表示領域-->
    <v-row>
      <v-col  class="text-center info">
        <img　src=""　alt="noImage" id="a" height="200" width="200" class="mb-5">

        <h1>{{ name }}</h1>
        <div class="main_div">
          <!-- カードの中に言語、誕生日、プロフィールをいれる -->
          <v-card 
              elevation="2"
              style="border-radius: 10px;">
            <!-- 言語 -->
            <v-row>
              <v-col md="3" offset="2">Language : </v-col>
              <v-col md="5">{{ languages }}</v-col>
            </v-row>
            <hr>
            <!-- 誕生日 -->
            <v-row>
              <v-col md="3" offset="2">Birth : </v-col>
              <v-col md="5">{{ birth }}</v-col>
            </v-row>
            <hr>
            <!-- プロフィール -->
            <v-row>
              <v-col>profile : </v-col>
            </v-row>
            <hr>
            <v-row>
              <v-col>{{ profile }}</v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
    import firebase from '~/plugins/firebase'
    export default {
        data: function(){
            return{
                name:"",
                languages:"",
                birth:"",
                profile:"",
            }
        },
        created:function () {
            var self = this
            /* ログイン中のユーザーのメールアドレスを取得する */
            firebase.auth().onAuthStateChanged(function(user) {
              
            /* 取得したメールアドレスとuserテーブルのメールアドレスの一致する情報を代入する */
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
                  /* languageの参照先 */
                  firebase.firestore().collection('languages').get()
                    .then(query =>{
                      
                    query.forEach(res => {
                      if( res.id === doc.data().language_id.id){
                        self.languages = res.data().name;
                      }
                    })
                    })
                    .catch(err => {

                  });
                  var storage = firebase.storage();
                  var storageRef = storage.ref();
                  storageRef.child(doc.data().imagepass).getDownloadURL().then(function(url) {
                    var test = url;
                    document.getElementById("a").src = test;
                  }).catch(function(error) {
                    console.log(error);
                  });
                  self.name=doc.data().name;
                  self.birth=doc.data().birth;
                  self.profile=doc.data().profile;
                  console.log(doc.id, '=>', doc.data().name);
                })
              })
              .catch(err => {
                console.log('Error getting documents', err);
              });
              
            })
        },
    }
</script>

<router>
  path: '/profile'
</router>

<style>
.main_div{
    width:60%;
    margin:auto;
}
hr{
    width:80%;
    margin-left:10%;
}
p{
    margin-top:15px;
}

.btn-square-pop {
  position: relative;
  display: inline-block;
  padding: 0.8em 4em;
  color:white;
  text-decoration: none;
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
}
.btn-square-pop:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
</style>