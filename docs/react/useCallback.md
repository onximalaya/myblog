---
title: useCallBack
date: 2023-11-01
---



# useCallback

说明：在组件多次重新渲染的时候缓存函数

```javascript
import { useCallback, useState} from 'react'

function Input({ onChange }){
    console.log('子组件重新渲染了')
    return(
        <Input type='text' onChange={(e)=>onChange(e.target.value)}/> 
    )
}

function App(){
    //传给子组件的函数
    const changeHandle = (value)=>{
        console.log(value)
    }
    //触发父组件重新渲染的函数
    const [count,setCount] = useState(0)
    
    return(
        <div>
        //把函数作为prop传给子组件，每次父组件更新，因为函数类型是引用类型，每次子组件都会跟着重新渲染
        <Input onChange={changeHandle}/>   
        <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}

```
优化后：
```javascript
import { useCallback, useState} from 'react'

function Input({ onChange }){
    console.log('子组件重新渲染了')
    return(
        <Input type='text' onChange={(e)=>onChange(e.target.value)}/> 
    )
}

function App(){
    //传给子组件的函数 用useCallback包裹后，父组件点击更新时 子组件不会跟着重新渲染了
    const changeHandle = useCallback((value)=>{
        console.log(value)
    },[])
    //触发父组件重新渲染的函数
    const [count,setCount] = useState(0)
    return(
        <div>
        //把函数作为prop传给子组件，每次父组件更新，因为函数类型是引用类型，每次子组件都会跟着重新渲染
        <Input onChange={changeHandle}/>   
        <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}

```
