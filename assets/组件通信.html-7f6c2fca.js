import{_ as a,W as e,X as t,Y as i,$ as n,a0 as s,a1 as o}from"./framework-b609eea8.js";const c={},l=n("p",null,"父子组件通信、兄弟组件通信、隔代组件通信",-1),d=n("p",null,[n("code",null,"props/$emit"),s("、"),n("code",null,"ref/$parent/$children"),s("、"),n("code",null,"EventBus($emit/$on)"),s("、"),n("code",null,"provide/inject")],-1),p=o(`<h3 id="_1-组件通信的分类" tabindex="-1"><a class="header-anchor" href="#_1-组件通信的分类" aria-hidden="true">#</a> 1. 组件通信的分类</h3><ul><li>父子组件之间的通信</li><li>兄弟组件之间的通信</li><li>隔代组件之间的通信</li><li>非关系组件之间的通信</li></ul><h3 id="_2-组件通信的方法" tabindex="-1"><a class="header-anchor" href="#_2-组件通信的方法" aria-hidden="true">#</a> 2. 组件通信的方法</h3><div class="hint-container info"><p class="hint-container-title">组件通信</p><ol><li><code>props/$emit</code>：父子组件</li><li><code>ref</code> 与 <code>$parent/$children</code>：父子组件</li><li><code>EventBus($emit/$on)</code>：父子、隔代、兄弟</li><li><code>$attrs/$listenters</code>：隔代组件</li><li><code>provide/inject</code>：隔代</li><li><code>Vuex</code>：父子、隔代、兄弟</li></ol></div><h4 id="_2-1-props-emit" tabindex="-1"><a class="header-anchor" href="#_2-1-props-emit" aria-hidden="true">#</a> 2.1 props/$emit</h4><p><code>props</code>：</p><ul><li>使用场景：父组件传递数据给子组件</li><li>子组件设置 <code>props</code> 属性，接收父组件传递过来的参数</li><li>父组件在使用子组件标签中通过字面量来传值</li></ul><p><code>$emit</code>：</p><ul><li>使用场景：子组件传递数据给父组件</li><li>子组件通过 <code>$emit</code> 触发自定义事件，<code>$emit</code> 第二个参数为传递的数值</li><li>父组件绑定监听器获取到子组件传递过来的参数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// children.vue</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;good&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// father.vue</span>
<span class="token operator">&lt;</span>Children @add<span class="token operator">=</span><span class="token string">&quot;cartAdd&quot;</span><span class="token operator">&gt;</span>
  
<span class="token function">cartAdd</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">,</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>   <span class="token comment">// good</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-ref" tabindex="-1"><a class="header-anchor" href="#_2-2-ref" aria-hidden="true">#</a> 2.2 ref</h4><p><code>ref</code>：</p><ul><li>父组件在使用子组件时设置 <code>ref</code></li><li>父组件通过设置子组件 <code>ref</code> 来获取数据</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// father.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  
this.$refs.foo   // 获取子组件实例，通过子组件实例我们就能拿到对应的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-eventbus" tabindex="-1"><a class="header-anchor" href="#_2-3-eventbus" aria-hidden="true">#</a> 2.3 EventBus</h4><ul><li>使用场景：父子、隔代、兄弟组件传值</li><li>创建一个中央事件总线 <code>EventBus</code></li><li>兄弟组件之间通过 <code>$emit</code> 触发自定义事件，<code>$emit</code> 第二个参数为传递的数值</li><li>另一个兄弟组件通过 <code>$on</code> 监听自定义事件</li></ul><p><strong>具体实现方式：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span>
Event<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span>事件名， 数据<span class="token punctuation">)</span>
Event<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>事件名， <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-attrs-listenters" tabindex="-1"><a class="header-anchor" href="#_2-4-attrs-listenters" aria-hidden="true">#</a> 2.4 $attrs/$listenters</h4><ul><li>使用场景：祖先传递数据给子孙</li><li>设置批量向下传属性 <code>$attrs</code> 和 <code>$listeners</code></li><li><code>$attr</code> 里存放的是父组件中绑定的非 <code>props</code> 属性，<code>$listeners</code> 存放的是父组件中绑定的非原生属性</li><li>可以通过 <code>v-bind = &quot;$attrs&quot;</code> 传入内部组件</li></ul><h4 id="_2-5-provide-inject" tabindex="-1"><a class="header-anchor" href="#_2-5-provide-inject" aria-hidden="true">#</a> 2.5 provide/inject</h4><ul><li>在祖先组件定义 <code>provide</code> 属性，返回传递的值</li><li>在后代组件通过 <code>inject</code> 接收组件传递过来的值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 祖先组件</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 后代组件</span>
inject：<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-vuex" tabindex="-1"><a class="header-anchor" href="#_2-6-vuex" aria-hidden="true">#</a> 2.6 vuex</h4><ul><li>使用场景：复杂的组件数据传递</li><li><code>vuex</code> 状态管理模式，作用相当于一个用来存储共享变量的容器</li></ul><p>成员属性：</p><ul><li><code>state</code>：存储状态，基本数据</li><li><code>mutations</code>：同步更新，改变状态</li><li><code>getters</code>：相当于 <code>state</code> 的计算属性</li><li><code>actions</code>：异步提交，发送请求时</li><li><code>moudles</code>：模块化 <code>Vuex</code></li></ul>`,27);function r(u,v){return e(),t("div",null,[l,d,i(" more "),p])}const k=a(c,[["render",r],["__file","组件通信.html.vue"]]);export{k as default};
