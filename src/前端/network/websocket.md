---
title: websocket
icon: page
date: 2023-05-09
category:
  - 前端
tag:
  - 前端
  - websocket
  - 网络系列
sticky: true
star: true
---

<!-- more -->

### 1. websocket封装

```js
// websocket.ts
class WebSockets {
	wssURL: string;
  connect: WebSockets;
  handleMessage: any;
  
  constructor(wssURL = process.emv.API, handleMessage){
    this.wssURL = wssURL
    this.handleMessage = handleMessage
    this.connect = new WebSockets(wssURL)
    this.bindEvent()
  }
  
  bindEvent(){
    this.connect.addEventListener('open', this.handleOpen, false)
    this.connect.addEventListener('close', this.handleClose, false)
    this.connect.addEventListener('error', this.handleError, false)
    this.connect.addEventListener('message', this.handleMessage, false)
  }
  
  handleOpen(e){
    console.log('WSS OPEN', e)
  }
  handleClose(e){
    console.log('WSS CLOSE', e)
  }
  handleError(e){
    console.log('WSS ERROR', e)
  }
}
export default WebSockets;
```

```vue
// index.vue
<script lang="ts">
  import WebScoket from './websocket'
  export default {
    mounted(){
      this.$store.commit("SET_INDEX_WSS",new WebSocket('wss://xxx/api/xxx',this.handleMessage))
    },
    methods:{
      handleMessage(e){
        const data = JSON.parse(e.data)
        this.$store.commit("SET_INDEX_SESSIONS",data.result)
      }
		}
  }
</script>
```



### 2. 简单示例

```js
var wss = new WebSocket(".....")
wss.onopen = function(e){
  console.log("Connection open ...")
  wss.send("hello")
}
wss.onmessage = function(e){
  console.log("Received Message:" + e.data)
  wss.close()
}
ws.onclose = function(e){
  console.log('Connenction closed')
}
```

### 3. 客户端API

#### 3.1 ws.readyState

返回实例对象的当前状态，共有四种

- `CONNECTING`：值为 0，表示正在连接
- `OPEN`：值为 1，连接成功，可以通信了
- `CLOSEING`：值为 2，连接正在关闭
- `CLOSED`：值为 3，连接已经关闭，或者打开连接失败

#### 3.2 ws.onopen

指定连接成功后的回调函数

```js
wss.onopen = function(e){
  wss.send("hello")
}
```

#### 3.3 ws.onclose

指定连接关闭后的回调函数

```js
ws.onclose = function(e){
  var code = e.code
  var reason = e.reason
  var wasClean = e.wasClean
}
```

#### 3.4 ws.onmessage

```js
ws.onmessage = function(e){
  var data = e.data
  // 处理数据
}
ws.addEventListener('message',function(e){
  var data = e.data
  // 处理数据
})
```

#### 3.5 ws.onerror

指定报错时的回调函数

```js
ws.onerror = function(e){
  // handle error event
}
ws.addEventListener('error',function(e){
  //  handle error event
})
```



#### 3.6 ws.send()

用于向服务器发送数据