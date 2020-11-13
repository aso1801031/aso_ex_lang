
export const state = () =>({
  title: '',
  date: '',
  time: '',
  language: '',
  detail: '',
  daterules: '',
  timerules: '',
})


export const mutations = {
  insert:function(state,obj){
    state.title = obj.title
    state.date = obj.date
    state.time = obj.time
    state.language = obj.language
    state.detail = obj.detail
  },
  title:function(state,title){
    state.title = title
  },
  time:function(state,time){
    state.time = time
  },
  date:function(state,date){
    state.date = date
  },
  language:function(state,language){
    state.language = language
  },
  detail:function(state,detail){
    state.detail = detail
  },
  daterules:function(state,daterules){
    state.daterules = daterules
  },
  timerules:function(state,timerules){
    state.timerules = timerules
  },
  refresh:function(state,obj){
    state.title = null
    state.date = null
    state.time = null
    state.language = null
    state.detail = ''
  }
}
