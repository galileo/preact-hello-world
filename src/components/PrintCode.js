import { h, Component } from 'preact'
import linkState from 'linkstate'

class PrintCode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: null
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render(props, { text = 'as'  }) {
        return <div>
            <form onSubmit={this.onSubmit}>
                <input
                    value={text}
                    onInput={linkState(this, 'text')}
                />
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </form>
        </div>
    }
}

export default PrintCode
