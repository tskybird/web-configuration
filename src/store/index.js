import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  mainmenu: [
    {
      title: 'Status',
      icon: 'info',
      path: '/status'
    },
    {
      title: 'Settings',
      icon: 'cog',
      path: '/settings'
    },
    {
      title: 'Tools',
      icon: 'tools',
      path: '/tools'
    },
    {
      title: 'Support',
      icon: 'briefcase-medical',
      path: '/support'
    }
  ],
  token: null,
  lastRoute: '/',
  lang: 'en_US',     //  'zh_CN'     

  LAN0: {   //capabilities
    chartData: {
       // tx: [],
       //rx: []
    }
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

if (window.localStorage.getItem('lang')) {
  store.commit(types.CHANGE_LANGUAGE, window.localStorage.getItem('lang'))
}

export default store