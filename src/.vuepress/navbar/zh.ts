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
          { text: 'JavaScript', link: 'javascript/深入/原型和原型链' },
          { text: 'ES6', link: 'es6/defer和async' }
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
      },
      {
        text: '优化',
        children: [
          { text: '网络优化', link: '优化/网络优化' },
          { text: '代码优化', link: '优化/代码优化' },
          { text: '框架优化', link: '优化/框架优化' }
        ]
      },
    ]
  },
  {
    text: '面试题',
    prefix: "/面试题/",
    children: [
      {
        text: 'JS',
        link: 'js'
      },
      {
        text: 'ES6',
        link: 'es6'
      },
      {
        text: 'Vue',
        link: 'Vue/Vue'
      },
      {
        text: '网络',
        link: '网络/HTTP'
      },
    ]
  },
  {
    text: '工程化',
    prefix: "/工程化/",
    children: [
      {
        text: '框架',
        children: [
          { text: 'Vue.js', link: '框架/vue/vue2.0/MVVM' },
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
