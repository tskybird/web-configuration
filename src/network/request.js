import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { LOGOUT } from '@/store/mutation-types'

const instance = axios.create({
  baseURL: '/cgi-bin/main.cgi',
  timeout: 5000
})

// request interceptor
instance.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response interceptor
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(LOGOUT)   
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
          router.replace({
            path: 'login',
            //query: { redirect: router.currentRoute.path },
          })
        break
      }
    }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default instance
