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
                setTimeout( () => {
                    this.setState({
                        user,
                        loading: false
                    })
                }, 2000)
            })
            .catch(err => console.error(err))
    }

    render({config}, {loading, user}) {
        return loading
        ? <p>Loading, please wait ... Fetching {config.urls.user}</p>
        : <div class='app'>
            <User {...user} />
        </div>
    }
}

export default App
