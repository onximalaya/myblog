---
title: 跨层通信Context
date: 2023-11-01
---


# 跨层通信 Context
使用步骤：
1.使用createContext方法创建一个上下文Context对象
2.在顶层组件（APP）中通过Ctx.Provider组件提供数据
3.在底层组件（B）通过useContext钩子函数获取消费数据

```javascript
import { createContext } from 'react'

const MsgContext = createContext();
function A(){
    return (
        <div> 
         this is A component
         <B> </B>
        </div>
    )
}

function B(){
    const msg = useContext(MsgContext);
    return (
        <div> this is B compoennet {msg} </div>
    )
}

function App(){
    const msg = 'this is a msg'
    return(
        <div>
            <MsgContext.Provider value={msg}>
            <A></A>
            </MsgContext.Provider>
        </div>
    )
}
```
