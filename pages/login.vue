<!-- 表示内容 -->
<template>

    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="py-10">

                    <v-row justify="center" align="center" class="mt-5">
                        <v-col cols="3">
                            <h3 class="quickSand" style="text-align:center;">E-mail</h3>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field  label="E-mail"  v-model="email" :rules="emailRules">
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center" align="center" >
                        <v-col cols="3">
                            <h3 class="quickSand" style="text-align:center;">Password</h3>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field  label="password"  v-model="password" :rules="[v => !!v || 'Password is required']" type="password">
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mt-0 error--text">
                        <v-col cols="4" align="center">
                            {{error_message}}
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mt-6">
                        <v-col cols="4" align="center">
                            <v-btn block height="70" x-large class="accent" @click="submit"><h3>ログイン</h3></v-btn>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-4">
                        <v-col cols="3" align="center">
                            <v-btn block height="60" large to="/member-registration" class="accent " nuxt><h3>新規登録</h3></v-btn>
                        </v-col>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<!-- データ操作 -->
<script>
import firebase from '~/plugins/firebase'
import { mapActions } from 'vuex'
export default {

    layout:"default2",
    data() {
        return {
        email: '',
        password: '',
        error_message:'',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
    methods : {
        ...mapActions('user', [ 'login' ]),
        submit() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
            return this.login()
        }).then(() => {
            firebase.firestore().collection('users').get().then(snapshot => {
                    snapshot.forEach(doc => {
                    if(doc.data().mailadress === this.email){
                        console.log(1,doc.id, " => ", doc.data());
                        this.$store.commit("changId", doc.id);
                        console.log(2);
                        if(doc.data().admin_flg === "false"){
                            this.$router.push("/home");
                        }else{
                            this.$router.push("/AdManagement")
                        }
                    }
                })
            })
        }).catch((error) => {
            this.error_message = error.message
            console.log(error.message)
        })
        }
    }
}
</script>

<!-- スタイルを指定 -->
<style scoped>
/* 背景を指定 */
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.vullkorn{
    font-family: 'Vollkorn', serif;
}
.quickSand{
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
}
</style>
