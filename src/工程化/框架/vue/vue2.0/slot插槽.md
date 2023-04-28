---
title: slot插槽
icon: page
date: 2023-04-18
category:
  - 前端
tag:
  - 前端
  - Vue
  - 框架系列
sticky: true
star: true
---

默认插槽、具名插槽、作用域插槽

<!-- more -->

### 1. 默认插槽

子组件用 `<slot>` 标签来确定渲染的位置，标签里面可以放 `DOM` 结构，当父组件使用的时候没有往插槽里面传内容时，会使用默认插槽的内容显示在页面。

```vue
// child.vue
<template>
	<slot>
    <p>插槽后备的内容</p>
  </slot>
</template>

// parent.vue
<Child>
  <div>默认插槽</div>
</Child>
```

### 2. 具名插槽

子组件用 `name` 属性来表示插槽的名字，不传为默认插槽

父组件中使用时，在默认插槽的基础上加上 `v-slot` 属性，值为子组件插槽中 `name` 属性值

```vue
// child.vue
<div>
  <header>
    <slot name="header"></slot>
  </header>
  
  <main>
    <slot></slot>
  </main>
  
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>


// parent.vue
<Child>
  <template v-slot:header>header</template>
  <p>content</p>
  <template v-slot:footer>footer</template>
</Child>
```

### 3. 作用域插槽

子组件在作用域上绑定属性来将子组件的信息传给父组件使用，这些属性会被挂在父组件 `v-slot` 接受的对象上

父组件中使用时通过 `v-slot(#)` 获取子组件的信息，在内容中使用

```vue
// child.vue
<div>
  <slot :userText='user'></slot>
</div>

data(){
	return{
		user:{
			firstName: 'aa',
			lastName: 'bb'
		}
	}
}

// father.vue
<div>
  <child v-slot:default="slotProps">
    {{ slotProps.userText.firstName }}     // aa
  </child>
</div>

// 只有一个 为默认插槽时 可省略 :default
<div>
  <child v-slot="{userText}">
    {{ userText.firstName }}  
  </child>
</div>
```

### 4. 动态插槽名

```vue
<child>
  <template v-slot:[dynamicSlotName]>
  </template>
</child>

<child>
  <template #[dynamicSlotName]>
  </template>
</child>
```

