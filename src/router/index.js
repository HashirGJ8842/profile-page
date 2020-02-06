import Vue from 'vue'
import VueRouter from 'vue-router'
import Ayaan from '../components/Ayaan.vue'
import Hashir from '../components/Hashir.vue'
import Zuk from '../components/Zuk.vue'
import App from '@/App.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/hashir',
    name: 'hashir',
    component: Hashir
  },
  {
    path: '/ayaan',
    name: 'ayaan',
    component: Ayaan
  },
  {
    path: '/zulkifl',
    name: 'zulkifl',
    component: Zuk
  },
]

const router = new VueRouter({
  routes
})

export default router
