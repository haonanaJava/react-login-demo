import React, { Component, Fragment } from 'react'
import LoginForm from '../../components/login/LoginForm'
import ParticlesBg from 'particles-bg'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../actions/loginActions'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <ParticlesBg type='cobweb' bg={true} />
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-6'>
            <LoginForm
              loginActions={this.props.loginActions}
              history={this.props.history}
            />
          </div>
          <div className='col-sm-3'></div>
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
