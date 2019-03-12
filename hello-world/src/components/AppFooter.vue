<template>
  <footer class="app-footer"  v-on:click="$emit('changeFooterTitle',footerTitle)">
    @copyrights- {{msg}}
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String
  },
  data(){
    return{ 
      footerTitle:'footer title'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-footer
{
  height: 40px;
  background-color: blue;
  text-align: center;
  position:fixed;
  bottom: 0;
  width: 99%;
  line-height: 40px;
  vertical-align: middle;
}
</style>
