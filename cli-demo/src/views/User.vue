<template>
    <div>
        用户
        {{ userName }}
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        userName() {
            return this.$route.params.username + (this.$route.query.id || '');
        }
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

    }

}
</script>
<style lang="">
    
</style>