import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/loginActions'

class NavigateBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleClickLogout = (e) => {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    const { isAuthorized } = this.props.auth

    const userLinks = (
      <ul className='nav navbar-nav'>
        <li className='nav-item'>
          <Link to='/' onClick={this.handleClickLogout} className='nav-link'>
            退出
          </Link>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className='nav navbar-nav'>
        <li role='presentation'>
          <Link to='/login'>Login</Link>
        </li>
        <li role='presentation'>
          <Link to='/signup'>Sign Up</Link>
        </li>
      </ul>
    )
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav'>
              <li role='presentation'>
                <Link to='/'>Home</Link>
              </li>
              {isAuthorized ? userLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { logout })(NavigateBar)
