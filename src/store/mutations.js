import * as types from './mutation-types'

export default {
  [types.LOGIN](state, token) {
    window.localStorage.token = token  // localStorage.token = token
    state.token = token
  },
  [types.LOGOUT](state) {
    window.localStorage.removeItem('token')   //localStorage.removeItem('token')
    state.token = null
  },
  [types.LAST_ROUTE](state, toRoute) {
    state.lastRoute = toRoute
  },
  [types.CHANGE_LANGUAGE](state, newLang) {
    state.lang = newLang    
  }
}