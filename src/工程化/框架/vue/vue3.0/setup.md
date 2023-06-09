---
title: setup
icon: page
date: 2023-04-26
category:
  - 前端
tag:
  - 前端
  - Vue3
  - 框架系列
sticky: true
star: true
---

setup 基本使用

<!-- more -->

### 1. 基本使用

**setup语法糖：`<script setup> </script>`**

- `Composition API`（组合`API`）的入口
- 在 `setup` 函数中定义的变量和方法最后都要 `return` 出去，不然无法再模板中使用
- 在`beforeCreate`钩子之前被调用
- `this`不可用，打印为 `undefined`
- 接收`props`作为第一个参数，`watchEffect/watch`观察和相应`props`的更新`context` 提供一个上下文对象

### 2. 组件

组件直接引入即可使用，无需注册

```vue
<template>
	<Foo />
</template>
<script setup>
  import Foo from './components/Foo.vue'
</script>
```

### 3. 属性和方法

属性和方法无需挂载到对象上后再次返回

```vue
<template>
	<h2 @click='increment'>{{ count }}</h2>
</template>
<script setup>
    import {ref} from 'vue'
    
    const count = ref(0)
    const increment = () => count.value++
</script>
```

### 4. defineProps

`	defineProps` ：用来接收父组件传来的 `props`，

有两种使用方法：运行时声明和类型声明

```vue
<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        list: Array,
        name: {
            type: String
            required: true,
        	default: 'tom'
        }
    })
</script>

<script setup lang="ts">
    import { ref,defineProps } from 'vue'
    type Props = {
        msg：string;
        age?: number; //可选  
        // 如果想设置可选参数的默认值，使用 withDefaults
    }
    //defineProps返回的是一个对象，所以尖括号里面的类型要用{}包括
    defineProps<Props>();
</script>	
```

#### 4.1 运行时声明

`defineProps` 运行时声明，仅支持运行时校验

```vue
<script lang='ts' setup>
  const props = defineProps({
    foo: String,
    bar: {
      type: Number,
      required: true
    }
  })
 </script>
```

#### 4.2 类型声明

`defineProps` 类型声明，基于 `ts` 的类型检查，对 `props` 进行类型约束，因此需要 `<script setup lang='ts'>` 写法

```vue
<script setup lang='ts'>
  interface List{
    id: number
    content: string
  }
  const props = defineProps<{
    foo?: string
    list: List // 接口
    // list: {id: number, content: string}  也可以写成行内的
  }>()
</script>
```

#### 4.3 默认值

`withDefaults` 提供默认值

```vue
<script setup lang='ts'>
	const props = withDefaults(defineProps<{
    title?: string,
    list?: List.Basic[]
  }>(),{
    title: 'tom',
    list: () => [{id: 1, content: '1', isDone: false}]
  })
</script>
```



### 	5. defineEmits

`defineEmits`：子组件向父组件事件传递/传值

由于`emit`并非提供给模板直接来读取，所以需要通过字面量来定义`emits`

```vue
//子组件 Son
<template>
	<p>子组件</p>
	<h2 @click='onClick'>点击给父组件传值</h2>
</template>
<script setup>
    import { defineEmits } from 'vue'
    // 获取emit
    // 用defineEmits() 来定义子组件要抛出的方法，语法defineEmits(['要抛出的方法'])
    const emit = defineEmits(['onChange'])
    
    // TS写法
    const emit = defineEmits<{
        (e: 'sussess', name: string): void
    }>()
    
    //调用emit
    const onClick = ()=>{
       emit('onChange','Tom') 
    }
</script>

//父组件
<template>
	<p>父组件</p>
	<Son @onChange="getData"/>
</template>
<scrtpt setup>
    import Son from './Son.vue'
    const getData = (val)=>{
    	console.log('接受的子组件的值', val)
    }
</scrtpt>
```



