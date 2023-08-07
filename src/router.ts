import { createRouter, createWebHistory } from "vue-router"
import Home from './pages/Home.vue';
import Login from './pages/Login.vue'

// These can be imported from other files
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router