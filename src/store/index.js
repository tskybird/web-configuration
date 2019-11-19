import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: null, 
        lastRoute: '/',
        lang: 'en_US',     //  'zh_CN'       

        LAN0: {   //capabilities
            chartData: {
               // tx: [],
                //rx: []
            }
        } 
    },
    mutations: {        
        [types.LOGIN] (state, token) {  
            window.localStorage.token = token  // localStorage.token = token
            state.token = token            
        },        
        [types.LOGOUT] (state)  {
            window.localStorage.removeItem('token')   //localStorage.removeItem('token')
            state.token = null           
        },
        [types.LAST_ROUTE] (state,toRoute) {
            state.lastRoute = toRoute                     
        },
        [types.CHANGE_LANGUAGE] (state, newLang) {
            state.lang = newLang
        }
    }    
})

if (window.localStorage.getItem('token')) {    
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

if (window.localStorage.getItem('lang')) {  
    store.commit(types.CHANGE_LANGUAGE, window.localStorage.getItem('lang'))    
}

export default store