const e=JSON.parse('{"key":"v-6fd3ddda","path":"/%E5%89%8D%E7%AB%AF/%E6%89%8B%E5%86%99/promise.html","title":"Promise","lang":"zh-CN","frontmatter":{"title":"Promise","icon":"page","date":"2023-03-31T00:00:00.000Z","category":["前端"],"tag":["前端","JavaScript","手写代码系列"],"sticky":true,"star":true,"description":"一个 promise 的状态必须为这三种状态之一：等待中（pending），完成了（fulfilled），拒绝了（rejected）。 一个 promise 必须提供一个 then 方法来接收它当前的完成值（value）或拒绝原因（reason）。","head":[["meta",{"property":"og:url","content":"https://yolo797.github.io/%E5%89%8D%E7%AB%AF/%E6%89%8B%E5%86%99/promise.html"}],["meta",{"property":"og:site_name","content":"YOLO"}],["meta",{"property":"og:title","content":"Promise"}],["meta",{"property":"og:description","content":"一个 promise 的状态必须为这三种状态之一：等待中（pending），完成了（fulfilled），拒绝了（rejected）。 一个 promise 必须提供一个 then 方法来接收它当前的完成值（value）或拒绝原因（reason）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"手写代码系列"}],["meta",{"property":"article:published_time","content":"2023-03-31T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Promise\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-31T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.  Promise使用","slug":"_1-promise使用","link":"#_1-promise使用","children":[]},{"level":2,"title":"2. 一个基本的Promise","slug":"_2-一个基本的promise","link":"#_2-一个基本的promise","children":[{"level":3,"title":"2.1 定义一个myPromise类","slug":"_2-1-定义一个mypromise类","link":"#_2-1-定义一个mypromise类","children":[]},{"level":3,"title":"2.2 constructor方法","slug":"_2-2-constructor方法","link":"#_2-2-constructor方法","children":[]},{"level":3,"title":"2.3 类的最外层初始化状态","slug":"_2-3-类的最外层初始化状态","link":"#_2-3-类的最外层初始化状态","children":[]},{"level":3,"title":"2.4 设置初始化状态","slug":"_2-4-设置初始化状态","link":"#_2-4-设置初始化状态","children":[]},{"level":3,"title":"2.5 编写reslove()/reject()","slug":"_2-5-编写reslove-reject","link":"#_2-5-编写reslove-reject","children":[]},{"level":3,"title":"2.6 编写then()","slug":"_2-6-编写then","link":"#_2-6-编写then","children":[]},{"level":3,"title":"2.7 捕获异常","slug":"_2-7-捕获异常","link":"#_2-7-捕获异常","children":[]}]},{"level":2,"title":"3. Promise中的异步/多次调用","slug":"_3-promise中的异步-多次调用","link":"#_3-promise中的异步-多次调用","children":[]},{"level":2,"title":"4. Promise链式调用","slug":"_4-promise链式调用","link":"#_4-promise链式调用","children":[{"level":3,"title":"4.1 链式调用的特性","slug":"_4-1-链式调用的特性","link":"#_4-1-链式调用的特性","children":[]},{"level":3,"title":"4.2 链式调用","slug":"_4-2-链式调用","link":"#_4-2-链式调用","children":[]},{"level":3,"title":"4.3 resolvePromise()","slug":"_4-3-resolvepromise","link":"#_4-3-resolvepromise","children":[]}]},{"level":2,"title":"5. 其他扩展方法","slug":"_5-其他扩展方法","link":"#_5-其他扩展方法","children":[{"level":3,"title":"5.1 Promise.resolve()","slug":"_5-1-promise-resolve","link":"#_5-1-promise-resolve","children":[]},{"level":3,"title":"5.2 Promise.reject()","slug":"_5-2-promise-reject","link":"#_5-2-promise-reject","children":[]},{"level":3,"title":"5.3 Promise.all()","slug":"_5-3-promise-all","link":"#_5-3-promise-all","children":[]},{"level":3,"title":"5.4 Promise.race()","slug":"_5-4-promise-race","link":"#_5-4-promise-race","children":[]},{"level":3,"title":"5.5 Promise.finally","slug":"_5-5-promise-finally","link":"#_5-5-promise-finally","children":[]},{"level":3,"title":"5.6 Promise.catch","slug":"_5-6-promise-catch","link":"#_5-6-promise-catch","children":[]}]}],"readingTime":{"minutes":9.01,"words":2702},"filePathRelative":"前端/手写/promise.md","localizedDate":"2023年3月31日","excerpt":"<p>一个 <code>promise</code> 的状态必须为这三种状态之一：等待中（<code>pending</code>），完成了（<code>fulfilled</code>），拒绝了（<code>rejected</code>）。</p>\\n<p>一个 <code>promise</code> 必须提供一个 <code>then</code> 方法来接收它当前的完成值（<code>value</code>）或拒绝原因（<code>reason</code>）。</p>\\n","autoDesc":true}');export{e as data};