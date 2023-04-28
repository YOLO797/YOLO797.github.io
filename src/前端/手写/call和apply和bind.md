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



### 2. call

#### 2.1 定义

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



#### 2.2 手写实现

```javascript
// context 函数中的 this 将改变为指向这个参数
// args  传入的参数
// this  未改变指向时，指向要处理的函数 func
Function.prototype.myCall = function(context, ...args){
  context = context : window  // context为null或undefined，指向window
  const key = symbol('key')   // 成员值唯一，防止修改原始对象的值
  context[key] = this         // 把函数作为某个对象的成员值
  const result = context[key](...agrs)
  delete context[key]   // 设置的成员属性用完后要删除掉
  return result
}
```



### 3. apply

#### 3.1 定义

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



#### 3.2 手写实现

```javascript
Function.prototype.myApply = function(context, args){
  context = context : window
  const key = symbol('key')
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
```



### 4. bind

#### 4.1 定义

与call相似，接收两个参数，第一个参数是 `this` 的指向，第二个参数是一个参数列表，

改变this指向后**不会立即执行**，而是返回一个**永久改变**this指向的函数

#### 4.2 实现思路

- `bind()` 返回一个函数， 对于函数有2种调用方法，一种是直接调用，一种是通过 `new` 的方式；

- **直接调用：** `apply()` 或者 `call()` 可以实现。

  但是对于参数需要注意以下情况：因为 `bind` 可以实现类似这样的代码 `func.bind(obj, 1)(2)` ，所以我们需要将两边的参数拼接起来，即 `args.concat(...arguments)`

- **通过 `new` 方式调用：** 首先判断 `this` ，对于 `new` 的情况来说，不会被任何方式改变 `this` ，所以这种情况下我们需要忽略传入的 `this`

#### 4.3 手写实现

##### 4.3.1 apply 实现手写bind

```javascript
//直接调用 第一版
var foo = {
	value: 1
}
function bar(){
	return this.value
}
var bindFoo = bar.bind(foo)
console.log(bindFoo())  // 1

Function.prototype.myBind = function(context){
  var that = this
	return function(){ 
    return that.apply(context)
  }
}
```



```javascript
//直接调用 第二版
var foo = {
	value: 1
}
function bar(name, age){
	console.log(this.value)
  console.log(name)
  console.log(age)
}
var bindFoo = bar.bind(foo,'tom')
bindFoo('18')
// 1
// tom
// 18


Function.prototype.myBind = function(context){
  var that = this
  // 获取 myBind 函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1)
  return function(){ 
    // 这个时候的 arguments 是指 bind 返回的函数的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    return that.apply(context, args.concat(bindArgs))
  }
}
```



```javascript
// 构造函数效果实现 bind最终版
Function.prototype.myBind = function(context){
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  
  var that = this
  var args = Array.prototype.slice.call(arguments,1)
  function fBind(){
    var bindArgs = Array.prototype.slice.call(arguments)
    // 当作为构造函数时，this 指向实例，此时结果为 true,将绑定函数的this作为实例
    // 当作为普通函数时，this 指向window，此时结果为 false，将绑定函数的this指向context
    return that.apply(this instanceof fBind ? this : context,args.concat(bindArgs))
  }
  // 修改返回函数的prototype 为绑定函数的 prototype ，实例就可以继承绑定函数的原型中的值
  // 如果直接这样写fBound.prototype = this.prototype，修改fBind.prorotype 时，也会直接修改绑定函数的 prorotype，所以需要用到一个空函数Fn来进行中转
  var Fn = function(){}
  Fn.prorotype = this.prototype
  fBind.prorotype = new Fn()
  return fBind                  
}
```



##### 4.3.2  call 实现手写bind

```javascript
Function.prototype.myBind = function(context, ...args1){
  var that = this
  function fBind(...arges2){
    return that.call(this instanceof fBind ? this : context, ...args1, ...args2)
  }
  function Fn(){}
  Fn.prototype = this.prototype
  fBind.prototype = new Fn()
  return fBind
}
```

