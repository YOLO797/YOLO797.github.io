import{_ as n,W as s,X as a,Y as e,$ as t,a2 as p}from"./framework-fe863d21.js";const c={},o=t("p",null,"call、apply、bind的作用和区别",-1),i=p(`<h3 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用" aria-hidden="true">#</a> 1. 作用</h3><p>​ 都是改变this的指向</p><h3 id="_2-apply" tabindex="-1"><a class="header-anchor" href="#_2-apply" aria-hidden="true">#</a> 2. apply</h3><p><code>function.call(this, [arg1, arg2, arg3, ...])</code></p><p>接收两个参数，第一个参数是 <code>this</code> 的指向，第二个参数是函数接受的参数，以数组的形式传入</p><p>改变this指向后 原函数<strong>立即执行</strong>，临时改变 <code>this</code> 指向一次</p><p>当传入的对象不存在时，即为 <code>null</code> 或 <code>undefined</code> ，<code>this</code> 将指向全局<code>window</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;clying&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// clying Arguments(2) [22, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-call" tabindex="-1"><a class="header-anchor" href="#_3-call" aria-hidden="true">#</a> 3. call</h3><p><code>function.call(this, arg1, arg2, arg3, ...)</code></p><p>接收两个参数，第一个参数是 <code>this</code> 的指向，第二个参数是一个参数列表，</p><p>改变this指向后 原函数<strong>立即执行</strong>，临时改变 <code>this</code> 指向一次</p><p>当传入的对象不存在时，即为 <code>null</code> 或 <code>undefined</code> ，<code>this</code> 将指向全局<code>window</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;clying&#39;</span> <span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;deng&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;deng&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// clying [Arguments] { &#39;0&#39;: &#39;deng&#39;, &#39;1&#39;: &#39;deng&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-bind" tabindex="-1"><a class="header-anchor" href="#_4-bind" aria-hidden="true">#</a> 4. bind</h3><p>与call相似，接收两个参数，第一个参数是 <code>this</code> 的指向，第二个参数是一个参数列表，</p><p>改变this指向后<strong>不会立即执行</strong>，而是返回一个<strong>永久改变</strong>this指向的函数</p>`,17);function l(u,d){return s(),a("div",null,[o,e(" more "),i])}const k=n(c,[["render",l],["__file","call和apply和bind.html.vue"]]);export{k as default};
