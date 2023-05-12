<template lang="">
    <div>
        用户
        {{userName}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    computed:{
        userName(){
            return this.$route.params.username+(this.$route.query.id||'');
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="">
    
</style>