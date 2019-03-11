<template>

  <div class="app-header" @click="$emit('changeTitle')">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  },
  data(){
    return {msg2:'sss'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header
{
  height: 80px;
  background-color: aquamarine;
  text-align: center;
  vertical-align: middle;
}
</style>
