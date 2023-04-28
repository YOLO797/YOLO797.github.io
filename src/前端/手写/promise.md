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

## 1.  Promise使用

- `Promise` 初始状态是 `pedding`
- `Promise` 里面没有执行 `resolve()`、`reject()`、`throw` 的话，这个 `promise` 的状态也是 `pedding`，在这之后的 `then()` 也不会执行
- 必须给 `Promise` 对象传入一个执行函数，否则会报错

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



## 2. 一个基本的Promise

### 2.1 定义一个myPromise类

### 2.2 constructor方法

```javascript
class myPromise{
  constructor(excutor){
    excutor(resolve, reject)
  }
}
```

### 2.3 类的最外层初始化状态

```javascript
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
```

### 2.4 设置初始化状态

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



### 2.5 编写reslove()/reject()

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



### 2.6 编写then()

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



### 2.7 捕获异常

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



## 3. Promise中的异步/多次调用

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

## 4. Promise链式调用

### 4.1 链式调用的特性

- 通过 `return` 可以直接将结果给到下一个 `then`

  ```javascript
  let promise = new Promise((resolve,reject) => {
    resolve('First resolve')
  })
  promise.then(value => {
    return value
  })
  .then(value => {
    console.log(value)   // First resolve
  })
  ```

- 通过新的 `peomise` 去 `resolve` 结果

  ```javascript
  let promise = new Promise((resolve,reject) => {
    resolve('First resolve')
  })
  promise.then(value => {
    return value
  })
  .then(value => {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  })
  .then(value => {
    console.log(value)   // First resolve
  })
  ```

- 在 `then` 中只要 `new` 了一个新的 `promise` ，哪怕有异步代码，也可以 `resolve` 结果给下一个 `then` 的 `onFulfilled` 回调

  ```javascript
  let promise = new Promise((resolve,reject) => {
    resolve('First resolve')
  })
  promise.then(value => {
    return value
  })
  .then(value => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(value)
      },2000)
    })
  })
  .then(value => {
    console.log(value)   // 两秒后打印 First resolve
  })
  ```

- 通过新的 `promise` 去 `reject` 时，可以 `reject` 结果给下一个 `then` 的 `onRejected` 回调

  ```javascript
  let promise = new Promise((resolve,reject) => {
    resolve('First resolve')
  })
  promise.then(value => {
    return value
  })
  .then(value => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        reject('Error')
      },2000)
    })
  })
  .then(value => {
    console.log(value)
  },reason => {
    console.log('Reject:'+reason)   // 两秒后打印 “Reject:Error”
  })
  ```

- `then`  走失败回调后，在走 `then`
  - 默认会 `return undefined` ；给下一个 `then` d  `onFulfilled` 回调
  - 即：即使走了 `onRejected` 回调，如果继续 `then` ，这条链会把失败的 **返回结果** 直接传给到下一个 `then` 的 `onFulfilled` 回调中去
  
  ```javascript
  let promise = new Promise((resolve,reject) => {
    resolve('First resolve')
  })
  promise.then(value => {
    return value
  })
  .then(value => {
    return new Promise((resolve, reject) => {
      reject('Error')
    })
  })
  .then(value => {
    console.log(value)
  },reason => {
    console.log('Reject:'+reason)   // Reject:Error
  })
  .then(value => {
    console.log('失败后，下一个then的onfulfilled：'+ value) //失败后，下一个then的onfulfilled：undefined
  },reason => {
    console.log('失败后，下一个then的onRejected：'+ reason)
  })
  ```
  
  
  
- 在 `then` 中抛出错误异常时，如果下面还有 `then` ，一定会走到失败的 `onRejected` 回调函数中去

  ```javascript
  let promise = new Promise((resolve,reject) => {
    resolve('First resolve')
  })
  promise.then(value => {
    return value
  })
  .then(value => {
    throw new Error('throw error')
  })
  .then(value => {
    console.log('抛出异常后，下一个then的onfulfilled：'+ value) 
  },reason => {
    console.log('抛出异常后，下一个then的onRejected：'+ reason) //抛出异常后，下一个then的onRejected：throw error
  })
  ```

