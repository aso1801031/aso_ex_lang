<template>
  <v-container>
    <v-row>
      <v-col cols=10></v-col>
      <v-col cols=2 class="text-left info">
        <form method="POST" id="change">
          <button class="accent btn-square-pop" type="submit" formaction="/profile/update" from="change">変更</button>
        </form>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center info">
        <img　src=""　alt="noImage"　class="mb-5">
        <h1>{{name}}</h1>
        <div id = "detail">
          <p>Language : {{ Language }}</p>
          <hr>
          <p>Birth : {{ Birth }}</p>
          <hr>
          <p>profile : </p>
          <hr>
          <p>{{ profile }}</p>
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
#detail {
    border-radius: 10px;
    background-color: white;
    padding:15px;
    width:50%;
    margin: auto;
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