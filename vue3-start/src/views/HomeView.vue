<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/01state'

const counter = useCounterStore();
const counterRef = storeToRefs(counter)


const state1 = useStore();
</script>

<template>
  <main>
    hello Vue
    <!-- <TheWelcome /> -->
    <h3><b>counter:</b> {{ counter }}</h3>
    <h3><b>counterRef:</b> {{ counterRef }}</h3>
    <h3><b>state1.counter:</b> {{ state1.counter }}</h3>

  </main>
</template>
<style  scoped>
b {
  font-weight: bolder;
}
</style>
