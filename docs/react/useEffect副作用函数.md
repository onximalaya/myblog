---
title: useEffect副作用函数
date: 2023-11-01
---

# useEffect

useEffect是一个react hook函数，用于react组件中创建不是由事件引起而是由渲染本身引起的操作，
比如发送ajax请求，更改dom等。（组件渲染完毕之后就会进行的事件，不需要用户操作交互引起）

- 需求1:在组件渲染完毕后，需要请求后端数据渲染到页面中

useEffect(()=>{},[])
参数1是一个函数，也可以叫它副作用函数，在函数内部可以放置要执行的操作
参数2是一个数组（可选参），在数组中放置依赖项，不同依赖项会影响第一个参数函数的执行，
当是一个空数组时候，副作用函数只会在组件渲染完毕之后执行一次

- useEffect依赖项参数说明
useEffect副作用函数执行时存在多种情况，根据传入依赖项的不同，会有不同的执行表现

依赖项 | 副作用函数执行时机
:-: | :-:
没有依赖项 | 组件初始渲染+组件更新时执行
空数组依赖 | 只在初始渲染时执行一次
添加特定依赖项 | 组件初始渲染+特定依赖项变化时执行

- 清除useEffect副作用
在useEffect编写的由渲染本身引起的对接组件外部的操作，社区也经常把它叫做副作用操作，比如在useEffect中开启了一个定时器，我们想在组件卸载时把这个定时器清除掉，这个过程就叫做清除副作用
```javascript
useEffect(()=>{
    // 实现副作用操作逻辑

    return () => {
        // 清除副作用逻辑
    }
},[])
```
说明：清除useEffect副作用,最常见的执行时机就是组件卸载时自动执行

```javascript
import { useEffect } from 'react'

function Son(){

    useEffect(()=>{
        const timer setInterval(()=>{
            console.log('go count')
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

    return (
        <div> this is Son </div>
    )
}

function App(){
    const [flag,setFlag] = useState(true)
    return(
        <div>
           { flag &&  <Son></Son>}
           <button onClick={()=>setFlag(false)}>卸载Son组件</button>
        </div>
    )
}
```
