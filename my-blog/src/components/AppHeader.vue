<template>
    <div id="appHeader">
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
    name:'appHeader'
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
