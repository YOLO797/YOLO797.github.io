---
title: mixin
icon: page
date: 2023-04-21
category:
  - 前端
tag:
  - 前端
  - Vue
  - 框架系列
sticky: true
star: true
---

MVVM和MVC的区别

<!-- more -->

### 1. mixin 混入

本质就是一个 `js` 对象，它可以包含我们组件中任意功能选项，如 `data`、`components`、`methods`、`created`、`computed` 等

我们只要将公用的功能以对象的形式传入 `mixins` 选项重，当组件使用 `mixins` 对象时所有 `mixins` 对象的选项都将被混入该组件本身的选项中来

### 2. 全局混入

通过 `Vue.mixin()` 进行全局的混入

```js
Vue.mixin({
  created: function(){
    console.log("全局混入")
  }
})
```



### 3. 局部混入

```js
var myMixin = {
  create(){
    this.hello
  },
  methods:{
    hello(){
      console.log("hello")
    }
	}
}
```

通过 `mixins` 属性在组件内调用 `minix` 对象

```js
mixins:[myMixin]
```

