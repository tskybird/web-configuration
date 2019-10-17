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
