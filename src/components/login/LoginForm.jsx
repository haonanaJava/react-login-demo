import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import validatorInput from '../../utils/validator/login'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { errors: {}, isLoading: false, username: '', password: '' }
  }

  isValid = () => {
    const { errors, isValidator } = validatorInput(this.state)
    if (!isValidator) {
      this.setState({ errors })
    }
    return isValidator
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()) {
      const { username, password } = this.state
      this.setState({ errors: {}, isLoading: true })
      this.props.loginActions
        .loginRequest({ username, password })
        .then((res) => {
          this.props.history.push('/')
        })
        .catch((err) => {
          this.setState({ errors: err.response.data.errors, isLoading: false })
        })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { errors, isLoading } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          {errors.from && (
            <div className='alert alert-danger'>{errors.from}</div>
          )}
          <div className='form-group'>
            <label className='control-label'>Username</label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.onChange}
              className='form-control'
            />
            {errors.username && (
              <span className='form-text text-muted'>{errors.username}</span>
            )}
          </div>
          <div className='form-group'>
            <label className='control-label'>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
              className='form-control'
            />
            {errors.password && (
              <span className='form-text text-muted'>{errors.password}</span>
            )}
          </div>
          <div className='form-group'>
            <button disabled={isLoading} className='btn btn-primary btn-lg'>
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
