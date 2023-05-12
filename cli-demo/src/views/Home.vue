<template lang="">
    <div>
        首页
        <div>
            <p><b>路由使用</b></p>
            <router-link to="/user/dreal">用户param</router-link>
            <!-- router-link 和 a等效 -->
            &nbsp;<a href="/user/dreal?id=123123">带query参数</a>
            <button @click="gotoUser">按钮跳转</button>
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
        }
    },
    mounted() {

    }
}
</script>
<style lang="">
    
</style>