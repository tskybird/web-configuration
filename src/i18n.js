/*
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {console.log(key)
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {console.log( matched[1])
      const locale = matched[1]
      messages[locale] = locales(key)  
      console.log(messages[locale])    
    }
  })
 
  return messages
}
console.log("process.env:"+process.env.VUE_APP_I18N_LOCALE)    
export default new VueI18n({
  locale:  'en_US',
  fallbackLocale: 'en_US',
  //locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  //fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
*/

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locales/en_US.js'
import store from '@/store'
import axios from 'axios'


Vue.use(VueI18n)
export const i18n = new VueI18n ({
  locale: 'en_US', //store.state.lang,  
  fallbackLocale: 'en_US',
  messages: {
    'en_US': messages
  }
})

const loadedLanguages = ['en_US']
function setI18nLanguage (lang) {
  i18n.locale = lang  
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))   //if the same language
  }
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  return import (/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}.js`).then(
    messages => {      
      i18n.setLocaleMessage(lang, messages.default)     
      loadedLanguages.push(lang)      
      return setI18nLanguage(lang)
    }
  )
}
