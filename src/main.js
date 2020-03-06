import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import App from '@/App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/base.css'
//import 'assets/css/color.less'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, faKey, faGlobeAsia, faSpinner,
  faInfo, faCog, faTools, faBriefcaseMedical,
  faChartLine, faBroadcastTower, faNetworkWired, 
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Mock from '@/mock'
import { i18n } from './i18n'

Vue.config.productionTip = false

library.add(
  faUser, faKey, faGlobeAsia, faSpinner,
  faInfo, faCog, faTools, faBriefcaseMedical,
  faChartLine, faBroadcastTower, faNetworkWired,
  faSyncAlt
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (process.env.NODE_ENV == "development") {
  Mock.startMock();
}

new Vue({   
  store,
  router,
  i18n,
  render (h) { return h(App) }
}).$mount('#app')
