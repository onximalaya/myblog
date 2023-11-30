---
title: useState
date: 2023-11-01
---



# useState
useState是一个react hook函数，允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果，与普通js变量不同的是，状态变量一旦发生变化，组件的UI视图也会跟着变化 数据驱动视图

useState是一个函数，返回值是一个数组
数组中第一个参数是状态变量，第二个参数是set函数用来修改状态变量
useState括号中参数将作为状态的初始值

1. 写法

```javascript
const [count ,setCount] = useState(0)
function handleClick(){
   setCount(count+1)
}

function App(){
    return(
        <div onClick={()=>handleClick()}></div>
    )
}
```

2. 状态不可变

在react当中，状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改他不会引发视图更新，下面例子：

```javascript
const [count ,setCount] = useState(0)
function handleClick(){
   /**直接修改 无法引发视图更新 */
   count++；
   console.log(count)

   /**
   *用传入的新值修改count
   *重新使用新的count渲染UI
    */
   setCount(count+1)
}

function App(){
    return(
        <div onClick={()=>handleClick()}></div>
    )
}
```

3. 修改对象状态

```javascript
const [form ,setForm] = useState({
    name:'jack'
})
function handleClick(){
   /**直接修改 无法引发视图更新 */
   form.name = 'zhangsan'
   console.log(form.name)

   /**
   *用传入的新值修改name属性
   *重新使用新的name属性渲染UI
    */
   setCount({
    ...form,
    name:'wangwu'
   })
}

function App(){
    return(
        <div onClick={()=>handleClick()}>{form.name}</div>
    )
}
```
4. 修改数组状态

```javascript
const [list ,setList] = useState([{
    name:'zhangsan',
    age:14
}])
function handleClick(){
   /**直接修改 无法引发视图更新 */
   list.push({ 
    name:'wangwu',
    age:14})
   console.log(list)

   /**
   *用传入的新值修改name属性
   *重新使用新的name属性渲染UI
    */
   setList([
    ...list,
    { 
        name:'wangwu',
        age:14
    }
   ])
}

function App(){
    return(
        <div onClick={()=>handleClick()}>{form.name}</div>
    )
}
```



ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

生成两个文件
.ssh/id_rsa
.ssh/id_rsa.pub


然后，你需要将你的公钥添加到你的GitHub账户的SSH密钥部分。这通常可以在账户设置的SSH和GPG密钥部分找到。


通过 cat ~/.ssh/id_rsa.pub 命令找到公钥

cat ~/.ssh/id_rsa.pub

复制内容到github上



本地执行下面命令，确保ssh-agent在后台运行，并将你的私钥添加到ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa


现在，你应该能够使用SSH方式连接到GitHub了。你可以通过尝试克隆一个仓库来测试你的SSH连接。


git clone git@github.com:username/repo.git