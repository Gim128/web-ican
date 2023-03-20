import HomeViewVue from "@/views/HomeView.vue";
import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path : "/",
        name: "Home",
        component: HomeViewVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;