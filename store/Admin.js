import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return {
                umail: "",

            };
        },
    })
}

export default createStore