const express = require('express')
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')

const router = express.Router()

const validatorInput = (data) => {
    let errors = {}
    if ( validator.isEmpty(data.username)){
        errors.username = 'Please fill in the username'
    }
    if ( validator.isEmpty(data.email)){
        errors.email = 'Please fill in the email'
    }
    if ( validator.isEmpty(data.password)){
        errors.password = 'Please fill in the password'
    }
    if ( validator.isEmpty(data.passwordComfirm)){
        errors.passwordComfirm = 'Please fill in the passwordComfirm'
    }
    if ( !validator.equals(data.password, data.passwordComfirm)){
        errors.passwordIsEquals = 'the password is different'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post("/",(req,res) => {
    const { errors, isValid } = validatorInput(req.body)
    if( !isValid ) {
        res.status(400).json(errors)
    }else{
        res.send({
            isSuccess: true
        })
    }
    
})

module.exports = router