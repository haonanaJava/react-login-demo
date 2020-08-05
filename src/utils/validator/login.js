import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const validatorInput = (data) => {
  let errors = {}
  if (validator.isEmpty(data.username)) {
    errors.username = 'username is empty'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'password is empty'
  }
  return {
    errors,
    isValidator: isEmpty(errors),
  }
}

export default validatorInput
