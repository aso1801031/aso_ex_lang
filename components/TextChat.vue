<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <v-card elevation="0">

                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="6">
                        <v-row class="mb-0 tb-0">
                            <v-textarea
                            v-model="message"
                            auto-grow
                            outlined
                            rows="2"
                            row-height="40"
                            ></v-textarea>
                        </v-row>
                        
                        <v-row class="pt-0 mt-0">
                            <v-spacer></v-spacer>
                            <v-btn class="accent" @click="pushMessage"><div>send!</div></v-btn>
                        </v-row>

                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>

                <transition-group name="message-list">
                    <div v-for="data in datas.slice().reverse()" :key="data.message">
                        <v-row>
                        <v-col cols="4" class="ma-2">
                            <v-card outlined class="info">
                                <v-card-title>{{data.message}}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    </div>
                </transition-group>

                <v-row>
                    <v-spacer></v-spacer>
                     <v-col cols="4" class="ma-2">
                        
                        <v-card outlined class="success">
                            <v-card-title>Nice to meet you too!</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                     <v-col cols="4" class="ma-2">
                        <v-card outlined class="info">
                            <v-card-title>Hello! nice to meet you!</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>

            </v-card>
        </v-col>
    </v-row>
</template>
<script>

export default {
    data: function(){
        return {
            message:"",
            datas:[
                
            ]
        }
    },
    methods:{
        pushMessage(){
            if(this.message != ""){
                this.datas.push({message:this.message})
                this.message = ""
            }
            
        }
    }
}
</script>
<style scoped>
.message-list-enter{
    opacity: 0;
}
.message-list-enter-to{
    transition: opacity .5s;
}

</style>