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
          ],
        },
        {
          text: "专题",
          icon: "discover",
          prefix: "专题/",
          collapsible: true,
          children: ["数组遍历", "对象遍历", "数组去重", "继承"],
        },
      ],
    },
  ],
  "/前端/": [
    {
      text: "",
      icon: "discover",
      children: [
        {
          text: "手写",
          icon: "discover",
          prefix: "手写/",
          collapsible: true,
          children: ["防抖节流", "深浅拷贝", "call和apply和bind", "promise"],
        },
      ],
    },
  ],
})
