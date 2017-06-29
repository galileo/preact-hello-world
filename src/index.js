import { h, render } from 'preact'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'preact-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import Home from './components/Home'
import Profile from './components/Profile'
import Error from './components/Error'
import reducer from './reducers/userReducer'

const initialState = { user: null, loading: true }

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const store = createStore(reducer, initialState, enhancer)

render(<div>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile/:username' component={Profile} />
        <Route component={Error} />
      </Switch>
    </Router>
  </Provider>
</div>, document.querySelector('main'))
