RPC客户端，支持node和brower

# 通过webpack使用，使用npm i -S castle-rpc-client

```typescript
import RPCClient from 'castle-rpc-client'
const Client = new RPCClient('ws://localhost:5000/')
Client.publish('a','a')
Client.subscribe('a',(data)=>{})
await Client.request('a/a','ab')
```

# 直接在浏览器中使用
```javascript
<script src="//unpkg.com/castle-rpc-client/dist/main.min.js"></script>
```
```javascript
const Client = new RPCClient('ws://localhost:12456/')
```

# 操作方法
## 通信模式切换
默认为二进制模式，该模式下更节省流量，
若需要切换模式为JSON文本模式请在创建连接后使用
```javascript
//设置为JSON通信
Client.MessageType=0
//设置为二进制
Client.MessageType=1
```
切换
## Promise/async/await支持
```javascript
该库函数统一使用Promise，请不要使用不支持Promise的浏览器
```
## 订阅
```javascript
await Client.subscribe('topic',data)
```
## 取消订阅
```javascript
await Client.unsubscribe('topic')
```
## 发布
```javascript
let 接收人列表 = await Client.public('topic',data)
```
## 请求
```javascript
let response = await Client.request('path/to/request',data)
```
## 推送
```javascript
await Client.push('to_client_id','topic',data)
```