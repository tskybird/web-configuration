import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import App from '@/App.vue'
import device from '@/device'

//import $ from 'jquery'
import 'bootstrap'
import '@/assets/css/bootstrap.css'
import '@/assets/css/color.less'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, faKey, faGlobeAsia, faSpinner,
  faInfo, faCog, faTools, faBriefcaseMedical,
  faChartLine, faBroadcastTower, faNetworkWired, 
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import axios from 'axios'
import Mock from '@/mock'

import { i18n } from './i18n'

Vue.config.productionTip = false
//Vue.prototype.$axios = axios;   // add instance property $axios

library.add(
  faUser, faKey, faGlobeAsia, faSpinner,
  faInfo, faCog, faTools, faBriefcaseMedical,
  faChartLine, faBroadcastTower, faNetworkWired,
  faSyncAlt
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (process.env. NODE_ENV == "development") {
  Mock.startMock();
}



Vue.prototype.$device = device
new Vue({
  store,
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
