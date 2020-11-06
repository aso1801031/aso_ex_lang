<template>
  <v-main >
    <v-container fluid my-0 py-0 class="" >
      <v-row>
          <!-- 背景画像 -->
          <v-img src="image/people.jpg" :height="imgHeight" class="background" :min-height="sheetHeightAll">
            <!-- 画像全体のグラデーション  -->
            <v-sheet color=rgb(255,255,255,0.0) :height="sheetHeightAll" width="100%" class="background">
              <!-- 　アプリ名（左上に表示） -->
              <div class="quickSand info--text pl-3" style="font-size:25px;">Aso Language App</div>
              <v-sheet color=rgb(255,255,255,0.0) :height="500" width="100%">


                <v-row class="pl-5 pt-10 " >

                  <!-- キャッチフレーズ表示域 -->
                  <v-col cols="5" sm="4" md="4" lg="4" xl="4" class="pl-5">

                    <!-- キャッチフレーズ -->
                    <v-row justify="start">
                      <div class="  my-n3 info--text quickSand" v-bind:style="{fontSize: fontSize_quicksand + 'px' }">Learn</div>
                    </v-row>
                    
                    <v-row justify="end" >
                      <div class="  mt-n2 info--text vullkorn" v-bind:style="{fontSize: fontSize_vullkorn + 'px' }">Language</div>
                    </v-row>

                    <v-row justify="start">
                      <div class="  my-n3 info--text quickSand" v-bind:style="{fontSize: fontSize_quicksand + 'px' }">Become</div>
                    </v-row>
                      
                    <v-row justify="end">
                      <div class="  mt-n2 info--text vullkorn" v-bind:style="{fontSize: fontSize_vullkorn + 'px' }">Global</div>
                    </v-row>
                    <!-- キャッチフレーズ_end -->

                  </v-col >
                  <!-- キャッチフレーズ表示域_end -->
                </v-row >

                <v-row class="mt-n5">

                  <v-col cols="7" sm="8" md="8" lg="8" xl="8" class="pl-5"></v-col>
                  <!-- ログインボタン -->
                  <v-col cols="4" sm="3" md="3" lg="3" xl="3"  class="ml-5 ">
                    <v-row>
                      <v-btn to="/member-registration" nuxt elevation="5" rounded  block large color="info" height="45">
                        <div class="primary--text">sign up</div>
                      </v-btn>
                    </v-row>
                    
                    <v-row class="mt-5">
                      <v-btn to="/login" nuxt elevation="5" rounded   block large color="accent">
                      <div class="info--text">login</div>
                      </v-btn>
                    </v-row>

                  </v-col>
                  <!-- ログインボタン_end -->
                </v-row>

              <!-- 画面下の帯 -->
              </v-sheet>
              <v-row>
                <v-sheet  color=rgb(255,255,255,0.5) :height="sheetHeightBottom" width="100%">
                  <v-row>
                    <v-col cols="8" class="pl-5 ml-5">
                      <div class="primary--text">{{welcome_text}}</div>
                    </v-col>
                  </v-row>
                </v-sheet>
                <!-- 画面下の帯_end -->
                
              </v-row>

            </v-sheet>
            <!-- 画像全体のグラデーション_end  -->

          </v-img>
      </v-row>
      <!-- <v-row >
        <v-sheet color=rgb(200,200,80,0.5) :height="sheetHeight" width="100%"  >
        </v-sheet>
      </v-row> -->
    </v-container>
  </v-main>
</template>

<script>

export default {
  layout:"none",
  data: function () {
    return {
      min_height: 700,
      welcome_text:"Aso Language App(ALA)はASOの学校に所属する全生徒に向けた言語学習アプリです。"
    }
  },
  
  computed: {
      imgHeight () {

        return this.$vuetify.breakpoint.height

      },
      sheetHeightAll () {
        if(this.$vuetify.breakpoint.height > this.min_height){
          return this.$vuetify.breakpoint.height
        }else{
        return this.min_height
        }
        
      },
      sheetHeightTop () {
        return this.$vuetify.breakpoint.height * 0.7
      },
      sheetHeightBottom () {
        return 800
      },
      colSize(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 6
          case 'sm': return 6
          case 'md': return 5
          case 'lg': return 4
          case 'xl': return 4
        }
      },
      fontSize_vullkorn(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 40
          case 'sm': return 47
          case 'md': return 70
          case 'lg': return 80
          case 'xl': return 80
        }
      },
      fontSize_quicksand(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 35
          case 'sm': return 40
          case 'md': return 50
          case 'lg': return 70
          case 'xl': return 70
        }
      },
      size(){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "xs"
          case 'sm': return "sm"
          case 'md': return "md"
          case 'lg': return "lg"
          case 'xl': return "xl"
        }
      }
  }
}
</script>
<style scoped> 
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  .background{
  background: radial-gradient(rgba(210, 195, 175, 0.2), rgba(17, 35, 55, 0.7));
      
  }
  .vullkorn{
    font-family: 'Vollkorn', serif;
  }
  .quickSand{
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  }
</style>