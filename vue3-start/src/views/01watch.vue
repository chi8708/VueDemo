<template>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </template>
<script lang="ts" setup>
import { onMounted, ref, watch,getCurrentInstance  } from 'vue'

let question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

const instance=getCurrentInstance();

// 定义属性和事件
const props=defineProps(['title'])
const emits=defineEmits(['enlarge-text']);

// 像 defineExpose 这样的编译器宏不需要导入 暴露方法事件等。父组件ref访问
 defineExpose({
  a:'1212',
  b:1,
  instance:ref(instance),
  emits:emits,
  call:()=>{
    console.log('父组件通过ref调用');
    //console.log(instance?.props["title"]);
    console.log(props.title);
    console.log(question);
  }
})


</script>
