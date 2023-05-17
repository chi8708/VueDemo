<template>
    <div>
        首页
        <div>
            <p><b>路由使用</b></p>
            <router-link to="/user/dreal">用户param</router-link>
            <!-- router-link 和 a等效  a会刷新网页-->
            &nbsp;<a href="/user/dreal?id=123123">带query参数</a> 
            &nbsp;<button @click="gotoUser">按钮跳转</button>
            &nbsp;<router-link to="/user/dreal">路由嵌套</router-link>
            &nbsp;<router-link to="moreview">命名视图</router-link>
        </div>
        <div>
            <p><b>vuex使用</b></p>
            changableNum:{{this.$store.state.changableNum}}
            &nbsp;<button @click="AddNum">修改值+2</button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {
        gotoUser() {
            this.$router.push('/user/jack');
        },
        AddNum(){
            this.$store.commit('newNum',2);
        }
    },
    mounted() {

    }
}
</script>
<style lang="">
    
</style>