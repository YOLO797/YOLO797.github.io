---
title: 实现new运算符
icon: page
date: 2023-04-03
category:
  - 前端
tag:
  - 前端
  - JavaScript
  - 手写代码系列
sticky: true
star: true
---

`new` 运算符用于创建一个自定义对象实例，或者具有构造函数的内置对象的实例。

<!-- more -->

### 1. 实现思路

- 步骤一：创建构造函数的实例对象，将这个对象的 `__proto__` 指向构造函数的 `prototype`
- 步骤二：将构造函数当作普通函数执行，并改变 `this` 的指向
- 步骤三：分析构造函数的返回值
  - 返回值为 `object` 或者 `function` 类型，直接作为 `new` 方法的返回值返回
  - 否则 返回 构造函数的实例对象

### 2. 手写实现

```javascript
// Func ：要操作的构造函数（最后要创建这个构造函数的实例）
// args ：存储未来传递给构造函数 Func 的实参

function myNew(Func, ...args){
  // 1. 创建一个新的对象，将__proto__指向 Func.prototype
  let instance = Object.create(Func.prototype)
  // 2. 执行构造函数Func
  let result = Func.apply(instance, args)
  // 3. 判断结果
  if(result !== null && /^(object|function)$/.test(typeof result)){
    return result
  }
  return instance
}
```



### 3. 测试用例

```javascript
function Person(name, age){
  this.name = name
  this.age = age
}

const p1 = new Person('zhangsan', 18)
console.log('new:', p1)      // new: Person {name: 'zhangsan', age: 18}

const p2 = myNew(Person, 'zhangsan', 18)
console.log('myNew:', p2)    // myNew: Person {name: 'zhangsan', age: 18}
```



