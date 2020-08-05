import App from '../App'
import React from 'react'
import { Route } from 'react-router-dom'
import Signup from '../components/Signup'
import LoginPage from '../views/login/LoginPage'
import shop from '../views/shop'
import requireAuth from '../utils/requireAuth'

export default (
  <div className='container'>
    <Route exact path='/' component={App}></Route>
    <Route path='/signup' component={Signup}></Route>
    <Route path='/login' component={LoginPage}></Route>
    <Route path='/shop' component={requireAuth(shop)}></Route>
  </div>
)
