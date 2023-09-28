import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import store from '@/store'
import en from './locales/en'
import ae from './locales/ae'

import App from './App.vue'
import router from './router'
const i18n = createI18n({
  locale: 'ae',
  globalInjection: true,
  messages: {
    en: en,
    ae: ae
  }
})

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)

app.mount('#app')
