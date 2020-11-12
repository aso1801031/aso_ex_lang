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
      <v-col class="text-center info">
        <img　src=""　alt="noImage"　class="mb-5">
        <h1>{{name}}</h1>
        <div class="main_div">
          <v-card 
              elevation="2"
              style="border-radius: 10px;">
            <v-row>
              <v-col md="3" offset="2">Language : </v-col>
              <v-col md="5">{{ Language }}</v-col>
            </v-row>
            <hr>
            <v-row>
              <v-col md="3" offset="2">Birth : </v-col>
              <v-col md="5">{{ Birth }}</v-col>
            </v-row>
            <hr>
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
    export default {
        data: function(){
            return{
                name:"Ezaki Hiroshi",
                Language:"japanese",
                Birth:"1999/05/10",
                profile:"Hello!"
            };
        },
    };
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