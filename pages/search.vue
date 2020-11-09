<template>
    <div class="main_div">
        <p class="search_title">search lesson!</p>
        <v-container>
            <!--フォーム-->
            <v-form>
                <v-row class="row_el_top">
                    <v-col cols="12" md="5" class="element_left">
                        <!--:rules="nameRules"-->
                        <!--名前-->
                        <v-text-field
                        v-model="username"
                        label="user"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" offset="2" class="element_right">
                        <!--言語選択-->
                        <v-select
                        :items="items"
                        label="languge"
                        required></v-select>
                    </v-col>
                </v-row>
                
                <v-row class="row_el">
                    <v-col cols="12" md="5" class="element_left">
                        <!--時間-->
                        <v-text-field
                        v-model="time"
                        label="time"
                        ></v-text-field>    
                    </v-col>
                    <v-col cols="12" md="5" offset="2" class="element_right">
                        <!--日付-->
                        <v-text-field
                        v-model="date"
                        label="date"
                        ></v-text-field>    
                    </v-col>
                </v-row>
                <!--検索ボタン-->
                <div class="search_btn">
                    <v-btn 
                    class="accent"
                    elevation="3"
                    x-large
                    @click="submit">
                        Search
                    </v-btn>              
                </div>
            </v-form>
        </v-container>
        <v-card
        class="mx-auto mt-8"
        style="border-radius: 10px;"
        max-width="750"
        outlined>
        <v-list-item one-line>
            <v-list-item-avatar
                tile
                size="80"
                color="success"
                class="image_tile">
            </v-list-item-avatar>
            <v-list-item-content class="pb-0">
                <v-row>
                    <v-col cols="12"  md="6">
                        <!--タイトル-->
                        <p class="card_title">Title</p>
                    </v-col>
                    <v-col cols="12" md="5" offset="1" class="info_div">
                        <!--ユーザー情報-->
                        <v-list-item-subtitle>
                            <p class="info_ele">Language : Japanese</p>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <p class="info_ele">Date : 2020/11/07</p>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <p class="info_ele">Time : 15:30</p>
                        </v-list-item-subtitle>
                    </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>
        <hr class="under_line">
        <!--
        <v-card-actions>
          <v-btn
            outlined
            rounded
            text>
            Button
          </v-btn>
        </v-card-actions>
        -->
        <div class="under_div">
            <v-row>
                <v-col cols="12"  md="6">
                    <!--プロフィール-->
                    <p class="card_profile">Hello! I'm Japanese! nice too meet you!</p>
                </v-col>
                <v-col cols="12" md="4" offset="2">
                    <!--参加ボタン-->
                    <v-btn 
                    class="accent"
                    elevation="3"
                    x-large
                    @click="submit">
                        Join!
                    </v-btn>              
                </v-col>
            </v-row>
        </div>
      </v-card>    
    </div>
</template>

<script>
    export default {
      data: () => ({
        valid: false,
        username: '',
        items: ['Japanese', 'English', 'Chinese', 'Korean','French','Spanish'],
        time: '',
        date: '',
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
      submit () {
        this.$v.$touch()
      },
    },

    }
</script>

<style>
    .main_div{
        width: 70%;
        margin: auto;
    }
    .search_title{
        text-align: center;
        margin-bottom: 0%;
        font-size: 1.5em;
        letter-spacing: 0.5px;
    }
   /* .element_left{
    }
    .element_right{
    }
    .search_el{
    }*/
    .row_el{
        margin-top: 50px;
        height: 60px;
    }
    .row_el_top{
        margin-top: 0%;
        height: 60px;
    }
    .search_btn{
        text-align: center;
        margin-top: 70px;
        letter-spacing: 0.5px;
    }
    .v-btn:not(.v-btn--round).v-size--x-large {
        min-width: 180px;
    }
    .image_tile{
        margin-left: 20px;
        border-radius: 10px;
    }
    .card_title{
        font-size: 1.9em;
        margin-top: 50px;
        margin-left: 10px;
        padding-top: 0%;
    }
    .info_div{
        margin-top: 10px;
        padding-bottom: 0%;
    }
    .info_ele{
        padding-top: 0%;
        margin-top: 0px;
        margin-bottom: 2px;
        font-size: 1.2em;
    }
    .under_line{
        width: 90%;
        margin: 0px auto;
    }
    .under_div{
        width: 90%;
        margin: auto;
        margin-bottom: 15px;
    }
    .card_profile{
        word-wrap: normal;
    }
</style>
  