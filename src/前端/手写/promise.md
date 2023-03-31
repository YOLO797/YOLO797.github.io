---
title: Promise
icon: page
date: 2023-03-31
category:
  - 前端
tag:
  - 前端
  - JavaScript
  - 手写代码系列
sticky: true
star: true
---

一个 `promise` 的状态必须为这三种状态之一：等待中（`pending`），完成了（`fulfilled`），拒绝了（`rejected`）。

一个 `promise` 必须提供一个 `then` 方法来接收它当前的完成值（`value`）或拒绝原因（`reason`）。

<!-- more -->

### 1.  `Promise` 使用

```javascript
let promise = new Pronmise((resolve, reject) => {
    resolve('success')
})

promise.then(value =>{
    console.log('Resolve:' + value)
}, reason =>{
    console.log('Reject:' + reason)
})
```



### 2.完成一个基本的`Promise`

#### 2.1 定义一个 `myPromise` 类

#### 2.2 `constructor` 方法

```javascript
class myPromise{
  constructor(excutor){
    excutor(resolve, reject)
  }
}
```

#### 2.3 类的最外层初始化状态

```javascript
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
```

#### 2.4 设置初始化状态

- 初始状态为 `pending`
- `resolve` 和 `reject` 都是函数，他们有参数，分别为 `value` 和 `reason` ，也需要初始化

```javascript
class myPromise{
  constructor(excutor){
    // 设置初始化状态
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    
    excutor(resolve, reject)
  }
}
module.exports = myPromise
```



#### 2.5 编写 `reslove` 、`reject` 方法

- 方案一：在 `cunstructor` 构造函数外，用类方法的形式来创建这两个函数。本质上是定义到了 `Promise` 的 `prototype` 上面，每一个 `Promise` 的实例都会继承同一个 `resolve` 和 `reject`

  :::note

  在 `constructor` 中调用 `resolve` 和 `reject` 时，需要通过 `bind` 来绑定 `this`，解决 `this` 指向问题

  :::

```javascript
class myPromise{
  constructor(excutor){
    // 设置初始化状态
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    
    // 将实例的 resolve 方法内的 this 指向当前实例对象
    // 将实例的 reject  方法内的 this 指向当前实例对象 
    excutor(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {}
  reject(reason) {}
}
module.exports = myPromise
```

- 方案二：在 `cunstructor` 构造函数中，每一次实例化时，都会在构造函数里重新声名 `resolve` 和 `reject` 函数

```javascript
class myPromise{
  constructor(excutor){
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    
    const resolve = (value) =>{
      if(this.status = PENDING){
        this.status = FULFILLED
        this.value = value
      }
    }
    
    const reject = (reason) =>{
      if(this.status = PENDING){
        this.status = REJECTED
        this.reason = reason
      }
    }
    
    excutor(resolve, reject)
  }
}
```



#### 2.6 编写 `then` 方法

写在 `constructor` 函数外面，接受两个回调参数：

- `onFulfilled` （成功的回调）：当状态为 `fulfilled` 时执行的代码
- `onRejected`  （失败在回调）：当状态变为 `rejected` 时执行的代码

```javascript
class myPromise{
  constructor(excutor){
    
  }
  
  then(onFulfilled, onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      onRejected(this.reason)
    }
  }
}
```



#### 2.7 捕获异常

如果只是上面的代码，会发现无法捕获到 `throw` 出来的错误：

`try{...}catch(e){...}`



