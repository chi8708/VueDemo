<template>
  <div id="detail">
    <h2>{{blog.title}}</h2>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      blog: {}
    };
  },
  created() {
    var _this = this;
    axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then(response => {
        this.blog = response.data;
      });
  }
};
</script>

<style scoped>
#detail {
  max-width: 800px;
  margin: 0 auto;
}
article {
  background-color: #eee;
  border: 1px solid #bbbbbb;
}
</style>
