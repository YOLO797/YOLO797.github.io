---
title: VUE
icon: page
date: 2023-04-17
category:
  - 前端
tag:
  - 前端
  - VUE
  - 面试题
sticky: true
star: true
---

VUE2.0 \ VUE3.0

<!-- more -->

## 1. SPA单页面

单页面，仅在页面初始化时加载响应的 `HTML` 、`JS`、`CSS`。一旦页面加载完成后，`SPA` 不会因为用户的操作而重新加载或者跳转页面，而是利用路由机制实现 `HTML` 内容的变换，`UI` 交互，避免页面重新加载。

::: info 参考答案

**优点：**

- 用户体验好，快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染
- 相对服务器压力小
- 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理

**缺点：**

- 初次加载耗时多：为实现单页面应用功能及显示效果，需要在页面加载时将 `js`、`css`同时加载，部分页面按需加载
- `SEO` 难度大：所有的内容都在一个页面中动态替换显示

:::

**解决spa首屏加载过慢？**

加载慢的原因可能如下：

- 网络延迟
- 资源文件体积过大
- 资源重复发送请求加载
- 加载脚本时，渲染内容堵塞

::: info 常见优化方式

- 减小入口体积
- 静态资源本地缓存
- UI 框架按需加载
- 图片资源的压缩
- 组件重复打包
- 使用 SSR

:::

## 2. 数据的双向绑原理

::: info 参考答案

采用数据劫持+发布订阅模式方式。

分两个阶段：数据初始化阶段（数据监听、页面渲染），数据更新阶段

通过 `Observer` 对数据进行监听，通过 `Object.defineProperty` 转化为 `getter/setter`来监听所有属性，如果属性发生变化，通知订阅者 `Watcher`看是否需要更新

因为订阅者有很多个，所以需要 `Dep` 消息订阅器来专门收集这些订阅者，进行统一管理。

数据 `data` 变化 --> `Observer` 中的 `setter` 触发 `Dep.notify()` --> `Dep` 开始遍历所有的订阅者，对 `Watcher` 发送通知 --> 触发 `update()` --> `Watcher` 收到 `Dep`的通知 --> 相应视图更新

::: 

## 3. 为什么data属性是一个函数而不是一个对象？

::: info 参考答案

防止多个组件实例对象之间使用同一个 `data` 数据，产生数据污染。

采用函数的形式，每次都会返回一个新的 `data`

:::

## 4. 组件之间的通信方式

::: info 参考答案

- `props/$emit`：父子组件
- `ref` 与 `$parent/$children`：父子组件
- `EventBus( $emit/$on )`：任意
- `$attr/$listeners`：隔代组件
- `provide/inject`：任意
- `Vuex`：任意

:::

## 5. this.$nextTick

::: info 参考答案

在下次 `DOM` 更新循环结束后执行延迟回调。在修改该数据之后立即使用这个方法，获取更新后的 `DOM`

`vue` 在更新 `DOM` 时是异步执行的。当数据发生变化时， `vue` 将开启一个异步更新队列，视图需要等队列中的所有数据变化完成后，在统一进行更新。

:::

## 6. vue应该在哪个生命周期内发起请求

::: info 参考答案

可以在 `created`、`mounted`中进行调用，因为在这时候 `data` 已经创建

推荐在 `created` 中发起请求：

- 能够更快获取到服务器数据，减少页面 `loading` 时间
- 服务端渲染不支持 `beforeMount`、`mount`，所以放在 `created`  中有助于一致性

:::

## 7. vue页面级组件之间传值

::: info 参考答案

- 通过路由参数
- 本地缓存 `localStroage`
- `vuex`

:::

## 8. vue中使用token登录的具体流程

::: info 参考答案

1. 用户通过账户名和密码发送登录请求
2. 服务端对帐户的有效性进行验证
3. 验证成功后再利用 **密钥** 和 **加密算法** 做一个签名的 `token` 返回给客户端
4. 客户端本地存储 `token`，并在每次请求的 `header` 中带上 `token` 
5. 服务端验证 `token` ，有且 `token`没有过期就返回数据，无或 `token` 失效返回 401 状态码
6. 客户端一旦发现401 就重定向到登录页

