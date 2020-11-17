import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return {
                user:{},
                status:false,
            };
        },
        mutations:{
            onAuthStateChanged(state, user){
                state.user = user; //firebaseが返したユーザー情報
            },
            onUserStatusChanged(state, status) {
                state.status = status; //ログインしてるかどうか true or false
            }
        },
        getters:{
            user(state) {
                return state.user;
            },
            isSignedIn(state) {
                return state.status;
            }
        }
    })
}

export default createStore