import{_ as s,W as a,X as p,Y as e,a2 as n}from"./framework-fe863d21.js";const t={},o=n("<p>一些数组方法，如 <code>forEach</code>、<code>map</code>、<code>filter</code>、<code>some</code>、<code>every</code>、<code>find</code>、<code>reduce</code> 等</p>",1),c=n(`<h3 id="_1-原生for循环" tabindex="-1"><a class="header-anchor" href="#_1-原生for循环" aria-hidden="true">#</a> 1. 原生<code>for</code>循环</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>xxx<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-for-in" tabindex="-1"><a class="header-anchor" href="#_2-for-in" aria-hidden="true">#</a> 2. for...in...</h3><p>输出的 <code>key</code> 是数组索引，适合遍历对象</p><p>会遍历到原生属性</p><ol><li><p>适合遍历对象，</p><p>遍历数组会存在一些问题（数组的索引为字符串型数字，不能直接进行几何运算）</p></li><li><p>会遍历数组的所有可枚举属性，包括原型</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>lat arr<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">60</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
	consoly<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>  <span class="token comment">//name,age</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-for-of" tabindex="-1"><a class="header-anchor" href="#_3-for-of" aria-hidden="true">#</a> 3. for...of...</h3><ul><li>只遍历数组内的元素，不会遍历原型属性和索引</li><li>若遍历对象 ，需要使用<code>object.keys()</code></li></ul><h3 id="_4-foreach" tabindex="-1"><a class="header-anchor" href="#_4-foreach" aria-hidden="true">#</a> 4. forEach</h3><h3 id="_5-map" tabindex="-1"><a class="header-anchor" href="#_5-map" aria-hidden="true">#</a> 5. map</h3><p>数组的重组，不改变自身数组，返回一个元素被处理的新数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item <span class="token operator">*</span> item
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>  <span class="token comment">//[1,4,9,16,25,36]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-filter" tabindex="-1"><a class="header-anchor" href="#_6-filter" aria-hidden="true">#</a> 6. filter</h3><h3 id="_7-some" tabindex="-1"><a class="header-anchor" href="#_7-some" aria-hidden="true">#</a> 7. some</h3><p>遍历数组，只要有一个满足条件，就返回 <code>true</code>。否则返回 <code>false</code></p><h3 id="_8-every" tabindex="-1"><a class="header-anchor" href="#_8-every" aria-hidden="true">#</a> 8. every</h3><p>遍历数组，每一个元素都满足条件，就返回 <code>true</code></p><h3 id="_9-find" tabindex="-1"><a class="header-anchor" href="#_9-find" aria-hidden="true">#</a> 9. find</h3><p>遍历数组，返回符合条件的第一个元素，如果没有符合的就返回 <code>undefined</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> item <span class="token operator">&gt;</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-findindex" tabindex="-1"><a class="header-anchor" href="#_10-findindex" aria-hidden="true">#</a> 10. findIndex</h3><p>遍历数组，返回符合条件的第一个元素的索引，如果没有符合的就返回 <code>undefined</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> item <span class="token operator">&gt;</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-reduce" tabindex="-1"><a class="header-anchor" href="#_11-reduce" aria-hidden="true">#</a> 11. reduce</h3><p><code>reduce( callback, initialValue )</code></p><p>第一个参数为 回调函数，第二个参数为 初始值</p><h4 id="_11-1-数组某一属性的总和" tabindex="-1"><a class="header-anchor" href="#_11-1-数组某一属性的总和" aria-hidden="true">#</a> 11.1 数组某一属性的总和</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span> <span class="token parameter">currentTotal<span class="token punctuation">,</span> item</span> <span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentTotal <span class="token operator">+</span> item<span class="token punctuation">.</span>age
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token comment">// 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-2-数组去重-并统计每一项重复次数" tabindex="-1"><a class="header-anchor" href="#_11-2-数组去重-并统计每一项重复次数" aria-hidden="true">#</a> 11.2 数组去重，并统计每一项重复次数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> repeatTime <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 统计每个人出现的次数</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span> <span class="token parameter">array<span class="token punctuation">,</span> item</span> <span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>repeatTime<span class="token punctuation">[</span>item<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        repeatTime<span class="token punctuation">[</span>item<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">++</span>
        <span class="token keyword">return</span> array
    <span class="token punctuation">}</span>
    repeatTime<span class="token punctuation">[</span>item<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>array<span class="token punctuation">,</span> item<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// repeatTime: { tom: 3, aa: 1, bb: 2 }</span>
<span class="token comment">// result: [</span>
<span class="token comment">//   {name:&#39;tom&#39;, age: 10},</span>
<span class="token comment">//   {name:&#39;aa&#39;, age: 2},</span>
<span class="token comment">//   {name:&#39;bb&#39;, age: 3},</span>
<span class="token comment">// ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-3-最大-最小值获取" tabindex="-1"><a class="header-anchor" href="#_11-3-最大-最小值获取" aria-hidden="true">#</a> 11.3 最大/最小值获取</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> max <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">curItem<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> curItem <span class="token operator">&gt;=</span> item <span class="token operator">?</span> curItem <span class="token operator">:</span> item
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> min <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">curItem<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> curItem <span class="token operator">&lt;=</span> item <span class="token operator">?</span> curItem <span class="token operator">:</span> item
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-reduceright" tabindex="-1"><a class="header-anchor" href="#_12-reduceright" aria-hidden="true">#</a> 12. reduceRight</h3><p>与 <code>reduce</code> 执行方向相反，其余一致</p>`,35);function l(i,r){return a(),p("div",null,[o,e(" more "),c])}const k=s(t,[["render",l],["__file","数组遍历.html.vue"]]);export{k as default};
