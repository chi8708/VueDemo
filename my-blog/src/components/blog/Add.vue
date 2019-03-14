<template>
  <div id="blogAdd">
   <div class="container">
   
    <form action id="addForm" v-if="!isSubmited">
      <h3>添加博客</h3>
      <div class="f-row">
        <Label>标题</Label>
        <input type="text" v-model="blog.title" required>
      </div>
      <div class="f-row">
        <Label>内容</Label>
        <textarea cols="30" v-model="blog.body" rows="10"></textarea>
      </div>
      <div class="f-row">
        <Label>分类</Label>
        <input type="checkbox" id="ck1" value=".net" v-model="blog.category">.net
        <input type="checkbox" id="ck2" value=".java" v-model="blog.category">java
        <input type="checkbox" id="ck3" value=".node.js" v-model="blog.category">node.js
        <input type="checkbox" id="ck4" value="vue.js" v-model="blog.category">vue.js
        <input type="checkbox" id="ck5" value="react" v-model="blog.category">react
      </div>
      <div class="f-row">
        <Label>作者</Label>
        <select v-model="blog.author">
          <option v-for="(item) in authors" v-bind:value="item.name" :key="item.id">{{item.name}}</option>
        </select>
      </div>
      <div>
        <button id="btnSave" type="button" @click="save">提交</button>
      </div>
    </form>
    
    <div v-if="isSubmited">
      <h2>保存成功!</h2> 
    </div>
    <hr>

    <div class="preview">
      <h3>博客预览</h3>
      <Label>标题</Label>
      <div>{{blog.title}}</div>
      <Label>内容</Label>
      <div>{{blog.body}}</div>
      <Label>分类</Label>
      <div>{{categoryShow}}</div>
      <Label>作者</Label>
      <div>{{blog.author}}</div>
    </div>
   </div>
  
  </div>
</template>

<script>
export default {
  name: "blogAdd",
  data() {
    return {
      authors: [
        { id: 1, name: "jack" },
        { id: 2, name: "rose" },
        { id: 3, name: "cts" }
      ],
      blog: {
        category: [] //不添加此属性category为bool
      },
      isSubmited:false
    };
  },
  computed: {
    categoryShow() {
      if (this.blog.category.length <= 0) {
        return "";
      }
      return this.blog.category;
    }
  },
  methods: {
    save() {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", this.blog)
        .then((response) => {
         // console.log(response);
          this.isSubmited=true;
        });
    }
  }
};
</script>

<style scoped>
.container *{
  box-sizing: border-box;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}

#addForm{
  /* padding: 10px;
  border: 1px solid #555; */
}

input[type="text"],
label,
select,
textarea
 {
  margin-top:10px;
  width: 100%;
  padding: 5px;
}
input[type="checkbox"]{
  display: inline-block;
}
textarea{
 width: 100%;
 height: 100px;
}

#btnSave{
  margin-top:10px;
  padding: 3px;
  font-size: 18px;
  background-color:#ff0000;
  color: white;
  width:80px;
  border-radius: 8px;
}

.preview{
  border:1px dotted #bbb;
}
</style>
