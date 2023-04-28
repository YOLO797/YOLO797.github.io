import{_ as n,W as s,X as a,Y as e,$ as t,a1 as c}from"./framework-b609eea8.js";const o={},i=t("p",null,"MVVM和MVC的区别",-1),p=c(`<h3 id="_1-mixin-混入" tabindex="-1"><a class="header-anchor" href="#_1-mixin-混入" aria-hidden="true">#</a> 1. mixin 混入</h3><p>本质就是一个 <code>js</code> 对象，它可以包含我们组件中任意功能选项，如 <code>data</code>、<code>components</code>、<code>methods</code>、<code>created</code>、<code>computed</code> 等</p><p>我们只要将公用的功能以对象的形式传入 <code>mixins</code> 选项重，当组件使用 <code>mixins</code> 对象时所有 <code>mixins</code> 对象的选项都将被混入该组件本身的选项中来</p><h3 id="_2-全局混入" tabindex="-1"><a class="header-anchor" href="#_2-全局混入" aria-hidden="true">#</a> 2. 全局混入</h3><p>通过 <code>Vue.mixin()</code> 进行全局的混入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;全局混入&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-局部混入" tabindex="-1"><a class="header-anchor" href="#_3-局部混入" aria-hidden="true">#</a> 3. 局部混入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hello
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>mixins</code> 属性在组件内调用 <code>minix</code> 对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function l(d,u){return s(),a("div",null,[i,e(" more "),p])}const v=n(o,[["render",l],["__file","mixin.html.vue"]]);export{v as default};
