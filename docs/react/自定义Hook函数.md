---
title: 自定义Hook函数
date: 2023-11-01
---



# 自定义hook实现

自定义Hook就是以use打头的函数，通过自定义hook函数可以用来实现逻辑的封装和复用

实现一个按钮控制元素显示隐藏案例

不用自定义hook实现：

```javascript
import { useEffect } from 'react'

function App(){
    const [flag,setFlag] = useState(true)
    const toggle=()=>{
        setFlag(!flag)
    }   
    return(
        <div>
           { flag &&  <div>this is div</div>}
           <button onClick={toggle}>卸载Son组件</button>
        </div>
    )
}
```
- 思考，这里布尔切换的逻辑跟当前组件耦合在一起的，不方便进行复用，比如在其他组件当中也需要用到上面布尔切换的逻辑。解决思路就是自定义hook

自定义hook函数实现：

```javascript
import { useEffect,useState } from 'react'

function useToggle(){
    //可复用的逻辑代码
    const [flag,setFlag] = useState(true)
    const toggle=()=>{
        setFlag(!flag)
    }   
    // 哪些状态和回调函数需要在其他组件中使用 就return
    return{
        flag,
        toggle
    }
}

function App(){
    // 哪里需要这段逻辑就在那里引入
    const { flag, toggle} = useToggle();
    return(
        <div>
           { flag &&  <div>this is div</div>}
           <button onClick={toggle}>卸载Son组件</button>
        </div>
    )
}
```
1.声明一个以use开头的函数
2.在函数体内封装可复用的逻辑（只要是可复用的逻辑）
3.把组件用到的状态或者回调return出去，（以对象或数组）
4.在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用

- React自带的Hooks使用规则(自定义hooks除外)
1.只能在组件当中或者其他自定义Hook函数中调用
2.只能在组件的顶层调用，不能嵌套在if、for、其他函数中

错误例1：
```javascript
import { useState } from 'react'
const [str,setStr] = useState('')
function App(){
    return(
        <div>
           this is App
        </div>
    )
}
```

错误例2：
```javascript
import { useState } from 'react'
function App(){
    if(Math.random()<0.5){
        const [str,setStr] = useState('')
    }
    return(
        <div>
           this is App
        </div>
    )
}
```

json-server工具模拟数据操作

