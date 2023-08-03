<template>
    <div>
        <div>
            <h2>Hello pinia</h2>
            <h3>counter定义的store</h3>
            {{ counter }}
            <button @click="onCount">count++</button>
            <h3>01state定义的store</h3>
            {{ state1 }}
        </div>
        <div>
            <h2>HomeView</h2>
            <HomeView></HomeView>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useStore } from '@/stores/01state'
// import HomeView from './HomeView.vue'
import { defineAsyncComponent } from 'vue';

const HomeView = defineAsyncComponent(() => import('./HomeView.vue'));

const counter = useCounterStore();
counter.count++
const state1 = useStore();

const onCount = () => {
    // 带自动补全 
    counter.$patch({ count: counter.count + 1 })
    // 或使用 action 代替
    counter.increment();
    state1.counter++;
}

</script>

<style scoped></style>