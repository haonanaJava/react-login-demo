const mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'react-login-demo',
})

const sqlFn = (sql, arr, callback) => {
  connection.query(sql, arr, function (error, result) {
    if (error) {
      console.log(new Error(error))
      return
    }
    callback(result)
  })
}

//CommonJS 模块规范  exports or for instance
module.exports = sqlFn
