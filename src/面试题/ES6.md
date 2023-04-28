---
title: ES6
icon: page
date: 2023-04-04
category:
  - 前端
tag:
  - 前端
  - ES6
  - 面试题
sticky: true
star: true
---

一些数组方法，如  `forEach`、`map`、`filter`、`some`、`every`、`find`、`reduce` 等

<!-- more -->

## 1. 箭头函数和普通函数

::: info 参考答案

- 没有 `this` ，所以需要通过查找作用域链来确定 `this` 的值
- 没有 `arguments` ，但是箭头函数可以访问外围函数的 `arguments` 对象
- 不能通过 `new` 关键字调用
- 没有原型 `prototype`
- 没有 `super`

:::

## 2. 数组新增扩展

### 2.1 扩展运算符

### 2.2 构造函数新增方法

#### Array.from()

- 将类似数组的对象或可遍历对象转为真正的数组

- 可以接收第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组

  ```javascript
  Array.from([1,2,3], x=>x*x)
  ```

#### Array.of()

- 用于将一组值，转换为数组

  ```javascript
  Arrof.of(1,2,3)   // [1,2,3]
  ```

- 没有参数时，返回一个空数组

  当参数只有一个时，实际上是指定数组的长度

  参数个数不少于两个时，`Array()` 才会返回由参数组成的新数组

  ```javascript
  Array()        // []
  Array(3)       // [,,,]
  Array(3,11,8)  // [3,11,8]
  ```

### 2.3 实例对象新增方法

::: info 参考答案

- copyWithin()
- find()、findIndex()
- fill()
- keys()、values()、entries()
- includes()
- flat()、flatMap()

:::



#### copyWithin()

将指定位置的成员复制到其他位置（会覆盖原有的成员），然后返回当前数组

参数：

- target（必选）：从该位置开始替换数据
- start（可选）：从该位置开始读取数据
- end（可选）：到该位置停止读取数据

```javascript
[1,2,3,4,5].copyWithin(0,3)  // [4,5,3,4,5]
```



#### find()、findIndex()

`find()` ：找出第一个符合条件的数组成员

`findIndex()`：找出第一个符合条件的数组成员的索引，都不符合返回 -1

#### fill()

`fill(填充值，起始位置，结束位置)`：使用给定值填充一个数组，起始位置和结束位置可选

```javascript
[a,b,c].fill(7)        // [7,7,7]
new Array(3).fill(7)   // [7,7,7]
```



#### keys()、values()、entries()

`keys()`：对键名的遍历

`values()`：对键值的遍历

`entries()`：对键值对的遍历

#### includes()

`includes()`：用于判断数组是否包含给定的值，返回 `true`/`false`

#### flat()、flatMap()

扁平化处理

`flat(拉平层数)`：默认不填只会 “拉平”一层

`flatMap()`：对原数组的每个成员执行一个函数相当于执行 `Array.prototype.map()`，然后对返回的数组执行 `flat()` 方法。返回一个新数组，不改变原数组

```javascript
[2,3,4].flatMap(x => [x , x*2])  // [2,4,3,6,4,8]
```



## 3.对象新增扩展

### 3.1 属性简写

### 3.2 super关键字

指向当前对象的原型对象

```javascript
const proto = {
  foo: 'hello'
}
const obj = {
  foo: 'world',
  find(){
    return super.foo
  }
}

Object.setPrototypeOf(obj, proto)   // 为obj设置原型对象
obj.find()   // 'hello'
```

### 3.3 属性的遍历

- `for...in`：
- `Object.keys(obj)`：
- `Object.getOwnPropertyNames(obj)`
- `Object.getOwnPrototypeSymbols(obj)`
- `Reflect.ownKeys(obj)`：返回一个数组，包含对象自身的所有键名，不管是 `Symbol`还是字符串

### 3.4 对象新增方法

对象新增方法：

- Object.is()
- Object.assign()
- Object.keys()，Object.values()，Object.entries()

## 4. Set、Map、WeakSet、WeakMap

### 4.1 Set

