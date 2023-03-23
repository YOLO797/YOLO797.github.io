import{_ as f,W as v,X as w,Y as A,$ as e,a0 as n,Z as t,a2 as o,a1 as r,C as a}from"./framework-b609eea8.js";const E={},x=e("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),B=e("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),j=e("h2",{id:"markdown-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),n(" Markdown 介绍")],-1),V={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"markdown-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),n(" Markdown 配置")],-1),U=e("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),C={class:"hint-container info"},I=e("p",{class:"hint-container-title"},"相关信息",-1),J={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"markdown-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),n(" Markdown 扩展")],-1),P={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"vuepress-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),n(" VuePress 扩展")],-1),G=e("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),X={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},Z=e("h3",{id:"主题扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),n(" 主题扩展")],-1),Y={href:"https://theme-hope.vuejs.press/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"vuepress-plugin-md-enhance",-1),W=r(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),S={href:"https://theme-hope.vuejs.press/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},T=e("h4",{id:"代码块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),n(" 代码块")],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(" i "),e("span",{class:"token parameter variable"},"-D"),n(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Q={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},O=e("h4",{id:"上下角标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),n(" 上下角标")],-1),R=e("p",null,"19^th^ H~2~O",-1),N={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},$=e("h4",{id:"自定义对齐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),n(" 自定义对齐")],-1),ee=e("div",{style:{"text-align":"center"}},[e("p",null,"我是居中的")],-1),ne=e("div",{style:{"text-align":"right"}},[e("p",null,"我在右对齐")],-1),te={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},se=e("h4",{id:"attrs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),n(" Attrs")],-1),ae=e("p",null,[n("一个拥有 ID 的 "),e("strong",{id:"word"},"单词"),n("。")],-1),oe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},re=r('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),le={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},ie=e("h4",{id:"标记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),n(" 标记")],-1),ce=e("p",null,[n("你可以标记 "),e("mark",null,"重要的内容"),n(" 。")],-1),he={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},de=e("h4",{id:"任务列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),n(" 任务列表")],-1),pe={class:"task-list-container"},ue=r('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),me={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},ke=e("h3",{id:"图片增强",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),n(" 图片增强")],-1),_e=e("p",null,"支持为图片设置颜色模式和大小",-1),ge={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},be=e("h4",{id:"图表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),n(" 图表")],-1),fe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},ve=e("h4",{id:"echarts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),n(" Echarts")],-1),we={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},Ae=e("h4",{id:"流程图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),n(" 流程图")],-1),Ee={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},xe=e("h4",{id:"mermaid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),n(" Mermaid")],-1),Be={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},je=e("h4",{id:"tex-语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),n(" Tex 语法")],-1),Ve=e("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),ze={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},ye=e("h4",{id:"导入文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),n(" 导入文件")],-1),Ue=e("p",null,"@include(./README.md{11-17})",-1),Ce={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Ie=e("h4",{id:"代码演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),n(" 代码演示")],-1),Je=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("h1")]),e("span",{class:"token punctuation"},">")]),n("VuePress Theme Hope"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("h1")]),e("span",{class:"token punctuation"},">")]),n(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("p")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("span")]),n(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("very"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),n("非常"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("span")]),e("span",{class:"token punctuation"},">")]),n("强大!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("p")]),e("span",{class:"token punctuation"},">")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Me=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[n("document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"#very"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"click"'),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"=>"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token function"},"alert"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"非常强大"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Pe=e("div",{class:"language-css line-numbers-mode","data-ext":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},"span"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),n(" red"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Fe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},De=e("h4",{id:"样式化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),n(" 样式化")],-1),Ge=e("p",null,[n("向 Mr.Hope 捐赠一杯咖啡。 "),e("em",null,"Recommended")],-1),Xe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Ze=e("h4",{id:"交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),n(" 交互演示")],-1),Ye={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ke=e("h4",{id:"vue-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),n(" Vue 交互演示")],-1),We={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Se=e("h4",{id:"幻灯片",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),n(" 幻灯片")],-1),Te={href:"https://theme-hope.vuejs.press/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Le=r('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function qe(He,Qe){const s=a("ExternalLinkIcon"),h=a("CodeTabs"),d=a("ChartJS"),p=a("ECharts"),u=a("FlowChart"),m=a("Mermaid"),k=a("CodeDemo"),_=a("Playground"),g=a("VuePlayground"),b=a("Presentation");return v(),w("div",null,[x,B,A(" more "),j,e("p",null,[n("如果你是一个新手，还不会编写 Markdown，请先阅读 "),e("a",V,[n("Markdown 介绍"),t(s)]),n(" 和 "),e("a",z,[n("Markdown 演示"),t(s)]),n("。")]),y,U,e("div",C,[I,e("p",null,[n("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),e("a",J,[n("Frontmatter 介绍"),t(s)]),n("。")])]),M,e("p",null,[n("VuePress 会使用 "),e("a",P,[n("markdown-it"),t(s)]),n(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),e("a",F,[n("语法扩展"),t(s)]),n(" 。")]),D,G,e("p",null,[n("关于这些扩展，请阅读 "),e("a",X,[n("VuePress 中的 Markdown 扩展"),t(s)]),n("。")]),Z,e("p",null,[n("通过 "),e("a",Y,[K,t(s)]),n("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),W,e("ul",null,[e("li",null,[e("a",S,[n("查看详情"),t(s)])])]),T,t(h,{id:"89",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2},{tab0:o(({title:l,value:i,isActive:c})=>[L]),tab1:o(({title:l,value:i,isActive:c})=>[q]),tab2:o(({title:l,value:i,isActive:c})=>[H]),_:1}),e("ul",null,[e("li",null,[e("a",Q,[n("查看详情"),t(s)])])]),O,R,e("ul",null,[e("li",null,[e("a",N,[n("查看详情"),t(s)])])]),$,ee,ne,e("ul",null,[e("li",null,[e("a",te,[n("查看详情"),t(s)])])]),se,ae,e("ul",null,[e("li",null,[e("a",oe,[n("查看详情"),t(s)])])]),re,e("ul",null,[e("li",null,[e("a",le,[n("查看详情"),t(s)])])]),ie,ce,e("ul",null,[e("li",null,[e("a",he,[n("查看详情"),t(s)])])]),de,e("ul",pe,[ue,e("li",null,[e("p",null,[e("a",me,[n("查看详情"),t(s)])])])]),ke,_e,e("ul",null,[e("li",null,[e("a",ge,[n("查看详情"),t(s)])])]),be,t(d,{id:"chart-215",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),e("ul",null,[e("li",null,[e("a",fe,[n("查看详情"),t(s)])])]),ve,t(p,{id:"echarts-228",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"}),e("ul",null,[e("li",null,[e("a",we,[n("查看详情"),t(s)])])]),Ae,t(u,{id:"flowchart-241",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),e("ul",null,[e("li",null,[e("a",Ee,[n("查看详情"),t(s)])])]),xe,t(m,{id:"mermaid-252",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),e("ul",null,[e("li",null,[e("a",Be,[n("查看详情"),t(s)])])]),je,Ve,e("ul",null,[e("li",null,[e("a",ze,[n("查看详情"),t(s)])])]),ye,Ue,e("ul",null,[e("li",null,[e("a",Ce,[n("查看详情"),t(s)])])]),Ie,t(k,{id:"code-demo-289",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:o(()=>[Je,Me,Pe]),_:1}),e("ul",null,[e("li",null,[e("a",Fe,[n("查看详情"),t(s)])])]),De,Ge,e("ul",null,[e("li",null,[e("a",Xe,[n("查看详情"),t(s)])])]),Ze,t(_,{key:"1eb9053f",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),e("ul",null,[e("li",null,[e("a",Ye,[n("查看详情"),t(s)])])]),Ke,t(g,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"3284125a",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),e("ul",null,[e("li",null,[e("a",We,[n("查看详情"),t(s)])])]),Se,t(b,{id:"presentation-347",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),e("ul",null,[e("li",null,[e("a",Te,[n("查看详情"),t(s)])])]),Le])}const Re=f(E,[["render",qe],["__file","markdown.html.vue"]]);export{Re as default};