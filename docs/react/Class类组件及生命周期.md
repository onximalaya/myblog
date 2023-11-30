---
title: Class类组件及生命周期
date: 2023-11-01
---


# Class类组件

说明：类组件就是通过js中的类来组织组件的代码

```javascript
Class Counter extend Component{
    
    state = {
        count:0
    }
    
    clickHandle=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.clickHandle}>{this.state.count}</button>
            </div>
        )
    }

}

1.通过类组件属性state定义数据
2.通过setState方法修改状态数据
3.通过render方法来写UI模版（JSX语法一致）

```

# 类组件的生命周期

constructor

render

componentDidMount 组件挂载完自动执行 - 发起异步数据请求

componentDidUpdate

componentWillUnMount 组件卸载时自动执行 - 清除副作用