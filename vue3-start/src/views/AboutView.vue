<template>
  <div>

    <h1>响应式 <button @click="countAdd()">count1++</button></h1>
    {{ count1 }}
    <p :age="person.age"> <input type="text" v-model="person.name"> </p>
    <p>person2 <input type="text" v-model="person2.name"> {{ person2 }}</p>
    <p>obj.foo:{{ obj.foo }} foot:{{ foo }}。 obj.bar:{{ obj.bar }},bar{{ bar }}</p>
    <h2>计算属性 <button @click="computedGo()">触发</button></h2>
    <p>barRest:{{ barRest }}</p>
    <p>barRest2:{{ barRest2 }}</p>

    <h2>类和样式 <button @click="styleGo()">触发</button></h2>
    <p :class="{ active: isActive }">class="{ active: isActive }"</p>
    <p :class="{ active: isActive, error: isError }">:class="{ active: isActive, error: isError }"</p>
    <p :class="classObject">:class="classObject"</p>
    <p :class="['active', errorClass]">数组:class="['active',errorClass]"</p>
    <div :class="[isActive ? 'active' : '', errorClass]">[isActive ? 'active' : '', errorClass]</div>
    <div :class="[{ active: isActive }, errorClass]">[{ active: isActive }, errorClass]</div>
    <h2>循环</h2>
    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>

    <h2>表单输入</h2>
    message：{{ message }}
    <input type="text" v-model="message" />
    <!-- 在 "change" 事件后同步更新而不是 "input" 还可以使用number trim修饰词-->
    <input type="text" v-model.lazy="message" />
    <!-- 可以通过 true-value="yes"
  false-value="no"  修改选中和未选的值-->
    <br />
    <input type="checkbox" id="checkbox" v-model="checked" true-value="yes" false-value="no" />
    <label for="checkbox">{{ checked }}</label>
    <br />
    复选{{ checkedNames }}
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    
    <h2>侦听器</h2>
    <watch ref="watch1" title="1232" @enlarge-text="childCall">
      <template #header>
        parent header
      </template>
      <template v-slot:footer>
        parent footer
      </template>
    </watch>
    <h2>ref</h2>
    <input type="text" ref="input">
    <button @click="childCall1">访问子组件实例</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.active {
  color: #0000ff;
}

.error {
  background-color: #ff0000;
}
</style>
<!-- 通过 setup 减少export default{setup(){}}-->
<script lang='ts' setup>
import watch from './01watch.vue'
//响应式
import { ref, type Ref, reactive, computed, onMounted, toRef, toRefs } from "vue";
let count1: Ref<number> = ref(0);
let person = reactive({ name: 'jack', age: 18, arr: ['foo', 'bar'] });
const person2 = person;

function countAdd(): void {

  person2.age = 19;
  person2.name = "rose";
  person2.arr[0] = 'think';
  person.age = 20;
  foo = 2;
  bar.value = 3;
}


// toref 和toRefs使用
const state = reactive({
  foo: 1,
  bar: 2,
  obj1: {
    name: 'jack',
    age: 18
  }
})
// 双向 ref，会与源属性同步
let fooRef = toRef(state, 'foo')
// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2

const { obj1 } = toRefs(state);//将一个响应式对象转为块级普通对象，双向响应式
const obj2 = toRefs(state);//将一个响应式对象转为普通对象，双向响应式
state.bar = 3;
state.obj1.age = 12;
obj1.value.name = 'jack ref';
obj2.bar.value = 5;
obj2.obj1.value.age = 19;
console.log(state);
console.log(obj1);
console.log(obj2);

//响应式2
const obj = {
  foo: 1,
  bar: ref(2)
}
let { foo, bar } = obj
bar.value++;
foo++;//不会改变源属性
console.log(obj);


//计算属性
const barRest = computed(() => {
  return bar.value + "computed"
})
// get set 方法 调用后bar.value改变
let barRest2 = computed({
  get() {
    return bar.value + "computed2";
  },
  set(newValue) {
    bar.value = parseInt(newValue);
  }
})


function computedGo() {
  barRest2.value = '222';
}

//类和样式
let isActive = ref(false);
let isError = ref(false);
let errorClass = 'error';
const classObject = reactive({
  active: true,
  'error': false
})
const classObject2 = computed(() => ({
  active: isActive.value && !isError.value,
}))
function styleGo() {
  isActive.value = true;
  isError.value = true;
}

//循环
const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

//表单输入
const message = ref('');
const checked = ref(false);

const checkedNames = ref([])

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input: any = ref(null)
onMounted(() => {
  console.log("parent component");
  input.value.focus()
})

const watch1: Ref<any> = ref()
onMounted(() => {
  //只能访问子组件中defineExpose
  watch1?.value.call();
})

function childCall() {
  watch1.value.call();
}

function childCall1() {
  //watch1.value.instance.emit('enlarge-text');//触发事件
  watch1.value.emits('enlarge-text')//等价 触发子组件事件，正常情况该事件由子组件触发给父组件传值。 触发后调用childCall
}

//子组件调用父组件
const childToParent = (s: string) => {
  console.log(`子组件通过parent调用,${s}`);
}
</script>