:::

**如何利用 Axios实现携带token和401状态码判定？**

::: info 参考答案

利用 `Axios` 的请求/拦截响应。

使用 `Axios.interceptors.request.use` 进行请求拦截，判断 `localStroage` 是否有 `token`，有则在请求头里携带。

使用 `Axios.interceptors.response.use` 进行响应拦截，判断 `response.status` 是否为401，是则代表 `token` 失效，清空本地 `token`，跳转登录页。

:::

**如何监控路由跳转，并在没有token时跳转回登录页？**

::: info 参考答案

使用 `Vue-Router` 的全局路由守卫 `router.beforeEach(to, from, next)` 

如果用户访问的是不需要登录就能访问的页面（如 `to.path === '/login'`），直接跳转

否则判断本地是否有 `token`，有则调用 `next()`，无则 `next('/login')` 跳转至登录页

:::

## 9. 模板编译原理

::: info 参考答案

将 `template` 转化成一个 `javascript` 函数，浏览器通过执行这个函数渲染出对应的 `HTML` 元素，就可以让视图跑起来，这个转化过程，就是模板编译。

模板编译分为三个阶段：解析 `parse`，优化 `optimize`，生成 `generate`，最终生成可执行函数 `render`

- `parse`阶段：使用大量正则表达式对 `template` 字符串进行解析，将标签、指令、属性等转化为抽象语法树 `AST`
- `optimize`阶段：遍历 `AST`，找到其中的一些静态节点并标记，方便在页面重新渲染的时候进行 `diff` 比较时直接跳过这些静态节点，优化 `runtime` 的性能
- `generate`阶段：将最终的 `AST`转化为 `render` 函数字符串

:::

## 10. hash和history

::: info 参考答案

`hash` ：

- `url`展示上， 有 “#”
- `hash` 值的变化不会导致浏览器发出强求，所以不会刷新页面
- 刷新页面时，可以正常加载到 `hash` 值对应的页面
- 通过 `hashchange` 事件监听 `hash` 发生了哪些变化，然后根据变化来实现更新页面部分内容的操作

`history`：

- 刷新页面时，如果没有重定向路由的话，会返回 404
- 新增 `pushState()`、`replaceState()` 方法，该方法改变 `url`,但不会发起请求

:::

## 11. vue-router路由钩子函数？执行顺序？

::: info 参考答案

钩子函数：

- 全局守卫：`beforeEach`、`afterEach`
- 组件守卫：`beforeRouterLeave`、`beforeRouterUpdate`、`beforeRouterEnter`
- 独享守卫：`beferEnter`

完整的导航解析流程：

1. 触发导航
2. 失活的组件内调用 `beforeRouterLeave`
3. 调用 `beforeEach`
4. 在重用的组件内调用 `beforeRouterUpdate`
5. 在路由配置内 `beforeEnter`
6. 解析异步路由组件
7. 在被激活的组件内调用 `beforeRouterEnter`
8. 导航确认
9. `afterEach`
10. `DOM` 更新

:::

## 12. vue如何检测数组的变化

::: info 参考答案

`vue ` 将 `data` 中的数组进行了==原型链重写==，指向了自己定义的数组原型方法。这样当调用数组 `api` 时，可以通知 ==依赖更新==。如果数组中包含引用类型，会对数组中的引用类型 ==再次递归遍历==进行监控。这样就实现了监测数组变化。

**有两种情况无法监测到数组变化：**

- 利用索引 下标改变数组时
- 修改数组长度时

替代方案：

```js
vm.$set(items, index, newValue)
```

:::

## 13. 单项数据流

::: info 参考答案

数据总是从父组件传递到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据的修改。这样可以防止从子组件意外改变父组件的状态，从而导致你的应用的数据流向难以理解。

:::

## diff算法

## 性能优化

