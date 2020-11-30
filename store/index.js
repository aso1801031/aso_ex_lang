import {getUserFromCookie, getUserFromSession} from '@/helpers'
export const state = () =>({
  // 新規登録
  admin_flg: "",
  birth: "",
  imagepass: "",
  language_id: "",
  mailadress: "",
  name: "",
  password: "",
  profile: "",
  birth: "",
  id:"",
})
export const actions = {
  async nuxtServerInit ({ dispatch }, { req }) {
    const user = getUserFromCookie(req)
    if (user) {
      await dispatch('user/setUSER', { email: user.email, uid: user.user_id})
    }
  }
}


export const mutations = {
  
  // 新規登録
  changAdmin_flg(state, admin_flg) {
    state.admin_flg = admin_flg
  },
  changBirth(state, birth) {
    state.birth = birth
  },
  changImagepass(state, imagepass) {
    state.imagepass = imagepass
  },
  changLanguage_id(state, language_id) {
    state.language_id = language_id
  },
  changMailadress(state, mailadress) {
    state.mailadress = mailadress
  },
  changName(state, name) {
    state.name = name
  },
  changPassword(state, password) {
    state.password = password
  },
  changProfile(state, profile) {
    state.profile = profile
  },
  changId(state, id){
    state.id = id
  },
  refresh:function(state,obj){
    state.mailadress = ""
    state.password = ""
    state.name = ""
    state.birth = ""
    state.language_id = ""
    state.profile = ""
    state.imagepass = ""
    console.log("refresh通ったお"); 
  },
  byebye:function(state, obj){
    state.mailadress = ""
    state.password = ""
  },
}
