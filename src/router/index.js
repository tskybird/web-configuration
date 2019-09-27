import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { loadLanguageAsync } from '@/i18n'

import LoginPage from '@/components/LoginPage'

import RouterContainer from '@/components/RouterContainer'
import Content from '@/components/Content'

import StatusTabs from '@/components/status/StatusTabs'
import Information from '@/components/status/Information'
import Statistics from '@/components/status/Statistics'
import WirelessNetworks from '@/components/status/WirelessNetworks'
import Network from '@/components/status/Network'

import SettingsTabs from '@/components/settings/SettingsTabs.vue'
import WirelessConfig from '@/components/settings/WirelessConfig'
import NetworkConfig from '@/components/settings/NetworkConfig'
import Traffic from '@/components/settings/Traffic'
import ServicesConfig from '@/components/settings/ServicesConfig'
import SystemConfig from '@/components/settings/SystemConfig'

import ToolsTabs from '@/components/tools/ToolsTabs'
import SiteSurvey from '@/components/tools/SiteSurvey'
import AntennaAlignment from '@/components/tools/AntennaAlignment'
import LinkTest from '@/components/tools/LinkTest'
import SpectrumAnalyzer from '@/components/tools/SpectrumAnalyzer'
import PingTrace from '@/components/tools/PingTrace'

import SupportTabs from '@/components/support/SupportTabs'
import TroubleShoot from '@/components/support/TroubleShoot'
import SystemLog from '@/components/support/SystemLog'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: {
            name: 'information'
        }
    },
    {
        path: '/',
        component: RouterContainer,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/status',
                name: 'status',
                redirect: {
                    name: 'information'
                },
                components: {
                    tabs: StatusTabs,
                    content: Content   //   { template:'<router-view></router-view>'}, will render children
                },
                children: [
                    {
                        path: 'information',
                        name: 'information',
                        component: Information
                    },
                    {
                        path: 'statistics',
                        name: 'statistics',
                        component: Statistics
                    },
                    {
                        path: 'wireless',
                        name: 'wireless',
                        component: WirelessNetworks
                    },
                    {
                        path: 'network',
                        name: 'network',
                        component: Network
                    },
                ]
            },
            {
                path: '/settings',
                name: 'settings',
                redirect: { name: 'wirelessconfig' },
                components: {
                    tabs: SettingsTabs,
                    content: Content     
                },
                children: [
                    {
                        path: 'wireless',
                        name: 'wirelessconfig',
                        component: WirelessConfig
                    },
                    {
                        path: 'network',
                        name: 'networkconfig',
                        component: NetworkConfig
                    },
                    {
                        path: 'traffic',
                        name: 'traffic',
                        component: Traffic
                    },
                    {
                        path: 'services',
                        name: 'services',
                        component: ServicesConfig
                    },
                    {
                        path: 'system',
                        name: 'system',
                        component: SystemConfig
                    }
                ]
            },
            {
                path: '/tools',
                name: 'tools',
                redirect: { name: 'survey' },
                components: {
                    tabs: ToolsTabs,
                    content: Content
                },
                children: [
                    {
                        path: 'survey',
                        name: 'survey',
                        component: SiteSurvey
                    },
                    {
                        path: 'alignment',
                        name: 'alignment',
                        component: AntennaAlignment
                    },
                    {
                        path: 'linktest',
                        name: 'linktest',
                        component: LinkTest
                    },
                    {
                        path: 'analyzer',
                        name: 'analyzer',
                        component: SpectrumAnalyzer
                    },
                    {
                        path: 'pingtrace',
                        name: 'pingtrace',
                        component: PingTrace
                    },
                ]
            },
            {
                path: '/support',
                name: 'support',
                redirect: { name: 'troubleshoot' },
                components: {
                    tabs: SupportTabs,
                    content: Content
                },
                children: [
                    {
                        path: 'troubleshoot',
                        name: 'troubleshoot',
                        component: TroubleShoot
                    },
                    {
                        path: 'syslog',
                        name: 'syslog',
                        component: SystemLog
                    }
                ]
            },
        ]
    },
    {
        path: '/login', 
        name: 'login',       
        component: LoginPage
    }
]
/*
if (window.localStorage.getItem('token')) {
    console.log('router token')
    store.commit('LOGIN', window.localStorage.getItem('token'))
}*/

const router = new VueRouter({   
    routes 
})

router.beforeEach((to, from, next) => {    
    const lang = store.state.lang      
    let requireAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requireAuth){   
      if (!store.state.token ) { 
        loadLanguageAsync(lang).then(() => {
            next( '/login')
        })       
      }else {
        loadLanguageAsync(lang).then(() => {
            next( )
        })
      }
    } else {
        loadLanguageAsync(lang).then(() => {
            next( )
        })     
    }  
})

  export default router