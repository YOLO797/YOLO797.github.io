---
title: JS面试题
icon: page
date: 2023-03-31
category:
  - 前端
tag:
  - 前端
  - JavaScript
  - 专题系列
sticky: true
star: true

---



<!-- more -->

### 1. 统计出现次数最多的字符和次数

判断一个字符串中出现最多的字符，并统计其次数?

::: info 核心算法

1. 利用 `charAt()` 遍历字符串，从一个字符串中返回指定的字符
2. 把每个字符当作 `key` 存储给对象，如果该对象没有该属性，就给它赋值为1，如果存在该属性就 +1
3. 遍历对象，得到最大的值和出现次数

:::

```javascript
function charAtString(str){
  var obj = {}
  for(var i = 0;i < str.length; i++){
    var chars = str.charAt(i)
    if(obj[chars]){
      obj[chars]++
    }else{
      obj[chars] = 1
    }
  }
  console.log(obj)    //  { a:4,b:2,d:1,c:1 }
  
  // 遍历对象，得到最大的值和出现次数
  var max = 0
  var ch = ''
  for(var key in obj){
    if(obj[k] > max){
      max = obj[k]
      ch = key
    }
  }
  return `${ch} 出现次数最多，次数为：${max}`    // a出现次数最多，次数为：4
}

charAtString('aaabdbac')
```

### 2. 判断是否回文

```javascript
function isPalindrome(str){
  if(typeof str !== 'string'){
    return false
  }
  return str.split('').reverse().join('') === str
}
console.log("HellolleH")  // true
console.log("hello")      // false
```

### 3. 事件是如何实现的

::: info 参考答案

基于发布订阅模式，就是在浏览器加载的时候会读取事件的相关代码，但只有等到具体事件触发的时候才会执行。

常见的 `DOM` 事件：

- `DOM` 0 级事件：直接绑定在 `v-html` 上的 `on-event`，如 `onClick`，同一个事件只能有一个处理程序
- `DOM` 2 级事件：通过 `addEventListener` 、`removeEventListener` 监听，一个事件可以有多个事件处理程序，按顺序执行，捕获事件和冒泡事件
- `DOM` 3 级事件：增加事件类型，如 `UI`事件，焦点事件，鼠标事件

:::

### 4. 判断数组的方法

::: info 参考答案

- `arr instanceOf Array` ：判断某个实例是否属于某个对象
- `arr.constructor === Array`
- `Array.prototype.isPrototypeOf(arr)`：测试一个对象是否存在于另一个对象的原型链上
- `Object.prototype.toString.call(arr) === '[object Array]'`
- `Object.getPrototypeOf(arr) === Array.prototype`
- `Array.isArray(arr)`

:::

### 5. 数组和类数组区别

::: info 参考答案

- 一个是数组，一个是对象
- 数组的 `length` 属性，当新的元素添加到列表中时，其值会自动更新。类数组对象的不会
- 设置数组的 `length` 属性可以扩展或阶段数组
- 数组也是 `Array` 的实例，可以调用 `Array` 的方法，如 `push` 、`pop`

:::

即 `arguments` 对象不是一个 `Array`，它只是类似数组，但除了 `length` 属性和索引元素之外没有数组的任何属性。

可以使用 `for...in` 来遍历 `arguments` 这个类数组对象。

### 6. ajax\axios\fetch

::: info 参考答案

`ajax`：

- 局部刷新，无需重载整个页面
- 本身是针对 `MVC` 框架而生，多用于 `jQuery`，不符合现在 `MVVM` 的浪潮

`fetch`：

- 使用的是原生 `js`
- 只针对网络请求报错，对 400 、500都当成成功的请求，需要封装去处理
- 默认不会带 `cokkie`，需要添加配置项
- 兼容性差

`axios`：

- 基于 `ajax` 封装
- 为 `MVVM` 框架而生（ `vue` 、`react` ）
- 支持 `Promise API`
- 支持并发请求
- 支持 `request`和 `response`的拦截，请求拦截可以用于日志和权限等，相应拦截可以用于格式化等
- 自动转换 `JSON` 数据

:::
