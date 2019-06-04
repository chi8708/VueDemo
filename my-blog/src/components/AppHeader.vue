<template>
    <div id="appHeader">
        <span>{{this.$store.state.showFooter}}-{{this.$store.getters.getChangedNum}}</span>
        <button @click="changNum()">修改num</button>
         <button @click="changNum2()">异步修改num</button>
        <nav>
            <ul>
                <li>
                    <router-link to="/" exact>博客总览</router-link>
                </li>
                <li>
                   <router-link to="/blog/add" exact>写博客</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name:'appHeader',
    methods: {
        changNum:function(){
            this.$store.commit('newNum',6)
        },
        changNum2:function(){
            this.$store.dispatch('getNewNum',5)
        }
    },
}
</script>
<style scoped>
#appHeader{
  height: 80px;
  background-color: #ff0000;
}
nav{
  padding: 5px;
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
}
ul{
 list-style: none;
 padding: 0;
}
li
{
    display: inline-block;
}
a{
     padding: 5px;
     text-decoration: none;
}
.router-link-active
{
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8)
}
</style>
