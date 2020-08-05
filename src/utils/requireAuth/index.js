import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/messages'
import { withRouter } from 'react-router-dom'

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthorized) {
        this.props.addMessage({
          type: 'danger',
          text: '请先登录',
        })
        this.props.history.push('/login')
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthorized) {
        this.props.history.push('/login')
      }
    }
    render() {
      return <ComposedComponent {...this.props}></ComposedComponent>
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthorized: state.auth.isAuthorized,
    }
  }
  return withRouter(connect(mapStateToProps, { addMessage })(Authenticate))
}
