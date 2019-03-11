<template>
  <div class="users">
      <ul class="ul-user">
          <li class="li-user" v-for="user in users" v-bind:key="user.id" v-on:click="toggleAge(user,$event)">
              {{user.name}}
             <p v-show="user.isShow"> {{user.age}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'User',
  data(){
      return{
          users:[
              {id:1,name:'jack',age:18,isShow:false},
              {id:2,name:'jack2',age:18,isShow:false},
              {id:3,name:'jack',age:18,isShow:false},
              {id:4,name:'jack2',age:18,isShow:false},
              {id:5,name:'jack2',age:18,isShow:false},
              {id:6,name:'jack',age:18,isShow:false},
              {id:7,name:'jack2',age:18,isShow:false}
          ]
      }   
    //return {msg:'sss'}
  }, 
  methods: {
          toggleAge:(user,event)=>{
           user.isShow=!user.isShow;
           console.log(event);
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ul-user{
    display:flex;
    width: 90%;
    margin: 0 auto;
    list-style: none;
    flex-wrap:wrap;
    justify-content: center;
}

.li-user{
   width: 30%;
   height: 100px;
   margin: 10px;
   border: 1px solid #222;
   text-align: center;
   flex-grow:1;
}

</style>