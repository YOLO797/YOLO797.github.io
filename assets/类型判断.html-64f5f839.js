import{_ as n,W as s,X as a,Y as t,a1 as e}from"./framework-b609eea8.js";const o={},c=e(`<h3 id="_1-typeof" tabindex="-1"><a class="header-anchor" href="#_1-typeof" aria-hidden="true">#</a> 1. typeof</h3><p><code>typeof A</code> 直接返回类型结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>JS</code> 共6种基本类型：<code>Undefined</code>、<strong><code>Null</code></strong> 、<code>String</code>、<code>Boolean</code>、<code>Number</code>、<code>Object</code></p><p><code>typeof</code> 判断结果返回：<code>undefined</code>、<strong><code>object</code></strong>、<code>string</code>、<code>boolean</code>、<code>number</code>、<code>object</code></p><p><code>Null</code> 和 <code>Object</code> 都返回了 <code>object</code> 字符串</p><div class="hint-container note"><p class="hint-container-title">注</p><p><code>typeof</code> 判断引用类型数据时，除了 <code>function</code> 会被输出 <code>function</code>，其余都输出<code>object</code></p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span>  <span class="token comment">// function</span>

<span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reeor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> date<span class="token punctuation">)</span>     <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> error<span class="token punctuation">)</span>    <span class="token comment">// object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-instanceof" tabindex="-1"><a class="header-anchor" href="#_2-instanceof" aria-hidden="true">#</a> 2. instanceof</h3><p><code>instanceof</code> 用于检测构造函数的 <code>prototype</code> 属性是否出现在某个实例对象的原型链上</p><p>使用方法：<code>Object instanceof contructor</code> 返回 <code>treu</code> 或 <code>false</code></p><p>构造函数 通过 <code>new</code> 一个实例对象， <code>instanceof</code> 能判断这个对象是否是之前那个构造函数生成的对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Car</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> benz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>benz <span class="token keyword">instanceof</span> <span class="token class-name">Car</span><span class="token punctuation">)</span>    <span class="token comment">// true</span>

<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span>    <span class="token comment">// true</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span>    <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typeof-和-instanceof-区别" tabindex="-1"><a class="header-anchor" href="#typeof-和-instanceof-区别" aria-hidden="true">#</a> <code>typeof</code> 和 <code>instanceof</code> 区别</h4><p><code>typeof</code> 和 <code>instanceof</code> 都是判断数据类型的方法，区别如下：</p><div class="hint-container info"><p class="hint-container-title">参考答案</p><ul><li><code>typeof</code> 会返回一个变量的基本类型，<code>instanceof</code> 返回的是一个布尔值</li><li><code>instanceof</code> 可以准确的判断复杂引用数据类型，但不能正确判断基础数据类型</li><li><code>typeof</code> 可以判断基本数据类型（ <code>null</code> 除外 ），但是引用数据类型中，除了 <code>function</code> 外，其他都会返回<code>object</code></li></ul></div><h3 id="_3-object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#_3-object-prototype-tostring" aria-hidden="true">#</a> 3. object.prototype.toString</h3><p>检测数据类型，调用该方法，统一返回调用格式为 <code>[Obecct XXX]</code> 的字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>                     <span class="token comment">// [object object]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>                <span class="token comment">// [object object]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>                 <span class="token comment">// [object Number]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>               <span class="token comment">// [object String]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>              <span class="token comment">// [object Boolean]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>      <span class="token comment">// [object Function]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>              <span class="token comment">// [object Null]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>         <span class="token comment">// [object Undefined]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>            <span class="token comment">// [object RegExp]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// [object Date]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>                <span class="token comment">// [object Array]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span>         	<span class="token comment">// [object HTMLDocument]</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>            <span class="token comment">// [object Window]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function p(l,i){return s(),a("div",null,[t(" more "),c])}const k=n(o,[["render",p],["__file","类型判断.html.vue"]]);export{k as default};
