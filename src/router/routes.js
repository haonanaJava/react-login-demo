import App from '../App'
import React from 'react'
import { Route } from 'react-router-dom'
import Signup from '../components/Signup'

export default(
    <div className='container'>
        <Route exact path='/' component={App}></Route>
        <Route path='/signup' component={Signup}></Route>
    </div>
)
