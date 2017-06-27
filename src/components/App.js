import { h, Component } from 'preact'
import { route } from 'preact-router'
import User from './User'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      loading: true
    }
  }

  componentDidMount () {
    const { urls } = this.props.config
    const apiUrl = urls.user

    fetch(`${apiUrl}${this.props.user}`)
      .then(res => {
        if (!res.ok) {
          throw Error('Ups... There is an API Error')
        }

        return res.json()
      })
      .then(({ name, avatar_url }) => ({ name, image: avatar_url }))
      .then(user => {
        this.setState({
          user,
          loading: false
        })
      })
      .catch(() => route('/'))
  }

  render ({ config }, { loading, user }) {
    return loading
      ? <p>Loading, please wait ... Fetching {config.urls.user}</p>
      : <div class='app'>
        <User {...user} />
      </div>
  }
}

export default App
