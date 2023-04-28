import{_ as n,W as s,X as a,Y as t,a1 as p}from"./framework-b609eea8.js";const e="/assets/观察者模式-36553069.jpg",c="/assets/发布订阅模式-6b3aec44.jpg",o={},i=p('<h2 id="_1-观察者模式" tabindex="-1"><a class="header-anchor" href="#_1-观察者模式" aria-hidden="true">#</a> 1. 观察者模式</h2><h3 id="_1-1-定义" tabindex="-1"><a class="header-anchor" href="#_1-1-定义" aria-hidden="true">#</a> 1.1 定义</h3><p>是一种设计模式。观察者模式 = 观察者 + 被观察者（重点）</p><p><img src="'+e+`" alt="观察者模式"></p><h3 id="_1-2-实现" tabindex="-1"><a class="header-anchor" href="#_1-2-实现" aria-hidden="true">#</a> 1.2 实现</h3><p>观察者模式有一个被观察对象 <code>Subject</code>，可以有多个 <strong>观察者</strong>去观察这个对象。二者之间的关系是：<mark>通过 <strong>被观察者主动</strong> 建立的</mark>。</p><p><strong>被观察者</strong>至少有三个方法：</p><ul><li>添加观察者</li><li>移除观察者</li><li>通知观察者</li></ul><p>当被观察者将某个观察者添加到自己的 <strong>观察者列表</strong> 后，观察者与被观察者之间就建立起来了。此后只要被观察者在某种时机触发 <strong>通知观察者</strong> 方法时，观察者即可接收来自被观察者的消息了。</p><p><strong>手写实现：</strong></p><ol><li><p>被观察者 -- <code>Subject</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 被观察者有一个 观察者列表 observerList</span>
<span class="token comment">// 添加观察者、移除观察者、通知观察者</span>
<span class="token keyword">class</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> observer<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">observer</span> <span class="token operator">=&gt;</span> observer<span class="token punctuation">.</span><span class="token function">notified</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>观察者 -- <code>Observer</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> subject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">if</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">{</span>
      subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">notified</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&#39;got message&#39;</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 观察者主动申请加入被观察者列表</span>
<span class="token keyword">const</span> observerA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&#39;observerA&#39;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span>

<span class="token comment">// 被观察者主动将观察者加入列表</span>
<span class="token keyword">const</span> observerB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&#39;observerB&#39;</span><span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observerB<span class="token punctuation">)</span>


subject<span class="token punctuation">.</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token string">&#39;Hello from subject&#39;</span><span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">removeObserver</span><span class="token punctuation">(</span>observerA<span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token string">&#39;Hello again&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><mark>观察者模式中的被观察者需要在每次自身改变后都绑定式地触发对观察者的通知</mark></p><h2 id="_2-发布订阅模式" tabindex="-1"><a class="header-anchor" href="#_2-发布订阅模式" aria-hidden="true">#</a> 2. 发布订阅模式</h2><h3 id="_2-1-定义" tabindex="-1"><a class="header-anchor" href="#_2-1-定义" aria-hidden="true">#</a> 2.1 定义</h3><p>是一种对象间一对多的依赖关系。发布订阅 = 发布者 + 订阅者 + 发布订阅中心（重点）</p><p>发布者和订阅者不直接进行通信，而是发布者将要发布的消息交友中心管理，订阅者也是根据自己的情况，按需订阅中心的消息。</p><ul><li><strong>订阅者</strong> （<code>Subscriber</code>）把自己像订阅的事件 <strong>注册</strong>（Subscribe)）到调度中心</li><li>当 <strong>发布者</strong>（<code>Publisher</code>）<strong>发布该事件</strong>到调度中心，也就是该事件触发时，由 <strong>调度中心</strong>统一调度订阅者注册到调度中心的处理代码</li></ul><p><img src="`+c+`" alt="发布订阅模式"></p><h3 id="_2-2-实现" tabindex="-1"><a class="header-anchor" href="#_2-2-实现" aria-hidden="true">#</a> 2.2 实现</h3><p>实现思路：</p><ul><li>创建一个类 <code>Observer</code></li><li>有一个缓存列表 <code>message</code></li><li>向消息队列添加内容 <code>$on</code></li><li>删除消息队列的内容<code>$off</code></li><li>出发消息队列里的内容<code>$emit</code></li></ul><h4 id="_1-创建一个类" tabindex="-1"><a class="header-anchor" href="#_1-创建一个类" aria-hidden="true">#</a> <strong>1. 创建一个类</strong></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-添加三个核心方法" tabindex="-1"><a class="header-anchor" href="#_2-添加三个核心方法" aria-hidden="true">#</a> <strong>2. 添加三个核心方法</strong></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个实例，如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用构造函数 创建一个实例</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 向 person1 委托一些内容，调用 $on</span>
<span class="token comment">// 既然要委托一些内容，那 事件名 必不可少，事件触发的时候也需要一个 回调函数</span>
person1<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;买红宝石&#39;</span><span class="token punctuation">,</span> handleA<span class="token punctuation">)</span>
person1<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;买红宝石&#39;</span><span class="token punctuation">,</span> handleB<span class="token punctuation">)</span>
person1<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;买奶茶&#39;</span><span class="token punctuation">,</span> handleC<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">handleA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleA&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">handleB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleB&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">handleC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleC&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-设置缓存列表" tabindex="-1"><a class="header-anchor" href="#_3-设置缓存列表" aria-hidden="true">#</a> <strong>3. 设置缓存列表</strong></h4><p>缓存列表 <code>message</code> 功能如下：</p><p>向 <code>person1</code> 委托一个 <code>buy</code> 类型的内容，完成之后执行回调函数 <code>handleA</code> 和 <code>handleB</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 消息队列</span>
  <span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;buy&#39;</span><span class="token punctuation">,</span> handleA<span class="token punctuation">)</span>
person1<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;buy&#39;</span><span class="token punctuation">,</span> handleB<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于下列效果：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">buy</span><span class="token operator">:</span> <span class="token punctuation">[</span>handleA<span class="token punctuation">,</span> handleB<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>  <span class="token comment">// 消息队列</span>
  <span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-实现-on" tabindex="-1"><a class="header-anchor" href="#_4-实现-on" aria-hidden="true">#</a> <strong>4. 实现 $on</strong></h4><p><code>$on</code>需要传两个参数：</p><ul><li><code>type</code>：事件名（事件类型）</li><li><code>cb</code>：回调函数</li></ul><p>每个事件类型对应多个消息（<code>cb</code>），所以我们要为每个是事件类型创建一个数组</p><p><strong>实现步骤：</strong></p><ol><li>先判断有没有这个属性（事件类型）</li><li>没有 =&gt; 初始化一个空数组</li><li>有 =&gt; 在现有的事件类型中 <code>push</code> 一个新的 <code>cb</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">// 消息队列</span>
  <span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-实现-off" tabindex="-1"><a class="header-anchor" href="#_5-实现-off" aria-hidden="true">#</a> <strong>5. 实现 $off</strong></h4><p><code>$off</code> 用来删除消息队列里的内容</p><p>有两种写法：</p><ul><li><code>person1.$off(&#39;buy&#39;)</code> ：删除整个 <code>buy</code>事件类型</li><li><code>person1.$off(&#39;buy&#39;， handleA)</code> ：只删除<code>handleA</code>消息，保留 <code>buy</code>事件列表的其他消息</li></ul><p><strong>实现步骤：</strong></p><ol><li>判断是否有订阅，即消息队列里是否有 <code>type</code>这个类型的事件，没有 =&gt; return</li><li>判断是否有 <code>fn</code> 这个参数 <ul><li>没有 =&gt; 删除整个事件</li><li>有 =&gt; 仅删除 <code>fn</code> 这个消息</li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cb<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">!==</span> cb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-实现-emit" tabindex="-1"><a class="header-anchor" href="#_6-实现-emit" aria-hidden="true">#</a> <strong>6. 实现$emit</strong></h4><p><code>$emit</code> 用来触发消息队列的内容</p><ul><li>该方法需要传入一个<code>type</code>参数，用来确定触发哪一个事件</li><li>主要流程就是对 <code>type</code> 事件做一个 <code>for</code> 循环，依次执行每一个消息的回调函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token comment">// 判断是否有订阅</span>
  	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// 有订阅，就对type 这个事件做一个轮询</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">item</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-完整代码" tabindex="-1"><a class="header-anchor" href="#_2-3-完整代码" aria-hidden="true">#</a> 2.3 完整代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
  <span class="token function">contructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">// 消息队列</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*
   * $on 向消息队列添加内容
   * type 事件类型
   * cb 回调函数
   */</span>
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 判断有没有这个属性</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 没有，置为空数组</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 有，直接在后面添加回调函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
   <span class="token comment">/*
   * $off 删除消息队列的内容
   * type 事件类型
   * cb 回调函数
   */</span>
  <span class="token function">$off</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token comment">// 判断是否有订阅 ，没有直接 return</span>
  	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// 判断是都有 cb 这个参数</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cb<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 没有，删除整个事件</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 有cb, 仅删除cb 这个消息（过滤掉这个方法）</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">!==</span> cb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*
   * $emit 触发消息队列的内容
   * type 事件类型
   */</span>
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token comment">// 判断是否有订阅</span>
  	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// 有订阅，就对type 这个事件做一个轮询</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">item</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function l(u,r){return s(),a("div",null,[t(" more "),i])}const d=n(o,[["render",l],["__file","观察者模式和发布订阅模式.html.vue"]]);export{d as default};
