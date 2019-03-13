<template>
  <div id="app">
    <!-- <BlogAdd msg="Welcome to Your Vue.js App"/> -->
    <blog-list />
  </div>
</template>

<script>
// import BlogAdd from './components/blog/Add.vue'
import BlogList from './components/blog/List.vue'

export default {
  name: 'app',
  components: {
    BlogList
  }
}
</script>

<style>
</style>
