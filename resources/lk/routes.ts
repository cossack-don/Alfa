import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Page2 from "./components/Page2.vue";
import NotFoundPage from "./components/NotFoundPage.vue";

const routes = [
    {path:'/lk', component: Home},
    {path:'/lk/page2', component: Page2},
    { path: '/lk/:pathMatch(.*)*', component: NotFoundPage },
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
