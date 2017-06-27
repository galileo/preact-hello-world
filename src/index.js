import { h, render } from 'preact' 
import Router from 'preact-router'
import App from './components/App'
import PrintCode from './components/PrintCode'
import Home from './components/Home'
import Profile from './components/Profile'
import Error from './components/Error'

const config = {
    urls: {
        user: 'https://api.github.com/users/'
    }
}

render(<div>
    <Router>
        <Home path="/" />
        <Profile path="/profile/:username" config={config} />
        <Error default />
    </Router>
</div>, document.querySelector('main'))
