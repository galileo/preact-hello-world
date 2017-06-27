import { h, render } from 'preact' 
import App from './components/App'
import PrintCode from './components/PrintCode'

const config = {
    urls: {
        user: 'https://api.github.com/users/galileo'
    }
}

render(<div>
    <App config={config} />
    <PrintCode />
</div>, document.querySelector('main'))
