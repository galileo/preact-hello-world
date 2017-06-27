import { h, Component } from 'preact'
import User from './User'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        const { urls } = this.props.config
        const { user } = urls

        fetch(user)
            .then(res => res.json())
            .then(({name, avatar_url}) => ({ name, image: avatar_url }))
            .then(user => {
                this.setState({
                    user,
                    loading: false
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return this.state.loading
        ? <p>Loading, please wait ...</p>
        : <div class='app'>
            <User {...this.state.user} />
        </div>
    }
}

export default App
