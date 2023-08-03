<template>
  <div>
    <!-- 将父组件 template #header中的内容显示在子组件中 -->
     <slot name="header"></slot>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <p>
      <slot name="footer"></slot>
    </p>
  </div>
 </template>
<script lang="ts" setup>
import { onMounted, ref, watch,getCurrentInstance  } from 'vue'
import {name} from '../util/hello.js' //引入js模块报错，需要在src中新建shims-vue.d.ts 文件

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

onMounted(()=>{
  console.log("child component");
  console.log(name);
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