`Set` 类似于数组，但成员值是 **唯一** 的，没有重复的值。可用于数组去重

遍历：

- `keys()`：返回键名的遍历器
- `values()`：返回键值的遍历器
- `entries()`：返回键值对的遍历器
- `forEach()`：使用回调函数遍历每个成员

```javascript
const s = new Set()

s.add(1).add(2).add(2)  // 2 只被添加一次   [1,2]
s.delete(1)  // 返回一个布尔值
s.has(2)
s.clear()   // 清除所有成员
```



### 4.2 Map

`Map` 类型是 **键值对的有序列表** ，而键和值都可以是任意类型

属性和操作方法：

- `size`属性
- `set()`：设置键名 `key` 对应的键值 `value` ，然后返回整个 `Map` 结构
- `get()`：读取 `key` 对应的键值，找不到 `key`，返回 `undefined`
- `has()`：返回一个布尔值，表示某个键是否在当前 `Map`对象上
- `delete()`：删除某个键，返回 `true`，失败返回 `false`
- `clear()`：清除所有成员，无返回值

遍历：

- `keys()`：返回键名的遍历器
- `values()`：返回键值的遍历器
- `entries()`：返回所有成员的遍历器
- `forEach()`：遍历 `Map`的所有成员

```javascript
const m = new Map()

m.set('aaa', 6)
m.set(undefined, 6).set(1,'a')  // 链式操作

m.get('aaa')
```



### 4.3 WeakSet

```javascript
const ws = new WeakSet()

const a = [[1,2],[3,4]]
const ws = new WeakSet(a)   // WeakSet{[1,2],[3,4]}
```

**`WeakSet`与`Set` 的区别？**

::: info 参考答案

- `WeakSet` **只能储存对象引用**，不能存放值，而 `Set` 可以
- 没有 `size` 属性
- `WeakSet` 对象**无法遍历**，对象值都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的应用

:::

```javascript
const ws = new WeakSet()

// 成员不是引用类型
let weakSet = new WeakSet([1,2])
console.log(weakSet)   // 报错

// 成员为引用类型
let obj1 = {name: 1}
let obj2 = {name: 2}
let  weakSet = new WeakSet([obj1,obj2])
console.log(weakSet)  //  WeakSet{{name: 1},{name: 2}}

```



### 4.4 WeakMap

**`WeakMap`与`Map`的区别？**

::: info 参考答案

- `WeakMap` 只接受**对象作为键名**（ `null` 除外 ），不能接受其他类型的值作为键名

- `WeakMap` 的键名所指向的对象，不计入垃圾回收机制

  一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

- `WeakMap` **没有遍历操作**，不能取到键名

- `WeakMap` **无法清空，不支持 `clear` 方法**，只有 **`get()`、`set()`、`has()`、`delete()`**

:::

## 5.Generator

`Generator` 函数

- `function` 关键字与函数名之间有一个星号
- 函数体内部使用 `yield` 表达式，定义不同的内部状态

```javascript
function* helloGenerator(){
  yield 'hello';
  yield 'world'
  return 'ending'
}
var hw = helloGenerator()

hw.next()      // {value: 'hello', done: false}
hw.next()      // {value: 'world', done: false}
hw.next()      // {value: 'ending', done: true}
hw.next()      // {value: undefined, done: true}
```

`done` ：判断是否存在下个状态

`value`：对应状态值

`yield` 表达式本身没有返回值，或者说总是返回 `undefined` 

通过调用 `next` 方法可以带一个参数，该参数会被当作上一个 `yield` 表达式的返回值





**`Promise` 、`Generator`、`async/await`区别：**

::: info 参考答案

- `promise` 和 `async/await` 是专门用来处理异步操作的
- `promise` 相比  `async/await` 、`generator` 更复杂化，且可读性也稍差
-  `async/await` 、`generator` 需要与 `promise`  搭配处理异步情况
-  `async/await`  是 `generator`  的语法糖，相当于 会自动执行 `generator` 函数
-  `async/await`  使用上更简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案

:::
