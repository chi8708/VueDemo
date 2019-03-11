<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!--父组件向子组件传值prop 属性注入-->
  <!--子组件向父组件传值$emit 事件注册-->
    <app-header v-bind:msg="title" v-on:changeTitle='changeTitle' />
     <p>{{mainTitle}}</p>
    <user />
    <app-footer v-bind:msg="title" v-on:changeFooterTitle='changeMainTitle($event,arguments)' />

  </div>
</template>

<script>
 import AppHeader from './components/AppHeader.vue'
 import AppFooter from './components/AppFooter.vue'
 import User from './components/User.vue'
 export default {
  name: 'app',
  data(){
    return { title:'hello Vue',mainTitle:'user'}
  },
  components: {
    AppHeader: AppHeader,
    AppFooter,
    User
  },
  methods:{
    changeTitle:function(){
      this.title='hello vue2';
    },
    changeMainTitle:function(event,arg){
       
       this.mainTitle=`event:${event} arg0:${arg[0]}`;
    }
  }
}
</script>

<style>
</style>
