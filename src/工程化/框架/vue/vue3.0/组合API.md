---
title: 组合API
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



<!-- more -->

### 1.  ref / reactive

- `ref` ：定义基本数据类型，如：`String/Boolean/Number`

- `reactive` ：定义响应式变量，用于复杂数据类型，如：`Array/Object`

**区别：**

- `ref` 用来定义基本类型数据，`reactive` 用来定义对象或数组类型数据

- `ref` 通过 `Object.defineProperty()` 中的`get` 和`set` 来实现响应式，`reactive` 通过使用 `Proxy` 来实现响应式

- `ref` 定义的数据，操作数据需要 `.value` ，读取数据时模板中直接读取不需要。`reactive` 定义的数据，不需要 `.value` 

### 2. toRef / toRefs

- `toRef` ：

  - 作用：把一个`reactive`对象中的某个属性变成`ref`对象

  - 语法：`const x = toRef(reactive(obj),'key')`    // `x.value`

    ```vue
    <script setup>
      let user = reactive({name:"qq",age:10})
      let age = toRef(user,'age')
      console.log(isRef(age))  //true
    </script>
    ```

- `toRefs`：

  ```vue
  <script setup>
    let user = reactive({name:"qq",age:10})
    let info = toRefs(user)
    console.log(isRef(info))       //true
    console.log(isRef(info.name))  //true
    console.log(isRef(info.age))   //true
  </script>
  ```

### 3. unref

用于返回一个值

如果访问的是`ref`变量，则返回其`.value`，如果不是`ref`变量，则直接返回

### 4. shallowRef

- 作用：对复杂的对象，只将第一层变成`ref`响应
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

### 5. triggerRef

强制渲染`shallowRef`对象更新

### 6. readonly / shallowRwadonly

- `readonly` ：接收一个响应式数据然后重新赋值，返回的数据不允许修改（深层只读）

- `shallowRwadonly`：浅层只读（第一层只读，其余层可以修改）

`const x = readonly( ref对象 | reactive对象 | 普通对象 )`  只读

### 7. toRaw / markRaw

- `toRaw` ：将一个由 `reactive` 生成的响应式对象转为普通对象，如果在后续的操作中对数据进行添加的话，添加的数据也为响应式数据。
- `markRaw` ：进行`markRaw`操作后不会变为响应式数据，与 `readOnly` 不一样， 数据还是会发生改变。

### 8. customRef

自定义`ref`对象，防抖可用

```vue
// 自定义一个防抖函数
<script setup>
	function myRef(value, times){
    let timer
    return customRef((track, trigger) => {
      return {
        get(){
          track()          // 通知 Vue 追踪 value 的变化
          return value
        },
        set(newValue){
          clearTimeout(timer)
          timer = setTimeut(() => {
            value = newValue
            trigger()     // 通知 Vue 去重新解析模板
          }, times)
        }
      }
    })
  }
  let kayWord = myRef('hello', 1000)   // 使用自定义 myRef
  return kayWord
</script>
```



### 9. 响应式判断

#### 9.1 isRef 

判断一个变量是否是 `ref` 对象 

#### 9.2 isReadonly

判断一个变量是不是只读的

#### 9.3 isReactive 

 判断一个变量是不是`reactive`的

#### 9.4 isProxy

判断一个变量是不是`reactive`或者`readonly`的



