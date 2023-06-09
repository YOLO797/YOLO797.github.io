import{_ as n,W as s,X as a,Y as e,$ as t,a1 as o}from"./framework-b609eea8.js";const p={},c=t("p",null,"实例对象（object）都有一个私有属性（__ proto __）指向它的构造函数的原型对象（prototype），该原型对象也有自己的proto，层层向上查找，直到找到一个对象的原型为 null ，结束。",-1),l=o(`<h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h2><ul><li><p>装箱：把基本数据类型转化为对应的引用数据类型的操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span>  <span class="token comment">// number 类型</span>
<span class="token keyword">var</span> objNum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>  <span class="token comment">// onject类型 ===&gt; 装箱</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> objNum<span class="token punctuation">)</span>    <span class="token comment">// object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拆箱：将引用类型对象转换为对应的值类型对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用 valueOf() 方法</span>
<span class="token keyword">var</span> objNum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> objNum<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>宿主对象</p></li><li><p>内置对象</p><ul><li>固有对象</li><li>原生对象</li><li></li></ul></li></ul>`,2);function i(u,r){return s(),a("div",null,[c,e(" more "),l])}const k=n(p,[["render",i],["__file","装箱和拆箱.html.vue"]]);export{k as default};
