import { h, Component } from 'preact'
import linkState from 'linkstate'

class PrintCode extends Component {
    render(props, { text = 'Default value' }) {
        return <div>
            <input value={text} onInput={linkState(this, 'text')} />
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
    }
}

export default PrintCode
