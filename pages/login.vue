<template>
    <div class="main_div mt-16">
        <v-card 
            elevation="2"
            style="border-radius: 10px;"
            class="pr-16 pl-16"
            >
            <v-container class="signup_card pt-16">
                <!--form-->
                <v-form>
                    <!-- e-mail  -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-5">E-mail</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                            v-model="mailadress"
                            label="E-mail"
                            type="email"

                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- password -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Password</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                            v-model="password"
                            label="password"
                            type="password"
                            class="mt-5"
                            ></v-text-field>
                        </v-col>
                    </v-row>


                    <!--signup_btn-->
                    <div class="signup_btn mb-16 mt-10" align=center>
                        <v-btn 
                        class="accent"
                        elevation="3"
                        height="60"
                        width="240"
                        x-large
                        @click="login">
                            login
                        </v-btn>              
                    </div>
                    <!--return_btn-->
                    <div class="return_btn mb-10">
                        <v-btn 
                        class="accent"
                        elevation="3"
                        large
                        height="40"
                        width="120"
                        @click="signup">
                            sign up
                        </v-btn>              
                    </div>
                </v-form>
            </v-container>
        </v-card>  
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
    export default {
        layout:"default2",
        data() {
            return {
            mailadress: '',
            password: ''
            }   
        },
        methods:{
            login:function(){
                firebase.auth().signInWithEmailAndPassword(this.mailadress, this.password)
                    .then(user => {
                        console.log('成功！')
                        firebase.firestore().collection('users').get().then(snapshot => {
                        snapshot.forEach(doc => {
                        if(doc.data().mailadress === this.mailadress){
                            console.log(doc.id, " => ", doc.data());
                            this.$store.commit("changId", doc.id);
                        }
                    })
                })
                location.href = "home";　// ログイン成功時、ホーム画面に遷移する
                }).catch((error) => {
                    alert("ログイン情報がちがうお")
                });
            },
            signup:function(){
                location.href = "member-registration";
            }

        }
    }
</script>

<style>
    .main_div{
        width: 75%; 
        margin: auto;
    }
    .signup_card{
        margin-top: 30px;
        margin-bottom: 40px;
        width: 85%;
    }
    .signup_btn{
        text-align: center;
        letter-spacing: 0.5px;
    }
    .return_btn{
        text-align: center;
        letter-spacing: 0.5px;
    }
    .v-btn:not(.v-btn--round).v-size--x-large {
        min-width: 180px;
    }
    .detail_card{
        margin: 0%;
    }
    .image_tile{
        margin-left: 20px;
        border-radius: 10px;
    }
</style>
  