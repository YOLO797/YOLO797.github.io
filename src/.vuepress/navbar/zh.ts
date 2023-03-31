import { navbar } from "vuepress-theme-hope"

export const zhNavbar = navbar([
  "/",
  {
    text: '前端',
    prefix: "/前端/",
    children: [
      {
        text: '基础',
        children: [
          // { text: 'HTML', link: '' },
          // { text: 'CSS', link: '' },
          { text: 'JavaScript', link: 'javascript/深入/原型和原型链' }
        ]
      },
      {
        text: '进阶',
        children: [
          // { text: 'ECMAScript 6+', link: '' },
          { text: 'TypeScript', link: 'typescript/基础/ts' },
          { text: '网络相关', link: 'network/http' }
        ]
      },
      {
        text: '手写',
        children: [
          { text: 'JS 手写', link: '手写/防抖节流' }
        ]
      }
    ]
  },
  {
    text: '工程化',
    prefix: "/工程化/",
    children: [
      {
        text: '框架',
        children: [
          { text: 'Vue.js', link: 'vue/vue3' },
          // { text: 'React', link: '' },
        ]
      },
      // {
      //   text: '工具',
      //   children: [
      //     { text: 'Webpack', link: '' },
      //     { text: 'Vite', link: '' }
      //   ]
      // }
    ]
  },
])
