---
title: React-JSX
date: 2023-11-01
---


# React
[markdown语法](https://blog.csdn.net/qq26983255/article/details/104495294)

## jsx语法和渲染


- jsx是什么？

> jsx是一个模版工具，内置了一些语法。本身不是js标准语法，他是js语言的语法扩展，浏览器本身无法识别，需要解析工具解析之后才能在浏览器运行

- jsx基本语法
``` javascript
let count = 100
function str(){
    return 'hello world'
}
function App(){
    return(
        <div>
                /**使用引号传递字符串 */
                { 'xxxx'}
                /**使用javascript变量 */
                {  count }
                /**函数调用方法调用 */
                { str() }
                /**使用javascript对象 */
                { new date().getDate()}
        </div>
    )
}
```
- jsx列表渲染
``` javascript
let list = [
    {id:1001,name:'lilei'},
    {id:1002,name:'hanmeimei'},
    {id:1003,name:'xiaoqiang'},
]

function App(){
    return(
        <div>
                {
                    list.map((item)=>{
                        <li :key={item.id}>{item.name}</li>
                    })
                }
        </div>
    )
}
```

- jsx条件渲染

1. 基础条件渲染
``` javascript
const isShow = false

function App(){
    return(
        <div>
            /** 逻辑与 && */
            {
                isShow && <span> 组件 </span>
            }
            /** 三元表达 */
            {
                isShow ? <span> 组件1 </span> : <span> 组件2 </span>
            }
        </div>
    )
}
```

2. 复杂条件渲染

``` javascript
const article = 0

function fragment(type){
    if(type == 0){
        return  <div> xxx1 </div>
    }else if(type == 1){
        return  <div> xxx2 </div>
    }else {
        return  <div> xxx3 </div>
    }
}

function App(){
    return(
        <div>
            /** 逻辑与 && */
            {
              fragment(article)
            }
            
        </div>
    )
}
```
