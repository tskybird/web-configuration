import Vue from 'vue'
import Vuex from 'vuex'
//import * as types from './mutation-types'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: null, 
        lastRoute: '/',
        lang: 'en_US' //  'zh_CN'   
    },
    mutations: {
        LOGIN: (state, token) => {
            window.localStorage.token = token  // localStorage.token = token
            state.token = token
        },        
        LOGOUT (state)  {
            window.localStorage.removeItem('token')   //localStorage.removeItem('token')
            state.token = null
        },
        lastRoute (state,toRoute) {
            state.lastRoute = toRoute            
        },
        changeLanguage (state, newLang) {
            state.lang = newLang
        }
    }    
})

if (window.localStorage.getItem('token')) {    
    store.commit('LOGIN', window.localStorage.getItem('token'))
}

if (window.localStorage.getItem('lang')) {    
    store.commit('changeLanguage', window.localStorage.getItem('lang'))    
}

export default store