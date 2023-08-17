import { createRouter, createWebHistory } from "vue-router"
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import About from "./pages/About.vue";
import ContactUs from "./pages/ContactUs.vue";
// These can be imported from other files

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/contact-us', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router