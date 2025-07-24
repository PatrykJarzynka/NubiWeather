import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const myTheme = {
  colors: {
    accent: '#0075d1',
    background: '#F2FAFC',
    errorLight: '#f8a0a7',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme
    }
  }
})

createApp(App).use(vuetify).mount('#app')
