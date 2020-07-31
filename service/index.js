const express = require('express')
const app = express()
const users = require('./router/users')
const debug = require('debug')('my-application')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use("/api/users",users)

app.listen(3030,(req,res) => {
    debug('服务器启动，端口3030');
})