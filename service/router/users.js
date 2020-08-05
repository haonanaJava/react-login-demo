const express = require('express')
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const sqlFn = require('../mysql')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

const validatorInput = (data) => {
  let errors = {}
  if (validator.isEmpty(data.username)) {
    errors.username = 'Please fill in the username'
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Please fill in the email'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Please fill in the password'
  }
  if (validator.isEmpty(data.passwordComfirm)) {
    errors.passwordComfirm = 'Please fill in the passwordComfirm'
  }
  if (!validator.equals(data.password, data.passwordComfirm)) {
    errors.passwordIsEquals = 'the password is different'
  }
  return {
    errors,
    isValid: isEmpty(errors),
  }
}

router.post('/signup', (req, res) => {
  const { errors, isValid } = validatorInput(req.body)
  let sql = 'insert into user values (null,?,?,?,?)'
  let arr = [
    req.body.username,
    req.body.password,
    req.body.passwordComfirm,
    req.body.email,
  ]
  if (isValid) {
    sqlFn(sql, arr, function (data) {
      console.log(data)
      if (data.affectedRows > 0) {
        res.send({ isSuccess: true })
      } else {
        res.status(400).json({ error: '注册失败' })
      }
    })
  } else {
    res.status(400).json(errors)
  }
})

router.post('/login', (req, res) => {
  // const { errors, isValid } = validatorInput(req.body)
  let sql = 'select * from user where `username` = ? and `password` = ?'
  const { username, password } = req.body
  console.log(req.body)
  const params = [username, password]
  sqlFn(sql, params, (data) => {
    if (data.length > 0) {
      const token = jwt.sign(
        {
          id: data[0].id,
          username: data[0].username,
        },
        config.jwtSecret
      )
      res.send(token)
    } else {
      res.status(401).json({ errors: { from: '用户名或密码错误' } })
    }
  })
})

router.get('/valid_un/:field', (req, res) => {
  let param = [req.params.field]
  let sql_username = 'select * from user where `username`= ?'

  sqlFn(sql_username, param, (data) => {
    if (data) {
      res.send(data)
    } else {
      res.send({})
    }
  })
})

router.get('/valid_em/:field', (req, res) => {
  let param = [req.params.field]
  let sql_email = 'select * from user where `email` = ?'
  sqlFn(sql_email, param, (data) => {
    if (data) {
      res.send(data)
    } else {
      res.send({})
    }
  })
})

module.exports = router
