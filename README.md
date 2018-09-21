rpc-client
```typescript
import RPCClient from 'castle-rpc-client'
const rpc = new RPCClient('ws://localhost:5000/')
rpc.publish('a','a')
rpc.subscribe('a',(data)=>{})
await rpc.request('a/a','ab')
```