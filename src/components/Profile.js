import { h } from 'preact'
import { withRouter } from 'react-router-dom'
import App from './App'

const Profile = ({match}) => <App user={match.params.username} />

export default withRouter(Profile)
