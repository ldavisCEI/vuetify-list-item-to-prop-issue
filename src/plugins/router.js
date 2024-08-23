import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "@/components/HomeView.vue";
import HelloWorld from '@/components/HelloWorld.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/helloWorld", component: HelloWorld }
  ],
})

export default router;