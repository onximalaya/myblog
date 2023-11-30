---
title: EXPRESS 结构设计
date: 2023-11-01
---

::: tip 
在Express应用中，我们可以按照Controller-Service-Mapper的结构来设计我们的应用。
以下是一个简单的步骤：

:::

1. 创建Controller：Controller负责处理HTTP请求和响应。它将请求转发给Service。
2. 创建Service：Service负责处理业务逻辑。它从Controller接收请求，处理业务逻辑，然后将结果返回给Controller。
3. 创建Mapper：Mapper负责与数据库交互。它从Service接收请求，执行数据库操作，然后将结果返回给Service。
```javascript

// controller.js
const express = require('express');
const router = express.Router();
const userService = require('./service');

router.get('/user/:id', async function (req, res, next) {
  const user = await userService.getUser(req.params.id);
  res.send(user);
});

module.exports = router;

// service.js
const userMapper = require('./mapper');

async function getUser(id) {
  return await userMapper.getUser(id);
}

module.exports = { getUser };

// mapper.js
const db = require('./db');

async function getUser(id) {
  return await db.query('SELECT * FROM users WHERE id = ?', [id]);
}

module.exports = { getUser };


```
::: tip 总结
在这个示例中，我们创建了一个Controller，它接收HTTP请求并将其转发给Service。Service处理业务逻辑并将请求转发给Mapper。Mapper执行数据库操作并将结果返回给Service，然后Service将结果返回给Controller，最后Controller将结果返回给客户端。
:::

