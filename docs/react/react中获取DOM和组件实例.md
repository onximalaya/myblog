---
title: react中获取DOM和组件实例
date: 2023-11-01
---




# react中获取DOM （ref）

::: tip
在react当中获取和操作dom，需要使用useRef钩子函数
1.使用useRef创建ref对象 并且与jsx绑定

``` javascript
const inputRef = useRef(null)
<input type='text' ref={inputRef}/>
```
2.在dom可用时，通过inputRef.current拿到dom对象

console.log(inputRef.current)
:::