```javascript
// 定义一个 myPromise
// 初始化状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'REJECTED'
class myPromise{
    construtor(exector){
        // 设置状态初始值
        this.status = PENDING
    	this.value = undefined
        this.reason = undefined
       
        // 编写 resolve rejecte 方法
        // 每次实例化时重新生成 resolve
        const resolve = (value) =>{
            if(this.status === PEDDING){
                this.status = FULFILLED
                this.value = value
            }
        }
        const reject = (reason) =>{
            if(this.status === PEDDING){
                this.status = REJECTED
                this.reason = reason
            }
        }
        
        // 捕获 exector 里面抛出的异常
        try{
            exector(resolve, reject) 
        } catch(e) {
            reject(e)
        }
    }
    
    // 编写 then方法
    then(onFulfilled, onRejected){
        if(this.status === FULFILLED){
			onFulfilled(this.value)
        }
        if(this.status === REJECTED){
			onRejected(this.reason)
        }
    }
}
module.exports = myPromise
```



### 3.处理 `Promise` 中的异步和多次调用

​		需要用到发布订阅模式，即将 `Promise.then` 里面的成功回调（或者失败回调）都**收集起来放到一个新数组中**，等到 `resolve()` 或者 `reject()` 执行的时候，再**依次去执行**数组里面的成功回调（或者失败回调）

```javascript
//完整代码
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class myPeomise{
  constructor(excutor){
    this.status = PENDING
    this.value = undefined
    this.reason =undefined
    
    // 收集所有成功的回调函数，即 resolve(value) 后出发的 onFulfilled
    this.onFulfilledCallbaks = []
    // 收集所有失败的回调函数，即 reject(reason) 后出发的 onRejected
    this.onRejectedCallbaks = []
    
    const resolve = (value) =>{
      if(this.status === PENDING){
        this.status === FULFILLED
        this.value = value
        
        // 发布过程
        // 处理异步的 resolve()
        this.onFulfilledCallbaks.forEach(fn => fn())
      }
    }
    
    const reject = (reason) =>{
      if(this.status === PENDING){
        this.status === REJECTED
        this.reason = reason
        
        // 发布过程
        // 处理异步的 reject()
        this.onRejectedCallbaks.forEach(fn => fn())
      }
    }
    
    try{
      excutor(resolve, reject)
    }catch(e){
      reject(e)
    }
  }
  
  then(onFulfilled, onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      onRejected(this.reason)
    }
    
    // 对 pending 状态的处理（异步时会进来）
    if(this.status === PENDING){
      // 订阅过程、
      // 采用箭头函数 push 进去，方便后边发布时，只需要遍历数组并直接执行每个元素就可以
      this.onFulfilledCallbaks.push(() => {
        onFulfilled(this.value)
      })
       this.onRejectedCallbaks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

module.exports = myPromise
```

### 4.原生 `promise` 链式调用的特性

- 通过 `return` 可以直接将结果给到下一个 `then`
- 通过新的 `peomise` 去 `resolve` 结果
- 在 `then` 中只要 `new` 了一个新的 `promise` ，哪怕有异步代码，也可以 `resolve` 结果给下一个 `then` 的 `onFulfilled` 回调
- 通过新的 `promise` 去 `reject` 时，可以 `reject` 结果给下一个 `then` 的 `onRejected` 回调
- `then`  走失败回调后，在走 `then`
  - 默认会 `return undefined` ；给下一个 `then` d  `onFulfilled` 回调
  - 即：即使走了 `onRejected` 回调，如果继续 `then` ，这条链会把失败的 **返回结果** 直接传给到下一个 `then` 的 `onFulfilled` 回调中去
- 在 `then` 中抛出错误异常时，如果下面还有 `then` ，一定会走到失败的 `onRejected` 回调函数中去
- 用 `catch ` 捕获异常情况：抛出异常后会找离它最近的失败的回调函数
  - 在 `then` 中抛出异常后，如果下面还有 `then` ，且**指定**了失败的回调函数，那么会走这个**失败的回调函数**
  - 在 `then` 中抛出异常后，如果下面还有 `then` ，且**没有指定**了失败的回调函数，那么会走 **`catch` 捕获**
- 如果 `catch` 里面 `return` 一个值，后面继续 `then`，那么还能继续走成功的回调
  - 因此 `catch` 在 `Promise` 的源码层面就相当于 `then` ，也遵循 `then` 的运行规则
