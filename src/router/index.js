import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { loadLanguageAsync } from '@/i18n'

import LoginPage from 'views/login/LoginPage'

import RouterContainer from 'views/RouterContainer'
import Content from 'views/Content'

import StatusTabs from 'views/status/StatusTabs'
import Information from 'views/status/Information'
import Statistics from 'views/status/Statistics'
import WirelessNetworks from 'views/status/WirelessNetworks'
import Network from 'views/status/Network'

import SettingsTabs from 'views/settings/SettingsTabs.vue'
import WirelessConfig from 'views/settings/WirelessConfig'
import NetworkConfig from 'views/settings/NetworkConfig'
import Traffic from 'views/settings/Traffic'
import ServicesConfig from 'views/settings/ServicesConfig'
import SystemConfig from 'views/settings/SystemConfig'

import ToolsTabs from 'views/tools/ToolsTabs'
import SiteSurvey from 'views/tools/SiteSurvey'
import AntennaAlignment from 'views/tools/AntennaAlignment'
import LinkTest from 'views/tools/LinkTest'
import SpectrumAnalyzer from 'views/tools/SpectrumAnalyzer'
import PingTrace from 'views/tools/PingTrace'

import SupportTabs from 'views/support/SupportTabs'
import TroubleShoot from 'views/support/TroubleShoot'
import SystemLog from 'views/support/SystemLog'

Vue.use(VueRouter)

// fix vue-router 3.1.X bug
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

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
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    const lang = store.state.lang
    let requireAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requireAuth) {
        if (!store.state.token) {
            loadLanguageAsync(lang).then(() => {
                next('/login')
            })
        } else {
            loadLanguageAsync(lang).then(() => {
                next()
            })
        }
    } else {
        loadLanguageAsync(lang).then(() => {
            next()
        })
    }
})

export default router