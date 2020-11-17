
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
  })
  
  
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
    changBirth(state, birth) {
      state.birth = birth
    },
  }
  