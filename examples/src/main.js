import { createApp } from 'vue'
import App from './App.vue'
import LegoComponents from '../../dist/component-test2.esm'

createApp(App).use(LegoComponents).mount('#app')
