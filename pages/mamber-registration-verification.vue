<template>
    <div class="main_div">
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
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-5">E-mail</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-6">{{ this.$store.state.mailadress }}</p>
                        </v-col>
                    </v-row>
                    <!-- password -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Password</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.password }}</p>
                        </v-col>
                    </v-row>
                    <!-- confirm Password  -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Confirm Password</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.password }}</p>
                        </v-col>
                    </v-row>
                    <!-- name  -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Name</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.name }}</p>
                        </v-col>
                    </v-row>
                    <!-- birth  -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Birth</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.birth }}</p>
                        </v-col>
                    </v-row>
                    <!-- language -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Language</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.language_id }}</p>
                        </v-col>
                    </v-row>

                    <!-- Profile -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Profile</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.profile }}</p>
                        </v-col>
                    </v-row>
                    <!-- image  -->
                    <v-row>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Image</h3>
                        </v-col>
                        <v-col cols="12" md="1"></v-col>
                        <v-col cols="12" md="6" align=center>
                            <p class="mt-10">{{ this.$store.state.imagepass }}</p>
                        </v-col>
                    </v-row>


                    <!--signup_btn-->
                    <div class="signup_btn mb-16 mt-10">
                        <v-btn 
                        class="accent"
                        elevation="3"
                        height="80"
                        width="300"
                        x-large
                        @click="signup">
                            sign up
                        </v-btn>              
                    </div>
                    <!--return_btn-->
                    <div class="return_btn mb-10">
                        <v-btn 
                        class="accent"
                        elevation="3"
                        x-large
                        @click="submit">
                            return
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
        
        data: () => ({
            valid: false,
            // mailadress: this.$store.state.mailadress,
            items: ['Japanese', 'English', 'Chinese', 'Korean','French','Spanish'],
            time: '',
            date: '',
        }),

        methods:{
            signup:function(){
                const db = firebase.firestore()
                let dbUsers = db.collection('users')
                dbUsers
                .add({
                    admin_flg: "false",
                    birth: this.$store.state.birth,
                    imagepass: "1",
                    language_id: this.$store.state.language_id,
                    mailadress: this.$store.state.mailadress,
                    name: this.$store.state.name,
                    password: this.$store.state.password,
                    profile: this.$store.state.profile,
                })
                // firebase authに情報を追加(メールアドレス,パスワード)
                firebase.auth().createUserWithEmailAndPassword(this.$store.state.mailadress,this.$store.state.password)
                .then(ok => { 
                    console.log("Register OK", ok); 
                    location.href = "login";
                }, 
                error => { 
                    console.log("Register error", error); 
                });
                

            },
            submit:function(){
                this.$router.push('member-registration')
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
    h3, p{
        white-space: nowrap;
    }
</style>
  