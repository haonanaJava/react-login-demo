import React, { Component } from 'react';
import SignupForm from '../SignupForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions'
import * as messageActions from '../../actions/messages'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <SignupForm history={this.props.history} signupActions={this.props.signupActions} messageActions={this.props.messageActions} />
                </div>
                <div className='col-md-3'></div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupActions: bindActionCreators(signupActions,dispatch),
        messageActions: bindActionCreators(messageActions,dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Signup);