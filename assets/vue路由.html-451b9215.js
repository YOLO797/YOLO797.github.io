import{_ as a,W as e,X as t,Y as p,$ as n,a0 as s,a1 as o}from"./framework-b609eea8.js";const l="/assets/vue-router-36bbc215.png",c={},i=n("p",null,[s("全局路由钩子："),n("code",null,"beforeEach(to, form, next)"),s("、"),n("code",null,"afterEach(to, from)")],-1),u=n("p",null,[s("独享路由钩子："),n("code",null,"beforeEnter(to, from, next)")],-1),r=n("p",null,[s("组件内路由钩子："),n("code",null,"beforeRouterEnter(to, from, next)"),s("、"),n("code",null,"beforeRouteLeave(to, from, next)")],-1),d=o(`<h3 id="_1-路由分类" tabindex="-1"><a class="header-anchor" href="#_1-路由分类" aria-hidden="true">#</a> 1. 路由分类</h3><ul><li>前端路由</li><li>后端路由</li></ul><h3 id="_2-基本路由" tabindex="-1"><a class="header-anchor" href="#_2-基本路由" aria-hidden="true">#</a> 2. 基本路由</h3><p><strong>使用方法：</strong></p><ol><li>安装 <code>vuerouter</code>，执行命令：<code>npm i vue-router</code></li><li>在 <code>vue</code> 后面引入：<code>import VueRouter from &#39;vue-touter&#39; </code></li><li>使用插件：<code>Vue.use(VueRouter)</code></li><li>编写 <code>router</code> 配置项：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;../About&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../Home&#39;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routers</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> About
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Home
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-多级路由" tabindex="-1"><a class="header-anchor" href="#_3-多级路由" aria-hidden="true">#</a> 3. 多级路由</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">routers</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> About
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>              <span class="token comment">// 通过 children 配置子级路由</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> News<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 给路由命名</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;welcome&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> Hello
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳转：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 跳转到news组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

// 命名路由
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news/welcome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 跳转到news组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
// 简化跳转
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name: &#39;hello&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
// 简化后传递参数
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
  <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    name:&#39;hello&#39;,
    query:{
      id: 666,
      title: <span class="token punctuation">&quot;</span></span><span class="token attr-name">你好&quot;</span>
    <span class="token attr-name">}</span>
  <span class="token attr-name">}&quot;</span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-路由参数" tabindex="-1"><a class="header-anchor" href="#_4-路由参数" aria-hidden="true">#</a> 4. 路由参数</h3><h4 id="_4-1-query参数" tabindex="-1"><a class="header-anchor" href="#_4-1-query参数" aria-hidden="true">#</a> 4.1 query参数</h4><ul><li><p>传递参数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 跳转携带 query 参数，to 的字符串写法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news/detail?id=666&amp;title=你好<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

// 跳转携带 query 参数，to 的对象写法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
  <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    path:&#39;/home/news/detail&#39;,
    query:{
      id: 666,
      title: <span class="token punctuation">&quot;</span></span><span class="token attr-name">你好&quot;</span>
    <span class="token attr-name">}</span>
  <span class="token attr-name">}&quot;</span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接收参数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_4-2-params参数" tabindex="-1"><a class="header-anchor" href="#_4-2-params参数" aria-hidden="true">#</a> 4.2 params参数</h4><ul><li><p>配置路由</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由配置</span>
<span class="token punctuation">{</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// :xxx 是占位符，接收的params参数</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span> Detail
<span class="token punctuation">}</span>

<span class="token comment">// 列表中跳转</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/datail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>传递参数</p><div class="hint-container note"><p class="hint-container-title">注</p><p>路由携带 <code>params</code> 参数时，若使用 <code>to</code> 的对象写法，则不能使用 <code>path</code> 配置项，必须使用 <code>name</code> 配置</p></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 跳转携带 params 参数，to 的字符串写法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news/detail/666<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

// 跳转携带 params 参数，to 的对象写法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
  <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    name:&#39;hello&#39;,
    params:{
      id: 666
    }
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接收参数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>$route.params.id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_5-replace属性" tabindex="-1"><a class="header-anchor" href="#_5-replace属性" aria-hidden="true">#</a> 5. replace属性</h3><ol><li>作用：控制路由跳转时操作浏览器历史记录的模式</li><li>浏览器的历史记录有两种写入方式：<code>push</code> 和 <code>replace</code><ul><li><code>push</code> ：追加历史记录</li><li><code>replace</code> ：替换当前记录</li></ul></li><li>开启 <code>replace</code> 模式：<code>&lt;router-lunk replace...&gt;跳转&lt;/router-link&gt;</code></li></ol><h3 id="_6-编程式路由导航" tabindex="-1"><a class="header-anchor" href="#_6-编程式路由导航" aria-hidden="true">#</a> 6. 编程式路由导航</h3><p>使用方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span>xxx
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 前进</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// 后退</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// 可前进也可后退</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-缓存路由组件" tabindex="-1"><a class="header-anchor" href="#_7-缓存路由组件" aria-hidden="true">#</a> 7. 缓存路由组件</h3><ol><li><p>作用：让不展示的路由组件保持挂载，不被销毁</p></li><li><p>使用方法：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 缓存一个路由组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>News<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>

// 缓存多个路由组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;News&#39;,&#39;Message&#39;]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_8-路由守卫" tabindex="-1"><a class="header-anchor" href="#_8-路由守卫" aria-hidden="true">#</a> 8. 路由守卫</h3><ol><li>作用：对路由进行权限控制</li><li>分类：全局守卫、独享守卫、组件内守卫</li><li>参数： <ul><li><code>to</code>：目标路由对象</li><li><code>from</code>：即将要离开的路由对象</li><li><code>next</code>：是一个函数，表示放行 <ul><li>必须调用 <code>next()</code> 才能继续执行下一个钩子，否则路由跳转会停止</li><li><code>next(false)</code>：中断跳转</li><li><code>next(&#39;/&#39;)</code> 或者 <code>next({path: &#39;/&#39;})</code>：跳转到指定页面</li></ul></li></ul></li></ol><h4 id="_8-1-全局守卫" tabindex="-1"><a class="header-anchor" href="#_8-1-全局守卫" aria-hidden="true">#</a> 8.1 全局守卫</h4><ul><li><p>前置守卫(<code>beforeEach</code>)</p><p>全局前置守卫，初始化时执行，每次路由切换前执行</p><p>一般用于登录验证、权限判定</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isAuth<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 判断当前路由是否需要进行权限控制</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>localStroage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 权限控制具体规则</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;没有权限访问&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>后置守卫(<code>afterEach</code>)</p><p>全局后置守卫，初始化时执行，每次路由切换后执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title   <span class="token comment">// 修改网页的title</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> &#39;init_title
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_8-2-独享守卫" tabindex="-1"><a class="header-anchor" href="#_8-2-独享守卫" aria-hidden="true">#</a> 8.2 独享守卫</h4><ul><li><code>breforeEnter</code>：指在单个路由配置时的钩子函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routers</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Foo<span class="token punctuation">,</span>
      <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-组件内守卫" tabindex="-1"><a class="header-anchor" href="#_8-3-组件内守卫" aria-hidden="true">#</a> 8.3 组件内守卫</h4><ul><li><code>beforeRouterEnter</code>：进入守卫，通过路由规则，进入该组件时被调用</li><li><code>beforeRouterLeave</code>：离开守卫，通过路由规则，离开该组件时被调用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">beforeRouterEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token function">beforeRouterLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-router和-route" tabindex="-1"><a class="header-anchor" href="#_9-router和-route" aria-hidden="true">#</a> 9. $router和$route</h3><h4 id="_9-1-this-router" tabindex="-1"><a class="header-anchor" href="#_9-1-this-router" aria-hidden="true">#</a> 9.1 this.$router</h4><p><code>$router</code>：表示一个全局的路由对象，<code>vue-router</code> 的实例，提供 <code>addRouters</code>、<code>back</code>等方法，相当于一个路由的管理者角色。</p><ul><li><code>this.$router.options.routes()</code>：获取当前的路由配置</li><li><code>router.forward()</code>：导航前进一步，但是不刷新前进页的表单，类似 <code>router.go(1)</code></li><li><code>$router.push()</code></li><li><code>$router.replace()</code></li></ul><h4 id="_9-2-this-route" tabindex="-1"><a class="header-anchor" href="#_9-2-this-route" aria-hidden="true">#</a> 9.2 this.$route</h4><p><code>$route</code>：表示当前路由对象，包含具体的路由名称、<code>path</code>、<code>query</code>、<code>params</code> 等属性</p><ul><li><p><code>$route.path</code>：字符串，当前路由对象的路径，如：<code>/home/news</code></p></li><li><p><code>$route.query</code>：对象，包含路由的 <code>query</code> 参数的键值对。</p><p>如：<code>/home/news?id=1&amp;name=qq</code> ===&gt; <code>{&quot;id&quot;: 1, &quot;name&quot;: &quot;qq&quot;}</code></p></li><li><p><code>$route.name</code>：当前路径的名字，如果没有使用具名路径，则为空</p></li><li><p><code>$route.router</code>：路由规则所属的路由器（以及其所属的组件）</p></li><li><p><code>$route.matched</code>：数组，包含当前匹配的路径中的所有片段所对应的配置参数对象</p></li><li><p><code>$route.params</code>：对象，键值对参数</p></li></ul><h4 id="_9-3-区别" tabindex="-1"><a class="header-anchor" href="#_9-3-区别" aria-hidden="true">#</a> 9.3 区别</h4><p><img src="`+l+'" alt="vue-router"></p><h3 id="_10-路由生命周期" tabindex="-1"><a class="header-anchor" href="#_10-路由生命周期" aria-hidden="true">#</a> 10. 路由生命周期</h3><ol><li>导航被触发</li><li>在失活的组件里调用 <code>beforeRouterLeave</code> 离开守卫</li><li>调用全局守卫 <code>beforeEach</code>守卫</li><li>在重用的组件内调用 <code>beforeRouteUpdate</code>守卫</li><li>在路由配置里嗲用 <code>beforeEnter</code>守卫</li><li>解析异步路由组件</li><li>在被激活的组件内调用 <code>beforeRouteEnter</code>守卫</li><li>调用全局的 <code>beforeResolve</code> 守卫</li><li>导航被确认</li><li>调用全局 <code>afterEach</code> 钩子</li><li>触发 <code>DOM</code> 更新</li><li>用创建好的 实例调用 <code>beforeRouteEnter</code> 守卫中传给 <code>next()</code> 的回调函数</li></ol>',43);function k(v,m){return e(),t("div",null,[i,u,r,p(" more "),d])}const h=a(c,[["render",k],["__file","vue路由.html.vue"]]);export{h as default};
