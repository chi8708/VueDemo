<template>
  <div id="app">
    <BlogAdd msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import BlogAdd from './components/blog/Add.vue'

export default {
  name: 'app',
  components: {
    BlogAdd
  }
}
</script>

<style>
</style>
