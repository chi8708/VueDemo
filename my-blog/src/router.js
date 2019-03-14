import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import BlogAdd from './components/blog/Add.vue'
import BlogList from './components/blog/List.vue'
import BlogDetail from './components/blog/Detail.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",// path:["/","/home"] 报错 path.replace is not a function
        alias:"/blog/list",
        component: BlogList
    },
    {
        path: "/blog/add",
        component: BlogAdd
    },
    {
        path: "/blog/:id",
        component: BlogDetail
    }
]


var router =  new VueRouter({
    mode:'history',
    routes
})
export default router;