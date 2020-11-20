<template>
    <div class="main_div">
        <v-card 
            elevation="2"
            style="border-radius: 10px;"
            class="pr-16 pl-10"
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
                    <!-- confirm Password  -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Confirm Password</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                            label="confirm Password"
                            type="password"
                            class="mt-5"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- name  -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Name</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                            v-model="name"
                            label="name"
                            class="mt-5"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- birth  -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Birth</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                            v-model="birth"
                            label="birth"
                            class="mt-5"
                            type="date"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- language -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Language</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-select
                            :items="items"
                            label="language"
                            v-model="language_id"
                            class="mt-5"
                            ></v-select>
                        </v-col>
                    </v-row>

                    <!-- Profile -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Profile</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-textarea
                            v-model="profile"
                            auto-grow
                            class="mt-5"
                            color="deep-purple"
                            label="profile"
                            rows="1"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <!-- image  -->
                    <v-row>
                        <v-col cols="12" md="4" align=center>
                            <h3 class="mt-10">Image</h3>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-file-input
                            v-model="imagepass"
                            label="File input"
                            class="mt-6"
                            ></v-file-input>
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
    export default {
        layout:"default2",
        data: () => ({
            valid: false,
            username: '',
            items: ['Japanese', 'English', 'Chinese', 'Korean','French','Spanish'],
            time: '',
            date: '',
        }),
        computed:{
            mailadress: {
                get: function(){
                return this.$store.state.mailadress
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changMailadress',this.a)
                    console.log(this.mailadress)
                }
            },
            password: {
                get: function(){
                return this.$store.state.password
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changPassword',this.a)
                    console.log(this.password)
                }
            },
            name: {
                get: function(){
                return this.$store.state.name
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changName',this.a)
                    console.log(this.name)
                }
            },
            language_id: {
                get: function(){
                return this.$store.state.language_id
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changLanguage_id',this.a)
                    console.log(this.language_id)
                }
            },
            profile: {
                get: function(){
                return this.$store.state.profile
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changProfile',this.a)
                    console.log(this.profile)
                }
            },
            birth: {
                get: function(){
                return this.$store.state.birth
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changBirth',this.a)
                    console.log(this.birth)
                }
            },
            imagepass: {
                get: function(){
                return this.$store.state.imagepass
                },
                set:function(newValue){
                    this.a = newValue
                    this.$store.commit('changImagepass',this.a)
                    console.log(this.imagepass)
                }
            },
        },
        methods:{
            signup:function(){
                // alert('入力エラーがあります')
                this.$router.push('mamber-registration-verification')
            },
            submit:function(){
                this.$router.push('login')
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
  