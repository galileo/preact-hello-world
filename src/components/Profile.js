import { h } from 'preact'
import App from './App'

const Profile = ({username, config}) => {
    return <App config={config} user={username} />
}

export default Profile
