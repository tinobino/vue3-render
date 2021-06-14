import { createApp } from 'vue'
import App from './App.vue'
import Container from '@/components/Container.vue'

createApp(App)
  .component(Container.name, Container)
  .mount('#app')
