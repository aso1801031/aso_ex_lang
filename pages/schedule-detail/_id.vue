<template>
    <v-card
        class="mx-auto mt-8"
        style="border-radius: 10px;"
        elevation="2"
        max-width="800"
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
            <div>
                <p class="card_profile">Hello! I'm Japanese! nice too meet you!</p>
            </div>
                <div class="under_btn">
                    <v-btn 
                    class="accent"
                    elevation="3"
                    x-large
                    ><!--@click="submit"-->
                    lesson Start!
                </v-btn>              
            </div>
        </div>
    </v-card>    
</template>

<style>
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
        font-size: 1.3em;
        margin-top: 20px;
        word-wrap: normal;
        width: 500px;
    }
    .under_btn{
        margin-top: 70px;
        margin-bottom: 30px;
        text-align: right;
    }
</style>
  