- 用 `catch ` 捕获异常情况：抛出异常后会找离它最近的失败的回调函数
  - 在 `then` 中抛出异常后，如果下面还有 `then` ，且**指定**了失败的回调函数，那么会走这个**失败的回调函数**
  - 在 `then` 中抛出异常后，如果下面还有 `then` ，且**没有指定**了失败的回调函数，那么会走 **`catch` 捕获**
  
- 如果 `catch` 里面 `return` 一个值，后面继续 `then`，那么还能继续走成功的回调
  - 因此 `catch` 在 `Promise` 的源码层面就相当于 `then` ，也遵循 `then` 的运行规则

### 4.2 链式调用

- **`then`方法返回一个新的`Promise`**

- **新的`Promise`对象的回调函数返回值为x**

- **`then`方法内部异常捕获**

- **`x`值的处理**

  新的 `promise` 返回的 `x` 值有可能是普通值，或者是一个 `Promise` 对象，需要一个专门处理 `x` 值的函数（`resolvePromise`）

  - `x`为普通值：通过 `Promise.resolve()` 方法转换为 `Promise` 对象再 `return ` 出去
  - `x`为 `Promise` 对象，直接 `return`

- **用异步实现事件循环顺序**

  - 如果不包裹，`let promise2 = new myPromise((resolve,reject)=>{})` 函数以同步的方式进行，其中的 `resolvePromise` 提前使用到了 `promise2` 这个变量。但此时 `new myPromise` 的过程还没有执行完，是拿不到 `promise2`，会报引用错误
  - `resolvePromise()`，函数必须等 `let x = onFulfilled(this.value)`函数运行完，才能执行

```javascript
class myPromise{
  constructor(excutor){
    
  }
  then(onFulfilled, onRejected){
    // 返回一个新的Promise
    let promise2 = new myPromise((resolve, reject) => {
      if(this.status === FULFILLED){
        setTimeout(()=>{
          try{
            // 新的Promise对象的回调函数返回值为x
            let x = onFulfilled(this.value)
            // x值的处理
            resolvePromise(promise2, x, resolve, reject)
          }catech(e){
            reject(e)
          }
        },0)
      }
      if(this.status === REJECTED){
        setTimeout(()=>{
          try{
            // 新的Promise对象的回调函数返回值为x
            let x = onFulfilled(this.reason)
            // x值的处理
            resolvePromise(promise2, x, resolve, reject)
          }catech(e){
            reject(e)
          }
        },0)
      }
      if(this.status === PENDING){
        this.onFulfilledCallbaks.push(() => {
          try{
            // 新的Promise对象的回调函数返回值为x
            let x = onFulfilled(this.value)
            // x值的处理
          	resolvePromise(promise2, x, resolve, reject)
          }catech(e){
            reject(e)
          }
        })
        this.onRejectedCallbaks.push(() => {
          try{
            // 新的Promise对象的回调函数返回值为x
            let x = onRejected(this.reason)
            // x值的处理
          	resolvePromise(promise2, x, resolve, reject)
          }catech(e){
            reject(e)
          }
        })
      }
    })
    // 返回promise2
    return promise2
  }
}
```



### 4.3 resolvePromise()

`resolvePromise(promise2, x, resolve, reject)`

- `promise2` 和 `x` 指向同一对象时，以 `TypeError` 为由拒绝执行，会导致循环引用报错
- 如果 `x` 不是对象或者函数时：直接 `resolve(x)`
- 如果 `x` 是对象或者函数时：
  - 是 `Promise` 对象时，它一定有 `then()`
    - `then()` 里面是函数时，继续递归 `resolvePromise`
    - 否则， `resolve(x)`
  - 不是 `Promise` 对象时：直接 `resolve(x)`

```javascript
function resolvePromise(promise2, x, resolve, reject){
  if(promise2 === x){
    return reject(new TypeError('Chaining cycle detected for promise #<MyPromise>'))
  }
  
  if((typeof x === 'object' && x !== null) || (typeof x === 'function')){
    try{
      
      let then = x.then
      if(typeof then === 'function'){
        
        then.call(x, y => {
          resolvePromise(promise2, y, resolve, reject)
        }, r =>{
          reject(r)
        })
      }else{
        resolve(x)
      }
      
    }catch(e){
      reject(e)
    }
  }else{
    resolve(x)
  }
}
```

