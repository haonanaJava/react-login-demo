import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import routes from './router/routes'
import NavigateBar from './components/NavigateBar'
import MessageList from './components/Message/MessageList'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/loginActions'
import jwtDecode from 'jwt-decode'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)
if (localStorage.getItem('jwtToken')) {
  setAuthorizationToken(localStorage.getItem('jwtToken'))
  store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('jwtToken'))))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router routes={routes}>
        <NavigateBar />
        <MessageList />
        {routes}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
