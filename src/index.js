import { h, render } from 'preact' 
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Error from './components/Error'

render(<div>
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/profile/:username' component={Profile} />
      <Route component={Error} />
    </Switch>
  </Router>
</div>, document.querySelector('main'))
