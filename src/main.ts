import 'vuestic-ui/css'
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuestic } from 'vuestic-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(
  createVuestic({
    config: {
      colors: {
        variables: {
          primary: '#6C63FF', // Màu nút chính
          secondary: '#00BCD4', // Màu phụ nhấn
          accent: '#B388FF', // Màu làm dịu/nhẹ
          background: '#F9FAFC', // Màu nền
          textPrimary: '#1A1A1A',
          textSecondary: '#888888',
          success: '#28a745',
          info: '#17a2b8',
          danger: '#dc3545',
          warning: '#ffc107',
        },
      },
    },
  }),
)
app.use(router)

app.mount('#app')
