<template>
    <div>
        用户
        {{ userName }}
        <RouterView></RouterView>
        changableNum:{{ changableNum }}
        &nbsp;<button id="test" @click="AddNum(1)">修改值+1</button>
        <!-- 模块化数据读取 -->
        {{this.$store.state.a.moduleAName}}
        <!-- 路由嵌套显示其他组件 -->
    </div>
</template>
<script>
import { mapState, mapMutations,mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        userName() {
            return this.$route.params.username + (this.$route.query.id || '');
        },
        // ...mapState({
        //     changableNum: state => state.changableNum
        // }),
        //等效
        ...mapState(["changableNum"])
        // num(){
        //     return this.$store.state.changableNum;
        // }


    },
    methods: {
        //同步
        // AddNum(){
        //     this.$store.commit('newNum',1);//父路由修改影响嵌套路由
        // },
        // ...mapMutations({
        //     AddNum: 'newNum' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        // })
        //异步
        // AddNum(){
        //     this.$store.dispatch('getNewNum',1);
        // },
        ...mapActions({
            AddNum:'getNewNum'
        })
        
    },
    watch: {
        $route(to, from) {
            console.log(to);
            console.log(from);
        }

    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // 对路由变化做出响应...
                console.log(toParams);
                console.log(previousParams);
            }
        )
    },
    async beforeRouteUpdate(to, from) {
        // 对路由变化做出响应...
        //this.userData = await fetchUser(to.params.id)
    },
    mounted() {
        let obj = { a: '1', b: 2 };
        let { a, b } = { ...obj };

    }

}
</script>
<style lang="">
    
</style>