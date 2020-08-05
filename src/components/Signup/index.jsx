import React, { Component, Fragment } from 'react'
import SignupForm from '../SignupForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions'
import * as messageActions from '../../actions/messages'
import ParticlesBg from 'particles-bg'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <SignupForm
              history={this.props.history}
              signupActions={this.props.signupActions}
              messageActions={this.props.messageActions}
            />
          </div>
          <div className='col-md-3'></div>
        </div>
        <ParticlesBg type='circle' bg={true} />
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupActions: bindActionCreators(signupActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Signup)
