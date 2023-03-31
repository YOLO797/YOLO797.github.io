---
title: call/apply/bind
icon: page
date: 2023-03-24
category:
  - 前端
tag:
  - 前端
  - JavaScript
  - 深入系列
sticky: true
star: true
---

call、apply、bind的作用和区别

<!-- more -->

### 1. 作用

​	都是改变this的指向



### 2. apply

`function.call(this, [arg1, arg2, arg3, ...])`

接收两个参数，第一个参数是 `this` 的指向，第二个参数是函数接受的参数，以数组的形式传入

改变this指向后 原函数**立即执行**，临时改变 `this` 指向一次

当传入的对象不存在时，即为 `null` 或 `undefined` ，`this` 将指向全局`window`

```javascript
function fun(arg) {
  console.log(this.name, arguments);
}
let obj = {
  name: 'clying'
}
fun.apply(obj, [22, 1])
// clying Arguments(2) [22, 1]
```



### 3. call

`function.call(this, arg1, arg2, arg3, ...)`

接收两个参数，第一个参数是 `this` 的指向，第二个参数是一个参数列表，

改变this指向后 原函数**立即执行**，临时改变 `this` 指向一次

当传入的对象不存在时，即为 `null` 或 `undefined` ，`this` 将指向全局`window`

```javascript
function fun() {
  console.log(this.name, arguments)
}
let obj = { name: 'clying' }
fun.call(obj, 'deng', 'deng')
// clying [Arguments] { '0': 'deng', '1': 'deng' }
```



### 4. bind

与call相似，接收两个参数，第一个参数是 `this` 的指向，第二个参数是一个参数列表，

改变this指向后**不会立即执行**，而是返回一个**永久改变**this指向的函数

