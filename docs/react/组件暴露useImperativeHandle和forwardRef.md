---
title: 组件暴露useImperativeHandle和forwardRef
date: 2023-11-01
---

# React.forwardRef 
使用ref暴露Dom节点给父组件

场景：一个父组件包裹着一个子组件，父组件通过ref获取子组件内部的input元素让其聚焦


```javascript
//子组件
const Input = forwardRef((props,ref)=>{
    return <Input type='text' ref={ref}/> 
})
//父组件
function App(){
    const InputRef = useRef(null)
    const handleClick=()=>{
        console.log(InputRef);
        //让子组件聚焦
        InputRef.current.focus();
    }
    return(
        <div>
            <Input ref={InputRef}/>  
            <button onClick={handleClick}></button>
        </div>
    )
}

```

# useImperativeHandle
说明：通过ref暴露子组件中的方法

场景：一个父组件包裹着一个子组件，父组件通过调用子组件内部的focus方法实现聚焦


```javascript
//子组件
const Input = forwardRef((props,ref)=>{
    const inputRef = useRef(null);
    //实现聚焦的函数
    const focusHandle = () => {
        inputRef.current.focus()
    }
    //暴露函数给父组件调用
    useImperativeHandle(ref,()=>{
        return {
            //暴露的方法
            focusHandle
        }
    })
    return <Input type='text' ref={inputRef}/> 
})
//父组件
function App(){
    const SonRef = useRef(null)
    
    const focusHandle = ()=>{
        console.log(SonRef.current)
        SonRef.current.focusHandle()
    }
    return(
        <div>
            <Input ref={SonRef}/>  
            <button onClick={focusHandle}></button>
        </div>
    )
}

```
