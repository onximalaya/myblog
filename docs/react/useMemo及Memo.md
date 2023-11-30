---
title: useMemo及Memo
date: 2023-11-01
---



# useMemo
作用：在组件每次重新渲染的时候缓存计算的结果 ，计算量比较大的情况

```javascript
useMemo(()=>{
    //根据count1返回计算结果
},[count1])

```

说明：使用useMemo做缓存后可以保证只有count1依赖项发生变化时才会重新计算

```javascript
import {useState} from 'react'

function fib(n){
    console.log('函数计算了')
    if(n<3) {
        return 1
    }
    return fib(n-2)+fib(n-1)
}

// 优化前 点击count1和count2的按钮都会重复执行fib函数和组件重新渲染，但明显我们只想要count1变化

function App(){
    const [count1,setCount1] = useState(0);

    const result = fib(count1)
    const [count2,setCount2] = useState(0)
    console.log('组件重新渲染了')
    return(
        <div>
            <button onClick={()=>setCount1(count1+1)}>add count1</button>
            <button onClick={()=>setCount2(count2+1)}>add count2</button>
            <div>{result}</div>
        </div>
    )
}

//优化后
function App(){
    const [count1,setCount1] = useState(0);

    const result =  useMemo(()=>{
       //返回计算的结果
       return fib(count1)
    },[count1])

    const [count2,setCount2] = useState(0)
    console.log('组件重新渲染了')
    return(
        <div>
            <button onClick={()=>setCount1(count1+1)}>add count1</button>
            <button onClick={()=>setCount2(count2+1)}>add count2</button>
            <div>{result}</div>
        </div>
    )
}


```

# React.memo
说明：允许组件在props 没有改变的情况下跳过渲染
我们要了解这个事儿的话，就得了解React本身的渲染机制
React组件默认的渲染机制，只要父组件渲染，子组件就跟着无脑重新渲染

思考：如果子组件本身不需要做渲染更新，是不是存在性能浪费？

语法：
```javascript
import { memo,useState } from 'react'

const MemoComponent = memo( function SomeComponent(props) {
    //经过memo包裹生成的缓存组件只有在props发生变化时候才会重新渲染
})

// 优化前, 子组件无脑跟着父组件无脑渲染

function Son(){
    console.log('子组件重新渲染')
    return(
        <div>
        我是子组件
        </div>
    )

}
function App(){
    console.log('父组件重新渲染')
    const [count,setCount] = useState(0)
    return(
        <div>
        <Son data={str}></Son>
        <button onClick={()=>setCount(count+1)}></button>
        </div>
    )
}
```
```javascript
// 优化后，props不改变不渲染
import { memo,useState } from 'react'

<!-- function Son(){
    console.log('子组件重新渲染')
    return(
        <div>
        我是子组件
        </div>
    )
} -->

const MemoSon = memo(function Son(){
    console.log('子组件重新渲染')
    return(
        <div>
        我是子组件
        </div>
    )
})
function App(){
    console.log('父组件重新渲染')
    const [count,setCount] = useState(0)
    return(
        <div>
        <!-- <Son></Son> -->
        <MemoSon></MemoSon>
        <button onClick={()=>setCount(count+1)}></button>
        </div>
    )
}
```
1. React.memo的比较机制
机制：在使用memo缓存组件之后，React会对每一个prop使用Object.is比较新值和旧值，
返回true表示没有变化
```javascript
//prop 是简单类型
Object.is(3,3) // true 没有变化

//prop是引用类型 （对象/数组）

Object.is([],[]) // false 有变化，React只关心引用是否变化

```

```javascript
const MemoSon = memo(function Son(){
    console.log('子组件重新渲染')
    return(
        <div>
        我是子组件
        </div>
    )
})
function App(){
    console.log('父组件重新渲染')
    const [count,setCount] = useState(0)
    let num = 123      //1.基本类型 prop发生变化时子组件重新渲染
    //let list = [1,2,3] //2. 当父组件的函数重新执行，实际形成了新的数组引用，会造成子组件重新渲染
                       //3.为了保证引用稳定 可以使用useMemo
    const list = useMemo(()=>{
        return [1,2,3]
    },[])
    return(
        <div>
        <!-- <Son count={123}></Son> -->
        <Son count={list}></Son>

        <button onClick={()=>setCount(count+1)}></button>
        </div>
    )
}

```
