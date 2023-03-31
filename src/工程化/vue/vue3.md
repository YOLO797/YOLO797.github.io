---
title: Vue生命周期
icon: page
date: 2020-01-01
category:
  - 前端
tag:
  - 前端
  - Vue
sticky: true
star: true
---

**Vue3** 的生命周期详述

<!-- more -->

## 1. 生命周期

- `beforeCreate` =====> 使用 `setup()`
- `created` ==========> 使用 `setup()`
- `beforeMount`  ======> `onBeforeMount`
- `mounted`  ==========> `onMounted`
- `beforeUpdate`  =====> `onBeforeUpdate`
- `updated` ==========> `onUpdated`
- `beforeDestroy`  ====> `onBeforeUnmount`
- `destroyed` ========> `onUnmounted`
- `errorCaptured`  ====> `onErrorCaptured`

#### 1.2 new Set() 

接收一个数组，返回一个新的对象  

1. 属性：
   - size ：返回集合种所包含元素的数量
   
2. 场景：
   - 数组去重 `[...new Set(arr)]`
   
   - 并集  `[...new Set([...a,...b])]`
   
   - 交集  `[...new Set([...a].filter(x=>b.has(x)))]`
   
   - 查集  `[Array.from(new Set([...a].filter(x=>!b.has(x))))`
   
     

#### setup

**setup 函数**

1. Composition API（组合API）的入口；

2. 在 setup 函数中定义的变量和方法最后都需要 return 出去，不然无法再模板中使用；

3. 在beforeCreate钩子之前被调用

4. this 不可用，打印为 undefined

2. 接收props作为第一个参数，watchEffect/watch 观察和相应props的更新
   context 提供一个上下文对象
   
   

**setup语法糖：`<script setup> </script>`**

##### 	组件

​	组件直接引入即可使用，无需注册

```vue
<template>
	<Foo />
</template>
<script setup>
    import Foo from './components/Foo.vue'
</script>
```



##### 	属性和方法

​	属性和方法无需挂载到对象上后再次返回

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



##### 	props

​	`	defineProps` ：用来接收父组件传来的 props

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

​		

##### 	withDefaults

​	在使用TS类型系统时，可以指定props的默认值。

​	withDefaults( props, defaultValues )

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





##### 	emits

​	`defineEmits`：子组件向父组件事件传递/传值

​	由于emit并非提供给模板直接来读取，所以需要通过字面量来定义emits

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



##### defineExpose

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



##### 	attrs和slots

​	在标准组件里，`attrs` 的数据是通过`setup`的第二个参数`context`里的`attrs` API获取的。

​	vue3中没有了context参数，所以需要使用 `useAttrs` 来拿到 `attrs` 数据。

​	同理，使用 `useSlots` 获取插槽。

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





#### 组件通讯

##### 父调用子的方法

```vue
// 父
<template>
	<div @click="handle">调用子组件的方法</div>
	<Child ref="alarmDetailRef"/>
</template>

<script setup>
    import Child from './Child.vue'
    let alarmDetailRef = ref(null)
    // 调用子组件方法
    function handle(){
        alarmDetailRef.value.childFn()
	}
</script>
```



```vue
// 子
<template>
</template>
<script setup>
    function childFn(){
	}
    //difineExpose 暴露出父组件要调用的方法
    difineExpose({
        childFn
    })
</script>
```



##### 父传子

```vue
// 父
<template>
	<Child :msg = 'msg'/>
</template>
<script setup>
    import Child from './Child.vue'
    import { ref } from 'vue'
    let msg = ref('父传子')
</script>
```



```vue
// 子 Child.vue
<template>
	<div>{{ msg }}</div>
</template>
<script setup>
    import { ref } from 'vue'
    const props = difineProps({
		msg: String
    })
</script>
```



##### 子传父

```vue
// 父组件
<template>
	<div>子传父-{{ a }}</div>
	<Child @fn="fn"/>
</template>
<script setup>
    import Child from './Child.vue'
    import { ref } from 'vue'
    let a = ref('')
    function fn(e){
		a.value = "子组件触发父组件"
        console.log(e)  // 接收的子组件传来的数据
    }
</script>
```



```vue
// 子组件 Child.vue
<template>
	<div @click="childClick">{{ msg }}</div>
</template>
<script setup>
    import { ref } from 'vue'
    const props = ref('子传父')
    
    const emits = defineEmits(["childClick"])
    function childClick(){
        emits("fn", true)
	}
</script>
```





