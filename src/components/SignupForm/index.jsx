import React, { Component } from 'react';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            passwordComfirm: '',
            errors: {},
            isLoading: false,
            isSuccess: false,
         };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        this.setState({
            isLoading: true
        })
        this.props.signupActions.userSignupRequest(this.state).then(
            (value) => {
                this.props.messageActions.addMessage({
                    type: 'success',
                    text: '注冊成功,歡迎加入社區！'
                })
                this.setState({
                    isSuccess: true
                })
                if (this.state.isSuccess){
                    this.props.history.push('/')
                }
            },
            ({response}) => {
                this.setState({
                    errors: response.data,
                    isLoading: false
                })
            }
        )
        e.preventDefault()
    }
    render() {
        const { errors, isLoading} = this.state
        return (
            <form onSubmit={ this.onSubmit }>
                <h1>Join Our Community</h1>
                <div className='form-group'>
                    <label className='control-label'>Username</label>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={ this.onChange }
                        className='form-control'
                    />
                    { errors.username && <span className='form-text text-muted'>{errors.username}</span>}
                </div>
                
                <div className='form-group'>
                    <label className='control-label'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={ this.onChange }
                        className='form-control'
                    />
                    { errors.email && <span className='form-text text-muted'>{errors.email}</span>}
                </div>

                <div className='form-group'>
                    <label className='control-label'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={ this.onChange }
                        className='form-control'
                    />
                    { errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>

                <div className='form-group'>
                    <label className='control-label'>PasswordComfirm</label>
                    <input
                        type='password'
                        name='passwordComfirm'
                        value={this.state.passwordComfirm}
                        onChange={ this.onChange }
                        className='form-control'
                    />
                    { errors.passwordComfirm && <span className='form-text text-muted'>{errors.passwordComfirm}</span>}
                </div>


                <div className='form-group'>
                    <div className="col-sm-offset-4 col-sm-10">
                        <button disabled={  isLoading } type="submit" className="btn btn-primary btn-lg">Sign in</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SignupForm;