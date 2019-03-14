<template>
  <div id="app">
    <!-- <BlogAdd msg="Welcome to Your Vue.js App"/> -->
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
// import BlogAdd from './components/blog/Add.vue'
// import BlogList from './components/blog/List.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
</style>
