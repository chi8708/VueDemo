import { createRouter, createWebHistory } from "vue-router";

// 引入
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

// 路由信息
let routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/about",
    name: 'about',
    component: About,
  },
];

// 路由器
const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes,
});

export default router;