```vue
<template>
	<h2 @click='onClick'>{{msg}}</h2>
</template>
<script>
    // vue2 写法
    export default {
        props:{
            msg:{
                type: String,
                default: ""
            }
        }
        methods:{
        	onClick(){
                this.$emit('onClick')
			}
    	}
    }
</script>
```

### 	6. withDefaults

在使用`TS`类型系统时，可以指定`props`的默认值。

`withDefaults( props, defaultValues )`

```vue
// 方法一
<script setup lang="ts">
  import { defineProps } from 'vue'
  withDefaults(defineProps<{
    size?: number
    labels?: string[]
  }>(),{
    size: 1,
    labels: () => ['default label']
  });
</script>

// 方法二
<script setup lang="ts">
  import { defineProps } from 'vue'
  // 先通过 interface 定义一个类型接口
  interface Props{
    msg?: string
  }
  //再作为入参传入
  const props = withDefaults(defineProps<Props>(),{
    msg: 'hello'
  })
  console.log(props.msg) //hello
</script>
```



### 7. defineExpose

暴露出父组件要调用的方法

```vue
//子组件
<template>
	<p>子组件</p>
</template>
<script setup>
  import {ref} from 'vue'
    
  const stext = ref('son-value')
  const sfunction = ()=>{
		console.log('son-function')
  }
    
  defineExpose({
		stext,
    sfunction
  })
</script>

//父组件
<template>
	<p>父组件</p>
	<Son ref="sonDom"/>
	<button @click="getSonDom">点击</button>
</template>
<script setup>
  import {ref} from 'vue'
  import Son from './son.vue'
  const sonDom = ref(null)  //命名要和REF上面的名称一致
  const getSonDom= ()=>{
    console.log('sonDom', sonDom.value.stext)
  }
</script>
```



### 	8. useAttrs/ useSlots

在标准组件里，`attrs` 的数据是通过`setup`的第二个参数`context`里的`attrs` API获取的。

`vue3`中没有了`context`参数，所以需要使用 `useAttrs` 来拿到 `attrs` 数据。

同理，使用 `useSlots` 获取插槽。

```vue
<script setup>
  import { useSlots, useAttrs } from 'vue'
  // 获取 slots
  const slots = useSlots()
  // 获取 attrs
  const attrs = useAttrs()

  //attrs是个对象，需要通过key 来得到对应的单个 attr
  console.log(attrs.msg)
</script>
```

### 9. watch / watchEffect

- `watch`：侦测一个或者多个响应式数据源并在数据源变化时调用一个回调函数

  监听的对象是响应式对象，即 `reactive` 或 `ref` 定义的变量

  ```js
  const state = reactive({ count: 0 })
  watch(
  	() => state.count,
    (count, prevCount) => {
      ...
    }
  )
  ```

- `watchEffect`：==立即运行一个函数==，然后被动的追踪它的依赖，当这些依赖改变时重新执行该函数。

  ```javascript
  const count = ref(0)
  watchEffect(() => console.log(count.value))
  // -> logs 0
  
  count.value++
  // -> logs 1
  ```


**对比：**

1. `watch` 只有监听的值发生变化时才执行，`watchEffect` 每次只要代码加载时就会执行。（忽略 `watch` 的第三个参数配置项，如果修改配置项也可立马执行）
2. `watch` 需要传递监听的对象，`watchEffect` 不需要
3. `watch` 只能监听响应式数据，如果直接监听 `reactive` 定义对象中的属性是不允许的，除非使用函数转换。
4. `watchEffect` 如果监听 `reactive` 定义的对象是不起作用的，只能监听对象中的属性
5. `watchEffect`  无法获取到原值，只能得到变化后的值



### 10. computed

- 作用：对响应式变量进行缓存计算，返回一个只读的响应式的ref对象
- 语法：`const c = computed(fn / {get,set})`

```typescript
function computed<T>(
	options:{
        get:()=>T
        set:(value)=>void
    }
): Ref<T>

const name = ref('')
const text = computed({
    get(){
        return name.value
    }
    set(val){
    	name.value = val
	}
})
```

