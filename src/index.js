import { h, render } from 'preact'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'preact-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Home from './components/Home'
import Profile from './components/Profile'
import Error from './components/Error'
import reducer from './reducers/userReducer'

const store = createStore(
  reducer,
  { user: null, loading: true },
  applyMiddleware(thunk)
)

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