**uci**-dashboard

uci-ui

`TS` + `vite` + `vue3` + `pinia` + `vueRequest`（`graphQL`） + `vue-router4` + `Native-UI` + `xicons`

架子 cli -> git hub 





#### 组合API

##### ref 与 reactive  

​	ref ：定义基本数据类型，String/Boolean/Number

​	reactive ：定义响应式变量，用于复杂数据类型，如对象或数组



`ref` 和 `reactive` 的区别

1. `ref` 用来定义 基本类型数据

   `reactive` 用来定义对象或数组类型数据

2. `ref` 通过 `Object.defineProperty()` 中的`get` 和`set` 来实现响应式，

   `reactive` 通过使用 `Proxy` 来实现响应式

3. `ref` 定义的数据：操作数据需要 `.value` ，读取数据时模板中直接读取不需要

   `reactive` 定义的数据：不需要 `.value` 



##### toRef 与 toRefs

​	toRef ：

​		作用：把一个reactive对象中的某个属性变成ref对象

​		语法：`const x = toRef(reactive(obj),'key')  //x.value`

```vue
<script setup>
    let user = reactive({name:"qq",age:10})
    let age = toRef(user,'age')
    console.log(isRef(age))  //true
</script>
```

​	

​	toRefs：

```vue
<script setup>
    let user = reactive({name:"qq",age:10})
    let info = toRefs(user)
    console.log(isRef(info))       //true
    console.log(isRef(info.name))  //true
    console.log(isRef(info.age))   //true
</script>
```



##### unref

​	用于返回一个值，如果访问的是ref变量，则返回其.value；如果不是ref变量，则直接返回

##### customRef

​	自定义ref对象，防抖可用

##### shallowRef

- 作用：对复杂的对象，只将第一层变成ref响应
- 语法：`const x = shallowRef({a:{b:{c:1}},d:2})` , 如此a、b、c、d变化都不会自动更新，需要借助 `triggerRef` 来强制更新

```vue
<script setup>
    let info = shallowRef({a:{b:{c:1}},d:2})
    console.log(isRef(info))       //true
    console.log(isRef(info.value.a.b.c))  //false
    console.log(isRef(info.a))  //false
    console.log(isRef(info.d))   //false
    
    const changeC = ()=>{
        info.value.a.b.c++
        triggerRef(info)   //强制渲染更新
    }
</script>
```

##### triggerRef

​	强制渲染shallowRef对象更新

##### readonly 与 shallowRwadonly

​	readonly ：接收一个响应式数据然后重新赋值，返回的数据不允许修改（深层只读）

​	shallowRwadonly：浅层只读（第一层只读，其余层可以修改）

​	`const x = readonly( ref对象 | reactive对象 | 普通对象 )`  只读

##### toRaw与markRaw

​	`toRaw` ：将一个由 `reactive` 生成的响应式对象转为普通对象，如果在后续的操作中对数据进行添加的话，添加的数据也为响应式数据。

​	`markRaw` ：进行markRaw操作后不会变为响应式数据，与 `readOnly` 不一样， 数据还是会发生改变。

##### computed()  

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



##### 响应式判断

`isRef` ：判断一个变量是否是 ref 对象 

`isReadonly` ：判断一个变量是不是只读的

`isReactive ` ：判断一个变量是不是reactive的

`isProxy` ：判断一个变量是不是reactive或者readonly的



#### watch与watchEffect

`watchEffect` 和 `watch` 的区别：

1. `watch` 只有 **监听** 的值发生变化时才执行，`watchEffect` 每次只要代码加载时就会执行。（忽略 `watch` 的第三个参数配置项，如果修改配置项也可立马执行）
2. `watch` 需要传递监听的对象，`watchEffect` 不需要
2. `watch` 只能监听响应式数据：`ref` 定义的属性和 `reactive` 定义的对象，如果直接监听 `reactive` 定义对象中的属性是不允许的，除非使用函数转换。
4. `watchEffect` 如果监听 `reactive` 定义的对象是不起作用的，只能监听对象中的属性
4. `watchEffect`  无法获取到原值，只能得到变化后的值



`watchEffect` 立即运行一个函数，然后被动的追踪它的依赖，当这些依赖改变时重新执行该函数。

