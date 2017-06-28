import { h, Component } from 'preact'
import { withRouter } from 'react-router-dom'
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
    const { history } = this.props
    const apiUrl = urls.user

    fetch(`${apiUrl}${this.props.user}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ups... There is an API Error')
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
      .catch(() => {
        console.error('Ups... API Error')
        history.push('/')
      })
  }

  render ({ config }, { loading, user }) {
    return loading
      ? <p>Loading, please wait ... Fetching {config.urls.user}</p>
      : <div class='app'>
        <User {...user} />
      </div>
  }
}

export default withRouter(App)
