import firebase from '~/plugins/firebase'
import Cookies from 'universal-cookie'

export const state = () => ({
  uid: null,
  user: null
})

export const getters = {

  uid(state) {
    if (state.user && state.user.uid) return state.user.uid
    else return null
  },

  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user && !!state.user.uid
  }
}

export const actions = {

  async login({dispatch, state}) {
    console.log('[STORE ACTIONS] - login')
    const user = await firebase.auth().currentUser
    const token = await firebase.auth().currentUser.getIdToken(true)
    console.log("[STORE ACTIONS] - token get!");
    const userInfo = {
      email: user.email,
      uid: user.uid
    }

    this.$cookies.set('access_token', token)
    await dispatch('setUSER', userInfo)
    await dispatch('saveUID', userInfo.uid)
    console.log('[STORE ACTIONS] - in login, response:', status)
    console.log(this.$cookies.get('access_token'))
  },

  async logout({commit, dispatch}) {
    console.log('[STORE ACTIONS] - logout')
    await firebase.auth().signOut()

    this.$cookies.remove('access_token');
    commit('setUSER', null)
    commit('saveUID', null)
  },

  saveUID({commit}, uid) {
    console.log('[STORE ACTIONS] - saveUID')
    commit('saveUID', uid)
  },

  setUSER({commit}, user) {
    commit('setUSER', user)

  }

}

export const mutations = {
  saveUID (state, uid) {
    console.log('[STORE MUTATIONS] - saveUID:', uid)
    state.uid = uid
  },
  setUSER (state, user) {
    console.log('[STORE MUTATIONS] - setUSER:', user)
    state.user = user
  }
}