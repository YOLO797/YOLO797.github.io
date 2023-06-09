import { sidebar } from "vuepress-theme-hope"

export const zhSidebar = sidebar({
  // "/zh/": [
  //   "",
  //   "slides",
  // ],
  "/前端/javascript/": [
    {
      text: "javascript",
      icon: "discover",
      children: [
        {
          text: "深入",
          icon: "discover",
          prefix: "深入/",
          collapsible: true,
          children: [
            "原型和原型链",
            "执行上下文",
            "垃圾回收",
            "闭包",
            "事件循环机制",
            "call和apply和bind",
            "函数式编程",
            "观察者模式和发布订阅模式"
          ],
        },
        {
          text: "专题",
          icon: "discover",
          prefix: "专题/",
          collapsible: true,
          children: ["数组遍历", "对象遍历", "数组去重","继承", "类型判断"],
        },
      ],
    },
  ],
  "/前端/es6/": [
    {
      text: "",
      icon: "discover",
      children: [
        {
          text: "ES6",
          icon: "discover",
          // prefix: "手写/",
          collapsible: true,
          children: [
            "defer和async",
            "模块加载",
            
          ],
        },
      ],
    },
  ],
  "/前端/network/": [
    {
      text: "",
      icon: "discover",
      children: [
        {
          text: "网络相关",
          icon: "discover",
          collapsible: true,
          children: [
            "http",
            "websocket",
          ],
        },
      ],
    },
  ],
  "/前端/手写/": [
    {
      text: "",
      icon: "discover",
      children: [
        {
          text: "手写",
          icon: "discover",
          // prefix: "手写/",
          collapsible: true,
          children: [
            "防抖节流",
            "深浅拷贝",
            "call和apply和bind",
            "promise",
            "实现new运算符",
          ],
        },
      ],
    },
  ],
  "/工程化/框架/": [
    {
      text: "",
      icon: "discover",
      prefix: "vue/",
      children: [
        {
          text: "Vue2.0",
          icon: "discover",
          prefix: "vue2.0/",
          collapsible: true,
          children: [
            "MVVM",
            "生命周期",
            "双向绑定",
            "组件通信",
            "自定义指令",
            "diff算法",
            "slot插槽",
            "vue路由",
            "mixin"
          ],
        },
        {
          text: "Vue3.0",
          icon: "discover",
          prefix: "vue3.0/",
          collapsible: true,
          children: [
            "生命周期",
            "响应式原理",
            "setup",
            "组合API",
            "指令和组件",
            "组件通讯",
            "hooks"
          ],
        },
        {
          text: "性能优化",
          icon: "discover",
          prefix: "性能优化/",
          collapsible: true,
          children: [
            "代码层面",
            "webpack配置层面",
            "基础web技术层面",
          ],
        },
      ],
    },
  ],
})
