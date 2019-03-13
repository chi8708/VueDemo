<template>
  <div id="blogAdd">
      <form action="">
          <h2>添加博客</h2>
          <div class="f-row">
            <Label>标题</Label>
            <input type="text" name="" id="" required/>
          </div>
          <div class="f-row">
            <Label>内容</Label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
         <div class="f-row">
            <Label>分类</Label>
            <input type="checkbox" />
          </div>
          <div class="f-row">
            <Label>作者</Label>
            <select name="" id="">
                <option value=""></option>
            </select>
          </div>
          <div>
              <button>提交</button>
          </div>
      </form>
      <hr>
      <div class="preview">
          <h3>博客预览</h3>
          <Label>标题</Label>
          <div></div>
          <Label>内容</Label>
          <div></div>
          <Label>分类</Label>
          <div></div>
           <Label>作者</Label>
          <div></div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'blogAdd',
  data(){
      return{
          blog:{}
      }
  }
}
</script>

<style scoped>
</style>
