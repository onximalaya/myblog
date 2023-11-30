---
title: react状态管理
date: 2023-11-01
---


# react状态管理

- redux 
使用步骤：
1.定义一个reducer函数（根据当前想要做的修改返回一个新的状态）
2.使用createStore方法传入reducer函数，生成一个store实例对象
3.使用store实例的subscribe方法订阅数据的变化，（数据一旦变化，可以得到通知）
4.使用store实例的dispatch方法提交action对象，触发数据变化（告诉reducer你想怎么改数据）
5.使用store实例的getState方法获取最新的状态数据更新到视图上


为了职能清晰，数据流向明确，Redux把整个数据修改流程分为了三个核心概念，分别是state，action和reducer

1. state  一个对象，存放着我们管理的数据状态
2. action 一个对象，用来描述你想怎么改数据
3. reducer 一个函数，根据action的描述生成一个新的state

在react中使用redux，官方推荐可以搭配两个工具使用 redux-Toolkit和react-redux

Redux-Toolkit是官方推荐书写Redux逻辑的方式，是一套工具的集合集，简化书写方式

优点：
1. 简化store的配置，
2. 内置immer支持可变式状态修改
3. 内置chunk更好的异步创建

react-redux是用来连接Redux和React组件的中间件,可以获取状态更新状态
redux-DevTools调试redux的工具

react-redux
zustand


# useReducer
作用：与useState类似，用来管理相对复杂的状态数据
基础用法：
1.定义一个reducer函数(根据不同的action返回不同的新状态)
2.在组件中调用useReducer，并传入reducer函数和状态的初始值
3.事件发生时，通过dispatch函数分派一个action对象，（通知reducer函数要返回哪个新状态并渲染UI）
```javascript
function reducer(state,action){
    //根据不同的action.type 返回新的state
    switch(action.type){
        case 'INC':
            return state+1;
        case 'DES':
            return state-1;
        case 'SET':
            return action.payload;
        default:
            return state
    }
}

const [state,dispatch] = useReducer(reducer,0)

dispatch({action:'INC'})
dispatch({action:'SET',payload:10})


```