```javascript
const count = ref(0)
watchEffect(() => console.log(count.value))
// -> logs 0

count.value++
// -> logs 1
```



`watch` 侦测一个或者多个响应式数据源并在数据源变化时调用一个回调函数

```javascript
const state = reactive({ count: 0 })
watch(
	() => state.count,
    (count, prevCount) => {
        ...
    }
)
```



#### Mixin	

[参考链接](https://juejin.cn/post/7076340796361801759)

##### vue2中的mixin

​	将组件的公共逻辑或者配置提取出来，哪个组件需要用时，直接将提取的这部分混入到组件内部即可。

##### mixin 和 vuex的区别

- vuex 公共状态管理，如果在一个组件中更改数据，其余引用的该数据一起更改。
- mixin 中的数据和方法时独立的，组件之间使用后是互不影响的。

##### 自定义mixin

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

##### 局部混入

```vue
//引入
<script>
    import { mixins } from './mixin/index'
    export default{
		mixins:[ mixins ]
    }
</script>
```

1. mixin 中的生命周期函数会和组件的生命周期函数一起合并执行。
2. mixin 中的data数据在组件中可以直接使用。
3. mixin 中的方法在组件中可以直接调用。
4. 生命周期函数合并后执行顺序：先执行mixin 中的，后执行组件的。

##### 优缺点

优点：

		1. 提高代码的复用性。
		1. 无需传递状态。
		1. 维护方便，只需修改一个地方即可。

缺点：

	1. 命名冲突
	1. 滥用的话后期不好维护
	1. 不好追溯源，排查问题较麻烦
	1. 不能轻易的重复代码

​				



#### Hooks函数

[Hook链接](https://juejin.cn/post/7083401842733875208)

- vue3 的 hook 函数相当于 vue2 中的 mixin ，不同在于 hooks是函数
- vue3 的hook 函数可以帮助我们提高代码的复用性，让我们能在不同的组件中利用hook函数



##### Hooks

​	将文件的一些单独功能的js/ts代码进行抽离出来，放入单独的js/ts文件中，或者说是一些可复用的公共方法/功能。

​	实现高内聚低耦合。



##### 自定义Hook

  1. 将可复用功能抽离为外部js/ts文件

  2. 函数名/文件名以 use 开头，形如：useXXX

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



##### Hooks 与 Mixin

 1. mixin 难以追溯方法和属性，vue3 自定义的 hooks 却可以

    ```javascript
    // Mixin
    export default{
    	mixin: [a,b,c,d,e] //一个组件内可以混入各种功能的Mixin
    	mounted(){
    		console.log(this.name)  //问题： 不清楚这个name来自于哪个mixin?
    	}
    }
    ```

    

    ```js
    // Hooks  引用时将响应式变量或者方法显式暴露出来
    const {nameRef, Fn} = useXX()
    ```

 2. 无法像 mixin 传递参数来改变逻辑，hooks 却可以

 3. mixin 同名变量或方法会被覆盖

    hook 可以在引用的时候对同名变量重命名





#### 响应式原理

​		vue2.0 实现MVVM（数据双向绑定）的原理是通过 Object.defineProperty 来劫持各个**属性**中的setter 和 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

​		vue3.0 实现响应式是通过ES6中的Proxy代理目标**对象**，且一开始只代理最外层对象，嵌套对象惰性监听，性能更好。



##### vue2.0响应式

 1. 基于`Object.defineProperty`，不具备监听数组的能力，需要重新定义数组的原型才能达到响应式

 2. `Object.defineProperty` 无法监听对象属性的添加和删除

 3. 数据只有存放在data中才有响应式，或者使用`vue.$set`

    ```javascript
    data() {
        return {
    		student: {
                name: '',
                sex: ''
    		},
            chatList: []
        }
    }
    
    // 给student 新增 age 属性，不会触发视图更新
     mounted() {
    	this.student.age = 24
     }
    
    // 原因：Vue.js 不能检测到对象属性的添加或删除。
    // Vue.js 在初始化实例时 将属性转化为getter/setter，所以属性必须在data对象上才能让Vue.js转化，才能是响应式的
    
    // 使用 $set 可以实现响应式
    this.$set(this.student, "age", 24)
    
    this.$set(this.chatList[0], "name", "tom") //数组赋值
    this.$set(this.chatList, 0, {name: 'tom'}) //数组赋值
    this.chatList.push({name: 'tom'}) //数组赋值
    
    ```

	1. 深度监听需要一次性递归，对性能影响比较大

##### vue3.0响应式

 	1. 基于Proxy 和 Reflect，可以监听原生数组，可以监听对象属性的添加和删除
 	2. 不需要一次性遍历data的属性，可以提高性能
 	3. Proxy 一开始只代理最外层对象，之后通过判断当前 Reflect.get 的返回值是否为 Object，如果是 则再通过 reactive 方法做代理，实现深度监听。



**`Proxy`**：用于定义基本操作的自定义行为

`const proxy = new Proxy(target, handler)`





- has捕获器

   **`has(target, key)`**

  - target：目标对象
  - propKey：带拦截属性名

  作用：拦截判断 target 对象是否含有属性 propKey 的操作 

  对应Reflect：**`Reflect.has(target, key)`**

- get捕获器

  **`get(target, key, receiver)`**：访问 target 的 key 属性，但是 this 指向 receiver，所以实际访问的值是 receiver 的 key 值。

  返回：返回读取的属性

  作用：拦截对象属性的读取

  对应Reflect：**`Reflect.get(target, key, receiver)`**

  

- set捕获器

  **`set(target, key, value, receiver)`**

  - target：目标对象
  - propKey：待拦截的属性名
  - value：新设置的属性值
  - receiver： proxy 实例

  返回：严格模式下返回 true 操作成功；否则失败报错

  作用：拦截对象的属性赋值操作

  拦截操作：`proxy[key] = value`

  对应Reflect：**`Reflect.set(obj, key, value, receiver)`**

- ownKeys捕获器

- deleteProperty捕获器

  对应Reflect：**`Reflect.delete(obj, key)`**

  

##### 扩展：MVVM

##### 扩展：响应式

1. 是什么？

   数据响应式就是 能够使数据变化可以被检测并对这种变化做出相应的机制

2. 为什么需要响应式？

   MVVM核心解决的就是连接数据层和视图层，这样能够在数据发生变化时，立刻做出更新处理

3. 有什么好处？

   通过数据响应式加上虚拟DOM和patch算法，开发人员只需要操作数据，提高效率。

4. 实现、优缺点

   vue2 中的响应式会根据数据类型不同来做不同的处理

   - 是对象时，采用 Object.defineProperty() 的方式定义数据拦截，通过getter/setter方法来实现数据响应式
   - 是数组时，通过覆盖数组对象原型的7个变更方法，如push、pop、unshift等

   缺点：

   - 递归遍历时会造成性能损失
   - 不能监听数组属性的新增和删除，需要用到$set方法

5. vue3 变化

   vue3 通过 Proxy 代理实现响应式，将代码抽取为独立的reactive包，不需要一次性遍历data的属性，可以提高性能

   可以监听数组属性的增加和删除

   ```javascript
   const data = {name: 'tom'}
   
   function reactive(target){
   	const handler = {
   		get(target, key, receiver){
               console.log('访问了 ${key} 属性')
               return Reflect.get(target, key, receiver)
           },
           set(target, key, value, receiver){
   			console.log('${key} 由 ${target[key]} 设置成 ${value}')
               Reflect.set(target, key, value, receiver)
           }
       }
       return new Proxy(target, handler)
   }
   
   const proxyData = reactive(data)
   console.log(proxyData.name)
   // 访问了 name 属性
   // tom
   proxyData.name = 'qq'
   // name 由 tom 设置成 qq
   console.log(proxyData.name)
   // qq
   ```

   

#### v-memo

1. 和computed相似，只不过computed缓存数据，v-memo缓存DOM。
2. 接收一个依赖的数组，当依赖的数组变化时，v-memo所对应的DOM包括子集将会重新渲染，反过来说，如果依赖的数组不变，即使整个组件重新渲染了，v-memo所对应的DOM包括子集更新都将被跳过。
3. 依赖的数组： `v-memo="[value1,value2]"` , 或者`v-memo="myValue === true"`
4.  `v-memo="[]"`  ===>  相当于 v-once，只会渲染该部分组件一次。



#### Teleport

 1. 将你写的组件挂载倒任何你想挂载的地方

 2. 比如 在vue某个组件的内部处理嵌套组件的定位、z-index、样式等

    ```vue
    <template>
    	<teleport to="#Box">
            <div class="Box">Box</div>
        </teleport>
    </template>
    
    <template>
    	<div id="app"></div>
    	<div id="Box"></div>
    </template>
    ```

    

#### Suspense

直接进行引用。自带两个slot，分别为 `default` 和 `fallback` 。

当要加载的组件不满足状态时，Suspense 将回退到 fallback 状态一直到加载的租金啊满足条件时才会进行渲染。

使用场景：

```vue
// 异步组件，进行loading处理
<template>
	<button @click="onClick">点击加载异步组件</button>
	<Suspense v-if="loadChild">
        <template #default>
            <Child />
		</template>
		<template #fallback>
			loading...
		</template>
    </Suspense>
</template>

// 配合路由器使用
<template>
	<router-link to="/home">Home</router-link>|
	<router-link to="/about">About</router-link>
	<Suspense>
        <template #default>
            <router-view />
		</template>
		<template #fallback>
			loading...
		</template>
    </Suspense>
</template>
```



#### Provide / Inject





vue全家桶+quasarui+i18n+Mixin

项目描述：

UFS是UIT自主研发的云存储系统，采用数据路径与控制路径分离的非对称分布式架构，结合负载均衡与并发访问策略，基于普通硬件构建出大规模存储集群。在统一命名空间下提供上百PB的存储容量及超高聚合带宽，同时具备高可用、灵活扩展、易管理易使用等特点。

UFS存储管理平台包含9个模块：

1. 配置向导，主要包括以下内容：
   - 配置向导：通过配置向导页面对底层基础设施进行配置，同时引导用户对存储系统进行管理平台的初始化操作。
2. 节点管理，主要包括以下内容：
   - 节点管理：监控和管理存储平台中的服务器节点，节点是指用于独立承载分布式存储的节点服务器。
   - 许可证：用于查看许可信息、上传许可证文件。
3. 集群管理，主要包括以下内容：
   - 存储服务：存储服务用于配置、管理当前集群中运行的`MSS`、`CSS`等各类服务实例。
   - 磁盘管理：在管理平台中对磁盘进行添加、移除、格式化等管理操作。
   - 客户端：客户端管理页面主要提供对访问UFS文件系统的客户端会话进行查询、统计操作。
4. 文件系统，主要包括以下内容：
   - 文件管理：文件管理提供对分布式文件系统中目录、文件的配置功能。
   - 回收站：提供对回收站文件的管理操作。
   - 配额管理：配额管理即对目录的存储资源占用情况进行监控和限制。对指定目录设置配额，限制所有用户在该目录下使用的存储资源。
   - 快照管理：文件存储快照特性为用户提供了基于目录的快照，支持生成指定目录在特定时间点的一致性映像，同时可以在不中断业务的情况下，得到与原文件一致的数据副本。
   - 存储策略：存储系统采用数据副本备份机制来保证数据的可靠性，即同一份数据可以复制保存为 1~5 个副本。
5. 访问协议，主要包括以下内容：
   - UFS、NFS、CIFS：
6. 认证管理，主要包括以下内容：
   - 本地用户：
   - 本地组：
   - 目录服务：通过过AD域服务器对访问共享目录的用户进行身份验证。若访问共享目录的用户为合法的AD域用户，则允许其访问共享。
   - LDAP：通过LDAP域配置，可将存储集群的NAS服务器加入到NFS客户端所在的LDAP域中，这样NAS服务器和NFS客户端就可以共享该LDAP域中的用户信息，存储集群可直接通过LDAP域用户信息对访问NFS共享目录的用户进行身份验证。
7. 运维管理，主要包括以下内容：
   - 用户管理、角色管理、权限配置、任务管理、审计日志、操作日志、系统日志：
8. 监控报表、监控告警、系统设置

使用技术：

1. vue2.0全家桶和Typescript结合quasarUI编写页面
2. 使用Vue-Router进行路由配置、跳转、拦截等
3. 使用async/await来实现异步调用api的方法
4. i18n国际化插件实现中英文分离
5. websocket 全局封装，如：实时监控数据并返回
6. Mixin混入到组件内部：如刷新页面后表格的排序功能
7. 采用组件化、模块化方式编写代码。如：图表分离，本地localStorage存储，弹出框、表单等
8. 