## 5. 其他扩展方法

### 5.1 Promise.resolve()

- 如果传入的 `value` 是一个 `promise` ，则直接返回 `value`
- 如果这个值是 `thenable`（即带有 `then` 方法），返回的 `promise` 会跟随这个 `thenable` 的对象，采用它的最终状态
- 否则 将直接 执行 `resolve()`

方法一：

```javascript
class myPromise{
  constructor(excutor){
    // ...
  }
  then(onFulfilled, onRejected){
    // ...
  }
  
  static resolve(value){
    // 如果这个值是一个 promise，返回这个 promise
    if(value instanceof myPromise){
      return value
    }else if(value instanceof Object && 'then' in value){
      // 如果这个值是 thenable
      return new myPromise((resolve, reject) => {
        value.then(resolve, reject)
      })
    }
    
    否则返回的 promise 将以此值完成，即以此值执行 resolve()
    return new myPromise(resolve => resolve(value))
  }
}

function resolvePromise(promise2, x, resolve, reject){
  // ...
}

moudle.exports = myPromise
```

方法二：

```javascript
class myPromise{
  // ...
}
function resolvePromise(promise2, x, resolve, reject){
  // ...
}
myPromise.resolve = function(value){
  if(value instanceof myPromise){
    return value
  }else{
    if(value instanceof Object && 'then' in value){
      return new myPromise((resolve, reject) => {
        value.then(resolve, reject)
      })
    }
  }
  return new myPromise((resolve, reject) => {
    resolve(value)
  })
}
```



### 5.2 Promise.reject()

方法一：

```javascript
class myPromise{
  constructor(excutor){
    // ...
  }
  then(onFulfilled, onRejected){
    // ...
  }
  
  static reject(reason){
    return new myPromise((resolve, reject) => {
      reject(reason)
    })
  }  
}
function resolvePromise(promise2, x, resolve, reject){
  // ...
}

moudle.exports = myPromise
```

方法二：

```javascript
class myPromise{
  // ...
}
function resolvePromise(promise2, x, resolve, reject){
  // ...
}
myPromise.reject = function(reason){
  return new myPromise((resolve, reject) => {
    reject(reason)
  })
}
```



### 5.3 Promise.all()

```javascript
class myPromise{
  constructor(excutor){
    // ...
  }
  then(onFulfilled, onRejected){
    // ...
  }
  
  static all(promises){
    return new myPromise((resolve, reject) => {
      if(Array.isArray(promises)){
        let result = []
        let count = 0
        
        if(promise.length === 0){
          return resolve(promises)
        }
        
        promises.forEach((item, index) => {
          myPromise.resolve(item).then(
          	value => {
              count++
              // 每个promise执行的结果存储在result中
              result[index] = value
              // Promise.all 等待所有都完成（或第一个失败）
              count === promises.length && resolve(result)
            },
            reason => {
              reject(reason)
            }
          )
        })
        
      }else{
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
```



### 5.4 Promise.race()

```javascript
class myPromise{
  constructor(excutor){
    // ...
  }
  then(onFulfilled, onRejected){
    // ...
  }
  
  static race(promises){
    return new myPromise((resolve, reject) => {
      if(Array.isArray(promises)){
        if(promises.length > 0){
          promises.forEach(item => {
            myPromise.resolve(item).then(resolve, reject)
          })
        }
      }else{
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }
}
```

### 5.5 Promise.finally

`finally()` 方法在 `promise` 结束时，无论结果是 `fulfilled` 还是 `rejected` ，都会执行指定的回调函数。

由于无法知道 `promise` 的最终状态，所以 `finally` 的回调函数中不接收任何参数。它仅用于无论最终执行结果如何都要执行的情况。

```javascript
class myPromise{
  constructor(excutor){}
  then(onFulfilled, onRejexcted){}
  
  finally(callBack){
    return this.then(callBack, callBack)
  }
}
```

### 5.6 Promise.catch

`catch()` 方法返回一个 `Promise`，并且处理拒绝的情况。

它的行为与调用 `Promise.prototype.then(undefined,onRejected)` 相同。

```javascript
class myPromise{
  ...
  then(onFulfilled, onRejected){
    ...
  }
  catch(onRejected){
    return this.then(undefined, onRejected)
  }
}
```