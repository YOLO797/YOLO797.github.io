---
title: hooks函数
icon: page
date: 2023-04-26
category:
  - 前端
tag:
  - 前端
  - Vue3
sticky: true
star: true
---

**Vue3** 的一些基本知识

<!-- more -->

## 1. Mixin	

[参考链接](https://juejin.cn/post/7076340796361801759)

将组件的公共逻辑或者配置提取出来，哪个组件需要用时直接将提取的这部分混入到组件内部即可。

**`mixin`和`vuex`的区别：**

- `vuex` 公共状态管理，如果在一个组件中更改数据，其余引用的该数据一起更改。
- `mixin` 中的数据和方法是独立的，组件之间使用后是**互不影响**的。

### 1.1 自定义mixin

```js
// src/mixin/index.js
export const mixins = {
  data(){
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
```

### 1.2 局部混入

```vue
//引入
<script>
  import { mixins } from './mixin/index'
  export default{
    mixins:[ mixins ]
  }
</script>
```

- `mixin` 中的生命周期函数会和组件的生命周期函数一起合并执行
- `mixin` 中的data数据在组件中可以直接使用
- `mixin` 中的方法在组件中可以直接调用
- 生命周期函数合并后执行顺序：先执行`mixin` 中的，后执行组件的

### 1.3 优缺点

**优点：**

- 提高代码的复用性。
- 无需传递状态。
- 维护方便，只需修改一个地方即可。

**缺点：**

- 命名冲突
- 滥用的话后期不好维护
- 不好追溯源，排查问题较麻烦
- 不能轻易的重复代码				

## 2. Hooks函数

[Hook链接](https://juejin.cn/post/7083401842733875208)

### 2.1 Hooks

​	将文件的一些单独功能的`js/ts`代码进行抽离出来，放入单独的`js/ts`文件中，或者说是一些可复用的公共方法/功能。

​	实现高内聚低耦合。

- `vue3` 的 `hook` 函数相当于 `vue2` 中的 `mixin` ，不同在于 `hooks`是函数
- `vue3` 的`hook` 函数可以帮助我们提高代码的复用性，让我们能在不同的组件中利用`hook`函数



### 2.2 自定义Hook

  1. 将可复用功能抽离为外部`js/ts`文件

  2. 函数名/文件名以 `use` 开头，形如：`useXXX`

  3. 引用时将响应式变量或者方法显示解构暴露出来： `const { count, Fn } = useXXX()`


```javascript
// 加法 Hook
import {ref, watch} from 'vue'
const useAdd = ({num1, num2})=>{
  const addNum = ref(0)
  watch([num1,num2], ([num1,num2])=>{
    addFn(num1, num2)
  })
  const addFn = (num1, num2)=>{
    addNum.value = num1 + num2
  }
  return {
    addNum,
    addFn
  }
}
export default useAdd
```



```vue
<template>
  <div>
    num1: <input v-model="num1" />
    num2: <input v-model="num2" />
  </div>
  <p>加法等于： {{addNum}}</p>
</template>
<script setup>
  import {ref} from 'vue'
  import {useAdd} from './hooks/useAdd.js'  //引入hook

  const num1 = ref(1)
  const num2 = ref(2)
  //自定义hook ， 将响应式变量和方法暴露出来
  const {addNum, addFn} = useAdd({num1, num2})
  addFn(num1.value, num2.value)
</script>
```



### 2.3 Hooks 与 Mixin

- `mixin` 难以追溯方法和属性，`vue3` 自定义的 `hooks` 却可以

  ```javascript
  // Mixin
  export default{
  	mixin: [a,b,c,d,e] //一个组件内可以混入各种功能的Mixin
  	mounted(){
  		console.log(this.name)  //问题： 不清楚这个name来自于哪个mixin?
  	}
  }
  
  // Hooks  引用时将响应式变量或者方法显式暴露出来
  const {nameRef, Fn} = useXX()
  ```

- 无法像 `mixin` 传递参数来改变逻辑，`hooks` 却可以

- `mixin` 同名变量或方法会被覆盖，`hook` 可以在引用的时候对同名变量重命名

