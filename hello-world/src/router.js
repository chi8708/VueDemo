import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Home from "./components/Home.vue";
import About from "./components/About.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",// path:["/","/home"] 报错 path.replace is not a function
        alias:"/home",
        component: Home
    },
    {
        path:"/user",
        component: ()=>import('./components/User.vue')
    },
    {
        path: "/about",
        component: About
    }
]

var router =  new VueRouter({
    mode:'history',
    routes
})
export default router;