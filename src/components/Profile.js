import { h } from 'preact'
import { withRouter } from 'react-router-dom'
import App from './App'

const config = {
  urls: {
    user: 'https://api.github.com/users/'
  }
}

const Profile = ({match}) => <App config={config} user={match.params.username} />

export default withRouter(Profile)
