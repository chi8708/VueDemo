<template>
  <div id="blogAdd">
    <div class="container">
      <h3>博客列表-vuex {{num}}-{{this.$store.getters.getChangedNum}}</h3>
      <input type="text" id="txtSearch" v-model="searchtxt" placeholder="输入关键字搜索" />
      <!-- 也可以使用blogsFilter()方法 但要记得加括号 -->
      <div class="blog-item" v-for="(item, index) in blogsFilter" :key="index">
        <h4><router-link v-color  v-bind:to="'/blog/'+item.id">{{item.title.toUpperCase()}}</router-link> </h4>
        <article>{{item.body|bodySub}}</article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogAdd",
  data() {
    return {
      searchtxt:'',
      blogs: [],
      num:this.$store.state.changableNum
    };
  },
  computed:{
      blogsFilter(){
          return this.blogs.filter(p=>{
              return p.title.indexOf(this.searchtxt)>=0;
          });
      }
  },
//   methods:{
//     blogsFilter(){
//           return this.blogs.filter(p=>{
//               return p.title.indexOf(this.searchtxt)>=0;
//           });
//       }
//   },
  directives:{
      //自定义指令 el, binding, vnode 
      color:{
          bind(el){
              el.style.color="#"+(Math.random()*1000000).toString().substring(0,6);
          }
      }
  },
  filters:{
      bodySub(value){
        return value.substring(0,200)+'...';
      }
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.blogs = response.body.slice(0,10);
      });
  }
};
</script>

<style scoped>
.container *{
    box-sizing: border-box;
}
.container{
    max-width: 800px;
    margin: 0 auto;
}

.blog-item{
    padding: 5px;
    margin: 5px;
    background-color:#eee;
    border: 1px dotted #bbb;
}

#txtSearch{
    margin: 5px;
    width: 99%;
    padding: 5px;
}
</style>
