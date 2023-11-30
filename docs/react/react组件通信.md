---
title: react组件通信
date: 2023-11-01
---

# react组件通信

组件通信就是组件之间的数据传递，根据组件的嵌套关系 有不同的通信方法

1. 父子通信

父组件传递数据-在子组件标签上绑定属性
子组件接收数据-子组件通过props获取参数

```javascript
function Son(props){
    console.log(props);
    return  (
        <div>
           {props.name}
        </div>
    )
}
function App(){
    const name = '123'
    return(
        <div>
            <Son name={ name } />
        </div>
    )
}
```

props可以传递任意数据类型，数字、字符串、布尔、数组、对象、函数

```javascript
function App(){
    const name = '123'
    return(
        <div>
            <Son 
            name={ name }
            age={ 20 }
            isTrue={ true }
            list={ [1,2] }
            obj={{ name:'jack' }}
            cb={()=>console.log(222)}
            child={<span>this is span child</span>}
            />
        </div>
    )
}
```
props 是只读对象
子组件只能读取props中的数据，不能直接进行修改，父组件的值只能有父组件修改

```javascript
function App(){
    const name = '123'
    return(
        <div>
            <Son 
            name={ name }
            age={ 20 }
            isTrue={ true }
            list={ [1,2] }
            obj={{ name:'jack' }}
            cb={()=>console.log(222)}
            child={<span>this is span child</span>}
            />
        </div>
    )
}
```

父传子特殊的props children
当我们把内容嵌套在自组件的标签页中，父组件会自动在名为children的prop属性中接收该内容

```javascript
function Son(props){
    return (
        <div>{props.children}</div>
    )
}

function App(){
    return(
        <div>
            <Son>
                 <span>this is name</span>
            </Son>
        </div>
    )
}
```


2. 子传父

在子组件中调用父组件中的函数并传递参数

```javascript
function Son({OnGetMsg}){
    const sonMsg = 'this is send msg'
    return (
        <div onClick={()=>OnGetMsg(sonMsg)}> send </div>
    )
}

function App(){
    const getMsg = (msg)=>{
        console.log(msg)
    }
    return(
        <div>
            <Son OnGetMsg={getMsg}>
                 
            </Son>
        </div>
    )
}
```



3. 兄弟通信

使用状态提升来实现兄弟组件通信，借助父组件进行兄弟组件之间的数据传递
A组件先通过子传父将数据传递给父组件APP
App组件拿到数据后再通过父传子传递给B组件


```javascript
function A({OnGetMsg}){
    const sonMsg = 'this is send msg'
    return (
        <div onClick={()=>OnGetMsg(sonMsg)}> send </div>
    )
}

function B(props){
    return (
        <div> props from str {props.name} </div>
    )
}

function App(){
    const [msg,setMsg] = useState('')
    const getMsg = (msg)=>{
        console.log(msg)
        setMsg(msg)
    }
    return(
        <div>
            <A OnGetMsg={getMsg}></A>
            <B ></B>
        </div>
    )
}
```

