<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link><br />
  </div>

  <!-- <router-view> </router-view> -->
  <!--命名视图 显示多个view-->
  <router-view name="LeftSidebar"></router-view>
  <router-view></router-view>
</template> 

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
