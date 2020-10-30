<template>
  <v-row>
    <v-col class="text-center info">
      <img
        src=""
        alt="noImage"
        class="mb-5"
      >
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
}
hr{
    width:80%;
    margin-left:10%;
}
p{
    margin-top:15px;
}
</style>