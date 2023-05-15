import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 引入
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import User from "@/views/User.vue";
//路由嵌套
import UserProfile from "@/views/UserProfile.vue";
//命名路由
import MoreView from "@/views/MoreView.vue";
import LeftSidebar from "@/views/LeftSidebar.vue";
// const UserProfile = {
//   template: `
//     <div class="user">
//       <h2>12323232</h2>
//     </div>
//   `,
// }
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
  {
    path: "/user/:username",
    name: 'User',
    component: User,

    children: [
      {
        // 路由嵌套 当 /user/:username/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      }
    ],
  },
  {
    // 命名视图 多个组件填充到多个route-view
    path: "/moreview",
    components: {
      default:MoreView,
      LeftSidebar
    }
  },

];

// 路由器
const router = createRouter({
  history: createWebHashHistory(), // createWebHistory() HTML5模式不会触发beforeRouteUpdate等路由变化函数
  routes
});

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
 // return false
})
export default router;